import React, { useState } from 'react'
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
  AccordionDetails
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import ApartmentIcon from '@mui/icons-material/Apartment'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import StairsIcon from '@mui/icons-material/Stairs'
import ElevatorIcon from '@mui/icons-material/Elevator'
import DeleteIcon from '@mui/icons-material/Delete'
import WindowIcon from '@mui/icons-material/Window'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import VerifiedIcon from '@mui/icons-material/Verified'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SecurityIcon from '@mui/icons-material/Security'

// Import components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'
import QuoteForm from '../../components/QuoteForm'
import HeroSection from '../../components/HeroSection'

const ApartmentBuildingCleaning = () => {
  const theme = useTheme()
  const [quoteFormOpen, setQuoteFormOpen] = useState(false)

  const handleOpenQuoteForm = () => {
    setQuoteFormOpen(true)
  }

  const handleCloseQuoteForm = () => {
    setQuoteFormOpen(false)
  }

  // Cleaning areas
  const cleaningAreas = [
    {
      title: "Entrances & Lobbies",
      icon: <ApartmentIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Professional cleaning of main entrances, lobbies, and vestibules"
    },
    {
      title: "Laundry Rooms", 
      icon: <LocalLaundryServiceIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Complete cleaning of laundry facilities and equipment"
    },
    {
      title: "Stairs & Hallways",
      icon: <StairsIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Regular maintenance of all corridors and stairwells"
    },
    {
      title: "Elevators",
      icon: <ElevatorIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Thorough cleaning of elevator cabs and doors"
    },
    {
      title: "Windows & Glass",
      icon: <WindowIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Interior window cleaning and glass surface maintenance"
    },
    {
      title: "Trash & Recycling",
      icon: <DeleteIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Regular removal of trash and recycling to dumpsters"
    }
  ]

  // Service features
  const serviceFeatures = [
    {
      title: "Licensed & Insured",
      description: "Fully licensed, insured, and bonded with commercial-grade coverage for your property's protection.",
      icon: <SecurityIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/Plan.png"
    },
    {
      title: "Flexible Scheduling",
      description: "We work around your residents' schedules with evening and weekend cleaning options available.",
      icon: <AccessTimeIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/No-Contracts.png"
    },
    {
      title: "Trained Professionals",
      description: "Our cleaning staff are trained specifically for apartment building environments and safety protocols.",
      icon: <VerifiedIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: "https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/Trained.png"
    }
  ]

  // FAQ data
  const faqData = [
    {
      question: "How often do you recommend cleaning apartment building common areas?",
      answer: "For most apartment buildings, we recommend daily or weekly cleaning of high-traffic areas like lobbies and elevators, with less frequent deep cleaning of other areas. We'll create a custom schedule based on your building's specific needs and traffic patterns."
    },
    {
      question: "Do you provide cleaning supplies and equipment?",
      answer: "Yes, we bring all necessary cleaning supplies, equipment, and tools. We use commercial-grade products that are effective yet safe for your residents and property."
    },
    {
      question: "Can you work around our residents' schedules?",
      answer: "Absolutely! We offer flexible scheduling including evenings and weekends to minimize disruption to your residents. We're experienced in working quietly and efficiently in occupied buildings."
    },
    {
      question: "Are you insured for apartment building work?",
      answer: "Yes, we are fully insured and bonded with commercial-grade coverage. We can provide certificates of insurance upon request for your property management requirements."
    },
    {
      question: "How do you handle building security and access?",
      answer: "We follow strict security protocols and can work with your existing access systems. Our team is background-checked and trained in proper security procedures for residential buildings."
    },
    {
      question: "Do you offer emergency cleaning services?",
      answer: "Yes, we provide emergency and urgent cleaning services for situations like spills or accidents. Contact us at 937-892-4157 for immediate assistance."
    }
  ]

  // Table of Contents items
  const tocItems = [
    { text: '🏢 Apartment Building Cleaning Services', href: '#apartment-building-cleaning-services' },
    { text: '⭐ Client Testimonials', href: '#testimonials' },
    { text: '✨ Why Choose Professional Cleaning', href: '#why-choose-us' },
    { text: '📍 Service Areas & Coverage', href: '#service-areas' },
    { text: '📋 What\'s Included in Service', href: '#what-included' },
    { text: '❓ FAQ', href: '#faq' }
  ]

  return (
    <>
      <Helmet>
        <title>Professional Apartment Building Cleaning Services Dayton | Gem City Cleaning</title>
        <meta name="description" content="Expert apartment building cleaning services in Dayton. Common areas, laundry rooms, hallways, elevators & more. Licensed & insured team. Get your free quote!" />
        <meta name="keywords" content="apartment building cleaning, common area cleaning, laundry room cleaning, hallway cleaning, Dayton property cleaning" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/apartment-building-cleaning" />
        <meta property="og:title" content="Professional Apartment Building Cleaning Services Dayton | Gem City Cleaning" />
        <meta property="og:description" content="Expert apartment building cleaning services in Dayton. Common areas, laundry rooms, hallways & more." />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/sono-bono-XrsB8dosSWQ-unsplash-scaled.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Apartment Building Cleaning Services Dayton | Gem City Cleaning" />
        <meta name="twitter:description" content="Expert apartment building cleaning services in Dayton. Common areas, laundry rooms, hallways & more." />
      </Helmet>

      {/* Hero Section */}
      <HeroSection 
        title="Professional Apartment Building Cleaning"
        subtitle="Expert Cleaning Services for Apartment Buildings & Multi-Unit Properties"
        description="Entrances • Common Areas • Laundry Rooms • Hallways • Stairs • Elevators • Windows"
        backgroundImage="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/sono-bono-XrsB8dosSWQ-unsplash-scaled.webp"
        chipText="LICENSED • INSURED • PROFESSIONAL"
        primaryButtonText="Get Your Free Quote"
        primaryButtonLink="/quote?service=apartment-building"
        showRating={true}
        ratingValue={4.5}
        reviewCount="85+"
        differentiators={[
          'Same-Day Availability',
          'Professional Staff',
          'All Supplies Included',
          'Satisfaction Guaranteed'
        ]}
      />

      {/* Table of Contents */}
      <TableOfContents 
        items={tocItems} 
        collapsible={true}
        defaultExpanded={false}
        showItemCount={true}
      />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="apartment-building-cleaning-services">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Professional Apartment Building Cleaning Services
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            Keep your apartment building clean, safe, and attractive for residents with our professional cleaning services
          </Typography>
        </Box>

        {/* Service Areas Grid */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {cleaningAreas.map((area, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="service-card" sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box className="service-icon" sx={{ 
                    mb: 3,
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto'
                  }}>
                    {area.icon}
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
                    {area.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {area.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Why Choose Us Section */}
        <Box sx={{ py: 8 }} id="why-choose-us">
          <Typography variant="h3" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Why Choose Our Apartment Building Cleaning Services?
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {serviceFeatures.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box
                      component="img"
                      src={feature.image}
                      alt={feature.title}
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
        </Box>

        {/* FAQ Section */}
        <Box sx={{ py: 8 }} id="faq">
          <Typography variant="h3" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Frequently Asked Questions
          </Typography>

          {faqData.map((faq, index) => (
            <Accordion key={index}>
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
                <Typography variant="body1">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Service Areas */}
        <Box id="service-areas">
          <AreasWeServe />
        </Box>

        {/* Final CTA */}
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 4 }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Contact us today for a free quote on professional apartment building cleaning services.
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
                fontWeight: 600
              }}
            >
              Get Free Quote
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
                fontWeight: 600
              }}
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Quote Form Modal */}
      <QuoteForm 
        open={quoteFormOpen}
        onClose={handleCloseQuoteForm}
        title="Get Your Free Cleaning Estimate!"
      />
    </>
  )
}

export default ApartmentBuildingCleaning
