// Lightweight blog post metadata — the single source of truth for every post's
// *listing-need* fields (used by the homepage's recent-posts widget and the
// /blog card grid). Deliberately does NOT import any ./posts/{slug}.js content
// file, so pages that only ever render a title/description/date/cover image
// don't pull all 20 posts' full HTML bodies into their JS chunk.
// Full post content lives in src/content/blog/index.js, which merges this
// metadata back in per-slug for consumers that need it (PostPage.jsx via
// getPostBySlug/getAllPosts).

export const POSTS_META = [
  {
    "slug": "how-to-clean-organize-laundry-room-dayton",
    "title": "How to Clean and Organize a Laundry Room in Dayton",
    "description": "Your washer smells musty and the dryer vent's clogged with lint. Here's a Dayton homeowner's step-by-step laundry room deep-clean and organizing guide.",
    "publishedAt": "2026-09-15",
    "updatedAt": "2026-09-15",
    "author": "Gem City Cleaning Crew Team",
    "category": "Cleaning Tips",
    "tags": [
      "laundry room",
      "home organization",
      "appliance care",
      "Dayton hard water",
      "house cleaning tips"
    ],
    "coverImage": "/images/blog/how-to-clean-organize-laundry-room-dayton.png",
    "featured": false
  },
  {
    "slug": "deep-cleaning-guide-dayton",
    "title": "Deep Cleaning in Dayton, OH: What's Actually Included",
    "description": "Deep clean doesn't mean extra thorough. Here's what it actually covers that regular cleaning skips, and how often your Dayton home really needs one.",
    "publishedAt": "2026-09-11",
    "updatedAt": "2026-09-11",
    "author": "Chris Wilson",
    "category": "Cleaning Tips",
    "tags": [
      "deep cleaning",
      "Dayton",
      "recurring cleaning",
      "move-out cleaning",
      "home maintenance"
    ],
    "coverImage": "/images/blog/deep-cleaning-guide-dayton.png",
    "featured": true
  },
  {
    "slug": "move-out-transitions-guide-dayton",
    "title": "Move-Out & Move-In Cleaning: The Complete Dayton Guide",
    "description": "Ohio landlords have 30 days to return your deposit or itemize why they didn't. Here's what actually gets checked at move-out, and what most movers miss.",
    "publishedAt": "2026-09-11",
    "updatedAt": "2026-09-11",
    "author": "Chris Wilson",
    "category": "Moving & Turnover",
    "tags": [
      "move-out cleaning",
      "move-in cleaning",
      "security deposit",
      "Dayton",
      "renters",
      "home sellers"
    ],
    "coverImage": "/images/blog/move-out-transitions-guide-dayton.png",
    "featured": false
  },
  {
    "slug": "hiring-cleaning-service-guide-dayton",
    "title": "How to Choose & Budget for a Cleaning Service in Dayton",
    "description": "Your kitchen looks clean. It isn't. Here's what actually drives cleaning cost, which frequency fits your home, and the red flags that mean walk away.",
    "publishedAt": "2026-09-11",
    "updatedAt": "2026-09-11",
    "author": "Chris Wilson",
    "category": "Cleaning Tips",
    "tags": [
      "hiring a cleaning service",
      "cleaning cost",
      "Dayton cleaning company",
      "recurring cleaning",
      "move cleaning"
    ],
    "coverImage": "/images/blog/hiring-cleaning-service-guide-dayton.png",
    "featured": false
  },
  {
    "slug": "how-to-deep-clean-garage-basement-dayton",
    "title": "How to Deep Clean a Garage or Basement: A Dayton Guide",
    "description": "Grease-caked concrete and a musty basement aren't the same problem. Here's the room-by-room fix for Dayton garages and basements, floor to humidity control.",
    "publishedAt": "2026-09-10",
    "updatedAt": "2026-09-10",
    "author": "Chris Wilson",
    "category": "Cleaning Tips",
    "tags": [
      "garage cleaning",
      "basement cleaning",
      "concrete floor care",
      "humidity control",
      "Dayton"
    ],
    "coverImage": "/images/blog/how-to-deep-clean-garage-basement-dayton.png",
    "featured": false
  },
  {
    "slug": "how-to-clean-windows-streak-free-dayton",
    "title": "How to Clean Windows Streak-Free: A Dayton Homeowner's Guide",
    "description": "Streaky windows in Dayton usually mean hard water, not bad technique. Here's the tool, solution, and step-by-step method that actually gets glass clear.",
    "publishedAt": "2026-09-08",
    "updatedAt": "2026-09-08",
    "author": "Chris Wilson",
    "category": "Cleaning Tips",
    "tags": [
      "window cleaning",
      "streak-free",
      "hard water",
      "cleaning tips",
      "Dayton"
    ],
    "coverImage": "/images/blog/how-to-clean-windows-streak-free-dayton.png",
    "featured": false
  },
  {
    "slug": "how-to-clean-1970s-xenia-home-room-by-room",
    "title": "How to Clean a 1970s Xenia Home: Room-by-Room Guide",
    "description": "One in four Xenia homes dates to the 1970s tornado rebuild. Here's how to clean popcorn ceilings, window tracks, registers, and hard-water scale safely.",
    "publishedAt": "2026-09-07",
    "updatedAt": "2026-09-07",
    "author": "Chris Wilson",
    "category": "Local Guides & Seasonal",
    "tags": [
      "Xenia",
      "1970s homes",
      "popcorn ceilings",
      "hard water",
      "Greene County",
      "cleaning tips"
    ],
    "coverImage": "/images/blog/how-to-clean-1970s-xenia-home-room-by-room.png",
    "featured": false
  },
  {
    "slug": "how-to-remove-pet-hair-odor-dayton",
    "title": "How to Get Rid of Pet Hair and Odor at Home: A Dayton Guide",
    "description": "A room-by-room pet hair and odor routine built for Dayton's mixed hardwood/carpet homes and closed-window winters. Practical steps between cleanings.",
    "publishedAt": "2026-09-03",
    "updatedAt": "2026-09-03",
    "author": "Chris Wilson",
    "category": "Cleaning Tips",
    "tags": [
      "pet hair removal",
      "pet odor",
      "carpet cleaning",
      "cleaning tips",
      "Dayton"
    ],
    "coverImage": "/images/blog/how-to-remove-pet-hair-odor-dayton.png",
    "featured": false
  },
  {
    "slug": "how-to-clean-grout-tile-without-damaging-dayton",
    "title": "How to Clean Grout and Tile Without Damaging It in Dayton",
    "description": "Dayton's hard water leaves grout haze fast. Here's the finish-safe way to clean and reseal tile grout without damaging the finish, plus what never to use.",
    "publishedAt": "2026-09-01",
    "updatedAt": "2026-09-01",
    "author": "Chris Wilson",
    "category": "Cleaning Tips",
    "tags": [
      "grout cleaning",
      "tile cleaning",
      "hard water",
      "cleaning tips",
      "Dayton"
    ],
    "coverImage": "/images/blog/how-to-clean-grout-tile-without-damaging-dayton.png",
    "featured": false
  },
  {
    "slug": "pre-listing-deep-clean-checklist-dayton",
    "title": "The Pre-Listing Deep Clean Checklist for Dayton Sellers",
    "description": "Dayton's fast-moving seller's market gives homeowners little time to prep. Here's the pre-listing checklist to get your house showing-ready fast.",
    "publishedAt": "2026-08-27",
    "updatedAt": "2026-09-14",
    "author": "Chris Wilson",
    "category": "Local Guides & Seasonal",
    "tags": [
      "pre-listing cleaning",
      "home selling tips",
      "real estate cleaning",
      "Dayton housing market",
      "deep clean checklist"
    ],
    "coverImage": "/images/blog/pre-listing-deep-clean-checklist-dayton.png",
    "featured": false
  },
  {
    "slug": "oktoberfest-fall-hosting-cleaning-dayton",
    "title": "Oktoberfest Cleaning Guide for Dayton Hosts",
    "description": "Oktoberfest weekend fills Dayton calendars fast. Here's the pre-party and post-party cleaning timeline to get your house guest-ready and reset fast after.",
    "publishedAt": "2026-08-25",
    "updatedAt": "2026-08-25",
    "author": "Chris Wilson",
    "category": "Local Guides & Seasonal",
    "tags": [
      "fall entertaining",
      "party cleaning",
      "Oktoberfest",
      "hosting checklist",
      "Dayton"
    ],
    "coverImage": "/images/blog/oktoberfest-fall-hosting-cleaning-dayton.png",
    "featured": false
  },
  {
    "slug": "how-to-keep-office-clean-between-cleanings-dayton",
    "title": "Keep Your Office Clean Between Cleanings",
    "description": "A crew resets your office weekly, but clients and staff see it daily. Here's how Dayton office managers keep it sharp in between visits.",
    "publishedAt": "2026-08-20",
    "updatedAt": "2026-08-20",
    "author": "Chris Wilson",
    "category": "Commercial Cleaning",
    "tags": [
      "office cleaning",
      "commercial cleaning",
      "workplace maintenance",
      "cleaning tips",
      "facility management",
      "Dayton"
    ],
    "coverImage": "/images/blog/how-to-keep-office-clean-between-cleanings-dayton.png",
    "featured": false
  },
  {
    "slug": "how-to-deep-clean-stainless-steel-appliances-dayton",
    "title": "How to Deep Clean Stainless Steel Appliances",
    "description": "Fingerprints and water spots make stainless look dirty fast. Here's how to deep clean it streak-free, and beat Dayton's hard water.",
    "publishedAt": "2026-08-18",
    "updatedAt": "2026-08-18",
    "author": "Chris Wilson",
    "category": "Cleaning Tips",
    "tags": [
      "stainless steel",
      "kitchen cleaning",
      "appliance care",
      "cleaning tips",
      "hard water",
      "Dayton"
    ],
    "coverImage": "/images/blog/how-to-deep-clean-stainless-steel-appliances-dayton.png",
    "featured": false
  },
  {
    "slug": "how-to-remove-hard-water-stains-bathroom-fixtures-dayton",
    "title": "Removing Hard Water Stains From Fixtures",
    "description": "Dayton's tap water runs about 9 grains hard, so fixtures spot fast. Here's how to remove hard water stains from faucets, glass, and showerheads safely.",
    "publishedAt": "2026-08-13",
    "updatedAt": "2026-08-13",
    "author": "Chris Wilson",
    "category": "Cleaning Tips",
    "tags": [
      "hard water stains",
      "bathroom cleaning",
      "limescale removal",
      "cleaning tips",
      "Dayton"
    ],
    "coverImage": "/images/blog/how-to-remove-hard-water-stains-bathroom-fixtures-dayton.png",
    "featured": false
  },
  {
    "slug": "how-to-prep-home-before-cleaning-crew-dayton",
    "title": "How to Prep Your Home Before Cleaning Day",
    "description": "Prepping before your cleaning crew arrives means more actual cleaning for your money. Here’s the 15-minute checklist Dayton homeowners should run first.",
    "publishedAt": "2026-08-11",
    "updatedAt": "2026-08-11",
    "author": "Chris Wilson",
    "category": "Cleaning Tips",
    "tags": [
      "house cleaning prep",
      "cleaning checklist",
      "first cleaning appointment",
      "declutter",
      "residential cleaning",
      "Dayton"
    ],
    "coverImage": "/images/blog/how-to-prep-home-before-cleaning-crew-dayton.png",
    "featured": false
  },
  {
    "slug": "what-to-expect-recurring-cleaning-service-dayton",
    "title": "Recurring Cleaning in Dayton: What to Expect",
    "description": "Weekly or bi-weekly cleaning in the Miami Valley? Here's what a recurring house cleaning service includes each visit, what it skips, and how often to book.",
    "publishedAt": "2026-08-06",
    "updatedAt": "2026-08-06",
    "author": "Chris Wilson",
    "category": "Cleaning Tips",
    "tags": [
      "recurring cleaning",
      "house cleaning",
      "cleaning frequency",
      "residential cleaning",
      "Dayton"
    ],
    "coverImage": "/images/blog/what-to-expect-recurring-cleaning-service-dayton.png",
    "featured": false
  },
  {
    "slug": "airbnb-str-turnover-cleaning-dayton",
    "title": "Airbnb Turnover Cleaning: A Dayton Guide",
    "description": "First Four weekend fills Dayton’s rentals fast. Here’s how STR hosts near UD Arena nail a same-day turnover before the next guest.",
    "publishedAt": "2026-08-04",
    "updatedAt": "2026-08-04",
    "author": "Chris Wilson",
    "category": "Moving & Turnover",
    "tags": [
      "Airbnb cleaning",
      "short-term rental",
      "turnover cleaning",
      "Dayton",
      "UD Arena",
      "First Four"
    ],
    "coverImage": "/images/blog/airbnb-str-turnover-cleaning-dayton.png",
    "featured": false
  },
  {
    "slug": "winter-salt-mud-floor-protection-dayton",
    "title": "Protecting Floors From Winter Salt in Dayton",
    "description": "Road salt and slush wreck Dayton’s older hardwood floors every winter. Here’s how to protect your entryways and lift salt stains before they leave a mark.",
    "publishedAt": "2026-07-30",
    "updatedAt": "2026-07-30",
    "author": "Chris Wilson",
    "category": "Local Guides & Seasonal",
    "tags": [
      "winter cleaning",
      "floor care",
      "road salt",
      "entryway maintenance",
      "Dayton"
    ],
    "coverImage": "/images/blog/winter-salt-mud-floor-protection-dayton.png",
    "featured": false
  },
  {
    "slug": "wright-patterson-afb-pcs-move-out-cleaning-dayton",
    "title": "Wright-Patterson PCS Move-Out Cleaning Guide",
    "description": "PCS season means a base-housing or off-base rental inspection is coming. Here’s how Wright-Patterson families get a Dayton move-out clean that passes.",
    "publishedAt": "2026-07-28",
    "updatedAt": "2026-07-28",
    "author": "Chris Wilson",
    "category": "Moving & Turnover",
    "tags": [
      "move-out cleaning",
      "PCS cleaning",
      "military housing",
      "Wright-Patterson AFB",
      "Dayton"
    ],
    "coverImage": "/images/blog/wright-patterson-afb-pcs-move-out-cleaning-dayton.png",
    "featured": false
  },
  {
    "slug": "student-move-in-cleaning-dayton-ud-wright-state",
    "title": "Move-In Cleaning for Dayton Student Rentals",
    "description": "UD move-in is August 21 and Wright State starts the 24th. Here's how to get a just-vacated Dayton student rental actually clean before the boxes arrive.",
    "publishedAt": "2026-07-24",
    "updatedAt": "2026-07-24",
    "author": "Chris Wilson",
    "category": "Moving & Turnover",
    "tags": [
      "move-in cleaning",
      "student housing",
      "move-in move-out",
      "Dayton",
      "Wright State"
    ],
    "coverImage": "/images/blog/student-move-in-cleaning-dayton-ud-wright-state.png",
    "featured": false
  },
  {
    "slug": "ragweed-season-dayton-allergy-cleaning",
    "title": "Ragweed Season in Dayton: Allergy Prep Guide",
    "description": "Ragweed season runs mid-August through November in the Miami Valley. Here’s the room-by-room checklist that cuts down what you’re breathing indoors.",
    "publishedAt": "2026-07-22",
    "updatedAt": "2026-07-22",
    "author": "Chris Wilson",
    "category": "Local Guides & Seasonal",
    "tags": [
      "allergy cleaning",
      "ragweed season",
      "fall cleaning",
      "Dayton"
    ],
    "coverImage": "/images/blog/ragweed-season-dayton-allergy-cleaning.png",
    "featured": false
  }
]

export const getAllPostsMeta = () => POSTS_META
