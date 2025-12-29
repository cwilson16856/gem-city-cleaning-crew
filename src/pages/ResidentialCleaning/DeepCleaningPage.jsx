// Residential Deep Cleaning Page

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
  Paper,
  Chip,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  CardMedia
} from '@mui/material'
// Individual icon imports to reduce bundle size
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import KitchenIcon from '@mui/icons-material/Kitchen'
import BathroomIcon from '@mui/icons-material/Bathroom'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ScheduleIcon from '@mui/icons-material/Schedule'
import StarIcon from '@mui/icons-material/Star'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import AssignmentIcon from '@mui/icons-material/Assignment'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/ResidentialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'

const DeepCleaningPage = () => {
  const theme = useTheme()

  // Table of Contents items
  const tableOfContentsItems = [
    { text: "Why Choose Professional Deep Cleaning", href: "#why-choose" },
    { text: "Before & After Results", href: "#before-after" },
    { text: "What's Included in Deep Cleaning", href: "#whats-included" },
    { text: "Free Add-On Services", href: "#add-ons" },
    { text: "Our Deep Cleaning Process", href: "#cleaning-process" },
    { text: "Areas We Serve", href: "#service-areas" },
    { text: "Get Your Free Quote", href: "#get-quote" }
  ]

  // Before/After comparison data
  const beforeAfterComparisons = [
    {
      title: "Oven Deep Cleaning",
      description: "Complete interior and exterior oven cleaning with grease removal and sanitization",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Dirty-Oven-e1749136044376.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Clean-Oven-e1749135938970.webp",
      beforeAlt: "Dirty oven interior showing grease buildup and food residue before Dayton deep cleaning services",
      afterAlt: "Spotless clean oven interior after professional Dayton deep cleaning services showing pristine condition"
    },
    {
      title: "Toilet Deep Sanitization",
      description: "Thorough toilet cleaning including behind-the-toilet areas and complete sanitization",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/dirty-toilet-e1749136119717.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/clean-toilet-e1749135967505.webp",
      beforeAlt: "Dirty toilet showing stains and buildup before professional Dayton deep cleaning services",
      afterAlt: "Spotless toilet after Dayton deep cleaning services showing complete sanitization and shine"
    },
    {
      title: "Floor Deep Cleaning",
      description: "Intensive floor cleaning including corners, baseboards, and hard-to-reach areas",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Dirty-Floor-e1749135981660.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Clean-Floor-e1749136533513.webp",
      beforeAlt: "Dirty laundry room floor with stains and buildup before deep cleaning service",
      afterAlt: "Clean laundry room floor after deep cleaning showing restored original condition"
    },
    {
      title: "Wall & Behind Furniture Cleaning",
      description: "Moving furniture to clean walls, baseboards, and areas typically missed in regular cleaning",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Dirty-Wall-e1749136136991.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Clean-Wall-e1749136061202.webp",
      beforeAlt: "Dirty wall behind furniture showing dust and grime accumulation before deep cleaning",
      afterAlt: "Clean wall behind furniture after deep cleaning service showing complete dust removal"
    }
  ]

  // Deep cleaning features
  const deepCleaningFeatures = [
    {
      title: "Inside Appliances",
      description: "Complete cleaning of oven, refrigerator, microwave, and dishwasher interiors",
      icon: <KitchenIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Behind & Under Furniture",
      description: "Moving furniture to clean areas typically missed in regular cleaning services",
      icon: <AutoAwesomeIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Detailed Bathroom Work",
      description: "Deep scrubbing, descaling, and sanitization of all bathroom fixtures and surfaces",
      icon: <BathroomIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Baseboards & Trim",
      description: "Hand-wiping all baseboards, door frames, and trim throughout your home",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Ceiling Fans & Fixtures",
      description: "Thorough cleaning of ceiling fans, light fixtures, and overhead surfaces",
      icon: <AutoAwesomeIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Window Sills & Frames",
      description: "Detailed cleaning of window sills, frames, and glass surfaces throughout your home",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />
    }
  ]

  // Included add-on services (free with deep cleaning)
  const includedAddOns = [
    "Inside oven cleaning",
    "Inside refrigerator cleaning", 
    "Window sill & frame cleaning",
    "Baseboards detailed cleaning",
    "Window washing (interior)",
    "Ceiling fan blade cleaning",
    "Light fixture deep cleaning",
    "Behind furniture cleaning",
    "Appliance interior cleaning",
    "Detailed trim work"
  ]

  return (
    <>
      <Helmet>
        <title>Dayton Deep Cleaning Services | Transform Your Home in Just 1 Day</title>
        <meta name="description" content="Professional deep cleaning services in Dayton, OH. Complete deep house cleaning including appliances, baseboards, and areas missed in regular cleaning. See dramatic before/after results!" />
        <meta name="keywords" content="deep cleaning services, Dayton deep cleaning, deep house cleaning, professional deep cleaning, appliance cleaning, detailed cleaning service" />
        
        {/* Preload hero background image for better LCP */}
        <link rel="preload" as="image" href="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Clean-Oven.webp" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/deep-cleaning" />
        <meta property="og:title" content="Dayton Deep Cleaning Services | Transform Your Home in Just 1 Day" />
        <meta property="og:description" content="Complete deep house cleaning services in Dayton. See dramatic before/after results from our professional deep cleaning team." />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dayton Deep Cleaning Services | Transform Your Home in Just 1 Day" />
        <meta name="twitter:description" content="Complete deep house cleaning services in Dayton. See dramatic before/after results." />
        <meta name="twitter:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp" />
        
        <link rel="canonical" href="https://gemcitycleaningcrew.com/deep-cleaning" />
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Deep Cleaning Services",
            "description": "Professional deep house cleaning services in Dayton, OH including appliance cleaning, baseboards, and detailed sanitization",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gem City Cleaning Crew",
              "telephone": "937-892-4157",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "278 Mertland Ave",
                "addressLocality": "Dayton",
                "addressRegion": "OH",
                "postalCode": "45431"
              }
            },
            "areaServed": "Dayton, OH and surrounding areas",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Deep Cleaning Services",
              "itemListElement": deepCleaningFeatures.map((feature, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": feature.title,
                  "description": feature.description
                }
              }))
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
                "name": "What is included in deep cleaning services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our deep cleaning services include cleaning inside appliances, behind furniture, detailed bathroom work, baseboards, ceiling fans, and window sills & frames. Additional add-on services are available at no extra charge when requested during the estimate process."
                }
              },
              {
                "@type": "Question",
                "name": "How long does deep cleaning take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Deep cleaning typically takes 4-8 hours depending on home size and condition. Our team works thoroughly to ensure every area receives proper attention."
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
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Clean-Oven.webp')`,
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
            label="PROFESSIONAL DEEP CLEANING SERVICES" 
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
            Deep Cleaning Services Dayton
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
            Complete Deep House Cleaning with Dramatic Results
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
            Add-on services available at no extra charge when requested!
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=deep-cleaning"
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
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)'
                }
              }}
            >
              Get Deep Cleaning Quote
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
      <Container maxWidth="lg" sx={{ py: 8 }} id="why-choose">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
            Why Choose Professional Deep Cleaning Services?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', maxWidth: 900, mx: 'auto', lineHeight: 1.7 }}>
            Our deep cleaning services go far beyond regular cleaning. We tackle the areas that accumulate grime over time - 
            inside appliances, behind furniture, detailed bathroom work, and all those hard-to-reach places. See the dramatic 
            difference our professional deep cleaning team can make in your Dayton home.
          </Typography>
        </Box>

        {/* Key Benefits */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <AutoAwesomeIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Complete Deep Clean
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Every surface, appliance interior, and hidden area receives professional attention
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <LocalOfferIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Add-Ons Available FREE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Request any add-on services at no extra charge during deep cleaning - just ask during your estimate
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <StarIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Dramatic Results
              </Typography>
              <Typography variant="body2" color="text.secondary">
                See the amazing transformation from our thorough deep cleaning process
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Before/After Comparison Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="before-after">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            See the Deep Cleaning Difference
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            These real before and after photos show the dramatic results our deep cleaning services achieve. 
            From grimy ovens to sparkling fixtures - see why Dayton homeowners trust us for their deep cleaning needs.
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
                    {/* Before/After Images */}
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
                            style={{
                              aspectRatio: '1/1.5'
                            }}
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
                            style={{
                              aspectRatio: '1/1.5'
                            }}
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

                    {/* Comparison Arrow */}
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
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                        cursor: 'pointer'
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Compare before and after images for ${comparison.title}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          // Could trigger image comparison view
                        }
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

      {/* Deep Cleaning Features */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="whats-included">
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          What's Included in Deep Cleaning Services
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
          Our deep cleaning services include everything from our standard house cleaning checklist PLUS these additional 
          intensive cleaning tasks that make your home sparkle like new.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {deepCleaningFeatures.map((feature, index) => (
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

        {/* Call-to-Action for Checklist */}
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
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: theme.shadows[8]
              }
            }}
          >
            <Typography variant="h3" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}>
              See Our Complete Cleaning Process
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#525252', fontSize: '1.1rem' }}>
              Want to see the detailed checklist our deep cleaning team follows? View our comprehensive 
              room-by-room guide that ensures nothing gets missed during your service.
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/residential-house-cleaning-checklist"
              sx={{
                fontSize: '1.1rem',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  transform: 'translateY(-2px)'
                }
              }}
            >
              View Our Complete Cleaning Checklist
            </Button>
          </Card>
        </Box>
      </Container>

      {/* Included Add-On Services */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="add-ons">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            Add-On Services Available at No Extra Charge
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto', fontSize: '1.1rem' }}>
            During deep cleaning services, these specialized add-on services are available at no additional charge when requested. 
            Simply let us know which of these services you'd like during your estimate, and we'll include them in your deep cleaning 
            at no extra cost. Please note that these services require additional time and may impact the time available for other cleaning tasks.
          </Typography>

          <Grid container spacing={2} sx={{ mb: 6 }}>
            {includedAddOns.map((service, index) => (
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
                  <Chip 
                    label="NO EXTRA CHARGE"
                    size="small"
                    sx={{
                      mt: 1,
                      backgroundColor: 'rgba(76, 175, 80, 0.1)',
                      color: 'green',
                      fontWeight: 600,
                      fontSize: '0.7rem'
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontStyle: 'italic' }}>
              *These services are available at no extra charge during deep cleaning when requested. 
              During recurring cleaning services, these would be additional fees. 
              Please discuss your preferences during the estimate process.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Process & Timeline */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="cleaning-process">
        <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
          Our Deep Cleaning Process
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
                  primary="Initial Assessment"
                  secondary="We evaluate your home and discuss specific areas needing attention"
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
                  primary="Room-by-Room Deep Clean"
                  secondary="Following our comprehensive checklist plus intensive deep cleaning tasks"
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
                  primary="Quality Inspection"
                  secondary="Final walkthrough to ensure every area meets our high standards"
                  sx={{ ml: 2 }}
                />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, textAlign: 'center', background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)' }}>
              <ScheduleIcon sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.main }}>
                4-8 Hours
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Typical deep cleaning timeframe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Time varies based on home size and condition. We take the time needed to do the job right.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Service Areas */}
      <div id="service-areas">
        <AreasWeServe />
      </div>

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
            Ready for a Deep Cleaning Transformation?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            See the dramatic difference our professional deep cleaning services can make in your Dayton home. 
            Add-on services available at no extra charge when requested!
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=deep-cleaning"
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
              Get Free Deep Cleaning Quote
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

export default DeepCleaningPage 