// Move-Out Cleaning Page

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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardMedia
} from '@mui/material'
// Individual icon imports to reduce bundle size
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import HomeIcon from '@mui/icons-material/Home'
import KitchenIcon from '@mui/icons-material/Kitchen'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ScheduleIcon from '@mui/icons-material/Schedule'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import SecurityIcon from '@mui/icons-material/Security'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BusinessIcon from '@mui/icons-material/Business'
import WindowIcon from '@mui/icons-material/Window'
import FloorIcon from '@mui/icons-material/Layers'
import MovingIcon from '@mui/icons-material/Moving'
import NewReleasesIcon from '@mui/icons-material/NewReleases'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/ResidentialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'

const MoveOutCleaningPage = () => {
  const theme = useTheme()

  // Before/After comparison data with new images
  const beforeAfterComparisons = [
    {
      title: "Oven Complete Restoration",
      description: "Deep cleaning and degreasing to meet landlord inspection standards",
      beforeImage: "/images/legacy/Dirty-Oven-e1749136044376.webp",
      afterImage: "/images/legacy/Clean-Oven-e1749135938970.webp",
      beforeAlt: "Dirty oven with grease buildup before move-out cleaning services Dayton",
      afterAlt: "Spotless oven after professional move-out cleaning meeting landlord standards"
    },
    {
      title: "Bathroom Deposit Protection",
      description: "Thorough sanitization and cleaning to prevent security deposit deductions",
      beforeImage: "/images/legacy/dirty-toilet-e1749136119717.webp",
      afterImage: "/images/legacy/clean-toilet-e1749135967505.webp",
      beforeAlt: "Dirty bathroom before move-out cleaning showing stains that could cost security deposit",
      afterAlt: "Clean bathroom after move-out cleaning protecting tenant security deposit"
    },
    {
      title: "Appliance Move-Out Ready",
      description: "Complete appliance cleaning to lease-compliant standards",
      beforeImage: "/images/legacy/IMG-20240803-WA0010.webp",
      afterImage: "/images/legacy/IMG-20240803-WA0028.webp",
      beforeAlt: "Dirty appliance interior before move-out cleaning",
      afterAlt: "Clean appliance after move-out cleaning ready for landlord inspection"
    },
    {
      title: "Fixture Restoration",
      description: "Professional cleaning of all fixtures to original condition",
      beforeImage: "/images/legacy/dirty-ceiling-fan-e1749136101325.webp",
      afterImage: "/images/legacy/clean-ceiling-fan-e1749136008916.webp",
      beforeAlt: "Dusty fixture before move-out cleaning",
      afterAlt: "Clean fixture after move-out cleaning ready for next tenant"
    }
  ]

  // Move-Out specific cleaning features
  const moveOutFeatures = [
    {
      title: "Security Deposit Protection",
      description: "Professional cleaning standards that help protect your full security deposit",
      icon: <SecurityIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Landlord Inspection Ready",
      description: "Meets or exceeds typical lease cleaning requirements and landlord expectations",
      icon: <BusinessIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Damage Deposit Savings",
      description: "Avoid costly cleaning fees and deductions from your security deposit",
      icon: <AttachMoneyIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Deep Appliance Cleaning",
      description: "Thorough cleaning inside all appliances to lease-compliant standards",
      icon: <KitchenIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Complete Wall Washing",
      description: "Wall cleaning and scuff removal throughout the property",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Property Management Ready",
      description: "Professional standards that property managers expect for unit turnover",
      icon: <HomeIcon sx={{ fontSize: 32, color: 'white' }} />
    }
  ]

  // Included services for move-out cleaning
  const includedServices = [
    "Security deposit protection focus",
    "All appliances deep cleaned inside", 
    "Complete wall washing & spot cleaning",
    "Cabinet & drawer interior cleaning",
    "Bathroom complete sanitization",
    "Window cleaning & sill detail",
    "Baseboard & trim cleaning",
    "Floor deep cleaning & corners",
    "Light fixture & ceiling fan cleaning",
    "Switch plate & outlet cleaning"
  ]

  // Table of Contents items
  const tableOfContentsItems = [
    { text: "Protect Your Security Deposit", href: "#security-deposit" },
    { text: "Before & After Results", href: "#before-after" },
    { text: "What's Included", href: "#whats-included" },
    { text: "For Tenants & Landlords", href: "#tenants-landlords" },
    { text: "Our Cleaning Process", href: "#cleaning-process" },
    { text: "Areas We Serve", href: "#service-areas" },
    { text: "Get Your Free Quote", href: "#get-quote" }
  ]

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="/images/legacy/Clean-Oven.webp" fetchPriority="high" />
        {/* Primary Meta Tags - Enhanced */}
        <title>#1 Move-Out Cleaning Services Dayton OH | Security Deposit Protection | Gem City Cleaning</title>
        <meta name="title" content="#1 Move-Out Cleaning Services Dayton OH | Security Deposit Protection | Gem City Cleaning" />
        <meta name="description" content="⭐ #1 Professional move-out cleaning services in Dayton, OH. Protect your security deposit with thorough cleaning that meets landlord standards. Serving tenants & property managers." />
        <meta name="keywords" content="move out cleaning Dayton, security deposit cleaning, tenant cleaning service Dayton OH, apartment move out cleaning, landlord cleaning requirements, property management cleaning, move out deposit protection, Kettering move out cleaning, Centerville tenant cleaning, Oakwood move out service" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="US-OH" />
        <meta name="geo.placename" content="Dayton, Ohio" />
        <meta name="author" content="Gem City Cleaning Crew" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="theme-color" content="#D81B60" />
        
        {/* Enhanced Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gem City Cleaning Crew" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/move-out-cleaning" />
        <meta property="og:title" content="#1 Professional Move-Out Cleaning Services Dayton OH | Security Deposit Protection" />
        <meta property="og:description" content="⭐ #1 Professional move-out cleaning services in Dayton, OH. Protect your security deposit with thorough cleaning that meets landlord standards." />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />
        <meta property="og:image:alt" content="Professional move-out cleaning services in Dayton OH" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GemCityCleaning" />
        <meta name="twitter:creator" content="@GemCityCleaning" />
        <meta name="twitter:title" content="#1 Professional Move-Out Cleaning Services Dayton OH" />
        <meta name="twitter:description" content="⭐ Protect your security deposit with professional move-out cleaning in Dayton, OH." />
        <meta name="twitter:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://gemcitycleaningcrew.com/move-out-cleaning" />
        
        {/* Enhanced Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://gemcitycleaningcrew.com/move-out-cleaning#service",
            "name": "Move-Out Cleaning Services",
            "alternateName": ["Tenant Cleaning", "Security Deposit Cleaning", "Move Out House Cleaning", "End of Lease Cleaning"],
            "description": "Professional move-out cleaning services in Dayton, OH including security deposit protection cleaning that meets landlord and lease requirements",
            "serviceType": "Move-Out Cleaning",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gem City Cleaning Crew",
              "telephone": "937-892-4157",
              "email": "info@gemcitycleaningcrew.com",
              "url": "https://gemcitycleaningcrew.com"
            },
            "areaServed": [
              "Dayton, OH", "Kettering, OH", "Centerville, OH", "Oakwood, OH", "Huber Heights, OH", "Miamisburg, OH"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "85"
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Will move-out cleaning help me get my security deposit back?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, professional move-out cleaning significantly increases your chances of getting your full security deposit back. Our thorough service meets most landlord expectations and lease requirements for cleanliness."
                }
              },
              {
                "@type": "Question",
                "name": "What does move-out cleaning include?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our move-out cleaning includes deep cleaning of all appliances, complete wall washing, bathroom sanitization, cabinet cleaning, window cleaning, floor deep cleaning, and all areas specified in typical lease agreements."
                }
              },
              {
                "@type": "Question",
                "name": "How long does move-out cleaning take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Move-out cleaning typically takes 5-8 hours depending on property size and condition. We focus on thorough cleaning to meet landlord inspection standards."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Box
        className="hero-section"
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/legacy/Clean-Oven.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          minHeight: { xs: 600, md: 700 },
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Chip 
            label="PROFESSIONAL MOVE-OUT CLEANING SERVICES" 
            sx={{ 
              mb: 3, 
              backgroundColor: theme.palette.primary.main, 
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem',
              px: 2,
              textShadow: 'none',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
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
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
              color: 'white'
            }}
          >
            Move-Out Cleaning Services Dayton
          </Typography>
          
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              fontWeight: 400,
              mb: 2,
              maxWidth: 800,
              mx: 'auto',
              opacity: 1,
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
              color: 'white'
            }}
          >
            Protect Your Security Deposit with Professional Cleaning
          </Typography>

          <Typography 
            variant="h3" 
            component="h3" 
            sx={{ 
              fontSize: { xs: '1.1rem', md: '1.4rem' },
              fontWeight: 500,
              mb: 4,
              maxWidth: 700,
              mx: 'auto',
              opacity: 1,
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
              color: 'white'
            }}
          >
            Thorough cleaning that meets landlord standards and lease requirements
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=move-out"
              sx={{
                fontSize: '1.1rem',
                px: 4,
                py: 1.5,
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                fontWeight: 600,
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  transform: 'translateY(-2px)',
				  color: 'white',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)'
                }
              }}
            >
              Get Move-Out Quote
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
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
				  color: 'white',
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)'
                }
              }}
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Table of Contents */}
      <TableOfContents 
        items={tableOfContentsItems} 
        collapsible={true}
        defaultExpanded={false}
        showItemCount={true}
      />

      {/* Introduction Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="security-deposit">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
            Protect Your Security Deposit with Professional Move-Out Cleaning
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', maxWidth: 900, mx: 'auto', lineHeight: 1.7 }}>
            Don't lose your security deposit to cleaning fees! Our <strong>move-out cleaning services in Dayton</strong> are 
            specifically designed to meet landlord expectations and lease requirements. From <strong>Kettering apartments</strong> to 
            <strong>Centerville rentals</strong> and <strong>Oakwood properties</strong>, we provide thorough cleaning that protects 
            your deposit and helps ensure smooth property transitions. Our experienced team understands what landlords and property 
            managers look for during final inspections, following 
            <a href="https://www.hud.gov/states/ohio/renting" target="_blank" rel="noopener noreferrer" style={{ color: '#D81B60', textDecoration: 'none' }}>
              Ohio tenant rights guidelines
            </a> to ensure fair treatment and proper cleaning standards.
          </Typography>
        </Box>

        {/* Key Benefits */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <SecurityIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Deposit Protection
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Professional cleaning standards that help protect your full security deposit from cleaning-related deductions
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <AttachMoneyIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Save Money
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Avoid costly cleaning fees from landlords and property managers throughout the Dayton area
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <BusinessIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Landlord Standards
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Meets or exceeds typical lease cleaning requirements and property management expectations
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Before/After Comparison Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="before-after">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            See How We Protect Your Security Deposit
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            These real before and after photos show the thorough cleaning that helps protect your security deposit. 
            See why Dayton tenants trust us to meet landlord inspection standards.
          </Typography>

          <Grid container spacing={4}>
            {beforeAfterComparisons.map((comparison, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[12]
                    }
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box sx={{ position: 'relative' }}>
                          <CardMedia
                            component="img"
                            height="300"
                            width="100%"
                            image={comparison.beforeImage}
                            alt={comparison.beforeAlt}
                            loading="lazy"
                            sx={{ objectFit: 'cover' }}
                          />
                          <Chip 
                            label="BEFORE"
                            sx={{
                              position: 'absolute',
                              top: 12,
                              left: 12,
                              backgroundColor: 'rgba(255, 87, 87, 0.9)',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.75rem'
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ position: 'relative' }}>
                          <CardMedia
                            component="img"
                            height="300"
                            width="100%"
                            image={comparison.afterImage}
                            alt={comparison.afterAlt}
                            loading="lazy"
                            sx={{ objectFit: 'cover' }}
                          />
                          <Chip 
                            label="AFTER"
                            sx={{
                              position: 'absolute',
                              top: 12,
                              right: 12,
                              backgroundColor: 'rgba(76, 175, 80, 0.9)',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.75rem'
                            }}
                          />
                        </Box>
                      </Grid>
                    </Grid>

                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: '50%',
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      <CompareArrowsIcon sx={{ color: 'white', fontSize: 24 }} />
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h3" sx={{ mb: 1, fontWeight: 700, color: theme.palette.primary.main }}>
                      {comparison.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {comparison.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Move-Out Features */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="whats-included">
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          What's Included in Move-Out Cleaning
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
          Our move-out cleaning services are designed to meet landlord inspection standards and help protect your 
          security deposit with thorough, professional cleaning of all areas.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {moveOutFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  transition: 'all 0.3s ease',
                  border: `1px solid rgba(216, 27, 96, 0.1)`,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                    borderColor: 'rgba(216, 27, 96, 0.3)'
                  }
                }}
              >
                <Box 
                  sx={{
                    width: 64,
                    height: 64,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    mb: 1
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Target Audience Sections */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="tenants-landlords">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Perfect for Tenants & Property Managers
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {/* Tenants Section */}
            <Grid item xs={12} md={6}>
              <Card sx={{ 
                p: 4, 
                height: '100%',
                background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
                border: `2px solid ${theme.palette.primary.main}20`,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8],
                  borderColor: theme.palette.primary.main
                }
              }}>
                <Typography variant="h4" sx={{ mb: 3, color: theme.palette.primary.main, fontWeight: 700 }}>
                  For Tenants Moving Out
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Protect your full security deposit" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Meet lease cleaning requirements" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Avoid costly cleaning fees" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Stress-free move-out process" />
                  </ListItem>
                </List>
              </Card>
            </Grid>

            {/* Property Managers Section */}
            <Grid item xs={12} md={6}>
              <Card sx={{ 
                p: 4, 
                height: '100%',
                background: 'linear-gradient(135deg, #f3e5f5 0%, #ffffff 100%)',
                border: `2px solid ${theme.palette.primary.main}20`,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8],
                  borderColor: theme.palette.primary.main
                }
              }}>
                <Typography variant="h4" sx={{ mb: 3, color: theme.palette.primary.main, fontWeight: 700 }}>
                  For Landlords & Property Managers
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Rent-ready unit preparation" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Minimize vacancy time" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Professional cleaning standards" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
                    </ListItemIcon>
                    <ListItemText primary="Reliable turnover service" />
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Included Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Complete Move-Out Cleaning Checklist
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto', fontSize: '1.1rem' }}>
          Every area receives professional attention to meet landlord inspection standards and lease requirements.
        </Typography>

        <Grid container spacing={2} sx={{ mb: 6 }}>
          {includedServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  border: `2px solid ${theme.palette.primary.main}20`,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[4]
                  }
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

      {/* Process & Timeline */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="cleaning-process">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Our Move-Out Cleaning Process
          </Typography>

          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
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
                      1
                    </Box>
                  </ListItemIcon>
                  <ListItemText 
                    primary="Schedule Before Final Inspection"
                    secondary="We clean after you move out but before the landlord's final walkthrough"
                    sx={{ ml: 2 }}
                  />
                </ListItem>
                
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
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
                      2
                    </Box>
                  </ListItemIcon>
                  <ListItemText 
                    primary="Thorough Landlord-Standard Clean"
                    secondary="Deep cleaning focused on areas landlords typically inspect most carefully"
                    sx={{ ml: 2 }}
                  />
                </ListItem>
                
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
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
                      3
                    </Box>
                  </ListItemIcon>
                  <ListItemText 
                    primary="Inspection Ready"
                    secondary="Property is ready for landlord inspection with professional cleaning documentation"
                    sx={{ ml: 2 }}
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, textAlign: 'center', background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)' }}>
                <ScheduleIcon sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.main }}>
                  5-8 Hours
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Typical move-out cleaning timeframe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Thorough cleaning focused on meeting landlord inspection standards and protecting your deposit.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Service Areas */}
      <div id="service-areas">
        <AreasWeServe />
      </div>

      {/* Related Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Related Moving Cleaning Services
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              component={Link}
              to="/move-in-out-cleaning"
              sx={{ 
                p: 4, 
                textAlign: 'center',
                textDecoration: 'none',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 3,
                boxShadow: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 8,
                  textDecoration: 'none'
                }
              }}
            >
              <CleaningServicesIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
                All Moving Cleaning Services
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Complete overview of our moving cleaning solutions for every situation
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card 
              component={Link}
              to="/move-in-cleaning"
              sx={{ 
                p: 4, 
                textAlign: 'center',
                textDecoration: 'none',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 3,
                boxShadow: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 8,
                  textDecoration: 'none'
                }
              }}
            >
              <HealthAndSafetyIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
                Move-In Cleaning
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fresh start cleaning and sanitization for your new home
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
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Ready to Protect Your Security Deposit?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Don't risk losing your deposit to cleaning fees. Our professional move-out cleaning services 
            in Dayton help ensure you get your full security deposit back.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=move-out"
              sx={{
                fontSize: '1.1rem',
                px: 4,
                py: 1.5,
                backgroundColor: '#1C1C1C !important',
                color: 'white !important',
                fontWeight: 600,
                border: '3px solid white !important',
                '&:hover': {
                  backgroundColor: '#000000 !important',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Get Free Move-Out Quote
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
                '&:hover': {
                  borderColor: 'white',
				  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderWidth: 2
                }
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

export default MoveOutCleaningPage
