import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  useTheme
} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import BathtubIcon from '@mui/icons-material/Bathtub'
import KitchenIcon from '@mui/icons-material/Kitchen'
import BedIcon from '@mui/icons-material/Bed'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import GroupsIcon from '@mui/icons-material/Groups'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import PhoneIcon from '@mui/icons-material/Phone'
import {
  generateServiceSchema,
  generateLocationWebPageSchema
} from '../utils/localBusinessSchema'
import { generateCanonicalUrl } from '../utils/seo'

// Room-by-room modules our cleaners train on before working independently —
// framed for customers reading this page, not reproducing internal
// procedures verbatim (chemical handling specifics, equipment maintenance,
// etc. stay in the internal training guide, not a public marketing page).
const trainingModules = [
  {
    title: 'Bathrooms',
    icon: <BathtubIcon sx={{ fontSize: 36 }} />,
    body: 'Sanitizing fixtures, tile, and grout without damaging finishes — different surfaces (tile, plastic enclosures, glass) need different products and techniques, and using the wrong one can permanently damage a customer\'s bathroom.'
  },
  {
    title: 'Kitchens',
    icon: <KitchenIcon sx={{ fontSize: 36 }} />,
    body: 'A systematic top-to-bottom approach — cabinets, countertops, and appliances inside and out — with material-specific care for granite, stainless steel, and wood finishes.'
  },
  {
    title: 'Bedrooms & Living Areas',
    icon: <BedIcon sx={{ fontSize: 36 }} />,
    body: 'Dusting, vacuuming, and surface care that respects your belongings — everything gets put back exactly where it was.'
  },
  {
    title: 'Floors',
    icon: <SchoolIcon sx={{ fontSize: 36 }} />,
    body: 'The right method for the right surface — hardwood, tile, and carpet are all cleaned differently, and using the wrong setting or product on the wrong floor can cause real damage.'
  }
]

const trainingPrinciples = [
  {
    title: 'Three months, not three days',
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    body: "Every cleaner completes three months of hands-on training before working independently in a client's home or business. It's a genuine program, not a one-day orientation."
  },
  {
    title: 'Safety and property come first',
    icon: <HealthAndSafetyIcon sx={{ fontSize: 40 }} />,
    body: "Our team is trained on which products are safe for which surfaces (and which combinations to never mix), so your home's finishes — and your family or employees — stay safe."
  },
  {
    title: "Ask, don't guess",
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    body: "When a cleaner runs into something outside their training, our policy is simple: call for guidance rather than guess. We'd rather answer a question than risk your home."
  },
  {
    title: 'Background-checked and insured',
    icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
    body: 'Every cleaner on our team passes a Checkr background check before ever stepping into a client\'s home, and Gem City Cleaning Crew is licensed and insured for every job.'
  }
]

const OurTrainingProgram = () => {
  const theme = useTheme()
  const canonicalUrl = generateCanonicalUrl('/our-training-program')
  const serviceId = `${canonicalUrl}#service`

  const serviceSchema = generateServiceSchema({
    id: serviceId,
    name: 'Cleaner Training Program',
    description: 'Gem City Cleaning Crew\'s three-month, room-by-room training program every cleaner completes before working independently.',
    serviceType: 'Staff Training',
    url: canonicalUrl
  })
  const webPageSchema = generateLocationWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: 'Our Training Program',
    description: 'How Gem City Cleaning Crew trains every cleaner before they work independently in a client\'s home or business.',
    aboutId: serviceId,
    breadcrumbs: [
      { name: 'Home', url: 'https://gemcitycleaningcrew.com' },
      { name: 'About Us', url: generateCanonicalUrl('/about-us') },
      { name: 'Our Training Program', url: canonicalUrl }
    ]
  })

  return (
    <>
      <Helmet>
        <title>Our Training Program | Gem City Cleaning Crew</title>
        <meta
          name="description"
          content="Every Gem City Cleaning Crew cleaner completes three months of hands-on, room-by-room training before working independently. Here's what that actually covers."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Training Program | Gem City Cleaning Crew" />
        <meta property="og:description" content="Every cleaner completes three months of hands-on training before working independently. Here's what that actually covers." />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      <Box
        sx={{
          background: 'linear-gradient(135deg, #D81B60 0%, #AD1457 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2.2rem', md: '3.2rem' }, fontWeight: 700, mb: 2 }}>
            Our Training Program
          </Typography>
          <Typography variant="h5" component="p" sx={{ opacity: 0.9, fontWeight: 400 }}>
            Three months of hands-on training, before anyone works independently in your home or business
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.7 }}>
          &ldquo;3 months of training&rdquo; is a claim you&apos;ll see on every page of our site. This page is why: cleaning
          a home or business well isn&apos;t obvious, and doing it wrong can genuinely damage a customer&apos;s
          property — bleach ruins a plastic tub enclosure, the wrong scouring pad scratches stainless
          steel, a heavy hand on granite dulls the finish. Before a cleaner ever works independently, they
          spend three months learning the difference, room by room, surface by surface.
        </Typography>

        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center', color: theme.palette.primary.main, fontWeight: 700 }}>
          What Training Covers
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {trainingModules.map((mod) => (
            <Grid item xs={12} sm={6} key={mod.title}>
              <Card sx={{ height: '100%', p: 3 }}>
                <Box sx={{ color: theme.palette.primary.main, mb: 1.5 }}>{mod.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{mod.title}</Typography>
                <Typography variant="body2" color="text.secondary">{mod.body}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center', color: theme.palette.primary.main, fontWeight: 700 }}>
          How We Approach Training
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {trainingPrinciples.map((p) => (
            <Grid item xs={12} sm={6} key={p.title}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <CardContent>
                  <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>{p.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{p.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{p.body}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h2" component="h2" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}>
          Respecting Your Home or Business
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.7 }}>
          Training isn&apos;t only about technique — it&apos;s about how our team treats what&apos;s yours. We train our
          cleaners to never open closed curio cabinets or display cases without being asked, to leave
          business paperwork on a desk untouched, and to put every item back exactly where it was found.
          If a job note says a client has a preference — a product to avoid, a room to skip, a specific
          way they want something done — that gets followed, every visit.
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.7 }}>
          Our team is also trained to communicate, not guess. If something in your home needs a judgment
          call — a stain that needs special handling, a surface they&apos;re not sure about — our policy is to
          call and ask rather than risk damaging something that matters to you.
        </Typography>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
            Ready to See the Difference Training Makes?
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote"
              sx={{ fontSize: '1.1rem', px: 4, py: 1.5, fontWeight: 600 }}
            >
              Request a Quote
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="tel:937-892-4157"
              startIcon={<PhoneIcon />}
              sx={{ fontSize: '1.1rem', px: 4, py: 1.5, fontWeight: 600 }}
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default OurTrainingProgram
