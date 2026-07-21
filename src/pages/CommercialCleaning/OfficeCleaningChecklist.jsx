import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Box,
  Paper,
  Chip,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import BusinessIcon from '@mui/icons-material/Business'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import PersonIcon from '@mui/icons-material/Person'
import BathroomIcon from '@mui/icons-material/Bathroom'
import KitchenIcon from '@mui/icons-material/Kitchen'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import PrintIcon from '@mui/icons-material/Print'
import WindowIcon from '@mui/icons-material/Window'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import SecurityIcon from '@mui/icons-material/Security'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/CommercialPage.css'

const OfficeCleaningChecklist = () => {
  const theme = useTheme()

  // Comprehensive office cleaning checklist organized by area
  const officeCleaningChecklist = [
    {
      title: "Workstations & Individual Offices",
      icon: <BusinessIcon sx={{ fontSize: 32, color: 'white' }} />,
      tasks: [
        "Dust and wipe down all desk surfaces and furniture",
        "Clean computer monitors, keyboards, and equipment safely",
        "Empty and sanitize wastebaskets and recycling bins",
        "Dust and organize desk accessories and supplies",
        "Clean telephone handsets and sanitize frequently touched surfaces",
        "Wipe down chair arms, backs, and seat surfaces",
        "Dust picture frames, certificates, and wall decorations",
        "Clean and organize filing cabinets and storage areas",
        "Sanitize light switches and electrical outlets",
        "Vacuum carpeted areas and mop hard floors",
        "Clean glass partitions and office windows",
        "Dust baseboards, door frames, and trim work"
      ]
    },
    {
      title: "Conference Rooms & Meeting Spaces",
      icon: <MeetingRoomIcon sx={{ fontSize: 32, color: 'white' }} />,
      tasks: [
        "Clean and sanitize conference table and all chairs",
        "Dust and clean presentation equipment (projectors, screens, whiteboards)",
        "Clean glass surfaces, windows, and any glass partitions",
        "Sanitize remote controls and presentation devices",
        "Empty trash receptacles and replace liners",
        "Vacuum carpets and clean hard floor surfaces",
        "Dust light fixtures and ceiling fans",
        "Clean and organize any supplies or materials storage",
        "Wipe down baseboards and door frames",
        "Polish furniture and wood surfaces",
        "Clean air vents and ensure proper ventilation",
        "Sanitize door handles and light switches"
      ]
    },
    {
      title: "Reception & Front Office Areas",
      icon: <PersonIcon sx={{ fontSize: 32, color: 'white' }} />,
      tasks: [
        "Clean and polish reception desk and furniture",
        "Dust and organize magazines, brochures, and reading materials",
        "Sanitize seating areas including chairs and sofas",
        "Clean glass surfaces, windows, and entrance doors",
        "Vacuum waiting area carpets and clean hard floors",
        "Empty and sanitize all waste receptacles",
        "Dust decorative items, plants, and artwork",
        "Clean and sanitize phone systems and equipment",
        "Polish furniture and wood surfaces",
        "Clean light fixtures and ceiling fans",
        "Wipe down baseboards and trim work",
        "Ensure entrance mats are clean and positioned properly"
      ]
    },
    {
      title: "Break Rooms & Kitchen Areas",
      icon: <KitchenIcon sx={{ fontSize: 32, color: 'white' }} />,
      tasks: [
        "Clean and sanitize all countertops and surfaces",
        "Wipe down microwave interior and exterior",
        "Clean refrigerator exterior and organize interior if requested",
        "Sanitize sink, faucet, and surrounding areas",
        "Clean coffee makers and small appliances",
        "Wipe down tables, chairs, and seating areas",
        "Empty and sanitize trash cans and recycling bins",
        "Clean cabinet fronts and handles",
        "Sweep and mop floors thoroughly",
        "Clean and sanitize water cooler and dispensers",
        "Wipe down light switches and electrical outlets",
        "Restock paper towels and supplies if provided"
      ]
    },
    {
      title: "Restrooms & Washroom Facilities",
      icon: <BathroomIcon sx={{ fontSize: 32, color: 'white' }} />,
      tasks: [
        "Clean and disinfect all toilets completely",
        "Sanitize sinks, faucets, and countertop areas",
        "Clean mirrors with streak-free glass cleaner",
        "Refill soap dispensers, paper towels, and toilet paper",
        "Empty and sanitize waste receptacles",
        "Sweep and mop floors with disinfectant",
        "Clean and disinfect door handles and hardware",
        "Wipe down partition walls and surfaces",
        "Clean light fixtures and exhaust fans",
        "Sanitize baby changing stations if present",
        "Check and clean air fresheners",
        "Inspect and report any maintenance needs"
      ]
    },
    {
      title: "Common Areas & Hallways",
      icon: <CorporateFareIcon sx={{ fontSize: 32, color: 'white' }} />,
      tasks: [
        "Vacuum all carpeted areas and clean hard floors",
        "Dust and clean elevator interiors and buttons",
        "Clean glass doors and windows throughout",
        "Empty and sanitize waste receptacles",
        "Dust picture frames, artwork, and wall decorations",
        "Clean light fixtures and ceiling fans",
        "Wipe down handrails and stair surfaces",
        "Clean and polish directory boards and signage",
        "Dust air vents and HVAC grates",
        "Sanitize door handles and push plates",
        "Clean baseboards and trim work",
        "Organize and straighten common area furniture"
      ]
    },
    {
      title: "Storage Areas & Utility Rooms",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />,
      tasks: [
        "Organize and dust storage shelves and supplies",
        "Empty and clean waste receptacles",
        "Sweep and mop floors thoroughly",
        "Clean light fixtures and ensure proper illumination",
        "Wipe down utility panels and equipment exteriors",
        "Organize cleaning supplies and equipment",
        "Remove cobwebs from corners and ceiling areas",
        "Clean and sanitize utility sinks if present",
        "Dust and clean any posted safety information",
        "Check and clean emergency equipment areas",
        "Wipe down baseboards and door frames",
        "Ensure proper ventilation and air circulation"
      ]
    }
  ]

  // Office-specific add-on services
  const officeAddOnServices = [
    {
      service: "Interior window cleaning",
      icon: <WindowIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Professional cleaning of interior windows, glass partitions, and office glazing",
      color: '#87CEEB'
    },
    {
      service: "Light fixture cleaning",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Professional cleaning and maintenance of office light fixtures and ceiling fans",
      color: '#2E8B57'
    },
    {
      service: "Conference room setup",
      icon: <MeetingRoomIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Meeting room preparation and post-meeting cleanup and reset services",
      color: '#4A90E2'
    },
    {
      service: "Reception area detailing",
      icon: <PersonIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Enhanced cleaning and presentation of client-facing reception areas",
      color: '#9370DB'
    },
    {
      service: "Kitchen deep cleaning",
      icon: <KitchenIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Thorough sanitization of break room appliances and kitchen facilities",
      color: '#FF6B35'
    },
    {
      service: "After-hours cleaning",
      icon: <AccessTimeIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Flexible cleaning schedules to work around business operations",
      color: '#8B4513'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Office Cleaning Checklist | Professional Dayton Office Cleaning Standards | Gem City Cleaning</title>
        <meta name="description" content="Complete office cleaning checklist used by professional cleaners in Dayton. Our detailed office cleaning checklist ensures nothing gets missed in your business cleaning service." />
        <meta name="keywords" content="office cleaning checklist, Dayton office cleaning checklist, commercial cleaning checklist, professional office cleaning checklist, business cleaning checklist, office cleaning standards" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/office-cleaning-checklist" />
        <meta property="og:title" content="Professional Office Cleaning Checklist | Gem City Cleaning" />
        <meta property="og:description" content="Complete office cleaning checklist used by professional cleaners in Dayton. Area-by-area guide ensuring nothing gets missed." />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Office Cleaning Checklist | Gem City Cleaning" />
        <meta name="twitter:description" content="Complete office cleaning checklist used by professional cleaners in Dayton. Area-by-area guide ensuring nothing gets missed." />
        
        <link rel="canonical" href="https://gemcitycleaningcrew.com/office-cleaning-checklist" />
        
        {/* Checklist Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Professional Office Cleaning Checklist",
            "description": "Comprehensive office cleaning checklist used by professional cleaners in Dayton, OH",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gem City Cleaning Crew",
              "telephone": "937-892-4157",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dayton",
                "@addressRegion": "OH"
              }
            },
            "totalTime": "PT3H",
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Commercial cleaning supplies"
              },
              {
                "@type": "HowToSupply", 
                "name": "Professional disinfectants"
              },
              {
                "@type": "HowToSupply",
                "name": "Commercial vacuum equipment"
              }
            ],
            "step": officeCleaningChecklist.map((area, index) => ({
              "@type": "HowToStep",
              "name": area.title,
              "text": area.tasks.join(", "),
              "position": index + 1
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Box
        className="hero-section commercial-hero-section"
        sx={{
          background: `linear-gradient(rgba(24, 24, 24, 0.75), rgba(24, 24, 24, 0.75)), url('https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/8643309867_00758e220a_c.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
          minHeight: { xs: 400, md: 500 },
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Chip 
            label="PROFESSIONAL OFFICE CLEANING CHECKLIST" 
            sx={{ 
              mb: 3, 
              backgroundColor: theme.palette.primary.main, 
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem',
              px: 2,
              textShadow: 'none',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
            }} 
          />
          
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.1,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
              color: 'white'
            }}
          >
            Professional Office Cleaning Checklist
          </Typography>
          
          <Typography 
            variant="h4" 
            sx={{ 
              fontSize: { xs: '1.1rem', md: '1.4rem' },
              fontWeight: 400,
              mb: 4,
              maxWidth: 800,
              mx: 'auto',
              opacity: 1,
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
              color: 'white'
            }}
          >
            The comprehensive area-by-area office cleaning checklist our professional cleaners use to ensure 
            nothing gets missed in your Dayton business cleaning service
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
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                fontWeight: 600,
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  color: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)'
                }
              }}
            >
              Get Professional Office Cleaning
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => window.print()}
              startIcon={<PrintIcon />}
              sx={{
                fontSize: '1.1rem',
                px: 4,
                py: 1.5,
                borderColor: 'white',
                color: 'white',
                borderWidth: 2,
                fontWeight: 600,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)'
                }
              }}
            >
              Download Office Cleaning Checklist
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Introduction Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
            Why Use a Professional Office Cleaning Checklist?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto', lineHeight: 1.7 }}>
            At Gem City Cleaning Crew, our trained professionals follow this comprehensive office cleaning checklist to ensure 
            consistent, thorough cleaning every time. Our specialized training program teaches cleaners to complete 
            every task with attention to detail and respect for your business environment. This office cleaning checklist guarantees nothing gets missed.
          </Typography>
        </Box>

        {/* Key Benefits */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <CleaningServicesIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Consistent Professional Results
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Every cleaner follows the same detailed office cleaning checklist ensuring consistent quality every visit
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <CheckCircleIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Nothing Missed
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Comprehensive area-by-area office cleaning checklist ensures every workspace receives proper attention
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <SecurityIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Business-Focused Process
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Know exactly what's included in your office cleaning service with our detailed business cleaning checklist
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Area-by-Area Checklist */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Complete Area-by-Area Office Cleaning Checklist
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            This detailed office cleaning checklist covers every area of your business facility. Our professional cleaners 
            use this exact checklist to ensure thorough, consistent cleaning results in every workspace.
          </Typography>

          <Grid container spacing={6}>
            {officeCleaningChecklist.map((area, index) => (
              <Grid item xs={12} key={index}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box 
                      sx={{
                        width: 60,
                        height: 60,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3
                      }}
                    >
                      {area.icon}
                    </Box>
                    <Typography 
                      variant="h4" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700,
                        color: theme.palette.primary.main
                      }}
                    >
                      {area.title}
                    </Typography>
                  </Box>

                  <List>
                    {area.tasks.map((task, taskIndex) => (
                      <ListItem key={taskIndex} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon sx={{ fontSize: 20, color: theme.palette.primary.main }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={task} 
                          sx={{ 
                            '& .MuiListItemText-primary': { 
                              fontWeight: 500,
                              color: '#333'
                            } 
                          }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Customization Process Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          We Customize Your Office Cleaning Checklist
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto', fontSize: '1.1rem' }}>
          During the estimate process, we assess your specific office layout and business needs. 
          While our office cleaning checklist provides professional standards, we adapt our approach to your unique requirements. 
          Every business is different, and we're experienced in customizing our office cleaning services accordingly.
        </Typography>

        <Grid container spacing={6} alignItems="center">
          {/* Business Assessment */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: theme.palette.primary.main }}>
                Your Business Requirements
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#525252' }}>
                We document your specific office areas, business hours, and special requirements to create 
                a customized cleaning plan that works with your operations.
              </Typography>
              
              <Box 
                sx={{
                  maxWidth: 300,
                  mx: 'auto',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '30px',
                  padding: '20px 15px',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
                  position: 'relative'
                }}
              >
                <Box 
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <img
                    src="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Team-Notes.webp"
                    alt="Office cleaning team notes showing customized business requirements and specific cleaning tasks for commercial clients"
                    title="Custom Business Team Notes - Office Cleaning Requirements"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </Box>
                
                <Box 
                  sx={{
                    width: 60,
                    height: 4,
                    backgroundColor: '#666',
                    borderRadius: 2,
                    mx: 'auto',
                    mt: 2
                  }}
                />
              </Box>
              
              <Typography variant="caption" sx={{ display: 'block', mt: 2, fontStyle: 'italic', color: '#666' }}>
                Custom business notes showing office layout and specific cleaning requirements
              </Typography>
            </Box>
          </Grid>

          {/* Field Implementation */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: theme.palette.primary.main }}>
                Professional Execution
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#525252' }}>
                Our cleaning professionals receive customized checklists on their mobile devices that combine 
                our professional standards with your specific business requirements.
              </Typography>
              
              <Box 
                sx={{
                  maxWidth: 300,
                  mx: 'auto',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '30px',
                  padding: '20px 15px',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
                  position: 'relative'
                }}
              >
                <Box 
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <img
                    src="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Cleaners-Checklist-Example.webp"
                    alt="Mobile office cleaning checklist showing detailed workspace cleaning tasks that commercial cleaning staff use during service visits"
                    title="Professional Office Cleaning Checklist - Mobile Guide for Workspace Cleaning"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </Box>
                
                <Box 
                  sx={{
                    width: 60,
                    height: 4,
                    backgroundColor: '#666',
                    borderRadius: 2,
                    mx: 'auto',
                    mt: 2
                  }}
                />
              </Box>
              
              <Typography variant="caption" sx={{ display: 'block', mt: 2, fontStyle: 'italic', color: '#666' }}>
                Example of office area checklist that cleaners use in the field on their mobile devices
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Additional Services */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Office Cleaning Checklist Add-On Services
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
          In addition to our standard office cleaning checklist, we offer these specialized commercial cleaning services 
          for a complete business environment refresh:
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {officeAddOnServices.map((addon, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: 'none',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    '& .service-icon': {
                      transform: 'rotate(10deg) scale(1.1)',
                    },
                    '& .business-badge': {
                      transform: 'scale(1.1)',
                    }
                  }
                }}
              >
                <Chip 
                  label="BUSINESS ADD-ON"
                  className="business-badge"
                  sx={{
                    position: 'absolute',
                    top: 6,
                    right: 6,
                    zIndex: 10,
                    backgroundColor: '#FFD700',
                    color: '#1C1C1C',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    height: 24,
                    transition: 'transform 0.3s ease',
                    boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)'
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 120,
                    background: `linear-gradient(135deg, ${addon.color} 0%, ${addon.color}CC 50%, ${addon.color}99 100%)`,
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 120,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%)',
                  }}
                />

                <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box 
                    className="service-icon"
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 0,
                      mt: 1,
                      transition: 'transform 0.3s ease',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {addon.icon}
                  </Box>

                  <Box sx={{ height: 60 }} />

                  <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontWeight: 700,
                      color: '#1c1c1c',
                      mb: 1,
                      fontSize: '1.2rem',
                      lineHeight: 1.3,
                      px: 3
                    }}
                  >
                    {addon.service}
                  </Typography>

                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 3, pt: 0 }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#1c1c1c',
                        mb: 3,
                        lineHeight: 1.5,
                        fontSize: '0.9rem',
                        fontWeight: 500
                      }}
                    >
                      {addon.description}
                    </Typography>

                    <Box 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        py: 1,
                        border: '1px solid rgba(28, 28, 28, 0.1)',
                        backgroundColor: 'rgba(28, 28, 28, 0.05)'
                      }}
                    >
                      <AutoAwesomeIcon sx={{ fontSize: 18, color: '#1c1c1c', mr: 1 }} />
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: '#1c1c1c',
                          fontWeight: 600,
                          fontSize: '0.8rem'
                        }}
                      >
                        Professional Service
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Service Types Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            Our Office Cleaning Checklist Works for All Services
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto', fontSize: '1.1rem' }}>
            Whether you choose one-time office cleaning, recurring cleaning, or post-construction cleanup, our trained professionals 
            follow this same comprehensive office cleaning checklist every time. Recurring cleans use the exact 
            same thorough approach - they're simply easier to maintain over time because your office stays consistently clean.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={4}>
              <Card 
                sx={{ 
                  height: '100%', 
                  textAlign: 'center', 
                  p: 4,
                  transition: 'all 0.3s ease',
                  border: `2px solid ${theme.palette.primary.main}20`,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
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
                    mb: 3
                  }}
                >
                  <CleaningServicesIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.main }}>
                  One-Time Cleaning
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#525252' }}>
                  Complete office cleaning checklist for thorough cleaning of your business facility
                </Typography>
                <Button
                  variant="contained"
                  component={Link}
                  to="/quote?service=office-cleaning"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: 'white !important',
                    '&:hover': { 
                      backgroundColor: theme.palette.primary.dark,
                      color: 'white !important',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Get Office Cleaning Quote
                </Button>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card 
                sx={{ 
                  height: '100%', 
                  textAlign: 'center', 
                  p: 4,
                  transition: 'all 0.3s ease',
                  border: `2px solid ${theme.palette.primary.main}20`,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
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
                    mb: 3
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.main }}>
                  Recurring Office Cleaning
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#525252' }}>
                  Same thorough office cleaning checklist every visit - easier to maintain with regular service
                </Typography>
                <Button
                  variant="contained"
                  component={Link}
                  to="/quote?service=recurring-office-cleaning"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: 'white !important',
                    '&:hover': { 
                      backgroundColor: theme.palette.primary.dark,
                      color: 'white !important',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Get Recurring Quote
                </Button>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card 
                sx={{ 
                  height: '100%', 
                  textAlign: 'center', 
                  p: 4,
                  transition: 'all 0.3s ease',
                  border: `2px solid ${theme.palette.primary.main}20`,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
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
                    mb: 3
                  }}
                >
                  <CorporateFareIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.main }}>
                  Post-Construction Cleanup
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#525252' }}>
                  Complete office cleaning checklist for new or renovated business spaces
                </Typography>
                <Button
                  variant="contained"
                  component={Link}
                  to="/quote?service=post-construction-cleaning"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: 'white !important',
                    '&:hover': { 
                      backgroundColor: theme.palette.primary.dark,
                      color: 'white !important',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Get Construction Cleanup Quote
                </Button>
              </Card>
            </Grid>
          </Grid>   
        </Container>
      </Box>

      {/* CTA Section */}
      <Box className="commercial-cta-section" sx={{ color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Ready for Professional Office Cleaning?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Let our trained professionals handle your office cleaning with this comprehensive checklist approach.
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
                border: '3px solid white !important',
                '&:hover': {
                  backgroundColor: '#000000 !important',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Get Free Office Cleaning Quote
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/office-cleaning"
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
              Back to Office Cleaning
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default OfficeCleaningChecklist
