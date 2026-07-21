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
  Box,
  Paper,
  Chip,
  useTheme,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import BathroomIcon from '@mui/icons-material/Bathroom'
import PersonIcon from '@mui/icons-material/Person'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import SpeedIcon from '@mui/icons-material/Speed'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import ShowerIcon from '@mui/icons-material/Shower'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/ResidentialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'

const BathroomCleaningServices = () => {
  const theme = useTheme()

  // Table of Contents items
  const tocItems = [
    { text: '🚿 Bathroom Cleaning Services We Offer', href: '#bathroom-cleaning-services' },
    { text: '🔧 How Our Bathroom Cleaning Process Works', href: '#how-it-works' },
    { text: '⭐ Why Choose Gem City for Bathroom Cleaning', href: '#why-choose-us' },
    { text: '💬 Success Stories from Bathroom Customers', href: '#customer-testimonials' },
    { text: '📍 Service Areas & Coverage', href: '#service-areas' },
    { text: '❓ Bathroom Cleaning FAQ', href: '#bathroom-faq' }
  ]

  // Bathroom cleaning process steps
  const bathroomProcessSteps = [
    {
      title: "Bathroom Assessment",
      description: "We'll evaluate your bathroom's specific cleaning needs, including fixtures, surfaces, mold/mildew issues, and your preferred sanitization level.",
      details: ["Fixture condition check", "Mold & mildew assessment", "Custom cleaning plan", "Transparent pricing"]
    },
    {
      title: "Deep Bathroom Sanitization", 
      description: "Our trained team performs comprehensive bathroom cleaning using specialized products for tiles, grout, fixtures, and complete sanitization.",
      details: ["All fixtures deep cleaned", "Grout & tile restoration", "Mold & mildew removal", "Professional sanitization"]
    },
    {
      title: "Final Bathroom Inspection",
      description: "We conduct a thorough walkthrough to ensure every surface sparkles and your bathroom is sanitized and guest-ready.",
      details: ["Complete cleanliness check", "Fixture functionality review", "Sanitization guarantee", "Touch-ups if needed"]
    }
  ]

  // Bathroom cleaning benefits
  const bathroomBenefits = [
    {
      title: "Superior Sanitization & Hygiene",
      description: "Professional bathroom cleaning in Dayton eliminates harmful bacteria, viruses, and germs that thrive in moist environments, ensuring your family's health and safety.",
      icon: <LocalHospitalIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Complete sanitization for family health protection"
    },
    {
      title: "Mold & Mildew Prevention",
      description: "Our bathroom cleaning service in Dayton specializes in removing and preventing mold and mildew buildup that can cause health issues and damage surfaces.",
      icon: <WaterDropIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Professional mold prevention and removal expertise"
    },
    {
      title: "Grout & Tile Restoration",
      description: "Deep cleaning and restoration of grout lines and tile surfaces, removing stains, soap scum, and buildup to restore your bathroom's original beauty.",
      icon: <CleaningServicesIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Professional grout cleaning and tile restoration"
    },
    {
      title: "Time-Saving Deep Clean",
      description: "Skip the hours of scrubbing tough bathroom stains and let our professional team handle the intensive work with commercial-grade equipment.",
      icon: <SpeedIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Professional efficiency saves you valuable time"
    },
    {
      title: "Guest & Event Preparation",
      description: "Get your bathrooms guest-ready for holidays, parties, and special occasions with our comprehensive bathroom cleaning service in Dayton.",
      icon: <PersonIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Perfect bathrooms for entertaining and special events"
    },
    {
      title: "Specialized Bathroom Expertise",
      description: "Our team understands bathroom-specific challenges and uses specialized products designed for wet environments and tough bathroom cleaning tasks.",
      icon: <BathroomIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Specialized products and bathroom cleaning expertise"
    }
  ]

  // Bathroom service types
  const bathroomServices = [
    {
      title: "Deep Bathroom Cleaning",
      description: "Comprehensive bathroom cleaning including all fixtures, grout, tiles, and complete sanitization",
      features: ["All fixtures deep cleaned", "Grout & tile restoration", "Mold & mildew removal", "Complete sanitization"],
      popular: true,
      savings: "Most Popular"
    },
    {
      title: "Shower & Tub Focus", 
      description: "Specialized cleaning service for shower enclosures, bathtubs, and surrounding surfaces",
      features: ["Shower door & enclosure cleaning", "Bathtub deep scrubbing", "Tile & grout restoration", "Fixture polishing"],
      popular: false,
      savings: "Targeted Service"
    },
    {
      title: "Pre-Event Bathroom Prep",
      description: "Get your bathrooms sparkling clean for holidays, parties, and special occasions",
      features: ["Guest-ready presentation", "Complete sanitization", "Fixture showcase cleaning", "Perfect for entertaining"],
      popular: false,
      savings: "Event Ready"
    }
  ]

  // Customer testimonials for bathroom cleaning
  const bathroomTestimonials = [
    {
      name: "Marcia Florkey",
      text: "Very pleased with the deep cleaning of our home, very thorough and attentive to detail, bathrooms and kitchen were especially well done.",
      rating: 5,
      highlight: "Bathroom & Deep Clean",
      service: "Bathroom deep cleaning"
    },
    {
      name: "Kate Emmerich", 
      text: "Great communication and scheduling! I got a 4 hour deep cleaning and the ladies did a fantastic job. My oven and refrigerator have never looked better! All my bathrooms are spotless. The cleaners were very kind and professional and I was extremely impressed!",
      rating: 5,
      highlight: "All Bathrooms Spotless", 
      service: "Bathroom deep cleaning"
    }
  ]

  // FAQ for bathroom cleaning
  const bathroomFAQ = [
    {
      question: "What's included in professional bathroom cleaning service?",
      answer: "Our bathroom cleaning service in Dayton includes deep cleaning of all fixtures (toilet, sink, bathtub/shower), tile and grout cleaning, mirror cleaning, floor scrubbing, complete sanitization, mold and mildew removal, and fixture polishing for a sparkling finish."
    },
    {
      question: "How often should I have my bathrooms professionally cleaned?",
      answer: "Most Dayton homeowners benefit from professional bathroom cleaning monthly or bi-monthly, depending on usage. High-traffic bathrooms may need more frequent service, while guest bathrooms might only need quarterly deep cleaning."
    },
    {
      question: "Can you remove mold and mildew from my bathroom?",
      answer: "Yes! Our bathroom cleaning service specializes in mold and mildew removal using professional-grade products. We also provide treatments to help prevent future mold growth in your Dayton bathroom."
    },
    {
      question: "Do you clean shower doors and grout?",
      answer: "Absolutely! We provide thorough cleaning of shower doors, shower enclosures, tile grout, and all bathroom surfaces. Our team uses specialized products to remove soap scum, hard water stains, and restore grout to its original color."
    },
    {
      question: "Are your bathroom cleaning products safe for septic systems?",
      answer: "Yes, we use environmentally-friendly, septic-safe cleaning products that are effective for bathroom cleaning while being safe for your plumbing and septic systems."
    },
    {
      question: "How much does professional bathroom cleaning cost in Dayton?",
      answer: "Bathroom cleaning costs vary based on size, condition, and services needed. Deep bathroom cleaning typically ranges from $75-150 per bathroom depending on the scope. We provide free estimates with transparent pricing."
    },
    {
      question: "Can you help prepare bathrooms for special events?",
      answer: "Definitely! Our pre-event bathroom cleaning is perfect for holidays, dinner parties, and special occasions. We ensure your bathrooms are spotless, sanitized, and guest-ready for any gathering."
    },
    {
      question: "Do you offer one-time bathroom cleaning or recurring service?",
      answer: "We offer both! Many customers start with a deep bathroom cleaning and then schedule monthly or bi-monthly maintenance. Others prefer one-time service for special occasions or seasonal deep cleaning."
    },
    {
      question: "How long does professional bathroom cleaning take?",
      answer: "Bathroom cleaning typically takes 45 minutes to 2 hours per bathroom depending on size and condition. Deep cleaning with grout restoration may take longer, while maintenance cleaning of clean bathrooms is faster."
    },
    {
      question: "Will bathroom cleaning help with odors?",
      answer: "Yes! Professional bathroom cleaning eliminates odors by removing bacteria, mold, and mildew that cause persistent smells. We also clean areas where odors often linger like behind toilets and in grout lines."
    }
  ]

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Bathroom Cleaning Services Dayton OH – Deep Clean, Sanitization, Mold Removal | Gem City Cleaning</title>
        <meta name="title" content="Bathroom Cleaning Services Dayton OH – Deep Clean, Sanitization, Mold Removal" />
        <meta name="description" content="⭐ #1 Bathroom Cleaning Service in Dayton, OH. Deep cleaning, sanitization, mold removal, grout restoration. Professional results for healthier bathrooms. FREE quotes! Call 937-892-4157" />
        <meta name="keywords" content="bathroom cleaning Dayton, professional bathroom cleaning, sanitization Dayton OH, bathroom deep cleaning, mold removal service, grout cleaning, bathroom hygiene, tile cleaning Dayton, shower cleaning, Kettering bathroom cleaning, Centerville bathroom cleaning, Oakwood bathroom cleaning, bathroom cleaning near me, residential bathroom cleaning, maid service bathroom cleaning" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="US-OH" />
        <meta name="geo.placename" content="Dayton, Ohio" />
        <meta name="author" content="Gem City Cleaning Crew" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gem City Cleaning Crew" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/bathroom-cleaning-services" />
        <meta property="og:title" content="Bathroom Cleaning Services Dayton OH – Deep Clean, Sanitization, Mold Removal" />
        <meta property="og:description" content="⭐ #1 Bathroom Cleaning in Dayton. Deep cleaning, sanitization, mold removal, grout restoration. Professional results for healthier bathrooms. FREE quotes!" />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/bathroom-sink.jpg" />
        <meta property="og:image:alt" content="Professional bathroom cleaning service results showing spotless bathroom sink and fixtures in Dayton OH" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://gemcitycleaningcrew.com/bathroom-cleaning-services#service",
            "name": "Bathroom Cleaning Service",
            "alternateName": ["Professional Bathroom Cleaning", "Bathroom Sanitization", "Bathroom Deep Cleaning", "Mold Removal Service"],
            "description": "Professional bathroom cleaning service in Dayton, Ohio specializing in deep cleaning, sanitization, mold removal, and grout restoration",
            "serviceType": "Bathroom Cleaning Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gem City Cleaning Crew",
              "telephone": "+1-937-892-4157",
              "url": "https://gemcitycleaningcrew.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dayton",
                "addressRegion": "OH",
                "addressCountry": "US"
              }
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Deep Bathroom Cleaning",
                "description": "Comprehensive bathroom cleaning including all fixtures and sanitization",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "Bathroom Sanitization",
                "description": "Specialized sanitization service for bathroom hygiene",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Box
        className="hero-section"
        sx={{
          background: `linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)), url('https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/bathroom-sink.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          minHeight: { xs: 600, md: 700 }
        }}
      >
        <Container maxWidth="lg" className="hero-content">
          <Chip 
            label="DEEP CLEAN • SANITIZATION • MOLD REMOVAL" 
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
            sx={{ 
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.1
            }}
          >
            Professional Bathroom Cleaning Services Dayton
          </Typography>
          
          <Typography 
            variant="h4" 
            className="hero-subtitle"
            sx={{ 
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              fontWeight: 400,
              mb: 2,
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            Deep Cleaning • Sanitization • Healthier Bathrooms
          </Typography>

          <Typography 
            variant="h5" 
            sx={{ 
              fontSize: { xs: '1.1rem', md: '1.4rem' },
              fontWeight: 500,
              mb: 4,
              maxWidth: 700,
              mx: 'auto'
            }}
          >
            Professional Results • Mold Prevention • Complete Sanitization
          </Typography>

          {/* Trust indicator */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: 2, 
              mb: 4,
              minHeight: 40
            }}
          >
            <Rating 
              value={4.5} 
              precision={0.5} 
              readOnly 
              size="large" 
              sx={{ 
                color: '#FFD700',
                '& .MuiRating-icon': {
                  fontSize: '2rem'
                }
              }} 
            />
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#FFD700', 
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                minWidth: 200
              }}
            >
              4.5/5 stars • 85+ reviews
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=bathroom-cleaning"
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
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Get Free Bathroom Cleaning Quote
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
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Call 937-892-4157
            </Button>
          </Box>

          {/* Key differentiators */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: { xs: 2, md: 4 }, 
            flexWrap: 'wrap',
            opacity: 0.9 
          }}>
            {['Sanitization Experts', 'Mold Prevention', 'Grout Restoration', 'Health Focused'].map((item) => (
              <Chip 
                key={item}
                label={item} 
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)'
                  }
                }} 
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Table of Contents */}
      <TableOfContents 
        items={tocItems} 
        collapsible={true}
        defaultExpanded={false}
        showItemCount={true}
        title="What's Covered in Our Bathroom Cleaning Guide"
      />

      {/* How It Works Process */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="how-it-works">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            How Our Bathroom Cleaning Service Works in Dayton, OH
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
            Our bathroom cleaning process focuses on health, hygiene, and thorough sanitization 
            to create safe, spotless bathrooms for your family.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {bathroomProcessSteps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  textAlign: 'center',
                  p: 4,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  border: `2px solid ${theme.palette.primary.main}15`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[12],
                    borderColor: theme.palette.primary.main
                  }
                }}
              >
                <Box 
                  sx={{
                    width: 80,
                    height: 80,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    boxShadow: '0 4px 16px rgba(216, 27, 96, 0.3)'
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 700,
                      fontSize: '2.5rem'
                    }}
                  >
                    {index + 1}
                  </Typography>
                </Box>
                
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: theme.palette.primary.main }}>
                  {step.title}
                </Typography>
                
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#525252' }}>
                  {step.description}
                </Typography>

                <Box sx={{ textAlign: 'left' }}>
                  {step.details.map((detail, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <CheckCircleIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {detail}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Bathroom Service Types */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="bathroom-cleaning-services">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              Professional Bathroom Cleaning Services in Dayton, OH
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              From deep sanitization to specialized cleaning, our bathroom cleaning services 
              create healthier, spotless bathrooms for Dayton families.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {bathroomServices.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    position: 'relative',
                    overflow: 'visible',
                    transition: 'all 0.3s ease',
                    border: service.popular ? `3px solid ${theme.palette.primary.main}` : `1px solid ${theme.palette.primary.main}20`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[12]
                    }
                  }}
                >
                  {service.savings && (
                    <Chip 
                      label={service.savings}
                      sx={{
                        position: 'absolute',
                        top: -12,
                        right: 16,
                        zIndex: 10,
                        backgroundColor: service.popular ? theme.palette.primary.main : '#4CAF50',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        height: 28
                      }}
                    />
                  )}
                  
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ mb: 1, fontWeight: 700, color: theme.palette.primary.main }}>
                      {service.title}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ mb: 3, color: '#525252' }}>
                      {service.description}
                    </Typography>
                    
                    <Box sx={{ textAlign: 'left', mb: 3 }}>
                      {service.features.map((feature, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <CheckCircleIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    
                    <Button
                      variant={service.popular ? "contained" : "outlined"}
                      fullWidth
                      component={Link}
                      to={`/quote?service=bathroom-cleaning&type=${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      sx={{
                        py: 1.5,
                        fontWeight: 600,
                        ...(service.popular ? {
                          backgroundColor: theme.palette.primary.main,
                          '&:hover': { backgroundColor: theme.palette.primary.dark }
                        } : {
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          '&:hover': { 
                            backgroundColor: theme.palette.primary.main,
                            color: 'white'
                          }
                        })
                      }}
                    >
                      Get {service.title} Quote
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Bathroom Results Showcase */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h3" sx={{ mb: 4, color: theme.palette.primary.main, fontWeight: 600 }}>
              See Our Bathroom Cleaning Results
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 16px 48px rgba(0, 0, 0, 0.2)'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src="https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/bathroom-2.jpg"
                    alt="Professional bathroom cleaning results showing spotless shower and bathtub in Dayton OH"
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <Box sx={{ p: 3, backgroundColor: 'white' }}>
                    <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 1 }}>
                      Complete Shower & Tub Clean
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Spotless shower enclosures, gleaming fixtures, and sanitized surfaces
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 16px 48px rgba(0, 0, 0, 0.2)'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src="https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/bathroom-4.jpg"
                    alt="Professional bathroom cleaning results showing sparkling clean bathtub and walk-in shower in Dayton OH"
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <Box sx={{ p: 3, backgroundColor: 'white' }}>
                    <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 1 }}>
                      Luxury Bathroom Deep Clean
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Professional deep cleaning and sanitization for luxury bathroom fixtures
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Bathroom Cleaning Benefits */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="why-choose-us">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Why Choose Gem City for Bathroom Cleaning in Dayton
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
            We specialize in bathroom cleaning services that prioritize health, hygiene, and creating 
            safe, spotless bathrooms for your family in Dayton homes.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {bathroomBenefits.map((benefit, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  p: 4,
                  transition: 'all 0.3s ease',
                  border: `1px solid ${theme.palette.primary.main}20`,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                    borderColor: theme.palette.primary.main
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                  <Box sx={{ flexShrink: 0, mt: 1 }}>
                    {benefit.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: theme.palette.primary.main }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                      {benefit.description}
                    </Typography>
                    <Chip 
                      label={benefit.benefit}
                      size="small"
                      sx={{ 
                        backgroundColor: 'rgba(216, 27, 96, 0.1)',
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        fontSize: '0.75rem'
                      }}
                    />
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Customer Testimonials */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="customer-testimonials">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              Bathroom Cleaning Success Stories in Dayton
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Real reviews from Dayton homeowners who love their professionally cleaned bathrooms
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {bathroomTestimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8]
                    }
                  }}
                >
                  <Chip 
                    label={testimonial.highlight}
                    size="small"
                    sx={{ 
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: 600
                    }}
                  />
                  
                  <Rating value={testimonial.rating} readOnly size="small" sx={{ mb: 2 }} />
                  
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', lineHeight: 1.6 }}>
                    "{testimonial.text}"
                  </Typography>
                  
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                      - {testimonial.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.service}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Service Areas */}
      <Box id="service-areas">
        <AreasWeServe />
      </Box>

      {/* FAQ Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="bathroom-faq">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              Bathroom Cleaning Service FAQ - Dayton, OH
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Common questions about our professional bathroom cleaning services in Dayton
            </Typography>
          </Box>

          {bathroomFAQ.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`bathroom-faq-${index}`}
                id={`bathroom-faq-${index}`}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* Final CTA */}
      <Box sx={{ backgroundColor: theme.palette.primary.main, color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Ready for Spotless Bathrooms in Dayton?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Create healthier, cleaner bathrooms with professional cleaning that removes mold, 
            sanitizes surfaces, and makes your bathrooms sparkle. Complete sanitization guaranteed!
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=bathroom-cleaning"
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
              Get Free Bathroom Cleaning Quote
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

export default BathroomCleaningServices
