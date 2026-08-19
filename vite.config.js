import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Config-as-function (not a plain object) so build.rollupOptions.manualChunks
// can be scoped to the client build only. Vite runs the SAME `build` config
// for both `vite build` (client) and `vite build --ssr ...` (the SSR bundle
// scripts/prerender.js consumes) unless something here branches on
// `isSsrBuild`. manualChunks specifically can't apply to the SSR build at
// all — react/react-dom are externalized there (see the `ssr` block below),
// and Rollup errors outright if you ask it to manualChunk a module that's
// already marked external ("react cannot be included in manualChunks
// because it is resolved as an external module").
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: isSsrBuild ? 'dist-ssr' : 'dist',
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
      mangle: {
        safari10: true,
      },
    },
    rollupOptions: {
      output: isSsrBuild ? {} : {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          utils: ['date-fns', 'dompurify']
        }
      }
    },
    chunkSizeWarningLimit: 600
  },
  ssr: {
    // By default Vite externalizes SSR deps to Node's native ESM loader
    // instead of bundling them through its own plugin pipeline. That trips
    // over real interop gaps in this app's dependency tree, confirmed
    // one at a time: react-helmet-async ships as CommonJS and Node's loader
    // can't statically resolve its named exports (`{ Helmet, HelmetProvider }`);
    // @mui/icons-material's ESM build does a directory import into
    // @mui/material/utils that Node's native ESM resolver rejects outright
    // (ERR_UNSUPPORTED_DIR_IMPORT). noExternal for just these bundles them
    // through Vite/Rollup instead (the same resolution path the client build
    // already uses successfully), sidestepping both.
    //
    // Deliberately NOT `noExternal: true` (bundle everything) — tried that
    // first, and it broke react/react-dom's own CJS entry points (Vite's
    // SSR bundling pipeline doesn't shim a `module` global for arbitrary
    // deeply-bundled CJS the way Node's native `require` does). React needs
    // to stay externalized to Node's native resolution, which already
    // handles it correctly.
    //
    // Also confirmed that noExternal-ing @mui/material alone isn't enough:
    // it internally imports @mui/utils/@mui/system/@emotion/* by default
    // import, and a *partially* bundled MUI/Emotion dependency graph (some
    // packages processed by Vite, their siblings still externalized to
    // Node's native loader) breaks that interop too
    // (`__vite_ssr_import_1__.default is not a function` inside
    // createPalette.js). Bundling the whole @mui/* and @emotion/* families
    // together, consistently, is what actually fixes it.
    noExternal: ['react-helmet-async', /^@mui\//, /^@emotion\//],
  },
}))