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
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import SchoolIcon from '@mui/icons-material/School'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import VerifiedIcon from '@mui/icons-material/Verified'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SecurityIcon from '@mui/icons-material/Security'
import WindowIcon from '@mui/icons-material/Window'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/CommercialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'
import QuoteForm from '../../components/QuoteForm'

const CommercialPage = () => {
  const theme = useTheme()
  const [quoteFormOpen, setQuoteFormOpen] = useState(false)

  const handleOpenQuoteForm = () => {
    setQuoteFormOpen(true)
  }

  const handleCloseQuoteForm = () => {
    setQuoteFormOpen(false)
  }

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
      features: ["Complete deep sanitization", "Equipment & fixture cleaning", "Deep vacuum & mop", "Window & glass detailing"],
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
      features: ["Equipment degreasing", "Sweeping & mopping", "Safety compliance", "Specialized equipment"],
      popular: false,
      link: "/industrial-cleaning"
    }
  ]

  // FAQ data for commercial cleaning
  const faqData = [
    {
      question: "What types of commercial properties do you clean?",
      answer: "We provide cleaning services for offices, retail stores, medical facilities, schools, restaurants, warehouses, and corporate buildings. Our team is experienced with various commercial environments and their specific cleaning requirements."
    },
    {
      question: "Do you provide cleaning supplies and equipment?",
      answer: "Yes, we bring all necessary cleaning supplies, equipment, and tools. We use commercial-grade products that are effective yet safe for your business environment and employees."
    },
    {
      question: "Can you work around our business hours?",
      answer: "Absolutely! We offer flexible scheduling including evenings, weekends, and holidays to ensure minimal disruption to your business operations. Many of our clients prefer after-hours cleaning."
    },
    {
      question: "Are you insured and bonded for commercial work?",
      answer: "Yes, we are fully insured and bonded with commercial-grade coverage. We can provide certificates of insurance upon request for your property management or leasing requirements."
    },
    {
      question: "How do you ensure quality and consistency?",
      answer: "We use detailed cleaning checklists, conduct regular quality inspections, and maintain consistent staff assignments when possible. Our team supervisors perform periodic reviews to ensure standards are met."
    },
    {
      question: "Do you offer emergency cleaning services?",
      answer: "Yes, we provide emergency and urgent cleaning services for situations like spills, accidents, or special events. Contact us at 937-892-4157 for immediate assistance."
    },
    {
      question: "Can you customize cleaning plans for our specific needs?",
      answer: "Definitely! We create customized cleaning plans based on your facility type, size, traffic, and specific requirements. We'll work with you to develop a plan that fits your needs and budget."
    },
    {
      question: "Do you clean medical facilities with special requirements?",
      answer: "Yes, we have experience with medical facilities and follow strict protocols for healthcare environments, including proper disinfection procedures and handling of medical waste areas."
    },
    {
      question: "What is your pricing structure for commercial cleaning?",
      answer: "Our pricing is based on facility size, cleaning frequency, specific services required, and complexity. We provide detailed written estimates after evaluating your facility and discussing your needs."
    },
    {
      question: "Do you provide day porter services?",
      answer: "Yes, we offer day porter services for facilities that need ongoing maintenance throughout business hours, including restroom monitoring, trash removal, and general upkeep."
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
      description: "Vacuuming, sweeping, and mopping all floor surfaces"
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

  // Table of Contents items
  const tocItems = [
    { text: '🏢 Commercial Cleaning Services Dayton', href: '#dayton-commercial-cleaning-services' },
    { text: '⭐ Business Client Testimonials', href: '#testimonials' },
    { text: '✨ Why Choose Professional Commercial Cleaning', href: '#why-choose-us' },
    { text: '📍 Service Areas & Coverage', href: '#service-areas' },
    { text: '📋 What\'s Included in Commercial Service', href: '#what-included' },
    { text: '❓ Commercial Cleaning FAQ', href: '#faq' }
  ]

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="/images/legacy/benjamin-child-GWe0dlVD9e0-unsplash.jpg" fetchPriority="high" />
        <title>Professional Dayton Commercial Cleaning Services | Office & Retail Cleaning | Gem City Cleaning</title>
        <meta name="description" content="Professional Dayton commercial cleaning services for offices, retail, medical facilities, and more. Flexible scheduling, insured team, custom cleaning plans. Free quotes!" />
        <meta name="keywords" content="Dayton commercial cleaning, office cleaning, retail cleaning, medical facility cleaning, janitorial services, business cleaning" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/commercial" />
        <meta property="og:title" content="Professional Dayton Commercial Cleaning Services | Gem City Cleaning" />
        <meta property="og:description" content="Professional Dayton commercial cleaning services for offices, retail, medical facilities. Flexible scheduling, insured team." />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Dayton Commercial Cleaning Services | Gem City Cleaning" />
        <meta name="twitter:description" content="Professional Dayton commercial cleaning services for offices, retail, medical facilities." />
        
        <link rel="canonical" href="https://gemcitycleaningcrew.com/commercial" />
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial Cleaning Services",
            "description": "Professional Dayton commercial cleaning services for offices, retail, medical facilities, and business properties",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gem City Cleaning Crew",
              "telephone": "937-892-4157"
            },
            "areaServed": "Dayton, OH and surrounding areas",
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
          background: `linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)), url('/images/legacy/benjamin-child-GWe0dlVD9e0-unsplash.jpg')`,
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
            label="LICENSED • INSURED • PROFESSIONAL" 
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
            Dayton Commercial Cleaning Services
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
            Professional Business Cleaning Solutions
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
            Offices • Retail • Medical • Educational • Industrial
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
      <Container maxWidth="lg" sx={{ py: 8 }} id="dayton-commercial-cleaning-services">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Professional Dayton Commercial Cleaning Services
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            Comprehensive commercial cleaning solutions for businesses throughout the Dayton area
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
      </Container>

      {/* Testimonial Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="testimonials">
        <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Commercial Cleaning Client Reviews
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
          Trusted by Dayton Businesses for Professional Commercial Cleaning
        </Typography>

        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
          Our commercial cleaning services have helped hundreds of Dayton businesses maintain clean, professional environments. 
          From small offices to large corporate facilities, we deliver consistent, high-quality cleaning that supports your business success. 
          Our trained professionals understand the unique needs of different business environments and work around your schedule to minimize disruption.
        </Typography>

        {/* Featured Testimonial */}
        <Box sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}>
          <Paper elevation={4} className="commercial-testimonial-card" sx={{ p: 4, textAlign: 'center' }}>
            <Box sx={{ mb: 2 }}>
              <Rating value={5} readOnly size="large" sx={{ color: '#FFD700' }} />
            </Box>
            <Typography variant="h6" sx={{ mb: 2, fontStyle: 'italic', lineHeight: 1.6 }}>
              "Gem City Cleaning has been maintaining our office building for over two years. 
              Their attention to detail and professional approach has impressed both our staff and clients. 
              They work efficiently after hours and always leave our workspace spotless."
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
              - Sarah M., Office Manager
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
            Why Choose Our Dayton Commercial Cleaning Services?
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            Since 2017, Gem City Cleaning Crew has been the trusted choice for commercial cleaning services in Dayton and surrounding areas. 
            We understand that a clean business environment is essential for productivity, employee health, and making a positive impression on clients. 
            Our commercial cleaning team is specifically trained for business environments and equipped with the right tools and expertise to deliver exceptional results.
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
                Need a Custom Commercial Cleaning Plan?
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#525252', fontSize: '1.1rem' }}>
                Every business has unique cleaning needs. Let us create a customized cleaning plan 
                that fits your facility, schedule, and budget requirements.
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
              alt="Frequently asked questions about professional Dayton commercial cleaning services"
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
              Commercial Cleaning FAQ
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
            Ready to Partner with Professional Commercial Cleaners?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Licensed, insured, and experienced commercial cleaning team serving Dayton businesses.
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
              aria-label="Get free commercial cleaning quote for Dayton businesses"
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
              aria-label="Call Dayton commercial cleaning services team at 937-892-4157"
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Quote Form Modal */}
      {/* Quote modal defaults to suggesting Commercial (this is a commercial page), but always
          asks the user to confirm residential vs. commercial before loading either form. */}
      <QuoteForm
        open={quoteFormOpen}
        onClose={handleCloseQuoteForm}
        title="Get Your Free Cleaning Estimate!"
        defaultServiceType="commercial"
      />
    </>
  )
}

export default CommercialPage
