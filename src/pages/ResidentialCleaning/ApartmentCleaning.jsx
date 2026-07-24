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
import ApartmentIcon from '@mui/icons-material/Apartment'
import PersonIcon from '@mui/icons-material/Person'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import SpeedIcon from '@mui/icons-material/Speed'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/ResidentialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'

const ApartmentCleaning = () => {
  const theme = useTheme()

  // Table of Contents items
  const tocItems = [
    { text: '🏠 Apartment Cleaning Services We Offer', href: '#apartment-cleaning-services' },
    { text: '🔧 How Our Apartment Cleaning Process Works', href: '#how-it-works' },
    { text: '⭐ Why Choose Gem City for Apartment Cleaning', href: '#why-choose-us' },
    { text: '💬 Success Stories from Apartment Customers', href: '#customer-testimonials' },
    { text: '📍 Service Areas & Coverage', href: '#service-areas' },
    { text: '❓ Apartment Cleaning FAQ', href: '#apartment-faq' }
  ]

  // Apartment cleaning process steps
  const apartmentProcessSteps = [
    {
      title: "Free Consultation",
      description: "We'll assess your apartment's specific needs, whether it's move-in/out, deep cleaning, or regular maintenance, and provide a detailed estimate.",
      details: ["In-person or virtual walkthrough", "Custom cleaning plan", "Transparent pricing", "No hidden fees"]
    },
    {
      title: "Professional Service", 
      description: "Our trained team arrives with all supplies and equipment, completing your apartment cleaning efficiently and thoroughly.",
      details: ["All supplies included", "Professional equipment", "Trained cleaners", "Quality assurance checks"]
    },
    {
      title: "Final Inspection",
      description: "We conduct a thorough walkthrough to ensure every detail meets our high standards and your complete satisfaction.",
      details: ["Room-by-room inspection", "Photo documentation", "Satisfaction guarantee", "Quick touch-ups if needed"]
    }
  ]

  // Apartment cleaning benefits
  const apartmentBenefits = [
    {
      title: "Get Your Deposit Back",
      description: "We understand exactly what Dayton landlords look for during move-out inspections. Our thorough apartment cleaning service helps ensure you get your full security deposit returned with our proven move-out cleaning checklist.",
      icon: <MonetizationOnIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Maximize deposit recovery with professional apartment cleaning Dayton"
    },
    {
      title: "Fast Turnaround Maid Service",
      description: "Moving schedules are tight in Dayton! We offer flexible residential cleaning including same-day and next-day apartment cleaning service to meet your move-in or move-out deadlines.",
      icon: <SpeedIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Same-day vacant apartment cleaning available in Dayton"
    },
    {
      title: "Rental Property Expertise",
      description: "With years of experience providing apartment cleaning Dayton services, we know the specific standards landlords and property managers expect for rental properties and condos throughout the area.",
      icon: <ApartmentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Specialized knowledge of Dayton rental property requirements"
    },
    {
      title: "All Supplies & Equipment Included",
      description: "Don't worry about buying cleaning supplies for your apartment move in Dayton. Our maid service brings everything needed including professional-grade equipment and eco-friendly products.",
      icon: <CleaningServicesIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Complete apartment cleaning service with no additional supply costs"
    },
    {
      title: "Landlord Communication",
      description: "We can coordinate directly with your Dayton landlord or property manager if needed, providing documentation and photos to facilitate smooth move-out processes for apartments and condos.",
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Professional landlord coordination for Dayton apartment cleaning"
    },
    {
      title: "Student Housing Specialists",
      description: "We work extensively with University of Dayton students and other local college housing, understanding the unique needs and timelines of student apartment moves with our specialized maid service.",
      icon: <PersonIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Experience with UD student housing and residential cleaning needs"
    }
  ]

  // Apartment service types
  const apartmentServices = [
    {
      title: "Move-Out Cleaning",
      description: "Comprehensive cleaning to help you get your security deposit back",
      features: ["Deep clean all rooms", "Appliance cleaning", "Cabinet & drawer cleaning", "Baseboard & trim detail"],
      popular: true,
      savings: "Most Popular"
    },
    {
      title: "Move-In Cleaning", 
      description: "Start fresh in your new apartment with a thorough pre-move cleaning",
      features: ["Sanitize all surfaces", "Clean appliances", "Freshen all rooms", "Remove previous tenant residue"],
      popular: false,
      savings: "Fresh Start"
    },
    {
      title: "Deep Cleaning Service",
      description: "Intensive cleaning for apartments that need extra attention",
      features: ["Heavy-duty cleaning", "Detailed appliance work", "Wall washing", "Intensive bathroom/kitchen focus"],
      popular: false,
      savings: "Most Thorough"
    }
  ]

  // Customer testimonials for apartments
  const apartmentTestimonials = [
    {
      name: "Emily Keen",
      text: "We had our apartment deep cleaned 2 days ago and it still smells like day 1! Our baseboards have never looked so good, very impressed! We will definitely be returning customers!",
      rating: 5,
      highlight: "Deep Clean Results",
      service: "Apartment deep cleaning"
    },
    {
      name: "Cindy Rathburn", 
      text: "Norma did a wonderful job cleaning my condo. I look forward to a monthly cleaning. So far I highly recommend this company.",
      rating: 5,
      highlight: "Monthly Service", 
      service: "Condo cleaning"
    }
  ]

  // FAQ for apartment cleaning
  const apartmentFAQ = [
    {
      question: "Will apartment cleaning help me get my security deposit back?",
      answer: "Yes! We specifically focus on the areas landlords inspect most carefully during move-out. Our thorough cleaning of appliances, cabinets, baseboards, and all surfaces significantly improves your chances of getting your full deposit back. We've helped hundreds of tenants recover their deposits."
    },
    {
      question: "How much does apartment cleaning cost?",
      answer: "Our apartment cleaning starts at $120 for move-in cleaning and $150 for move-out cleaning, depending on size and condition. Studio and 1-bedroom apartments are typically on the lower end, while larger apartments may cost more. We provide free estimates with transparent, upfront pricing."
    },
    {
      question: "Do you offer same-day or emergency apartment cleaning?",
      answer: "Yes! We understand moving schedules can be unpredictable. We offer same-day service when possible and can often accommodate last-minute requests. Call us as soon as you know you need service, and we'll do our best to fit you in."
    },
    {
      question: "What's included in apartment move-out cleaning?",
      answer: "Our move-out cleaning includes: deep cleaning all rooms, detailed appliance cleaning (inside/outside), cabinet and drawer cleaning, baseboard and trim wiping, bathroom deep clean, kitchen degreasing, floor cleaning/mopping, and removal of any cleaning residue. We focus on everything landlords typically inspect."
    },
    {
      question: "Do you work with University of Dayton student housing?",
      answer: "Absolutely! We have extensive experience with UD student housing and understand the unique challenges students face with tight move-out schedules. We work around academic calendars and can often provide group discounts for students in the same building."
    },
    {
      question: "Can you coordinate with my landlord or property manager?",
      answer: "Yes, we can communicate directly with landlords or property management companies when needed. We can provide documentation, photos, and coordinate scheduling to make your move-out process as smooth as possible."
    },
    {
      question: "Do I need to be present during the apartment cleaning?",
      answer: "It's not required, but many tenants prefer to be present for move-out cleanings to see the work completed. For move-in cleanings, we can often work while you're handling other moving tasks. We're flexible with your schedule and access needs."
    },
    {
      question: "What if my landlord isn't satisfied with the cleaning?",
      answer: "We offer a 100% satisfaction guarantee. If your landlord identifies any cleaning issues that we can address, contact us within 24 hours and we'll return to resolve them at no additional charge. Customer satisfaction and deposit recovery are our top priorities."
    },
    {
      question: "How far in advance should I schedule apartment cleaning?",
      answer: "We recommend booking 1-2 weeks in advance when possible, especially during busy moving seasons (summer and winter breaks). However, we often have same-week and even same-day availability for urgent move-out situations."
    },
    {
      question: "Do you clean apartments that are in poor condition?",
      answer: "Yes, we specialize in challenging cleaning situations. Whether the apartment hasn't been cleaned in months or needs intensive work, our deep cleaning service can handle it. We'll assess the situation and provide an honest estimate of what can be accomplished."
    }
  ]

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Apartment Cleaning Dayton OH – Move-Out Pros, Same-Day Service, Deposit Back Guarantee | Gem City Cleaning</title>
        <meta name="title" content="Apartment Cleaning Dayton OH – Move-Out Pros, Same-Day Service, Deposit Back Guarantee" />
        <meta name="description" content="⭐ #1 Apartment Cleaning Service in Dayton, OH. Move-in/out cleaning, deep cleaning, regular maintenance. Get your deposit back! Professional results guaranteed. FREE quotes! Call 937-892-4157" />
        <meta name="keywords" content="apartment cleaning Dayton, move out cleaning Dayton OH, move in cleaning service, get deposit back cleaning, rental property cleaning Dayton, apartment deep cleaning, student housing cleaning UD, condo cleaning Dayton, maid service, residential cleaning, vacant apartment cleaning, move out checklist, Kettering apartment cleaning, Centerville apartment cleaning, Oakwood apartment cleaning, apartment cleaning near me, rental cleaning service, professional apartment cleaners Dayton" />
        
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
        <meta property="og:url" content="https://gemcitycleaningcrew.com/apartment-cleaning" />
        <meta property="og:title" content="Apartment Cleaning Dayton OH – Move-Out Pros, Same-Day Service, Deposit Back Guarantee" />
        <meta property="og:description" content="⭐ #1 Apartment Cleaning in Dayton. Move-in/out cleaning specialists. Get your deposit back! Same-day service available. Student housing experts. FREE quotes!" />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />
        <meta property="og:image:alt" content="Professional apartment cleaning service results showing clean modern apartment ready for move-out inspection in Dayton OH" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://gemcitycleaningcrew.com/apartment-cleaning#service",
            "name": "Apartment Cleaning Service",
            "alternateName": ["Move-Out Cleaning", "Move-In Cleaning", "Rental Property Cleaning", "Student Housing Cleaning"],
            "description": "Professional apartment cleaning service in Dayton, Ohio specializing in move-in/out cleaning, deposit recovery, and student housing with same-day availability",
            "serviceType": "Apartment Cleaning Service",
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
                "name": "Move-Out Apartment Cleaning",
                "description": "Comprehensive move-out cleaning to help get your security deposit back",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "Move-In Apartment Cleaning",
                "description": "Fresh start cleaning for your new apartment",
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
            label="APARTMENTS • MOVE-IN/OUT • DEEP CLEANING" 
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
            Professional Apartment Cleaning Service Dayton
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
            Move-In/Out • Deep Cleaning • Get Your Deposit Back
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
            Professional Results • Fast Turnaround • Satisfaction Guaranteed
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
              to="/quote?service=apartment-cleaning"
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
              Get Free Apartment Cleaning Quote
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
            {['Same-Day Available', 'Deposit Recovery Focus', 'Student Housing Experts', 'All Supplies Included'].map((item) => (
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
        title="What's Covered in Our Apartment Cleaning Guide"
      />

      {/* How It Works Process */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="how-it-works">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            How Our Apartment Cleaning Service Works in Dayton, OH
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
            Whether you're moving in, moving out, or need a deep clean, our apartment cleaning process is designed to deliver 
            professional results that meet landlord standards and help protect your deposit.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {apartmentProcessSteps.map((step, index) => (
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

      {/* Apartment Service Types */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="apartment-cleaning-services">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              Move-Out Apartment Cleaning Services in Dayton, OH
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              From move-in freshening to comprehensive move-out apartment cleaning, we have the right maid service 
              to meet your apartment cleaning needs and timeline in Dayton.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {apartmentServices.map((service, index) => (
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
                      to={`/quote?service=apartment-cleaning&type=${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
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

      {/* Apartment Cleaning Benefits */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="why-choose-us">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Why Choose Gem City for Apartment Cleaning in Dayton
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
            We specialize in apartment and rental property cleaning in Dayton, understanding the unique requirements 
            of tenants, landlords, and property managers. Our residential cleaning experts know Ohio tenant rights and work 
            to protect your interests during the move-out process.
          </Typography>
          
          <Typography variant="body1" sx={{ fontSize: '1rem', maxWidth: 800, mx: 'auto', mt: 2 }}>
            As Ohio tenants, you have specific rights during your lease. Learn more about your tenant rights and responsibilities 
            at the <a href="https://ohiohome.org/renters.aspx" target="_blank" rel="noopener" style={{ color: '#D81B60', textDecoration: 'underline' }}>
            Ohio Housing Finance Agency's tenant resource center</a>, which provides valuable information about rental housing, 
            tenant rights, and move-out procedures that can help you navigate the cleaning requirements for getting your full deposit back.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {apartmentBenefits.map((benefit, index) => (
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
              Student Housing & Apartment Cleaning Success Stories in Dayton
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Real reviews from Dayton apartment tenants who got their deposits back and landlords who were impressed with our maid service
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {apartmentTestimonials.map((testimonial, index) => (
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
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="apartment-faq">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              Apartment & Condo Cleaning FAQ - Dayton, OH
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Common questions about our residential cleaning and maid service for apartments in Dayton
            </Typography>
          </Box>

          {apartmentFAQ.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`apartment-faq-${index}`}
                id={`apartment-faq-${index}`}
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
            Ready for Professional Apartment Cleaning in Dayton?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Don't lose your security deposit to vacant apartment cleaning issues. Our professional apartment cleaning service 
            helps ensure you get every dollar back with our move-out cleaning checklist. Same-day service available!
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=apartment-cleaning"
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
              Get Free Apartment Cleaning Quote
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

export default ApartmentCleaning
