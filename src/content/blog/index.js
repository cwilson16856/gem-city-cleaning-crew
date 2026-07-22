// Self-hosted blog content index.
// Each entry pairs post metadata with its HTML body (imported from ./posts/{slug}.js).
// Newest posts go first in the array.

import ragweedSeasonDaytonAllergyCleaningContent from './posts/ragweed-season-dayton-allergy-cleaning.js'

const posts = [
  {
    slug: 'ragweed-season-dayton-allergy-cleaning',
    title: 'Ragweed Season in Dayton: How to Allergy-Proof Your Home',
    description: 'Ragweed season runs mid-August through November in the Miami Valley. Here’s the room-by-room checklist that cuts down what you’re breathing indoors.',
    publishedAt: '2026-07-22',
    updatedAt: '2026-07-22',
    author: 'Gem City Cleaning Crew Team',
    category: 'Local Guides & Seasonal',
    tags: ['allergy cleaning', 'ragweed season', 'fall cleaning', 'Dayton'],
    keywords: [
      'ragweed allergy cleaning Dayton',
      'reduce ragweed pollen in house',
      'fall allergy deep clean checklist',
      'allergy proofing home fall',
      'HEPA vacuum for allergies',
      'how often should you clean during ragweed season',
      'does deep cleaning help ragweed allergies',
      'when does ragweed season end in Ohio',
    ],
    problem: 'Ragweed season hits the Miami Valley every fall, and most cleaning advice online is generic, non-local, and vague about timing.',
    solution: 'A room-by-room cleaning checklist tied to real Dayton-area ragweed season dates and peak pollen hours.',
    targetAudience: 'Dayton-area homeowners dealing with fall ragweed allergies',
    coverImage: '/images/blog/ragweed-season-dayton-allergy-cleaning.png',
    featured: false,
    content: ragweedSeasonDaytonAllergyCleaningContent,
    faqs: [
      {
        question: 'When does ragweed season start and end in Ohio?',
        answer: 'In the Miami Valley, ragweed season typically runs from mid-August through November, per Public Health – Dayton & Montgomery County. It’s the region’s leading cause of fall hay fever, and counts usually peak in September before tapering off with the first hard frost.',
      },
      {
        question: 'Does deep cleaning actually help with ragweed allergies?',
        answer: 'Yes — it reduces the amount of pollen recirculating indoors, particularly in carpets, upholstery, bedding, and HVAC systems where it settles and builds up. It won’t stop pollen from existing outside, but it meaningfully cuts down what you’re breathing while you’re home, which is where most people spend the bulk of allergy season.',
      },
      {
        question: 'How often should you vacuum during allergy season?',
        answer: 'Once a week is a reasonable baseline; twice a week is better in carpeted rooms during peak ragweed weeks (typically September). Use a vacuum with a true HEPA filter — a standard filter traps larger debris but lets fine pollen particles pass back through into the room.',
      },
      {
        question: 'What’s the best way to dust without spreading allergens?',
        answer: 'Use a damp microfiber cloth instead of a dry duster or feather duster, and work from the highest surfaces down to the floor. A dry cloth just lifts particles into the air where they resettle somewhere else — usually back on you.',
      },
      {
        question: 'Do air purifiers help with ragweed pollen?',
        answer: 'Yes, if they use a true HEPA filter. Placement matters more than most people expect — put one in the room you spend the most time in (usually the bedroom or living room) rather than trying to cover the whole house with a single unit.',
      },
      {
        question: 'Should you keep windows open or closed during ragweed season?',
        answer: 'Closed, especially between 10 a.m. and 4 p.m. when local pollen counts peak. Running central air instead of opening windows keeps the indoor air filtered and dry, which also helps limit mold growth — a second common fall allergen.',
      },
    ],
    howToTitle: 'How to Allergy-Proof Your Home for Ragweed Season',
    howToSteps: [
      { name: 'Clean the entryway', text: 'Shake out or vacuum mats and wipe down the floor near the door weekly — this is where most outdoor pollen first enters the house.' },
      { name: 'Vacuum floors and carpets', text: 'Vacuum with a true HEPA-filter vacuum 1–2 times a week. Carpet holds pollen far longer than hard flooring.' },
      { name: 'Wash bedding and linens', text: 'Wash sheets, pillowcases, and throws in hot water weekly — pollen carried in on hair and clothes settles here.' },
      { name: 'Check HVAC vents and filters', text: 'Wipe down vent covers and check or replace the HVAC filter monthly during peak season so it isn’t recirculating what it’s supposed to catch.' },
      { name: 'Clean upholstery and curtains', text: 'Vacuum upholstery with an attachment and launder washable curtains every 2–3 weeks — soft surfaces trap pollen the same way carpet does.' },
    ],
  },
]

export const getAllPosts = () => posts

export const getPostBySlug = (slug) => posts.find((post) => post.slug === slug) || null

export default posts
