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
  Divider,
  CardActionArea
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import StorefrontIcon from '@mui/icons-material/Storefront'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import SpaIcon from '@mui/icons-material/Spa'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import WindowIcon from '@mui/icons-material/Window'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'
import DescriptionIcon from '@mui/icons-material/Description'
import PersonIcon from '@mui/icons-material/Person'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/CommercialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'

const RetailCleaning = () => {
  const theme = useTheme()

  // Retail Types - positioned high up
  const retailTypes = [
    {
      title: "Clothing & Fashion Stores",
      description: "Professional cleaning for clothing stores, boutiques, and fashion retailers to maintain an inviting shopping environment",
      icon: <LocalMallIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Dressing room sanitization", "Sales floor maintenance", "Window display cleaning", "Fitting area deep cleaning"],
      popular: true,
      specialties: ["Clothing stores", "Boutiques", "Fashion retailers", "Shoe stores"]
    },
    {
      title: "Restaurants & Food Service",
      description: "Specialized cleaning for restaurants, cafes, and food service establishments",
      icon: <RestaurantIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Kitchen deep cleaning", "Dining area maintenance", "Bathroom Cleaning", "Grease removal"],
      popular: true,
      specialties: ["Restaurants", "Cafes", "Food courts", "Bakeries"]
    },
    {
      title: "Beauty & Wellness Salons",
      description: "Thorough cleaning for beauty salons, spas, and wellness centers with attention to hygiene standards",
      icon: <SpaIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Sanitization protocols", "Treatment room cleaning", "Waiting area maintenance", "Equipment cleaning"],
      popular: false,
      specialties: ["Hair salons", "Nail salons", "Spas", "Wellness centers"]
    },
    {
      title: "Retail Stores & Shops",
      description: "General retail cleaning for various store types, maintaining clean and welcoming customer spaces",
      icon: <StorefrontIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Customer area cleaning", "Product display maintenance", "Checkout area sanitization", "Entrance cleaning"],
      popular: false,
      specialties: ["General retail", "Specialty shops", "Electronics stores", "Gift shops"]
    },
    {
      title: "Fitness Centers & Gyms",
      description: "Specialized cleaning for fitness facilities with focus on equipment sanitization and locker room hygiene",
      icon: <FitnessCenterIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Equipment sanitization", "Locker room deep cleaning", "Exercise area maintenance", "High-touch surface cleaning"],
      popular: false,
      specialties: ["Gyms", "Fitness centers", "Yoga studios", "Sports facilities"]
    },
    {
      title: "Shopping Centers & Malls",
      description: "Large-scale cleaning for shopping centers, malls, and retail complexes with coordinated service",
      icon: <ShoppingCartIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Common area cleaning", "Multi-tenant coordination", "Food court maintenance", "Restroom sanitization"],
      popular: false,
      specialties: ["Shopping malls", "Strip centers", "Outlets", "Retail complexes"]
    }
  ]

  // FAQ data for retail cleaning
  const faqData = [
    {
      question: "Do you offer retail cleaning without contracts?",
      answer: "Yes! We provide flexible retail cleaning services without long-term contracts. You can book one-time cleanings, schedule recurring services, or adjust frequency as needed to match your business requirements."
    },
    {
      question: "Can you clean during or after business hours?",
      answer: "Absolutely! We offer flexible scheduling including after-hours, early morning, and weekend cleaning to minimize disruption to your customers and business operations. Many retail clients prefer evening cleaning."
    },
    {
      question: "Do you understand retail cleaning requirements?",
      answer: "Yes, we have extensive experience with retail environments and understand the importance of maintaining clean, inviting spaces that enhance the customer experience and protect your brand image."
    },
    {
      question: "Can you handle different types of retail businesses?",
      answer: "Yes, we clean all types of retail establishments including clothing stores, restaurants, beauty salons, fitness centers, and general retail shops. Each requires specialized cleaning approaches."
    },
    {
      question: "Do you clean dressing rooms and fitting areas?",
      answer: "Absolutely! We provide thorough cleaning and sanitization of dressing rooms, fitting areas, and other customer spaces with attention to privacy and hygiene standards."
    },
    {
      question: "Are you experienced with food service cleaning?",
      answer: "Yes, we have experience cleaning restaurants, cafes, and food service areas. We follow health department guidelines and use appropriate cleaning products for food preparation areas."
    },
    {
      question: "Can you work around our customers and staff?",
      answer: "Yes, we're experienced in working around retail operations. We can clean during slow periods, after hours, or coordinate with your schedule to minimize impact on customers and employees."
    },
    {
      question: "Do you provide cleaning supplies and equipment?",
      answer: "Yes, we bring all necessary cleaning supplies, equipment, and tools. We use commercial-grade, eco-friendly products that are safe for retail environments and won't damage merchandise or fixtures."
    },
    {
      question: "How do you handle high-traffic retail areas?",
      answer: "We understand high-traffic retail environments require frequent attention. We can provide more frequent service for heavily used areas and adjust our cleaning schedule based on your customer traffic patterns."
    },
    {
      question: "Are you insured for retail cleaning work?",
      answer: "Yes, we are fully licensed, insured, and bonded with commercial-grade coverage. We can provide certificates of insurance for your business records and any lease requirements."
    }
  ]

  // Service features for retail cleaning
  const serviceFeatures = [
    {
      title: "Customer-Focused Cleaning",
      description: "We understand that clean retail spaces directly impact customer experience and sales, prioritizing areas that matter most to your business.",
      icon: <PersonIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/Trained.png"
    },
    {
      title: "Flexible Scheduling",
      description: "Work around your business hours with evening, weekend, and holiday cleaning options that don't disrupt customer traffic.",
      icon: <AccessTimeIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/Plan.png"
    },
    {
      title: "No Contracts Required",
      description: "Flexible retail cleaning services without long-term contracts. Adjust frequency and services as your business needs change.",
      icon: <DescriptionIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/No-Contracts.png"
    }
  ]

  // Retail cleaning areas
  const retailAreas = [
    {
      title: "Sales Floor & Shopping Areas",
      icon: <StorefrontIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Customer shopping areas, product displays, and main retail floor maintenance"
    },
    {
      title: "Dressing Rooms & Fitting Areas", 
      icon: <PersonIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Private fitting areas, dressing rooms, and customer changing spaces"
    },
    {
      title: "Checkout & Register Areas",
      icon: <ShoppingCartIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Point of sale areas, customer service counters, and transaction spaces"
    },
    {
      title: "Restrooms & Customer Facilities",
      icon: <HomeRepairServiceIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Customer restrooms, family facilities, and public washroom areas"
    },
    {
      title: "Windows & Storefronts",
      icon: <WindowIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Storefront windows, entrance doors, and exterior customer-facing areas"
    },
    {
      title: "Storage & Back Office Areas",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Employee areas, storage rooms, and behind-the-scenes spaces"
    }
  ]

  // Table of Contents items
  const tocItems = [
    { text: '🛍️ Professional Retail Cleaning Dayton', href: '#dayton-retail-cleaning-services' },
    { text: '⭐ Retail Client Testimonials', href: '#testimonials' },
    { text: '✨ Why Choose Professional Retail Cleaning', href: '#why-choose-us' },
    { text: '📍 Service Areas & Coverage', href: '#service-areas' },
    { text: '📋 What\'s Included in Retail Cleaning', href: '#what-included' },
    { text: '❓ Retail Cleaning FAQ', href: '#faq' }
  ]

  return (
    <>
      <Helmet>
        <title>Professional Dayton Retail Cleaning Services | Stores, Restaurants, Salons | Gem City Cleaning</title>
        <meta name="description" content="Professional Dayton retail cleaning for stores, restaurants, salons, fitness centers. Flexible scheduling, no contracts, customer-focused cleaning. Free quotes!" />
        <meta name="keywords" content="Dayton retail cleaning, store cleaning, restaurant cleaning, salon cleaning, retail store cleaning, shopping center cleaning" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/retail-cleaning" />
        <meta property="og:title" content="Professional Dayton Retail Cleaning Services | Gem City Cleaning" />
        <meta property="og:description" content="Professional Dayton retail cleaning for stores, restaurants, salons. Flexible scheduling, no contracts, customer-focused service." />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Dayton Retail Cleaning Services | Gem City Cleaning" />
        <meta name="twitter:description" content="Professional Dayton retail cleaning for stores, restaurants, salons." />
        
        <link rel="canonical" href="https://gemcitycleaningcrew.com/retail-cleaning" />
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Retail Cleaning Services",
            "description": "Professional Dayton retail cleaning services for stores, restaurants, salons, fitness centers, and retail businesses",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gem City Cleaning Crew",
              "telephone": "937-892-4157"
            },
            "areaServed": "Dayton, OH and surrounding areas",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Retail Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Store Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Restaurant Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Salon Cleaning"
                  }
                }
              ]
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
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
            label="CUSTOMER-FOCUSED • FLEXIBLE SCHEDULING • NO CONTRACTS" 
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
            Professional Dayton Retail Cleaning Services
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
            Trusted by Stores, Restaurants, Salons & Retail Businesses
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
            Enhance Customer Experience • Flexible Hours • Professional Results
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
              Get Free Retail Cleaning Quote!
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Table of Contents */}
      <TableOfContents 
        items={tocItems} 
        collapsible={true}
        defaultExpanded={false}
        showItemCount={true}
      />

      {/* Retail Types Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="dayton-retail-cleaning-services">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Professional Retail Cleaning Services in Dayton
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            Specialized cleaning solutions for retail businesses throughout the Dayton area
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {retailTypes.map((retail, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="commercial-service-card" sx={{ height: '100%', position: 'relative', overflow: 'visible' }}>
                {retail.popular && (
                  <Chip 
                    label="MOST POPULAR"
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
                      '& .MuiChip-label': {
                        px: 2,
                        py: 0.5
                      }
                    }}
                  />
                )}
                <CardContent sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box className="commercial-service-icon">
                    {retail.icon}
                  </Box>
                  
                  <Typography variant="h5" component="h3" className="commercial-service-title" sx={{ mb: 2, fontWeight: 700 }}>
                    {retail.title}
                  </Typography>
                  
                  <Typography variant="body1" className="commercial-service-description" sx={{ flex: 1, mb: 2 }}>
                    {retail.description}
                  </Typography>
                  
                  <Box sx={{ textAlign: 'left', mb: 2 }}>
                    {retail.features.map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CheckCircleIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />
                        <Typography variant="body2" sx={{ fontWeight: 500, color: '#525252' }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ textAlign: 'left', mt: 2, pt: 2, borderTop: '1px solid #e0e0e0' }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: theme.palette.primary.main }}>
                      Specializing in:
                    </Typography>
                    {retail.specialties.map((specialty, idx) => (
                      <Typography key={idx} variant="body2" sx={{ fontSize: '0.85rem', color: '#666', mb: 0.5 }}>
                        • {specialty}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonial Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="testimonials">
        <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Retail Cleaning Client Reviews
        </Typography>
        
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 4, 
            textAlign: 'center',
            color: '#959393',
            fontSize: { xs: '1.5rem', md: '1.8rem' }
          }}
        >
          Trusted by Dayton's Leading Retail Businesses
        </Typography>

        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
          From clothing stores and restaurants to salons and fitness centers, Dayton's retail businesses trust 
          Gem City Cleaning Crew for reliable, customer-focused cleaning services. Our flexible scheduling and 
          no-contract approach means we adapt to your business needs while maintaining the clean, inviting environment your customers expect.
        </Typography>

        {/* Featured Testimonials */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={4} className="commercial-testimonial-card" sx={{ p: 4, textAlign: 'center', height: '100%' }}>
              <Box sx={{ mb: 2 }}>
                <Rating value={5} readOnly size="large" sx={{ color: '#FFD700' }} />
              </Box>
              <Typography variant="h6" sx={{ mb: 2, fontStyle: 'italic', lineHeight: 1.6 }}>
                "Our boutique has worked with Gem City Cleaning for over a year. They understand retail and always work around our customers. 
                The flexibility to adjust cleaning frequency during busy seasons has been invaluable."
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                - Lisa K., Boutique Owner
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={4} className="commercial-testimonial-card" sx={{ p: 4, textAlign: 'center', height: '100%' }}>
              <Box sx={{ mb: 2 }}>
                <Rating value={5} readOnly size="large" sx={{ color: '#FFD700' }} />
              </Box>
              <Typography variant="h6" sx={{ mb: 2, fontStyle: 'italic', lineHeight: 1.6 }}>
                "As a restaurant owner, cleanliness is critical to our success. Gem City Cleaning helps us maintain health department standards 
                while keeping our dining areas spotless for customers. Highly professional service."
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                - Mark R., Restaurant Owner
              </Typography>
            </Paper>
          </Grid>
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
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                borderWidth: 2
              }
            }}
          >
            Get Retail Cleaning Quote
          </Button>
        </Box>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="why-choose-us">
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Why Choose Our Dayton Retail Cleaning Services?
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            Since 2017, retail businesses throughout Dayton have relied on Gem City Cleaning Crew for dependable, 
            customer-focused cleaning services. We understand that retail environments require special attention 
            to customer experience, brand image, and flexible scheduling. Our cleaning services help create the clean, 
            inviting atmosphere that encourages customers to shop and return.
          </Typography>

          {/* Service Features */}
          <Grid container spacing={4} sx={{ mb: 6 }} className="commercial-service-features">
            {serviceFeatures.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="commercial-areas-grid">
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box
                      component="img"
                      src={feature.image}
                      alt={`${feature.title} - Retail cleaning services feature`}
                      sx={{
                        width: 80,
                        height: 80,
                        objectFit: 'contain',
                        mb: 3,
                        mx: 'auto',
                        display: 'block'
                      }}
                    />
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

          <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            Whether you need daily cleaning for a busy restaurant, weekly maintenance for a clothing store, or bi-weekly services 
            for a salon, we create customized cleaning plans that work with your schedule and budget. 
            Our flexible approach means no long-term contracts and the ability to adjust services as your business grows.
          </Typography>
        </Container>
      </Box>

      {/* Detailed Service Information */}
      <Box sx={{ py: 8 }} id="what-included">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            What's Included in Our Retail Cleaning Services?
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            Our comprehensive retail cleaning services cover every area of your business. 
            We use commercial-grade equipment and eco-friendly cleaning products that are safe for retail environments, 
            customers, and merchandise while maintaining the clean, professional appearance that supports your brand.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {retailAreas.map((area, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="commercial-areas-grid">
                  <CardContent>
                    <Box className="commercial-room-icon">
                      {area.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                        mb: 2
                      }}
                    >
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

          {/* Additional Services */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" component="h3" sx={{ mb: 4, textAlign: 'center', color: theme.palette.primary.main }}>
              Additional Retail Cleaning Services
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Standard Retail Cleaning</Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Sales floor cleaning and maintenance</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Customer area sanitization</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Restroom cleaning and restocking</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Trash removal and recycling</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Entrance and storefront cleaning</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Break room and employee areas</Typography>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Specialized Retail Services</Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Window cleaning (interior & exterior)</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Dressing room deep sanitization</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Light fixture cleaning</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Display area maintenance</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Post-event cleanup</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Seasonal deep cleaning</Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>

          {/* Learn More Card */}
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
                Ready for Professional Retail Cleaning?
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#525252', fontSize: '1.1rem' }}>
                Let us help create a clean, inviting environment that enhances your customer experience. 
                No contracts required - just professional, reliable retail cleaning services.
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
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                    color: 'white',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Get Free Retail Cleaning Quote
              </Button>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="faq">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box
              component="img"
              src="https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/FAQ.png"
              alt="Frequently asked questions about professional Dayton retail cleaning services"
              sx={{
                width: 80,
                height: 80,
                objectFit: 'contain',
                mb: 3,
                mx: 'auto',
                display: 'block'
              }}
            />
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                color: theme.palette.primary.main,
                fontWeight: 600
              }}
            >
              Retail Cleaning FAQ
            </Typography>
          </Box>

          {faqData.map((faq, index) => (
            <Accordion key={index} className="commercial-faq-accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
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

      {/* Service Areas with Map */}
      <Box id="service-areas">
        <AreasWeServe />
      </Box>

      {/* Excellence Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Divider sx={{ my: 4 }} />
        
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              mb: 4,
              color: theme.palette.primary.main,
              fontWeight: 700
            }}
          >
            Professional Retail Cleaning Excellence
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, maxWidth: 900, mx: 'auto', lineHeight: 1.7 }}>
            At Gem City Cleaning Crew, we understand that your retail environment directly impacts customer experience, sales, and brand perception. 
            Our professional retail cleaning services are designed specifically for Dayton's retail community, serving clothing stores, restaurants, 
            salons, fitness centers, and shopping centers with the highest standards of cleanliness and customer focus. 
            With flexible scheduling, no long-term contracts, and customer-focused cleaning approaches, 
            we help create inviting retail spaces that enhance your business success and customer satisfaction.
          </Typography>

          <Box
            component="img"
            src="https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/8643309867_00758e220a_c.webp"
            alt="Professional retail environment showcasing Gem City Cleaning Crew's retail cleaning results and customer-focused approach"
            sx={{
              width: '100%',
              maxWidth: 600,
              height: 'auto',
              borderRadius: 2,
              boxShadow: theme.shadows[4]
            }}
          />
        </Box>
      </Container>

      {/* Final CTA */}
      <Box className="commercial-cta-section" sx={{ color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Ready for Professional Retail Cleaning?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Customer-focused • Flexible scheduling • No contracts • Licensed & insured
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
              aria-label="Get free retail cleaning quote for Dayton businesses"
            >
              Get Free Retail Cleaning Quote
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
                '&:hover': {
                  borderColor: 'white',
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderWidth: 2
                }
              }}
              aria-label="Call Dayton retail cleaning services team at 937-892-4157"
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default RetailCleaning
