// Regenerates public/sitemap.xml and public/llms.txt from the current route list
// and the blog content index (src/content/blog/index.js). Single source of truth —
// run this after adding/updating a blog post instead of hand-editing either file.
//
// Usage: node scripts/generate-sitemap-and-llms.js

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getAllPosts } from '../src/content/blog/index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const SITE_URL = 'https://gemcitycleaningcrew.com'
const TODAY = new Date().toISOString().split('T')[0]

// Static, non-dynamic routes (matches src/App.jsx's <Route> list).
const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/residential', changefreq: 'monthly', priority: '0.9' },
  { path: '/residential-house-cleaning-checklist', changefreq: 'monthly', priority: '0.7' },
  { path: '/recurring-cleaning-service', changefreq: 'monthly', priority: '0.9' },
  { path: '/deep-cleaning', changefreq: 'monthly', priority: '0.9' },
  { path: '/move-in-out-cleaning', changefreq: 'monthly', priority: '0.8' },
  { path: '/move-in-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/move-out-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/airbnb-cleaning-service', changefreq: 'monthly', priority: '0.7' },
  { path: '/apartment-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/condo-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/kitchen-cleaning-services', changefreq: 'monthly', priority: '0.6' },
  { path: '/bathroom-cleaning-services', changefreq: 'monthly', priority: '0.6' },
  { path: '/commercial', changefreq: 'monthly', priority: '0.9' },
  { path: '/commercial-one-time-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/office-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/office-cleaning-checklist', changefreq: 'monthly', priority: '0.6' },
  { path: '/retail-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/school-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/apartment-building-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/industrial-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/locations', changefreq: 'monthly', priority: '0.8' },
  { path: '/quote', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/about-us', changefreq: 'monthly', priority: '0.6' },
]

// City slugs with dedicated location pages (matches src/pages/LocationPage.jsx's
// `locations` array). Beavercreek's commercial page has a special dedicated route.
const LOCATION_CITIES = [
  'dayton', 'kettering', 'oakwood', 'centerville', 'miamisburg', 'springboro',
  'huber-heights', 'riverside', 'xenia', 'beavercreek', 'fairborn',
  'yellow-springs', 'tipp-city', 'bellbrook', 'vandalia', 'troy',
]

for (const city of LOCATION_CITIES) {
  STATIC_ROUTES.push({ path: `/locations/${city}/house-cleaning-services`, changefreq: 'monthly', priority: '0.6' })
  STATIC_ROUTES.push({
    path: city === 'beavercreek'
      ? '/locations/beavercreek/commercial-services'
      : `/locations/${city}/commercial-cleaning-services`,
    changefreq: 'monthly',
    priority: '0.6',
  })
}

function buildSitemap(posts) {
  const urlEntries = STATIC_ROUTES.map(({ path: routePath, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${routePath}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`)

  const postEntries = posts.map((post) => `  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.updatedAt || post.publishedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${SITE_URL}${post.coverImage}</image:loc>
      <image:title>${escapeXml(post.title)}</image:title>
    </image:image>
  </url>`)

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${[...urlEntries, ...postEntries].join('\n')}
</urlset>
`
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function buildLlmsTxt(posts) {
  const services = [
    ['House Cleaning', '/residential'],
    ['Recurring Cleaning', '/recurring-cleaning-service'],
    ['Deep Cleaning', '/deep-cleaning'],
    ['Move In / Move Out Cleaning', '/move-in-out-cleaning'],
    ['Airbnb Cleaning', '/airbnb-cleaning-service'],
    ['Office & Commercial Cleaning', '/commercial'],
    ['Retail Cleaning', '/retail-cleaning'],
    ['Industrial Cleaning', '/industrial-cleaning'],
  ]

  const serviceAreas = [
    'Dayton', 'Kettering', 'Oakwood', 'Centerville', 'Miamisburg', 'Springboro',
    'Huber Heights', 'Riverside', 'Xenia', 'Beavercreek', 'Fairborn',
    'Yellow Springs', 'Tipp City', 'Bellbrook', 'Vandalia', 'Troy',
    'Springfield', 'Franklin', 'Middletown', 'Carlisle',
  ]

  const lines = []
  lines.push('# Gem City Cleaning Crew')
  lines.push('')
  lines.push('> Professional residential and commercial cleaning services in Dayton, OH. No contracts, free quotes, serving the greater Dayton area since 2017.')
  lines.push('')
  lines.push('## Services')
  lines.push('')
  for (const [name, servicePath] of services) {
    lines.push(`- [${name}](${SITE_URL}${servicePath})`)
  }
  lines.push('')
  lines.push('## Service Areas')
  lines.push('')
  lines.push(`Serving Dayton and the surrounding Miami Valley (30+ miles), including: ${serviceAreas.join(', ')}.`)
  lines.push(`See all locations: ${SITE_URL}/locations`)
  lines.push('')
  lines.push('## Blog')
  lines.push('')
  if (posts.length === 0) {
    lines.push('No posts published yet.')
  } else {
    for (const post of posts) {
      lines.push(`- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.description}`)
    }
  }
  lines.push('')
  lines.push('## Contact')
  lines.push('')
  lines.push('- Phone: 937-892-4157')
  lines.push('- Email: info@gemcitycleaningcrew.com')
  lines.push(`- Get a quote: ${SITE_URL}/quote`)
  lines.push('')

  return lines.join('\n')
}

function main() {
  const posts = getAllPosts()

  const sitemapXml = buildSitemap(posts)
  fs.writeFileSync(path.join(ROOT, 'public', 'sitemap.xml'), sitemapXml)
  console.log(`Wrote public/sitemap.xml (${STATIC_ROUTES.length} static routes + ${posts.length} blog posts)`)

  const llmsTxt = buildLlmsTxt(posts)
  fs.writeFileSync(path.join(ROOT, 'public', 'llms.txt'), llmsTxt)
  console.log(`Wrote public/llms.txt (${posts.length} blog posts)`)
}

main()
