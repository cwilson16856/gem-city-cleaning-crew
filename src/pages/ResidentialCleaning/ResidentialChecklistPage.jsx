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
import KitchenIcon from '@mui/icons-material/Kitchen'
import BedIcon from '@mui/icons-material/Bed'
import LivingIcon from '@mui/icons-material/Living'
import BathroomIcon from '@mui/icons-material/Bathroom'
import StairsIcon from '@mui/icons-material/Stairs'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import DownloadIcon from '@mui/icons-material/Download'
import PrintIcon from '@mui/icons-material/Print'
// Additional icons for enhanced add-on cards
import RestaurantIcon from '@mui/icons-material/Restaurant'
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined'
import WindowIcon from '@mui/icons-material/Window'
import AirIcon from '@mui/icons-material/Air'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/ResidentialPage.css'

const ResidentialChecklistPage = () => {
  const theme = useTheme()

  // Comprehensive cleaning checklist organized by room
  const cleaningChecklist = [
    {
      title: "Kitchen Deep Clean Checklist",
      icon: <KitchenIcon sx={{ fontSize: 32, color: 'white' }} />,
      tasks: [
        "Wash and dry all dishes, utensils, and cookware",
        "Clean inside of microwave thoroughly",
        "Wipe down all appliance exteriors (refrigerator, stove, dishwasher, toaster, coffee maker)",
        "Clean range hood and remove grease buildup",
        "Wipe down backsplash and walls behind stove and sink",
        "Dust and clean all surfaces including countertops and shelves",
        "Remove stains and spills from countertops",
        "Clean kitchen table and chairs (if applicable)",
        "Sanitize small appliances and appliance cords",
        "Empty and sanitize trash cans and recycling bins",
        "Deep clean sink, faucet, and remove mineral buildup",
        "Sweep and mop floors, including corners and baseboards",
        "Clean cabinet fronts and handles",
        "Organize and dust pantry shelves (if requested)"
      ]
    },
    {
      title: "Bathroom Complete Clean Checklist",
      icon: <BathroomIcon sx={{ fontSize: 32, color: 'white' }} />,
      tasks: [
        "Clean and disinfect all light fixtures and exhaust vents",
        "Dust all surfaces including counters, shelves, and decorative items",
        "Clean mirrors with streak-free glass cleaner",
        "Deep clean sink, faucet, and remove soap residue and water spots",
        "Sanitize toilet completely (seat, lid, base, behind toilet, and floor around toilet)",
        "Descale and clean showerhead",
        "Scrub bathtub and shower walls to remove soap scum and mildew",
        "Clean shower doors or curtain and remove water spots",
        "Sweep and hand-mop floors, reaching all corners and baseboards",
        "Empty and sanitize wastebaskets",
        "Replace toilet paper and towels (if provided)",
        "Clean bathroom accessories and towel bars",
        "Sanitize door handles and light switches"
      ]
    },
    {
      title: "Bedroom Thorough Clean Checklist",
      icon: <BedIcon sx={{ fontSize: 32, color: 'white' }} />,
      tasks: [
        "Dust ceiling fans and light fixtures",
        "Dust all surfaces including furniture, nightstands, dressers, and lamps",
        "Clean picture frames and decorative items",
        "Make beds with fresh linens (if provided) or straighten existing bedding",
        "Fluff pillows and arrange decorative pillows",
        "Clean mirrors and windows including sills and frames",
        "Dust electronics including TVs, alarm clocks, and charging stations",
        "Organize and straighten personal items",
        "Empty and clean wastebaskets",
        "Dust baseboards, doors, and door frames",
        "Vacuum carpets and rugs thoroughly",
        "Sweep and mop hard floors",
        "Clean closet doors and organize if requested"
      ]
    },
    {
      title: "Living Areas & Common Spaces Checklist",
      icon: <LivingIcon sx={{ fontSize: 32, color: 'white' }} />,
      tasks: [
        "Clean ceiling fans and light fixtures",
        "Clean windows and mirrors including frames and sills",
        "Dust blinds with microfiber cloth or duster",
        "Dust all furniture surfaces including coffee tables, end tables, and entertainment centers",
        "Clean and organize remote controls and electronic devices",
        "Dust fireplace mantel and surrounding areas (if applicable)",
        "Lightly dust electronics including TV screens and computer monitors",
        "Wipe down baseboards, doors, and door frames",
        "Vacuum upholstery and fluff cushions on sofas and chairs",
        "Organize magazines, books, and decorative items",
        "Vacuum all carpeted areas including under furniture",
        "Sweep and mop hard floors including corners",
        "Dust lamp shades and light fixtures"
      ]
    },
    {
      title: "Hallways & Entryways Checklist",
      icon: <StairsIcon sx={{ fontSize: 32, color: 'white' }} />,
      tasks: [
        "Clean light fixtures and ceiling fans in hallways",
        "Dust picture frames and wall decorations",
        "Clean closet doors and organize coat closets (if requested)",
        "Clean windows and mirrors including frames",
        "Dust and clean air vents",
        "Wipe down baseboards, door frames, and trim",
        "Organize shoes and outerwear in entryways",
        "Vacuum all floor surfaces including stairs",
        "Sweep and mop hard floors",
        "Clean and polish handrails on staircases",
        "Dust decorative tables and organize entry items",
        "Clean front door interior and door handles"
      ]
    },
    {
      title: "Laundry Room Deep Clean Checklist",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />,
      tasks: [
        "Clean washer exterior and interior, including detergent dispensers",
        "Clean dryer exterior and interior, including lint trap and exhaust vent",
        "Wipe down all surfaces including countertops and shelving",
        "Organize and dust laundry supplies and detergents",
        "Clean utility sink and faucet thoroughly",
        "Dust and wipe down any cabinets or storage areas",
        "Clean light fixtures and exhaust fans",
        "Wipe down baseboards and door frames",
        "Sweep and mop floors, including behind appliances",
        "Empty and clean any wastebaskets",
        "Clean and organize storage shelves",
        "Dust any wall-mounted items or decorations"
      ]
    },
    {
      title: "Utility Room & Storage Areas Checklist",
      icon: <KitchenIcon sx={{ fontSize: 32, color: 'white' }} />,
      tasks: [
        "Dust and wipe down water heater exterior",
        "Clean around furnace/HVAC unit (exterior only)",
        "Organize tools and equipment on shelves and hooks",
        "Dust and clean all storage shelves and surfaces",
        "Clean light fixtures and replace bulbs if needed",
        "Sweep and mop floors thoroughly",
        "Wipe down utility panels and electrical boxes (exterior only)",
        "Clean any utility sinks and faucets",
        "Organize cleaning supplies and chemicals safely",
        "Remove cobwebs from corners and ceiling",
        "Wipe down baseboards and door frames",
        "Empty and clean any trash receptacles"
      ]
    }
  ]

  // Enhanced deep cleaning services with icons and descriptions
  const deepCleaningAddOns = [
    {
      service: "Inside oven cleaning",
      icon: <RestaurantIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Deep scrubbing of oven interior, racks, and glass door",
      color: '#FF6B35' // Orange for oven heat
    },
    {
      service: "Inside refrigerator cleaning", 
      icon: <KitchenOutlinedIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Complete sanitization of shelves, drawers, and compartments",
      color: '#4A90E2' // Cool blue for refrigeration
    },
    {
      service: "Inside cabinet cleaning",
      icon: <KitchenIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Interior cleaning and organization of kitchen cabinets",
      color: '#8B4513' // Wood brown for cabinets
    },
    {
      service: "Baseboards detailed cleaning",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Hand-wiping all baseboards and trim throughout your home",
      color: '#2E8B57' // Forest green for detailed work
    },
    {
      service: "Window washing (interior)",
      icon: <WindowIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Streak-free cleaning of windows, sills, and frames inside",
      color: '#87CEEB' // Sky blue for windows
    },
    {
      service: "Ceiling fan blade cleaning",
      icon: <AirIcon sx={{ fontSize: 32, color: 'white' }} />,
      description: "Thorough dusting and wiping of ceiling fan blades",
      color: '#9370DB' // Purple for air circulation
    }
  ]

  return (
    <>
      <Helmet>
        <title>House Cleaning Checklist | Professional Dayton Cleaning Standards | Gem City Cleaning</title>
        <meta name="description" content="Complete house cleaning checklist used by professional cleaners in Dayton. Our detailed room-by-room house cleaning checklist ensures nothing gets missed in your home cleaning service." />
        <meta name="keywords" content="house cleaning checklist, Dayton house cleaning checklist, residential cleaning checklist, professional cleaning checklist, home cleaning checklist, cleaning standards" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/residential-house-cleaning-checklist" />
        <meta property="og:title" content="Professional House Cleaning Checklist | Gem City Cleaning" />
        <meta property="og:description" content="Complete house cleaning checklist used by professional cleaners in Dayton. Room-by-room guide ensuring nothing gets missed." />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional House Cleaning Checklist | Gem City Cleaning" />
        <meta name="twitter:description" content="Complete house cleaning checklist used by professional cleaners in Dayton. Room-by-room guide ensuring nothing gets missed." />
        <meta name="twitter:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />
        
        <link rel="canonical" href="https://gemcitycleaningcrew.com/residential-house-cleaning-checklist" />
        
        {/* Checklist Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Professional House Cleaning Checklist",
            "description": "Comprehensive house cleaning checklist used by professional cleaners in Dayton, OH",
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
            "totalTime": "PT2H",
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Professional cleaning supplies"
              },
              {
                "@type": "HowToSupply", 
                "name": "Microfiber cloths"
              },
              {
                "@type": "HowToSupply",
                "name": "Vacuum cleaner"
              }
            ],
            "step": cleaningChecklist.map((room, index) => ({
              "@type": "HowToStep",
              "name": room.title,
              "text": room.tasks.join(", "),
              "position": index + 1
            }))
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is included in a professional house cleaning checklist?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our house cleaning checklist includes detailed room-by-room cleaning tasks for kitchens, bathrooms, bedrooms, living areas, hallways, laundry rooms, utility rooms, and pantries. Each area has specific cleaning tasks to ensure thorough, consistent results."
                }
              },
              {
                "@type": "Question", 
                "name": "Do you use the same house cleaning checklist for all services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our trained professionals follow the same comprehensive house cleaning checklist for deep cleaning, recurring cleaning, and move in/out cleaning. Deep cleaning may include additional tasks, but the core checklist ensures consistent quality every time."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Box
        className="hero-section"
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/images/legacy/clay-elliot-1by_GbwEMwc-unsplash-2.jpg')`,
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
            label="PROFESSIONAL HOUSE CLEANING CHECKLIST" 
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
            Professional House Cleaning Checklist
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
            The comprehensive room-by-room house cleaning checklist our professional cleaners use to ensure 
            nothing gets missed in your Dayton home cleaning service
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
              Get Professional Cleaning
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
              Download House Cleaning Checklist
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Introduction Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
            Why Use a Professional House Cleaning Checklist?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto', lineHeight: 1.7 }}>
            At Gem City Cleaning Crew, our trained professionals follow this comprehensive house cleaning checklist to ensure 
            consistent, thorough cleaning every time. Our 3-month training program teaches cleaners to complete 
            every task with attention to detail and care for your home. This house cleaning checklist guarantees nothing gets missed.
          </Typography>
        </Box>

        {/* Key Benefits */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <CleaningServicesIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Consistent Results
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Every cleaner follows the same detailed house cleaning checklist ensuring consistent quality every visit
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
                Comprehensive room-by-room house cleaning checklist ensures every area receives proper attention
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <DownloadIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Transparent Process
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Know exactly what's included in your cleaning service with our detailed house cleaning checklist
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Room-by-Room Checklist */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Complete Room-by-Room House Cleaning Checklist
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            This detailed house cleaning checklist covers every area of your home. Our professional cleaners 
            use this exact checklist to ensure thorough, consistent cleaning results in every room.
          </Typography>

          <Grid container spacing={6}>
            {cleaningChecklist.map((room, index) => (
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
                      {room.icon}
                    </Box>
                    <Typography 
                      variant="h4" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700,
                        color: theme.palette.primary.main
                      }}
                    >
                      {room.title}
                    </Typography>
                  </Box>

                  <List>
                    {room.tasks.map((task, taskIndex) => (
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
          We Customize Your House Cleaning Checklist
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto', fontSize: '1.1rem' }}>
          During the estimate process, we find out exactly what rooms you want cleaned and how you want them cleaned. 
          While our house cleaning checklist provides professional standards, we don't always have to follow this guide exactly. 
          Everyone wants something a little different, and we're completely okay with that. We adapt our approach to your specific needs and preferences.
        </Typography>

        <Grid container spacing={6} alignItems="center">
          {/* Team Notes Mobile Mockup */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: theme.palette.primary.main }}>
                Your Custom Preferences
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#525252' }}>
                We document your specific room selections and special requests in our team notes system, 
                ensuring every cleaner knows exactly what you want done.
              </Typography>
              
              {/* Mobile Phone Frame */}
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
                {/* Phone Screen */}
                <Box 
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <img
                    src="/images/legacy/Team-Notes.webp"
                    alt="Team notes showing customized room selections and specific cleaning tasks for individual client preferences"
                    title="Custom Client Team Notes - Personalized Cleaning Instructions"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </Box>
                
                {/* Phone Home Indicator */}
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
                Custom team notes showing client's preferred rooms and specific cleaning requests
              </Typography>
            </Box>
          </Grid>

          {/* Cleaner's Field Checklist */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: theme.palette.primary.main }}>
                What Cleaners See in the Field
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#525252' }}>
                Our cleaners receive a customized checklist on their mobile devices that combines our professional 
                standards with your specific preferences for each room.
              </Typography>
              
              {/* Mobile Phone Frame */}
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
                {/* Phone Screen */}
                <Box 
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <img
                    src="/images/legacy/Cleaners-Checklist-Example.webp"
                    alt="Mobile house cleaning checklist showing detailed bedroom cleaning tasks that field staff use during service visits"
                    title="Professional House Cleaning Checklist - Mobile Field Guide for Bedroom Cleaning"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </Box>
                
                {/* Phone Home Indicator */}
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
                Example of bedroom checklist that cleaners use in the field on their mobile devices
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Key Benefits of Customization */}
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 4,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: `2px solid ${theme.palette.primary.main}15`,
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: theme.shadows[12],
                  borderColor: theme.palette.primary.main,
                  '& .benefit-icon': {
                    transform: 'scale(1.1) rotate(5deg)',
                    color: theme.palette.primary.dark
                  }
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`
                }
              }}>
                <Box 
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.primary.main}05 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    border: `3px solid ${theme.palette.primary.main}20`
                  }}
                >
                  <CheckCircleIcon 
                    className="benefit-icon"
                    sx={{ 
                      fontSize: 48, 
                      color: theme.palette.primary.main, 
                      transition: 'all 0.3s ease'
                    }} 
                  />
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: theme.palette.primary.main }}>
                  Your Preferences Documented
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Every special request and room preference is recorded in our system for consistent service
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 4,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: `2px solid ${theme.palette.primary.main}15`,
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: theme.shadows[12],
                  borderColor: theme.palette.primary.main,
                  '& .benefit-icon': {
                    transform: 'scale(1.1) rotate(5deg)',
                    color: theme.palette.primary.dark
                  }
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`
                }
              }}>
                <Box 
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.primary.main}05 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    border: `3px solid ${theme.palette.primary.main}20`
                  }}
                >
                  <CleaningServicesIcon 
                    className="benefit-icon"
                    sx={{ 
                      fontSize: 48, 
                      color: theme.palette.primary.main, 
                      transition: 'all 0.3s ease'
                    }} 
                  />
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: theme.palette.primary.main }}>
                  Flexible Standards
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Professional cleaning standards adapted to your unique needs and preferences
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 4,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: `2px solid ${theme.palette.primary.main}15`,
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: theme.shadows[12],
                  borderColor: theme.palette.primary.main,
                  '& .benefit-icon': {
                    transform: 'scale(1.1) rotate(5deg)',
                    color: theme.palette.primary.dark
                  }
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`
                }
              }}>
                <Box 
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.primary.main}05 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    border: `3px solid ${theme.palette.primary.main}20`
                  }}
                >
                  <DownloadIcon 
                    className="benefit-icon"
                    sx={{ 
                      fontSize: 48, 
                      color: theme.palette.primary.main, 
                      transition: 'all 0.3s ease'
                    }} 
                  />
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: theme.palette.primary.main }}>
                  Mobile Technology
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Cleaners access your customized checklist on mobile devices for accuracy in the field
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Additional Services */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          House Cleaning Checklist Add-On Services
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
          In addition to our standard house cleaning checklist, we offer these specialized deep cleaning services 
          for a complete home refresh:
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {deepCleaningAddOns.map((addon, index) => (
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
                    '& .premium-badge': {
                      transform: 'scale(1.1)',
                    }
                  }
                }}
              >
                {/* Premium Badge */}
                <Chip 
                  label="PREMIUM ADD-ON"
                  className="premium-badge"
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

                {/* Gradient Background */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 120,
                    background: `linear-gradient(135deg, ${addon.color} 0%, ${addon.color}CC 50%, ${addon.color}99 100%)`,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 20,
                      background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))'
                    }
                  }}
                />

                {/* Dark overlay for better text contrast */}
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
                  {/* Icon Container - in gradient area */}
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

                  {/* Spacer to push content below gradient */}
                  <Box sx={{ height: 60 }} />

                  {/* Service Title - now completely below the gradient */}
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

                  {/* White content area */}
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 3, pt: 0 }}>
                    {/* Description */}
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

                    {/* Bottom Section with Check Icon */}
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
            Our House Cleaning Checklist Works for All Services
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto', fontSize: '1.1rem' }}>
            Whether you choose deep cleaning, recurring cleaning, or move in/out cleaning, our trained professionals 
            follow this same comprehensive house cleaning checklist every time. The main difference with deep cleaning is that we may 
            include additional tasks, but the core house cleaning checklist process remains consistent. Recurring cleans use the exact 
            same thorough approach - they're simply easier to maintain over time because your home stays consistently clean.
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
                  Deep Cleaning
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#525252' }}>
                  Complete house cleaning checklist plus additional deep cleaning tasks for a thorough refresh
                </Typography>
                <Button
                  variant="contained"
                  component={Link}
                  to="/quote?service=deep-cleaning"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: 'white !important',
                    border: '2px solid transparent',
                    '&:hover': { 
                      backgroundColor: theme.palette.primary.dark,
                      color: 'white !important',
                      border: '2px solid white',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Get Deep Cleaning Quote
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
                  Recurring Cleaning
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#525252' }}>
                  Same thorough house cleaning checklist every visit - easier to maintain with regular service
                </Typography>
                <Button
                  variant="contained"
                  component={Link}
                  to="/quote?service=recurring-cleaning"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: 'white !important',
                    border: '2px solid transparent',
                    '&:hover': { 
                      backgroundColor: theme.palette.primary.dark,
                      color: 'white !important',
                      border: '2px solid white',
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
                  <DownloadIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.main }}>
                  Move In/Out Cleaning
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#525252' }}>
                  Complete house cleaning checklist for empty or full homes during moving transitions
                </Typography>
                <Button
                  variant="contained"
                  component={Link}
                  to="/quote?service=move-cleaning"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: 'white !important',
                    border: '2px solid transparent',
                    '&:hover': { 
                      backgroundColor: theme.palette.primary.dark,
                      color: 'white !important',
                      border: '2px solid white',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Get Move Cleaning Quote
                </Button>
              </Card>
            </Grid>
          </Grid>   
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ backgroundColor: theme.palette.primary.main, color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Ready for Professional Cleaning?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Let our trained professionals handle your home cleaning with this comprehensive checklist approach.
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
              Get Free Quote
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/residential"
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
              Back to Services
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default ResidentialChecklistPage 