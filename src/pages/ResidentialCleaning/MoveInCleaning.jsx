// Move-In Cleaning Page

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
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import NewReleasesIcon from '@mui/icons-material/NewReleases'
import WindowIcon from '@mui/icons-material/Window'
import FloorIcon from '@mui/icons-material/Layers'
import MovingIcon from '@mui/icons-material/Moving'
import SecurityIcon from '@mui/icons-material/Security'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/ResidentialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'

const MoveInCleaningPage = () => {
  const theme = useTheme()

  // Before/After comparison data with new images
  const beforeAfterComparisons = [
    {
      title: "Kitchen Deep Sanitization",
      description: "Complete kitchen sanitization including appliance interiors and cabinet cleaning",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Dirty-Oven-e1749136044376.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Clean-Oven-e1749135938970.webp",
      beforeAlt: "Dirty kitchen before professional move-in cleaning services Dayton showing grease buildup",
      afterAlt: "Spotless clean kitchen after move-in cleaning Dayton service ready for new homeowners"
    },
    {
      title: "Bathroom Complete Sanitization",
      description: "Thorough bathroom cleaning and sanitization for health and safety",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/dirty-toilet-e1749136119717.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/clean-toilet-e1749135967505.webp",
      beforeAlt: "Dirty bathroom before move-in cleaning showing stains and buildup",
      afterAlt: "Sanitized bathroom after professional move-in cleaning service ready for family use"
    },
    {
      title: "Refrigerator Fresh Start",
      description: "Complete refrigerator sanitization for food safety in your new home",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/IMG-20240803-WA0010.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/IMG-20240803-WA0028.webp",
      beforeAlt: "Dirty refrigerator interior before move-in cleaning service",
      afterAlt: "Clean sanitized refrigerator after move-in cleaning ready for groceries"
    },
    {
      title: "Ceiling Fan & Fixtures",
      description: "Clean air circulation from day one with professionally cleaned fixtures",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/dirty-ceiling-fan-e1749136101325.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/clean-ceiling-fan-e1749136008916.webp",
      beforeAlt: "Dusty ceiling fan before move-in cleaning",
      afterAlt: "Clean ceiling fan after move-in cleaning providing fresh air circulation"
    }
  ]

  // Move-In specific cleaning features
  const moveInFeatures = [
    {
      title: "Fresh Start Sanitization",
      description: "Complete sanitization of all surfaces for health and safety of your family",
      icon: <HealthAndSafetyIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Empty Home Deep Clean",
      description: "Thorough cleaning with complete access to all areas before you unpack",
      icon: <HomeIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Kitchen Food Safety Prep",
      description: "Deep cleaning and sanitization of all kitchen surfaces and appliances",
      icon: <KitchenIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Family-Ready Bathrooms",
      description: "Complete bathroom sanitization for immediate family use",
      icon: <FamilyRestroomIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Wall & Surface Washing",
      description: "Clean walls and surfaces throughout for a truly fresh environment",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Move-In Day Ready",
      description: "Home is completely clean and ready for immediate occupancy",
      icon: <NewReleasesIcon sx={{ fontSize: 32, color: 'white' }} />
    }
  ]

  // Included services for move-in cleaning
  const includedServices = [
    "Complete sanitization of all surfaces",
    "Kitchen appliance deep cleaning", 
    "Bathroom complete disinfection",
    "All cabinet & drawer interiors",
    "Window sills & frames cleaning",
    "Floor deep cleaning & sanitization",
    "Light fixture & ceiling fan cleaning",
    "Baseboards & trim detail work",
    "Switch plates & outlet sanitization",
    "Closet interior cleaning"
  ]

  // Table of Contents items
  const tableOfContentsItems = [
    { text: "Why Choose Move-In Cleaning", href: "#why-choose" },
    { text: "Before & After Results", href: "#before-after" },
    { text: "What's Included", href: "#whats-included" },
    { text: "Health & Safety Benefits", href: "#health-safety" },
    { text: "Our Cleaning Process", href: "#cleaning-process" },
    { text: "Areas We Serve", href: "#service-areas" },
    { text: "Get Your Free Quote", href: "#get-quote" }
  ]

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags - Enhanced */}
        <title>#1 Move-In Cleaning Services Dayton OH | Professional New Home Cleaners | Gem City Cleaning</title>
        <meta name="title" content="#1 Move-In Cleaning Services Dayton OH | Professional New Home Cleaners | Gem City Cleaning" />
        <meta name="description" content="⭐ #1 Professional move-in cleaning services in Dayton, OH. Deep sanitization for new homes & apartments. Fresh start cleaning for families moving to Dayton. Same-day quotes available." />
        <meta name="keywords" content="move in cleaning Dayton, new home cleaning Dayton OH, apartment move in cleaning, house sanitization, fresh start cleaning, new homeowner cleaning, move in ready cleaning, Kettering move in cleaning, Centerville new home cleaning, Oakwood move in service" />
        
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
        <meta property="og:url" content="https://gemcitycleaningcrew.com/move-in-cleaning" />
        <meta property="og:title" content="#1 Professional Move-In Cleaning Services Dayton OH | Fresh Start Cleaning" />
        <meta property="og:description" content="⭐ #1 Professional move-in cleaning services in Dayton, OH. Deep sanitization for new homes & apartments. Fresh start cleaning for families moving to Dayton." />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp" />
        <meta property="og:image:alt" content="Professional move-in cleaning services in Dayton OH" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GemCityCleaning" />
        <meta name="twitter:creator" content="@GemCityCleaning" />
        <meta name="twitter:title" content="#1 Professional Move-In Cleaning Services Dayton OH" />
        <meta name="twitter:description" content="⭐ #1 Professional move-in cleaning services in Dayton, OH. Fresh start cleaning for families moving to Dayton." />
        <meta name="twitter:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://gemcitycleaningcrew.com/move-in-cleaning" />
        
        {/* Enhanced Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://gemcitycleaningcrew.com/move-in-cleaning#service",
            "name": "Move-In Cleaning Services",
            "alternateName": ["New Home Cleaning", "Fresh Start Cleaning", "Move In House Cleaning", "New Apartment Cleaning"],
            "description": "Professional move-in cleaning services in Dayton, OH including deep sanitization for new homes and apartments, perfect for families starting fresh",
            "serviceType": "Move-In Cleaning",
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
                "name": "What is included in move-in cleaning services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our move-in cleaning services include complete sanitization of all surfaces, kitchen appliance deep cleaning, bathroom disinfection, cabinet interiors, window cleaning, floor sanitization, and light fixture cleaning for a fresh start in your new home."
                }
              },
              {
                "@type": "Question",
                "name": "How long does move-in cleaning take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Move-in cleaning typically takes 4-6 hours depending on home size. Empty homes allow for thorough cleaning of all areas including walls and spaces normally blocked by furniture."
                }
              },
              {
                "@type": "Question",
                "name": "Is move-in cleaning safe for families with children?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we use family-safe, EPA-approved cleaning products and follow CDC sanitization guidelines to ensure your new home is safe for immediate family occupancy."
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
            label="PROFESSIONAL MOVE-IN CLEANING SERVICES" 
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
            Move-In Cleaning Services Dayton
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
            Fresh Start Cleaning for Your New Home
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
            Complete sanitization and deep cleaning before you unpack - perfect for families
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=move-in"
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
              Get Move-In Quote
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
      <Container maxWidth="lg" sx={{ py: 8 }} id="why-choose">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
            Why Choose Professional Move-In Cleaning in Dayton?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', maxWidth: 900, mx: 'auto', lineHeight: 1.7 }}>
            Moving into a new home should be exciting, not stressful. Our <strong>move-in cleaning services in Dayton</strong> ensure 
            your new home is completely sanitized and spotless before you unpack. From <strong>Kettering apartments</strong> to 
            <strong>Centerville houses</strong> and <strong>Oakwood condos</strong>, we provide comprehensive cleaning that creates 
            a fresh, healthy environment for your family. Our professional cleaning team follows 
            <a href="https://www.cdc.gov/infectioncontrol/guidelines/environmental/cleaning.html" target="_blank" rel="noopener noreferrer" style={{ color: '#D81B60', textDecoration: 'none' }}>
              CDC-recommended sanitization standards
            </a> to ensure your new home is safe and clean from day one.
          </Typography>
        </Box>

        {/* Key Benefits */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <HealthAndSafetyIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Health & Safety First
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Complete sanitization of all surfaces ensures your new Dayton home is safe and healthy for your family from day one
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <NewReleasesIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Fresh Start Guarantee
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Begin your new chapter with a completely clean slate - every surface sanitized and ready for your family
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <FamilyRestroomIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Family-Ready Homes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Safe, clean environment perfect for children and families moving to the greater Dayton area
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Before/After Comparison Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="before-after">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            See the Move-In Cleaning Transformation
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            These real before and after photos show how our move-in cleaning services transform your new home into 
            a fresh, sanitized space ready for your family. See why Dayton families trust us for their new home cleaning.
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

      {/* Move-In Features */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="whats-included">
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          What's Included in Move-In Cleaning
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
          Our move-in cleaning services prepare your new home for immediate occupancy with complete sanitization 
          and deep cleaning of all areas. Start fresh with professional cleaning designed for families.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {moveInFeatures.map((feature, index) => (
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

      {/* Health & Safety Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="health-safety">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Health & Safety Benefits for Your Family
          </Typography>

          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 3, color: theme.palette.primary.main, fontWeight: 700 }}>
                Safe for Children & Pets
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Our move-in cleaning services use family-safe, EPA-approved cleaning products that effectively 
                sanitize without harmful chemicals. Your new Dayton home will be immediately safe for children and pets.
              </Typography>
              
              <Typography variant="h3" sx={{ mb: 3, color: theme.palette.primary.main, fontWeight: 700 }}>
                Complete Sanitization
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                We follow CDC guidelines for proper sanitization, ensuring all surfaces are disinfected and safe. 
                This is especially important in bathrooms, kitchens, and areas where your family will spend the most time.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, textAlign: 'center', background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)' }}>
                <HealthAndSafetyIcon sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.main }}>
                  Family-Safe Products
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  EPA-approved cleaning solutions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Safe for immediate family occupancy with no harmful chemical residues or strong odors.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Included Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Complete Move-In Cleaning Checklist
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto', fontSize: '1.1rem' }}>
          Every surface and area in your new home receives professional attention for a truly fresh start.
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
            Our Move-In Cleaning Process
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
                    primary="Schedule Before Move-In Day"
                    secondary="We clean your new home before you arrive, so it's ready for immediate occupancy"
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
                    primary="Complete Sanitization"
                    secondary="Deep cleaning and sanitization of all surfaces, fixtures, and appliances"
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
                    primary="Fresh Start Ready"
                    secondary="Final inspection ensures your new home is spotless and ready for your family"
                    sx={{ ml: 2 }}
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, textAlign: 'center', background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)' }}>
                <ScheduleIcon sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.main }}>
                  4-6 Hours
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Typical move-in cleaning timeframe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your new home will be completely clean and sanitized, ready for immediate family occupancy.
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
              to="/move-out-cleaning"
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
              <AttachMoneyIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
                Move-Out Cleaning
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Security deposit protection and landlord-ready cleaning services
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
            Ready for a Fresh Start in Your New Home?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Let us prepare your new Dayton home with professional move-in cleaning services. 
            Complete sanitization and deep cleaning so you can focus on settling in with your family.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=move-in"
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
              Get Free Move-In Quote
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

export default MoveInCleaningPage
