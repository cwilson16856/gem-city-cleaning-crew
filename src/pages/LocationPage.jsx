import React, { useRef, useEffect, useState } from 'react'
import { Link, useLocation, useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Divider,
  Chip,
  Button,
  useTheme
} from '@mui/material'
import AreasWeServe from '../components/AreasWeServe'
import HeroSection from '../components/HeroSection'
import QuoteForm from '../components/QuoteForm'
import NotFound from './NotFound'
import { getCityBySlug } from '../data/locations'
import { generateSEOTitle, generateCanonicalUrl } from '../utils/seo'
import {
  generateServiceSchema,
  generateLocationWebPageSchema
} from '../utils/localBusinessSchema'

// Shared, service-type-aware content for the "What's Included" / "How It
// Works" / FAQ sections below — added 2026-09-11 (SEO audit, Critical
// finding: 30 of 32 location pages ran 121-268 words, well under the
// 500-600 word floor for the page type). Deliberately generic-but-genuine
// service description rather than per-city facts, since a template shared
// by every city page has no reliable way to verify a NEW city-specific claim
// (a landmark, a business name) — that risk is exactly what the audit's
// "scaled content abuse" check flags. Every fact asserted here already
// exists elsewhere on the site (ResidentialPage.jsx / CommercialPage.jsx
// FAQs, Footer.jsx's "Licensed • Insured" line) — this reuses and localizes
// it, it doesn't introduce new claims. No FAQPage schema is added for this
// content — Google retired FAQ rich results for all sites May 7 2026, and
// per the audit's own quality-gate rule, new FAQPage schema isn't
// recommended for SERP benefit; this is plain on-page content only.
const WHATS_INCLUDED = {
  residential: [
    'Kitchens — countertops, appliance exteriors, sinks, and cabinet fronts',
    'Bathrooms — toilets, showers, tubs, mirrors, and sinks',
    'Bedrooms & living areas — dusting, vacuuming, and surface wipe-down',
    'Floors — vacuuming and mopping all hard-surface and carpeted areas',
    'Trash removal and general tidying throughout the home'
  ],
  commercial: [
    'Workstations & offices — desks, surfaces, and high-touch points',
    'Restrooms — full sanitization of fixtures, mirrors, and floors',
    'Breakrooms & kitchenettes — counters, sinks, and appliance exteriors',
    'Common areas & entryways — floors, glass, and reception surfaces',
    'Trash and recycling removal throughout the facility'
  ]
}

const HOW_IT_WORKS = [
  { title: 'Get your free quote', body: 'Call 937-892-4157 or request a quote online — we\'ll ask a few questions about your space and cleaning needs.' },
  { title: 'We build your plan', body: 'One-time, weekly, bi-weekly, or monthly — with no long-term contract required.' },
  { title: 'Trained crew arrives', body: 'Every cleaner completes three months of training before working independently.' },
  { title: 'Consistent results', body: 'The same standards every visit, with easy rescheduling if your plans change.' }
]

const LOCATION_FAQ = {
  residential: [
    { q: 'Do I need to be home during the cleaning?', a: 'No — many clients provide access instructions and go about their day. It\'s entirely up to what works for you.' },
    { q: 'Do you bring your own cleaning supplies?', a: 'Yes, our trained crews bring their own tools and supplies. If you have a sensitivity and want us to use something specific instead, we can accommodate that.' },
    { q: 'What if I need to reschedule?', a: 'No long-term contracts means flexible rescheduling — just give us a call ahead of your appointment.' }
  ],
  commercial: [
    { q: 'Can you clean after business hours?', a: 'Yes — we offer flexible scheduling including evenings and weekends so cleaning never disrupts your operations.' },
    { q: 'Do you provide cleaning supplies and equipment?', a: 'Yes, we bring all necessary supplies and equipment, using commercial-grade products that are effective yet safe for your workplace.' },
    { q: 'Are your cleaners licensed and insured?', a: 'Yes — Gem City Cleaning Crew is licensed and insured for every job.' }
  ]
}

// Service areas with their details — used only by the generic /locations index
// page below (not by the per-city pages, which pull from src/data/locations.js).
const serviceAreas = [
  { city: 'Dayton', residential: { title: 'House Cleaning Services in Dayton', path: '/locations/dayton/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Dayton', path: '/locations/dayton/commercial-cleaning-services' } },
  { city: 'Kettering', residential: { title: 'House Cleaning Services in Kettering', path: '/locations/kettering/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Kettering', path: '/locations/kettering/commercial-cleaning-services' } },
  { city: 'Oakwood', residential: { title: 'House Cleaning Services in Oakwood', path: '/locations/oakwood/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Oakwood', path: '/locations/oakwood/commercial-cleaning-services' } },
  { city: 'Centerville', residential: { title: 'House Cleaning Services in Centerville', path: '/locations/centerville/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Centerville', path: '/locations/centerville/commercial-cleaning-services' } },
  { city: 'Miamisburg', residential: { title: 'House Cleaning Services in Miamisburg', path: '/locations/miamisburg/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Miamisburg', path: '/locations/miamisburg/commercial-cleaning-services' } },
  { city: 'Springboro', residential: { title: 'House Cleaning Services in Springboro', path: '/locations/springboro/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Springboro', path: '/locations/springboro/commercial-cleaning-services' } },
  { city: 'Huber Heights', residential: { title: 'House Cleaning Services in Huber Heights', path: '/locations/huber-heights/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Huber Heights', path: '/locations/huber-heights/commercial-cleaning-services' } },
  { city: 'Riverside', residential: { title: 'House Cleaning Services in Riverside', path: '/locations/riverside/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Riverside', path: '/locations/riverside/commercial-cleaning-services' } },
  { city: 'Xenia', residential: { title: 'House Cleaning Services in Xenia', path: '/locations/xenia/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Xenia', path: '/locations/xenia/commercial-cleaning-services' } },
  { city: 'Beavercreek', residential: { title: 'House Cleaning Services in Beavercreek', path: '/locations/beavercreek/house-cleaning-services' }, commercial: { title: '7+ Elite Commercial Cleaning Services in Beavercreek', path: '/locations/beavercreek/commercial-services' } },
  { city: 'Fairborn', residential: { title: 'House Cleaning Services in Fairborn', path: '/locations/fairborn/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Fairborn', path: '/locations/fairborn/commercial-cleaning-services' } },
  { city: 'Yellow Springs', residential: { title: 'House Cleaning Services in Yellow Springs', path: '/locations/yellow-springs/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Yellow Springs', path: '/locations/yellow-springs/commercial-cleaning-services' } },
  { city: 'Tipp City', residential: { title: 'House Cleaning Services in Tipp City', path: '/locations/tipp-city/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Tipp City', path: '/locations/tipp-city/commercial-cleaning-services' } },
  { city: 'Bellbrook', residential: { title: 'House Cleaning Services in Bellbrook', path: '/locations/bellbrook/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Bellbrook', path: '/locations/bellbrook/commercial-cleaning-services' } },
  { city: 'Vandalia', residential: { title: 'House Cleaning Services in Vandalia', path: '/locations/vandalia/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Vandalia', path: '/locations/vandalia/commercial-cleaning-services' } },
  { city: 'Troy', residential: { title: 'House Cleaning Services in Troy', path: '/locations/troy/house-cleaning-services' }, commercial: { title: 'Commercial Cleaning Services in Troy', path: '/locations/troy/commercial-cleaning-services' } }
]

const createCityId = (city) => city.toLowerCase().replace(/\s+/g, '-')

// The generic /locations overview page — unchanged from before this rewrite.
const LocationsIndex = () => {
  const theme = useTheme()
  const location = useLocation()
  const cityRefs = useRef({})

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && cityRefs.current[hash]) {
      setTimeout(() => {
        cityRefs.current[hash].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }, 100)
    }
  }, [location])

  return (
    <>
      <Helmet>
        <title>Cleaning Service Locations Near Dayton | Gem City Cleaning Crew</title>
        <meta name="description" content="Professional cleaning services throughout Greater Dayton including Kettering, Centerville, Beavercreek & more. Residential & commercial cleaning services." />
      </Helmet>

      {/* Hero Section */}
      <HeroSection
        title="Service Locations"
        subtitle="Professional Cleaning Services Throughout Greater Dayton"
        description="Residential & Commercial Cleaning Services in Dayton and Surrounding Areas"
        backgroundImage="/images/legacy/katja-rooke-77JACslA8G0-unsplash-scaled.jpg"
        chipText="LICENSED • INSURED • PROFESSIONAL"
        showRating={true}
        ratingValue={4.6}
        reviewCount="90+"
        primaryButtonText="Get Your Free Quote"
        primaryButtonLink="/quote"
        differentiators={[
          'Same-Day Available',
          'No Contracts',
          'Local Service',
          'Professional Staff'
        ]}
      />

      {/* Areas We Serve Component */}
      <Box id="service-areas">
        <AreasWeServe
          onCityClick={(city) => {
            const cityId = createCityId(city)
            if (cityRefs.current[cityId]) {
              cityRefs.current[cityId].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              })
            }
          }}
        />
      </Box>

      {/* City-Specific Services */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Find Services in Your Area
        </Typography>

        <Grid container spacing={4}>
          {serviceAreas.map((area) => (
            <Grid
              item
              xs={12}
              md={6}
              key={area.city}
              ref={el => cityRefs.current[createCityId(area.city)] = el}
              id={createCityId(area.city)}
            >
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:target': {
                    transform: 'scale(1.02)',
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h4" component="h3" sx={{ mb: 3, color: theme.palette.primary.main }}>
                    {area.city}
                  </Typography>

                  <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 600 }}>
                    Residential Services
                  </Typography>
                  <CardActionArea
                    component={Link}
                    to={area.residential.path}
                    sx={{ mb: 3, p: 2, borderRadius: 1 }}
                  >
                    <Typography variant="body1">
                      {area.residential.title}
                    </Typography>
                  </CardActionArea>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 600 }}>
                    Commercial Services
                  </Typography>
                  <CardActionArea
                    component={Link}
                    to={area.commercial.path}
                    sx={{ mb: 1, p: 2, borderRadius: 1 }}
                  >
                    <Typography variant="body1">
                      {area.commercial.title}
                    </Typography>
                  </CardActionArea>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

// A real per-city, per-service-type page — unique title/meta/canonical/schema
// and unique body content sourced from src/data/locations.js.
const CityServicePage = ({ citySlug, serviceType, currentPath }) => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false)
  const cityData = getCityBySlug(citySlug)
  const content = cityData?.[serviceType]

  if (!cityData || !content) {
    return <NotFound />
  }

  const canonicalUrl = generateCanonicalUrl(currentPath)
  const serviceId = `${canonicalUrl}#service`

  // LocalBusiness itself is injected once, site-wide, by the app shell
  // (App.jsx / entry-server.jsx) — a per-page copy here would duplicate it
  // with a conflicting narrower areaServed. See 2026-09-11 SEO audit,
  // Schema finding #1.
  const serviceSchema = generateServiceSchema({
    id: serviceId,
    name: content.heroTitle,
    description: content.metaDescription,
    serviceType: serviceType === 'residential' ? 'House Cleaning' : 'Commercial Cleaning',
    areaServedCities: [cityData.name],
    url: canonicalUrl
  })
  const webPageSchema = generateLocationWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: content.heroTitle,
    description: content.metaDescription,
    aboutId: serviceId,
    breadcrumbs: [
      { name: 'Home', url: 'https://gemcitycleaningcrew.com' },
      { name: 'Locations', url: generateCanonicalUrl('/locations') },
      { name: content.breadcrumbLabel, url: canonicalUrl }
    ]
  })

  return (
    <>
      <Helmet>
        <title>{generateSEOTitle(content.heroTitle, 'Gem City Cleaning')}</title>
        <meta name="description" content={content.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      <HeroSection
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        backgroundImage="/images/legacy/katja-rooke-77JACslA8G0-unsplash-scaled.jpg"
        chipText="LICENSED • INSURED • PROFESSIONAL"
        showRating={true}
        ratingValue={4.6}
        reviewCount="90+"
        primaryButtonText="Get Your Free Quote"
        primaryButtonLink="/quote"
        differentiators={['Same-Day Available', 'No Contracts', 'Local Service', 'Professional Staff']}
      />

      <Container maxWidth="md" sx={{ py: 8 }}>
        {content.intro.map((paragraph, i) => (
          <Typography key={i} variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
            {paragraph}
          </Typography>
        ))}

        {cityData.landmarks?.length > 0 && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h2" sx={{ mb: 1.5, fontWeight: 600 }}>
              Local Landmarks
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {cityData.landmarks.map((landmark) => (
                <Chip key={landmark} label={landmark} variant="outlined" />
              ))}
            </Box>
          </Box>
        )}

        {cityData.zipCodes?.length > 0 && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h2" sx={{ mb: 1.5, fontWeight: 600 }}>
              Zip Codes Served
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {cityData.zipCodes.map((zip) => (
                <Chip key={zip} label={zip} size="small" />
              ))}
            </Box>
          </Box>
        )}

        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            What's Included in {serviceType === 'residential' ? 'House' : 'Commercial'} Cleaning in {cityData.name}
          </Typography>
          <Box component="ul" sx={{ pl: 3, m: 0 }}>
            {WHATS_INCLUDED[serviceType].map((item) => (
              <Typography key={item} component="li" variant="body1" sx={{ mb: 1, lineHeight: 1.6 }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
            How It Works
          </Typography>
          <Grid container spacing={3}>
            {HOW_IT_WORKS.map((step, i) => (
              <Grid item xs={12} sm={6} key={step.title}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {i + 1}. {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {step.body}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            {cityData.name} {serviceType === 'residential' ? 'House' : 'Commercial'} Cleaning FAQ
          </Typography>
          {LOCATION_FAQ[serviceType].map((item) => (
            <Box key={item.q} sx={{ mb: 2.5 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                {item.q}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {item.a}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button
          variant="contained"
          size="large"
          onClick={() => setQuoteFormOpen(true)}
          sx={{ mt: 2 }}
        >
          Get Your Free {cityData.name} Quote
        </Button>
      </Container>

      <AreasWeServe currentCity={cityData.name} />

      <QuoteForm
        open={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        title={`Get Your Free ${cityData.name} Cleaning Estimate!`}
        defaultServiceType={serviceType}
      />
    </>
  )
}

const LocationPage = ({ serviceType }) => {
  const { city: citySlug } = useParams()

  if (!serviceType) {
    return <LocationsIndex />
  }

  if (citySlug === 'beavercreek' && serviceType === 'commercial') {
    return <Navigate to="/locations/beavercreek/commercial-services" replace />
  }

  return (
    <CityServicePage
      citySlug={citySlug}
      serviceType={serviceType}
      currentPath={`/locations/${citySlug}/${serviceType === 'residential' ? 'house-cleaning-services' : 'commercial-cleaning-services'}`}
    />
  )
}

export default LocationPage
