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
import BusinessIcon from '@mui/icons-material/Business'
import StorefrontIcon from '@mui/icons-material/Storefront'
import SchoolIcon from '@mui/icons-material/School'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import VerifiedIcon from '@mui/icons-material/Verified'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SecurityIcon from '@mui/icons-material/Security'
import WindowIcon from '@mui/icons-material/Window'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'

// Import the styling
import '../../../../styles/homepages/HomePage.css'
import '../../../../styles/pages/CommercialPage.css'

// Components
import AreasWeServe from '../../../../components/AreasWeServe'
import TableOfContents from '../../../../components/TableOfContents'
import QuoteForm from '../../../../components/QuoteForm'

const BeavercreekCommercialPage = () => {
  const theme = useTheme()
  const [quoteFormOpen, setQuoteFormOpen] = useState(false)

  const handleOpenQuoteForm = () => {
    setQuoteFormOpen(true)
  }

  const handleCloseQuoteForm = () => {
    setQuoteFormOpen(false)
  }

  // Featured testimonial content
  const featuredTestimonial = {
    text: "Gem City Cleaning has transformed our office space at The Greene. Their attention to detail and professional approach has consistently impressed both our staff and clients. They understand the high standards expected in Beavercreek's business community and deliver excellence every time.",
    author: "Michael R., Property Manager at The Greene",
    rating: 5
  }

  // Service areas text
  const serviceAreasText = {
    title: "Beavercreek Commercial Cleaning Coverage",
    description: "Our commercial cleaning services cover all of Beavercreek's major business districts and surrounding areas:",
    areas: [
      "The Greene Town Center",
      "Pentagon Boulevard Business District",
      "Fairfield Commons Area",
      "North Fairfield Road Corridor",
      "Dayton-Xenia Road Business District",
      "Colonel Glenn Highway Commercial Area",
      "WPAFB Adjacent Business Parks",
      "Beavercreek Township"
    ]
  }

  // Table of Contents items
  const tocItems = [
    { text: '🏢 Elite Beavercreek Commercial Cleaning', href: '#beavercreek-commercial-cleaning-services' },
    { text: '⭐ Beavercreek Business Reviews', href: '#testimonials' },
    { text: '✨ Why Choose Beavercreek\'s Top Commercial Cleaners', href: '#why-choose-us' },
    { text: '📍 Beavercreek Service Areas', href: '#service-areas' },
    { text: '📋 Commercial Cleaning Services Included', href: '#what-included' },
    { text: '❓ Beavercreek Commercial Cleaning FAQ', href: '#faq' }
  ]

  // Primary Commercial Services - positioned high up
  const primaryServices = [
    {
      title: "Office Cleaning",
      description: "Professional office cleaning services to maintain a productive work environment",
      icon: <BusinessIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Daily, weekly, or monthly", "Workstation sanitization", "Conference room cleaning", "Break room & kitchen areas"],
      popular: true,
      link: "/office-cleaning"
    },
    {
      title: "Retail Cleaning",
      description: "Keep your retail space spotless to create the best customer experience",
      icon: <StorefrontIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Customer area cleaning", "Dressing room sanitization", "Floor care & maintenance", "Window & glass cleaning"],
      popular: true,
      link: "/retail-cleaning"
    },
    {
      title: "One-Time Deep Cleaning for Commercial",
      description: "Comprehensive deep cleaning services for commercial spaces - perfect for special events, move-ins, or quarterly cleanings",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Complete deep sanitization", "Equipment & fixture cleaning", "Floor stripping & waxing", "Window & glass detailing"],
      popular: false,
      link: "/commercial-one-time-cleaning"
    },
    {
      title: "Daycare Cleaning",
      description: "Safe and thorough cleaning for daycare centers and childcare facilities",
      icon: <SchoolIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Child-safe products", "Play area sanitization", "Nap room cleaning", "Food-safe protocols"],
      popular: false,
      link: "/school-cleaning"
    },
    {
      title: "Apartment Building Cleaning",
      description: "Professional cleaning services for apartment buildings and multi-unit residential complexes",
      icon: <CorporateFareIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Common area cleaning", "Laundry room maintenance", "Hallway & stair cleaning", "Trash removal"],
      popular: false,
      link: "/apartment-building-cleaning"
    },
    {
      title: "Industrial Cleaning",
      description: "Heavy-duty cleaning for warehouses, manufacturing, and industrial facilities",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Equipment degreasing", "Floor coating maintenance", "Safety compliance", "Specialized equipment"],
      popular: false,
      link: "/industrial-cleaning"
    }
  ]

  // FAQ data for commercial cleaning
  const faqData = [
    {
      question: "Which areas of Beavercreek do you service?",
      answer: "We provide commercial cleaning services throughout all of Beavercreek, including The Greene, Pentagon Boulevard, Fairfield Commons area, and all surrounding business districts. We serve the entire 45431, 45432, and 45434 zip codes."
    },
    {
      question: "What types of Beavercreek businesses do you clean?",
      answer: "We clean all types of Beavercreek commercial properties including offices near WPAFB, retail stores at The Greene, medical facilities on Pentagon Boulevard, educational centers, and corporate buildings throughout Beavercreek. Our team is experienced with various commercial environments and their specific requirements."
    },
    {
      question: "Do you provide cleaning supplies and equipment?",
      answer: "Yes, we bring all necessary commercial-grade cleaning supplies and equipment. We use eco-friendly products that are effective yet safe for your Beavercreek business environment and employees."
    },
    {
      question: "How flexible is your scheduling for Beavercreek businesses?",
      answer: "We offer highly flexible scheduling for Beavercreek businesses, including evenings, weekends, and holidays. We understand the unique operating hours of different businesses in The Greene, Pentagon Boulevard, and other Beavercreek areas, and adjust our cleaning schedule accordingly."
    },
    {
      question: "Are you insured and bonded for commercial work in Beavercreek?",
      answer: "Yes, we are fully licensed, insured, and bonded specifically for commercial cleaning work in Beavercreek and surrounding areas. We can provide certificates of insurance for your property management or leasing requirements."
    },
    {
      question: "What makes your Beavercreek commercial cleaning services different?",
      answer: "As a local Beavercreek cleaning service, we understand the unique needs of our business community. We offer personalized service plans, consistent staff assignments, and thorough quality inspections. Our team is familiar with Beavercreek's business standards and requirements."
    },
    {
      question: "Do you offer emergency cleaning services in Beavercreek?",
      answer: "Yes, we provide rapid-response emergency cleaning services for Beavercreek businesses. Whether it's a spill at your retail store or unexpected cleaning needs at your office, we're just minutes away. Contact us at 937-892-4157 for immediate assistance."
    },
    {
      question: "Can you customize cleaning plans for Beavercreek businesses?",
      answer: "Absolutely! We create customized cleaning plans based on your Beavercreek facility's specific needs, size, traffic patterns, and budget requirements. We'll work with you to develop a plan that maintains your professional image while respecting your bottom line."
    }
  ]

  // Service features for commercial cleaning
  const serviceFeatures = [
    {
      title: "Licensed & Insured",
      description: "Fully licensed, insured, and bonded with commercial-grade coverage for your peace of mind and property protection.",
      icon: <SecurityIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "/images/legacy/Plan.png"
    },
    {
      title: "Flexible Scheduling",
      description: "We work around your business hours with evening, weekend, and holiday cleaning options available.",
      icon: <AccessTimeIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "/images/legacy/No-Contracts.png"
    },
    {
      title: "Trained Professionals",
      description: "Our commercial cleaning staff undergo specialized training for different business environments and safety protocols.",
      icon: <VerifiedIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "/images/legacy/Trained.png"
    }
  ]

  // Commercial cleaning areas
  const commercialAreas = [
    {
      title: "Office Spaces",
      icon: <BusinessIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Workstations, conference rooms, reception areas, and executive offices"
    },
    {
      title: "Restrooms", 
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Complete sanitization with restocking and maintenance"
    },
    {
      title: "Break Rooms",
      icon: <StorefrontIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Kitchen areas, appliances, and eating spaces"
    },
    {
      title: "Floors & Carpets",
      icon: <HomeRepairServiceIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Vacuuming, mopping, floor waxing, and carpet deep cleaning"
    },
    {
      title: "Windows & Glass",
      icon: <WindowIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Interior and exterior window cleaning and glass surfaces"
    },
    {
      title: "Common Areas",
      icon: <CorporateFareIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Lobbies, hallways, elevators, and waiting areas"
    }
  ]

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="/images/legacy/beavercreek-sign.webp" fetchPriority="high" />
        <title>7+ Elite Commercial Cleaning Services in Beavercreek | Trusted by 100+ Local Businesses</title>
        <meta name="description" content="Unleash pristine workspaces with Beavercreek's premier commercial cleaning service. Trusted by 100+ local businesses. Expert office & retail cleaning. Free quotes!" />
        <meta name="keywords" content="Beavercreek commercial cleaning, office cleaning Beavercreek, retail cleaning Beavercreek, medical facility cleaning, janitorial services, business cleaning" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/beavercreek/commercial" />
        <meta property="og:title" content="Elite Beavercreek Commercial Cleaning Services | Trusted by 100+ Businesses" />
        <meta property="og:description" content="Transform your Beavercreek business with our premium commercial cleaning services. Trusted by 100+ local businesses. Schedule your free consultation today!" />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/images/legacy/beavercreek-sign.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elite Beavercreek Commercial Cleaning Services | Trusted by 100+ Businesses" />
        <meta name="twitter:description" content="Transform your Beavercreek business with our premium commercial cleaning services." />
        
        <link rel="canonical" href="https://gemcitycleaningcrew.com/beavercreek/commercial" />
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial Cleaning Services",
            "description": "Elite Beavercreek commercial cleaning services for offices, retail, medical facilities, and business properties. Trusted by 100+ local businesses.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gem City Cleaning Crew",
              "telephone": "937-892-4157",
              "areaServed": {
                "@type": "City",
                "name": "Beavercreek",
                "state": "OH"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Commercial Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Office Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Retail Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Medical Facility Cleaning"
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
          background: `linear-gradient(rgba(24, 24, 24, 0.8), rgba(24, 24, 24, 0.8)), url('/images/legacy/beavercreek-sign.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          minHeight: { xs: 600, md: 700 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" className="hero-content commercial-hero-content" sx={{ position: 'relative', zIndex: 2 }}>
          <Chip 
            label="BEAVERCREEK'S TRUSTED CLEANING EXPERTS • LICENSED • INSURED" 
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
            Beavercreek's Premier Commercial Cleaning Services
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
            Trusted by 100+ Local Businesses for Exceptional Results
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
            Serving Beavercreek Offices • Retail • Medical • Educational • Industrial
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
              Get Commercial Quote Today!
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

      {/* Primary Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="beavercreek-commercial-cleaning-services">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Elite Beavercreek Commercial Cleaning Services
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            Delivering exceptional cleaning solutions to businesses throughout Beavercreek and surrounding areas
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {primaryServices.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="commercial-service-card" sx={{ height: '100%', position: 'relative', overflow: 'visible' }}>
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
                {service.link ? (
                  <CardActionArea component={Link} to={service.link} sx={{ height: '100%', borderRadius: '12px' }}>
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
                  </CardActionArea>
                ) : (
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
                )}
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
          Our commercial cleaning services have transformed hundreds of Beavercreek businesses, from The Greene to Pentagon Boulevard. 
          As your local cleaning experts, we understand the unique needs of Beavercreek's business community and deliver consistent, 
          high-quality cleaning that elevates your professional image. Our trained professionals work around your schedule to ensure 
          minimal disruption while maintaining the highest standards of cleanliness.
        </Typography>
      </Container>

      {/* Testimonial Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="testimonials">
        <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Beavercreek Business Client Reviews
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
          Trusted by Leading Beavercreek Businesses
        </Typography>

        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
          Our elite commercial cleaning services have earned the trust of Beavercreek's most prestigious businesses. 
          From corporate offices at The Greene to medical facilities on Pentagon Boulevard, we deliver consistent, 
          high-quality cleaning that maintains Beavercreek's high professional standards.
        </Typography>

        {/* Featured Testimonial */}
        <Box sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}>
          <Paper elevation={4} className="commercial-testimonial-card" sx={{ p: 4, textAlign: 'center' }}>
            <Box sx={{ mb: 2 }}>
              <Rating value={featuredTestimonial.rating} readOnly size="large" sx={{ color: '#FFD700' }} />
            </Box>
            <Typography variant="h6" sx={{ mb: 2, fontStyle: 'italic', lineHeight: 1.6 }}>
              {featuredTestimonial.text}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
              {featuredTestimonial.author}
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            size="large"
            onClick={handleOpenQuoteForm}
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
            Request Commercial Quote
          </Button>
        </Box>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="why-choose-us">
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Why Choose Our Beavercreek Commercial Cleaning Services?
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            Since 2017, Gem City Cleaning Crew has been the premier choice for commercial cleaning services in Beavercreek and surrounding areas. 
            From North Fairfield Road to Dayton-Xenia Road, we serve businesses of all sizes with our comprehensive cleaning solutions. 
            Our commercial cleaning team is specifically trained for Beavercreek's diverse business environments and equipped with advanced tools 
            and expertise to deliver exceptional results that exceed expectations.
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
                      alt={`${feature.title} - Commercial cleaning services feature`}
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
            Our commercial cleaning plans are customized to meet your specific business needs, schedule, and budget. 
            We work with you to create a cleaning program that maintains your professional image while allowing your team to focus on their core responsibilities.
          </Typography>
        </Container>
      </Box>

      {/* Detailed Service Information */}
      <Box sx={{ py: 8 }} id="what-included">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            What's Included in Our Commercial Cleaning Services?
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            Our comprehensive commercial cleaning services cover all areas of your business facility. 
            We use commercial-grade equipment and cleaning products designed for business environments, 
            ensuring thorough cleaning while maintaining the professional appearance your business deserves.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {commercialAreas.map((area, index) => (
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
                Transform Your Beavercreek Business Space
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#525252', fontSize: '1.1rem' }}>
                Join 100+ satisfied Beavercreek businesses who trust us for their cleaning needs. Let us create a 
                customized cleaning plan that fits your facility, schedule, and budget requirements.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleOpenQuoteForm}
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
                  Get Custom Commercial Quote
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  to="/office-cleaning-checklist"
                  sx={{
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    borderWidth: 2,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      borderWidth: 2,
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  View Office Cleaning Checklist
                </Button>
              </Box>
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
              src="/images/legacy/FAQ.png"
              alt="Frequently asked questions about professional Beavercreek commercial cleaning services"
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
              Beavercreek Commercial Cleaning FAQ
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

      {/* Service Areas Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="service-areas">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            {serviceAreasText.title}
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
            {serviceAreasText.description}
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {serviceAreasText.areas.map((area, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                  <Typography variant="h6" sx={{ textAlign: 'center', color: theme.palette.primary.main }}>
                    {area}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Areas We Serve Component */}
      <Box id="greater-dayton-service-areas">
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
            Professional Commercial Cleaning Excellence
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, maxWidth: 900, mx: 'auto', lineHeight: 1.7 }}>
            At Gem City Cleaning Crew, we understand that your business environment reflects your professionalism and attention to detail. 
            Our commercial cleaning services go beyond basic maintenance to create spaces that enhance productivity, promote health, and impress clients. 
            Whether you need daily office cleaning, weekly retail maintenance, or specialized medical facility sanitation, 
            our experienced team delivers consistent, reliable results that support your business success. 
            We use eco-friendly, commercial-grade products and follow industry best practices to ensure your facility 
            not only looks clean but maintains the highest standards of hygiene and safety.
          </Typography>

          <Box
            component="img"
            src="/images/legacy/20240512_125224-scaled.webp"
            alt="Professional clean windows showcasing Gem City Cleaning Crew's commercial window cleaning results and attention to detail"
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
            Elevate Your Beavercreek Business with Professional Cleaning
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join 100+ satisfied Beavercreek businesses who trust our licensed & insured cleaning team
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
              aria-label="Get free commercial cleaning quote for Beavercreek businesses"
            >
              Get Free Commercial Quote
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
              aria-label="Call Beavercreek commercial cleaning services team at 937-892-4157"
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Quote Form Modal */}
      <QuoteForm 
        open={quoteFormOpen}
        onClose={handleCloseQuoteForm}
        title="Get Your Free Cleaning Estimate!"
      />
    </>
  )
}

export default BeavercreekCommercialPage
