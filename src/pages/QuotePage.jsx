import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Chip,
  Alert,
  Paper,
  Button,
  Rating,
  useTheme
} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import { Helmet } from 'react-helmet-async'

// Import the styling
import '../styles/homepages/HomePage.css'
import '../styles/pages/ResidentialPage.css'

const QuotePage = () => {
  const [formLoaded, setFormLoaded] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    script.onload = () => setFormLoaded(true)
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Get Free House Cleaning Quote Dayton OH | Request Estimate Online | Gem City Cleaning</title>
        <meta name="title" content="Get Free House Cleaning Quote Dayton OH | Request Estimate Online | Gem City Cleaning" />
        <meta name="description" content="⭐ Get your FREE house cleaning quote online in Dayton, OH! Professional residential & commercial cleaning estimates. Same-day response guaranteed. Call 937-892-4157 or request quote online now!" />
        <meta name="keywords" content="free house cleaning quote Dayton, cleaning estimate Dayton OH, house cleaning cost Dayton, maid service quote, residential cleaning estimate, commercial cleaning quote Dayton, cleaning service prices, free cleaning estimate near me, Kettering cleaning quote, Centerville house cleaning cost, Oakwood maid service estimate, cleaning quote online, house cleaning pricing Dayton, professional cleaning estimate, cleaning service consultation" />
        
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
        
        {/* Open Graph / Facebook - Enhanced */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gem City Cleaning Crew" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/quote" />
        <meta property="og:title" content="Get Free House Cleaning Quote Dayton OH | Request Estimate Online" />
        <meta property="og:description" content="⭐ Get your FREE house cleaning quote online in Dayton, OH! Professional residential & commercial cleaning estimates. Same-day response guaranteed. Call 937-892-4157!" />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp" />
        <meta property="og:image:alt" content="Professional house cleaning quote form for Dayton OH residents" />
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

        {/* Twitter Cards - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GemCityCleaning" />
        <meta name="twitter:creator" content="@GemCityCleaning" />
        <meta name="twitter:title" content="Get Free House Cleaning Quote Dayton OH | Request Estimate Online" />
        <meta name="twitter:description" content="⭐ Get your FREE house cleaning quote online in Dayton, OH! Professional cleaning estimates with same-day response. Call 937-892-4157!" />
        <meta name="twitter:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp" />
        <meta name="twitter:image:alt" content="Free house cleaning quote form for Dayton OH" />
        
        {/* Additional Social Media */}
        <meta property="article:author" content="Gem City Cleaning Crew" />
        <meta property="article:publisher" content="https://www.facebook.com/GemCityCleaningCrew" />
        <meta property="article:published_time" content="2024-01-15T10:00:00Z" />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        
        {/* Canonical and Alternate URLs */}
        <link rel="canonical" href="https://gemcitycleaningcrew.com/quote" />
        <link rel="alternate" hrefLang="en-us" href="https://gemcitycleaningcrew.com/quote" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
        <link rel="preload" href="https://link.msgsndr.com/js/form_embed.js" as="script" />
        
        {/* JSON-LD Structured Data - Enhanced LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://gemcitycleaningcrew.com/#business",
            "name": "Gem City Cleaning Crew",
            "alternateName": "Gem City Cleaning",
            "description": "Professional house cleaning service in Dayton, OH offering free quotes for residential and commercial cleaning. Same-day response with no obligation estimates.",
            "url": "https://gemcitycleaningcrew.com",
            "telephone": "+1-937-892-4157",
            "email": "info@gemcitycleaningcrew.com",
            "foundingDate": "2020",
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
              "https://www.instagram.com/gemcitycleaningcrew",
              "https://www.linkedin.com/company/gem-city-cleaning-crew"
            ],
            "makesOffer": [
              {
                "@type": "Offer",
                "name": "Free House Cleaning Quote",
                "description": "Free, no-obligation estimate for residential house cleaning services",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01",
                "areaServed": "Dayton, OH and surrounding areas"
              },
              {
                "@type": "Offer",
                "name": "Free Commercial Cleaning Quote",
                "description": "Free estimate for commercial and office cleaning services",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01",
                "areaServed": "Dayton, OH and surrounding areas"
              }
            ]
          })}
        </script>

        {/* ContactPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://gemcitycleaningcrew.com/quote#contactpage",
            "name": "Request Free Cleaning Quote",
            "description": "Get a free, no-obligation quote for house cleaning services in Dayton, OH. Online form and phone consultations available.",
            "url": "https://gemcitycleaningcrew.com/quote",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Gem City Cleaning Crew",
              "telephone": "+1-937-892-4157",
              "email": "info@gemcitycleaningcrew.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "278 Mertland Ave",
                "addressLocality": "Dayton",
                "addressRegion": "OH",
                "postalCode": "45431",
                "addressCountry": "US"
              }
            }
          })}
        </script>

        {/* Service Schema for Quote Requests */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://gemcitycleaningcrew.com/quote#service",
            "name": "Free House Cleaning Quote Service",
            "alternateName": ["Free Cleaning Estimate", "House Cleaning Quote", "Cleaning Service Consultation"],
            "description": "Free, no-obligation quotes for professional house cleaning services in Dayton, Ohio. Same-day response guaranteed for all quote requests.",
            "serviceType": "Cleaning Quote Service",
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
              "telephone": "+1-937-892-4157",
              "email": "info@gemcitycleaningcrew.com",
              "url": "https://gemcitycleaningcrew.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "278 Mertland Ave",
                "addressLocality": "Dayton",
                "addressRegion": "OH",
                "postalCode": "45431",
                "addressCountry": "US"
              }
            },
            "offers": {
              "@type": "Offer",
              "name": "Free House Cleaning Quote",
              "description": "Complimentary estimate for all house cleaning services",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "areaServed": "Dayton, OH and surrounding areas"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "85",
              "bestRating": "5",
              "worstRating": "1"
            }
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
                "name": "Request Quote",
                "item": "https://gemcitycleaningcrew.com/quote"
              }
            ]
          })}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://gemcitycleaningcrew.com/#organization",
            "name": "Gem City Cleaning Crew",
            "alternateName": "Gem City Cleaning",
            "url": "https://gemcitycleaningcrew.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://gemcitycleaningcrew.com/logo.png",
              "width": "300",
              "height": "100"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-937-892-4157",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English",
                "hoursAvailable": [
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
              {
                "@type": "ContactPoint",
                "email": "info@gemcitycleaningcrew.com",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "278 Mertland Ave",
              "addressLocality": "Dayton",
              "addressRegion": "OH",
              "postalCode": "45431",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.facebook.com/GemCityCleaningCrew",
              "https://www.instagram.com/gemcitycleaningcrew"
            ]
          })}
        </script>

        {/* WebSite Schema for Search Box */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://gemcitycleaningcrew.com/#website",
            "url": "https://gemcitycleaningcrew.com",
            "name": "Gem City Cleaning Crew",
            "description": "Professional house cleaning services in Dayton, Ohio",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://gemcitycleaningcrew.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>

        {/* FAQ Schema for Quote Process */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I get a free house cleaning quote?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can get a free house cleaning quote by filling out our online form on this page or calling us directly at 937-892-4157. We provide same-day responses to all quote requests with no obligation."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly will I receive my cleaning quote?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We guarantee same-day response to all quote requests. Most quotes are provided within 2-4 hours during business hours. For urgent requests, call 937-892-4157 for immediate assistance."
                }
              },
              {
                "@type": "Question",
                "name": "Is the house cleaning quote really free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, absolutely! Our house cleaning quotes are completely free with no obligation. We provide detailed estimates for all our services including one-time, recurring, deep cleaning, and move-in/move-out cleaning."
                }
              },
              {
                "@type": "Question",
                "name": "What information do you need for an accurate quote?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To provide the most accurate quote, we need information about your home size, number of rooms, type of cleaning service needed, preferred frequency, and any special requests or areas of focus."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide quotes for both residential and commercial cleaning?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide free quotes for both residential house cleaning and commercial office cleaning services throughout the Dayton area. Our team handles properties of all sizes."
                }
              }
            ]
          })}
        </script>

        {/* Quote Form Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://gemcitycleaningcrew.com/quote#webpage",
            "name": "Request Free House Cleaning Quote - Gem City Cleaning Crew",
            "description": "Get your free house cleaning quote online. Professional cleaning services in Dayton, OH with same-day response guaranteed.",
            "url": "https://gemcitycleaningcrew.com/quote",
            "mainEntity": {
              "@type": "WebPageElement",
              "name": "House Cleaning Quote Form",
              "description": "Online form to request free house cleaning estimates",
              "url": "https://gemcitycleaningcrew.com/quote#quote-form"
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
                  "name": "Request Quote",
                  "item": "https://gemcitycleaningcrew.com/quote"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Box
        className="hero-section"
        sx={{
          background: `linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)), url('https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/katja-rooke-77JACslA8G0-unsplash-scaled.jpg')`,
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
            label="FREE QUOTES • NO OBLIGATION • SAME-DAY RESPONSE" 
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
            Get Your FREE House Cleaning Quote Today
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
            Professional House Cleaning Quotes • Same-Day Response • Dayton, OH
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
            No obligation estimates for residential and commercial cleaning services throughout the Dayton area.
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
              href="#quote-form"
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
              Get Free Quote Now
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
            {['Free Estimates', 'Same-Day Response', 'No Obligations', 'All Services Covered'].map((item) => (
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

      {/* Our House Cleaning Quote Process Section */}
      <Container maxWidth="lg" sx={{ pt: 6 }}>
        <Box id="quote-process" sx={{ mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3, textAlign: 'center', color: 'primary.main' }}>
            Our Cleaning Estimate Process
          </Typography>
          
          <Grid container spacing={4}>
            {[
              {
                step: '1',
                title: 'Online Form or Phone Call',
                description: 'Submit our simple online form, or call/text us directly at 937-892-4157. Our cleaning estimate process starts with understanding your basic needs, home size, and cleaning preferences.'
              },
              {
                step: '2', 
                title: 'Professional Consultation',
                description: 'We provide a detailed phone consultation to discuss your specific requirements. Our team will ask about your priorities, special requests, and any areas that need extra attention to ensure accurate pricing.'
              },
              {
                step: '3',
                title: 'Quote Delivery & Scheduling',
                description: 'Receive your personalized maid service quote within 2-4 hours. No pressure, no sales tactics - just transparent pricing and honest answers to all your questions.'
              }
            ].map((process, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', p: 3, textAlign: 'center', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
                  <Box 
                    sx={{
                      width: 60,
                      height: 60,
                      background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
                      {process.step}
                    </Typography>
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                    {process.title}
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    {process.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 4, p: 3, backgroundColor: 'rgba(25, 118, 210, 0.05)', borderRadius: 2, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              Ready for Your Cleaning Estimate?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our estimation process is designed to be quick, easy, and completely transparent. 
              Start today and see why Dayton families trust Gem City Cleaning with their homes.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {/* Form Container with better integration */}
            <Paper 
              id="quote-form"
              elevation={2}
              sx={{ 
                borderRadius: 3,
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #1976d2, #42a5f5)',
                  zIndex: 1
                }
              }}
            >
              {/* Optional: Add a header to the form section */}
              <Box sx={{ p: 3, pb: 1, borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <Typography variant="h3" sx={{ fontWeight: 600, color: '#333' }}>
                  Fill Out Your Free House Cleaning Quote Request
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
                  Get your personalized <strong>cleaning estimate</strong> in just a few minutes
                </Typography>
              </Box>

              {/* Loading state for better UX */}
              {!formLoaded && (
                <Box sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Loading quote form...
                  </Typography>
                </Box>
              )}

              {/* Iframe with better styling */}
              <Box 
                sx={{ 
                  position: 'relative',
                  background: '#ffffff',
                  '& iframe': {
                    display: formLoaded ? 'block' : 'none'
                  }
                }}
              >
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/lHxZlrt3gWUXleLkGg53"
                  style={{
                    width: '100%',
                    height: '720px', // Slightly taller for better content fit
                    border: 'none',
                    background: 'transparent'
                  }}
                  id="inline-lHxZlrt3gWUXleLkGg53" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Request a House Cleaning Quote"
                  data-height="720"
                  data-layout-iframe-id="inline-lHxZlrt3gWUXleLkGg53"
                  data-form-id="lHxZlrt3gWUXleLkGg53"
                  title="Request a House Cleaning Quote"
                  onLoad={() => setFormLoaded(true)}
                />
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 20 }}>
              <Card 
                elevation={2}
                sx={{ 
                  borderRadius: 3,
                  border: '1px solid rgba(0, 0, 0, 0.06)'
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
                    Why Choose Gem City Cleaning Crew?
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    {[
                      { label: 'Established 2017', desc: 'Years of experience', link: '/page/about-us' },
                      { label: 'Professional Team', desc: 'Trained & insured', link: '/page/about-us' },
                      { label: 'Flexible Scheduling', desc: 'We work around you', link: '/recurring-cleaning-service' },
                      { label: 'Satisfaction Guaranteed', desc: 'We make it right', link: '/residential' },
                      { label: 'Serving Dayton Area', desc: 'Local & reliable', link: '/locations' }
                    ].map((item, index) => (
                      <Box key={index} sx={{ mb: 2, display: 'flex', alignItems: 'flex-start' }}>
                        <Box 
                          sx={{ 
                            width: 8, 
                            height: 8, 
                            borderRadius: '50%', 
                            backgroundColor: 'primary.main',
                            mt: 0.75,
                            mr: 1.5,
                            flexShrink: 0
                          }} 
                        />
                        <Box>
                          <Typography 
                            variant="body2" 
                            component={item.link ? Link : 'div'}
                            to={item.link}
                            sx={{ 
                              fontWeight: 600, 
                              color: item.link ? 'primary.main' : '#333',
                              textDecoration: item.link ? 'none' : 'none',
                              '&:hover': item.link ? { textDecoration: 'underline' } : {}
                            }}
                          >
                            {item.label}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem' }}>
                            {item.desc}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#333', mt: 3 }}>
                    Our Cleaning Services
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {[
                      { service: 'Recurring Cleaning Service', link: '/recurring-cleaning-service' },
                      { service: 'Deep Cleaning Service', link: '/deep-cleaning' },
                      { service: 'Move-in/Move-out Cleaning', link: '/move-in-out-cleaning' }
                    ].map((item, index) => (
                      <Typography 
                        key={index}
                        variant="body2" 
                        component={Link}
                        to={item.link}
                        sx={{ 
                          display: 'block',
                          mb: 0.5,
                          color: 'primary.main',
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' }
                        }}
                      >
                        • {item.service}
                      </Typography>
                    ))}
                  </Box>
                  
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#333', mt: 3 }}>
                    Service Areas We Cover
                  </Typography>
                  <Typography variant="body2" paragraph sx={{ color: '#666' }}>
                    <Link to="/locations" style={{ color: '#1976d2', textDecoration: 'none' }}>
                      Dayton, Tipp City, Troy, Huber Heights, and surrounding areas
                    </Link>
                  </Typography>
                  
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#333', mt: 3 }}>
                    Contact Information
                  </Typography>
                  <Box sx={{ '& > div': { mb: 1 } }}>
                    <Box>
                      <Typography variant="body2" sx={{ color: '#333' }}>
                        <strong>Phone:</strong> <a href="tel:937-892-4157" style={{ color: '#1976d2', textDecoration: 'none' }}>937-892-4157</a>
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: '#333' }}>
                        <strong>Email:</strong> <a href="mailto:info@gemcitycleaningcrew.com" style={{ color: '#1976d2', textDecoration: 'none' }}>info@gemcitycleaningcrew.com</a>
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: '#333' }}>
                        <strong>Address:</strong> 278 Mertland Ave, Dayton, OH 45431
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* Trust indicators */}
              <Card 
                elevation={1}
                sx={{ 
                  mt: 3,
                  borderRadius: 3,
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)'
                }}
              >
                <CardContent sx={{ p: 2.5 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
                    🏆 Your Trusted Local Cleaners
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem' }}>
                    Licensed, bonded, and insured for your peace of mind. 
                    Serving the Dayton community with pride since 2017.{' '}
                    <a href="https://www.bbb.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'none' }}>
                      Better Business Bureau member
                    </a>{' '}
                    committed to excellence.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* Table of Contents */}
        <Box sx={{ py: 4, backgroundColor: '#f8f9fa', borderRadius: 2, mb: 4 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', fontWeight: 600 }}>
              Quick Navigation
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
              <Grid item xs={12} md={4}>
                <Box sx={{ '& > a': { display: 'block', py: 0.5, color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } } }}>
                  <a href="#why-get-quote">Why Get a Free Quote?</a>
                  <a href="#understanding-costs">Understanding Cleaning Costs</a>
                  <a href="#local-advantages">Local Service Advantages</a>
                  <a href="#quote-form">Request Your Quote</a>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ '& > a': { display: 'block', py: 0.5, color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } } }}>
                  <a href="#whats-included">What's Included in Your Quote</a>
                  <a href="#quote-process">Our Quote Process</a>
                  <a href="#faq">Frequently Asked Questions</a>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Why Get a Free House Cleaning Quote Section */}
        <Box id="why-get-quote" sx={{ mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3, textAlign: 'center', color: 'primary.main' }}>
            Why Get a Free House Cleaning Quote?
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Getting a <strong>cleaning estimate</strong> from Gem City Cleaning is the first step toward 
                a cleaner, more comfortable home. Our no-obligation house cleaning quotes provide complete 
                transparency about pricing and services, allowing you to make informed decisions without pressure.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Understanding <strong>house cleaning costs</strong> in Dayton doesn't have to be complicated. 
                Our comprehensive cleaning estimates break down every aspect of your service, from basic room 
                cleaning to specialized tasks like inside appliance cleaning or garage organization. According to the{' '}
                <a href="https://www.cleaninginstitute.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'none' }}>
                  American Cleaning Institute
                </a>, professional cleaning services save the average household 2-4 hours per week.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Our detailed <strong>maid service quotes</strong> help you understand exactly how this time-saving 
                investment works for your specific home and budget. We guarantee same-day response to all quote requests 
                because we understand that when you're ready to get help with house cleaning, you want answers quickly. 
                Check out our{' '}
                <Link to="/locations" style={{ color: '#1976d2', textDecoration: 'none' }}>
                  service areas throughout the Dayton region
                </Link>.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
                  Your Free Quote Includes:
                </Typography>
                
                <Box sx={{ '& > div': { mb: 2 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      backgroundColor: 'primary.main',
                      mt: 0.75,
                      flexShrink: 0
                    }} />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      <strong>No Obligation Commitment</strong> - Get pricing without pressure to purchase
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      backgroundColor: 'primary.main',
                      mt: 0.75,
                      flexShrink: 0
                    }} />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      <strong>Customized Pricing</strong> - Rates based on your home size and specific needs
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      backgroundColor: 'primary.main',
                      mt: 0.75,
                      flexShrink: 0
                    }} />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      <strong>Same-Day Response</strong> - Most quotes delivered within 2-4 hours
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      backgroundColor: 'primary.main',
                      mt: 0.75,
                      flexShrink: 0
                    }} />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      <strong>Professional Assessment</strong> - Detailed evaluation by trained cleaning experts
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      backgroundColor: 'primary.main',
                      mt: 0.75,
                      flexShrink: 0
                    }} />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      <strong>Transparent Pricing</strong> - No hidden fees or surprise charges
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Understanding House Cleaning Costs Section */}
        <Box id="understanding-costs" sx={{ py: 8, backgroundColor: '#f8f9fa', borderRadius: 3, mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center', color: 'primary.main' }}>
            Understanding House Cleaning Costs in Dayton
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                <strong>Cleaning service pricing</strong> varies significantly based on several key factors. 
                Our transparent approach to house cleaning quotes ensures you understand exactly what influences your investment.
              </Typography>
              
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                Home Size & Layout
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Larger homes naturally require more time and resources. Our <strong>cleaning estimates</strong> account 
                for square footage, number of rooms, and the complexity of your home's layout.
              </Typography>
              
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                Cleaning Frequency
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Regular weekly or bi-weekly service typically costs less per visit than monthly or one-time cleanings 
                because maintaining an already-clean home requires less intensive work. Learn more about our{' '}
                <Link to="/recurring-cleaning-service" style={{ color: '#1976d2', textDecoration: 'none' }}>
                  recurring cleaning service options
                </Link>.
              </Typography>
              
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                Specific Services Needed
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Basic maintenance cleaning differs from deep cleaning or specialized services like post-construction cleanup. 
                Each service type has different time and resource requirements reflected in our{' '}
                <strong>residential cleaning quotes</strong>. View our{' '}
                <Link to="/residential-house-cleaning-checklist" style={{ color: '#1976d2', textDecoration: 'none' }}>
                  detailed cleaning checklist
                </Link>{' '}
                to understand what's included.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card elevation={2} sx={{ p: 3, height: 'fit-content' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                  Cost Factors Include:
                </Typography>
                <Box sx={{ '& > div': { mb: 1.5 } }}>
                  {[
                    'Home square footage',
                    'Number of bedrooms & bathrooms',
                    'Current cleanliness level',
                    'Frequency of service',
                    'Special requests or add-ons',
                    'Accessibility and layout',
                    'Pet hair or allergen considerations',
                    'Eco-friendly product preferences'
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ 
                        width: 6, 
                        height: 6, 
                        borderRadius: '50%', 
                        backgroundColor: 'primary.main'
                      }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Quality Service at Fair Prices
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', color: 'text.secondary' }}>
              Our goal is to provide <strong>cleaning estimates</strong> that offer exceptional value for Dayton homeowners 
              while maintaining the highest standards of service quality.
            </Typography>
          </Box>
        </Box>

        {/* Local vs National Pricing Section */}
        <Box id="local-advantages" sx={{ mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center', color: 'primary.main' }}>
            Local Cleaning Service Advantages
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                When comparing <strong>house cleaning costs</strong>, consider the advantages of choosing a local 
                Dayton business over national chains. Our commitment to the community shows in every aspect of our service.
              </Typography>
              
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                Personalized Service
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Local companies provide customized <strong>cleaning service quotes</strong> based on your specific needs 
                rather than generic corporate pricing structures.
              </Typography>
              
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                Community Investment
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Supporting local businesses like Gem City Cleaning keeps your investment in the Dayton community, 
                supporting local jobs and economic growth. Learn more{' '}
                <Link to="/page/about-us" style={{ color: '#1976d2', textDecoration: 'none' }}>
                  about our local commitment
                </Link>.
              </Typography>

              <Card elevation={2} sx={{ p: 3, mt: 3, backgroundColor: 'rgba(25, 118, 210, 0.05)' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                  Local Advantage Summary:
                </Typography>
                <Box sx={{ '& > div': { mb: 1 } }}>
                  {[
                    'Same-day quote responses',
                    'Flexible scheduling options',
                    'Multiple contact methods',
                    'Community-focused service',
                    'Customized pricing solutions'
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ 
                        width: 6, 
                        height: 6, 
                        borderRadius: '50%', 
                        backgroundColor: 'primary.main'
                      }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                Flexible Pricing
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Local cleaning services often offer more flexible pricing options and can customize quotes 
                to fit your specific budget and needs.
              </Typography>
              
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                Better Communication & Feedback
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                We offer multiple ways to reach us including phone, text, and email for faster response times and more 
                personalized customer service. After each visit, you have the opportunity to rate your cleaning and 
                provide feedback, ensuring we continuously improve our service quality. We follow{' '}
                <a href="https://www.epa.gov/indoor-air-quality-iaq/publications-about-indoor-air-quality" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'none' }}>
                  EPA guidelines for residential cleaning
                </a>{' '}
                to ensure our quotes reflect proper cleaning standards and safety protocols.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* What's Included in Our House Cleaning Quote Section */}
        <Box id="whats-included" sx={{ py: 8, backgroundColor: '#f8f9fa', borderRadius: 3, my: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center', color: 'primary.main' }}>
            What's Included in Your Cleaning Estimate?
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                When you request a <strong>cleaning estimate</strong> from Gem City Cleaning, you receive 
                a comprehensive breakdown that goes far beyond a simple price quote. Our detailed service 
                breakdown ensures you understand exactly what you're getting for your investment.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Our <strong>house cleaning cost</strong> assessment begins with understanding your unique needs. 
                Whether you're researching weekly maid service pricing or need a one-time deep clean estimate, 
                we tailor our evaluation to your specific situation. Professional cleaning estimates should never be rushed.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Each <strong>residential cleaning quote</strong> includes extensive customization options because every 
                home and family has unique needs. We'll work with you to create a cleaning plan that fits your 
                schedule, budget, and specific preferences, ensuring you only pay for the services you actually want. 
                Whether you're looking for{' '}
                <Link to="/deep-cleaning" style={{ color: '#1976d2', textDecoration: 'none' }}>
                  one-time deep cleaning
                </Link>,{' '}
                <Link to="/recurring-cleaning-service" style={{ color: '#1976d2', textDecoration: 'none' }}>
                  regular weekly service
                </Link>, or{' '}
                <Link to="/move-in-out-cleaning" style={{ color: '#1976d2', textDecoration: 'none' }}>
                  move-in/move-out cleaning
                </Link>, your quote will clearly outline all costs.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card elevation={2} sx={{ p: 3, height: 'fit-content' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                  Every Quote Includes:
                </Typography>
                <Box sx={{ '& > div': { mb: 1.5 } }}>
                  {[
                    'Room-by-room service breakdown',
                    'Detailed task list for each area',
                    'Time estimates for completion',
                    'Frequency options (weekly, bi-weekly, monthly)',
                    'Special request accommodations',
                    'Supply and equipment details',
                    'Scheduling flexibility options',
                    'Add-on service pricing'
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ 
                        width: 6, 
                        height: 6, 
                        borderRadius: '50%', 
                        backgroundColor: 'primary.main'
                      }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Transparent Pricing, No Surprises
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', color: 'text.secondary' }}>
              Your personalized <strong>cleaning service quote</strong> includes everything you need to make an informed decision. 
              We believe transparency builds trust, which is why every estimate clearly outlines our services, 
              pricing, and policies before you commit to anything.
            </Typography>
          </Box>
        </Box>

        {/* FAQ Section */}
        <Box id="faq" sx={{ py: 8, backgroundColor: '#f8f9fa', borderRadius: 3, mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center', color: 'primary.main' }}>
            Frequently Asked Questions About Our Cleaning Estimates
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ '& > div': { mb: 3 } }}>
                <Card elevation={1} sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                    How quickly will I receive my cleaning estimate?
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    We guarantee same-day response to all quote requests. Most <strong>cleaning estimates</strong> are 
                    provided within 2-4 hours during business hours (Monday-Friday 8AM-5PM). 
                    For urgent requests, call 937-892-4157 for immediate assistance.
                  </Typography>
                </Card>
                
                <Card elevation={1} sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                    Are your cleaning estimates really free?
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    Yes, absolutely! Our <strong>house cleaning estimates</strong> are completely free with no obligation. 
                    We provide detailed quotes for all our services including one-time cleaning, recurring service, 
                    deep cleaning, and move-in/move-out cleaning without any commitment from you.
                  </Typography>
                </Card>
                
                <Card elevation={1} sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                    What information do you need for an accurate estimate?
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    To provide the most accurate <strong>cleaning service quote</strong>, we need information about your home size, 
                    number of rooms, type of cleaning service needed, preferred frequency, and any special requests 
                    or areas that need extra attention. The more details you provide, the more precise your quote will be.
                  </Typography>
                </Card>
                
                <Card elevation={1} sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                    Can I modify my quote after I receive it?
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    Absolutely! Your <strong>maid service pricing</strong> estimate is completely flexible. We can add or remove 
                    rooms, adjust cleaning tasks, change frequency, or modify any aspect of your service plan. 
                    We'll provide updated pricing for any changes you'd like to make.
                  </Typography>
                </Card>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ '& > div': { mb: 3 } }}>
                <Card elevation={1} sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                    Do you provide quotes for both residential and commercial cleaning?
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    Yes, we provide <strong>free cleaning estimates</strong> for both residential homes and commercial offices 
                    throughout the Dayton area. Our team handles properties of all sizes, from small apartments 
                    to large office buildings. Each quote is customized to your specific property type and needs.
                  </Typography>
                </Card>
                
                <Card elevation={1} sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                    How long is my cleaning quote valid?
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    Your <strong>house cleaning quote</strong> is valid for 30 days from the date issued. This gives 
                    you plenty of time to consider your options without pressure. If you need to extend the validity 
                    or update any details after 30 days, just contact us for a refreshed estimate.
                  </Typography>
                </Card>
                
                <Card elevation={1} sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                    What areas do you provide estimates for?
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    We provide <strong>residential cleaning quotes</strong> throughout Dayton, Kettering, Centerville, 
                    Oakwood, Huber Heights, Miamisburg, Springboro, Beavercreek, and surrounding areas. 
                    If you're unsure whether we service your area, call us at 937-892-4157 to confirm.
                  </Typography>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Container>

      {/* Final CTA Section */}
      <Box sx={{ backgroundColor: theme.palette.primary.main, color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Ready for Your Free Cleaning Estimate?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join hundreds of satisfied Dayton homeowners who trust Gem City Cleaning with their homes. 
            Get your personalized <strong>free house cleaning quote</strong> today - no obligations, just honest pricing!
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              href="#quote-form"
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
              Get Your Free Estimate Now
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

export default QuotePage 