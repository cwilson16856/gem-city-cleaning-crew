// Canonical, GBP-sourced testimonial data. Single source of truth for
// TrustBlock.jsx and RecurringCleaningPage.jsx -- extracted 2026-09-13 SEO
// audit follow-up, "testimonial duplication" finding: the same review text
// had drifted into two different rewritten forms across pages with
// inconsistent attribution. Every fact below is a real, dated Google review
// pulled live via the OpenSEO GBP lookup; nothing here is invented.

export const VERIFIED_REVIEWS = [
  {
    name: 'Amanda T.',
    date: '2025-03-20',
    rating: 5,
    platform: 'Google review',
    text: "I have been using Gem City for four years now and am consistently happy with their service. I typically have the same cleaner who always does amazing, but have always been impressed with others on the team when I've needed to reschedule. Can't recommend them enough."
  },
  {
    name: 'Anne B.',
    date: '2024-10-15',
    rating: 5,
    platform: 'Google review',
    text: "I've been using Gem City cleaning for 3 years, and I am very happy with the job they do. Consistent, reliable, positive, trustworthy. If ever I've had concerns, they make it right quickly."
  },
  {
    name: 'Valerie P.',
    date: '2023-09-29',
    rating: 5,
    platform: 'Google review',
    text: 'Gem City has been cleaning our house for several months. Can not say enough positive things about Chris and Macy and their cleaning crews - they take their time and leave no spots untouched. All are reliable and treat each clean as if they were cleaning their own homes! Will be with Gem City until the end of time!'
  }
]

export const formatReviewDate = (dateStr) =>
  new Date(`${dateStr}T00:00:00`).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
