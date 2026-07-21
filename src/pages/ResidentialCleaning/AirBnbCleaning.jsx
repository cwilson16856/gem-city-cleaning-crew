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
  CardMedia,
  Box,
  Paper,
  Chip,
  useTheme,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import HomeIcon from '@mui/icons-material/Home'
import SpeedIcon from '@mui/icons-material/Speed'
import ScheduleIcon from '@mui/icons-material/Schedule'
import StarIcon from '@mui/icons-material/Star'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SecurityIcon from '@mui/icons-material/Security'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/ResidentialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'

const AirBnbCleaning = () => {
  const theme = useTheme()

  // Process steps for AirBnb cleaning
  const processSteps = [
    {
      title: "Book Instantly",
      description: "Call or text us with your property address, check-out time, and next check-in. We'll confirm availability and lock in your cleaning slot.",
      details: ["Same-day availability", "Flexible scheduling", "Quick confirmation", "No contracts needed"]
    },
    {
      title: "Professional Turnaround", 
      description: "Our trained team arrives promptly after checkout, completes thorough cleaning with commercial-grade supplies, and has your property guest-ready.",
      details: ["Professional team arrival", "Complete deep cleaning", "All supplies included", "Quality inspection"]
    },
    {
      title: "Guest-Ready Guarantee",
      description: "We ensure your property meets hospitality standards every time. Your guests arrive to a spotless, welcoming space that earns 5-star reviews.",
      details: ["Hospitality-grade cleaning", "Same-day completion", "5-star standards", "100% satisfaction guarantee"]
    }
  ]

  // AirBnb service benefits
  const airbnbBenefits = [
    {
      title: "Same-Day Turnaround",
      description: "Fast, reliable cleaning between guests. We understand tight schedules and work efficiently to have your AirBnb property ready for the next arrival in Dayton.",
      icon: <SpeedIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Property ready within hours"
    },
    {
      title: "Protect Your Revenue", 
      description: "Clean AirBnb properties earn better reviews, higher ratings, and more bookings. Our thorough short-term rental cleaning protects your investment and maximizes earnings.",
      icon: <AttachMoneyIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Better reviews = more bookings"
    },
    {
      title: "Flexible Scheduling",
      description: "We work around your check-in/check-out times for vacation rental turnover. Last-minute bookings? No problem. We adapt to your hosting schedule in Dayton.",
      icon: <AccessTimeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Available 7 days a week"
    },
    {
      title: "Hospitality Standards",
      description: "Our team understands guest expectations for short-term rentals. We clean to hotel standards, ensuring every surface sparkles and your AirBnb property impresses.",
      icon: <StarIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Hotel-quality results every time"
    },
    {
      title: "Reliable & Trustworthy",
      description: "Vetted, trained professionals you can trust in your rental property. We treat your AirBnb investment with the respect it deserves.",
      icon: <SecurityIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Fully insured and bonded"
    },
    {
      title: "Guest Experience Focus",
      description: "We know what AirBnb guests notice first. Fresh linens, spotless bathrooms, and welcoming spaces that create memorable stays and 5-star reviews.",
      icon: <ThumbUpIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Memorable first impressions"
    }
  ]

  // Before/After comparisons with provided images
  const beforeAfterComparisons = [
    {
      title: "Dining Area Transformation",
      description: "From cluttered and dirty to spotless and welcoming - ready for your next guests to enjoy meals.",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/airbnb-dining-table-dirty.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/airbnb-dining-table-clean.webp",
      beforeAlt: "Dirty dining table with clutter before AirBnb cleaning service",
      afterAlt: "Clean, organized dining table after professional AirBnb cleaning"
    },
    {
      title: "Bedroom Ready for Guests",
      description: "Professional bed making and room preparation that creates a welcoming first impression for every guest.",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/airbnb-bed-not-made.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/airbnb-bed-made.webp", 
      beforeAlt: "Unmade bed in AirBnb before cleaning service",
      afterAlt: "Professionally made bed ready for AirBnb guests"
    }
  ]

  // Customer testimonials for AirBnb hosts
  const airbnbTestimonials = [
    {
      name: "Sarah M.",
      text: "Gem City has been cleaning my Airbnb for over a year. They're always reliable, work around my tight schedules, and my guests consistently comment on how clean the place is. My reviews have improved significantly!",
      rating: 5,
      highlight: "AirBnb Superhost",
      property: "Downtown Dayton Condo"
    },
    {
      name: "Mike R.", 
      text: "As someone who manages multiple short-term rentals, I need cleaning that I can count on. Gem City delivers every time - professional, thorough, and they understand the hospitality business.",
      rating: 5,
      highlight: "Multi-Property Owner",
      property: "Kettering Area Rentals"
    },
    {
      name: "Jennifer L.",
      text: "The turnaround time is incredible. Guests check out at 11 AM, Gem City cleans, and the place is ready for 3 PM check-in. This reliability has allowed me to maximize my bookings.",
      rating: 5,
      highlight: "5-Star Reviews",
      property: "Oakwood Victorian"
    }
  ]

  // AirBnb cleaning FAQ
  const airbnbFAQ = [
    {
      question: "How quickly can you clean between guests?",
      answer: "We typically complete AirBnb turnovers within 2-4 hours depending on property size. For same-day turnarounds, we can often clean between an 11 AM checkout and 3 PM check-in, giving you maximum booking flexibility."
    },
    {
      question: "Do you provide same-day cleaning for last-minute bookings?",
      answer: "Yes! We understand that bookings can come in last-minute. We offer same-day cleaning services for AirBnb properties and can often accommodate requests with just a few hours notice."
    },
    {
      question: "What's included in your AirBnb cleaning service?",
      answer: "Our AirBnb cleaning covers everything: thorough bathroom cleaning, kitchen deep clean, fresh bed linens, dusting, vacuuming, mopping, trash removal, and restocking basics. We ensure your property meets hospitality standards."
    },
    {
      question: "Can you work around my check-in and check-out times?",
      answer: "Absolutely! We schedule cleaning around your guests' departure and arrival times. Just let us know your checkout/check-in schedule and we'll coordinate our cleaning to fit perfectly."
    },
    {
      question: "Do you provide linens and towels for the property?",
      answer: "We can work with your existing linens and towels, washing and replacing them as part of our service. If you need us to provide fresh linens, we can discuss that option based on your specific needs."
    },
    {
      question: "How do I schedule regular AirBnb cleanings?",
      answer: "You can call or text us with your upcoming reservations, and we'll add them to our schedule. Many hosts provide us with their booking calendar so we can proactively schedule cleanings."
    },
    {
      question: "What if guests leave the property extremely messy?",
      answer: "We've seen it all! For properties requiring extra attention due to excessive mess or damage, we'll provide an honest assessment and quote for the additional work needed to restore the property to guest-ready condition."
    },
    {
      question: "Do you offer emergency cleaning for property damage?",
      answer: "Yes, we provide emergency cleaning services for unexpected situations like spills, accidents, or damage that needs immediate attention before your next guests arrive."
    },
    {
      question: "How much does AirBnb cleaning cost?",
      answer: "Pricing depends on property size, services needed, and frequency. We offer competitive rates for regular AirBnb cleaning clients. Contact us for a custom quote based on your specific property and needs."
    },
    {
      question: "Are you insured to work in rental properties?",
      answer: "Yes, we are fully licensed, bonded, and insured. We understand the importance of protecting your investment property and carry comprehensive coverage for all our cleaning services."
    }
  ]

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Best AirBnb Cleaning Service Dayton OH | Same-Day Turnaround | Professional Short-Term Rental Cleaning | Gem City Cleaning</title>
        <meta name="title" content="Best AirBnb Cleaning Service Dayton OH | Same-Day Turnaround | Professional Short-Term Rental Cleaning" />
        <meta name="description" content="⭐ #1 Rated AirBnb Cleaning Service in Dayton, OH. Same-day turnaround, hospitality standards, flexible scheduling. Maximize your bookings with spotless properties. FREE quotes! Call 937-892-4157" />
        <meta name="keywords" content="AirBnb cleaning Dayton, short term rental cleaning Dayton OH, Airbnb cleaner Dayton, vacation rental cleaning, same day cleaning service, Airbnb turnover cleaning, hospitality cleaning Dayton, rental property cleaning, Kettering Airbnb cleaning, Centerville short term rental cleaning, Oakwood vacation rental cleaning, professional Airbnb cleaning near me, guest ready cleaning, 5 star cleaning service" />
        
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
        
        {/* Open Graph / Facebook - Enhanced */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gem City Cleaning Crew" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/airbnb-cleaning-service" />
        <meta property="og:title" content="Best AirBnb Cleaning Service Dayton OH | Same-Day Turnaround | Professional" />
        <meta property="og:description" content="⭐ #1 Rated AirBnb Cleaning in Dayton. Same-day turnaround, hospitality standards, flexible scheduling. Maximize bookings with spotless properties. FREE quotes!" />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/airbnb-bed-made.webp" />
        <meta property="og:image:alt" content="Professional AirBnb cleaning results - perfectly made bed ready for guests" />
        <meta property="og:image:width" content="1536" />
        <meta property="og:image:height" content="2048" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={new Date().toISOString()} />

        {/* Twitter Cards - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GemCityCleaning" />
        <meta name="twitter:creator" content="@GemCityCleaning" />
        <meta name="twitter:title" content="Best AirBnb Cleaning Service Dayton OH | Same-Day Turnaround" />
        <meta name="twitter:description" content="⭐ #1 Rated AirBnb Cleaning in Dayton. Same-day turnaround, hospitality standards. Maximize bookings with spotless properties!" />
        <meta name="twitter:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/airbnb-bed-made.webp" />
        <meta name="twitter:image:alt" content="Professional AirBnb cleaning results in Dayton OH" />
        
        {/* Canonical and Alternate URLs */}
        <link rel="canonical" href="https://gemcitycleaningcrew.com/airbnb-cleaning-service" />
        <link rel="alternate" hrefLang="en-us" href="https://gemcitycleaningcrew.com/airbnb-cleaning-service" />
        
        {/* JSON-LD Structured Data - Enhanced LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://gemcitycleaningcrew.com/#business",
            "name": "Gem City Cleaning Crew",
            "alternateName": "Gem City Cleaning",
            "description": "Professional AirBnb and short-term rental cleaning service in Dayton, OH with same-day turnaround, hospitality standards, and flexible scheduling for vacation rental properties.",
            "url": "https://gemcitycleaningcrew.com",
            "telephone": "+1-937-892-4157",
            "email": "info@gemcitycleaningcrew.com",
            "foundingDate": "2020",
            "priceRange": "$$",
            "currenciesAccepted": "USD",
            "paymentAccepted": "Cash, Check, Credit Card, Venmo, Zelle",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dayton",
              "addressRegion": "OH",
              "addressCountry": "US"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Dayton",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Ohio"
                }
              },
              {
                "@type": "City",
                "name": "Kettering",
                "containedInPlace": {
                  "@type": "State", 
                  "name": "Ohio"
                }
              },
              {
                "@type": "City",
                "name": "Centerville",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Ohio"
                }
              },
              {
                "@type": "City",
                "name": "Oakwood",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Ohio"
                }
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "85",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AirBnb Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "AirBnb Turnover Cleaning",
                  "description": "Same-day cleaning service for AirBnb properties between guest stays",
                  "category": "Short-Term Rental Cleaning"
                },
                {
                  "@type": "Offer",
                  "name": "Vacation Rental Deep Cleaning",
                  "description": "Comprehensive deep cleaning for vacation rental properties",
                  "category": "Vacation Rental Cleaning"
                }
              ]
            }
          })}
        </script>

        {/* Service Schema - Enhanced */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://gemcitycleaningcrew.com/airbnb-cleaning-service#service",
            "name": "AirBnb Cleaning Service",
            "alternateName": ["Short-Term Rental Cleaning", "Vacation Rental Cleaning", "AirBnb Turnover Cleaning"],
            "description": "Professional AirBnb and vacation rental cleaning service in Dayton, Ohio with same-day turnaround, hospitality standards, and flexible scheduling around guest check-ins and check-outs",
            "serviceType": "Short-Term Rental Cleaning Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gem City Cleaning Crew",
              "telephone": "+1-937-892-4157",
              "url": "https://gemcitycleaningcrew.com"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Same-Day AirBnb Cleaning",
                "description": "Fast turnaround cleaning service for AirBnb properties",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
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
            "mainEntity": airbnbFAQ.map((faq, index) => ({
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
        className="hero-section"
        sx={{
          background: `linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)), url('https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/airbnb-bed-made.webp')`,
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
            label="SAME-DAY • HOSPITALITY STANDARDS • FLEXIBLE SCHEDULING" 
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
            Best AirBnb Cleaning Service in Dayton
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
            Same-Day Turnaround • Hospitality Standards • Maximize Your Bookings
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
            Professional Cleaning Between Guests • 5-Star Results Every Time
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
              to="/quote?service=airbnb-cleaning"
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
              Get Free AirBnb Cleaning Quote
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
            {['Same-Day Service', 'Hotel-Quality Standards', 'Maximize Revenue', 'Fully Insured'].map((item) => (
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

      {/* How It Works Process */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            How Our Professional AirBnb Cleaning Service Works in Dayton
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
            Simple, reliable, and designed for busy hosts. We handle the AirBnb cleaning so you can focus on 
            providing amazing guest experiences and maximizing your bookings in the Dayton area. Our vacation rental cleaning service 
            follows industry best practices recommended by the <a href="https://www.cdc.gov/hygiene/cleaning/index.html" target="_blank" rel="noopener noreferrer" style={{ color: '#D81B60', textDecoration: 'underline' }}>CDC for professional cleaning standards</a>.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {processSteps.map((step, index) => (
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

      {/* Before/After Comparison Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="before-after">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            See the AirBnb Cleaning Transformation Results
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            These real before and after photos show the dramatic transformation our professional AirBnb cleaning service achieves in Dayton. 
            From messy guest departures to spotless, guest-ready perfection - this is why Dayton AirBnb hosts trust us with their valuable rental properties.
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
                            alt={`Before AirBnb cleaning service Dayton - ${comparison.beforeAlt}`}
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
                            alt={`After professional AirBnb cleaning Dayton OH - ${comparison.afterAlt}`}
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

      {/* AirBnb Service Benefits */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Why AirBnb Hosts in Dayton Choose Our Professional Cleaning Service
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
            More than just cleaning - we're your partner in creating exceptional guest experiences 
            that drive bookings, reviews, and revenue for your short-term rental property in Dayton, OH.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {airbnbBenefits.map((benefit, index) => (
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
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              What Dayton AirBnb Hosts Say About Our Cleaning Service
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Real reviews from successful hosts who trust our AirBnb cleaning service with their Dayton rental properties. 
              According to <a href="https://www.airbnb.com/help/article/3061/cleaning-fees-and-standards" target="_blank" rel="noopener noreferrer" style={{ color: '#D81B60', textDecoration: 'underline' }}>AirBnb's official cleaning standards</a>, 
              professional cleaning is essential for maintaining Superhost status and guest satisfaction.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {airbnbTestimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                      {testimonial.property}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Service Areas */}
      <AreasWeServe />

      {/* FAQ Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              AirBnb Cleaning Service FAQ - Dayton, OH
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Common questions about our AirBnb and short-term rental cleaning services in the Dayton area. 
              Our vacation rental cleaning service is designed to meet hospitality industry standards for guest turnover.
            </Typography>
          </Box>

          {airbnbFAQ.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`airbnb-faq-${index}`}
                id={`airbnb-faq-${index}`}
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
            Ready to Maximize Your AirBnb Revenue in Dayton?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Professional AirBnb cleaning service that protects your investment and creates memorable stays in Dayton, OH. 
            Same-day service, hospitality standards, guaranteed results for short-term rental success.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=airbnb-cleaning"
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
              Get Free AirBnb Cleaning Quote
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

export default AirBnbCleaning
