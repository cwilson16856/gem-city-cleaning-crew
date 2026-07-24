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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import SpeedIcon from '@mui/icons-material/Speed'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import StarIcon from '@mui/icons-material/Star'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/ResidentialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'

const CondoCleaning = () => {
  const theme = useTheme()

  // Table of Contents items
  const tocItems = [
    { text: '🏠 Condo Cleaning Services We Offer', href: '#condo-cleaning-services' },
    { text: '🔧 How Our Condo Cleaning Process Works', href: '#how-it-works' },
    { text: '⭐ Why Choose Gem City for Condo Cleaning', href: '#why-choose-us' },
    { text: '💬 Success Stories from Condo Owners', href: '#customer-testimonials' },
    { text: '📍 Service Areas & Coverage', href: '#service-areas' },
    { text: '❓ Condo Cleaning FAQ', href: '#condo-faq' }
  ]

  // Condo cleaning process steps
  const condoProcessSteps = [
    {
      title: "Property Assessment",
      description: "We'll assess your condo's specific needs, considering HOA requirements, luxury finishes, and your maintenance schedule to provide a detailed estimate.",
      details: ["HOA compliance check", "Luxury finish assessment", "Custom cleaning plan", "Transparent pricing"]
    },
    {
      title: "Premium Service Delivery", 
      description: "Our trained team arrives with high-end supplies and equipment, completing your condo cleaning with attention to luxury finishes and details.",
      details: ["Premium supplies included", "Luxury-grade equipment", "Trained professionals", "Quality assurance checks"]
    },
    {
      title: "Final Walkthrough",
      description: "We conduct a comprehensive walkthrough to ensure every detail meets our high standards and maintains your property's value.",
      details: ["Detailed property inspection", "Photo documentation", "Satisfaction guarantee", "Touch-ups if needed"]
    }
  ]

  // Condo cleaning benefits
  const condoBenefits = [
    {
      title: "Maintain Property Value",
      description: "Regular professional condo cleaning in Dayton helps maintain your investment's value by preserving luxury finishes and preventing wear that could affect resale value.",
      icon: <MonetizationOnIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Protect your condo investment with professional cleaning Dayton"
    },
    {
      title: "HOA Compliance & Standards",
      description: "We understand Dayton area HOA requirements and community standards, ensuring your condo cleaning meets or exceeds association expectations for property maintenance.",
      icon: <HomeWorkIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Expert knowledge of HOA requirements in Dayton condos"
    },
    {
      title: "Luxury Finish Expertise",
      description: "Our condo cleaning service in Dayton specializes in high-end finishes including granite, marble, hardwood, and luxury appliances requiring specialized care.",
      icon: <StarIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Specialized care for luxury condo finishes and materials"
    },
    {
      title: "Flexible Owner Scheduling",
      description: "As a condo owner, you deserve flexible scheduling that works around your lifestyle. Our maid service offers convenient timing options for busy professionals.",
      icon: <SpeedIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Flexible scheduling designed for condo owners in Dayton"
    },
    {
      title: "Property Management Coordination",
      description: "We can work directly with your property management company or HOA for seamless service coordination and documentation for condo communities in Dayton.",
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Professional coordination with Dayton condo management"
    },
    {
      title: "Premium Residential Cleaning",
      description: "Our residential cleaning service uses premium products and techniques specifically chosen for condo environments, protecting your investment while delivering exceptional results.",
      icon: <CleaningServicesIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Premium products designed for high-end condo cleaning"
    }
  ]

  // Condo service types
  const condoServices = [
    {
      title: "Regular Condo Maintenance",
      description: "Ongoing weekly, bi-weekly, or monthly condo cleaning to maintain your property",
      features: ["Preserves luxury finishes", "Maintains property value", "Customizable frequency", "Same cleaner consistency"],
      popular: true,
      savings: "Most Popular"
    },
    {
      title: "Deep Condo Cleaning", 
      description: "Comprehensive deep cleaning for special occasions or seasonal maintenance",
      features: ["Complete luxury detail work", "All surfaces and fixtures", "Premium finish protection", "Move-in ready results"],
      popular: false,
      savings: "Most Thorough"
    },
    {
      title: "Pre-Sale Condo Prep",
      description: "Professional cleaning to maximize your condo's appeal to potential buyers",
      features: ["Market-ready presentation", "Luxury showcase cleaning", "Professional staging prep", "Value-maximizing results"],
      popular: false,
      savings: "Investment Protection"
    }
  ]

  // Customer testimonials for condos
  const condoTestimonials = [
    {
      name: "Emily Keen",
      text: "We had our apartment deep cleaned 2 days ago and it still smells like day 1! Our baseboards have never looked so good, very impressed! We will definitely be returning customers!",
      rating: 5,
      highlight: "Deep Clean Results",
      service: "Condo deep cleaning"
    },
    {
      name: "Cindy Rathburn", 
      text: "Norma did a wonderful job cleaning my condo. I look forward to a monthly cleaning. So far I highly recommend this company.",
      rating: 5,
      highlight: "Monthly Service", 
      service: "Regular condo cleaning"
    }
  ]

  // FAQ for condo cleaning
  const condoFAQ = [
    {
      question: "How does condo cleaning differ from regular house cleaning?",
      answer: "Condo cleaning in Dayton requires specialized knowledge of luxury finishes, HOA requirements, and high-end materials. We use premium products designed for granite, marble, hardwood, and luxury appliances. Our team understands the unique needs of condo owners and community standards."
    },
    {
      question: "Do you work with HOA requirements and property management companies?",
      answer: "Yes! We're experienced working with Dayton area HOAs and property management companies. We can coordinate scheduling, provide documentation, and ensure our cleaning meets community standards and requirements."
    },
    {
      question: "How much does professional condo cleaning cost in Dayton?",
      answer: "Condo cleaning costs vary based on size, finishes, and frequency. Our pricing reflects the premium service and specialized products needed for luxury condos. We provide free estimates with transparent, upfront pricing tailored to your specific condo."
    },
    {
      question: "Can you clean luxury finishes safely?",
      answer: "Absolutely! Our team is trained in proper care for granite countertops, marble surfaces, hardwood floors, stainless steel appliances, and other luxury finishes. We use specialized products that clean effectively while protecting your investment."
    },
    {
      question: "Do you offer flexible scheduling for busy condo owners?",
      answer: "Yes, we understand condo owners often have demanding schedules. We offer flexible timing including evenings and weekends when possible. We work around your lifestyle to provide convenient, professional cleaning service."
    },
    {
      question: "Is your condo cleaning service insured and bonded?",
      answer: "Yes, we are fully insured and bonded for your protection. Given the high value of many condos and their contents, we carry comprehensive insurance to give you complete peace of mind."
    },
    {
      question: "Can you help prepare my condo for sale?",
      answer: "Definitely! Our pre-sale condo cleaning service is designed to showcase your property at its best. We focus on making your condo market-ready with detailed cleaning that highlights luxury features and maximizes buyer appeal."
    },
    {
      question: "Do you use eco-friendly products in condos?",
      answer: "Yes, we offer eco-friendly cleaning options that are safe for luxury finishes and indoor air quality. Many condo owners prefer green cleaning products, especially in buildings with shared ventilation systems."
    },
    {
      question: "How far in advance should I schedule condo cleaning service?",
      answer: "We recommend booking 1-2 weeks in advance for regular service. For special occasions or pre-sale cleaning, 2-3 weeks notice helps ensure availability. However, we often accommodate shorter notice requests when possible."
    },
    {
      question: "Do you clean condo balconies and outdoor spaces?",
      answer: "Yes, we can include balcony and patio cleaning as part of our condo service. This includes sweeping, washing surfaces, and cleaning outdoor furniture to maintain the full appeal of your condo living space."
    }
  ]

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="/images/legacy/katja-rooke-77JACslA8G0-unsplash-scaled.jpg" fetchPriority="high" />
        {/* Primary Meta Tags */}
        <title>Condo Cleaning Dayton OH – Luxury Property Care, HOA Compliant, Value Protection | Gem City Cleaning</title>
        <meta name="title" content="Condo Cleaning Dayton OH – Luxury Property Care, HOA Compliant, Value Protection" />
        <meta name="description" content="⭐ #1 Condo Cleaning Service in Dayton, OH. Luxury finish care, HOA compliant, property value protection. Professional maid service for condo owners. FREE quotes! Call 937-892-4157" />
        <meta name="keywords" content="condo cleaning Dayton, luxury condo cleaning, HOA compliant cleaning Dayton OH, condo maid service, residential cleaning condos, property value cleaning, condo maintenance Dayton, high-end condo cleaning, Kettering condo cleaning, Centerville condo cleaning, Oakwood condo cleaning, condo cleaning near me, professional condo cleaners Dayton, luxury residential cleaning" />
        
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
        <meta property="og:url" content="https://gemcitycleaningcrew.com/condo-cleaning" />
        <meta property="og:title" content="Condo Cleaning Dayton OH – Luxury Property Care, HOA Compliant, Value Protection" />
        <meta property="og:description" content="⭐ #1 Condo Cleaning in Dayton. Luxury finish care, HOA compliant service. Protect your property value! Professional maid service. FREE quotes!" />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />
        <meta property="og:image:alt" content="Professional luxury condo cleaning service results showing pristine high-end finishes in Dayton OH" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://gemcitycleaningcrew.com/condo-cleaning#service",
            "name": "Condo Cleaning Service",
            "alternateName": ["Luxury Condo Cleaning", "HOA Compliant Cleaning", "High-End Residential Cleaning"],
            "description": "Professional condo cleaning service in Dayton, Ohio specializing in luxury finishes, HOA compliance, and property value protection",
            "serviceType": "Condo Cleaning Service",
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
                "name": "Regular Condo Cleaning",
                "description": "Ongoing maintenance cleaning for luxury condos",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "Deep Condo Cleaning",
                "description": "Comprehensive deep cleaning for high-end condos",
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
          background: `linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)), url('/images/legacy/katja-rooke-77JACslA8G0-unsplash-scaled.jpg')`,
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
            label="LUXURY • HOA COMPLIANT • VALUE PROTECTION" 
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
            Professional Condo Cleaning Service Dayton
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
            Luxury Finishes • HOA Compliant • Property Value Protection
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
            Premium Results • Flexible Scheduling • Investment Protection
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
              to="/quote?service=condo-cleaning"
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
              Get Free Condo Cleaning Quote
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
            {['Luxury Finish Care', 'HOA Compliant', 'Property Value Focus', 'Premium Products'].map((item) => (
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
        title="What's Covered in Our Condo Cleaning Guide"
      />

      {/* How It Works Process */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="how-it-works">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            How Our Condo Cleaning Service Works in Dayton, OH
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
            Our condo cleaning process is designed specifically for luxury properties, ensuring HOA compliance 
            and protecting your investment while delivering exceptional results.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {condoProcessSteps.map((step, index) => (
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

      {/* Condo Service Types */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="condo-cleaning-services">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              Luxury Condo Cleaning Services in Dayton, OH
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              From regular maintenance to deep cleaning, our premium maid service 
              is designed specifically for luxury condo living in Dayton.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {condoServices.map((service, index) => (
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
                      to={`/quote?service=condo-cleaning&type=${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
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
        </Container>
      </Box>

      {/* Condo Cleaning Benefits */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="why-choose-us">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Why Choose Gem City for Condo Cleaning in Dayton
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
            We specialize in luxury condo cleaning in Dayton, understanding the unique needs 
            of condo owners, HOA requirements, and the importance of protecting your property investment.
          </Typography>
          
          <Typography variant="body1" sx={{ fontSize: '1rem', maxWidth: 800, mx: 'auto', mt: 2 }}>
            Condo ownership in Ohio comes with specific community standards and property maintenance responsibilities. 
            Learn more about HOA guidelines and property care requirements 
            at the <a href="https://ohiohome.org/renters.aspx" target="_blank" rel="noopener" style={{ color: '#D81B60', textDecoration: 'underline' }}>
            Ohio Housing Finance Agency</a>, which provides valuable information about residential property maintenance 
            standards that help maintain property values and community appeal.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {condoBenefits.map((benefit, index) => (
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
              Luxury Condo Cleaning Success Stories in Dayton
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Real reviews from Dayton condo owners who trust our premium maid service
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {condoTestimonials.map((testimonial, index) => (
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
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="condo-faq">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              Luxury Condo Cleaning FAQ - Dayton, OH
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Common questions about our premium condo cleaning and maid service in Dayton
            </Typography>
          </Box>

          {condoFAQ.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`condo-faq-${index}`}
                id={`condo-faq-${index}`}
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
            Ready for Premium Condo Cleaning in Dayton?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Protect your investment with professional condo cleaning that maintains luxury finishes 
            and meets HOA standards. Premium maid service for discerning condo owners!
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=condo-cleaning"
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
              Get Free Condo Cleaning Quote
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

export default CondoCleaning
