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
import ChildCareIcon from '@mui/icons-material/ChildCare'
import ToysIcon from '@mui/icons-material/Toys'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import BedIcon from '@mui/icons-material/Bed'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import WindowIcon from '@mui/icons-material/Window'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'
import SecurityIcon from '@mui/icons-material/Security'
import ScienceIcon from '@mui/icons-material/Science'
import BathroomIcon from '@mui/icons-material/Bathroom'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/CommercialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'
import QuoteForm from '../../components/QuoteForm'

const DaycareCleaning = () => {
  const theme = useTheme()
  const [quoteFormOpen, setQuoteFormOpen] = useState(false)

  const handleOpenQuoteForm = () => {
    setQuoteFormOpen(true)
  }

  const handleCloseQuoteForm = () => {
    setQuoteFormOpen(false)
  }

  // Daycare facility areas
  const facilityTypes = [
    {
      title: "Play Areas & Classrooms",
      description: "Thorough cleaning and sanitization of play spaces and learning environments",
      icon: <ToysIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Toy sanitization", "Floor disinfection", "Surface cleaning", "Safe cleaning products"],
      popular: true,
      specialties: ["Indoor playgrounds", "Activity areas", "Learning spaces", "Play mats"]
    },
    {
      title: "Nap & Rest Areas",
      description: "Specialized cleaning for sleeping and quiet time spaces",
      icon: <BedIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Mat sanitization", "Bedding area cleaning", "Quiet space maintenance", "Allergen reduction"],
      popular: true,
      specialties: ["Sleeping areas", "Quiet corners", "Rest spaces", "Comfort zones"]
    },
    {
      title: "Dining & Kitchen Areas",
      description: "Food-safe cleaning for meal and snack spaces",
      icon: <RestaurantIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Table sanitization", "High chair cleaning", "Floor sanitization", "Food prep areas"],
      popular: false,
      specialties: ["Eating areas", "Meal prep spaces", "Snack zones", "Kitchen facilities"]
    },
    {
      title: "Bathrooms & Changing Areas",
      description: "Thorough sanitization of bathroom facilities and diaper changing stations",
      icon: <BathroomIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Toilet cleaning", "Sink sanitization", "Changing table disinfection", "Supply restocking"],
      popular: false,
      specialties: ["Child bathrooms", "Changing stations", "Hand washing areas", "Potty training spaces"]
    },
    {
      title: "Common Areas & Hallways",
      description: "Regular cleaning of shared spaces and corridors",
      icon: <HomeRepairServiceIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Floor cleaning", "Wall washing", "Door handle sanitization", "High-touch surfaces"],
      popular: false,
      specialties: ["Entryways", "Corridors", "Parent areas", "Reception spaces"]
    }
  ]

  // Cleaning areas
  const cleaningAreas = [
    {
      title: "Play & Learning Areas",
      icon: <ToysIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Complete sanitization of toys, equipment, and play surfaces"
    },
    {
      title: "Sleeping Areas", 
      icon: <BedIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Thorough cleaning of nap mats, rest areas, and quiet spaces"
    },
    {
      title: "Restrooms & Changing",
      icon: <BathroomIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Sanitization of bathrooms and diaper changing stations"
    },
    {
      title: "Kitchen & Dining",
      icon: <RestaurantIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Food-safe cleaning of eating areas and meal prep spaces"
    },
    {
      title: "Common Areas",
      icon: <HomeRepairServiceIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Regular cleaning of hallways, entrances, and shared spaces"
    },
    {
      title: "Staff Areas",
      icon: <LocalLibraryIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Cleaning of offices, break rooms, and administrative spaces"
    }
  ]

  // Service features
  const serviceFeatures = [
    {
      title: "Child-Safe Products",
      description: "We use eco-friendly, non-toxic cleaning products that are safe for children of all ages.",
      icon: <SecurityIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "/images/legacy/Plan.png"
    },
    {
      title: "Flexible Scheduling",
      description: "We work around your daycare hours with evening and weekend cleaning options.",
      icon: <AccessTimeIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "/images/legacy/No-Contracts.png"
    },
    {
      title: "Trained Professionals",
      description: "Our staff is trained in daycare facility cleaning protocols and safety procedures.",
      icon: <ChildCareIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "/images/legacy/Trained.png"
    }
  ]

  // Table of Contents items
  const tocItems = [
    { text: '👶 Daycare Cleaning Services Dayton', href: '#dayton-daycare-cleaning-services' },
    { text: '⭐ Daycare Client Testimonials', href: '#testimonials' },
    { text: '✨ Why Choose Professional Daycare Cleaning', href: '#why-choose-us' },
    { text: '📍 Service Areas & Coverage', href: '#service-areas' },
    { text: '📋 What\'s Included in Daycare Cleaning', href: '#what-included' },
    { text: '❓ Daycare Cleaning FAQ', href: '#faq' }
  ]

  // FAQ data
  const faqData = [
    {
      question: "What cleaning products do you use in daycare facilities?",
      answer: "We exclusively use child-safe, eco-friendly cleaning products that are non-toxic yet effective at sanitizing and disinfecting. All our products are specifically chosen for use in childcare environments."
    },
    {
      question: "How do you handle toy cleaning and sanitization?",
      answer: "We follow a comprehensive toy cleaning protocol that includes sanitizing with child-safe disinfectants, proper drying procedures, and rotation systems to ensure all toys are regularly cleaned. We pay special attention to frequently used items and mouthed toys."
    },
    {
      question: "When do you perform the cleaning services?",
      answer: "We offer flexible scheduling options including after-hours, evenings, and weekends to minimize disruption to your daycare operations. We work with each facility to create an optimal cleaning schedule."
    },
    {
      question: "How do you ensure the safety of children around cleaning activities?",
      answer: "We maintain strict protocols about cleaning product storage, never leave cleaning supplies unattended, and ensure all products are properly dried and stored before children return to cleaned areas."
    },
    {
      question: "What measures do you take to prevent the spread of illness?",
      answer: "We use hospital-grade, child-safe disinfectants on high-touch surfaces, implement color-coded cleaning systems to prevent cross-contamination, and follow CDC guidelines for childcare facility sanitization."
    },
    {
      question: "How do you handle nap area and mat cleaning?",
      answer: "We thoroughly sanitize nap mats, rest areas, and bedding storage spaces using appropriate disinfectants. We pay special attention to proper drying and storage to prevent mold and mildew."
    },
    {
      question: "What special procedures do you follow for infant and toddler areas?",
      answer: "We use extra gentle, yet effective cleaning products in infant areas, pay special attention to crawling spaces and mouthed surfaces, and follow strict sanitization protocols for changing stations and feeding areas."
    },
    {
      question: "How often should a daycare facility be professionally cleaned?",
      answer: "We recommend daily cleaning of high-touch surfaces and weekly deep cleaning for most daycare facilities. However, we can customize cleaning schedules based on your facility's specific needs and requirements."
    },
    {
      question: "Do you provide emergency cleaning services?",
      answer: "Yes, we offer emergency cleaning services for unexpected situations like spills, accidents, or illness outbreaks. We understand the importance of maintaining a clean, safe environment for children."
    },
    {
      question: "What areas receive the most attention during cleaning?",
      answer: "We focus heavily on high-touch surfaces, play areas, changing stations, eating areas, and sleeping spaces. These areas require the most frequent and thorough sanitization to maintain a healthy environment."
    }
  ]

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="/images/legacy/gautam-arora-78Ae6N7rNvI-unsplash-scaled.webp" fetchPriority="high" />
        <title>Daycare Cleaning Services Dayton | Gem City Cleaning</title>
        <meta 
          name="description" 
          content="Professional daycare cleaning services in Dayton. Child-safe, thorough cleaning that creates a healthy environment for children. Licensed and insured cleaners."
        />
      </Helmet>

      {/* Hero Section */}
      <Box
        className="hero-section commercial-hero-section"
        sx={{
          background: `linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)), url('/images/legacy/gautam-arora-78Ae6N7rNvI-unsplash-scaled.webp')`,
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
            label="LICENSED • INSURED • CHILD-SAFE PRODUCTS" 
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
            Daycare Cleaning Services
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
            Safe & Professional Cleaning for Childcare Environments
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
            Play Areas • Nap Rooms • Dining Spaces • Bathrooms
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleOpenQuoteForm}
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
              Get Daycare Cleaning Quote Today!
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

      {/* Main Content */}
      <Container maxWidth="lg">
        {/* Facility Types Grid */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            Professional Daycare Cleaning Services
          </Typography>

          <Grid container spacing={4}>
            {facilityTypes.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box className="commercial-service-icon">
                      {service.icon}
                    </Box>
                    
                    <Typography variant="h5" component="h3" className="commercial-service-title" sx={{ mb: 2, fontWeight: 700 }}>
                      {service.title}
                    </Typography>
                    
                    <Typography variant="body1" className="commercial-service-description" sx={{ flex: 1, mb: 2 }}>
                      {service.description}
                    </Typography>
                    
                    <Box sx={{ textAlign: 'left', mt: 2 }}>
                      {service.features.map((feature, idx) => (
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
        </Box>

        {/* Why Choose Us Section */}
        <Box sx={{ py: 8 }} id="why-choose-us">
          <Typography variant="h3" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Why Choose Our Daycare Cleaning Services?
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }} className="commercial-service-features">
            {serviceFeatures.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="commercial-areas-grid">
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box
                      component="img"
                      src={feature.image}
                      alt={`${feature.title} - Daycare cleaning feature`}
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
            Our daycare cleaning plans are customized to meet your specific needs, schedule, and budget. 
            We understand the importance of maintaining a clean, safe environment for children.
          </Typography>
        </Box>

        {/* Detailed Service Information */}
        <Box sx={{ py: 8 }} id="what-included">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            What's Included in Our Daycare Cleaning Services?
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            Our comprehensive daycare cleaning services cover every area of your facility. 
            We use child-safe, eco-friendly cleaning products and follow strict protocols to maintain a healthy environment.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {cleaningAreas.map((area, index) => (
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
        </Box>

        {/* Service Areas Section */}
        <Box id="service-areas" sx={{ py: 8 }}>
          <AreasWeServe />
        </Box>

        {/* FAQ Section */}
        <Box sx={{ py: 8 }} id="faq">
          <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Frequently Asked Questions
          </Typography>

          {faqData.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <Typography variant="h6" component="h3">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      {/* Final CTA Section */}
      <Box 
        className="commercial-cta-section" 
        sx={{ 
          color: 'white', 
          py: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(rgba(24, 24, 24, 0.9), rgba(24, 24, 24, 0.9)), url('/images/legacy/gautam-arora-78Ae6N7rNvI-unsplash-scaled.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Ready to Partner with Professional Daycare Cleaners?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Licensed, insured, and experienced cleaning team serving Dayton daycare facilities.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleOpenQuoteForm}
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
              aria-label="Get free daycare cleaning quote for Dayton facilities"
            >
              Get Free Daycare Cleaning Quote
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
              aria-label="Call Dayton daycare cleaning services team at 937-892-4157"
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Quote Form Dialog */}
      <QuoteForm 
        open={quoteFormOpen}
        onClose={handleCloseQuoteForm}
        title="Get Your Free Daycare Cleaning Estimate!"
      />
    </>
  )
}

export default DaycareCleaning
