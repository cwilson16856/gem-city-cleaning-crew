import { useEffect, useRef, useState } from 'react'

// Renders nothing but a fixed-size placeholder div until the element is
// within `rootMargin` of the viewport, then mounts the real iframe. SSR-safe
// by construction: useEffect never runs during renderToString(), so the
// server (and the pre-hydration client paint on "/", the one hydrated
// route) always emit the same placeholder-only markup -- no hydration
// mismatch risk. See src/main.jsx for why "/" hydration is this fragile.
//
// Added 2026-09-11 SEO audit follow-up, "mobile LCP still Poor" finding --
// the Maps embed was previously an always-mounted <iframe loading="lazy">;
// native loading="lazy" only defers the fetch, not the DOM node's existence,
// and its viewport-proximity heuristic isn't independently controllable.
// This makes "don't mount until near-viewport" deterministic instead.
const LazyMapEmbed = ({ src, title, className }) => {
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (shouldLoad) return
    const node = containerRef.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true) // fail open on very old browsers -- same behavior as today's eager iframe
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' } // start the fetch slightly before it's actually visible, avoids a blank flash on fast scroll
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <div ref={containerRef} className={className} style={{ width: '100%', height: '100%' }}>
      {shouldLoad && (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: '100%', height: '100%', border: 0 }}
        />
      )}
    </div>
  )
}

export default LazyMapEmbed
