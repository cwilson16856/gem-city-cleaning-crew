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
  Chip,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import FactoryIcon from '@mui/icons-material/Factory'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SecurityIcon from '@mui/icons-material/Security'
import DescriptionIcon from '@mui/icons-material/Description'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/CommercialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'

const IndustrialCleaning = () => {
  const theme = useTheme()

  const industrialTypes = [
    {
      title: "Warehouses & Distribution Centers",
      description: "Large-scale cleaning for warehouses and distribution facilities, including high-traffic floor areas and loading zones",
      icon: <WarehouseIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Floor scrubbing & maintenance", "Loading dock cleaning", "High-traffic aisle care", "Dust and debris removal"],
      popular: true
    },
    {
      title: "Manufacturing Facilities",
      description: "Specialized cleaning for manufacturing plants that keeps production areas safe and compliant",
      icon: <PrecisionManufacturingIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Equipment degreasing", "Production floor cleaning", "Break room maintenance", "Safety compliance support"],
      popular: true
    },
    {
      title: "Factories & Plants",
      description: "Heavy-duty cleaning for factory environments, from production floors to administrative offices",
      icon: <FactoryIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Floor coating maintenance", "Administrative area cleaning", "Restroom & break area care", "Scheduled deep cleans"],
      popular: false
    },
    {
      title: "Shipping & Logistics",
      description: "Cleaning services for shipping, freight, and logistics operations that need to stay running around the clock",
      icon: <LocalShippingIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Overnight & off-shift cleaning", "Office & dispatch area cleaning", "Break room maintenance", "Trash & recycling removal"],
      popular: false
    }
  ]

  const faqData = [
    {
      question: "Do you have experience cleaning industrial facilities?",
      answer: "Yes, we clean warehouses, manufacturing plants, and distribution centers throughout the Dayton area. We understand the scale and safety requirements of industrial environments."
    },
    {
      question: "Can you clean during off-hours or overnight?",
      answer: "Absolutely. Many industrial facilities run multiple shifts, so we offer evening, overnight, and weekend cleaning to avoid disrupting operations."
    },
    {
      question: "Do you offer industrial cleaning without long-term contracts?",
      answer: "Yes. Like all of our commercial services, industrial cleaning is available without long-term contracts — you can book one-time cleanings or set up a recurring schedule that fits your facility."
    },
    {
      question: "What areas of an industrial facility do you clean?",
      answer: "We cover production floors, warehouse aisles, loading docks, break rooms, restrooms, and administrative office areas. We'll build a plan around the specific areas your facility needs covered."
    },
    {
      question: "Are you insured for industrial cleaning work?",
      answer: "Yes, we are fully licensed, insured, and bonded with commercial-grade coverage, and can provide certificates of insurance for your facility's records."
    },
    {
      question: "Do you bring your own equipment and supplies?",
      answer: "Yes, we bring all necessary commercial-grade cleaning equipment and supplies. Let us know if your facility has specific product or safety-data-sheet requirements."
    },
    {
      question: "Can you handle large facilities with multiple buildings?",
      answer: "Yes, we can coordinate cleaning across multiple buildings or areas of a larger facility and adjust our crew size to match the scope of the space."
    }
  ]

  const serviceFeatures = [
    {
      title: "Built for Scale",
      description: "Our crews and scheduling are set up to handle large warehouse and manufacturing floor plans, not just small offices.",
      icon: <WarehouseIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
    },
    {
      title: "Flexible Around Your Shifts",
      description: "Evening, overnight, and weekend cleaning available so we work around your production schedule, not the other way around.",
      icon: <AccessTimeIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
    },
    {
      title: "No Contracts Required",
      description: "Book one-time cleanings or set up a recurring schedule — adjust frequency and scope as your facility's needs change.",
      icon: <DescriptionIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
    }
  ]

  const industrialAreas = [
    {
      title: "Production & Warehouse Floors",
      icon: <FactoryIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Main production areas, warehouse aisles, and high-traffic floor space"
    },
    {
      title: "Loading Docks & Shipping Areas",
      icon: <LocalShippingIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Loading docks, staging areas, and shipping/receiving zones"
    },
    {
      title: "Break Rooms & Employee Areas",
      icon: <HomeRepairServiceIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Employee break rooms, locker rooms, and common areas"
    },
    {
      title: "Restrooms & Facilities",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Restroom cleaning and restocking throughout the facility"
    },
    {
      title: "Administrative Offices",
      icon: <SecurityIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Office areas, conference rooms, and administrative spaces within the facility"
    }
  ]

  const tocItems = [
    { text: '🏭 Professional Industrial Cleaning Dayton', href: '#dayton-industrial-cleaning-services' },
    { text: '✨ Why Choose Professional Industrial Cleaning', href: '#why-choose-us' },
    { text: '📍 Service Areas & Coverage', href: '#service-areas' },
    { text: '📋 What\'s Included in Industrial Cleaning', href: '#what-included' },
    { text: '❓ Industrial Cleaning FAQ', href: '#faq' }
  ]

  return (
    <>
      <Helmet>
        <title>Professional Dayton Industrial Cleaning Services | Warehouses, Manufacturing | Gem City Cleaning</title>
        <meta name="description" content="Professional Dayton industrial cleaning for warehouses, manufacturing plants, and distribution centers. Flexible scheduling, no contracts. Free quotes!" />
        <meta name="keywords" content="Dayton industrial cleaning, warehouse cleaning, manufacturing facility cleaning, factory cleaning, distribution center cleaning" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/industrial-cleaning" />
        <meta property="og:title" content="Professional Dayton Industrial Cleaning Services | Gem City Cleaning" />
        <meta property="og:description" content="Professional Dayton industrial cleaning for warehouses, manufacturing plants, and distribution centers." />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Dayton Industrial Cleaning Services | Gem City Cleaning" />
        <meta name="twitter:description" content="Professional Dayton industrial cleaning for warehouses, manufacturing plants, and distribution centers." />

        <link rel="canonical" href="https://gemcitycleaningcrew.com/industrial-cleaning" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Industrial Cleaning Services",
            "description": "Professional Dayton industrial cleaning services for warehouses, manufacturing plants, and distribution centers",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gem City Cleaning Crew",
              "telephone": "937-892-4157"
            },
            "areaServed": "Dayton, OH and surrounding areas",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Industrial Cleaning Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manufacturing Facility Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Distribution Center Cleaning" } }
              ]
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Box
        className="hero-section commercial-hero-section"
        sx={{
          background: `linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)), url('https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/8643309867_00758e220a_c.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          minHeight: { xs: 600, md: 700 }
        }}
      >
        <Container maxWidth="lg" className="hero-content commercial-hero-content">
          <Chip
            label="HEAVY-DUTY CLEANING • FLEXIBLE SCHEDULING • NO CONTRACTS"
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
            className="hero-title"
            sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 700, mb: 2, lineHeight: 1.1 }}
          >
            Professional Dayton Industrial Cleaning Services
          </Typography>

          <Typography
            variant="h4"
            className="hero-subtitle"
            sx={{ fontSize: { xs: '1.2rem', md: '1.8rem' }, fontWeight: 400, mb: 2, maxWidth: 800, mx: 'auto' }}
          >
            Trusted by Warehouses, Manufacturers & Distribution Centers
          </Typography>

          <Typography
            variant="h5"
            sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 500, mb: 4, maxWidth: 700, mx: 'auto' }}
          >
            Built for Scale • Flexible Shift Scheduling • Professional Results
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote"
              sx={{
                fontSize: '1.1rem',
                px: 4,
                py: 1.5,
                backgroundColor: '#1C1C1C !important',
                color: 'white !important',
                fontWeight: 600,
                position: 'relative',
                zIndex: 9999,
                border: '3px solid white !important',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5) !important',
                '&:hover': {
                  backgroundColor: '#000000 !important',
                  color: 'white !important',
                  transform: 'translateY(-2px)',
                  border: '3px solid white !important'
                }
              }}
            >
              Get Free Industrial Cleaning Quote!
            </Button>
          </Box>
        </Container>
      </Box>

      <TableOfContents items={tocItems} collapsible={true} defaultExpanded={false} showItemCount={true} />

      {/* Industrial Types Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="dayton-industrial-cleaning-services">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Professional Industrial Cleaning Services in Dayton
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            Heavy-duty cleaning solutions for warehouses, manufacturing, and industrial facilities throughout the Dayton area
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {industrialTypes.map((type, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card className="commercial-service-card" sx={{ height: '100%', position: 'relative', overflow: 'visible' }}>
                {type.popular && (
                  <Chip
                    label="MOST REQUESTED"
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: 12,
                      zIndex: 10,
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      height: 28,
                      borderRadius: '14px',
                      boxShadow: '0 4px 12px rgba(216, 27, 96, 0.4)',
                      '& .MuiChip-label': { px: 2, py: 0.5 }
                    }}
                  />
                )}
                <CardContent sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box className="commercial-service-icon">{type.icon}</Box>
                  <Typography variant="h5" component="h3" className="commercial-service-title" sx={{ mb: 2, fontWeight: 700 }}>
                    {type.title}
                  </Typography>
                  <Typography variant="body1" className="commercial-service-description" sx={{ flex: 1, mb: 2 }}>
                    {type.description}
                  </Typography>
                  <Box sx={{ textAlign: 'left' }}>
                    {type.features.map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CheckCircleIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />
                        <Typography variant="body2" sx={{ fontWeight: 500, color: '#525252' }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/quote"
            sx={{
              fontSize: '1.1rem',
              px: 4,
              py: 1.5,
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              borderWidth: 2,
              fontWeight: 600,
              '&:hover': { backgroundColor: theme.palette.primary.main, color: 'white', borderWidth: 2 }
            }}
          >
            Get Industrial Cleaning Quote
          </Button>
        </Box>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="why-choose-us">
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Why Choose Our Dayton Industrial Cleaning Services?
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            Since 2017, Gem City Cleaning Crew has served the Dayton area with dependable commercial cleaning.
            Industrial facilities need crews that understand scale, safety, and flexible shift schedules —
            our industrial cleaning services are built around exactly that.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }} className="commercial-service-features">
            {serviceFeatures.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="commercial-areas-grid">
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>{feature.icon}</Box>
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
      </Box>

      {/* Detailed Service Information */}
      <Box sx={{ py: 8 }} id="what-included">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            What's Included in Our Industrial Cleaning Services?
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            Our industrial cleaning services cover every area of your facility. We use commercial-grade
            equipment suited for large floor plans and heavy-duty environments, and we'll work with your
            team on any facility-specific safety requirements.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {industrialAreas.map((area, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="commercial-areas-grid">
                  <CardContent>
                    <Box className="commercial-room-icon">{area.icon}</Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 2 }}>
                      {area.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {area.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center' }}>
            <Card
              sx={{
                maxWidth: 700,
                mx: 'auto',
                p: 4,
                background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                border: `2px solid ${theme.palette.primary.main}`,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: theme.shadows[8] }
              }}
            >
              <Typography variant="h3" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}>
                Ready for Professional Industrial Cleaning?
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#525252', fontSize: '1.1rem' }}>
                Let us build a cleaning plan around your facility's scale and schedule.
                No contracts required — just reliable, professional industrial cleaning.
              </Typography>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/quote"
                sx={{
                  fontSize: '1.1rem',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  backgroundColor: theme.palette.primary.main,
                  '&:hover': { backgroundColor: theme.palette.primary.dark, color: 'white', transform: 'translateY(-2px)' }
                }}
              >
                Get Free Industrial Cleaning Quote
              </Button>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="faq">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
              Industrial Cleaning FAQ
            </Typography>
          </Box>

          {faqData.map((faq, index) => (
            <Accordion key={index} className="commercial-faq-accordion">
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* Service Areas with Map */}
      <Box id="service-areas">
        <AreasWeServe />
      </Box>

      {/* Excellence Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Divider sx={{ my: 4 }} />

        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 4, color: theme.palette.primary.main, fontWeight: 700 }}>
            Professional Industrial Cleaning Excellence
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, maxWidth: 900, mx: 'auto', lineHeight: 1.7 }}>
            At Gem City Cleaning Crew, we understand that industrial facilities require cleaning crews who
            can handle scale, work around production schedules, and follow facility safety protocols.
            Our industrial cleaning services are designed for Dayton's warehouses, manufacturers, and
            distribution centers, with flexible scheduling and no long-term contracts required.
          </Typography>
        </Box>
      </Container>

      {/* Final CTA */}
      <Box className="commercial-cta-section" sx={{ color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Ready for Professional Industrial Cleaning?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Built for scale • Flexible shift scheduling • No contracts • Licensed & insured
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
                backgroundColor: '#1C1C1C !important',
                color: 'white !important',
                fontWeight: 600,
                position: 'relative',
                zIndex: 9999,
                border: '3px solid white !important',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5) !important',
                '&:hover': {
                  backgroundColor: '#000000 !important',
                  color: 'white !important',
                  transform: 'translateY(-2px)',
                  border: '3px solid white !important'
                }
              }}
              aria-label="Get free industrial cleaning quote for Dayton facilities"
            >
              Get Free Industrial Cleaning Quote
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
                position: 'relative',
                zIndex: 10,
                '&:hover': { borderColor: 'white', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderWidth: 2 }
              }}
              aria-label="Call Dayton industrial cleaning services team at 937-892-4157"
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default IndustrialCleaning
