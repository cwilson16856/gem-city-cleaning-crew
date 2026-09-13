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
    neighborhoods: [
      { title: 'South Park', body: "Dayton's largest historic district: a 24-block area of more than 700 structures dating from the 1880s to the early 1900s, mixing Queen Anne, American Foursquare, and Craftsman bungalow styles." },
      { title: 'Grafton Hill & Five Oaks', body: 'A dense, mostly single-family residential district home to the Dayton Art Institute, with the Grafton-Rockwood-Wroe Historic District running through it.' },
      { title: 'Walnut Hills', body: "A neighborhood that grew up around Dayton's original streetcar routes, bounded roughly by Wayne Avenue, Pursell Avenue, and Woodland Cemetery." }
    ],
    residential: {
      heroTitle: 'House Cleaning Services in Dayton, OH',
      heroSubtitle: 'From Oregon District Bungalows to Wright-Dunbar Victorians',
      metaDescription: 'Professional house cleaning in Dayton, OH: Oregon District, Wright-Dunbar, and Downtown. Licensed, insured, same-day availability.',
      intro: [
        "Dayton's older neighborhoods bring their own cleaning considerations. In the Oregon District, that means rowhouses and apartments with original hardwood and tight kitchens; in Wright-Dunbar, it means late-1800s Victorians with bay windows, tall baseboards, and plaster walls that need a gentler touch than modern drywall.",
        "We clean homes throughout Dayton's 45402, 45405, 45406, 45410, 45417, and 45459 zip codes, from Downtown high-rises near the Dayton Art Institute to family homes further out. Weekly, bi-weekly, monthly, or one-time: we'll build a plan around your home's layout and age.",
        "South Park, one of the largest historic districts in the city, adds another housing type to the mix: more than 700 Victorian and Craftsman-era structures where original trim, hardwood, and plaster call for the same careful approach we use in the Oregon District and Wright-Dunbar.",
        "Every Dayton cleaner we send has completed three months of training and passed a Checkr background check before working independently, and every visit is backed by the same licensed-and-insured guarantee whether you're in a Downtown high-rise or a South Park bungalow."
      ],
      homeEras: [
        { title: 'Oregon District Rowhouses', body: 'Tight kitchens and original hardwood in rowhouses and apartments built well before modern layouts became standard.' },
        { title: 'Wright-Dunbar Victorians', body: "Late-1800s homes with bay windows, tall baseboards, and plaster walls that need a gentler touch than modern drywall." },
        { title: "South Park's Historic Stock", body: "700-plus Queen Anne, Foursquare, and Craftsman structures from the 1880s through the early 1900s, each with its own original woodwork to work around." }
      ],
      seasonalHooks: [
        { title: 'Dayton Celtic Festival Season', body: 'Late July at RiverScape MetroPark brings Downtown-area homeowners hosting weekend guests, and we build a pre- and post-event cleaning window around it.' },
        { title: 'Winter Salt & Mud Season', body: 'December through March, entryway and hard-floor buildup in older Dayton homes needs more frequent attention than a summer schedule.' }
      ],
      breadcrumbLabel: 'Dayton House Cleaning',
      faqs: [
        { question: 'Do you clean older homes in the Oregon District or Wright-Dunbar?', answer: "Yes. A lot of our Dayton cleanings are in the Oregon District's rowhouses and Wright-Dunbar's late-1800s Victorians. Plaster walls, original hardwood, and tall baseboards need a gentler touch than modern drywall, and our crews adjust for that instead of treating every home the same." },
        { question: 'Do you serve the 45402 and 45459 zip codes?', answer: "Yes, along with 45405, 45406, 45410, and 45417. We cover Dayton's full zip code range, from Downtown high-rises near the Dayton Art Institute to family homes further out." },
        { question: 'Is there a contract if I want recurring cleaning in Dayton?', answer: 'No. Weekly, bi-weekly, monthly, or one-time, none of it requires a long-term contract. You can adjust or pause your Dayton cleaning schedule anytime.' },
        { question: 'Do you clean homes in South Park?', answer: "Yes. South Park's more than 700 Victorian and Craftsman-era structures are part of our regular Dayton route, and we treat the original woodwork and trim the same careful way we do in the Oregon District and Wright-Dunbar." },
        { question: 'Can you work around a Dayton Celtic Festival or Air Show weekend?', answer: "Yes. We're used to scheduling around RiverScape MetroPark events like the Celtic Festival, so your home is guest-ready before visitors arrive." }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Dayton, OH',
      heroSubtitle: 'Serving Downtown Offices to Oregon District Storefronts',
      metaDescription: 'Commercial cleaning in Dayton, OH: downtown offices, Oregon District restaurants and retail. Flexible after-hours scheduling.',
      intro: [
        "Downtown Dayton's office towers near Fifth Third Field and the Victoria Theatre need a different cleaning rhythm than the bars and restaurants a few blocks away in the Oregon District, where kitchens and late-night foot traffic mean cleaning crews often work early mornings after close.",
        "We handle both: office suites, retail storefronts, and restaurant common areas throughout Downtown and the Oregon District, with scheduling built around your hours, not ours.",
        "Grafton Hill and Five Oaks, home to the Dayton Art Institute, round out our commercial route with smaller professional offices that need the same reliable, background-checked crews as our biggest Downtown accounts.",
        "Gem City Cleaning Crew has served the Dayton area since 2017, and every commercial cleaner is Checkr background-checked and licensed and insured before ever working a Dayton account independently."
      ],
      businessDistricts: [
        { title: 'Downtown Core', body: 'Office towers and professional suites near Fifth Third Field and the Victoria Theatre, cleaned on a standard weekday schedule.' },
        { title: 'Oregon District', body: 'Restaurants, bars, and retail storefronts that need early-morning, after-close cleaning around kitchen and dining-area turnover.' },
        { title: 'Grafton Hill / Five Oaks', body: 'Smaller professional offices near the Dayton Art Institute, scheduled around standard business hours.' }
      ],
      seasonalHooks: [
        { title: 'Dayton Celtic Festival & Air Show Season', body: "Late June and July bring extra downtown foot traffic. Restaurants and retail near the Oregon District and RiverScape MetroPark often add a cleaning pass around event weekends." },
        { title: 'Oktoberfest at the Dayton Art Institute', body: 'Late September events near Grafton Hill mean a pre- and post-event reset for nearby offices and venues.' }
      ],
      breadcrumbLabel: 'Dayton Commercial Cleaning',
      faqs: [
        { question: 'Can you clean Oregon District restaurants after close?', answer: "Yes. A lot of our Oregon District work happens early morning after close, since that's when kitchens and dining areas are actually empty. We build the schedule around your hours, not the other way around." },
        { question: 'Do you clean office suites near Fifth Third Field and the Victoria Theatre?', answer: 'Yes, that Downtown Dayton corridor is one of our regular commercial service areas, along with retail storefronts and restaurant common areas throughout the Oregon District.' },
        { question: 'Are your commercial cleaners insured?', answer: 'Yes. Gem City Cleaning Crew is licensed and insured for every Dayton commercial job, and every cleaner completes three months of training before working independently.' },
        { question: 'Do you clean offices near the Dayton Art Institute?', answer: "Yes. Grafton Hill and Five Oaks' smaller professional offices near the Art Institute are part of our regular commercial route, cleaned on the same standard business-hours schedule as our Downtown accounts." },
        { question: 'Can you add a cleaning pass around a Downtown event weekend?', answer: 'Yes. Businesses near the Oregon District and RiverScape MetroPark often add an event-weekend cleaning pass around the Celtic Festival, Air Show, or Oktoberfest, just let us know the dates.' }
      ],
    },
  },

  kettering: {
    name: 'Kettering',
    zipCodes: ['45409', '45419', '45420', '45429', '45430', '45439', '45440', '45459'],
    landmarks: ['Fraze Pavilion', 'Town & Country Shopping Center'],
    neighborhoods: [
      { title: '45429 Core', body: 'The heart of Kettering, closest to Fraze Pavilion, with a mix of established ranch and split-level homes.' },
      { title: 'Indian Riffle Area', body: 'Neighborhoods near Indian Riffle Park on the city\'s east side, a mix of mid-century and newer infill homes.' },
      { title: 'Town & Country Corridor', body: 'Homes and condos near the Town & Country retail district, on the western side of the 45419/45459 zips.' }
    ],
    residential: {
      heroTitle: 'House Cleaning Services in Kettering, OH',
      heroSubtitle: 'Serving Homes Throughout Kettering, Ohio',
      metaDescription: 'Professional house cleaning in Kettering, OH near Fraze Pavilion and Town & Country. Licensed, insured, flexible scheduling.',
      intro: [
        "Kettering is named for Charles Kettering, but it's Ermal Fraze, the Kettering resident who invented the pop-top can, that the 4,300-seat Fraze Pavilion amphitheater honors. It's one of the touches that makes this a distinct community, not just a Dayton suburb.",
        "We serve homes across Kettering's 45429 core and the surrounding 45409, 45419, 45420, 45430, 45439, 45440, and 45459 zips, from starter homes to larger properties near the Town & Country retail corridor.",
        "At roughly 57,000 residents, Kettering is the most populous suburb in the Dayton area, and its mostly mid-century housing stock of ranches and split-levels is a big part of why we tailor each visit to the home's actual age rather than a one-size-fits-all checklist.",
        "Every cleaner we send to a Kettering home has completed three months of training and passed a Checkr background check, and every visit is backed by the same licensed-and-insured guarantee, no long-term contract required."
      ],
      homeEras: [
        { title: 'Mid-Century Ranches', body: 'Kettering grew fastest in the decades after WWII, and its ranch and split-level homes from that era often have original hardwood under carpet and older tile that needs a gentler touch.' },
        { title: '45429 Core Homes', body: "Established homes closest to Fraze Pavilion, Kettering's oldest and most walkable residential core." },
        { title: 'Newer Builds Near Town & Country', body: 'Larger, more recently built properties near the Town & Country retail corridor round out the mix.' }
      ],
      seasonalHooks: [
        { title: 'Fraze Pavilion Concert Season', body: "Summer concert season at Fraze Pavilion means more weekend guests for homes nearby, and we're used to scheduling a pre-event cleaning around it." },
        { title: 'Winter Salt & Mud Season', body: "December through March, entryway floors near Kettering's busiest corridors see more tracked-in salt and mud than a typical summer month." }
      ],
      breadcrumbLabel: 'Kettering House Cleaning',
      faqs: [
        { question: 'Do you clean homes near Fraze Pavilion?', answer: "Yes. Fraze Pavilion sits right in the heart of Kettering's 45429 core, and it's one of the neighborhoods we clean most regularly." },
        { question: 'What Kettering zip codes do you serve?', answer: 'The 45429 core plus the surrounding 45409, 45419, 45420, 45430, 45439, 45440, and 45459 zips, basically all of Kettering, from starter homes to larger properties near Town & Country.' },
        { question: 'Do I need to be home for my Kettering cleaning?', answer: "No. Most Kettering clients leave access instructions and go about their day. It's entirely up to what works for you." },
        { question: 'Do you have experience with Kettering\'s older ranch and split-level homes?', answer: "Yes. A lot of Kettering's housing stock is mid-century ranches and split-levels, often with original hardwood or older tile, and our crews adjust for that instead of treating every home like new construction." },
        { question: 'Can you schedule around a Fraze Pavilion concert weekend?', answer: 'Yes. We regularly schedule a pre-event cleaning for Kettering homeowners hosting guests for a Fraze Pavilion show.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Kettering, OH',
      heroSubtitle: 'Offices & Retail Near Town & Country and Fraze Pavilion',
      metaDescription: 'Commercial cleaning in Kettering, OH for offices and retail near Town & Country Shopping Center. Licensed & insured.',
      intro: [
        "The Town & Country Shopping Center anchors a lot of Kettering's retail and office space, and businesses there need cleaning schedules that work around store hours and foot traffic rather than a one-size-fits-all timetable.",
        "We clean offices, retail spaces, and medical facilities throughout Kettering, with evening and after-hours options for businesses near Fraze Pavilion and the Town & Country corridor.",
        "As the Dayton area's most populous suburb at roughly 57,000 residents, Kettering supports a real mix of medical offices, professional services, and retail beyond the Town & Country anchor, and we scale our crews to fit each account's actual footprint.",
        "Gem City Cleaning Crew has served Kettering businesses since 2017, and every commercial cleaner is Checkr background-checked, licensed, and insured before working a Kettering account independently."
      ],
      businessDistricts: [
        { title: 'Town & Country Corridor', body: "Kettering's largest retail and office concentration, scheduled around store hours and foot traffic." },
        { title: 'Medical & Professional Offices', body: "Medical facilities and professional offices spread across Kettering's 45429 core and surrounding zips." },
        { title: 'Fraze Pavilion Area', body: 'Businesses near Fraze Pavilion that see event-driven foot traffic in summer concert season.' }
      ],
      seasonalHooks: [
        { title: 'Fraze Pavilion Concert Season', body: 'Summer shows bring extra foot traffic to nearby businesses, and we can add an event-weekend cleaning pass on request.' },
        { title: 'Holiday Retail Season', body: 'November and December bring heavier foot traffic to Town & Country retailers, and we can step up cleaning frequency to match.' }
      ],
      breadcrumbLabel: 'Kettering Commercial Cleaning',
      faqs: [
        { question: 'Do you clean retail spaces at Town & Country Shopping Center?', answer: "Yes. Town & Country anchors a lot of Kettering's retail and office space, and we schedule around store hours and foot traffic there instead of a one-size-fits-all timetable." },
        { question: 'Can you clean medical offices in Kettering?', answer: 'Yes, we clean offices, retail, and medical facilities throughout Kettering, including near Fraze Pavilion and the Town & Country corridor.' },
        { question: 'Do you offer after-hours commercial cleaning in Kettering?', answer: 'Yes. Evening and after-hours scheduling is standard for our Kettering commercial clients, so cleaning never disrupts your business hours.' },
        { question: 'Can you increase cleaning frequency during the holiday retail season?', answer: 'Yes. Town & Country retailers see heavier foot traffic in November and December, and we can step up cleaning frequency to match without a new contract.' },
        { question: 'Do you clean businesses near Fraze Pavilion during concert season?', answer: 'Yes, and we can add an event-weekend cleaning pass for businesses that see extra foot traffic from summer shows.' }
      ],
    },
  },

  oakwood: {
    name: 'Oakwood',
    zipCodes: ['45419'],
    landmarks: ['Schantz Park Historic District', "Hawthorn Hill", 'Wright Memorial Public Library'],
    // Oakwood is a small, single-zip city (~9,458 residents, Census ACS) with
    // no distinct named residential subdivisions beyond its one historic
    // district — thin-material allowance per the depth-expansion plan,
    // Section 5.0.2: no `neighborhoods` block rather than padding with
    // invented names.
    residential: {
      heroTitle: 'House Cleaning Services in Oakwood, OH',
      heroSubtitle: 'Trusted Cleaning for Oakwood\'s Historic Homes',
      metaDescription: 'Professional house cleaning in Oakwood, OH: Schantz Park and the 45419 area. Experienced with historic homes, licensed & insured.',
      intro: [
        "Oakwood's Schantz Park Historic District is listed on the National Register of Historic Places, with many homes built before 1939, not far from Hawthorn Hill, Orville Wright's former home. Cleaning a house like that means working around original woodwork, older window frames, and finishes that don't always match modern building materials.",
        "Nearly all of Oakwood falls within 45419. We tailor our approach to each home's age and layout, whether that's a Schantz Park original or a newer build near the Wright Memorial Public Library.",
        "At roughly 9,500 residents, Oakwood is one of the smallest cities we serve, but its concentration of pre-1939 historic homes means our crews spend more time per square foot here than in a typical newer-construction suburb.",
        "Every Oakwood cleaner is Checkr background-checked and completes three months of training before working independently, and every visit is backed by the same licensed-and-insured guarantee we bring to every home on our route."
      ],
      homeEras: [
        { title: 'Schantz Park Pre-1939 Originals', body: 'Homes on the National Register of Historic Places, with original woodwork and window frames that need a gentler approach than modern materials.' },
        { title: 'Hawthorn Hill Area', body: "Established homes near Orville Wright's former estate, similar in age and finish to the Schantz Park district." },
        { title: 'Newer Builds Near Wright Memorial Library', body: 'More recently built homes closer to the Wright Memorial Public Library, still within the compact 45419 footprint.' }
      ],
      seasonalHooks: [
        { title: 'Historic-Home Deep Clean Season', body: 'Spring is when older Oakwood homes tend to need the most attention to window frames and original woodwork after a winter closed up.' },
        { title: 'Winter Salt & Mud Season', body: "December through March, entryway floors in Oakwood's historic homes see more tracked-in salt and mud than in summer." }
      ],
      breadcrumbLabel: 'Oakwood House Cleaning',
      faqs: [
        { question: 'Do you have experience cleaning historic homes in Schantz Park?', answer: "Yes. Schantz Park Historic District is listed on the National Register of Historic Places, with many homes built before 1939, and we're used to working around original woodwork and older window frames rather than treating them like a modern build." },
        { question: 'Do you serve the whole 45419 zip code?', answer: 'Yes. Nearly all of Oakwood falls within 45419, from Schantz Park originals to newer builds near the Wright Memorial Public Library.' },
        { question: 'Do you bring your own cleaning supplies to Oakwood homes?', answer: "Yes, our trained crews bring their own tools and supplies. If a historic home's finishes need something specific, just let us know and we'll accommodate that." },
        { question: 'Is Oakwood too small a city for regular recurring cleaning?', answer: "Not at all. Oakwood has roughly 9,500 residents, and we serve it the same way we serve larger cities, weekly, bi-weekly, monthly, or one-time." },
        { question: 'When is the best time to schedule a deep clean for an older Oakwood home?', answer: 'Spring tends to be when historic homes here need the most attention, after a winter closed up around original window frames and woodwork.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Oakwood, OH',
      heroSubtitle: 'Serving Oakwood\'s Local Businesses',
      metaDescription: 'Commercial cleaning in Oakwood, OH for small businesses and offices in the 45419 area. Licensed & insured.',
      intro: [
        "Oakwood is a small, mostly residential community, and its handful of local businesses and professional offices, many clustered along Far Hills Avenue, tend to want the same personal, detail-oriented service their historic-home neighbors expect.",
        "We provide that same level of care for Oakwood's offices and small businesses, with flexible scheduling that fits a compact commercial footprint.",
        "With roughly 9,500 residents citywide, Oakwood's commercial base is genuinely small, which is exactly why we don't size our scheduling or pricing around a minimum job like a franchise operation might.",
        "Gem City Cleaning Crew has served the Oakwood area since 2017, and every commercial cleaner is Checkr background-checked, licensed, and insured before working an Oakwood account independently."
      ],
      businessDistricts: [
        { title: 'Far Hills Avenue Corridor', body: "Oakwood's main cluster of local businesses and professional offices." },
        { title: 'Small Professional Offices', body: 'Scattered small offices throughout the compact 45419 footprint, scheduled around individual business hours.' }
      ],
      seasonalHooks: [
        { title: 'Spring Deep Clean Season', body: 'Small Oakwood offices often want a deeper spring cleaning pass after a winter of closed windows and heating.' },
        { title: 'Holiday Season Reset', body: 'A pre- or post-holiday cleaning pass is popular with small Oakwood offices before year-end.' }
      ],
      breadcrumbLabel: 'Oakwood Commercial Cleaning',
      faqs: [
        { question: 'Do you clean small offices along Far Hills Avenue?', answer: "Yes. A lot of Oakwood's local businesses and professional offices cluster along Far Hills Avenue, and that's a regular part of our commercial route." },
        { question: 'Is Oakwood too small an area for regular commercial service?', answer: 'Not at all. Oakwood is a small, mostly residential community, and we scale our scheduling to fit a compact commercial footprint rather than requiring a minimum job size.' },
        { question: 'Are Oakwood commercial cleanings covered by insurance?', answer: 'Yes. Gem City Cleaning Crew is licensed and insured for every commercial job in Oakwood.' },
        { question: 'Can you do a one-time deep clean for a small Oakwood office?', answer: 'Yes. Spring is a popular time for a deeper cleaning pass after a winter of closed windows, but we can schedule a one-time deep clean any time of year.' },
        { question: 'Do you offer a holiday season cleaning for Oakwood businesses?', answer: 'Yes, a pre- or post-holiday reset is a popular request from small Oakwood offices before year-end.' }
      ],
    },
  },

  centerville: {
    name: 'Centerville',
    zipCodes: ['45305', '45458', '45459'],
    landmarks: ['Uptown Centerville', 'Asahel Wright House'],
    neighborhoods: [
      { title: 'Uptown Centerville', body: "The city's historic core around the Asahel Wright House at the Four Corners, with brick sidewalks and limestone architecture." },
      { title: 'Yankee Trace', body: 'A golf-course community on the west side of Centerville, home to roughly 1,850 residents.' },
      { title: 'Washington Township Neighborhoods', body: 'Established residential streets throughout the surrounding 45458 and 45459 zips.' }
    ],
    residential: {
      heroTitle: 'House Cleaning Services in Centerville, OH',
      heroSubtitle: 'Serving Homes Across Centerville Since Founding in 1796',
      metaDescription: 'Professional house cleaning services in Centerville, Ohio: Uptown and surrounding neighborhoods. Licensed, insured, no contracts.',
      intro: [
        "Founded in 1796, Centerville has one of Ohio's largest collections of early stone buildings, and Uptown Centerville's brick sidewalks and limestone architecture still define the area around the Asahel Wright House at the Four Corners.",
        "We clean homes throughout Centerville's 45305, 45458, and 45459 zip codes, from homes near Uptown to newer developments further out, with the same reliable, no-contract scheduling.",
        "At around 25,000 residents spread across 45 distinct neighborhoods, from historic Uptown to golf-course communities like Yankee Trace, Centerville has enough housing variety that we build each cleaning plan around the actual home rather than a single template.",
        "Every Centerville cleaner has completed three months of training and passed a Checkr background check, and every visit is backed by the same licensed-and-insured guarantee, with no long-term contract required."
      ],
      homeEras: [
        { title: 'Uptown Stone Originals', body: "Early stone buildings and homes near the Asahel Wright House, some of Ohio's oldest surviving stone architecture." },
        { title: 'Yankee Trace Golf-Course Homes', body: 'Newer construction in the Yankee Trace community on the west side of town.' },
        { title: 'Washington Township Subdivisions', body: 'A wide mix of established and newer homes across the 45458 and 45459 zips.' }
      ],
      seasonalHooks: [
        { title: 'Uptown Centerville Event Season', body: "Spring and summer events Uptown mean more weekend guests for nearby homeowners, and we're used to scheduling a pre-event cleaning around it." },
        { title: 'Winter Salt & Mud Season', body: "December through March, entryway floors near Centerville's busiest corridors see more tracked-in salt and mud than summer." }
      ],
      breadcrumbLabel: 'Centerville House Cleaning',
      faqs: [
        { question: 'Do you clean historic stone homes in Uptown Centerville?', answer: "Yes. Centerville has one of Ohio's largest collections of early stone buildings, and Uptown's brick sidewalks and limestone architecture near the Asahel Wright House are part of our regular service area." },
        { question: 'What zip codes do you cover in Centerville?', answer: '45305, 45458, and 45459, from homes near Uptown to newer developments further out.' },
        { question: 'Can I reschedule my Centerville cleaning if my plans change?', answer: 'Yes. No long-term contracts means flexible rescheduling. Just call ahead of your appointment.' },
        { question: 'Do you clean homes in the Yankee Trace community?', answer: 'Yes. Yankee Trace, on the west side of Centerville, is a regular part of our route alongside historic Uptown and the surrounding Washington Township neighborhoods.' },
        { question: 'Can you schedule around an Uptown Centerville event weekend?', answer: "Yes. We're used to scheduling a pre-event cleaning for homeowners near Uptown hosting guests for a spring or summer event." }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Centerville, OH',
      heroSubtitle: 'Serving Nearly 100 Uptown Centerville Businesses and More',
      metaDescription: 'Commercial cleaning in Centerville, OH for offices and retail in and around Uptown Centerville. Flexible scheduling.',
      intro: [
        "Uptown Centerville is home to nearly 100 businesses along Main Street's Architectural Preservation District: boutiques, cafés, and offices that need cleaning crews who can work around retail hours and historic storefronts alike.",
        "We serve offices, retail, and medical facilities throughout Centerville, with scheduling built around your business hours, not ours.",
        "Beyond Uptown, Centerville's roughly 25,000 residents support a real base of medical and professional offices throughout Washington Township, and we treat those accounts with the same care as our historic Main Street clients.",
        "Gem City Cleaning Crew has served Centerville businesses since 2017, and every commercial cleaner is Checkr background-checked, licensed, and insured before working a Centerville account independently."
      ],
      businessDistricts: [
        { title: 'Main Street Architectural Preservation District', body: 'Nearly 100 businesses in historic storefronts, scheduled around retail hours.' },
        { title: 'Medical & Professional Offices', body: 'Medical facilities and professional offices spread across Washington Township.' },
        { title: 'Yankee Trace Area Businesses', body: 'Retail and services near the Yankee Trace community on the west side of town.' }
      ],
      seasonalHooks: [
        { title: 'Uptown Event Season', body: "Spring and summer events Uptown bring extra foot traffic to nearby businesses, and we can add an event-weekend cleaning pass on request." },
        { title: 'Holiday Retail Season', body: 'November and December bring heavier foot traffic to Uptown retailers, and we can step up cleaning frequency to match.' }
      ],
      breadcrumbLabel: 'Centerville Commercial Cleaning',
      faqs: [
        { question: 'Do you clean businesses in the Main Street Architectural Preservation District?', answer: 'Yes. Uptown Centerville has nearly 100 businesses along that district, and we work around retail hours and historic storefronts there regularly.' },
        { question: 'Do you clean offices outside of Uptown Centerville too?', answer: 'Yes, we serve offices, retail, and medical facilities throughout Centerville, not just the Uptown corridor.' },
        { question: 'Do you provide your own cleaning equipment for Centerville businesses?', answer: 'Yes, we bring all necessary supplies and equipment, using commercial-grade products that are effective yet safe for your workplace.' },
        { question: 'Can you increase cleaning frequency during the holiday retail season?', answer: 'Yes. Uptown retailers see heavier foot traffic in November and December, and we can step up cleaning frequency to match without a new contract.' },
        { question: 'Do you clean businesses near Yankee Trace?', answer: 'Yes, retail and service businesses near the Yankee Trace community are part of our regular Centerville commercial route.' }
      ],
    },
  },

  miamisburg: {
    name: 'Miamisburg',
    zipCodes: ['45342'],
    landmarks: ['Miamisburg Mound', 'Mound Park', 'Market Square'],
    neighborhoods: [
      { title: 'City Center', body: "Miamisburg's historic downtown around Market Square and the city's last remaining brick street." },
      { title: 'Miamisburg South & Southeast', body: 'Established residential areas on the south side of the city, closer to the Great Miami River.' },
      { title: 'Sycamore Trails & Sunflower Park', body: 'Newer residential development further from downtown, on the edges of the 45342 zip code.' }
    ],
    residential: {
      heroTitle: 'House Cleaning Services in Miamisburg, OH',
      heroSubtitle: 'Serving Homes Near the Miamisburg Mound',
      metaDescription: 'Professional house cleaning in Miamisburg, OH, zip code 45342. Licensed, insured, flexible scheduling.',
      intro: [
        "The Miamisburg Mound is the largest prehistoric burial mound in the Eastern U.S., 65 feet tall, inside the 37-acre Mound Park, and it's a fitting anchor for a city that takes its history seriously, down to the last remaining brick street in its historic downtown.",
        "We clean homes throughout Miamisburg's 45342 zip code, from homes near downtown's Market Square to newer neighborhoods further from the river.",
        "At about 20,000 residents spread across neighborhoods like City Center, Miamisburg South, and the newer Sycamore Trails area, the city has enough of a range in home age that we tailor each visit rather than treating every Miamisburg home the same.",
        "Every Miamisburg cleaner has completed three months of training and passed a Checkr background check, and every visit is backed by the same licensed-and-insured guarantee, no long-term contract required."
      ],
      homeEras: [
        { title: 'City Center Originals', body: "Homes near Miamisburg's historic downtown and last remaining brick street, some of the city's oldest housing stock." },
        { title: 'South Side River-Area Homes', body: 'Established homes in Miamisburg South and Southeast, closer to the Great Miami River.' },
        { title: 'Newer Builds Near Sycamore Trails', body: 'More recently built homes further from downtown, on the edges of the 45342 zip.' }
      ],
      seasonalHooks: [
        { title: 'Mound Park Event Season', body: "Spring and summer bring more visitors to the Miamisburg Mound and Mound Park, and homeowners nearby often want a guest-ready deep clean before hosting." },
        { title: 'Winter Salt & Mud Season', body: "December through March, entryway floors near Miamisburg's older brick-street downtown see more tracked-in salt and mud than summer." }
      ],
      breadcrumbLabel: 'Miamisburg House Cleaning',
      faqs: [
        { question: 'Do you clean homes near the Miamisburg Mound?', answer: "Yes. The Miamisburg Mound and the 37-acre Mound Park it sits in are right in the middle of our Miamisburg service area." },
        { question: 'Do you serve all of 45342?', answer: "Yes, that's the only zip code Miamisburg needs. We cover it fully, from homes near downtown's Market Square to newer neighborhoods further from the river." },
        { question: 'Is there a minimum contract length for Miamisburg cleaning?', answer: "No. We don't require contracts. Weekly, bi-weekly, monthly, or one-time, whatever fits your Miamisburg home." },
        { question: 'Do you clean homes in the newer Sycamore Trails area?', answer: 'Yes. Newer construction near Sycamore Trails and Sunflower Park is part of our regular Miamisburg route, alongside older homes near City Center.' },
        { question: 'Can you schedule a deep clean before hosting guests near Mound Park?', answer: "Yes. Spring and summer bring more visitors to the Miamisburg Mound, and we're used to scheduling a guest-ready deep clean around it." }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Miamisburg, OH',
      heroSubtitle: 'Serving Historic Downtown Miamisburg Businesses',
      metaDescription: 'Commercial cleaning in Miamisburg, OH for offices and retail near historic downtown and Mound Park. Licensed & insured.',
      intro: [
        "Miamisburg's historic downtown, anchored by the Market Square building and the city's last brick street, is home to small businesses that want the same attention to detail the city puts into preserving its own history.",
        "We clean offices and retail spaces throughout Miamisburg, with after-hours scheduling that works around downtown foot traffic.",
        "With roughly 20,000 residents across the city, Miamisburg's commercial base extends well beyond City Center into the newer development near Sycamore Trails, and we schedule each account around its own hours rather than one downtown-only routine.",
        "Gem City Cleaning Crew has served Miamisburg businesses since 2017, and every commercial cleaner is Checkr background-checked, licensed, and insured before working a Miamisburg account independently."
      ],
      businessDistricts: [
        { title: 'City Center / Market Square', body: "Miamisburg's historic downtown business core, anchored by the Market Square building." },
        { title: 'South Side Offices & Retail', body: 'Commercial space in Miamisburg South, closer to the Great Miami River.' },
        { title: 'Sycamore Trails Area', body: 'Newer commercial development on the edges of the 45342 zip code.' }
      ],
      seasonalHooks: [
        { title: 'Mound Park Event Season', body: 'Spring and summer visitor traffic to the Miamisburg Mound brings extra foot traffic to nearby downtown businesses.' },
        { title: 'Holiday Downtown Season', body: 'November and December bring more downtown foot traffic, and we can step up cleaning frequency for City Center businesses.' }
      ],
      breadcrumbLabel: 'Miamisburg Commercial Cleaning',
      faqs: [
        { question: "Do you clean businesses near Miamisburg's Market Square?", answer: "Yes. Miamisburg's historic downtown, anchored by the Market Square building and the city's last brick street, is a regular part of our commercial route." },
        { question: 'Can you schedule around downtown Miamisburg foot traffic?', answer: "Yes. We offer after-hours scheduling specifically so cleaning doesn't compete with downtown foot traffic." },
        { question: 'Are your Miamisburg commercial cleaners background-checked?', answer: 'Yes. Every Gem City cleaner is Checkr background-checked and completes three months of training before working independently.' },
        { question: 'Do you clean newer commercial space near Sycamore Trails?', answer: 'Yes, newer commercial development on the edges of Miamisburg is part of our regular route alongside historic City Center businesses.' },
        { question: 'Can you increase cleaning during the holiday downtown season?', answer: 'Yes. Downtown foot traffic picks up in November and December, and we can step up cleaning frequency for City Center businesses without a new contract.' }
      ],
    },
  },

  springboro: {
    name: 'Springboro',
    zipCodes: ['45066'],
    landmarks: ['Springboro Historic District', 'Old Stone Church'],
    neighborhoods: [
      { title: 'Historic District', body: 'Federal and Greek Revival buildings along Main, East, and Mill Streets, near the Old Stone Church.' },
      { title: 'Heatherwoode', body: "A well-established residential community on Springboro's west side, built around the Heatherwoode Golf Club." },
      { title: 'Settlers Walk & Northampton', body: "Newer residential subdivisions on the city's northern and eastern sides." }
    ],
    residential: {
      heroTitle: 'House Cleaning Services in Springboro, OH',
      heroSubtitle: 'Serving Homes Between Dayton and Cincinnati',
      metaDescription: 'Professional house cleaning in Springboro, OH, zip code 45066. Licensed, insured, no contracts required.',
      intro: [
        "Springboro sits between Dayton and Cincinnati, and its 50-acre Historic District, Federal and Greek Revival buildings along Main, East, and Mill Streets, reflects a city that provided more Underground Railroad safe houses than anywhere else in Ohio.",
        "We clean homes throughout Springboro's 45066 zip code, from homes near the Old Stone Church and historic district to newer developments on the city's edges.",
        "At roughly 19,600 residents, Springboro has grown well beyond its historic core into newer communities like Heatherwoode and Settlers Walk, and we tailor our approach whether that means a 19th-century home along Main Street or a recently built one further out.",
        "Every Springboro cleaner has completed three months of training and passed a Checkr background check, and every visit is backed by the same licensed-and-insured guarantee, no long-term contract required."
      ],
      homeEras: [
        { title: 'Historic District Federal & Greek Revival', body: '19th-century homes along Main, East, and Mill Streets, part of a 50-acre historic district.' },
        { title: 'Heatherwoode Community', body: "Established homes built around Springboro's Heatherwoode Golf Club on the west side." },
        { title: 'Newer Subdivisions', body: 'More recently built homes in Settlers Walk, Northampton, and similar developments on the city\'s edges.' }
      ],
      seasonalHooks: [
        { title: 'Historic District Event Season', body: "Spring and summer events near Springboro's Main Street bring more weekend guests for nearby homeowners." },
        { title: 'Winter Salt & Mud Season', body: 'December through March, entryway floors see more tracked-in salt and mud than a typical summer month.' }
      ],
      breadcrumbLabel: 'Springboro House Cleaning',
      faqs: [
        { question: "Do you clean historic homes near Springboro's Old Stone Church?", answer: "Yes. Springboro's 50-acre Historic District includes Federal and Greek Revival buildings along Main, East, and Mill Streets, and we regularly clean homes near the Old Stone Church in that area." },
        { question: 'What zip code do you serve in Springboro?', answer: '45066. That covers all of Springboro, from the historic district to newer developments on the city\'s edges.' },
        { question: 'Do you offer one-time cleanings in Springboro, or only recurring?', answer: 'Both: one-time, weekly, bi-weekly, or monthly, with no contract required either way.' },
        { question: 'Do you clean homes in the Heatherwoode community?', answer: "Yes. Heatherwoode, built around Springboro's golf club on the west side, is part of our regular route alongside the historic district and newer subdivisions." },
        { question: 'Do you clean newer homes in Settlers Walk or Northampton?', answer: "Yes, those newer subdivisions on Springboro's edges are part of our regular service area." }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Springboro, OH',
      heroSubtitle: 'Serving Springboro\'s Growing Business Community',
      metaDescription: 'Commercial cleaning in Springboro, OH for offices and retail in the 45066 area. Flexible, after-hours scheduling available.',
      intro: [
        "Springboro's location between two major metro areas has brought steady business growth alongside its historic core, and local offices and retail spaces need cleaning that keeps pace without disrupting business hours.",
        "We serve offices, retail, and medical facilities throughout Springboro, with scheduling built around your team's hours.",
        "With roughly 19,600 residents and steady growth from its position between Dayton and Cincinnati, Springboro's commercial base spans everything from historic Main Street storefronts to newer offices near its growing subdivisions.",
        "Gem City Cleaning Crew has served Springboro businesses since 2017, and every commercial cleaner is Checkr background-checked, licensed, and insured before working a Springboro account independently."
      ],
      businessDistricts: [
        { title: 'Historic Main Street', body: '19th-century storefronts and offices in the Federal and Greek Revival historic district.' },
        { title: 'Growth-Corridor Offices', body: "Newer offices and retail benefiting from Springboro's steady growth between two metro areas." },
        { title: 'Medical & Professional Facilities', body: 'Medical and professional offices spread throughout the 45066 zip code.' }
      ],
      seasonalHooks: [
        { title: 'Historic District Event Season', body: 'Spring and summer events near Main Street bring extra foot traffic to nearby businesses.' },
        { title: 'Holiday Retail Season', body: 'November and December bring heavier foot traffic to Springboro retailers.' }
      ],
      breadcrumbLabel: 'Springboro Commercial Cleaning',
      faqs: [
        { question: "Do you clean offices in Springboro's growing business district?", answer: 'Yes. Springboro\'s location between Dayton and Cincinnati has brought steady business growth, and we serve offices and retail throughout that growth alongside the historic core.' },
        { question: 'Do you serve medical facilities in Springboro?', answer: 'Yes, we serve offices, retail, and medical facilities throughout Springboro.' },
        { question: 'Can Springboro businesses schedule cleaning around their own hours?', answer: "Yes. We build scheduling around your team's hours, not a fixed timetable." },
        { question: 'Do you clean historic storefronts along Main Street?', answer: 'Yes, 19th-century storefronts and offices in the historic district are part of our regular Springboro commercial route.' },
        { question: 'Can you increase cleaning frequency during the holiday retail season?', answer: 'Yes, we can step up cleaning frequency for Springboro retailers during the busier November and December season.' }
      ],
    },
  },

  'huber-heights': {
    name: 'Huber Heights',
    zipCodes: ['45371', '45344', '45424'],
    landmarks: ['Belle Plain', 'Beldale', 'Evergreen Woods', 'Stoney Creek'],
    neighborhoods: [
      { title: 'Belle Plain & Beldale', body: "Original brick ranch neighborhoods Charles Huber built, giving the city its \"largest community of brick homes\" motto." },
      { title: 'Evergreen Woods', body: 'An established residential area of classic Huber Heights brick ranches.' },
      { title: 'Stoney Creek & Callamere Farms', body: 'Newer, more upscale developments added to the city in recent decades.' }
    ],
    residential: {
      heroTitle: 'House Cleaning Services in Huber Heights, OH',
      heroSubtitle: '"America\'s Largest Community of Brick Homes"',
      metaDescription: 'Professional house cleaning in Huber Heights, OH: brick ranch homes and newer developments. Licensed & insured.',
      intro: [
        "Huber Heights earned its motto, \"America's largest community of brick homes,\" from the solid brick ranch homes Charles Huber built in neighborhoods like Belle Plain, Beldale, and Evergreen Woods. Newer upscale developments like Stoney Creek and Callamere Farms have added to the mix since.",
        "We clean homes throughout Huber Heights, from classic brick ranches to newer builds, with scheduling that works whether you're 10 minutes from Wright-Patterson AFB or closer to Dayton.",
        "With over 40,000 residents, Huber Heights is one of the larger cities we serve, and its mix of decades-old brick ranches and newer Stoney Creek-era construction means we adjust our approach by the home's actual age, not a single citywide checklist.",
        "Every Huber Heights cleaner has completed three months of training and passed a Checkr background check, and every visit is backed by the same licensed-and-insured guarantee, no long-term contract required."
      ],
      homeEras: [
        { title: 'Original Brick Ranches', body: "Charles Huber's original brick ranch homes in Belle Plain, Beldale, and Evergreen Woods, the housing stock behind the city's motto." },
        { title: 'Stoney Creek Era', body: 'Newer, more upscale homes built in developments like Stoney Creek and Callamere Farms.' },
        { title: 'Wright-Patterson-Adjacent Homes', body: 'Homes closer to Wright-Patterson AFB, popular with both base personnel and long-time residents.' }
      ],
      seasonalHooks: [
        { title: 'Wright-Patterson AFB PCS Season', body: 'May through August, military relocation season means move-in and move-out cleanings for families stationed near the base.' },
        { title: 'Winter Salt & Mud Season', body: 'December through March, entryway floors see more tracked-in salt and mud than a typical summer month.' }
      ],
      breadcrumbLabel: 'Huber Heights House Cleaning',
      faqs: [
        { question: 'Do you clean the brick ranch homes Huber Heights is known for?', answer: "Yes. Huber Heights earned its \"America's largest community of brick homes\" motto from the brick ranches Charles Huber built in neighborhoods like Belle Plain, Beldale, and Evergreen Woods, and that's most of what we clean there." },
        { question: 'Do you also clean newer homes in Stoney Creek?', answer: "Yes. Alongside the classic brick ranches, we clean newer upscale developments like Stoney Creek, whether you're closer to Wright-Patterson AFB or nearer to Dayton." },
        { question: 'Do your cleaners bring their own supplies to Huber Heights homes?', answer: 'Yes, our trained crews bring their own tools and supplies, and we can accommodate a specific product request if you have a sensitivity.' },
        { question: 'Can you help with a move-in or move-out cleaning tied to a Wright-Patterson AFB PCS?', answer: 'Yes. May through August is peak military relocation season near the base, and we regularly handle move-in and move-out cleanings on a PCS timeline.' },
        { question: 'Do you clean homes near Callamere Farms?', answer: "Yes, Callamere Farms and the surrounding newer developments are part of our regular Huber Heights service area." }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Huber Heights, OH',
      heroSubtitle: 'Serving a Major Industrial & Commercial Center',
      metaDescription: 'Commercial cleaning in Huber Heights, OH for offices and industrial facilities near Wright-Patterson AFB. Licensed & insured.',
      intro: [
        "With over 40,000 residents and a location 10 minutes from Wright-Patterson Air Force Base, Huber Heights has grown into a real industrial and commercial center, not just a residential suburb.",
        "We clean offices, retail, and industrial spaces throughout Huber Heights, with flexible scheduling for businesses that support the base and the surrounding community alike.",
        "That scale means a real mix of accounts, from industrial facilities near the base to smaller professional offices in the city's newer commercial corridors, and we size our crews to fit each one.",
        "Gem City Cleaning Crew has served Huber Heights businesses since 2017, and every commercial cleaner is Checkr background-checked, licensed, and insured before working an account independently."
      ],
      businessDistricts: [
        { title: 'Wright-Patterson-Adjacent Industrial', body: 'Industrial and commercial facilities supporting the base and its contractors.' },
        { title: 'Retail & Office Corridors', body: "Retail and professional offices spread throughout Huber Heights' 40,000-plus-resident footprint." },
        { title: 'Newer Commercial Development', body: 'Newer commercial space in and around the Stoney Creek and Callamere Farms growth areas.' }
      ],
      seasonalHooks: [
        { title: 'Wright-Patterson AFB PCS Season', body: 'May through August, military relocation season brings extra move-related cleaning demand for base-adjacent businesses too.' },
        { title: 'Holiday Retail Season', body: 'November and December bring heavier foot traffic to Huber Heights retailers.' }
      ],
      breadcrumbLabel: 'Huber Heights Commercial Cleaning',
      faqs: [
        { question: 'Do you clean industrial facilities in Huber Heights?', answer: 'Yes. With over 40,000 residents and a location 10 minutes from Wright-Patterson AFB, Huber Heights has real industrial and commercial space, and that\'s part of our regular service area there.' },
        { question: 'Can you clean offices that support Wright-Patterson AFB contractors?', answer: 'Yes, we clean offices, retail, and industrial spaces throughout Huber Heights, including businesses that support the base and its contractors.' },
        { question: 'Is there flexible scheduling for Huber Heights businesses?', answer: 'Yes. We offer flexible scheduling including evenings and weekends so cleaning never disrupts your operations.' },
        { question: 'Do you clean newer commercial space near Stoney Creek?', answer: 'Yes, newer commercial development in and around Stoney Creek and Callamere Farms is part of our regular route.' },
        { question: 'Can you increase cleaning frequency during PCS season?', answer: 'Yes. May through August brings more military relocation activity, and we can adjust scheduling for base-adjacent businesses that see more traffic during that window.' }
      ],
    },
  },

  riverside: {
    name: 'Riverside',
    zipCodes: ['45404', '45433'],
    landmarks: ['National Museum of the U.S. Air Force', 'Belmont', 'Kittyhawk', 'Walnut Hills'],
    neighborhoods: [
      { title: 'Belmont', body: 'A long-established Riverside neighborhood near the National Museum of the U.S. Air Force.' },
      { title: 'Kittyhawk', body: "A residential area named for the Wright brothers' first flight, close to Wright-Patterson AFB." },
      { title: 'Walnut Hills', body: 'A neighborhood on the other side of the Mad River from Belmont and Kittyhawk.' }
    ],
    residential: {
      heroTitle: 'House Cleaning Services in Riverside, OH',
      heroSubtitle: 'Serving a City Split by the Mad River',
      metaDescription: 'Professional house cleaning in Riverside, OH, home to the National Museum of the U.S. Air Force. Licensed & insured.',
      intro: [
        "Riverside, incorporated in 1995, is split in half by the Mad River and home to the National Museum of the U.S. Air Force, the largest aviation museum in the world, drawing over a million visitors a year.",
        "We clean homes throughout Riverside's neighborhoods, from Belmont and Kittyhawk to Walnut Hills, in the 45404 and 45433 zip codes.",
        "At roughly 24,000 residents, Riverside is a fairly compact city, but its neighborhoods on either side of the Mad River each have their own character, and we schedule crews familiar with both Belmont/Kittyhawk and the Walnut Hills side.",
        "Every Riverside cleaner has completed three months of training and passed a Checkr background check, and every visit is backed by the same licensed-and-insured guarantee, no long-term contract required."
      ],
      homeEras: [
        { title: 'Belmont & Kittyhawk', body: "Established neighborhoods near the National Museum of the U.S. Air Force, some of Riverside's oldest housing stock." },
        { title: 'Walnut Hills', body: 'Homes on the opposite side of the Mad River, with their own distinct residential character.' },
        { title: 'Wright-Patterson-Adjacent Homes', body: 'Homes close to Wright-Patterson AFB, popular with base personnel and long-time residents alike.' }
      ],
      seasonalHooks: [
        { title: 'Wright-Patterson AFB PCS Season', body: 'May through August, military relocation season means move-in and move-out cleanings for families near the base.' },
        { title: 'Air Force Museum Visitor Season', body: 'Spring and summer bring over a million visitors a year to the museum, and nearby homeowners often want a guest-ready deep clean before hosting.' }
      ],
      breadcrumbLabel: 'Riverside House Cleaning',
      faqs: [
        { question: 'Do you clean homes near the National Museum of the U.S. Air Force?', answer: 'Yes. Riverside is home to the National Museum of the U.S. Air Force, and we regularly clean homes in the neighborhoods around it, including Belmont and Kittyhawk.' },
        { question: 'What zip codes do you serve in Riverside?', answer: '45404 and 45433. That covers Riverside\'s neighborhoods on both sides of the Mad River, including Walnut Hills.' },
        { question: 'Do I need to be home during my Riverside cleaning?', answer: 'No. Many Riverside clients provide access instructions and go about their day. It\'s entirely up to what works for you.' },
        { question: 'Can you help with a move-in or move-out cleaning tied to a Wright-Patterson PCS?', answer: 'Yes. May through August is peak military relocation season near the base, and we regularly handle move-in and move-out cleanings on a PCS timeline.' },
        { question: 'Do you clean homes on the Walnut Hills side of the Mad River?', answer: 'Yes, Walnut Hills is part of our regular Riverside route alongside Belmont and Kittyhawk on the other side of the river.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Riverside, OH',
      heroSubtitle: 'Serving Offices Near Wright-Patterson AFB',
      metaDescription: 'Commercial cleaning in Riverside, OH for offices and businesses near Wright-Patterson Air Force Base. Licensed & insured.',
      intro: [
        "Riverside sits right next to Wright-Patterson Air Force Base, the third-largest base in the country, and many of its offices and commercial spaces serve base employees and contractors directly.",
        "We clean offices and commercial spaces throughout Riverside, with scheduling that fits the base's rhythms as easily as a standard 9-to-5.",
        "The National Museum of the U.S. Air Force also draws over a million visitors a year, and nearby businesses that serve that traffic get the same reliable scheduling as our base-adjacent accounts.",
        "Gem City Cleaning Crew has served Riverside businesses since 2017, and every commercial cleaner is Checkr background-checked, licensed, and insured before working a Riverside account independently."
      ],
      businessDistricts: [
        { title: 'Wright-Patterson-Adjacent Offices', body: 'Offices and commercial space directly serving base employees and contractors.' },
        { title: 'Museum-Area Businesses', body: 'Businesses near the National Museum of the U.S. Air Force that see visitor-driven foot traffic.' },
        { title: 'Walnut Hills Commercial', body: 'Smaller commercial space on the Walnut Hills side of the Mad River.' }
      ],
      seasonalHooks: [
        { title: 'Wright-Patterson AFB PCS Season', body: 'May through August, military relocation season brings extra activity for base-adjacent businesses.' },
        { title: 'Air Force Museum Visitor Season', body: "Spring and summer visitor traffic to the museum's over a million annual visitors means more foot traffic for nearby businesses." }
      ],
      breadcrumbLabel: 'Riverside Commercial Cleaning',
      faqs: [
        { question: 'Do you clean offices near Wright-Patterson Air Force Base?', answer: 'Yes. Riverside sits right next to Wright-Patterson, the third-largest base in the country, and a lot of our Riverside commercial work is for offices that serve base employees and contractors directly.' },
        { question: 'Can you work around a schedule tied to the base?', answer: "Yes. Our scheduling fits the base's rhythms as easily as a standard 9-to-5." },
        { question: 'Are your Riverside commercial cleaners licensed and insured?', answer: 'Yes. Gem City Cleaning Crew is licensed and insured for every Riverside commercial job.' },
        { question: 'Do you clean businesses near the National Museum of the U.S. Air Force?', answer: 'Yes, businesses that see visitor-driven foot traffic from the museum\'s over a million annual visitors are part of our regular Riverside route.' },
        { question: 'Can you increase cleaning during PCS season?', answer: 'Yes. May through August brings more military relocation activity, and we can adjust scheduling for base-adjacent businesses during that window.' }
      ],
    },
  },

  xenia: {
    name: 'Xenia',
    zipCodes: ['45385'],
    landmarks: ['Greene County Courthouse', 'East Second Street Historic District', 'Xenia Station'],
    // Verified neighborhood names from .claude/skills/gccc-blog-research/local-seo-hooks.md
    // (built for the dedicated Xenia residential page) — reused here for the
    // commercial page's city-level neighborhoods block, since Xenia's
    // residential route never renders this object (see note below).
    neighborhoods: [
      { title: 'Downtown / Courthouse Square', body: "Xenia's commercial and government core around the 1902 Greene County Courthouse." },
      { title: 'East Second Street Historic District', body: 'Victorian-era buildings near downtown, within walking distance of Xenia Station.' },
      { title: 'Arrowhead & Windsor Park', body: 'Established residential neighborhoods on the edges of downtown Xenia.' }
    ],
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
        "As the Greene County seat, Xenia's 1902 courthouse, designed by Samuel Hannaford & Sons, anchors a downtown surrounded by Victorian-era homes in the East Second Street Historic District, many within walking distance of Xenia Station's trail hub.",
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
        "We clean offices, retail, and professional spaces throughout Xenia, with scheduling built around your business hours.",
        "The East Second Street Historic District adds another layer to Xenia's commercial mix, with Victorian-era buildings near downtown housing small offices and shops within walking distance of Xenia Station.",
        "Gem City Cleaning Crew has served Xenia businesses since 2017, and every commercial cleaner is Checkr background-checked, licensed, and insured before working a Xenia account independently."
      ],
      businessDistricts: [
        { title: 'Courthouse Square', body: 'Government offices and professional services around the 1902 Greene County Courthouse.' },
        { title: 'East Second Street Historic District', body: 'Victorian-era buildings near downtown, home to small offices and shops.' },
        { title: 'Greene County Fairgrounds Area', body: 'Businesses tied to the fairgrounds and its annual county fair.' }
      ],
      seasonalHooks: [
        { title: 'Greene County Fair Season', body: 'Late July into August, fair-week traffic means extra cleaning demand for nearby businesses before the school year starts.' },
        { title: 'Hamvention Season', body: "Mid-May's Hamvention at the Greene County Expo Center draws roughly 30,000 visitors, and businesses nearby often need turnover cleaning for the surge in guests." }
      ],
      breadcrumbLabel: 'Xenia Commercial Cleaning',
      faqs: [
        { question: 'Do you clean government offices near the Greene County Courthouse?', answer: 'Yes. As the county seat, Xenia has a steady mix of government offices and professional services around the courthouse square, and that\'s a regular part of our commercial route.' },
        { question: 'Do you clean businesses tied to the Greene County Fairgrounds?', answer: 'Yes, we clean offices, retail, and professional spaces tied to the fairgrounds and the annual county fair as well as the downtown courthouse square.' },
        { question: 'Can Xenia businesses schedule cleaning around their own hours?', answer: 'Yes. We build scheduling around your business hours, not ours.' },
        { question: 'Do you clean offices in the East Second Street Historic District?', answer: 'Yes, the Victorian-era buildings near downtown Xenia Station are part of our regular commercial route.' },
        { question: 'Can you handle the extra cleaning demand around Hamvention or the Greene County Fair?', answer: 'Yes. Both events bring a real visitor surge to Xenia, and we can schedule extra turnover cleaning for businesses near the fairgrounds and expo center around those dates.' }
      ],
    },
  },

  beavercreek: {
    name: 'Beavercreek',
    zipCodes: ['45431', '45432', '45434'],
    landmarks: ['The Greene Town Center', 'Pentagon Boulevard Business District', 'Fairfield Commons'],
    neighborhoods: [
      { title: 'Trebein', body: 'A historic unincorporated community within Beavercreek Township, one of the area\'s oldest settled areas.' },
      { title: 'Shakertown Road Corridor', body: 'Newer residential development including Sky Crossing and Cedarbrook Farms.' },
      { title: "Hunter's Ridge & Bent Creek Woods", body: 'Established neighborhoods near the Trebein area, with a mix of housing styles.' }
    ],
    residential: {
      heroTitle: 'House Cleaning Services in Beavercreek, OH',
      heroSubtitle: 'Serving Homes Near The Greene and WPAFB',
      metaDescription: 'Professional house cleaning services in Beavercreek, Ohio, zip codes 45431, 45432, and 45434. Licensed & insured, same-day availability.',
      intro: [
        "Beavercreek's neighborhoods sit close to The Greene Town Center and are just minutes from Wright-Patterson Air Force Base, making it one of the area's most active residential communities for both families and base personnel.",
        "We clean homes throughout Beavercreek's 45431, 45432, and 45434 zip codes, with flexible scheduling for busy households near The Greene, Fairfield Commons, and the Colonel Glenn Highway corridor.",
        "At close to 48,000 residents, Beavercreek is one of the larger cities we serve, spanning historic Trebein to newer Shakertown Road-area developments like Sky Crossing and Cedarbrook Farms, and we schedule crews familiar with both the older and newer sides of town.",
        "Every Beavercreek cleaner has completed three months of training and passed a Checkr background check, and every visit is backed by the same licensed-and-insured guarantee, no long-term contract required."
      ],
      homeEras: [
        { title: 'Trebein Historic Area', body: "One of Beavercreek Township's oldest settled communities, with older housing stock than the newer subdivisions to the north." },
        { title: 'Shakertown Road New Construction', body: 'Newer developments like Sky Crossing and Cedarbrook Farms along the Shakertown Road corridor.' },
        { title: 'The Greene / Fairfield Commons Area', body: "Established homes near Beavercreek's main retail and entertainment district." }
      ],
      seasonalHooks: [
        { title: 'Wright-Patterson AFB PCS Season', body: 'May through August, military relocation season means move-in and move-out cleanings for families near the base.' },
        { title: 'Winter Salt & Mud Season', body: 'December through March, entryway floors near Colonel Glenn Highway see more tracked-in salt and mud than summer.' }
      ],
      breadcrumbLabel: 'Beavercreek House Cleaning',
      faqs: [
        { question: 'Do you clean homes near The Greene Town Center?', answer: "Yes. Beavercreek's neighborhoods near The Greene Town Center are one of our most active residential service areas." },
        { question: 'What zip codes do you serve in Beavercreek?', answer: '45431, 45432, and 45434, with flexible scheduling for busy households near The Greene, Fairfield Commons, and the Colonel Glenn Highway corridor.' },
        { question: 'Is Beavercreek cleaning available for families near Wright-Patterson AFB?', answer: 'Yes. Beavercreek sits just minutes from Wright-Patterson, and we regularly clean for both families and base personnel in the area.' },
        { question: 'Do you clean newer homes along Shakertown Road?', answer: 'Yes, newer developments like Sky Crossing and Cedarbrook Farms along the Shakertown Road corridor are part of our regular Beavercreek route.' },
        { question: 'Can you help with a move-in or move-out cleaning tied to a Wright-Patterson PCS?', answer: 'Yes. May through August is peak military relocation season near the base, and we regularly handle move-in and move-out cleanings on a PCS timeline.' }
      ],
    },
    // No `commercial` key — Beavercreek's commercial page is a separate,
    // already-built file. LocationPage.jsx redirects to it instead.
    commercialRedirect: '/locations/beavercreek/commercial-cleaning-services',
  },

  fairborn: {
    name: 'Fairborn',
    zipCodes: ['45324'],
    landmarks: ['Wright State University', 'Mall at Fairfield Commons', 'WSU Nutter Center'],
    neighborhoods: [
      { title: 'Wright State University Area', body: "Student and faculty housing surrounding Wright State's campus." },
      { title: 'City Center & Five Points', body: "Fairborn's historic downtown core." },
      { title: 'Holiday Valley', body: 'An established residential neighborhood on the east side of Fairborn.' }
    ],
    residential: {
      heroTitle: 'House Cleaning Services in Fairborn, OH',
      heroSubtitle: 'Serving Homes Near Wright State University',
      metaDescription: 'Professional house cleaning in Fairborn, OH, zip code 45324, home to Wright State University. Licensed & insured.',
      intro: [
        "Fairborn, about 14 miles northeast of Dayton, is home to Wright State University, independent since 1967 and named for the Wright brothers, which brings a mix of student housing, faculty homes, and long-time residents into the same zip code.",
        "We clean homes throughout Fairborn's 45324 zip code, whether that's a rental near campus or a family home closer to the historic downtown.",
        "At roughly 34,500 residents, Fairborn's housing ranges from campus-area rentals to established family neighborhoods like Holiday Valley, and we clean each the way it actually needs, not a single one-size-fits-all visit.",
        "Every Fairborn cleaner has completed three months of training and passed a Checkr background check, and every visit is backed by the same licensed-and-insured guarantee, no long-term contract required."
      ],
      homeEras: [
        { title: 'Campus-Area Rentals', body: 'Student and faculty rentals close to Wright State University, often needing a quicker turnover between tenants.' },
        { title: 'City Center Family Homes', body: "Long-time family homes near Fairborn's historic downtown core." },
        { title: 'Holiday Valley', body: 'An established residential neighborhood on the east side of the city.' }
      ],
      seasonalHooks: [
        { title: 'University Move-In Season', body: 'Mid-to-late August brings Wright State move-in, and a turnover cleaning between tenants is one of our most common Fairborn requests that time of year.' },
        { title: 'Wright-Patterson AFB PCS Season', body: 'May through August, military relocation season also drives move-in and move-out cleaning demand near the base.' }
      ],
      breadcrumbLabel: 'Fairborn House Cleaning',
      faqs: [
        { question: 'Do you clean rentals near Wright State University?', answer: 'Yes. Fairborn is home to Wright State University, and we clean everything from student rentals near campus to long-time family homes closer to the historic downtown.' },
        { question: 'What zip code do you serve in Fairborn?', answer: '45324. That covers all of Fairborn, campus-adjacent and otherwise.' },
        { question: 'Is there a contract required for Fairborn house cleaning?', answer: 'No. One-time, weekly, bi-weekly, or monthly, none of it requires a long-term contract.' },
        { question: 'Can you handle a turnover cleaning during Wright State move-in?', answer: "Yes. Mid-to-late August is Wright State's move-in period, and a turnover cleaning between student tenants is one of our most common Fairborn requests." },
        { question: 'Do you clean homes in Holiday Valley?', answer: "Yes, Holiday Valley and the surrounding east-side neighborhoods are part of our regular Fairborn service area." }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Fairborn, OH',
      heroSubtitle: 'Serving Offices Near Wright State and Fairfield Commons',
      metaDescription: 'Commercial cleaning in Fairborn, OH for offices and retail near Wright State University and the Mall at Fairfield Commons. Licensed & insured.',
      intro: [
        "Between Wright State University, the WSU Nutter Center, and the Mall at Fairfield Commons, Fairborn's commercial corridor sees a steady flow of students, staff, and shoppers that local businesses need to keep clean and presentable.",
        "We clean offices, retail spaces, and facilities throughout Fairborn, with scheduling that works around university and business hours alike.",
        "Fairborn's roughly 34,500 residents support a commercial base that spans university-adjacent services to City Center offices, and we schedule crews around each business's actual hours rather than a single campus-hours routine.",
        "Gem City Cleaning Crew has served Fairborn businesses since 2017, and every commercial cleaner is Checkr background-checked, licensed, and insured before working a Fairborn account independently."
      ],
      businessDistricts: [
        { title: 'Wright State University Corridor', body: 'Businesses and services near campus and the WSU Nutter Center.' },
        { title: 'Mall at Fairfield Commons Area', body: 'Retail and food service around the mall, with steady student and shopper foot traffic.' },
        { title: 'City Center Offices', body: "Professional offices in Fairborn's historic downtown core." }
      ],
      seasonalHooks: [
        { title: 'University Move-In Season', body: 'Mid-to-late August brings extra foot traffic to businesses near campus as students return.' },
        { title: 'Holiday Retail Season', body: 'November and December bring heavier foot traffic to Fairborn retailers near Fairfield Commons.' }
      ],
      breadcrumbLabel: 'Fairborn Commercial Cleaning',
      faqs: [
        { question: 'Do you clean offices near Wright State and the Nutter Center?', answer: "Yes. Fairborn's commercial corridor around Wright State University, the WSU Nutter Center, and the Mall at Fairfield Commons is a regular part of our service area." },
        { question: 'Can you handle the foot traffic near the Mall at Fairfield Commons?', answer: 'Yes, we clean offices, retail spaces, and facilities throughout Fairborn with scheduling that works around university and business hours alike.' },
        { question: 'Do you provide commercial-grade cleaning products in Fairborn?', answer: "Yes. We bring everything needed, from commercial-grade cleaning products to the equipment itself, so Fairborn businesses don't have to stock or manage supplies themselves." },
        { question: 'Do you clean offices in Fairborn\'s City Center?', answer: "Yes, professional offices in Fairborn's historic downtown core are part of our regular commercial route." },
        { question: 'Can you increase cleaning frequency during university move-in season?', answer: 'Yes. Mid-to-late August brings extra foot traffic to businesses near campus, and we can step up cleaning frequency to match.' }
      ],
    },
  },

  'yellow-springs': {
    name: 'Yellow Springs',
    zipCodes: ['45387'],
    landmarks: ['Antioch College', 'Glen Helen Nature Preserve', 'John Bryan State Park'],
    // Yellow Springs is a village of under 4,000 residents with no named
    // subdivisions beyond its village center and college-adjacent area —
    // thin-material allowance per the depth-expansion plan, Section 5.0.2.
    residential: {
      heroTitle: 'House Cleaning Services in Yellow Springs, OH',
      heroSubtitle: 'Serving a Village Anchored by Antioch College',
      metaDescription: 'Professional house cleaning in Yellow Springs, OH, zip code 45387, near Antioch College and Glen Helen. Licensed & insured.',
      intro: [
        "Yellow Springs is a village of under 4,000 people, built around Antioch College, founded in 1850, and bordered by the 700-plus acres of old-growth forest at Glen Helen Nature Preserve, with John Bryan State Park just beyond.",
        "We clean homes throughout Yellow Springs' 45387 zip code, from historic-district homes to properties bordering Glen Helen.",
        "Being one of the smallest villages we serve doesn't mean less attention. If anything, a compact, walkable community like Yellow Springs means our crews get to know a client's home and its quirks faster than in a larger, more spread-out city.",
        "Every Yellow Springs cleaner has completed three months of training and passed a Checkr background check, and every visit is backed by the same licensed-and-insured guarantee, no long-term contract required."
      ],
      homeEras: [
        { title: 'Antioch College-Area Homes', body: "Homes near the 1850-founded college, some of the village's oldest residential streets." },
        { title: 'Village Center Homes', body: "Historic-district properties closer to Yellow Springs' small downtown." },
        { title: 'Glen Helen-Adjacent Properties', body: 'Homes bordering the Glen Helen Nature Preserve on the edge of the village.' }
      ],
      seasonalHooks: [
        { title: 'Glen Helen & John Bryan Hiking Season', body: 'Spring through fall visitor traffic to Glen Helen and John Bryan State Park means more guests for homeowners near the trails.' },
        { title: 'Winter Salt & Mud Season', body: 'December through March, entryway floors near the trailheads see more tracked-in mud and salt than summer.' }
      ],
      breadcrumbLabel: 'Yellow Springs House Cleaning',
      faqs: [
        { question: 'Do you clean homes near Antioch College or Glen Helen?', answer: 'Yes. Yellow Springs is built around Antioch College, founded in 1850, and bordered by the Glen Helen Nature Preserve, and homes in both areas are part of our regular route.' },
        { question: 'What zip code do you serve in Yellow Springs?', answer: '45387, from historic-district homes to properties bordering Glen Helen.' },
        { question: 'Do your cleaners bring their own supplies to Yellow Springs homes?', answer: 'Yes, our trained crews bring their own tools and supplies, and we can accommodate a specific product request if needed.' },
        { question: 'Is Yellow Springs too small a village for regular recurring cleaning?', answer: "No. Yellow Springs has under 4,000 residents, and we serve it the same way we serve larger cities, weekly, bi-weekly, monthly, or one-time." },
        { question: 'Can you schedule a guest-ready clean before hiking season visitors arrive?', answer: 'Yes. Spring through fall brings steady visitor traffic to Glen Helen and John Bryan State Park, and we can schedule a deep clean ahead of hosting guests.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Yellow Springs, OH',
      heroSubtitle: 'Serving the Village Business District',
      metaDescription: 'Commercial cleaning in Yellow Springs, OH for shops and offices in the village center. Licensed & insured.',
      intro: [
        "Yellow Springs' small, walkable village center is full of independent shops, cafés, and offices that draw visitors heading to Glen Helen and John Bryan State Park, and they rely on cleaning that fits a compact downtown footprint.",
        "We clean offices, shops, and studios throughout the village, with scheduling built around foot traffic and business hours.",
        "With under 4,000 residents citywide, Yellow Springs' commercial base is genuinely small and independent, and our scheduling scales down to fit that instead of applying a big-city minimum.",
        "Gem City Cleaning Crew has served the Yellow Springs area since 2017, and every commercial cleaner is Checkr background-checked, licensed, and insured before working an account independently."
      ],
      businessDistricts: [
        { title: 'Village Center', body: "Independent shops, cafés, and offices in Yellow Springs' small downtown." },
        { title: 'Antioch College Area', body: 'Businesses and services near the college campus.' }
      ],
      seasonalHooks: [
        { title: 'Glen Helen & John Bryan Hiking Season', body: 'Spring through fall brings steady visitor traffic to the village center from trail-goers.' },
        { title: 'Holiday Village Season', body: 'November and December bring extra foot traffic to village-center shops.' }
      ],
      breadcrumbLabel: 'Yellow Springs Commercial Cleaning',
      faqs: [
        { question: 'Do you clean shops in the Yellow Springs village center?', answer: "Yes. The village's small, walkable center is full of independent shops, cafés, and offices, and that's exactly the kind of compact footprint we schedule around." },
        { question: 'Can you clean businesses that see visitor traffic from Glen Helen or John Bryan State Park?', answer: 'Yes, we clean offices, shops, and studios throughout the village, with scheduling built around foot traffic and business hours.' },
        { question: 'Are Yellow Springs commercial cleaners insured?', answer: 'Yes. Gem City Cleaning Crew is licensed and insured for every job in Yellow Springs.' },
        { question: 'Do you clean businesses near Antioch College?', answer: 'Yes, businesses and services near the college campus are part of our regular Yellow Springs route.' },
        { question: 'Can you increase cleaning frequency during hiking season?', answer: 'Yes. Spring through fall brings steady trail-goer traffic to the village center, and we can step up cleaning frequency to match.' }
      ],
    },
  },

  'tipp-city': {
    name: 'Tipp City',
    zipCodes: ['45371'],
    landmarks: ['Old Tippecanoe Main Street Historic District', 'Hotel Gallery'],
    neighborhoods: [
      { title: 'Old Tippecanoe Historic District', body: 'More than 90 buildings on the National Register along Main Street, including the 1850s Hotel Gallery.' },
      { title: 'Kyle Park Area', body: "Residential streets near Tipp City's roughly 280-acre community park and the Great Miami River Recreational Trail." }
    ],
    residential: {
      heroTitle: 'House Cleaning Services in Tipp City, OH',
      heroSubtitle: 'Serving Homes Since the Canal Era',
      metaDescription: 'Professional house cleaning in Tipp City, OH, zip code 45371. Licensed & insured, serving the historic Main Street district.',
      intro: [
        "Founded in 1840 along the Miami and Erie Canal, Tipp City's Main Street, the Old Tippecanoe Historic District, still has more than 90 buildings on the National Register, including the 1850s Hotel Gallery, now home to local shops.",
        "We clean homes throughout Tipp City's roughly 10,000-resident community, from historic homes near Main Street to newer neighborhoods around the city's 20-plus parks.",
        "Kyle Park, one of the newer additions to Tipp City's park system at roughly 280 acres, anchors newer residential growth on the south side of the city, giving us two distinct housing eras to work around: canal-era Main Street homes and more recently built neighborhoods further out.",
        "Every Tipp City cleaner has completed three months of training and passed a Checkr background check, and every visit is backed by the same licensed-and-insured guarantee, no long-term contract required."
      ],
      homeEras: [
        { title: 'Old Tippecanoe Historic Homes', body: '1840s canal-era homes near Main Street, part of a National Register historic district with more than 90 buildings.' },
        { title: 'Kyle Park-Area Newer Homes', body: "Residential growth near Tipp City's roughly 280-acre community park." }
      ],
      seasonalHooks: [
        { title: 'Great Miami River Trail Season', body: 'Spring through fall, trail traffic from the Great Miami River Recreational Trail near Kyle Park brings more mud and dust into nearby homes.' },
        { title: 'Winter Salt & Mud Season', body: "December through March, entryway floors near Tipp City's historic Main Street see more tracked-in salt and mud than summer." }
      ],
      breadcrumbLabel: 'Tipp City House Cleaning',
      faqs: [
        { question: "Do you clean historic homes near Tipp City's Main Street?", answer: "Yes. Tipp City's Old Tippecanoe Historic District has more than 90 buildings on the National Register, and we regularly clean historic homes near that Main Street corridor." },
        { question: 'What zip code do you serve in Tipp City?', answer: "45371, covering Tipp City's roughly 10,000 residents, from historic homes near Main Street to newer neighborhoods around the city's parks." },
        { question: 'Can I switch my Tipp City cleaning frequency later?', answer: 'Yes. No long-term contracts means you can move between weekly, biweekly, monthly, or pause anytime.' },
        { question: 'Do you clean homes near Kyle Park?', answer: "Yes, the newer residential area near Tipp City's roughly 280-acre Kyle Park is part of our regular route alongside the historic Main Street district." },
        { question: 'Can you help with mud and dust from trail use near Kyle Park?', answer: 'Yes. Spring through fall, we see more tracked-in mud and dust in homes near the Great Miami River Recreational Trail, and can adjust cleaning frequency to match.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Tipp City, OH',
      heroSubtitle: 'Serving Historic Main Street Businesses',
      metaDescription: 'Commercial cleaning in Tipp City, OH for shops and offices along the historic Main Street district. Licensed & insured.',
      intro: [
        "Tipp City's historic Main Street district is a genuine walkable downtown: antique shops, boutiques, and restaurants housed in buildings dating back to the canal era, and they need cleaning that respects older storefronts.",
        "We clean shops, offices, and restaurants throughout Tipp City, with after-hours scheduling built around a historic downtown's foot traffic.",
        "Beyond Main Street, Tipp City's roughly 10,000 residents support smaller commercial space near Kyle Park and the city's newer growth areas, and we treat those accounts with the same care as our historic downtown clients.",
        "Gem City Cleaning Crew has served Tipp City businesses since 2017, and every commercial cleaner is Checkr background-checked, licensed, and insured before working a Tipp City account independently."
      ],
      businessDistricts: [
        { title: 'Old Tippecanoe Main Street', body: 'Antique shops, boutiques, and restaurants in buildings dating back to the 1840s canal era.' },
        { title: 'Kyle Park-Area Commercial', body: "Smaller commercial space near Tipp City's newer residential growth." }
      ],
      seasonalHooks: [
        { title: 'Downtown Historic District Event Season', body: "Spring and summer events along Tipp City's Main Street bring extra foot traffic to nearby shops and restaurants." },
        { title: 'Holiday Retail Season', body: 'November and December bring heavier foot traffic to Main Street retailers.' }
      ],
      breadcrumbLabel: 'Tipp City Commercial Cleaning',
      faqs: [
        { question: "Do you clean shops along Tipp City's historic Main Street?", answer: "Yes. Tipp City's Main Street district is a genuine walkable downtown with buildings dating back to the canal era, and we clean shops, offices, and restaurants there regularly." },
        { question: 'Can you schedule around foot traffic in downtown Tipp City?', answer: 'Yes, we offer after-hours scheduling built around a historic downtown\'s foot traffic.' },
        { question: 'Do you bring your own equipment for Tipp City commercial jobs?', answer: 'Yes, we bring all necessary supplies and equipment, using commercial-grade products that are effective yet safe for older storefronts.' },
        { question: 'Do you clean smaller commercial space near Kyle Park?', answer: "Yes, commercial space near Tipp City's newer residential growth is part of our regular route alongside historic Main Street." },
        { question: 'Can you increase cleaning frequency during the holiday retail season?', answer: 'Yes, we can step up cleaning frequency for Main Street retailers during the busier November and December season.' }
      ],
    },
  },

  bellbrook: {
    name: 'Bellbrook',
    zipCodes: ['45305'],
    landmarks: ['Sugarcreek MetroPark', 'Bill Yeck Park', 'Morris Reserve'],
    // Bellbrook is a small, single-zip city (~7,400-7,500 residents) with
    // little land left for new development and no distinct named
    // subdivisions found — thin-material allowance per the depth-expansion
    // plan, Section 5.0.2: no `neighborhoods` block rather than invented names.
    residential: {
      heroTitle: 'House Cleaning Services in Bellbrook, OH',
      heroSubtitle: 'Serving a Small Town Along Sugar Creek',
      metaDescription: 'Professional house cleaning in Bellbrook, OH, zip code 45305, in Sugarcreek Township. Licensed & insured.',
      intro: [
        "Bellbrook, in Sugarcreek Township, has kept its small-town character since 1816. Green space at Sugarcreek MetroPark, Bill Yeck Park, and the 177-acre Morris Reserve borders much of the community along Sugar Creek.",
        "We clean homes throughout Bellbrook's 45305 zip code, from established neighborhoods near town to newer homes further out along the creek.",
        "At around 7,500 residents, Bellbrook is one of the smaller cities we serve, and most of its remaining growth is happening just over the line in neighboring Sugarcreek Township rather than inside city limits, we serve both sides of that boundary the same way.",
        "Every Bellbrook cleaner has completed three months of training and passed a Checkr background check, and every visit is backed by the same licensed-and-insured guarantee, no long-term contract required."
      ],
      homeEras: [
        { title: 'Historic Town Center', body: "Homes near Bellbrook's original town center, reflecting the community's roots since 1816." },
        { title: 'Sugar Creek-Adjacent Homes', body: 'Established homes bordering Sugarcreek MetroPark and Bill Yeck Park.' },
        { title: 'Morris Reserve Area', body: "Homes near the 177-acre Morris Reserve on the edge of Bellbrook's footprint." }
      ],
      seasonalHooks: [
        { title: 'Sugarcreek MetroPark Trail Season', body: 'Spring through fall, trail traffic near Sugarcreek MetroPark and Bill Yeck Park brings more mud and dust into nearby homes.' },
        { title: 'Winter Salt & Mud Season', body: 'December through March, entryway floors see more tracked-in salt and mud than a typical summer month.' }
      ],
      breadcrumbLabel: 'Bellbrook House Cleaning',
      faqs: [
        { question: 'Do you clean homes near Sugarcreek MetroPark?', answer: 'Yes. Bellbrook sits in Sugarcreek Township along Sugar Creek, and homes near Sugarcreek MetroPark and Bill Yeck Park are part of our regular route.' },
        { question: 'What zip code do you serve in Bellbrook?', answer: '45305, from established neighborhoods near town to newer homes further out along the creek.' },
        { question: 'Do I need to be home during my Bellbrook cleaning?', answer: 'No. Many Bellbrook clients provide access instructions and go about their day.' },
        { question: 'Is Bellbrook too small for regular recurring cleaning?', answer: "No. Bellbrook has around 7,500 residents, and we serve it the same way we serve larger cities, weekly, bi-weekly, monthly, or one-time." },
        { question: 'Can you help with mud and dust from trail use near Sugarcreek MetroPark?', answer: 'Yes. Spring through fall, we see more tracked-in mud and dust in homes near the park trails, and can adjust cleaning frequency to match.' }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Bellbrook, OH',
      heroSubtitle: 'Serving Bellbrook\'s Small Business Community',
      metaDescription: 'Commercial cleaning in Bellbrook, OH for local offices and small businesses in the 45305 area. Licensed & insured.',
      intro: [
        "Bellbrook's local businesses tend to be smaller and more personal than what you'd find closer to Dayton: offices, shops, and services that value the same small-town relationships the community was built on.",
        "We provide that same personal approach to commercial cleaning throughout Bellbrook, with flexible scheduling for a smaller commercial footprint.",
        "With around 7,500 residents and little land left for new commercial development inside city limits, Bellbrook's business base stays genuinely small, and we scale our scheduling and crew size to match rather than requiring a big-city minimum.",
        "Gem City Cleaning Crew has served Bellbrook businesses since 2017, and every commercial cleaner is Checkr background-checked, licensed, and insured before working a Bellbrook account independently."
      ],
      businessDistricts: [
        { title: 'Town Center Businesses', body: "Small offices and shops near Bellbrook's historic town center." },
        { title: 'Sugar Creek Area Services', body: 'Businesses and services near the Sugarcreek MetroPark and Bill Yeck Park area.' }
      ],
      seasonalHooks: [
        { title: 'Sugarcreek MetroPark Trail Season', body: 'Spring through fall trail traffic brings modestly more foot traffic to nearby businesses.' },
        { title: 'Holiday Season Reset', body: 'A pre- or post-holiday cleaning pass is popular with small Bellbrook offices before year-end.' }
      ],
      breadcrumbLabel: 'Bellbrook Commercial Cleaning',
      faqs: [
        { question: 'Do you clean small businesses in Bellbrook?', answer: "Yes. Bellbrook's local businesses tend to be smaller and more personal than what you'd find closer to Dayton, and we scale our approach to fit that smaller commercial footprint." },
        { question: 'Is Bellbrook too small for regular commercial cleaning service?', answer: 'Not at all. We provide the same personal approach to commercial cleaning throughout Bellbrook with flexible scheduling.' },
        { question: 'Are Bellbrook commercial cleaners licensed and insured?', answer: 'Yes. Gem City Cleaning Crew is licensed and insured for every job in Bellbrook.' },
        { question: 'Do you clean offices near Bellbrook\'s town center?', answer: "Yes, small offices and shops near Bellbrook's historic town center are part of our regular commercial route." },
        { question: 'Do you offer a holiday season cleaning for Bellbrook businesses?', answer: 'Yes, a pre- or post-holiday reset is a popular request from small Bellbrook offices before year-end.' }
      ],
    },
  },

  vandalia: {
    name: 'Vandalia',
    zipCodes: ['45377'],
    landmarks: ['Dayton International Airport', 'Scene75 Dayton'],
    neighborhoods: [
      { title: 'Vandalia East', body: "Established residential area on the city's east side." },
      { title: 'Vandalia West', body: 'Residential neighborhoods closer to Dayton International Airport.' },
      { title: 'City Center', body: "Vandalia's downtown core near the I-75/I-70 interchange." }
    ],
    residential: {
      heroTitle: 'House Cleaning Services in Vandalia, OH',
      heroSubtitle: 'Serving Homes at the I-75/I-70 Crossroads',
      metaDescription: 'Professional house cleaning in Vandalia, OH, zip code 45377, home to Dayton International Airport. Licensed & insured.',
      intro: [
        "Vandalia sits right at the crossroads of I-75 and I-70 and is home to Dayton International Airport, a location that's made it one of the top-ranked places to raise a family in Montgomery County.",
        "We clean homes throughout Vandalia's 45377 zip code, with scheduling that works around the airport's flight patterns and the city's Air Show weekends alike.",
        "At roughly 15,000 residents, Vandalia is a compact city split loosely into east and west residential areas around a City Center core, and we schedule crews familiar with all three.",
        "Every Vandalia cleaner has completed three months of training and passed a Checkr background check, and every visit is backed by the same licensed-and-insured guarantee, no long-term contract required."
      ],
      homeEras: [
        { title: 'Vandalia East', body: "Established homes on the city's east side, away from the immediate airport corridor." },
        { title: 'Vandalia West', body: 'Homes closer to Dayton International Airport, scheduled with flight-pattern awareness.' },
        { title: 'City Center Area', body: "Homes near Vandalia's downtown core and the I-75/I-70 interchange." }
      ],
      seasonalHooks: [
        { title: 'Dayton Air Show Season', body: "Mid-June's Dayton Air Show brings a real hosting surge for Vandalia homeowners near the airport, and we schedule a pre-event deep clean around it." },
        { title: 'Winter Salt & Mud Season', body: 'December through March, entryway floors near the I-75/I-70 interchange see more tracked-in salt and mud than summer.' }
      ],
      breadcrumbLabel: 'Vandalia House Cleaning',
      faqs: [
        { question: 'Do you clean homes near Dayton International Airport?', answer: 'Yes. Vandalia is home to Dayton International Airport, and we clean homes throughout the surrounding area with scheduling that works around flight patterns and Air Show weekends.' },
        { question: 'What zip code do you serve in Vandalia?', answer: '45377, covering all of Vandalia at the I-75/I-70 crossroads.' },
        { question: 'Is there a contract for Vandalia house cleaning?', answer: 'No. Weekly, bi-weekly, monthly, or one-time, with no long-term contract required.' },
        { question: 'Do you clean homes in Vandalia East and West?', answer: "Yes, both Vandalia East and Vandalia West, along with the City Center area, are part of our regular route." },
        { question: 'Can you schedule a deep clean before the Dayton Air Show?', answer: "Yes. Mid-June's Air Show brings a real hosting surge for homeowners near the airport, and we regularly schedule a pre-event deep clean around it." }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Vandalia, OH',
      heroSubtitle: 'Serving Businesses Near Dayton International Airport',
      metaDescription: 'Commercial cleaning in Vandalia, OH for offices and businesses near Dayton International Airport. Licensed & insured.',
      intro: [
        "With Dayton International Airport, Scene75's large indoor entertainment venue, and steady traffic from the I-75/I-70 interchange, Vandalia's commercial spaces see more foot traffic than a typical suburb of its size.",
        "We clean offices, retail, and event spaces throughout Vandalia, with scheduling built to keep up with that traffic.",
        "That interchange location means Vandalia's roughly 15,000 residents support a commercial base disproportionate to the city's size, from airport-adjacent offices to City Center retail, and we size our crews to match each account.",
        "Gem City Cleaning Crew has served Vandalia businesses since 2017, and every commercial cleaner is Checkr background-checked, licensed, and insured before working a Vandalia account independently."
      ],
      businessDistricts: [
        { title: 'Airport-Adjacent Offices', body: 'Offices and services near Dayton International Airport.' },
        { title: 'Scene75 & Entertainment Corridor', body: "Businesses near Scene75's large indoor entertainment venue." },
        { title: 'City Center / I-75-I-70 Interchange', body: "Retail and offices near Vandalia's downtown core and the interstate interchange." }
      ],
      seasonalHooks: [
        { title: 'Dayton Air Show Season', body: 'Mid-June brings a real visitor surge for businesses near the airport, and we can add an event-weekend cleaning pass on request.' },
        { title: 'Holiday Retail Season', body: 'November and December bring heavier foot traffic to Vandalia retailers.' }
      ],
      breadcrumbLabel: 'Vandalia Commercial Cleaning',
      faqs: [
        { question: 'Do you clean businesses near Dayton International Airport or Scene75?', answer: "Yes. Between the airport, Scene75's indoor entertainment venue, and the I-75/I-70 interchange, Vandalia sees more commercial foot traffic than a typical suburb its size, and we schedule to keep up with it." },
        { question: 'Can you clean event spaces in Vandalia?', answer: 'Yes, we clean offices, retail, and event spaces throughout Vandalia.' },
        { question: 'Do you offer flexible scheduling for Vandalia businesses?', answer: 'Yes. We build scheduling around your business hours, not a fixed timetable.' },
        { question: 'Can you handle the extra traffic around the Dayton Air Show?', answer: 'Yes. Mid-June brings a real visitor surge for airport-area businesses, and we can add an event-weekend cleaning pass on request.' },
        { question: 'Do you clean offices in Vandalia\'s City Center?', answer: "Yes, retail and offices near Vandalia's downtown core and the I-75/I-70 interchange are part of our regular commercial route." }
      ],
    },
  },

  troy: {
    name: 'Troy',
    zipCodes: ['45373', '45374'],
    landmarks: ['Troy Public Square', 'Miami County Courthouse', 'Overfield Tavern Museum'],
    neighborhoods: [
      { title: 'Southwest Historic District', body: "Homes bounded roughly by the Miami River, Clay Street, Canal Street, and Oxford Street, marking Troy's original 1807 city boundary." },
      { title: 'Public Square Area', body: "Homes and buildings around Troy's restored 1807 traffic circle and fountain." },
      { title: 'Northwest Side Subdivisions', body: "Newer residential development on Troy's northwest side." }
    ],
    residential: {
      heroTitle: 'House Cleaning Services in Troy, OH',
      heroSubtitle: 'Serving Homes Around the Historic Public Square',
      metaDescription: 'Professional house cleaning in Troy, OH, zip codes 45373 and 45374, near the historic Public Square. Licensed & insured.',
      intro: [
        "Troy's Public Square, an 1807 traffic circle restored with a fountain and surrounded by Victorian-age buildings, sits at the heart of a city that's been the Miami County seat since 1807, home to the 1888 Miami County Courthouse and the Overfield Tavern Museum.",
        "We clean homes throughout Troy's 45373 and 45374 zip codes, from the Southwest Historic District to newer subdivisions on the northwest side.",
        "At close to 27,000 residents, Troy is Miami County's largest city, and its Southwest Historic District's 1807-era housing stock calls for a different touch than the newer subdivisions further from downtown, so we adjust our approach by the home, not a single citywide routine.",
        "Every Troy cleaner has completed three months of training and passed a Checkr background check, and every visit is backed by the same licensed-and-insured guarantee, no long-term contract required."
      ],
      homeEras: [
        { title: 'Southwest Historic District', body: "Homes within Troy's original 1807 city boundary, near the Miami River, Clay Street, Canal Street, and Oxford Street." },
        { title: 'Public Square-Area Victorians', body: "Victorian-age buildings and homes surrounding Troy's restored 1807 traffic circle." },
        { title: 'Northwest Side New Construction', body: "Newer subdivisions further from downtown Troy." }
      ],
      seasonalHooks: [
        { title: 'Troy Public Square Event Season', body: "Spring and summer events at Troy's restored Public Square bring more weekend guests for nearby homeowners." },
        { title: 'Winter Salt & Mud Season', body: "December through March, entryway floors near Troy's historic downtown see more tracked-in salt and mud than summer." }
      ],
      breadcrumbLabel: 'Troy House Cleaning',
      faqs: [
        { question: "Do you clean homes near Troy's Public Square?", answer: "Yes. Troy's 1807 Public Square and the Southwest Historic District around it are part of our regular Troy service area." },
        { question: 'What zip codes do you serve in Troy?', answer: '45373 and 45374, from the Southwest Historic District to newer subdivisions on the northwest side.' },
        { question: 'Can I reschedule my Troy cleaning if my plans change?', answer: 'Yes. No long-term contracts means flexible rescheduling, just call ahead of your appointment.' },
        { question: 'Do you clean newer homes on the northwest side of Troy?', answer: 'Yes, newer subdivisions on the northwest side are part of our regular route alongside the Southwest Historic District.' },
        { question: 'Can you schedule around a Public Square event weekend?', answer: "Yes. We're used to scheduling a pre-event cleaning for Troy homeowners near the Public Square hosting guests for a spring or summer event." }
      ],
    },
    commercial: {
      heroTitle: 'Commercial Cleaning Services in Troy, OH',
      heroSubtitle: 'Serving Businesses Around the Public Square',
      metaDescription: 'Commercial cleaning in Troy, OH for offices and retail around the historic Public Square and county courthouse. Licensed & insured.',
      intro: [
        "As Miami County's seat since 1807, Troy's downtown around the Public Square is a genuine commerce center: restaurants and shops that line the square, alongside county and professional offices near the courthouse.",
        "We clean offices, retail, and professional spaces throughout Troy, with scheduling built around downtown business hours.",
        "As Miami County's largest city at close to 27,000 residents, Troy's commercial base extends well beyond the Public Square into newer offices on the northwest side, and we schedule each account around its own hours.",
        "Gem City Cleaning Crew has served Troy businesses since 2017, and every commercial cleaner is Checkr background-checked, licensed, and insured before working a Troy account independently."
      ],
      businessDistricts: [
        { title: 'Public Square Commerce Center', body: 'Restaurants and shops lining the historic square, plus county and professional offices near the courthouse.' },
        { title: 'Southwest Historic District Offices', body: "Smaller professional offices within Troy's original 1807 city boundary." },
        { title: 'Northwest Side Commercial', body: "Newer commercial development on Troy's northwest side." }
      ],
      seasonalHooks: [
        { title: 'Public Square Event Season', body: "Spring and summer events at Troy's Public Square bring extra foot traffic to nearby restaurants and shops." },
        { title: 'Holiday Retail Season', body: 'November and December bring heavier foot traffic to Public Square-area retailers.' }
      ],
      breadcrumbLabel: 'Troy Commercial Cleaning',
      faqs: [
        { question: "Do you clean businesses around Troy's Public Square?", answer: "Yes. As Miami County's seat since 1807, Troy's downtown around the Public Square is a genuine commerce center, and we clean the restaurants and shops that line it." },
        { question: 'Do you clean professional offices near the Miami County Courthouse?', answer: 'Yes, we clean offices, retail, and professional spaces throughout Troy, including near the courthouse.' },
        { question: 'Can Troy businesses schedule cleaning around downtown business hours?', answer: 'Yes. We build scheduling around downtown business hours.' },
        { question: 'Do you clean newer commercial space on the northwest side of Troy?', answer: "Yes, newer commercial development on Troy's northwest side is part of our regular route alongside the Public Square area." },
        { question: 'Can you increase cleaning frequency during the holiday retail season?', answer: 'Yes, we can step up cleaning frequency for Public Square-area retailers during the busier November and December season.' }
      ],
    },
  },
}

export const getCityBySlug = (slug) => CITIES[slug] || null
export const CITY_SLUGS = Object.keys(CITIES)
