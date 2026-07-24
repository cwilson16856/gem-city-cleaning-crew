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
    },
  },

  centerville: {
    name: 'Centerville',
    zipCodes: ['45305', '45458', '45459'],
    landmarks: ['Uptown Centerville', 'Asahel Wright House'],
    residential: {
      heroTitle: 'House Cleaning Services in Centerville, OH',
      heroSubtitle: 'Serving Homes Across Centerville Since Founding in 1796',
      metaDescription: 'Professional house cleaning in Centerville, OH — Uptown and surrounding neighborhoods. Licensed, insured, no contracts.',
      intro: [
        "Founded in 1796, Centerville has one of Ohio's largest collections of early stone buildings, and Uptown Centerville's brick sidewalks and limestone architecture still define the area around the Asahel Wright House at the Four Corners.",
        "We clean homes throughout Centerville's 45305, 45458, and 45459 zip codes, from homes near Uptown to newer developments further out, with the same reliable, no-contract scheduling."
      ],
      breadcrumbLabel: 'Centerville House Cleaning',
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
    },
  },

  xenia: {
    name: 'Xenia',
    zipCodes: ['45385'],
    landmarks: ['Greene County Courthouse', 'East Second Street Historic District', 'Xenia Station'],
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
    },
  },

  beavercreek: {
    name: 'Beavercreek',
    zipCodes: ['45431', '45432', '45434'],
    landmarks: ['The Greene Town Center', 'Pentagon Boulevard Business District', 'Fairfield Commons'],
    residential: {
      heroTitle: 'House Cleaning Services in Beavercreek, OH',
      heroSubtitle: 'Serving Homes Near The Greene and WPAFB',
      metaDescription: 'Professional house cleaning in Beavercreek, OH, zip codes 45431, 45432, and 45434. Licensed & insured, same-day availability.',
      intro: [
        "Beavercreek's neighborhoods sit close to The Greene Town Center and are just minutes from Wright-Patterson Air Force Base, making it one of the area's most active residential communities for both families and base personnel.",
        "We clean homes throughout Beavercreek's 45431, 45432, and 45434 zip codes, with flexible scheduling for busy households near The Greene, Fairfield Commons, and the Colonel Glenn Highway corridor."
      ],
      breadcrumbLabel: 'Beavercreek House Cleaning',
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
    },
  },
}

export const getCityBySlug = (slug) => CITIES[slug] || null
export const CITY_SLUGS = Object.keys(CITIES)
