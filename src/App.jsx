import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import ScrollToTop from './components/ScrollToTop'

// Pages
import HomePage from './pages/HomePage'
import ResidentialPage from './pages/ResidentialCleaning/ResidentialPage'
import ResidentialChecklistPage from './pages/ResidentialCleaning/ResidentialChecklistPage'
import RecurringCleaningPage from './pages/ResidentialCleaning/RecurringCleaningPage'
import DeepCleaningPage from './pages/ResidentialCleaning/DeepCleaningPage'
import MoveInOutCleaningPage from './pages/ResidentialCleaning/MoveInOutCleaningPage'
import MoveInCleaningPage from './pages/ResidentialCleaning/MoveInCleaning'
import MoveOutCleaningPage from './pages/ResidentialCleaning/MoveOutCleaning'
import AirBnbCleaning from './pages/ResidentialCleaning/AirBnbCleaning'
import ApartmentCleaning from './pages/ResidentialCleaning/ApartmentCleaning'
import CondoCleaning from './pages/ResidentialCleaning/CondoCleaning'
import KitchenCleaningServices from './pages/ResidentialCleaning/KitchenCleaningServices'
import BathroomCleaningServices from './pages/ResidentialCleaning/BathroomCleaningServices'
import CommercialPage from './pages/CommercialCleaning/CommercialPage'
import CommercialOneTimeCleaning from './pages/CommercialCleaning/CommercialOneTimeCleaning'
import OfficeCleaning from './pages/CommercialCleaning/OfficeCleaning'
import OfficeCleaningChecklist from './pages/CommercialCleaning/OfficeCleaningChecklist'
import RetailCleaning from './pages/CommercialCleaning/RetailCleaning'
import DaycareCleaning from './pages/CommercialCleaning/EducationCenterCleaning'
import ApartmentBuildingCleaning from './pages/CommercialCleaning/ApartmentBuildingCleaning'
import IndustrialCleaning from './pages/CommercialCleaning/IndustrialCleaning'
import BeavercreekCommercialPage from './pages/Locations/Beavercreek/CommercialCleaning/BeavercreekCommercialPage'
import LocationPage from './pages/LocationPage'
import BlogPage from './pages/BlogPage'
import PostPage from './pages/PostPage'
import AboutPage from './pages/AboutPage'
import QuotePage from './pages/QuotePage'
import NotFound from './pages/NotFound'

// Hooks
import { useSiteInfo } from './hooks/useWordPress'

// Utils
import { generateLocalBusinessStructuredData } from './utils/seo'

// Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: '#D81B60', // Softer, more professional pink
      dark: '#AD1457',
      light: '#F06292',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1C1C1C', // Softer black, not pure black
      light: '#424242',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#1C1C1C', // Match secondary for consistency
      secondary: '#525252',
    },
    success: {
      main: '#D81B60', // Use primary pink instead of green
      light: '#F06292',
      dark: '#AD1457',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#1C1C1C',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#1C1C1C',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#1C1C1C',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1C1C1C',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#525252',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(216, 27, 96, 0.3)',
          }
        },
        contained: {
          background: 'linear-gradient(135deg, #D81B60 0%, #AD1457 100%)',
          color: '#ffffff',
          '&:hover': {
            background: 'linear-gradient(135deg, #AD1457 0%, #880E4F 100%)',
            transform: 'translateY(-1px)',
            color: 'white'
          }
        },
        outlined: {
          borderColor: '#D81B60',
          color: '#D81B60',
          '&:hover': {
            borderColor: '#AD1457',
            backgroundColor: 'rgba(216, 27, 96, 0.04)',
            color: 'white'
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#1C1C1C',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        }
      }
    }
  }
})

function App() {
  const { data: siteInfo, isLoading: siteLoading } = useSiteInfo()

  const localBusinessData = generateLocalBusinessStructuredData()

  if (siteLoading) {
    return <LoadingSpinner />
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Helmet>
          <title>Gem City Cleaning Crew - Professional Cleaning Services</title>
          <meta 
            name="description" 
            content="Professional residential and commercial cleaning services in Dayton, OH. We make life easier with reliable, thorough cleaning. Call 937-892-4157 for a free quote." 
          />
          <meta name="keywords" content="cleaning services, house cleaning, commercial cleaning, Dayton Ohio, residential cleaning, office cleaning, Gem City" />
          <meta name="author" content="Gem City Cleaning Crew" />
          
          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify(localBusinessData)}
          </script>
          
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Gem City Cleaning Crew - Professional Cleaning Services" />
          <meta property="og:description" content="Professional residential and commercial cleaning services in Dayton, OH. We make life easier with reliable, thorough cleaning." />
          <meta property="og:url" content="https://gemcitycleaningcrew.com" />
          <meta property="og:site_name" content="Gem City Cleaning Crew" />
          <meta property="og:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Gem City Cleaning Crew - Professional Cleaning Services" />
          <meta name="twitter:description" content="Professional residential and commercial cleaning services in Dayton, OH. We make life easier with reliable, thorough cleaning." />
          <meta name="twitter:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp" />
          
          {/* Contact Information */}
          <meta name="contact:phone_number" content="937-892-4157" />
          <meta name="contact:email" content="info@gemcitycleaningcrew.com" />
          
          {/* Geographic Information */}
          <meta name="geo.region" content="US-OH" />
          <meta name="geo.placename" content="Dayton, Ohio" />
        </Helmet>

        <Header siteInfo={siteInfo} />
        
        <ScrollToTop />
        
        <main className="main-content">
          <Routes>
            {/* Other routes remain the same */}
            <Route path="/" element={<HomePage />} />
            <Route path="/residential" element={<ResidentialPage />} />
            <Route path="/residential-house-cleaning-checklist" element={<ResidentialChecklistPage />} />
            <Route path="/recurring-cleaning-service" element={<RecurringCleaningPage />} />
            <Route path="/deep-cleaning" element={<DeepCleaningPage />} />
            <Route path="/move-in-out-cleaning" element={<MoveInOutCleaningPage />} />
            <Route path="/move-in-cleaning" element={<MoveInCleaningPage />} />
            <Route path="/move-out-cleaning" element={<MoveOutCleaningPage />} />
            <Route path="/airbnb-cleaning-service" element={<AirBnbCleaning />} />
            <Route path="/apartment-cleaning" element={<ApartmentCleaning />} />
            <Route path="/condo-cleaning" element={<CondoCleaning />} />
            <Route path="/kitchen-cleaning-services" element={<KitchenCleaningServices />} />
            <Route path="/bathroom-cleaning-services" element={<BathroomCleaningServices />} />
            <Route path="/commercial" element={<CommercialPage />} />
            <Route path="/commercial-one-time-cleaning" element={<CommercialOneTimeCleaning />} />
            <Route path="/office-cleaning" element={<OfficeCleaning />} />
            <Route path="/office-cleaning-checklist" element={<OfficeCleaningChecklist />} />
            <Route path="/retail-cleaning" element={<RetailCleaning />} />
            <Route path="/school-cleaning" element={<DaycareCleaning />} />
            <Route path="/apartment-building-cleaning" element={<ApartmentBuildingCleaning />} />
            <Route path="/industrial-cleaning" element={<IndustrialCleaning />} />
            <Route path="/locations" element={<LocationPage />} />
            <Route path="/locations/:city/house-cleaning-services" element={<LocationPage />} />
            <Route path="/locations/:city/commercial-cleaning-services" element={<LocationPage />} />
            <Route path="/locations/beavercreek/commercial-services" element={<BeavercreekCommercialPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<PostPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer siteInfo={siteInfo} />
      </div>
    </ThemeProvider>
  )
}

export default App 