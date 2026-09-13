// Minimal CSP violation-report collector for the report-only soak period
// (2026-09-11 SEO audit follow-up, "CSP still report-only" finding). This
// repo has no existing logging infrastructure (no Discord-webhook logger --
// that convention belongs to the separate cleaning-tools-back/GCCT stack),
// so Vercel's own Function Logs dashboard is the sole, deliberate sink here.
// console.log is intentional and permanent for this one diagnostic endpoint,
// not debug scaffolding.
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  console.log('[csp-report]', JSON.stringify(req.body))
  res.status(204).end()
}
