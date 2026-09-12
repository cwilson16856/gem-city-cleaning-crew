// Dedicated Xenia residential location page. Replaces the generic
// src/data/locations.js-driven render for /locations/xenia/house-cleaning-services
// (same URL — the static <Route> in App.jsx/entry-server.jsx wins over the
// :city param route). Modeled on the Beavercreek commercial page's structure
// (service cards + FAQPage schema + named-district coverage) but written for
// homeowners, with content that is genuinely Xenia-specific: the 1974
// tornado-rebuild housing stock, the East Second Street Historic District,
// the new-build subdivisions off US-42, and the city's unsoftened ~23-grain
// hard water (per the City of Xenia Consumer Confidence Reports).

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Box,
  Chip,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import KingBedIcon from '@mui/icons-material/KingBed'
import KitchenIcon from '@mui/icons-material/Kitchen'
import BathtubIcon from '@mui/icons-material/Bathtub'
import WeekendIcon from '@mui/icons-material/Weekend'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import ConstructionIcon from '@mui/icons-material/Construction'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import PlaceIcon from '@mui/icons-material/Place'

import '../../../../styles/homepages/HomePage.css'
import '../../../../styles/pages/ResidentialPage.css'

import {
  generateServiceSchema,
  generateLocationWebPageSchema
} from '../../../../utils/localBusinessSchema'

import AreasWeServe from '../../../../components/AreasWeServe'
import TableOfContents from '../../../../components/TableOfContents'
import QuoteForm from '../../../../components/QuoteForm'

const PAGE_URL = 'https://gemcitycleaningcrew.com/locations/xenia/house-cleaning-services'
const SERVICE_ID = `${PAGE_URL}#service`
const HERO_IMAGE = '/images/legacy/clay-elliot-1by_GbwEMwc-unsplash-2.jpg'

const PAGE_TITLE = 'House Cleaning Services in Xenia, OH | Gem City Cleaning Crew'
const META_DESCRIPTION =
  'House cleaning in Xenia, OH for Greene County homes — 1970s rebuilds, East Second Street Victorians, and new builds off US-42. Licensed, insured, no contracts.'

const tocItems = [
  { text: 'Xenia House Cleaning Services', href: '#xenia-cleaning-services' },
  { text: "What's Included in Every Clean", href: '#whats-included' },
  { text: "Built for Xenia's Homes", href: '#xenia-homes' },
  { text: "Xenia's Hard Water", href: '#hard-water' },
  { text: 'Neighborhoods We Serve', href: '#neighborhoods' },
  { text: 'Cleaning Around the Xenia Calendar', href: '#seasonal' },
  { text: 'Why Xenia Homeowners Choose Us', href: '#why-choose-us' },
  { text: 'How Pricing Works', href: '#pricing' },
  { text: 'Xenia House Cleaning FAQ', href: '#faq' },
  { text: 'Nearby Greene County Areas', href: '#nearby' }
]

const services = [
  {
    title: 'Recurring House Cleaning',
    description:
      'Weekly, bi-weekly, or monthly visits on a schedule that holds — including for households commuting to Dayton, Wright-Patt, or a shift at Kettering Health Greene Memorial.',
    icon: <AutorenewIcon sx={{ fontSize: 32, color: 'white' }} />,
    features: ['Same crew whenever possible', 'No contracts, cancel anytime', 'Kitchens, baths, floors, dusting'],
    popular: true,
    link: '/recurring-cleaning-service'
  },
  {
    title: 'Deep Cleaning',
    description:
      'The top-to-bottom reset — inside appliances, baseboards, ceiling fans, window tracks, and the mineral scale Xenia water leaves on every fixture.',
    icon: <AutoAwesomeIcon sx={{ fontSize: 32, color: 'white' }} />,
    features: ['Inside oven and fridge', 'Descaling showers and faucets', 'Behind and under furniture'],
    popular: true,
    link: '/deep-cleaning'
  },
  {
    title: 'Move-In / Move-Out Cleaning',
    description:
      'Empty-house cleans for Xenia rentals, homes changing hands, and PCS moves — plus new-build first cleans in Edenbridge, Grandstone Trace, and Wright Cycle Estates.',
    icon: <MoveToInboxIcon sx={{ fontSize: 32, color: 'white' }} />,
    features: ['Inside cabinets and closets', 'Landlord-ready detail', 'Post-construction dust removal'],
    popular: false,
    link: '/move-in-out-cleaning'
  },
  {
    title: 'One-Time & Occasion Cleaning',
    description:
      'A single visit before or after the big weekends — Hamvention houseguests in May, Greene County Fair week, or the holidays around The Christmas Station.',
    icon: <EventAvailableIcon sx={{ fontSize: 32, color: 'white' }} />,
    features: ['Pre-guest prep', 'Post-party reset', 'Book one visit, no commitment'],
    popular: false,
    link: '/residential'
  }
]

const includedRooms = [
  {
    title: 'Kitchen',
    icon: <KitchenIcon sx={{ fontSize: 28 }} />,
    items: ['Counters, backsplash, and sink descaled', 'Stovetop and appliance exteriors', 'Cabinet fronts and handles', 'Floors swept and mopped']
  },
  {
    title: 'Bathrooms',
    icon: <BathtubIcon sx={{ fontSize: 28 }} />,
    items: ['Toilet, tub, and shower scrubbed', 'Hard-water spots on glass and chrome', 'Mirrors and vanity', 'Floors and baseboards']
  },
  {
    title: 'Bedrooms',
    icon: <KingBedIcon sx={{ fontSize: 28 }} />,
    items: ['Dusting all reachable surfaces', 'Beds made or linens changed', 'Vacuum carpet and rugs', 'Mirrors and light switches']
  },
  {
    title: 'Living Areas',
    icon: <WeekendIcon sx={{ fontSize: 28 }} />,
    items: ['Dust furniture, shelves, and decor', 'Ceiling fans and light fixtures', 'Vacuum and mop floors', 'Entryway and mudroom reset']
  }
]

const homeTypes = [
  {
    title: 'Historic Homes Near the Courthouse',
    icon: <HistoryEduIcon sx={{ fontSize: 32, color: 'white' }} />,
    description:
      "The Italianate and Queen Anne houses of the East Second Street Historic District — on the National Register since 1973 — have plaster walls, original hardwood, radiators, and tall baseboards. We use gentler products and hand-wipe trim rather than treating an 1880s house like modern drywall and laminate."
  },
  {
    title: "1970s Rebuilds in Arrowhead & Windsor Park",
    icon: <HomeWorkIcon sx={{ fontSize: 32, color: 'white' }} />,
    description:
      'After the April 3, 1974 tornado condemned more than 1,200 Xenia homes, whole neighborhoods were rebuilt within a few years, and the 1970s remain the single biggest decade in the city\'s housing stock. Those ranches and tri-levels bring their own checklist: textured ceilings that only get dusted (never scrubbed), original tile and grout, aluminum window tracks, and forced-air registers that collect dust.'
  },
  {
    title: 'New Builds at Edenbridge, Grandstone Trace & Wright Cycle Estates',
    icon: <ConstructionIcon sx={{ fontSize: 32, color: 'white' }} />,
    description:
      'Edenbridge off Lower Bellbrook Road, Grandstone Trace off Fairground Road, Summer Brooke, and Wright Cycle Estates along US-42 have added hundreds of new homes to Xenia. New construction sheds drywall dust for months after move-in, so a first clean means wiping the inside of every cabinet and vent, not just the visible surfaces.'
  }
]

const neighborhoods = [
  {
    name: 'Downtown & East Second Street Historic District',
    note: 'Victorian-era homes within a few blocks of the 1902 Greene County Courthouse and Xenia Station.'
  },
  {
    name: 'Arrowhead & Windsor Park',
    note: 'Rebuilt after 1974 — mid-1970s ranches and tri-levels on the north and east sides.'
  },
  {
    name: 'Stadium Heights, Lanewood & Bickett',
    note: 'Established neighborhoods mixing older homes with newer construction.'
  },
  {
    name: 'Timber Ridge, Kinsey Meadows & North Xenia',
    note: 'North-end neighborhoods off US-68 and around Kettering Health Greene Memorial and the Progress Drive corridor.'
  },
  {
    name: 'Edenbridge, Grandstone Trace, Summer Brooke & Wright Cycle Estates',
    note: 'New construction off Lower Bellbrook Road, Fairground Road, Highlander Drive, and US-42 south of US-35.'
  },
  {
    name: 'Wilberforce & Xenia Township',
    note: 'Rural Greene County homes near Central State and Wilberforce University.'
  }
]

const seasonalHooks = [
  {
    title: 'Mid-May: Hamvention',
    text: 'The Greene County Expo Center draws tens of thousands of visitors for Hamvention, and Xenia spare rooms and short-term rentals fill up. A pre-guest clean the week before is the most-requested one-time visit we do in Xenia.'
  },
  {
    title: 'Late July / Early August: Greene County Fair',
    text: 'Fair week at the fairgrounds on Fairground Road means more foot traffic, dust, and late nights. A reset clean afterward puts the house back before school starts.'
  },
  {
    title: 'Spring and Fall: Trail Season & Field Dust',
    text: "Five trails meet at Xenia Station, and the city is ringed by farmland. Bike-trail grit in spring and harvest dust in fall both end up in the mudroom — entryway floors and registers get extra attention those months."
  },
  {
    title: 'December: The Christmas Station',
    text: 'The downtown Christmas Station kicks off Xenia holiday hosting in early December. Booking a deep clean before then is easier than trying to squeeze one in the week of Christmas.'
  }
]

const whyChooseUs = [
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for residential work throughout Greene County, with a satisfaction guarantee on every visit.',
    image: '/images/legacy/Plan.png'
  },
  {
    title: 'No Contracts',
    description: 'Weekly, bi-weekly, monthly, or one-time — change or pause your schedule whenever life in Xenia changes.',
    image: '/images/legacy/No-Contracts.png'
  },
  {
    title: 'Trained Local Crew',
    description: "A Dayton-area crew that has served the Miami Valley since 2017 and knows the difference between an East Second Street Victorian and an Arrowhead ranch.",
    image: '/images/legacy/Trained.png'
  }
]

const pricingFactors = [
  'Square footage and number of bedrooms and bathrooms',
  'Frequency — recurring visits cost less per clean than one-time visits',
  'Current condition and whether a first-visit deep clean is needed',
  'Add-ons like inside the oven or fridge, interior windows, or post-construction dust',
  'Pets, and the amount of hard-water scale on fixtures'
]

const faqData = [
  {
    question: 'How much does house cleaning cost in Xenia, OH?',
    answer:
      "It depends on the size of the home, how many bedrooms and bathrooms it has, how often we come, and its current condition — a first-visit deep clean on a 1970s home that hasn't been descaled in years takes longer than a bi-weekly maintenance visit. Recurring visits cost less per clean than one-time visits. Every quote is free, and there are no contracts, so you can start with one visit and decide from there."
  },
  {
    question: 'How often should I have my Xenia home cleaned?',
    answer:
      'Bi-weekly is the most common schedule for Xenia households, and it keeps hard-water scale, dust, and bathroom grime from ever building up. Homes with pets, kids, or a lot of trail and field traffic through the mudroom often go weekly in spring and fall. Monthly works well as a maintenance layer on top of your own routine.'
  },
  {
    question: "Does Xenia's hard water change how you clean?",
    answer:
      "Yes. The City of Xenia's water plant does not soften its water, and the city's own consumer confidence reports put total hardness near 400 mg/L — about 23 grains per gallon, which is very hard. That leaves white scale on shower glass, faucets, and dishwasher interiors faster than in Beavercreek, where county water is now softened to about 8 grains. We build descaling into every Xenia bathroom and kitchen clean, and we use fixture-safe products rather than harsh acids on older chrome and tile."
  },
  {
    question: 'Do you clean older homes near the courthouse differently?',
    answer:
      "We do. Homes in the East Second Street Historic District and around downtown often have plaster walls, original hardwood, radiators, and painted woodwork that modern all-purpose cleaners and abrasive pads can damage. We use pH-neutral products on wood and stone, hand-wipe tall baseboards and trim, and dust radiators and picture rails instead of skipping them."
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer:
      "No. Most of our Xenia customers commute to Dayton, Beavercreek, or Wright-Patterson and aren't home when we arrive. We'll arrange entry instructions ahead of time — a lockbox, garage code, or a neighbor with a key — and lock up when we leave. You're always welcome to be home if you prefer."
  },
  {
    question: 'Do you bring your own cleaning supplies and equipment?',
    answer:
      'Yes, we bring everything, including vacuums, mops, microfiber, and the products we use. If you have a preferred product for a specific surface — a particular hardwood cleaner or a fragrance-free line for allergies — leave it out and we will use it instead.'
  },
  {
    question: 'Do you offer move-out cleaning for Xenia rentals and new builds?',
    answer:
      "Yes. We do landlord-ready move-out cleans for Xenia rentals — including student rentals near Central State and Wilberforce and PCS moves from Wright-Patt — and move-in cleans for homes changing hands. For new construction in Edenbridge, Grandstone Trace, Summer Brooke, or Wright Cycle Estates, ask for a post-construction clean, which adds cabinet interiors, vents, and the fine drywall dust a standard clean doesn't chase."
  },
  {
    question: 'Do you serve Wilberforce, Cedarville, Jamestown, and Yellow Springs?',
    answer:
      "Xenia is the hub of our Greene County coverage. Wilberforce and Yellow Springs are regular stops, and Cedarville and Jamestown are within our service radius — call 937-892-4157 or request a quote with your address and we'll confirm scheduling for your road."
  }
]

const nearbyAreas = [
  { name: 'Beavercreek', path: '/locations/beavercreek/house-cleaning-services' },
  { name: 'Bellbrook', path: '/locations/bellbrook/house-cleaning-services' },
  { name: 'Fairborn', path: '/locations/fairborn/house-cleaning-services' },
  { name: 'Yellow Springs', path: '/locations/yellow-springs/house-cleaning-services' }
]

const XeniaHouseCleaningPage = () => {
  const theme = useTheme()
  const [quoteFormOpen, setQuoteFormOpen] = useState(false)

  const openQuote = () => setQuoteFormOpen(true)
  const closeQuote = () => setQuoteFormOpen(false)

  // LocalBusiness itself is injected once, site-wide, by the app shell (App.jsx / entry-server.jsx) — a per-page copy here would duplicate it with a conflicting narrower areaServed.
  const serviceSchema = {
    ...generateServiceSchema({
      id: SERVICE_ID,
      name: 'House Cleaning Services in Xenia, OH',
      description: META_DESCRIPTION,
      serviceType: 'House Cleaning',
      areaServedCities: ['Xenia', 'Wilberforce'],
      url: PAGE_URL
    }),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Xenia House Cleaning Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.title }
      }))
    }
  }
  const webPageSchema = generateLocationWebPageSchema({
    id: `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: 'House Cleaning Services in Xenia, OH',
    description: META_DESCRIPTION,
    aboutId: SERVICE_ID,
    breadcrumbs: [
      { name: 'Home', url: 'https://gemcitycleaningcrew.com' },
      { name: 'Locations', url: 'https://gemcitycleaningcrew.com/locations' },
      { name: 'Xenia House Cleaning', url: PAGE_URL }
    ]
  })
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  }

  const primaryButtonSx = {
    fontSize: '1.1rem',
    px: 4,
    py: 1.5,
    fontWeight: 600,
    backgroundColor: '#1C1C1C !important',
    color: 'white !important',
    border: '3px solid white !important',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5) !important',
    position: 'relative',
    zIndex: 10,
    '&:hover': {
      backgroundColor: '#000000 !important',
      color: 'white !important',
      transform: 'translateY(-2px)',
      border: '3px solid white !important'
    }
  }

  const outlinedButtonSx = {
    fontSize: '1.1rem',
    px: 4,
    py: 1.5,
    fontWeight: 600,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    borderWidth: 2,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      borderWidth: 2
    }
  }

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={HERO_IMAGE} fetchPriority="high" />
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta
          name="keywords"
          content="house cleaning Xenia Ohio, house cleaning services Xenia OH, maid service Xenia Ohio, cleaning services Xenia Ohio, deep cleaning Xenia, move out cleaning Xenia, Greene County house cleaning, 45385 cleaning services"
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <Box
        className="hero-section residential-hero-section"
        sx={{
          background: `linear-gradient(rgba(24, 24, 24, 0.72), rgba(24, 24, 24, 0.72)), url('${HERO_IMAGE}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          minHeight: { xs: 560, md: 660 },
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="lg" className="hero-content residential-hero-content" sx={{ position: 'relative', zIndex: 2 }}>
          <Chip
            label="XENIA & GREENE COUNTY • LICENSED • INSURED • NO CONTRACTS"
            sx={{ mb: 3, backgroundColor: theme.palette.primary.main, color: 'white', fontWeight: 600, fontSize: '0.9rem', px: 2,
              height: 'auto',
              maxWidth: { xs: '90%', sm: 'none' },
              '& .MuiChip-label': {
                display: 'block',
                whiteSpace: 'normal',
                overflow: 'visible',
                textOverflow: 'clip',
                lineHeight: 1.4,
                py: 0.75
              }
            }}
          />
          <Typography
            variant="h1"
            component="h1"
            className="hero-title"
            sx={{ fontSize: { xs: '2.4rem', md: '3.6rem' }, fontWeight: 700, mb: 2, lineHeight: 1.1, color: 'white' }}
          >
            House Cleaning Services in Xenia, OH
          </Typography>
          <Typography
            variant="h4"
            component="p"
            sx={{ fontSize: { xs: '1.15rem', md: '1.6rem' }, fontWeight: 400, mb: 2, maxWidth: 820, mx: 'auto', color: 'white', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
          >
            Local cleaners for Greene County homes — from the courthouse square to Wright Cycle Estates
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 500, mb: 4, maxWidth: 720, mx: 'auto', opacity: 0.95, color: 'white', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
          >
            Recurring • Deep Cleaning • Move-In / Move-Out • One-Time Visits
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" size="large" onClick={openQuote} sx={primaryButtonSx}>
              Get Your Free Xenia Quote
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="tel:937-892-4157"
              startIcon={<PhoneIcon />}
              sx={{
                fontSize: '1.1rem',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderColor: 'white',
                color: 'white',
                borderWidth: 2,
                '&:hover': { borderColor: 'white', color: 'white', backgroundColor: 'rgba(255,255,255,0.1)', borderWidth: 2 }
              }}
              aria-label="Call Gem City Cleaning Crew for Xenia house cleaning at 937-892-4157"
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Container>
      </Box>

      <TableOfContents items={tocItems} collapsible={true} defaultExpanded={false} showItemCount={true} />

      {/* Intro + services */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="xenia-cleaning-services">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Xenia House Cleaning Services
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 900, mx: 'auto', mb: 2 }}>
            Xenia is the Greene County seat and, about 25 minutes east of Dayton on US-35, one of the most distinct places we clean.
            The April 1974 tornado destroyed roughly half the city&apos;s buildings, and today about one in four Xenia homes dates to the
            1970s rebuild — the ranches and tri-levels of Arrowhead, Windsor Park, and the streets around the 1977 Xenia High School
            sit a few blocks from Italianate and Queen Anne houses on East Second Street that survived it. Add the new construction
            at Edenbridge, Grandstone Trace, Summer Brooke, and Wright Cycle Estates, and no two Xenia homes on our schedule clean
            quite the same way.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 900, mx: 'auto' }}>
            Gem City Cleaning Crew has cleaned Miami Valley homes since 2017. In Xenia&apos;s 45385 that means recurring visits for
            commuters and Greene Memorial shift workers, deep cleans that actually deal with the city&apos;s hard water, and empty-house
            cleans for rentals, new builds, and moves — all with no contracts and a free quote.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <Card className="residential-service-card" sx={{ height: '100%', position: 'relative' }}>
                {service.popular && (
                  <Chip
                    label="MOST POPULAR"
                    sx={{ backgroundColor: theme.palette.primary.main, color: 'white', fontSize: '0.75rem', fontWeight: 700, height: 28, borderRadius: '14px' }}
                  />
                )}
                <CardActionArea component={Link} to={service.link} sx={{ height: '100%', borderRadius: '12px' }}>
                  <CardContent sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box className="residential-service-icon">{service.icon}</Box>
                    <Typography variant="h5" component="h3" className="residential-service-title" sx={{ mb: 1.5, fontWeight: 700 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" className="residential-service-description" sx={{ flex: 1, mb: 2 }}>
                      {service.description}
                    </Typography>
                    <Box sx={{ textAlign: 'left' }}>
                      {service.features.map((feature) => (
                        <Box key={feature} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75 }}>
                          <CheckCircleIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />
                          <Typography variant="body2" sx={{ fontWeight: 500, color: '#525252' }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* What's included */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="whats-included">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
            What&apos;s Included in Every Xenia Clean
          </Typography>
          <Typography variant="body1" sx={{ mb: 5, textAlign: 'center', maxWidth: 820, mx: 'auto', fontSize: '1.05rem' }}>
            Every standard visit covers the rooms below. Deep cleans and move-out cleans add inside appliances, cabinet interiors,
            baseboards, window tracks, and behind-furniture work.{' '}
            <Link to="/residential-house-cleaning-checklist" style={{ color: theme.palette.primary.main, fontWeight: 600 }}>
              See the full house cleaning checklist
            </Link>
            .
          </Typography>
          <Grid container spacing={3}>
            {includedRooms.map((room) => (
              <Grid item xs={12} sm={6} md={3} key={room.title}>
                <Card sx={{ height: '100%', borderRadius: 3 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <Box className="residential-room-icon" sx={{ width: 48, height: 48 }}>
                        {room.icon}
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                        {room.title}
                      </Typography>
                    </Box>
                    <List dense disablePadding>
                      {room.items.map((item) => (
                        <ListItem key={item} disableGutters sx={{ py: 0.4 }}>
                          <ListItemIcon sx={{ minWidth: 28 }}>
                            <CheckCircleIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
                          </ListItemIcon>
                          <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', color: '#525252' }} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Built for Xenia's homes */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="xenia-homes">
        <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Built for Xenia&apos;s Homes — Three Eras, Three Checklists
        </Typography>
        <Typography variant="body1" sx={{ mb: 5, textAlign: 'center', maxWidth: 860, mx: 'auto', fontSize: '1.05rem' }}>
          A franchise checklist treats every house the same. Xenia&apos;s housing stock doesn&apos;t cooperate with that — it spans
          the 1880s, the post-tornado rebuild, and this decade&apos;s new construction, often on the same street.
        </Typography>
        <Grid container spacing={4}>
          {homeTypes.map((home) => (
            <Grid item xs={12} md={4} key={home.title}>
              <Card className="residential-service-card" sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box className="residential-service-icon">{home.icon}</Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
                    {home.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {home.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Hard water */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="hard-water">
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 2 }}>
            <WaterDropIcon sx={{ fontSize: 36, color: theme.palette.primary.main }} />
            <Typography variant="h2" component="h2" sx={{ textAlign: 'center' }}>
              Xenia&apos;s Hard Water, and Why It Matters for Cleaning
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.75, mb: 2 }}>
            The City of Xenia&apos;s water plant does not soften its water. The city&apos;s own consumer confidence reports list total
            hardness near 400 mg/L — roughly 23 grains per gallon, well into the &ldquo;very hard&rdquo; range. Greene County&apos;s new
            softening system brought county customers in Beavercreek and elsewhere down to about 8 grains in 2025, but Xenia,
            Fairborn, Jamestown, and Bellbrook run their own systems and weren&apos;t included.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.75, mb: 2 }}>
            In practice that means white scale on shower glass and chrome within days of a wipe-down, cloudy glassware, crusted
            faucet aerators, and a dishwasher that looks dirty even when it isn&apos;t. Our Xenia cleans build descaling into every
            bathroom and kitchen visit, using fixture-safe products rather than harsh acids that etch older chrome, tile, and
            natural stone. If you&apos;re fighting the spots yourself between visits, our guide to{' '}
            <Link to="/blog/how-to-remove-hard-water-stains-bathroom-fixtures-dayton" style={{ color: theme.palette.primary.main, fontWeight: 600 }}>
              removing hard-water stains from bathroom fixtures
            </Link>{' '}
            covers what works and what damages the finish.
          </Typography>
        </Container>
      </Box>

      {/* Neighborhoods */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="neighborhoods">
        <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Xenia Neighborhoods We Serve
        </Typography>
        <Typography variant="body1" sx={{ mb: 5, textAlign: 'center', maxWidth: 820, mx: 'auto', fontSize: '1.05rem' }}>
          We clean throughout Xenia&apos;s 45385 zip code and the surrounding Xenia Township, including Wilberforce (45384).
        </Typography>
        <Grid container spacing={3}>
          {neighborhoods.map((hood) => (
            <Grid item xs={12} sm={6} md={4} key={hood.name}>
              <Card sx={{ height: '100%', p: 2.5, borderRadius: 3, display: 'flex', gap: 1.5 }}>
                <PlaceIcon sx={{ color: theme.palette.primary.main, mt: 0.3 }} />
                <Box>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 0.5, color: theme.palette.primary.main }}>
                    {hood.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hood.note}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Seasonal */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="seasonal">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
            Cleaning Around the Xenia Calendar
          </Typography>
          <Typography variant="body1" sx={{ mb: 5, textAlign: 'center', maxWidth: 820, mx: 'auto', fontSize: '1.05rem' }}>
            Xenia&apos;s busiest cleaning weeks follow the town&apos;s calendar, not a generic &ldquo;spring cleaning&rdquo; template.
          </Typography>
          <Grid container spacing={3}>
            {seasonalHooks.map((hook) => (
              <Grid item xs={12} md={6} key={hook.title}>
                <Card sx={{ height: '100%', p: 3, borderRadius: 3 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1, color: theme.palette.primary.main }}>
                    {hook.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {hook.text}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why choose us */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="why-choose-us">
        <Typography variant="h2" component="h2" sx={{ mb: 5, textAlign: 'center' }}>
          Why Xenia Homeowners Choose Gem City Cleaning Crew
        </Typography>
        <Grid container spacing={4} className="residential-service-features">
          {whyChooseUs.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <Card sx={{ height: '100%', borderRadius: 3 }}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box
                    component="img"
                    src={feature.image}
                    alt={`${feature.title} - Xenia house cleaning`}
                    loading="lazy"
                    sx={{ width: 80, height: 80, objectFit: 'contain', mb: 3, mx: 'auto', display: 'block' }}
                  />
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.main }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Pricing */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="pricing">
        <Container maxWidth="md">
          <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
            How Pricing Works for Xenia Homes
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.7, mb: 3, textAlign: 'center' }}>
            We quote each home individually rather than off a flat per-hour rate, because a three-bedroom Arrowhead ranch and a
            three-bedroom East Second Street Victorian are not the same job. Your free quote is based on:
          </Typography>
          <List sx={{ maxWidth: 640, mx: 'auto', mb: 3 }}>
            {pricingFactors.map((factor) => (
              <ListItem key={factor} disableGutters>
                <ListItemIcon sx={{ minWidth: 34 }}>
                  <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
                </ListItemIcon>
                <ListItemText primary={factor} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ textAlign: 'center' }}>
            <Button variant="outlined" size="large" onClick={openQuote} sx={outlinedButtonSx}>
              Request a Free Quote
            </Button>
          </Box>
        </Container>
      </Box>

      {/* FAQ */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="faq">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Box
            component="img"
            src="/images/legacy/FAQ.png"
            alt="Frequently asked questions about house cleaning in Xenia, Ohio"
            loading="lazy"
            sx={{ width: 80, height: 80, objectFit: 'contain', mb: 2, mx: 'auto', display: 'block' }}
          />
          <Typography variant="h2" component="h2" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
            Xenia House Cleaning FAQ
          </Typography>
        </Box>
        {faqData.map((faq, index) => (
          <Accordion key={faq.question} className="residential-faq-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`xenia-faq-${index}-content`} id={`xenia-faq-${index}-header`}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      {/* Nearby */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }} id="nearby">
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Also Serving Nearby Greene County Communities
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, maxWidth: 760, mx: 'auto' }}>
            Xenia sits at the center of our Greene County routes. We also have dedicated pages for these neighbors, and a separate
            page for{' '}
            <Link to="/locations/xenia/commercial-cleaning-services" style={{ color: theme.palette.primary.main, fontWeight: 600 }}>
              commercial cleaning in Xenia
            </Link>
            .
          </Typography>
          <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', flexWrap: 'wrap' }}>
            {nearbyAreas.map((area) => (
              <Chip
                key={area.name}
                label={`${area.name} House Cleaning`}
                component={Link}
                to={area.path}
                clickable
                className="residential-service-area-chip"
                sx={{ fontWeight: 600, px: 1 }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <Box id="greater-dayton-service-areas">
        <AreasWeServe currentCity="Xenia" />
      </Box>

      {/* Final CTA */}
      <Box className="residential-cta-section" sx={{ color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600, color: 'white' }}>
            Ready for a Cleaner Home in Xenia?
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: 'white', mb: 4, opacity: 0.95 }}>
            Free quotes, no contracts, and a licensed, insured crew that knows Greene County homes.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="contained" size="large" onClick={openQuote} sx={primaryButtonSx} aria-label="Get a free house cleaning quote for your Xenia home">
              Get My Free Xenia Quote
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="tel:937-892-4157"
              startIcon={<PhoneIcon />}
              sx={{
                fontSize: '1.1rem',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderColor: 'white',
                color: 'white',
                borderWidth: 2,
                '&:hover': { borderColor: 'white', color: 'white', backgroundColor: 'rgba(255,255,255,0.1)', borderWidth: 2 }
              }}
              aria-label="Call Gem City Cleaning Crew at 937-892-4157"
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Container>
      </Box>

      <QuoteForm open={quoteFormOpen} onClose={closeQuote} title="Get Your Free Xenia Cleaning Estimate!" defaultServiceType="residential" />
    </>
  )
}

export default XeniaHouseCleaningPage
