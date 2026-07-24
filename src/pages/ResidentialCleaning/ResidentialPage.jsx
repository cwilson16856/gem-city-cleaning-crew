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
import PersonIcon from '@mui/icons-material/Person'
import KitchenIcon from '@mui/icons-material/Kitchen'
import BedIcon from '@mui/icons-material/Bed'
import LivingIcon from '@mui/icons-material/Living'
import BathroomIcon from '@mui/icons-material/Bathroom'
import StairsIcon from '@mui/icons-material/Stairs'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import GroupsIcon from '@mui/icons-material/Groups'
import AssignmentIcon from '@mui/icons-material/Assignment'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import RepeatIcon from '@mui/icons-material/Repeat'
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined'
import ApartmentIcon from '@mui/icons-material/Apartment'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/ResidentialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'

const ResidentialPage = () => {
  const theme = useTheme()

  // Primary Service Offerings - positioned high up
  const primaryServices = [
    {
      title: "Deep Cleaning",
      description: "Comprehensive one-time cleaning for special occasions or first-time service",
      icon: <AutoAwesomeIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Complete top-to-bottom clean", "Inside appliances & cabinets", "Baseboards & ceiling fans", "Perfect for special events"],
      popular: true,
      link: "/deep-cleaning"
    },
    {
      title: "Recurring Cleaning",
      description: "Regular weekly, bi-weekly, or monthly cleaning to maintain your home",
      icon: <RepeatIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Weekly, bi-weekly, or monthly", "Same cleaner each visit", "Customizable room selection", "No long-term contracts"],
      popular: true,
      link: "/recurring-cleaning-service"
    },
    {
      title: "Kitchen Cleaning",
      description: "Deep kitchen cleaning with appliance care, grease removal, and sanitization",
      icon: <KitchenIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["All appliances cleaned inside/out", "Grease removal & degreasing", "Food-safe sanitization", "Cabinet & drawer cleaning"],
      popular: false,
      link: "/kitchen-cleaning-services"
    },
    {
      title: "Bathroom Cleaning",
      description: "Deep bathroom cleaning with sanitization, mold removal, and grout restoration",
      icon: <BathroomIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Complete sanitization", "Mold & mildew removal", "Grout & tile restoration", "All fixtures deep cleaned"],
      popular: false,
      link: "/bathroom-cleaning-services"
    },
    {
      title: "Apartment Cleaning",
      description: "Specialized cleaning for apartments, move-in/out, and rental properties",
      icon: <ApartmentIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Move-in/out cleaning", "Get your deposit back", "Student housing specialists", "Same-day service available"],
      popular: false,
      link: "/apartment-cleaning"
    },
    {
      title: "Condo Cleaning",
      description: "Luxury condo cleaning with HOA compliance and property value protection",
      icon: <ApartmentIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Luxury finish care", "HOA compliant service", "Property value protection", "Premium products & equipment"],
      popular: false,
      link: "/condo-cleaning"
    },
    {
      title: "Move In/Out Cleaning",
      description: "Specialized cleaning for moving transitions and new beginnings",
      icon: <MovingOutlinedIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Empty or full home cleaning", "Inside all appliances", "Cabinet interiors", "Ready for new occupants"],
      popular: false,
      link: "/move-in-out-cleaning"
    },
    {
      title: "AirBnb Cleaning",
      description: "Same-day turnaround cleaning for short-term rental properties",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Same-day service available", "Hospitality-grade standards", "Guest-ready guarantee", "Flexible scheduling"],
      popular: false,
      link: "/airbnb-cleaning-service"
    }
  ]

  // FAQ data from Elementor JSON
  const faqData = [
    {
      question: "What is included in a standard house cleaning service?",
      answer: "A standard house cleaning service typically includes cleaning bathrooms, kitchens, living areas, and bedrooms. This includes tasks such as dusting, vacuuming, sweeping, mopping, cleaning surfaces, and changing bed sheets. We also include additional tasks such as fridge and oven clean outs for additional fees."
    },
    {
      question: "Are cleaning supplies provided by your House cleaning services?",
      answer: "Yes! We have our own tools and supplies. If there is something you are sensitive to and have something different you'd want us to use - we can absolutely do that as well."
    },
    {
      question: "Are you able to customize your house cleaning services?",
      answer: "Yes, we offer customizable cleaning plans to fit your specific needs. This may include adding or removing certain tasks or adjusting the frequency of cleanings."
    },
    {
      question: "How often should you use house cleaning services?",
      answer: "This can depend on factors such as the size of your home, the number of people living in it, and how often you use certain areas. A general guideline is to have a deep cleaning done once every 3-6 months and regular cleanings done weekly, bi-weekly, or monthly."
    },
    {
      question: "What happens if I'm not satisfied with your house cleaning services?",
      answer: "We do offer a satisfaction guarantee and will work with you to address any issues. It's important to communicate any concerns with us as soon as possible so they can be resolved. You can call, text, or email us at 937-892-4157."
    },
    {
      question: "Are your cleaners insured and bonded?",
      answer: "Yes we are. If you need proof, let us know and we will gladly send it to you."
    },
    {
      question: "Do I need to be home during the cleaning service?",
      answer: "This is up to your personal preference. Many people prefer to be home during the first cleaning to meet the cleaners and show them around, but it's not necessary for subsequent cleanings. Some people prefer to give us a key or code to access the home while they are away."
    },
    {
      question: "What if I have pets?",
      answer: "We are pet-friendly!"
    },
    {
      question: "How do I schedule house cleaning services?",
      answer: "You can request a quote right here in on our website. You can also call, text, or email us and we'd gladly set something up for you! :)"
    },
    {
      question: "Is it necessary to tip the cleaners?",
      answer: "We pay our cleaners well. However, you're more than welcome to if you'd like, and whatever amount you think you'd give is up to you. We have also accepted gifts, and old appliances. It is up to you. :)"
    },
    {
      question: "What is the cost of House Cleaning Services?",
      answer: "The price of house cleaning services can vary depending on various factors such as the size of your home, the number of rooms, the type of cleaning services required, and the frequency of cleaning. Usually it is best to schedule a walk-through to get an accurate quote."
    }
  ]

  // Service features from Elementor JSON - moved lower on page
  const serviceFeatures = [
    {
      title: "Custom Cleaning Plans",
      description: "We'll work with you to create a cleaning plan that works best for you. We'll simply add, or take off any room that you'd like.",
      icon: <AssignmentIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "/images/legacy/Plan.png"
    },
    {
      title: "No Contracts",
      description: "We don't like contracts as much as you don't. You can keep us on for as little or as long as you like!",
      icon: <PersonIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "/images/legacy/No-Contracts.png"
    },
    {
      title: "Trained Employees",
      description: "Our employees go through 3 months of training in order to keep your home clean consistently at the highest level.",
      icon: <GroupsIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "/images/legacy/Trained.png"
    }
  ]

  // Room cleaning details from Elementor JSON
  const roomServices = [
    {
      title: "Kitchens",
      icon: <KitchenIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Complete kitchen cleaning including appliances, countertops, sink, and floors"
    },
    {
      title: "Bedrooms", 
      icon: <BedIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Thorough bedroom cleaning with dusting, bed making, and floor care"
    },
    {
      title: "Living Spaces",
      icon: <LivingIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Comprehensive living area cleaning including furniture and entertainment areas"
    },
    {
      title: "Bathrooms",
      icon: <BathroomIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Deep bathroom sanitization including fixtures, mirrors, and floors"
    },
    {
      title: "Hallways & Foyers",
      icon: <StairsIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Complete cleaning of entryways, hallways, and common passage areas"
    },
    {
      title: "Other Areas",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Additional spaces like laundry rooms, pantries, closets, and more"
    }
  ]

  // Table of Contents items
  const tocItems = [
    { text: '🏠 Choose Your Dayton House Cleaning Services', href: '#dayton-house-cleaning-services' },
    { text: '⭐ Customer Reviews & Testimonials', href: '#testimonials' },
    { text: '✨ Experience The Difference', href: '#experience-difference' },
    { text: '📍 Service Areas & Coverage', href: '#service-areas' },
    { text: '📋 What\'s Included in Our Service', href: '#what-included' },
    { text: '❓ Frequently Asked Questions', href: '#faq' }
  ]

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="/images/legacy/clay-elliot-1by_GbwEMwc-unsplash-2.jpg" fetchPriority="high" />
        <title>Top 3 Dayton House Cleaning Services | No Contracts | Custom Plans | Gem City Cleaning</title>
        <meta name="description" content="Expert Dayton house cleaning services with 3-month trained staff, custom plans, and no contracts. Kitchens, bathrooms, bedrooms, and more. Free quotes available!" />
        <meta name="keywords" content="Dayton house cleaning, residential cleaning, custom cleaning plans, no contracts, professional cleaners, home cleaning service" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/residential" />
        <meta property="og:title" content="Top 3 Dayton House Cleaning Services | Gem City Cleaning" />
        <meta property="og:description" content="Expert Dayton house cleaning services with 3-month trained staff, custom plans, and no contracts. Free quotes available!" />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top 3 Dayton House Cleaning Services | Gem City Cleaning" />
        <meta name="twitter:description" content="Expert Dayton house cleaning services with 3-month trained staff, custom plans, and no contracts." />
        
        <link rel="canonical" href="https://gemcitycleaningcrew.com/residential" />
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Residential House Cleaning Services",
            "description": "Professional Dayton house cleaning services with custom plans, no contracts, and 3-month trained staff",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gem City Cleaning Crew",
              "telephone": "937-892-4157"
            },
            "areaServed": "Dayton, OH and surrounding areas",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "House Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Kitchen Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bathroom Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bedroom Cleaning"
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
        className="hero-section residential-hero-section"
        sx={{
          background: `linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)), url('/images/legacy/clay-elliot-1by_GbwEMwc-unsplash-2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          minHeight: { xs: 600, md: 700 }
        }}
      >
        <Container maxWidth="lg" className="hero-content residential-hero-content">
          <Chip 
            label="PROFESSIONAL • RELIABLE • TRUSTED" 
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
            Dayton House Cleaning Services
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
            Gem City Cleaning Crew
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
            Get A Quote Today!
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
              Request A Quote Today!
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


      {/* Primary Services Section - Positioned High Up */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="dayton-house-cleaning-services">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Choose Your Dayton House Cleaning Services
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            Professional Dayton house cleaning services tailored to your specific needs and schedule
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {primaryServices.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="residential-service-card" sx={{ height: '100%', position: 'relative', overflow: 'visible' }}>
                {service.popular && (
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
                <CardActionArea component={Link} to={service.link} sx={{ height: '100%', borderRadius: '12px' }}>
                  <CardContent sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box className="residential-service-icon">
                      {service.icon}
                    </Box>
                    
                    <Typography variant="h5" component="h3" className="residential-service-title">
                      {service.title}
                    </Typography>
                    
                    <Typography variant="body1" className="residential-service-description" sx={{ flex: 1 }}>
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
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonial Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="testimonials">
        <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Dayton House Cleaning Services Reviews
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
          Revitalize Your Home with Gem City Cleaning Crew's Top-Tier Dayton House Cleaning Services
        </Typography>

        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
          Looking for reliable and thorough Dayton house cleaning services? Look no further than Gem City Cleaning Crew! 
          Our team of experienced and dedicated cleaners will leave your home looking spotless and sparkling clean. 
          From dusting and vacuuming to deep cleaning and organizing, we offer a wide range of customizable home cleaning services to suit your needs. 
          We use only the highest-quality cleaning products and equipment to ensure that your home is not only clean but also safe and healthy. 
          According to the <a href="https://www.cdc.gov/hygiene/index.html" target="_blank" rel="nofollow noopener" style={{ color: '#D81B60', textDecoration: 'underline' }}>CDC's hygiene guidelines</a>, 
          maintaining a clean home environment is essential for family health and wellbeing.
          Here's a word from one our current customers:
        </Typography>

        {/* Featured Testimonial */}
        <Box sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}>
          <Paper elevation={4} className="residential-testimonial-card" sx={{ p: 4, textAlign: 'center' }}>
            <Box sx={{ mb: 2 }}>
              <Rating value={5} readOnly size="large" sx={{ color: '#FFD700' }} />
            </Box>
            <Typography variant="h6" sx={{ mb: 2, fontStyle: 'italic', lineHeight: 1.6 }}>
              "Gem City Cleaning does a very professional and thorough job. They are always on time, 
              and clean to our expectations. Staff is respectful and pricing is fair. 
              I highly recommend them for anyone looking for a house cleaner."
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
              - Dustin T.
            </Typography>
          </Paper>
        </Box>

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
            Request A Quote
          </Button>
        </Box>
      </Container>

      {/* Service Overview */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Enjoy a Clean Home with Our Dayton House Cleaning Services
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            Since 2017, Gem City Cleaning Crew has been delivering exceptional Dayton house cleaning services and we cover a 30 mile radius around Dayton, 
            earning a loyal client base through our consistent and thorough approach. We offer customizable house cleaning plans to fit your unique needs and schedule, 
            ensuring that you receive the level of service you expect each time by having:
          </Typography>

          {/* Service Features */}
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {serviceFeatures.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8]
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box
                      component="img"
                      src={feature.image}
                      alt={`${feature.title} - Dayton house cleaning services feature for custom home cleaning plans`}
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
            Our cleaning plans are fully customizable which means that you can add or take off rooms that we clean and the frequency that meets your needs.
          </Typography>
        </Container>
      </Box>

      {/* Experience Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="experience-difference">
        <Typography 
          variant="h3" 
          component="h2" 
          sx={{ 
            mb: 4, 
            textAlign: 'center',
            fontWeight: 800,
            color: theme.palette.primary.main
          }}
        >
          Experience The Difference with Our Dayton House Cleaning Services!
        </Typography>

        <Typography variant="body1" sx={{ mb: 6, maxWidth: 900, mx: 'auto', lineHeight: 1.7 }}>
          Gem City Cleaning Crew is a locally owned and operated Dayton house cleaning services company that has been in business since 2017. 
          We take pride in our trained housekeepers in Dayton who go through a rigorous 3-month training program to ensure they are equipped with the necessary skills and knowledge 
          to provide top-quality cleaning services to our clients. We also understand the importance of consistency and try our best to send the same cleaner 
          to a client's home every time to build a comfortable relationship and ensure a thorough and consistent clean. At Gem City Cleaning Crew, 
          we treat your home as if it were our own and strive to exceed your expectations with every visit. 
          Our professional cleaning crew follows industry best practices as recommended by the <a href="https://www.issa.com/articles/residential-cleaning-best-practices" target="_blank" rel="nofollow noopener" style={{ color: '#D81B60', textDecoration: 'underline' }}>International Sanitary Supply Association</a> 
          to ensure the highest standards of cleanliness and safety for our Dayton house cleaning services.
        </Typography>


        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/quote"
            sx={{
              fontSize: '1.1rem',
              px: 4,
              py: 1.5,
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                color: 'white'
              }
            }}
          >
            Request A Quote
          </Button>
        </Box>
      </Container>

      {/* Detailed Service Information */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="what-included">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            What Does Our Dayton House Cleaning Services Include?
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            Wondering what's included in our comprehensive Dayton house cleaning services? We provide detailed, 
            professional house cleaners Dayton OH residents trust for consistent, high-quality results. Our experienced cleaners follow a thorough 
            checklist to ensure consistent, high-quality results every time with our reliable maid service Dayton families love.
            Our trained housekeepers specialize in custom cleaning plans with no contracts, making us the top choice for Dayton house cleaning services.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {roomServices.map((room, index) => (
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
                  <CardContent>
                    <Box 
                      sx={{
                        width: 60,
                        height: 60,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2
                      }}
                    >
                      {room.icon}
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
                      {room.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {room.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

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
                Want to See Our Complete Cleaning Checklist?
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#525252', fontSize: '1.1rem' }}>
                Get the detailed room-by-room checklist our professional cleaners use to ensure 
                nothing gets missed in your home cleaning service. See exactly what tasks we complete in each area.
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
                    color: 'white',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                View Complete Cleaning Checklist
              </Button>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* Video Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Card className="residential-video-container" sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <video
              controls
              style={{ width: '100%', height: 'auto' }}
              poster="/images/legacy/katja-rooke-77JACslA8G0-unsplash-scaled.jpg"
              aria-label="Meet the Gem City Cleaning Crew professional team"
            >
              <source src="/images/legacy/Gem-City-Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Card>
        </Box>
      </Container>

      {/* FAQ Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="faq">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box
              component="img"
              src="/images/legacy/FAQ.png"
              alt="Frequently asked questions about professional Dayton house cleaning services and maid service options"
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
              FAQ for Dayton House Cleaning Services
            </Typography>
          </Box>

          {faqData.map((faq, index) => (
            <Accordion key={index} className="residential-faq-accordion">
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
            Excellence in Dayton House Cleaning Services
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, maxWidth: 900, mx: 'auto', lineHeight: 1.7 }}>
            Gem City Cleaning Crew is a Dayton house cleaning services provider, offering a wide range of customized cleaning solutions 
            tailored to meet the specific needs of every home. With a commitment to excellence and attention to detail, 
            our professional team ensures that each corner of your home shines, from the kitchen and bathrooms to the living areas and bedrooms. 
            We pride ourselves on using eco-friendly cleaning products that are safe for families and pets, providing not just a clean home 
            but also peace of mind. Whether you're looking for a one-time deep clean or regular maintenance, 
            Gem City Cleaning Crew is your reliable partner in maintaining a pristine and healthy living environment with our no-contract maid service.
          </Typography>

          <Box
            component="img"
            src="/images/legacy/naomi-hebert-MP0bgaS_d1c-unsplash-2-scaled.jpg"
            alt="Beautiful clean home interior showcasing professional Dayton house cleaning services results and quality workmanship"
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
      <Box className="residential-cta-section" sx={{ color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Ready for Professional House Cleaning?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Experience our custom cleaning plans with no contracts and 3-month trained staff.
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
              aria-label="Get free quote for Dayton house cleaning services with no contracts"
            >
              Get Free Quote (No Contracts!)
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
              aria-label="Call Dayton house cleaning services team at 937-892-4157"
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default ResidentialPage 