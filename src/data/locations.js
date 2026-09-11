// Structured facts + per-service-type copy for the 16 real Gem City Cleaning Crew
// service-area cities. Keyed by URL slug so LocationPage.jsx can do an O(1)
// lookup from useParams(). Beavercreek has no `commercial` key — its commercial
// page is a separate, already-built file
// (src/pages/Locations/Beavercreek/CommercialCleaning/BeavercreekCommercialPage.jsx);
// LocationPage.jsx redirects that URL combination instead of rendering generic content.

export const CITIES = {
  dayton: {
    name: 'Dayton',
    zipCodes: ['45402', '45405', '45406', '45410', '45417', '45459'],
    landmarks: ['Oregon District', 'Wright-Dunbar Historic District', 'Downtown Dayton'],
    residential: {
      heroTitle: 'House Cleaning Services in Dayton, OH',
      heroSubtitle: 'From Oregon District Bungalows to Wright-Dunbar Victorians',
      metaDescription: 'Professional house cleaning in Dayton, OH — Oregon District, Wright-Dunbar, and Downtown. Licensed, insured, same-day availability.',
      intro: [
        "Dayton's older neighborhoods bring their own cleaning considerations. In the Oregon District, that means rowhouses and apartments with original hardwood and tight kitchens; in Wright-Dunbar, it means late-1800s Victorians with bay windows, tall baseboards, and plaster walls that need a gentler touch than modern drywall.",
        "We clean homes throughout Dayton's 45402, 45405, 45406, 45410, 45417, and 45459 zip codes, from Downtown high-rises near the Dayton Art Institute to family homes further out. Weekly, bi-weekly, monthly, or one-time — we'll build a plan around your home's layout and age."
      ],
      breadcrumbLabel: 'Dayton House Cleaning',
      faqs: [
        { question: 'Do you clean older homes in the Oregon District or Wright-Dunbar?', answer: "Yes — a lot of our Dayton cleanings are in the Oregon District's rowhouses and Wright-Dunbar's late-1800s Victorians. Plaster walls, original hardwood, and tall baseboards need a gentler touch than modern drywall, and our crews adjust for that instead of treating every home the same." },
        { question: 'Do you serve the 45402 and 45459 zip codes?', answer: "Yes, along with 45405, 45406, 45410, and 45417 — we cover Dayton's full zip code range, from Downtown high-rises near the Dayton Art Institute to family homes further out." },
        { question: 'Is there a contract if I want recurring cleaning in Dayton?', answer: 'No — weekly, bi-weekly, monthly, or one-time, none of it requires a long-term contract. You can adjust or pause your Dayton cleaning schedule anytime.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Dayton, OH',
      heroSubtitle: 'Serving Downtown Offices to Oregon District Storefronts',
      metaDescription: 'Commercial cleaning in Dayton, OH — downtown offices, Oregon District restaurants and retail. Flexible after-hours scheduling.',
      intro: [
        "Downtown Dayton's office towers near Fifth Third Field and the Victoria Theatre need a different cleaning rhythm than the bars and restaurants a few blocks away in the Oregon District, where kitchens and late-night foot traffic mean cleaning crews often work early mornings after close.",
        "We handle both — office suites, retail storefronts, and restaurant common areas throughout Downtown and the Oregon District — with scheduling built around your hours, not ours."
      ],
      breadcrumbLabel: 'Dayton Commercial Cleaning',
      faqs: [
        { question: 'Can you clean Oregon District restaurants after close?', answer: "Yes — a lot of our Oregon District work happens early morning after close, since that's when kitchens and dining areas are actually empty. We build the schedule around your hours, not the other way around." },
        { question: 'Do you clean office suites near Fifth Third Field and the Victoria Theatre?', answer: 'Yes, that Downtown Dayton corridor is one of our regular commercial service areas, along with retail storefronts and restaurant common areas throughout the Oregon District.' },
        { question: 'Are your commercial cleaners insured?', answer: 'Yes — Gem City Cleaning Crew is licensed and insured for every Dayton commercial job, and every cleaner completes three months of training before working independently.' }
      ],
    },
  },

  kettering: {
    name: 'Kettering',
    zipCodes: ['45409', '45419', '45420', '45429', '45430', '45439', '45440', '45459'],
    landmarks: ['Fraze Pavilion', 'Town & Country Shopping Center'],
    residential: {
      heroTitle: 'House Cleaning Services in Kettering, OH',
      heroSubtitle: 'Serving Homes Throughout Kettering, Ohio',
      metaDescription: 'Professional house cleaning in Kettering, OH near Fraze Pavilion and Town & Country. Licensed, insured, flexible scheduling.',
      intro: [
        "Kettering is named for Charles Kettering, but it's Ermal Fraze — the Kettering resident who invented the pop-top can — that the 4,300-seat Fraze Pavilion amphitheater honors. It's one of the touches that makes this a distinct community, not just a Dayton suburb.",
        "We serve homes across Kettering's 45429 core and the surrounding 45409, 45419, 45420, 45430, 45439, 45440, and 45459 zips, from starter homes to larger properties near the Town & Country retail corridor."
      ],
      breadcrumbLabel: 'Kettering House Cleaning',
      faqs: [
        { question: 'Do you clean homes near Fraze Pavilion?', answer: "Yes — Fraze Pavilion sits right in the heart of Kettering's 45429 core, and it's one of the neighborhoods we clean most regularly." },
        { question: 'What Kettering zip codes do you serve?', answer: 'The 45429 core plus the surrounding 45409, 45419, 45420, 45430, 45439, 45440, and 45459 zips — basically all of Kettering, from starter homes to larger properties near Town & Country.' },
        { question: 'Do I need to be home for my Kettering cleaning?', answer: "No — most Kettering clients leave access instructions and go about their day. It's entirely up to what works for you." }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Kettering, OH',
      heroSubtitle: 'Offices & Retail Near Town & Country and Fraze Pavilion',
      metaDescription: 'Commercial cleaning in Kettering, OH for offices and retail near Town & Country Shopping Center. Licensed & insured.',
      intro: [
        "The Town & Country Shopping Center anchors a lot of Kettering's retail and office space, and businesses there need cleaning schedules that work around store hours and foot traffic rather than a one-size-fits-all timetable.",
        "We clean offices, retail spaces, and medical facilities throughout Kettering, with evening and after-hours options for businesses near Fraze Pavilion and the Town & Country corridor."
      ],
      breadcrumbLabel: 'Kettering Commercial Cleaning',
      faqs: [
        { question: 'Do you clean retail spaces at Town & Country Shopping Center?', answer: "Yes — Town & Country anchors a lot of Kettering's retail and office space, and we schedule around store hours and foot traffic there instead of a one-size-fits-all timetable." },
        { question: 'Can you clean medical offices in Kettering?', answer: 'Yes, we clean offices, retail, and medical facilities throughout Kettering, including near Fraze Pavilion and the Town & Country corridor.' },
        { question: 'Do you offer after-hours commercial cleaning in Kettering?', answer: 'Yes — evening and after-hours scheduling is standard for our Kettering commercial clients, so cleaning never disrupts your business hours.' }
      ],
    },
  },

  oakwood: {
    name: 'Oakwood',
    zipCodes: ['45419'],
    landmarks: ['Schantz Park Historic District', "Hawthorn Hill", 'Wright Memorial Public Library'],
    residential: {
      heroTitle: 'House Cleaning Services in Oakwood, OH',
      heroSubtitle: 'Trusted Cleaning for Oakwood\'s Historic Homes',
      metaDescription: 'Professional house cleaning in Oakwood, OH — Schantz Park and the 45419 area. Experienced with historic homes, licensed & insured.',
      intro: [
        "Oakwood's Schantz Park Historic District holds roughly 400 homes on the National Register, many built before 1939 — not far from Hawthorn Hill, Orville Wright's former home. Cleaning a house like that means working around original woodwork, older window frames, and finishes that don't always match modern building materials.",
        "Nearly all of Oakwood falls within 45419. We tailor our approach to each home's age and layout, whether that's a Schantz Park original or a newer build near the Wright Memorial Public Library."
      ],
      breadcrumbLabel: 'Oakwood House Cleaning',
      faqs: [
        { question: 'Do you have experience cleaning historic homes in Schantz Park?', answer: "Yes — Schantz Park Historic District has roughly 400 homes on the National Register, many built before 1939, and we're used to working around original woodwork and older window frames rather than treating them like a modern build." },
        { question: 'Do you serve the whole 45419 zip code?', answer: 'Yes — nearly all of Oakwood falls within 45419, from Schantz Park originals to newer builds near the Wright Memorial Public Library.' },
        { question: 'Do you bring your own cleaning supplies to Oakwood homes?', answer: "Yes, our trained crews bring their own tools and supplies. If a historic home's finishes need something specific, just let us know and we'll accommodate that." }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Oakwood, OH',
      heroSubtitle: 'Serving Oakwood\'s Local Businesses',
      metaDescription: 'Commercial cleaning in Oakwood, OH for small businesses and offices in the 45419 area. Licensed & insured.',
      intro: [
        "Oakwood is a small, mostly residential community, and its handful of local businesses and professional offices — many clustered along Far Hills Avenue — tend to want the same personal, detail-oriented service their historic-home neighbors expect.",
        "We provide that same level of care for Oakwood's offices and small businesses, with flexible scheduling that fits a compact commercial footprint."
      ],
      breadcrumbLabel: 'Oakwood Commercial Cleaning',
      faqs: [
        { question: 'Do you clean small offices along Far Hills Avenue?', answer: "Yes — a lot of Oakwood's local businesses and professional offices cluster along Far Hills Avenue, and that's a regular part of our commercial route." },
        { question: 'Is Oakwood too small an area for regular commercial service?', answer: 'Not at all — Oakwood is a small, mostly residential community, and we scale our scheduling to fit a compact commercial footprint rather than requiring a minimum job size.' },
        { question: 'Are Oakwood commercial cleanings covered by insurance?', answer: 'Yes — Gem City Cleaning Crew is licensed and insured for every commercial job in Oakwood.' }
      ],
    },
  },

  centerville: {
    name: 'Centerville',
    zipCodes: ['45305', '45458', '45459'],
    landmarks: ['Uptown Centerville', 'Asahel Wright House'],
    residential: {
      heroTitle: 'House Cleaning Services in Centerville, OH',
      heroSubtitle: 'Serving Homes Across Centerville Since Founding in 1796',
      metaDescription: 'Professional house cleaning services in Centerville, Ohio — Uptown and surrounding neighborhoods. Licensed, insured, no contracts.',
      intro: [
        "Founded in 1796, Centerville has one of Ohio's largest collections of early stone buildings, and Uptown Centerville's brick sidewalks and limestone architecture still define the area around the Asahel Wright House at the Four Corners.",
        "We clean homes throughout Centerville's 45305, 45458, and 45459 zip codes, from homes near Uptown to newer developments further out, with the same reliable, no-contract scheduling."
      ],
      breadcrumbLabel: 'Centerville House Cleaning',
      faqs: [
        { question: 'Do you clean historic stone homes in Uptown Centerville?', answer: "Yes — Centerville has one of Ohio's largest collections of early stone buildings, and Uptown's brick sidewalks and limestone architecture near the Asahel Wright House are part of our regular service area." },
        { question: 'What zip codes do you cover in Centerville?', answer: '45305, 45458, and 45459 — from homes near Uptown to newer developments further out.' },
        { question: 'Can I reschedule my Centerville cleaning if my plans change?', answer: 'Yes — no long-term contracts means flexible rescheduling. Just call ahead of your appointment.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Centerville, OH',
      heroSubtitle: 'Serving Nearly 100 Uptown Centerville Businesses and More',
      metaDescription: 'Commercial cleaning in Centerville, OH for offices and retail in and around Uptown Centerville. Flexible scheduling.',
      intro: [
        "Uptown Centerville is home to nearly 100 businesses along Main Street's Architectural Preservation District — boutiques, cafés, and offices that need cleaning crews who can work around retail hours and historic storefronts alike.",
        "We serve offices, retail, and medical facilities throughout Centerville, with scheduling built around your business hours, not ours."
      ],
      breadcrumbLabel: 'Centerville Commercial Cleaning',
      faqs: [
        { question: 'Do you clean businesses in the Main Street Architectural Preservation District?', answer: 'Yes — Uptown Centerville has nearly 100 businesses along that district, and we work around retail hours and historic storefronts there regularly.' },
        { question: 'Do you clean offices outside of Uptown Centerville too?', answer: 'Yes, we serve offices, retail, and medical facilities throughout Centerville, not just the Uptown corridor.' },
        { question: 'Do you provide your own cleaning equipment for Centerville businesses?', answer: 'Yes, we bring all necessary supplies and equipment, using commercial-grade products that are effective yet safe for your workplace.' }
      ],
    },
  },

  miamisburg: {
    name: 'Miamisburg',
    zipCodes: ['45342'],
    landmarks: ['Miamisburg Mound', 'Mound Park', 'Market Square'],
    residential: {
      heroTitle: 'House Cleaning Services in Miamisburg, OH',
      heroSubtitle: 'Serving Homes Near the Miamisburg Mound',
      metaDescription: 'Professional house cleaning in Miamisburg, OH, zip code 45342. Licensed, insured, flexible scheduling.',
      intro: [
        "The Miamisburg Mound is the largest prehistoric burial mound in the Eastern U.S. — 65 feet tall, inside the 37-acre Mound Park — and it's a fitting anchor for a city that takes its history seriously, down to the last remaining brick street in its historic downtown.",
        "We clean homes throughout Miamisburg's 45342 zip code, from homes near downtown's Market Square to newer neighborhoods further from the river."
      ],
      breadcrumbLabel: 'Miamisburg House Cleaning',
      faqs: [
        { question: 'Do you clean homes near the Miamisburg Mound?', answer: "Yes — the Miamisburg Mound and the 37-acre Mound Park it sits in are right in the middle of our Miamisburg service area." },
        { question: 'Do you serve all of 45342?', answer: "Yes, that's the only zip code Miamisburg needs — we cover it fully, from homes near downtown's Market Square to newer neighborhoods further from the river." },
        { question: 'Is there a minimum contract length for Miamisburg cleaning?', answer: "No — we don't require contracts. Weekly, bi-weekly, monthly, or one-time, whatever fits your Miamisburg home." }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Miamisburg, OH',
      heroSubtitle: 'Serving Historic Downtown Miamisburg Businesses',
      metaDescription: 'Commercial cleaning in Miamisburg, OH for offices and retail near historic downtown and Mound Park. Licensed & insured.',
      intro: [
        "Miamisburg's historic downtown, anchored by the Market Square building and the city's last brick street, is home to small businesses that want the same attention to detail the city puts into preserving its own history.",
        "We clean offices and retail spaces throughout Miamisburg, with after-hours scheduling that works around downtown foot traffic."
      ],
      breadcrumbLabel: 'Miamisburg Commercial Cleaning',
      faqs: [
        { question: "Do you clean businesses near Miamisburg's Market Square?", answer: "Yes — Miamisburg's historic downtown, anchored by the Market Square building and the city's last brick street, is a regular part of our commercial route." },
        { question: 'Can you schedule around downtown Miamisburg foot traffic?', answer: "Yes — we offer after-hours scheduling specifically so cleaning doesn't compete with downtown foot traffic." },
        { question: 'Are your Miamisburg commercial cleaners background-checked?', answer: 'Yes — every Gem City cleaner is Checkr background-checked and completes three months of training before working independently.' }
      ],
    },
  },

  springboro: {
    name: 'Springboro',
    zipCodes: ['45066'],
    landmarks: ['Springboro Historic District', 'Old Stone Church'],
    residential: {
      heroTitle: 'House Cleaning Services in Springboro, OH',
      heroSubtitle: 'Serving Homes Between Dayton and Cincinnati',
      metaDescription: 'Professional house cleaning in Springboro, OH, zip code 45066. Licensed, insured, no contracts required.',
      intro: [
        "Springboro sits between Dayton and Cincinnati, and its 50-acre Historic District — Federal and Greek Revival buildings along Main, East, and Mill Streets — reflects a city that provided more Underground Railroad safe houses than anywhere else in Ohio.",
        "We clean homes throughout Springboro's 45066 zip code, from homes near the Old Stone Church and historic district to newer developments on the city's edges."
      ],
      breadcrumbLabel: 'Springboro House Cleaning',
      faqs: [
        { question: "Do you clean historic homes near Springboro's Old Stone Church?", answer: "Yes — Springboro's 50-acre Historic District includes Federal and Greek Revival buildings along Main, East, and Mill Streets, and we regularly clean homes near the Old Stone Church in that area." },
        { question: 'What zip code do you serve in Springboro?', answer: '45066 — that covers all of Springboro, from the historic district to newer developments on the city\'s edges.' },
        { question: 'Do you offer one-time cleanings in Springboro, or only recurring?', answer: 'Both — one-time, weekly, bi-weekly, or monthly, with no contract required either way.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Springboro, OH',
      heroSubtitle: 'Serving Springboro\'s Growing Business Community',
      metaDescription: 'Commercial cleaning in Springboro, OH for offices and retail in the 45066 area. Flexible, after-hours scheduling available.',
      intro: [
        "Springboro's location between two major metro areas has brought steady business growth alongside its historic core, and local offices and retail spaces need cleaning that keeps pace without disrupting business hours.",
        "We serve offices, retail, and medical facilities throughout Springboro, with scheduling built around your team's hours."
      ],
      breadcrumbLabel: 'Springboro Commercial Cleaning',
      faqs: [
        { question: "Do you clean offices in Springboro's growing business district?", answer: 'Yes — Springboro\'s location between Dayton and Cincinnati has brought steady business growth, and we serve offices and retail throughout that growth alongside the historic core.' },
        { question: 'Do you serve medical facilities in Springboro?', answer: 'Yes, we serve offices, retail, and medical facilities throughout Springboro.' },
        { question: 'Can Springboro businesses schedule cleaning around their own hours?', answer: "Yes — we build scheduling around your team's hours, not a fixed timetable." }
      ],
    },
  },

  'huber-heights': {
    name: 'Huber Heights',
    zipCodes: ['45371', '45344', '45424'],
    landmarks: ['Belle Plain', 'Beldale', 'Evergreen Woods', 'Stoney Creek'],
    residential: {
      heroTitle: 'House Cleaning Services in Huber Heights, OH',
      heroSubtitle: '"America\'s Largest Community of Brick Homes"',
      metaDescription: 'Professional house cleaning in Huber Heights, OH — brick ranch homes and newer developments. Licensed & insured.',
      intro: [
        "Huber Heights earned its motto — \"America's largest community of brick homes\" — from the solid brick ranch homes Charles Huber built in neighborhoods like Belle Plain, Beldale, and Evergreen Woods. Newer upscale developments like Stoney Creek and Callamere Farms have added to the mix since.",
        "We clean homes throughout Huber Heights, from classic brick ranches to newer builds, with scheduling that works whether you're 10 minutes from Wright-Patterson AFB or closer to Dayton."
      ],
      breadcrumbLabel: 'Huber Heights House Cleaning',
      faqs: [
        { question: 'Do you clean the brick ranch homes Huber Heights is known for?', answer: "Yes — Huber Heights earned its \"America's largest community of brick homes\" motto from the brick ranches Charles Huber built in neighborhoods like Belle Plain, Beldale, and Evergreen Woods, and that's most of what we clean there." },
        { question: 'Do you also clean newer homes in Stoney Creek?', answer: "Yes — alongside the classic brick ranches, we clean newer upscale developments like Stoney Creek, whether you're closer to Wright-Patterson AFB or nearer to Dayton." },
        { question: 'Do your cleaners bring their own supplies to Huber Heights homes?', answer: 'Yes, our trained crews bring their own tools and supplies, and we can accommodate a specific product request if you have a sensitivity.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Huber Heights, OH',
      heroSubtitle: 'Serving a Major Industrial & Commercial Center',
      metaDescription: 'Commercial cleaning in Huber Heights, OH for offices and industrial facilities near Wright-Patterson AFB. Licensed & insured.',
      intro: [
        "With over 40,000 residents and a location 10 minutes from Wright-Patterson Air Force Base, Huber Heights has grown into a real industrial and commercial center, not just a residential suburb.",
        "We clean offices, retail, and industrial spaces throughout Huber Heights, with flexible scheduling for businesses that support the base and the surrounding community alike."
      ],
      breadcrumbLabel: 'Huber Heights Commercial Cleaning',
      faqs: [
        { question: 'Do you clean industrial facilities in Huber Heights?', answer: 'Yes — with over 40,000 residents and a location 10 minutes from Wright-Patterson AFB, Huber Heights has real industrial and commercial space, and that\'s part of our regular service area there.' },
        { question: 'Can you clean offices that support Wright-Patterson AFB contractors?', answer: 'Yes, we clean offices, retail, and industrial spaces throughout Huber Heights, including businesses that support the base and its contractors.' },
        { question: 'Is there flexible scheduling for Huber Heights businesses?', answer: 'Yes — we offer flexible scheduling including evenings and weekends so cleaning never disrupts your operations.' }
      ],
    },
  },

  riverside: {
    name: 'Riverside',
    zipCodes: ['45404', '45433'],
    landmarks: ['National Museum of the U.S. Air Force', 'Belmont', 'Kittyhawk', 'Walnut Hills'],
    residential: {
      heroTitle: 'House Cleaning Services in Riverside, OH',
      heroSubtitle: 'Serving a City Split by the Mad River',
      metaDescription: 'Professional house cleaning in Riverside, OH, home to the National Museum of the U.S. Air Force. Licensed & insured.',
      intro: [
        "Riverside, incorporated in 1995, is split in half by the Mad River and home to the National Museum of the U.S. Air Force — the largest aviation museum in the world, drawing over a million visitors a year.",
        "We clean homes throughout Riverside's neighborhoods, from Belmont and Kittyhawk to Walnut Hills, in the 45404 and 45433 zip codes."
      ],
      breadcrumbLabel: 'Riverside House Cleaning',
      faqs: [
        { question: 'Do you clean homes near the National Museum of the U.S. Air Force?', answer: 'Yes — Riverside is home to the National Museum of the U.S. Air Force, and we regularly clean homes in the neighborhoods around it, including Belmont and Kittyhawk.' },
        { question: 'What zip codes do you serve in Riverside?', answer: '45404 and 45433 — that covers Riverside\'s neighborhoods on both sides of the Mad River, including Walnut Hills.' },
        { question: 'Do I need to be home during my Riverside cleaning?', answer: 'No — many Riverside clients provide access instructions and go about their day. It\'s entirely up to what works for you.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Riverside, OH',
      heroSubtitle: 'Serving Offices Near Wright-Patterson AFB',
      metaDescription: 'Commercial cleaning in Riverside, OH for offices and businesses near Wright-Patterson Air Force Base. Licensed & insured.',
      intro: [
        "Riverside sits right next to Wright-Patterson Air Force Base — the third-largest base in the country — and many of its offices and commercial spaces serve base employees and contractors directly.",
        "We clean offices and commercial spaces throughout Riverside, with scheduling that fits the base's rhythms as easily as a standard 9-to-5."
      ],
      breadcrumbLabel: 'Riverside Commercial Cleaning',
      faqs: [
        { question: 'Do you clean offices near Wright-Patterson Air Force Base?', answer: 'Yes — Riverside sits right next to Wright-Patterson, the third-largest base in the country, and a lot of our Riverside commercial work is for offices that serve base employees and contractors directly.' },
        { question: 'Can you work around a schedule tied to the base?', answer: "Yes — our scheduling fits the base's rhythms as easily as a standard 9-to-5." },
        { question: 'Are your Riverside commercial cleaners licensed and insured?', answer: 'Yes — Gem City Cleaning Crew is licensed and insured for every Riverside commercial job.' }
      ],
    },
  },

  xenia: {
    name: 'Xenia',
    zipCodes: ['45385'],
    landmarks: ['Greene County Courthouse', 'East Second Street Historic District', 'Xenia Station'],
    // NOTE: the `residential` block below is no longer rendered. The Xenia
    // residential URL is served by a dedicated, richer page
    // (src/pages/Locations/Xenia/HouseCleaning/XeniaHouseCleaningPage.jsx) via a
    // static <Route> in App.jsx/entry-server.jsx that outranks the :city route.
    // Kept so the /locations index and any slug-based lookups stay consistent.
    residential: {
      heroTitle: 'House Cleaning Services in Xenia, OH',
      heroSubtitle: 'Serving Homes Near the Greene County Courthouse',
      metaDescription: 'Professional house cleaning in Xenia, OH, zip code 45385, near the Greene County Courthouse. Licensed & insured.',
      intro: [
        "As the Greene County seat, Xenia's 1902 courthouse — designed by Samuel Hannaford & Sons — anchors a downtown surrounded by Victorian-era homes in the East Second Street Historic District, many within walking distance of Xenia Station's trail hub.",
        "We clean homes throughout Xenia's 45385 zip code, from historic homes near the courthouse square to newer development on the city's north and east sides."
      ],
      breadcrumbLabel: 'Xenia House Cleaning',
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Xenia, OH',
      heroSubtitle: 'Serving Xenia\'s Downtown and County Offices',
      metaDescription: 'Commercial cleaning in Xenia, OH for offices and retail near the courthouse square and Greene County Fairgrounds. Licensed & insured.',
      intro: [
        "As the county seat, Xenia has a steady mix of government offices, professional services, and retail around its courthouse square, plus businesses tied to the Greene County Fairgrounds and its annual county fair.",
        "We clean offices, retail, and professional spaces throughout Xenia, with scheduling built around your business hours."
      ],
      breadcrumbLabel: 'Xenia Commercial Cleaning',
      faqs: [
        { question: 'Do you clean government offices near the Greene County Courthouse?', answer: 'Yes — as the county seat, Xenia has a steady mix of government offices and professional services around the courthouse square, and that\'s a regular part of our commercial route.' },
        { question: 'Do you clean businesses tied to the Greene County Fairgrounds?', answer: 'Yes, we clean offices, retail, and professional spaces tied to the fairgrounds and the annual county fair as well as the downtown courthouse square.' },
        { question: 'Can Xenia businesses schedule cleaning around their own hours?', answer: 'Yes — we build scheduling around your business hours, not ours.' }
      ],
    },
  },

  beavercreek: {
    name: 'Beavercreek',
    zipCodes: ['45431', '45432', '45434'],
    landmarks: ['The Greene Town Center', 'Pentagon Boulevard Business District', 'Fairfield Commons'],
    residential: {
      heroTitle: 'House Cleaning Services in Beavercreek, OH',
      heroSubtitle: 'Serving Homes Near The Greene and WPAFB',
      metaDescription: 'Professional house cleaning services in Beavercreek, Ohio, zip codes 45431, 45432, and 45434. Licensed & insured, same-day availability.',
      intro: [
        "Beavercreek's neighborhoods sit close to The Greene Town Center and are just minutes from Wright-Patterson Air Force Base, making it one of the area's most active residential communities for both families and base personnel.",
        "We clean homes throughout Beavercreek's 45431, 45432, and 45434 zip codes, with flexible scheduling for busy households near The Greene, Fairfield Commons, and the Colonel Glenn Highway corridor."
      ],
      breadcrumbLabel: 'Beavercreek House Cleaning',
      faqs: [
        { question: 'Do you clean homes near The Greene Town Center?', answer: "Yes — Beavercreek's neighborhoods near The Greene Town Center are one of our most active residential service areas." },
        { question: 'What zip codes do you serve in Beavercreek?', answer: '45431, 45432, and 45434 — with flexible scheduling for busy households near The Greene, Fairfield Commons, and the Colonel Glenn Highway corridor.' },
        { question: 'Is Beavercreek cleaning available for families near Wright-Patterson AFB?', answer: 'Yes — Beavercreek sits just minutes from Wright-Patterson, and we regularly clean for both families and base personnel in the area.' }
      ],
    },
    // No `commercial` key — Beavercreek's commercial page is a separate,
    // already-built file. LocationPage.jsx redirects to it instead.
    commercialRedirect: '/locations/beavercreek/commercial-services',
  },

  fairborn: {
    name: 'Fairborn',
    zipCodes: ['45324'],
    landmarks: ['Wright State University', 'Mall at Fairfield Commons', 'WSU Nutter Center'],
    residential: {
      heroTitle: 'House Cleaning Services in Fairborn, OH',
      heroSubtitle: 'Serving Homes Near Wright State University',
      metaDescription: 'Professional house cleaning in Fairborn, OH, zip code 45324, home to Wright State University. Licensed & insured.',
      intro: [
        "Fairborn, about 14 miles northeast of Dayton, is home to Wright State University — independent since 1967 and named for the Wright brothers — which brings a mix of student housing, faculty homes, and long-time residents into the same zip code.",
        "We clean homes throughout Fairborn's 45324 zip code, whether that's a rental near campus or a family home closer to the historic downtown."
      ],
      breadcrumbLabel: 'Fairborn House Cleaning',
      faqs: [
        { question: 'Do you clean rentals near Wright State University?', answer: 'Yes — Fairborn is home to Wright State University, and we clean everything from student rentals near campus to long-time family homes closer to the historic downtown.' },
        { question: 'What zip code do you serve in Fairborn?', answer: '45324 — that covers all of Fairborn, campus-adjacent and otherwise.' },
        { question: 'Is there a contract required for Fairborn house cleaning?', answer: 'No — one-time, weekly, bi-weekly, or monthly, none of it requires a long-term contract.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Fairborn, OH',
      heroSubtitle: 'Serving Offices Near Wright State and Fairfield Commons',
      metaDescription: 'Commercial cleaning in Fairborn, OH for offices and retail near Wright State University and the Mall at Fairfield Commons. Licensed & insured.',
      intro: [
        "Between Wright State University, the WSU Nutter Center, and the Mall at Fairfield Commons, Fairborn's commercial corridor sees a steady flow of students, staff, and shoppers that local businesses need to keep clean and presentable.",
        "We clean offices, retail spaces, and facilities throughout Fairborn, with scheduling that works around university and business hours alike."
      ],
      breadcrumbLabel: 'Fairborn Commercial Cleaning',
      faqs: [
        { question: 'Do you clean offices near Wright State and the Nutter Center?', answer: "Yes — Fairborn's commercial corridor around Wright State University, the WSU Nutter Center, and the Mall at Fairfield Commons is a regular part of our service area." },
        { question: 'Can you handle the foot traffic near the Mall at Fairfield Commons?', answer: 'Yes, we clean offices, retail spaces, and facilities throughout Fairborn with scheduling that works around university and business hours alike.' },
        { question: 'Do you provide commercial-grade cleaning products in Fairborn?', answer: "Yes — we bring everything needed, from commercial-grade cleaning products to the equipment itself, so Fairborn businesses don't have to stock or manage supplies themselves." }
      ],
    },
  },

  'yellow-springs': {
    name: 'Yellow Springs',
    zipCodes: ['45387'],
    landmarks: ['Antioch College', 'Glen Helen Nature Preserve', 'John Bryan State Park'],
    residential: {
      heroTitle: 'House Cleaning Services in Yellow Springs, OH',
      heroSubtitle: 'Serving a Village Anchored by Antioch College',
      metaDescription: 'Professional house cleaning in Yellow Springs, OH, zip code 45387, near Antioch College and Glen Helen. Licensed & insured.',
      intro: [
        "Yellow Springs is a village of under 4,000 people, built around Antioch College — founded in 1850 — and bordered by the 700-plus acres of old-growth forest at Glen Helen Nature Preserve, with John Bryan State Park just beyond.",
        "We clean homes throughout Yellow Springs' 45387 zip code, from historic-district homes to properties bordering Glen Helen."
      ],
      breadcrumbLabel: 'Yellow Springs House Cleaning',
      faqs: [
        { question: 'Do you clean homes near Antioch College or Glen Helen?', answer: 'Yes — Yellow Springs is built around Antioch College, founded in 1850, and bordered by the Glen Helen Nature Preserve, and homes in both areas are part of our regular route.' },
        { question: 'What zip code do you serve in Yellow Springs?', answer: '45387 — from historic-district homes to properties bordering Glen Helen.' },
        { question: 'Do your cleaners bring their own supplies to Yellow Springs homes?', answer: 'Yes, our trained crews bring their own tools and supplies, and we can accommodate a specific product request if needed.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Yellow Springs, OH',
      heroSubtitle: 'Serving the Village Business District',
      metaDescription: 'Commercial cleaning in Yellow Springs, OH for shops and offices in the village center. Licensed & insured.',
      intro: [
        "Yellow Springs' small, walkable village center is full of independent shops, cafés, and offices that draw visitors heading to Glen Helen and John Bryan State Park, and they rely on cleaning that fits a compact downtown footprint.",
        "We clean offices, shops, and studios throughout the village, with scheduling built around foot traffic and business hours."
      ],
      breadcrumbLabel: 'Yellow Springs Commercial Cleaning',
      faqs: [
        { question: 'Do you clean shops in the Yellow Springs village center?', answer: "Yes — the village's small, walkable center is full of independent shops, cafés, and offices, and that's exactly the kind of compact footprint we schedule around." },
        { question: 'Can you clean businesses that see visitor traffic from Glen Helen or John Bryan State Park?', answer: 'Yes, we clean offices, shops, and studios throughout the village, with scheduling built around foot traffic and business hours.' },
        { question: 'Are Yellow Springs commercial cleaners insured?', answer: 'Yes — Gem City Cleaning Crew is licensed and insured for every job in Yellow Springs.' }
      ],
    },
  },

  'tipp-city': {
    name: 'Tipp City',
    zipCodes: ['45371'],
    landmarks: ['Old Tippecanoe Main Street Historic District', 'Hotel Gallery'],
    residential: {
      heroTitle: 'House Cleaning Services in Tipp City, OH',
      heroSubtitle: 'Serving Homes Since the Canal Era',
      metaDescription: 'Professional house cleaning in Tipp City, OH, zip code 45371. Licensed & insured, serving the historic Main Street district.',
      intro: [
        "Founded in 1840 along the Miami and Erie Canal, Tipp City's Main Street — the Old Tippecanoe Historic District — still has more than 90 buildings on the National Register, including the 1850s Hotel Gallery, now home to local shops.",
        "We clean homes throughout Tipp City's roughly 10,000-resident community, from historic homes near Main Street to newer neighborhoods around the city's 20-plus parks."
      ],
      breadcrumbLabel: 'Tipp City House Cleaning',
      faqs: [
        { question: "Do you clean historic homes near Tipp City's Main Street?", answer: "Yes — Tipp City's Old Tippecanoe Historic District has more than 90 buildings on the National Register, and we regularly clean historic homes near that Main Street corridor." },
        { question: 'What zip code do you serve in Tipp City?', answer: "45371 — covering Tipp City's roughly 10,000 residents, from historic homes near Main Street to newer neighborhoods around the city's parks." },
        { question: 'Can I switch my Tipp City cleaning frequency later?', answer: 'Yes — no long-term contracts means you can move between weekly, biweekly, monthly, or pause anytime.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Tipp City, OH',
      heroSubtitle: 'Serving Historic Main Street Businesses',
      metaDescription: 'Commercial cleaning in Tipp City, OH for shops and offices along the historic Main Street district. Licensed & insured.',
      intro: [
        "Tipp City's historic Main Street district is a genuine walkable downtown — antique shops, boutiques, and restaurants housed in buildings dating back to the canal era — and they need cleaning that respects older storefronts.",
        "We clean shops, offices, and restaurants throughout Tipp City, with after-hours scheduling built around a historic downtown's foot traffic."
      ],
      breadcrumbLabel: 'Tipp City Commercial Cleaning',
      faqs: [
        { question: "Do you clean shops along Tipp City's historic Main Street?", answer: "Yes — Tipp City's Main Street district is a genuine walkable downtown with buildings dating back to the canal era, and we clean shops, offices, and restaurants there regularly." },
        { question: 'Can you schedule around foot traffic in downtown Tipp City?', answer: 'Yes, we offer after-hours scheduling built around a historic downtown\'s foot traffic.' },
        { question: 'Do you bring your own equipment for Tipp City commercial jobs?', answer: 'Yes, we bring all necessary supplies and equipment, using commercial-grade products that are effective yet safe for older storefronts.' }
      ],
    },
  },

  bellbrook: {
    name: 'Bellbrook',
    zipCodes: ['45305'],
    landmarks: ['Sugarcreek MetroPark', 'Bill Yeck Park', 'Morris Reserve'],
    residential: {
      heroTitle: 'House Cleaning Services in Bellbrook, OH',
      heroSubtitle: 'Serving a Small Town Along Sugar Creek',
      metaDescription: 'Professional house cleaning in Bellbrook, OH, zip code 45305, in Sugarcreek Township. Licensed & insured.',
      intro: [
        "Bellbrook, in Sugarcreek Township, has kept its small-town character since 1816 — green space at Sugarcreek MetroPark, Bill Yeck Park, and the 177-acre Morris Reserve borders much of the community along Sugar Creek.",
        "We clean homes throughout Bellbrook's 45305 zip code, from established neighborhoods near town to newer homes further out along the creek."
      ],
      breadcrumbLabel: 'Bellbrook House Cleaning',
      faqs: [
        { question: 'Do you clean homes near Sugarcreek MetroPark?', answer: 'Yes — Bellbrook sits in Sugarcreek Township along Sugar Creek, and homes near Sugarcreek MetroPark and Bill Yeck Park are part of our regular route.' },
        { question: 'What zip code do you serve in Bellbrook?', answer: '45305 — from established neighborhoods near town to newer homes further out along the creek.' },
        { question: 'Do I need to be home during my Bellbrook cleaning?', answer: 'No — many Bellbrook clients provide access instructions and go about their day.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Bellbrook, OH',
      heroSubtitle: 'Serving Bellbrook\'s Small Business Community',
      metaDescription: 'Commercial cleaning in Bellbrook, OH for local offices and small businesses in the 45305 area. Licensed & insured.',
      intro: [
        "Bellbrook's local businesses tend to be smaller and more personal than what you'd find closer to Dayton — offices, shops, and services that value the same small-town relationships the community was built on.",
        "We provide that same personal approach to commercial cleaning throughout Bellbrook, with flexible scheduling for a smaller commercial footprint."
      ],
      breadcrumbLabel: 'Bellbrook Commercial Cleaning',
      faqs: [
        { question: 'Do you clean small businesses in Bellbrook?', answer: "Yes — Bellbrook's local businesses tend to be smaller and more personal than what you'd find closer to Dayton, and we scale our approach to fit that smaller commercial footprint." },
        { question: 'Is Bellbrook too small for regular commercial cleaning service?', answer: 'Not at all — we provide the same personal approach to commercial cleaning throughout Bellbrook with flexible scheduling.' },
        { question: 'Are Bellbrook commercial cleaners licensed and insured?', answer: 'Yes — Gem City Cleaning Crew is licensed and insured for every job in Bellbrook.' }
      ],
    },
  },

  vandalia: {
    name: 'Vandalia',
    zipCodes: ['45377'],
    landmarks: ['Dayton International Airport', 'Scene75 Dayton'],
    residential: {
      heroTitle: 'House Cleaning Services in Vandalia, OH',
      heroSubtitle: 'Serving Homes at the I-75/I-70 Crossroads',
      metaDescription: 'Professional house cleaning in Vandalia, OH, zip code 45377, home to Dayton International Airport. Licensed & insured.',
      intro: [
        "Vandalia sits right at the crossroads of I-75 and I-70 and is home to Dayton International Airport — a location that's made it one of the top-ranked places to raise a family in Montgomery County.",
        "We clean homes throughout Vandalia's 45377 zip code, with scheduling that works around the airport's flight patterns and the city's Air Show weekends alike."
      ],
      breadcrumbLabel: 'Vandalia House Cleaning',
      faqs: [
        { question: 'Do you clean homes near Dayton International Airport?', answer: 'Yes — Vandalia is home to Dayton International Airport, and we clean homes throughout the surrounding area with scheduling that works around flight patterns and Air Show weekends.' },
        { question: 'What zip code do you serve in Vandalia?', answer: '45377 — covering all of Vandalia at the I-75/I-70 crossroads.' },
        { question: 'Is there a contract for Vandalia house cleaning?', answer: 'No — weekly, bi-weekly, monthly, or one-time, with no long-term contract required.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Vandalia, OH',
      heroSubtitle: 'Serving Businesses Near Dayton International Airport',
      metaDescription: 'Commercial cleaning in Vandalia, OH for offices and businesses near Dayton International Airport. Licensed & insured.',
      intro: [
        "With Dayton International Airport, Scene75's large indoor entertainment venue, and steady traffic from the I-75/I-70 interchange, Vandalia's commercial spaces see more foot traffic than a typical suburb of its size.",
        "We clean offices, retail, and event spaces throughout Vandalia, with scheduling built to keep up with that traffic."
      ],
      breadcrumbLabel: 'Vandalia Commercial Cleaning',
      faqs: [
        { question: 'Do you clean businesses near Dayton International Airport or Scene75?', answer: "Yes — between the airport, Scene75's indoor entertainment venue, and the I-75/I-70 interchange, Vandalia sees more commercial foot traffic than a typical suburb its size, and we schedule to keep up with it." },
        { question: 'Can you clean event spaces in Vandalia?', answer: 'Yes, we clean offices, retail, and event spaces throughout Vandalia.' },
        { question: 'Do you offer flexible scheduling for Vandalia businesses?', answer: 'Yes — we build scheduling around your business hours, not a fixed timetable.' }
      ],
    },
  },

  troy: {
    name: 'Troy',
    zipCodes: ['45373', '45374'],
    landmarks: ['Troy Public Square', 'Miami County Courthouse', 'Overfield Tavern Museum'],
    residential: {
      heroTitle: 'House Cleaning Services in Troy, OH',
      heroSubtitle: 'Serving Homes Around the Historic Public Square',
      metaDescription: 'Professional house cleaning in Troy, OH, zip codes 45373 and 45374, near the historic Public Square. Licensed & insured.',
      intro: [
        "Troy's Public Square — an 1807 traffic circle restored with a fountain and surrounded by Victorian-age buildings — sits at the heart of a city that's been the Miami County seat since 1807, home to the 1888 Miami County Courthouse and the Overfield Tavern Museum.",
        "We clean homes throughout Troy's 45373 and 45374 zip codes, from the Southwest Historic District to newer subdivisions on the northwest side."
      ],
      breadcrumbLabel: 'Troy House Cleaning',
      faqs: [
        { question: "Do you clean homes near Troy's Public Square?", answer: "Yes — Troy's 1807 Public Square and the Southwest Historic District around it are part of our regular Troy service area." },
        { question: 'What zip codes do you serve in Troy?', answer: '45373 and 45374 — from the Southwest Historic District to newer subdivisions on the northwest side.' },
        { question: 'Can I reschedule my Troy cleaning if my plans change?', answer: 'Yes — no long-term contracts means flexible rescheduling, just call ahead of your appointment.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Troy, OH',
      heroSubtitle: 'Serving Businesses Around the Public Square',
      metaDescription: 'Commercial cleaning in Troy, OH for offices and retail around the historic Public Square and county courthouse. Licensed & insured.',
      intro: [
        "As Miami County's seat since 1807, Troy's downtown around the Public Square is a genuine commerce center — restaurants and shops that line the square, alongside county and professional offices near the courthouse.",
        "We clean offices, retail, and professional spaces throughout Troy, with scheduling built around downtown business hours."
      ],
      breadcrumbLabel: 'Troy Commercial Cleaning',
      faqs: [
        { question: "Do you clean businesses around Troy's Public Square?", answer: "Yes — as Miami County's seat since 1807, Troy's downtown around the Public Square is a genuine commerce center, and we clean the restaurants and shops that line it." },
        { question: 'Do you clean professional offices near the Miami County Courthouse?', answer: 'Yes, we clean offices, retail, and professional spaces throughout Troy, including near the courthouse.' },
        { question: 'Can Troy businesses schedule cleaning around downtown business hours?', answer: 'Yes — we build scheduling around downtown business hours.' }
      ],
    },
  },
}

export const getCityBySlug = (slug) => CITIES[slug] || null
export const CITY_SLUGS = Object.keys(CITIES)
