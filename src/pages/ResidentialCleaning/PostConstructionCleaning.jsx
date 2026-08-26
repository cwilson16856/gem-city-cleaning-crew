// Post-Construction Cleaning Page

import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Box,
  Chip,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ConstructionIcon from '@mui/icons-material/Construction'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import ScheduleIcon from '@mui/icons-material/Schedule'
import HomeIcon from '@mui/icons-material/Home'
import BusinessIcon from '@mui/icons-material/Business'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/ResidentialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'

// SEO/schema utils — reusing the DRY, @id-linked generators (see
// src/utils/localBusinessSchema.js) instead of a 4th hand-rolled inline-JSON
// copy of LocalBusiness/Service, matching LocationPage.jsx's pattern.
import { generateCanonicalUrl, generateSEOTitle } from '../../utils/seo'
import {
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateLocationWebPageSchema
} from '../../utils/localBusinessSchema'
import { generateFAQPageStructuredData } from '../../utils/blogSchema'

const PAGE_PATH = '/post-construction-cleaning'
const AREA_SERVED_CITIES = ['Dayton', 'Kettering', 'Centerville', 'Beavercreek', 'Oakwood', 'Huber Heights']

const PostConstructionCleaning = () => {
  const theme = useTheme()

  // The standard 3-stage construction-cleanup framework (rough clean before
  // trades finish, final clean before walkthrough, touch-up after move-in
  // furniture arrives) — a real, widely-used industry sequence, not a
  // fabricated process specific to this business.
  const processSteps = [
    {
      title: 'Rough Clean',
      description: 'Bulk debris, packaging, stickers, and construction dust removed so remaining trades can finish their work in a clear space.'
    },
    {
      title: 'Final Clean',
      description: 'Full top-to-bottom detail clean — window tracks, light fixtures, cabinet interiors, baseboards, and floors — ahead of your final walkthrough.'
    },
    {
      title: 'Touch-Up Clean',
      description: 'A last pass after furniture and fixtures move in, catching the dust that settles during move-in day.'
    }
  ]

  const includedServices = [
    'Construction dust removal from all surfaces',
    'Window & window track cleaning (interior)',
    'Light fixture & ceiling fan detailing',
    'Cabinet & drawer interior wipe-down',
    'Baseboards & trim detail work',
    'Floor deep cleaning (dust, drywall residue, adhesive)',
    'Paint overspray & sticker/label removal',
    'Switch plates & outlet sanitization',
    'Bathroom & kitchen fixture cleaning',
    'Vacuuming of carpets, rugs, and stairs'
  ]

  const faqs = [
    {
      question: 'What is post-construction cleaning?',
      answer: 'Post-construction cleaning removes the dust, debris, adhesive residue, and paint overspray left behind after a renovation, remodel, or new build — getting a space ready to actually live or work in, not just cleared of construction materials.'
    },
    {
      question: 'Do I need a rough clean and a final clean, or just one?',
      answer: "It depends on your project. A rough clean (bulk debris and dust removal) is usually done before trades finish their work; the final clean happens right before your walkthrough. For smaller renovations, we can often combine both into a single visit — tell us about your project and we'll recommend what fits."
    },
    {
      question: 'How long does post-construction cleaning take?',
      answer: 'It varies with the size of the project and how much dust and debris is involved — a single renovated room is a few hours, a full new-construction home is typically a full day. We’ll give you a time estimate with your quote.'
    },
    {
      question: 'Do you clean construction dust out of vents and fixtures?',
      answer: 'Yes — light fixtures, ceiling fans, switch plates, and visible surfaces around vents are part of our standard post-construction checklist. For full HVAC duct cleaning we can refer you to a specialist, since that requires different equipment.'
    },
    {
      question: 'Is post-construction cleaning available for both homes and businesses?',
      answer: "Yes. This page covers residential post-construction and renovation cleanup; for a commercial buildout or office renovation, see our Commercial One-Time Cleaning page — the process is similar but scoped for business spaces."
    },
    {
      question: 'Do I need to be present during the cleaning?',
      answer: "No — as long as we have access to the space, our team can complete the cleaning without you needing to be there. Just let us know how you'd like access arranged when you book."
    }
  ]

  const tableOfContentsItems = [
    { text: 'Why Professional Post-Construction Cleaning', href: '#why-choose' },
    { text: "What's Included", href: '#whats-included' },
    { text: 'Our 3-Stage Cleaning Process', href: '#cleaning-process' },
    { text: 'Frequently Asked Questions', href: '#faq' },
    { text: 'Areas We Serve', href: '#service-areas' },
    { text: 'Get Your Free Quote', href: '#get-quote' }
  ]

  const canonicalUrl = generateCanonicalUrl(PAGE_PATH)
  const serviceId = `${canonicalUrl}#service`
  const pageTitle = 'Post-Construction Cleaning Dayton OH'
  const metaDescription = 'Professional post-construction cleaning in Dayton, Ohio. Rough clean, final clean, and touch-up cleaning for new builds, renovations, and remodels. Free quotes available.'

  const localBusinessSchema = generateLocalBusinessSchema(AREA_SERVED_CITIES)
  const serviceSchema = generateServiceSchema({
    id: serviceId,
    name: 'Post-Construction Cleaning',
    description: metaDescription,
    serviceType: 'Post-Construction Cleaning',
    areaServedCities: AREA_SERVED_CITIES,
    url: canonicalUrl
  })
  const webPageSchema = generateLocationWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: pageTitle,
    description: metaDescription,
    aboutId: serviceId,
    breadcrumbs: [
      { name: 'Home', url: 'https://gemcitycleaningcrew.com' },
      { name: 'Residential', url: generateCanonicalUrl('/residential') },
      { name: 'Post-Construction Cleaning', url: canonicalUrl }
    ]
  })
  const faqSchema = generateFAQPageStructuredData(faqs)

  return (
    <>
      <Helmet>
        <title>{generateSEOTitle(pageTitle)}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="post construction cleaning Dayton Ohio, new build cleaning, renovation cleanup, remodel cleaning Dayton, construction dust removal" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={`${pageTitle} | Gem City Cleaning Crew`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />
        <meta property="og:site_name" content="Gem City Cleaning Crew" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${pageTitle} | Gem City Cleaning Crew`} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />

        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      {/* Hero Section */}
      <Box
        className="hero-section"
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          minHeight: { xs: 500, md: 600 },
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* .hero-section::before (HomePage.css) paints a semi-transparent
            overlay across the whole hero at z-index: 1 — without this
            Container establishing its own stacking context above that, the
            content paints underneath it, washing out the white text/chip
            into a hazy, low-contrast look. Matches MoveInCleaning.jsx's
            same fix for the same shared class. */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Chip
            label="POST-CONSTRUCTION & RENOVATION CLEANUP"
            sx={{
              mb: 3,
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem',
              px: 2
            }}
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.1,
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            Post-Construction Cleaning Dayton, OH
          </Typography>

          <Typography
            variant="h4"
            component="p"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              fontWeight: 400,
              mb: 4,
              maxWidth: 800,
              mx: 'auto',
              color: 'white',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)'
            }}
          >
            From construction dust to move-in ready — rough clean, final clean, and touch-up cleaning for new builds and renovations
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote"
              sx={{
                fontSize: '1.1rem',
                px: 4,
                py: 1.5,
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                fontWeight: 600,
                '&:hover': { backgroundColor: theme.palette.primary.dark, transform: 'translateY(-2px)' }
              }}
            >
              Get Your Free Quote
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
                borderColor: 'white',
                color: 'white',
                borderWidth: 2,
                fontWeight: 600,
                '&:hover': { borderColor: 'white', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderWidth: 2 }
              }}
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Container>
      </Box>

      <TableOfContents
        items={tableOfContentsItems}
        collapsible={true}
        defaultExpanded={false}
        showItemCount={true}
      />

      {/* Why Choose Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="why-choose">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
            Why Professional Post-Construction Cleaning Matters
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', maxWidth: 900, mx: 'auto', lineHeight: 1.7 }}>
            Construction dust settles into places a standard cleaning won&apos;t reach — window tracks, light fixtures,
            cabinet interiors, and vents. Whether you&apos;re finishing a renovation in Kettering, closing out a new
            build in Centerville, or wrapping up a remodel anywhere in the Dayton area, a dedicated construction
            cleanup gets the space genuinely ready to use, not just visibly tidy.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <ConstructionIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600, fontSize: '1.25rem' }}>
                Built for Construction Dust
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Drywall dust, sawdust, and debris need a different approach than routine cleaning — we&apos;re equipped for it.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <HealthAndSafetyIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600, fontSize: '1.25rem' }}>
                Move-In Ready
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A genuinely clean space to walk into, not one that still needs another round of cleaning after the crew leaves.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <ScheduleIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600, fontSize: '1.25rem' }}>
                Flexible Scheduling
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Book around your project timeline — rough clean, final clean, or both, whenever your trades finish.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* What's Included */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="whats-included">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            What&apos;s Included
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto', fontSize: '1.1rem' }}>
            Every post-construction clean covers the areas construction work actually affects.
          </Typography>

          <Grid container spacing={2}>
            {includedServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    border: `2px solid ${theme.palette.primary.main}20`,
                    background: '#ffffff',
                    transition: 'all 0.3s ease',
                    '&:hover': { borderColor: theme.palette.primary.main, transform: 'translateY(-2px)', boxShadow: theme.shadows[4] }
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 24, color: theme.palette.primary.main, mb: 1 }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {service}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="cleaning-process">
        <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Our 3-Stage Cleaning Process
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto', fontSize: '1.1rem' }}>
          A standard construction-cleanup sequence — book the stage (or stages) that fit your project.
        </Typography>

        <List>
          {processSteps.map((step, index) => (
            <ListItem key={step.title} sx={{ px: 0, alignItems: 'flex-start' }}>
              <ListItemIcon sx={{ mt: 0.5 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700
                  }}
                >
                  {index + 1}
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={step.title}
                secondary={step.description}
                sx={{ ml: 2 }}
                primaryTypographyProps={{ variant: 'h6', component: 'h3', fontWeight: 700 }}
              />
            </ListItem>
          ))}
        </List>
      </Container>

      {/* FAQ */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="faq">
        <Container maxWidth="md">
          <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq) => (
            <Accordion key={faq.question} sx={{ mb: 2, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, fontSize: '1.05rem' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* Service Areas */}
      <div id="service-areas">
        <AreasWeServe />
      </div>

      {/* Related Services */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Related Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card
              component={Link}
              to="/move-in-cleaning"
              sx={{
                p: 4, textAlign: 'center', textDecoration: 'none', height: '100%',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                borderRadius: 3, boxShadow: 2, transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 8 }
              }}
            >
              <HomeIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h5" component="h3" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
                Move-In Cleaning
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A fresh-start deep clean for new-construction homes once your final walkthrough is done
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              component={Link}
              to="/commercial-one-time-cleaning"
              sx={{
                p: 4, textAlign: 'center', textDecoration: 'none', height: '100%',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                borderRadius: 3, boxShadow: 2, transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 8 }
              }}
            >
              <BusinessIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h5" component="h3" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
                Commercial One-Time Cleaning
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Office and retail buildout cleanup, part of our broader one-time commercial cleaning service
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              component={Link}
              to="/deep-cleaning"
              sx={{
                p: 4, textAlign: 'center', textDecoration: 'none', height: '100%',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                borderRadius: 3, boxShadow: 2, transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 8 }
              }}
            >
              <CleaningServicesIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h5" component="h3" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
                Deep Cleaning
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For a thorough clean outside of an active construction or renovation project
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Final CTA */}
      <Box
        id="get-quote"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          py: 8,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600, color: 'white' }}>
            Ready to Get Your Space Move-In Ready?
          </Typography>
          <Typography variant="h6" component="p" sx={{ mb: 4, opacity: 0.9, color: 'white' }}>
            Tell us about your project and we&apos;ll put together a free quote for rough clean, final clean, or both.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote"
              sx={{
                fontSize: '1.1rem', px: 4, py: 1.5,
                backgroundColor: '#1C1C1C !important', color: 'white !important', fontWeight: 600,
                border: '3px solid white !important',
                '&:hover': { backgroundColor: '#000000 !important', transform: 'translateY(-2px)' }
              }}
            >
              Get Free Quote
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="tel:937-892-4157"
              startIcon={<PhoneIcon />}
              sx={{
                fontSize: '1.1rem', px: 4, py: 1.5,
                borderColor: 'white', color: 'white', borderWidth: 2, fontWeight: 600,
                '&:hover': { borderColor: 'white', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderWidth: 2 }
              }}
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default PostConstructionCleaning
