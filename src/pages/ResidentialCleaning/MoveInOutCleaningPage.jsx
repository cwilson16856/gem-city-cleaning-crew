// Move-In/Move-Out Cleaning Page

import React from 'react'
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
  Chip,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardMedia
} from '@mui/material'
// Individual icon imports to reduce bundle size
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import HomeIcon from '@mui/icons-material/Home'
import KitchenIcon from '@mui/icons-material/Kitchen'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ScheduleIcon from '@mui/icons-material/Schedule'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import MovingIcon from '@mui/icons-material/Moving'
import SecurityIcon from '@mui/icons-material/Security'
import NewReleasesIcon from '@mui/icons-material/NewReleases'
import WindowIcon from '@mui/icons-material/Window'
import FloorIcon from '@mui/icons-material/Layers'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/ResidentialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'

const MoveInOutCleaningPage = () => {
  const theme = useTheme()

  // Before/After comparison data with new images
  const beforeAfterComparisons = [
    {
      title: "Oven Deep Cleaning",
      description: "Complete interior and exterior oven cleaning with grease removal and sanitization",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Dirty-Oven-e1749136044376.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Clean-Oven-e1749135938970.webp",
      beforeAlt: "Dirty oven interior showing grease buildup before move-in move-out cleaning services Dayton",
      afterAlt: "Spotless clean oven after professional move-in move-out cleaning Dayton service showing pristine condition"
    },
    {
      title: "Toilet Deep Sanitization",
      description: "Thorough toilet cleaning including behind-the-toilet areas and complete sanitization",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/dirty-toilet-e1749136119717.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/clean-toilet-e1749135967505.webp",
      beforeAlt: "Dirty toilet showing stains and buildup before professional move-out cleaning service",
      afterAlt: "Spotless toilet after move-out cleaning service showing complete sanitization and shine"
    },
    {
      title: "Refrigerator Deep Cleaning",
      description: "Complete interior cleaning and sanitization of refrigerator shelves, drawers, and compartments",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/IMG-20240803-WA0010.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/IMG-20240803-WA0028.webp",
      beforeAlt: "Dirty refrigerator interior with spills and stains before move-out cleaning service",
      afterAlt: "Clean refrigerator interior after professional move-out cleaning showing sanitized shelves"
    },
    {
      title: "Ceiling Fan Deep Cleaning",
      description: "Thorough cleaning of ceiling fan blades, housing, and light fixtures",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/dirty-ceiling-fan-e1749136101325.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/clean-ceiling-fan-e1749136008916.webp",
      beforeAlt: "Dirty ceiling fan with dust buildup on blades before move-out cleaning",
      afterAlt: "Clean ceiling fan after professional move-out cleaning with dust-free blades"
    }
  ]

  // Move-In/Out specific cleaning features
  const moveInOutFeatures = [
    {
      title: "Empty Home Advantage",
      description: "Complete access to all areas without furniture for thorough cleaning and wall washing",
      icon: <HomeIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Inside Cabinets & Drawers",
      description: "Deep cleaning of all cabinet interiors, drawers, and storage areas throughout the home",
      icon: <KitchenIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Wall & Baseboard Detail",
      description: "Complete wall washing and detailed baseboard cleaning in every room",
      icon: <CleaningServicesIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Window & Sill Deep Clean",
      description: "Interior window cleaning and detailed sill and frame cleaning throughout",
      icon: <WindowIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Floor Deep Cleaning",
      description: "Intensive floor cleaning including corners and under-cabinet areas with full access",
      icon: <FloorIcon sx={{ fontSize: 32, color: 'white' }} />
    },
    {
      title: "Fixture Sanitization",
      description: "Complete sanitization of all light fixtures, ceiling fans, and hardware",
      icon: <AutoAwesomeIcon sx={{ fontSize: 32, color: 'white' }} />
    }
  ]

  // Included services for move-in/out cleaning
  const includedServices = [
    "Complete wall washing",
    "All cabinet & drawer interiors", 
    "Inside all appliances",
    "Window sills & frames",
    "Baseboards & trim detail",
    "Light fixture deep cleaning",
    "Floor deep cleaning & corners",
    "Bathroom complete sanitization",
    "Switch plates & outlet covers",
    "Closet interior cleaning"
  ]

  // Table of Contents items
  const tableOfContentsItems = [
    { text: "Why Choose Professional Cleaning", href: "#why-choose" },
    { text: "Before & After Results", href: "#before-after" },
    { text: "What's Included", href: "#whats-included" },
    { text: "Perfect for Every Moving Situation", href: "#moving-situations" },
    { text: "Complete Cleaning Services", href: "#complete-services" },
    { text: "Our Cleaning Process", href: "#cleaning-process" },
    { text: "Areas We Serve", href: "#service-areas" },
    { text: "Get Your Free Quote", href: "#get-quote" }
  ]

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags - Enhanced */}
        <title>#1 Move-In Move-Out Cleaning Services Dayton OH | Top-Rated Moving Cleaners | Gem City Cleaning</title>
        <meta name="title" content="#1 Move-In Move-Out Cleaning Services Dayton OH | Top-Rated Moving Cleaners | Gem City Cleaning" />
        <meta name="description" content="⭐ #1 Professional move-in/move-out cleaning services in Dayton, OH. Deep cleaning for empty homes, perfect for landlords, tenants, and new homeowners. Protect your security deposit! Same-day quotes available." />
        <meta name="keywords" content="move in cleaning Dayton, move out cleaning Dayton OH, moving cleaning service, empty home cleaning, security deposit cleaning, tenant cleaning service, landlord cleaning, move-in ready cleaning, professional moving cleaners Dayton, apartment cleaning move out, house cleaning move in, Kettering move out cleaning, Centerville moving cleaning, Oakwood move in cleaning" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="US-OH" />
        <meta name="geo.placename" content="Dayton, Ohio" />
        <meta name="geo.position" content="39.7589;-84.1916" />
        <meta name="ICBM" content="39.7589, -84.1916" />
        <meta name="author" content="Gem City Cleaning Crew" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="theme-color" content="#D81B60" />
        
        {/* Preload critical resources for better LCP */}
        <link rel="preload" as="image" href="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Clean-Oven.webp" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
        
        {/* Enhanced Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gem City Cleaning Crew" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/move-in-out-cleaning" />
        <meta property="og:title" content="#1 Professional Move-In Move-Out Cleaning Services Dayton OH | Gem City Cleaning" />
        <meta property="og:description" content="⭐ #1 Professional move-in/move-out cleaning services in Dayton, OH. Deep cleaning for empty homes, perfect for landlords, tenants, and new homeowners. Protect your security deposit!" />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp" />
        <meta property="og:image:alt" content="Professional move-in move-out cleaning services in Dayton OH" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={new Date().toISOString()} />
        <meta property="business:contact_data:street_address" content="278 Mertland Ave" />
        <meta property="business:contact_data:locality" content="Dayton" />
        <meta property="business:contact_data:region" content="OH" />
        <meta property="business:contact_data:postal_code" content="45431" />
        <meta property="business:contact_data:country_name" content="United States" />
        <meta property="business:contact_data:phone_number" content="+1-937-892-4157" />
        
        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GemCityCleaning" />
        <meta name="twitter:creator" content="@GemCityCleaning" />
        <meta name="twitter:title" content="#1 Professional Move-In Move-Out Cleaning Services Dayton OH" />
        <meta name="twitter:description" content="⭐ #1 Professional move-in/move-out cleaning services in Dayton, OH. Deep cleaning for empty homes, protect your security deposit!" />
        <meta name="twitter:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp" />
        <meta name="twitter:image:alt" content="Move-in move-out cleaning services Dayton OH" />
        
        {/* Additional Social Media */}
        <meta property="article:author" content="Gem City Cleaning Crew" />
        <meta property="article:publisher" content="https://www.facebook.com/GemCityCleaningCrew" />
        <meta property="article:published_time" content="2024-01-15T10:00:00Z" />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        
        {/* Canonical and Alternate URLs */}
        <link rel="canonical" href="https://gemcitycleaningcrew.com/move-in-out-cleaning" />
        <link rel="alternate" hrefLang="en-us" href="https://gemcitycleaningcrew.com/move-in-out-cleaning" />
        
        {/* Enhanced Service Schema with more details */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://gemcitycleaningcrew.com/move-in-out-cleaning#service",
            "name": "Move-In Move-Out Cleaning Services",
            "alternateName": ["Moving Cleaning Service", "Tenant Cleaning", "Move Out Cleaning", "Move In Cleaning", "Empty Home Cleaning"],
            "description": "Professional move-in/move-out cleaning services in Dayton, OH including deep cleaning for empty homes, perfect for landlords, tenants, and new homeowners",
            "serviceType": "Move-In Move-Out Cleaning",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 39.7589,
                "longitude": -84.1916
              },
              "geoRadius": "30000"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gem City Cleaning Crew",
              "telephone": "937-892-4157",
              "email": "info@gemcitycleaningcrew.com",
              "url": "https://gemcitycleaningcrew.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "278 Mertland Ave",
                "addressLocality": "Dayton",
                "addressRegion": "OH",
                "postalCode": "45431",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.7589,
                "longitude": -84.1916
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "15:00"
                }
              ]
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
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Move-In Move-Out Cleaning Services",
              "itemListElement": moveInOutFeatures.map((feature, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": feature.title,
                  "description": feature.description
                }
              }))
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "85",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "Offer",
              "name": "Move-In Move-Out Cleaning Service",
              "description": "Professional cleaning for moving transitions",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "areaServed": "Dayton, OH and surrounding areas"
            }
          })}
        </script>

        {/* Enhanced FAQ Schema with more comprehensive questions */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is included in move-in/move-out cleaning services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our move-in/move-out cleaning services include complete wall washing, all cabinet and drawer interiors, inside appliances, window sills, baseboards, light fixtures, and thorough floor cleaning with full access to empty spaces. We also clean switch plates, outlet covers, and closet interiors."
                }
              },
              {
                "@type": "Question",
                "name": "How long does move-in/move-out cleaning take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Move-in/move-out cleaning typically takes 4-8 hours depending on home size and condition. Empty homes allow for more thorough cleaning of all areas including walls and hidden spaces that are normally blocked by furniture."
                }
              },
              {
                "@type": "Question",
                "name": "Will move-out cleaning help me get my security deposit back?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, professional move-out cleaning significantly increases your chances of getting your full security deposit back. Our thorough service meets most landlord expectations and lease requirements for cleanliness."
                }
              },
              {
                "@type": "Question",
                "name": "Do you clean inside appliances during move-in/out cleaning?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we clean inside all appliances including refrigerator, oven, microwave, and dishwasher as part of our move-in/out cleaning service. This ensures everything is sanitized for the next occupants."
                }
              },
              {
                "@type": "Question",
                "name": "How much does move-in/move-out cleaning cost in Dayton?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Move-in/move-out cleaning costs vary based on home size and condition. Contact us at 937-892-4157 for a free, no-obligation quote tailored to your specific property and needs."
                }
              },
              {
                "@type": "Question",
                "name": "Can you clean walls during move-in/out cleaning?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, complete wall washing is included in our move-in/out cleaning service. With empty homes, we have full access to clean walls, baseboards, and areas typically hidden by furniture."
                }
              }
            ]
          })}
        </script>

        {/* LocalBusiness Schema for better local SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://gemcitycleaningcrew.com/#business",
            "name": "Gem City Cleaning Crew",
            "alternateName": "Gem City Cleaning",
            "description": "Professional move-in/move-out cleaning services in Dayton, OH. Deep cleaning for empty homes, perfect for landlords, tenants, and new homeowners.",
            "url": "https://gemcitycleaningcrew.com",
            "telephone": "+1-937-892-4157",
            "email": "info@gemcitycleaningcrew.com",
            "foundingDate": "2017",
            "priceRange": "$$",
            "currenciesAccepted": "USD",
            "paymentAccepted": "Cash, Check, Credit Card, Venmo, Zelle",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "278 Mertland Ave",
              "addressLocality": "Dayton",
              "addressRegion": "OH",
              "postalCode": "45431",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 39.7589,
              "longitude": -84.1916
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
                "name": "Kettering"
              },
              {
                "@type": "City",
                "name": "Centerville"
              },
              {
                "@type": "City",
                "name": "Oakwood"
              },
              {
                "@type": "City",
                "name": "Huber Heights"
              },
              {
                "@type": "City",
                "name": "Miamisburg"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "85",
              "bestRating": "5",
              "worstRating": "1"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "15:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/GemCityCleaningCrew",
              "https://www.instagram.com/gemcitycleaningcrew"
            ]
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://gemcitycleaningcrew.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Residential Services",
                "item": "https://gemcitycleaningcrew.com/residential"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Move-In Move-Out Cleaning",
                "item": "https://gemcitycleaningcrew.com/move-in-out-cleaning"
              }
            ]
          })}
        </script>

        {/* ImageObject Schema for before/after images */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Move-In Move-Out Cleaning Before and After Photos",
            "description": "Real before and after photos showing the dramatic results of our professional move-in/move-out cleaning services in Dayton, OH",
            "image": beforeAfterComparisons.map((comparison) => ({
              "@type": "ImageObject",
              "name": comparison.title,
              "description": comparison.description,
              "url": comparison.afterImage,
              "contentUrl": comparison.afterImage,
              "caption": comparison.afterAlt
            }))
          })}
        </script>

        {/* WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://gemcitycleaningcrew.com/move-in-out-cleaning#webpage",
            "name": "Move-In Move-Out Cleaning Services Dayton OH | Professional Moving Cleaners",
            "description": "Professional move-in/move-out cleaning services in Dayton, OH. Deep cleaning for empty homes, perfect for landlords, tenants, and new homeowners.",
            "url": "https://gemcitycleaningcrew.com/move-in-out-cleaning",
            "mainEntity": {
              "@type": "Service",
              "name": "Move-In Move-Out Cleaning Services"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://gemcitycleaningcrew.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Residential Services",
                  "item": "https://gemcitycleaningcrew.com/residential"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Move-In Move-Out Cleaning",
                  "item": "https://gemcitycleaningcrew.com/move-in-out-cleaning"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".hero-subtitle"]
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Box
        className="hero-section"
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/Clean-Oven.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          minHeight: { xs: 600, md: 700 },
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Chip 
            label="PROFESSIONAL MOVE-IN/MOVE-OUT CLEANING" 
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
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.1,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
              color: 'white'
            }}
          >
            Move-In Move-Out Cleaning Services Dayton
          </Typography>
          
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              fontWeight: 400,
              mb: 2,
              maxWidth: 800,
              mx: 'auto',
              opacity: 1,
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
              color: 'white'
            }}
          >
            Professional Moving Cleaning for Stress-Free Transitions
          </Typography>

          <Typography 
            variant="h3" 
            component="h3" 
            sx={{ 
              fontSize: { xs: '1.1rem', md: '1.4rem' },
              fontWeight: 500,
              mb: 4,
              maxWidth: 700,
              mx: 'auto',
              opacity: 1,
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
              color: 'white'
            }}
          >
            Deep cleaning for empty homes - perfect for landlords, tenants, and new homeowners
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=move-in-out"
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
                  transform: 'translateY(-2px)',
				  color: 'white',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)'
                }
              }}
            >
              Get Move-In/Out Quote
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
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
				  color: 'white',
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)'
                }
              }}
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Table of Contents */}
      <TableOfContents 
        items={tableOfContentsItems} 
        collapsible={true}
        defaultExpanded={false}
        showItemCount={true}
      />

      {/* Introduction Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="why-choose">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
            Why Choose Professional Move-In/Move-Out Cleaning in Dayton?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', maxWidth: 900, mx: 'auto', lineHeight: 1.7 }}>
            Our <strong>move-in/move-out cleaning services in Dayton</strong> provide the most comprehensive cleaning solution for your moving transition. 
            Moving is stressful enough without worrying about cleaning. Our professional cleaning services 
            in <strong>Dayton, Ohio</strong> handle the deep cleaning so you can focus on your transition. With empty homes, we can access every corner, 
            wall, and hidden area for the most thorough cleaning possible. Whether you're moving to <strong>Kettering</strong>, <strong>Centerville</strong>, 
            <strong>Oakwood</strong>, or anywhere in the greater Dayton area, our experienced cleaning team delivers exceptional results that meet 
            <a href="https://www.cdc.gov/infectioncontrol/guidelines/environmental/cleaning.html" target="_blank" rel="noopener noreferrer" style={{ color: '#D81B60', textDecoration: 'none' }}>
              CDC-recommended cleaning and disinfection standards
            </a> for your safety and peace of mind.
          </Typography>
        </Box>

        {/* Key Benefits */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <MovingIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Stress-Free Moving in Dayton
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Let our professional cleaners handle the cleaning so you can focus on your move and settling into your new Dayton-area home
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <SecurityIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Security Deposit Protection
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Professional move-out cleaning helps ensure you get your full security deposit back from Dayton landlords and property managers
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <NewReleasesIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                Fresh Start in Your New Home
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Move into a spotless, sanitized home ready for your family with our thorough move-in cleaning services
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Local SEO Content Section */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h3" component="h3" sx={{ mb: 4, color: theme.palette.primary.main }}>
            Serving Dayton and Surrounding Communities
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', maxWidth: 900, mx: 'auto', lineHeight: 1.7, mb: 4 }}>
            Our move-in/move-out cleaning services are available throughout the Dayton metropolitan area. We proudly serve 
            <strong> Kettering move-out cleaning</strong>, <strong>Centerville move-in cleaning</strong>, <strong>Oakwood moving cleaning services</strong>, 
            <strong>Huber Heights apartment cleaning</strong>, <strong>Miamisburg house cleaning</strong>, and many other communities within 
            30 miles of Dayton. Whether you're moving within Ohio or relocating to the Dayton area, our local cleaning team 
            understands the specific needs of our community and follows 
            <a href="https://www.epa.gov/saferchoice" target="_blank" rel="noopener noreferrer" style={{ color: '#D81B60', textDecoration: 'none' }}>
              EPA-approved safe cleaning practices
            </a> for environmental responsibility.
          </Typography>
        </Box>
      </Container>

      {/* Before/After Comparison Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="before-after">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            See the Move-In/Out Cleaning Difference
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            These real before and after photos show the dramatic results our move-in/move-out cleaning services achieve. 
            From dirty appliances to spotless fixtures - see why Dayton homeowners trust us for their moving transitions.
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
                            alt={comparison.beforeAlt}
                            loading="lazy"
                            style={{
                              objectFit: 'cover',
                              aspectRatio: '1/1.5'
                            }}
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
                            alt={comparison.afterAlt}
                            loading="lazy"
                            style={{
                              objectFit: 'cover',
                              aspectRatio: '1/1.5'
                            }}
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
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          // Could trigger image comparison view
                        }
                      }}
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

      {/* Move-In/Out Features */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="whats-included">
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          What's Included in Move-In/Out Cleaning
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
          Our move-in/move-out cleaning services take advantage of empty spaces to provide the most thorough cleaning possible. 
          With complete access to walls, floors, and fixtures, we can clean areas typically hidden by furniture.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {moveInOutFeatures.map((feature, index) => (
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
                <Box 
                  sx={{
                    width: 64,
                    height: 64,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    mb: 1
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call-to-Action for Checklist */}
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
              See Our Complete Cleaning Process
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#525252', fontSize: '1.1rem' }}>
              Want to see the detailed checklist our move-in/out cleaning team follows? View our comprehensive 
              room-by-room guide that ensures nothing gets missed during your moving transition.
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
              View Our Complete Cleaning Checklist
            </Button>
          </Card>
        </Box>
      </Container>

      {/* Target Audience Sections */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="moving-situations">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Perfect for Every Moving Situation
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {/* Landlord Section */}
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                p: 4, 
                height: '100%',
                background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
                border: `2px solid ${theme.palette.primary.main}20`,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8],
                  borderColor: theme.palette.primary.main
                }
              }}>
                <Typography variant="h4" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}>
                  For Landlords & Property Managers
                </Typography>
                <Typography variant="body1" sx={{ color: '#525252', lineHeight: 1.6 }}>
                  Professional move-out cleaning helps prepare units for new tenants quickly. 
                  Our thorough service ensures properties are rent-ready and helps minimize vacancy time 
                  while maintaining property value.
                </Typography>
              </Card>
            </Grid>

            {/* Tenant Section */}
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                p: 4, 
                height: '100%',
                background: 'linear-gradient(135deg, #f3e5f5 0%, #ffffff 100%)',
                border: `2px solid ${theme.palette.primary.main}20`,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8],
                  borderColor: theme.palette.primary.main
                }
              }}>
                <Typography variant="h4" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}>
                  For Tenants Moving Out
                </Typography>
                <Typography variant="body1" sx={{ color: '#525252', lineHeight: 1.6 }}>
                  Protect your security deposit with professional move-out cleaning. 
                  Our detailed service meets landlord expectations and lease requirements, 
                  helping ensure you get your full deposit back.
                </Typography>
              </Card>
            </Grid>

            {/* New Homeowner Section */}
            <Grid item xs={12} md={4}>
              <Card sx={{ 
                p: 4, 
                height: '100%',
                background: 'linear-gradient(135deg, #e8f5e8 0%, #ffffff 100%)',
                border: `2px solid ${theme.palette.primary.main}20`,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8],
                  borderColor: theme.palette.primary.main
                }
              }}>
                <Typography variant="h4" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}>
                  For New Homeowners
                </Typography>
                <Typography variant="body1" sx={{ color: '#525252', lineHeight: 1.6 }}>
                  Start fresh in your new home with professional move-in cleaning. 
                  We'll sanitize and deep clean every surface before you unpack, 
                  ensuring a clean slate for your family.
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* Specialized Service Links */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h3" component="h3" sx={{ mb: 4, color: theme.palette.primary.main, fontWeight: 700 }}>
              Choose Your Specific Moving Cleaning Service
            </Typography>
            <Typography variant="body1" sx={{ mb: 6, maxWidth: 800, mx: 'auto', fontSize: '1.1rem' }}>
              Get more detailed information and specialized guidance for your specific moving situation with our 
              dedicated pages designed for your exact needs.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={5}>
                <Card 
                  component={Link}
                  to="/move-in-cleaning"
                  sx={{ 
                    p: 4, 
                    textDecoration: 'none',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #e8f5e8 0%, #ffffff 100%)',
                    borderRadius: 3,
                    boxShadow: 2,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 12,
                      textDecoration: 'none'
                    }
                  }}
                >
                  <HealthAndSafetyIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
                  <Typography variant="h4" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}>
                    Move-In Cleaning
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#525252', lineHeight: 1.6, mb: 3, textAlign: 'center' }}>
                    Fresh start cleaning for new homeowners and renters. Complete sanitization 
                    and deep cleaning before you unpack.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                        color: 'white'
                      }
                    }}
                  >
                    Learn More About Move-In Cleaning
                  </Button>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={5}>
                <Card 
                  component={Link}
                  to="/move-out-cleaning"
                  sx={{ 
                    p: 4, 
                    textDecoration: 'none',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #f3e5f5 0%, #ffffff 100%)',
                    borderRadius: 3,
                    boxShadow: 2,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 12,
                      textDecoration: 'none'
                    }
                  }}
                >
                  <AttachMoneyIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
                  <Typography variant="h4" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}>
                    Move-Out Cleaning
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#525252', lineHeight: 1.6, mb: 3, textAlign: 'center' }}>
                    Security deposit protection cleaning for tenants and property preparation 
                    for landlords. Meets lease requirements.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                        color: 'white'
                      }
                    }}
                  >
                    Learn More About Move-Out Cleaning
                  </Button>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Included Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="complete-services">
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Complete Move-In/Out Cleaning Services
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto', fontSize: '1.1rem' }}>
          With empty homes, we can provide the most comprehensive cleaning possible. Every surface, corner, 
          and hidden area receives professional attention for a truly fresh start.
        </Typography>

        <Grid container spacing={2} sx={{ mb: 6 }}>
          {includedServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  border: `2px solid ${theme.palette.primary.main}20`,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[4]
                  }
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 24, color: theme.palette.primary.main, mb: 1 }} />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {service}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Process & Timeline */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="cleaning-process">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Our Move-In/Out Cleaning Process
          </Typography>

          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Box 
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 700
                      }}
                    >
                      1
                    </Box>
                  </ListItemIcon>
                  <ListItemText 
                    primary="Schedule Around Your Move"
                    secondary="We coordinate with your moving timeline for optimal cleaning when the home is empty"
                    sx={{ ml: 2 }}
                  />
                </ListItem>
                
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Box 
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 700
                      }}
                    >
                      2
                    </Box>
                  </ListItemIcon>
                  <ListItemText 
                    primary="Complete Empty Home Clean"
                    secondary="Thorough cleaning of all areas with full access to walls, floors, cabinets, and fixtures"
                    sx={{ ml: 2 }}
                  />
                </ListItem>
                
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Box 
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 700
                      }}
                    >
                      3
                    </Box>
                  </ListItemIcon>
                  <ListItemText 
                    primary="Move-In Ready Inspection"
                    secondary="Final walkthrough ensuring your new home is spotless and sanitized for immediate occupancy"
                    sx={{ ml: 2 }}
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, textAlign: 'center', background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)' }}>
                <ScheduleIcon sx={{ fontSize: 64, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.main }}>
                  4-8 Hours
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Typical move-in/out cleaning timeframe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Empty homes allow for more thorough cleaning of all areas including walls and hidden spaces.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Service Areas */}
      <div id="service-areas">
        <AreasWeServe />
      </div>

      {/* Final CTA */}
      <Box 
        id="get-quote"
        sx={{ 
          backgroundColor: theme.palette.primary.main, 
          color: 'white', 
          py: 8,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Ready for Stress-Free Moving?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Let us handle the cleaning while you focus on your move. Professional move-in/move-out 
            cleaning services throughout the Dayton area help protect deposits and ensure fresh starts.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=move-in-out"
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
              Get Free Moving Cleaning Quote
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

export default MoveInOutCleaningPage 