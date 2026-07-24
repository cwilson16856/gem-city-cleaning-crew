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
import KitchenIcon from '@mui/icons-material/Kitchen'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import SpeedIcon from '@mui/icons-material/Speed'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import StarIcon from '@mui/icons-material/Star'
import WashIcon from '@mui/icons-material/Wash'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/ResidentialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'

const KitchenCleaningServices = () => {
  const theme = useTheme()

  // Table of Contents items
  const tocItems = [
    { text: '🍳 Kitchen Cleaning Services We Offer', href: '#kitchen-cleaning-services' },
    { text: '🔧 How Our Kitchen Cleaning Process Works', href: '#how-it-works' },
    { text: '⭐ Why Choose Gem City for Kitchen Cleaning', href: '#why-choose-us' },
    { text: '💬 Success Stories from Kitchen Customers', href: '#customer-testimonials' },
    { text: '📍 Service Areas & Coverage', href: '#service-areas' },
    { text: '❓ Kitchen Cleaning FAQ', href: '#kitchen-faq' }
  ]

  // Kitchen cleaning process steps
  const kitchenProcessSteps = [
    {
      title: "Kitchen Assessment",
      description: "We'll evaluate your kitchen's specific cleaning needs, including appliances, surfaces, grease buildup, and your preferred cleaning schedule.",
      details: ["Appliance condition check", "Grease & grime assessment", "Custom cleaning plan", "Transparent pricing"]
    },
    {
      title: "Deep Kitchen Cleaning", 
      description: "Our trained team performs comprehensive kitchen cleaning using specialized products for appliances, countertops, and sanitization.",
      details: ["All appliances cleaned inside/out", "Degreasing & sanitization", "Cabinet & drawer cleaning", "Professional equipment used"]
    },
    {
      title: "Final Kitchen Inspection",
      description: "We conduct a thorough walkthrough to ensure every surface sparkles and your kitchen is ready for cooking and entertaining.",
      details: ["Complete cleanliness check", "Appliance functionality test", "Satisfaction guarantee", "Touch-ups if needed"]
    }
  ]

  // Kitchen cleaning benefits
  const kitchenBenefits = [
    {
      title: "Healthier Cooking Environment",
      description: "Professional kitchen cleaning in Dayton eliminates harmful bacteria, grease buildup, and food residue that can contaminate your meals and affect your family's health.",
      icon: <LocalDiningIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Safe, sanitized kitchen for healthy meal preparation"
    },
    {
      title: "Appliance Longevity & Performance",
      description: "Regular professional kitchen cleaning extends the life of your appliances by removing grease, grime, and buildup that can cause mechanical issues and reduce efficiency.",
      icon: <KitchenIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Protect your kitchen appliance investment in Dayton"
    },
    {
      title: "Grease & Odor Elimination",
      description: "Our kitchen cleaning service in Dayton specializes in removing stubborn grease, eliminating cooking odors, and leaving your kitchen fresh and inviting.",
      icon: <WashIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Complete grease removal and odor elimination"
    },
    {
      title: "Time-Saving Deep Clean",
      description: "Skip the hours of scrubbing and let our professional kitchen cleaners handle the tough work while you focus on what matters most to you.",
      icon: <SpeedIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Professional efficiency saves you valuable time"
    },
    {
      title: "Event & Holiday Preparation",
      description: "Get your kitchen guest-ready for holidays, parties, and special occasions with our comprehensive kitchen cleaning service in Dayton.",
      icon: <StarIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Perfect kitchen for entertaining and special events"
    },
    {
      title: "Specialized Kitchen Expertise",
      description: "Our residential cleaning team understands kitchen-specific challenges and uses specialized products safe for food preparation areas.",
      icon: <CleaningServicesIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Food-safe products and kitchen cleaning expertise"
    }
  ]

  // Kitchen service types
  const kitchenServices = [
    {
      title: "Deep Kitchen Cleaning",
      description: "Comprehensive kitchen cleaning including all appliances, surfaces, and deep degreasing",
      features: ["All appliances cleaned inside/out", "Cabinet & drawer cleaning", "Countertop deep clean", "Grease removal & sanitization"],
      popular: true,
      savings: "Most Popular"
    },
    {
      title: "Appliance-Only Cleaning", 
      description: "Focused cleaning service for your kitchen appliances and major surfaces",
      features: ["Oven, refrigerator, dishwasher", "Stovetop & range hood", "Microwave deep clean", "Appliance exterior polishing"],
      popular: false,
      savings: "Targeted Service"
    },
    {
      title: "Pre-Event Kitchen Prep",
      description: "Get your kitchen ready for holidays, parties, and special occasions",
      features: ["Guest-ready presentation", "Complete sanitization", "Appliance showcase cleaning", "Perfect for entertaining"],
      popular: false,
      savings: "Event Ready"
    }
  ]

  // Customer testimonials for kitchen cleaning
  const kitchenTestimonials = [
    {
      name: "Marcia Florkey",
      text: "Very pleased with the deep cleaning of our home, very thorough and attentive to detail, bathrooms and kitchen were especially well done.",
      rating: 5,
      highlight: "Kitchen & Deep Clean",
      service: "Kitchen deep cleaning"
    },
    {
      name: "Kate Emmerich", 
      text: "Great communication and scheduling! I got a 4 hour deep cleaning and the ladies did a fantastic job. My oven and refrigerator have never looked better! All my bathrooms are spotless. The cleaners were very kind and professional and I was extremely impressed!",
      rating: 5,
      highlight: "Appliance Cleaning", 
      service: "Kitchen appliance cleaning"
    }
  ]

  // FAQ for kitchen cleaning
  const kitchenFAQ = [
    {
      question: "What's included in professional kitchen cleaning service?",
      answer: "Our kitchen cleaning service in Dayton includes deep cleaning of all appliances (inside and out), countertops, cabinets, drawers, sink, backsplash, floor, light fixtures, and complete degreasing. We sanitize all food preparation surfaces and remove grease buildup from range hoods and stovetops."
    },
    {
      question: "How often should I have my kitchen professionally cleaned?",
      answer: "Most Dayton homeowners benefit from professional kitchen cleaning monthly or bi-monthly, depending on cooking frequency. Heavy cooking households may need more frequent service, while occasional cooks might schedule quarterly deep cleans."
    },
    {
      question: "Do you clean inside appliances like ovens and refrigerators?",
      answer: "Yes! Our kitchen cleaning service includes thorough cleaning inside ovens, refrigerators, microwaves, and dishwashers. We remove food residue, grease buildup, and sanitize all interior surfaces using food-safe cleaning products."
    },
    {
      question: "Can you remove heavy grease buildup from my kitchen?",
      answer: "Absolutely! We specialize in removing stubborn grease from range hoods, stovetops, backsplashes, and cabinets. Our team uses professional-grade degreasers safe for kitchen environments to restore your surfaces to like-new condition."
    },
    {
      question: "Are your kitchen cleaning products safe for food preparation areas?",
      answer: "Yes, we use only food-safe, non-toxic cleaning products in kitchens. All our products are specifically chosen for kitchen environments and won't leave harmful residues on food preparation surfaces."
    },
    {
      question: "How much does professional kitchen cleaning cost in Dayton?",
      answer: "Kitchen cleaning costs vary based on size, condition, and services needed. Deep kitchen cleaning typically ranges from $150-300 depending on the scope. We provide free estimates with transparent pricing for all kitchen cleaning services."
    },
    {
      question: "Can you help prepare my kitchen for holidays and entertaining?",
      answer: "Definitely! Our pre-event kitchen cleaning is perfect for holidays, dinner parties, and special occasions. We ensure your kitchen is spotless, sanitized, and guest-ready for any gathering."
    },
    {
      question: "Do you offer one-time kitchen cleaning or recurring service?",
      answer: "We offer both! Many customers start with a deep kitchen cleaning and then schedule monthly or bi-monthly maintenance. Others prefer one-time service for special occasions or move-in/move-out situations."
    },
    {
      question: "How long does professional kitchen cleaning take?",
      answer: "Kitchen cleaning typically takes 2-4 hours depending on size and condition. Deep cleaning with all appliances may take longer, while maintenance cleaning of an already clean kitchen is faster. We'll provide time estimates during your consultation."
    },
    {
      question: "Will kitchen cleaning help with cooking odors?",
      answer: "Yes! Professional kitchen cleaning eliminates cooking odors by removing grease, food residue, and bacteria that cause persistent smells. We also clean range hoods and ventilation areas where odors often linger."
    }
  ]

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="/images/legacy/kitchen-2.jpg" fetchPriority="high" />
        {/* Primary Meta Tags */}
        <title>Kitchen Cleaning Services Dayton OH – Deep Clean, Appliances, Grease Removal | Gem City Cleaning</title>
        <meta name="title" content="Kitchen Cleaning Services Dayton OH – Deep Clean, Appliances, Grease Removal" />
        <meta name="description" content="⭐ #1 Kitchen Cleaning Service in Dayton, OH. Deep cleaning, appliance cleaning, grease removal. Professional results for healthier cooking. FREE quotes! Call 937-892-4157" />
        <meta name="keywords" content="kitchen cleaning Dayton, professional kitchen cleaning, appliance cleaning Dayton OH, kitchen deep cleaning, grease removal service, kitchen sanitization, oven cleaning Dayton, refrigerator cleaning, Kettering kitchen cleaning, Centerville kitchen cleaning, Oakwood kitchen cleaning, kitchen cleaning near me, residential kitchen cleaning, maid service kitchen cleaning" />
        
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
        <meta property="og:url" content="https://gemcitycleaningcrew.com/kitchen-cleaning-services" />
        <meta property="og:title" content="Kitchen Cleaning Services Dayton OH – Deep Clean, Appliances, Grease Removal" />
        <meta property="og:description" content="⭐ #1 Kitchen Cleaning in Dayton. Deep cleaning, appliance cleaning, grease removal. Professional results for healthier cooking. FREE quotes!" />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/images/legacy/kitchen-2.jpg" />
        <meta property="og:image:alt" content="Professional kitchen cleaning service results showing spotless stainless steel appliances and white cabinets in Dayton OH" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://gemcitycleaningcrew.com/kitchen-cleaning-services#service",
            "name": "Kitchen Cleaning Service",
            "alternateName": ["Professional Kitchen Cleaning", "Appliance Cleaning", "Kitchen Deep Cleaning", "Grease Removal Service"],
            "description": "Professional kitchen cleaning service in Dayton, Ohio specializing in deep cleaning, appliance cleaning, grease removal, and kitchen sanitization",
            "serviceType": "Kitchen Cleaning Service",
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
                "name": "Deep Kitchen Cleaning",
                "description": "Comprehensive kitchen cleaning including all appliances and surfaces",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "Appliance Cleaning",
                "description": "Specialized cleaning service for kitchen appliances",
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
          background: `linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)), url('/images/legacy/kitchen-2.jpg')`,
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
            label="DEEP CLEAN • APPLIANCES • GREASE REMOVAL" 
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
            Professional Kitchen Cleaning Services Dayton
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
            Deep Cleaning • Appliance Care • Healthier Cooking
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
            Professional Results • Food-Safe Products • Satisfaction Guaranteed
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
              to="/quote?service=kitchen-cleaning"
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
              Get Free Kitchen Cleaning Quote
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
            {['Appliance Experts', 'Grease Removal', 'Food-Safe Products', 'Health Focused'].map((item) => (
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
        title="What's Covered in Our Kitchen Cleaning Guide"
      />

      {/* How It Works Process */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="how-it-works">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            How Our Kitchen Cleaning Service Works in Dayton, OH
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
            Our kitchen cleaning process focuses on health, safety, and thorough sanitization 
            to create the perfect environment for cooking and food preparation.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {kitchenProcessSteps.map((step, index) => (
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

      {/* Kitchen Service Types */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="kitchen-cleaning-services">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              Professional Kitchen Cleaning Services in Dayton, OH
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              From deep cleaning to appliance maintenance, our kitchen cleaning services 
              create healthier cooking environments for Dayton families.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {kitchenServices.map((service, index) => (
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
                      to={`/quote?service=kitchen-cleaning&type=${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
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

          {/* Kitchen Results Showcase */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h3" sx={{ mb: 4, color: theme.palette.primary.main, fontWeight: 600 }}>
              See Our Kitchen Cleaning Results
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
                    src="/images/legacy/kitchen-3.jpg"
                    alt="Professional kitchen cleaning results showing spotless white cabinets and stainless steel appliances in Dayton OH"
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <Box sx={{ p: 3, backgroundColor: 'white' }}>
                    <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 1 }}>
                      Complete Kitchen Deep Clean
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Spotless cabinets, gleaming appliances, and sanitized surfaces ready for cooking
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
                    src="/images/legacy/stove.jpg"
                    alt="Professional stove and appliance cleaning results showing pristine gas stove in Dayton OH kitchen"
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <Box sx={{ p: 3, backgroundColor: 'white' }}>
                    <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 1 }}>
                      Appliance Deep Cleaning
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Professional appliance cleaning removes grease and restores like-new appearance
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Kitchen Cleaning Benefits */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="why-choose-us">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Why Choose Gem City for Kitchen Cleaning in Dayton
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
            We specialize in kitchen cleaning services that prioritize health, safety, and creating 
            the perfect environment for cooking and food preparation in Dayton homes.
          </Typography>
          
          <Typography variant="body1" sx={{ fontSize: '1rem', maxWidth: 800, mx: 'auto', mt: 2 }}>
            Kitchen hygiene is essential for family health and food safety. Learn more about proper food handling and kitchen sanitation 
            from the <a href="https://www.fda.gov/consumers/womens-health-topics/food-safety-home" target="_blank" rel="noopener" style={{ color: '#D81B60', textDecoration: 'underline' }}>
            FDA's food safety guidelines</a>, which provides expert recommendations for maintaining clean, safe cooking environments 
            that protect your family's health and prevent foodborne illnesses.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {kitchenBenefits.map((benefit, index) => (
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
              Kitchen Cleaning Success Stories in Dayton
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Real reviews from Dayton homeowners who love their professionally cleaned kitchens
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {kitchenTestimonials.map((testimonial, index) => (
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
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="kitchen-faq">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              Kitchen Cleaning Service FAQ - Dayton, OH
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Common questions about our professional kitchen cleaning services in Dayton
            </Typography>
          </Box>

          {kitchenFAQ.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`kitchen-faq-${index}`}
                id={`kitchen-faq-${index}`}
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
            Ready for a Spotless Kitchen in Dayton?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Create a healthier cooking environment with professional kitchen cleaning that removes grease, 
            sanitizes surfaces, and makes your kitchen shine. Food-safe products guaranteed!
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=kitchen-cleaning"
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
              Get Free Kitchen Cleaning Quote
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

export default KitchenCleaningServices
