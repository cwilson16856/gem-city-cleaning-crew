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
import GavelIcon from '@mui/icons-material/Gavel'
import PsychologyIcon from '@mui/icons-material/Psychology'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import WindowIcon from '@mui/icons-material/Window'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'
import DescriptionIcon from '@mui/icons-material/Description'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import PersonIcon from '@mui/icons-material/Person'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/CommercialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'

const OfficeCleaning = () => {
  const theme = useTheme()

  // Office Types - positioned high up
  const officeTypes = [
    {
      title: "Law Offices & Legal Firms",
      description: "Professional cleaning for law firms, attorney offices, and legal practices requiring confidentiality and attention to detail",
      icon: <GavelIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Confidential document handling", "Conference room sanitization", "Client reception areas", "After-hours cleaning available"],
      popular: true,
      specialties: ["Attorney offices", "Legal firms", "Court reporting services", "Paralegal offices"]
    },
    {
      title: "Real Estate Offices",
      description: "Maintain professional appearances for real estate agencies, property management, and realty offices",
      icon: <CorporateFareIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Open house preparation", "Client meeting areas", "Property staging rooms", "Professional presentation spaces"],
      popular: true,
      specialties: ["Realty agencies", "Property management", "Mortgage offices", "Title companies"]
    },
    {
      title: "Therapy & Counseling Offices",
      description: "Discreet and thorough cleaning for therapy practices, counseling centers, and mental health professionals",
      icon: <PsychologyIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Quiet cleaning methods", "Confidential waste handling", "Comfortable environment maintenance", "Flexible scheduling"],
      popular: false,
      specialties: ["Therapy practices", "Counseling centers", "Psychology offices", "Mental health clinics"]
    },
    {
      title: "Corporate Offices",
      description: "Comprehensive cleaning for corporate headquarters, business centers, and executive suites",
      icon: <BusinessIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Executive office care", "Boardroom maintenance", "Employee workstations", "Reception area upkeep"],
      popular: false,
      specialties: ["Corporate headquarters", "Business centers", "Executive suites", "Administrative offices"]
    },
    {
      title: "Professional Services",
      description: "Specialized cleaning for accounting firms, consulting offices, and other professional service providers",
      icon: <DescriptionIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Document security protocols", "Client confidentiality", "Professional presentation", "Flexible service times"],
      popular: false,
      specialties: ["Accounting firms", "Consulting offices", "Insurance agencies", "Financial advisors"]
    }
  ]

  // FAQ data for office cleaning
  const faqData = [
    {
      question: "Do you offer office cleaning without contracts?",
      answer: "Yes! We provide flexible office cleaning services without long-term contracts. You can book one-time cleanings, schedule recurring services, or adjust frequency as needed without being locked into a contract."
    },
    {
      question: "What types of recurring office cleaning services do you offer?",
      answer: "We offer daily, weekly, bi-weekly, and monthly recurring office cleaning services. Our team can work around your business hours, including evenings and weekends, to maintain a consistently clean professional environment."
    },
    {
      question: "Do you provide in-person quotes for office cleaning?",
      answer: "Absolutely! We believe in providing accurate quotes by visiting your office in person. This allows us to assess your specific needs, space layout, and any special requirements to create a customized cleaning plan and fair pricing."
    },
    {
      question: "Can you handle confidential documents and sensitive materials?",
      answer: "Yes, our team is trained in handling offices with confidential materials. We follow strict protocols for document security, especially important for law offices and other professional services requiring discretion."
    },
    {
      question: "What areas of the office do you clean?",
      answer: "We clean all office areas including workstations, conference rooms, reception areas, break rooms, restrooms, lobbies, and common areas. We also handle floors, windows, and specialized areas based on your office type and needs."
    },
    {
      question: "Do you work around our business hours?",
      answer: "Yes, we offer flexible scheduling including after-hours, early morning, weekend, and holiday cleaning to ensure minimal disruption to your business operations. Many offices prefer evening or early morning cleaning."
    },
    {
      question: "Are you insured for office cleaning services?",
      answer: "Yes, we are fully licensed, insured, and bonded with commercial-grade coverage. We can provide certificates of insurance for your records and any building or lease requirements."
    },
    {
      question: "Do you bring your own cleaning supplies and equipment?",
      answer: "Yes, we provide all cleaning supplies, equipment, and tools needed for your office. We use professional-grade, eco-friendly products that are safe for office environments and won't damage electronics or furniture."
    },
    {
      question: "What types of professional offices do you serve?",
      answer: "We specialize in cleaning law offices, real estate agencies, therapy practices, corporate offices, accounting firms, consulting offices, and other professional service providers throughout the Dayton area."
    },
    {
      question: "How do you ensure quality and consistency?",
      answer: "We use detailed cleaning checklists specific to office environments, conduct regular quality inspections, and maintain consistent staff assignments when possible. Our supervisors perform periodic reviews to ensure high standards are met consistently."
    }
  ]

  // Service features for office cleaning
  const serviceFeatures = [
    {
      title: "No Contracts Required",
      description: "Flexible office cleaning services without long-term contracts. Book one-time cleanings or recurring services with the freedom to adjust as needed.",
      icon: <DescriptionIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "/images/legacy/No-Contracts.png"
    },
    {
      title: "Recurring Services Available",
      description: "Consistent office cleaning with daily, weekly, bi-weekly, or monthly recurring services tailored to your business needs and schedule.",
      icon: <AccessTimeIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "/images/legacy/Plan.png"
    },
    {
      title: "In-Person Quotes",
      description: "We visit your office to provide accurate, personalized quotes based on your specific space, needs, and cleaning requirements.",
      icon: <PersonIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "/images/legacy/Trained.png"
    }
  ]

  // Office cleaning areas
  const officeAreas = [
    {
      title: "Workstations & Desks",
      icon: <BusinessIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Individual offices, cubicles, desk surfaces, and personal workspace areas"
    },
    {
      title: "Conference Rooms", 
      icon: <MeetingRoomIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Meeting rooms, boardrooms, and presentation areas with AV equipment"
    },
    {
      title: "Reception Areas",
      icon: <PersonIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Front desk, waiting areas, and client-facing spaces"
    },
    {
      title: "Break Rooms & Kitchens",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Employee kitchens, break areas, coffee stations, and appliances"
    },
    {
      title: "Restrooms",
      icon: <HomeRepairServiceIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Complete restroom sanitization with restocking and maintenance"
    },
    {
      title: "Windows & Glass",
      icon: <WindowIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Interior windows, glass partitions, and office glass surfaces"
    }
  ]

  // Table of Contents items
  const tocItems = [
    { text: '🏢 Professional Office Cleaning Dayton', href: '#dayton-office-cleaning-services' },
    { text: '⭐ Office Client Testimonials', href: '#testimonials' },
    { text: '✨ Why Choose Professional Office Cleaning', href: '#why-choose-us' },
    { text: '📍 Service Areas & Coverage', href: '#service-areas' },
    { text: '📋 What\'s Included in Office Cleaning', href: '#what-included' },
    { text: '❓ Office Cleaning FAQ', href: '#faq' }
  ]

  return (
    <>
      <Helmet>
        <title>Professional Dayton Office Cleaning Services | Law Firms, Real Estate, Therapy | Gem City Cleaning</title>
        <meta name="description" content="Professional Dayton office cleaning for law firms, real estate offices, therapy offices, corporate offices. No contracts, recurring services, in-person quotes. Call today!" />
        <meta name="keywords" content="Dayton office cleaning, law office cleaning, real estate office cleaning, therapy office cleaning, corporate office cleaning, professional office cleaning, no contracts" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/office-cleaning" />
        <meta property="og:title" content="Professional Dayton Office Cleaning Services | Gem City Cleaning" />
        <meta property="og:description" content="Professional Dayton office cleaning for law firms, real estate, therapy practices. No contracts, recurring services, in-person quotes." />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Dayton Office Cleaning Services | Gem City Cleaning" />
        <meta name="twitter:description" content="Professional Dayton office cleaning for law firms, real estate, therapy practices." />
        
        <link rel="canonical" href="https://gemcitycleaningcrew.com/office-cleaning" />
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Office Cleaning Services",
            "description": "Professional Dayton office cleaning services for law firms, real estate offices, therapy offices, and corporate offices",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gem City Cleaning Crew",
              "telephone": "937-892-4157"
            },
            "areaServed": "Dayton, OH and surrounding areas",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Office Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Law Office Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Real Estate Office Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Therapy Office Cleaning"
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
          background: `linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)), url('/images/legacy/8643309867_00758e220a_c.webp')`,
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
            label="NO CONTRACTS • RECURRING SERVICES • IN-PERSON QUOTES" 
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
            Professional Dayton Office Cleaning Services
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
            Trusted by Law Firms, Real Estate & Therapy Offices
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
            No Contracts • Flexible Scheduling • Professional Results
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
              Get Free Office Cleaning Quote!
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

      {/* Office Types Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="dayton-office-cleaning-services">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Professional Office Cleaning Services in Dayton
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            Specialized cleaning solutions for professional offices throughout the Dayton area
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {officeTypes.map((office, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="commercial-service-card" sx={{ height: '100%', position: 'relative', overflow: 'visible' }}>
                {office.popular && (
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
                    {office.icon}
                  </Box>
                  
                  <Typography variant="h5" component="h3" className="commercial-service-title" sx={{ mb: 2, fontWeight: 700 }}>
                    {office.title}
                  </Typography>
                  
                  <Typography variant="body1" className="commercial-service-description" sx={{ flex: 1, mb: 2 }}>
                    {office.description}
                  </Typography>
                  
                  <Box sx={{ textAlign: 'left', mb: 2 }}>
                    {office.features.map((feature, idx) => (
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
                    {office.specialties.map((specialty, idx) => (
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
          Professional Office Cleaning Reviews
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
          Trusted by Dayton's Leading Professional Offices
        </Typography>

        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
          From law firms and real estate offices to therapy centers and corporate offices, Dayton's professional businesses trust 
          Gem City Cleaning Crew for reliable, confidential, and thorough office cleaning services. Our flexible approach means 
          no long-term contracts, and our in-person quotes ensure you get exactly the services your office needs.
        </Typography>

        {/* Featured Testimonials */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={4} className="commercial-testimonial-card" sx={{ p: 4, textAlign: 'center', height: '100%' }}>
              <Box sx={{ mb: 2 }}>
                <Rating value={5} readOnly size="large" sx={{ color: '#FFD700' }} />
              </Box>
              <Typography variant="h6" sx={{ mb: 2, fontStyle: 'italic', lineHeight: 1.6 }}>
                "Our law firm has used Gem City Cleaning for over 18 months. They understand the importance of confidentiality 
                and always maintain the professional appearance our clients expect. No contracts makes it easy to adjust services as needed."
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                - Michael T., Law Firm Partner
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={4} className="commercial-testimonial-card" sx={{ p: 4, textAlign: 'center', height: '100%' }}>
              <Box sx={{ mb: 2 }}>
                <Rating value={5} readOnly size="large" sx={{ color: '#FFD700' }} />
              </Box>
              <Typography variant="h6" sx={{ mb: 2, fontStyle: 'italic', lineHeight: 1.6 }}>
                "As a real estate office, first impressions matter. Gem City Cleaning keeps our office spotless and ready for 
                client meetings. Their recurring service keeps us consistently clean without any hassle."
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                - Jennifer R., Real Estate Broker
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
            Schedule In-Person Quote
          </Button>
        </Box>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="why-choose-us">
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Why Choose Our Dayton Office Cleaning Services?
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            Since 2017, professional offices throughout Dayton have relied on Gem City Cleaning Crew for dependable, 
            discrete, and thorough office cleaning services. We understand that professional environments require special attention 
            to detail, confidentiality, and flexibility. Our no-contract approach and recurring service options make it easy 
            to maintain a consistently clean office that reflects your professional standards.
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
                      alt={`${feature.title} - Office cleaning services feature`}
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
            Whether you need daily cleaning for a busy law firm, weekly maintenance for a therapy practice, or bi-weekly services 
            for a real estate office, we create customized cleaning plans that work with your schedule and budget. 
            Our in-person quotes ensure you receive accurate pricing and services tailored to your specific office environment.
          </Typography>
        </Container>
      </Box>

      {/* Detailed Service Information */}
      <Box sx={{ py: 8 }} id="what-included">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            What's Included in Our Office Cleaning Services?
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            Our comprehensive office cleaning services cover every area of your professional workspace. 
            We use commercial-grade equipment and eco-friendly cleaning products that are safe for office environments, 
            electronics, and sensitive documents while maintaining the professional appearance your clients expect.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {officeAreas.map((area, index) => (
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
              Additional Office Cleaning Services
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Standard Office Cleaning</Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Dusting all surfaces, desks, and furniture</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Vacuuming carpets and rugs</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Mopping hard floors</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Emptying trash and recycling</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Cleaning and sanitizing restrooms</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Kitchen/break room cleaning</Typography>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Specialized Office Services</Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Window cleaning (interior & exterior)</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Light fixture cleaning</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Conference room setup/breakdown</Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 1 }}>• Post-construction cleanup</Typography>
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
                Ready for Professional Office Cleaning?
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#525252', fontSize: '1.1rem' }}>
                Schedule your free in-person quote today. No contracts required - just professional, 
                reliable office cleaning services tailored to your needs.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
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
                  Schedule In-Person Quote
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
              alt="Frequently asked questions about professional Dayton office cleaning services"
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
              Office Cleaning FAQ
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
            Professional Office Cleaning Excellence
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, maxWidth: 900, mx: 'auto', lineHeight: 1.7 }}>
            At Gem City Cleaning Crew, we understand that your office environment directly impacts productivity, employee morale, and client perceptions. 
            Our professional office cleaning services are designed specifically for Dayton's business community, serving law firms, real estate offices, 
            therapy centers, and corporate offices with the highest standards of cleanliness and professionalism. 
            With no long-term contracts required, flexible recurring services, and personalized in-person quotes, 
            we make it easy to maintain a consistently clean and professional workspace that supports your business success.
          </Typography>

          <Box
            component="img"
            src="/images/legacy/8643309867_00758e220a_c.webp"
            alt="Professional office environment showcasing Gem City Cleaning Crew's office cleaning results and attention to detail"
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
            Ready for Professional Office Cleaning?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            No contracts • Recurring services • In-person quotes • Licensed & insured
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
              aria-label="Get free office cleaning quote for Dayton businesses"
            >
              Get Free Office Cleaning Quote
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
              aria-label="Call Dayton office cleaning services team at 937-892-4157"
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default OfficeCleaning
