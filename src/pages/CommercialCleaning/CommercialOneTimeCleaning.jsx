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
  CardMedia,
  Box,
  Chip,
  useTheme,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import BusinessIcon from '@mui/icons-material/Business'
import StorefrontIcon from '@mui/icons-material/Storefront'
import EventIcon from '@mui/icons-material/Event'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GroupIcon from '@mui/icons-material/Group'
import SecurityIcon from '@mui/icons-material/Security'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/CommercialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'
import TableOfContents from '../../components/TableOfContents'
import QuoteForm from '../../components/QuoteForm'

const CommercialOneTimeCleaning = () => {
  const theme = useTheme()
  const [quoteFormOpen, setQuoteFormOpen] = useState(false)

  const handleOpenQuoteForm = () => {
    setQuoteFormOpen(true)
  }

  const handleCloseQuoteForm = () => {
    setQuoteFormOpen(false)
  }

  // One-time cleaning scenarios
  const cleaningScenarios = [
    {
      title: "Special Events & Open Houses",
      description: "Make the perfect impression for important business events, client visits, or open houses",
      icon: <EventIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Pre-event deep cleaning", "Post-event cleanup", "Same-day availability", "Executive-level attention"],
      popular: true
    },
    {
      title: "Move-In/Move-Out Commercial",
      description: "Complete deep cleaning for businesses relocating or preparing spaces for new tenants",
      icon: <BusinessIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Construction dust removal", "Deep floor care", "Complete sanitization", "Landlord-ready condition"],
      popular: true
    },
    {
      title: "Quarterly Deep Cleaning",
      description: "Comprehensive seasonal cleaning to maintain professional standards year-round",
      icon: <TrendingUpIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Top-to-bottom cleaning", "Equipment deep cleaning", "Air vent cleaning", "Carpet deep cleaning"],
      popular: false
    },
    {
      title: "Post-Construction Cleanup",
      description: "Specialized cleaning after renovations, construction, or remodeling projects",
      icon: <StorefrontIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Dust & debris removal", "Paint & adhesive cleanup", "Window restoration", "Safety compliance"],
      popular: false
    },
    {
      title: "Emergency Cleaning",
      description: "Urgent cleaning services for unexpected situations requiring immediate attention",
      icon: <AccessTimeIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["24/7 availability", "Rapid response", "Spill cleanup", "Damage restoration prep"],
      popular: false
    },
    {
      title: "Corporate Impression Cleaning",
      description: "Premium cleaning service for high-stakes business meetings and corporate events",
      icon: <GroupIcon sx={{ fontSize: 32, color: 'white' }} />,
      features: ["Executive suite focus", "Conference room detailing", "Reception area perfection", "Client-ready standards"],
      popular: false
    }
  ]

  // What's included in one-time deep cleaning
  const deepCleaningAreas = [
    {
      title: "Office Areas & Workstations",
      tasks: ["Desk deep cleaning & sanitization", "Equipment cleaning (computers, phones)", "Chair & furniture cleaning", "Cable management area cleaning"]
    },
    {
      title: "Conference & Meeting Rooms",
      tasks: ["Table & chair deep cleaning", "AV equipment dusting", "Whiteboard/presentation area cleaning", "Glass & window detailing"]
    },
    {
      title: "Reception & Common Areas",
      tasks: ["Lobby deep cleaning", "Waiting area sanitization", "Display & decor cleaning", "High-touch surface focus"]
    },
    {
      title: "Restrooms & Break Rooms",
      tasks: ["Deep sanitization", "Appliance cleaning (inside & out)", "Tile & grout cleaning", "Supply restocking"]
    },
    {
      title: "Floors & Carpets",
      tasks: ["Deep vacuum & carpet cleaning", "Floor stripping & waxing", "Baseboard cleaning", "Stain treatment"]
    },
    {
      title: "Windows & Glass Surfaces",
      tasks: ["Interior window cleaning", "Glass door cleaning", "Mirror polishing", "Display case cleaning"]
    }
  ]

  // Why choose one-time deep cleaning
  const whyChooseReasons = [
    {
      title: "No Long-Term Commitment",
      description: "Perfect for businesses that need deep cleaning without ongoing service contracts",
      icon: <SecurityIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
    },
    {
      title: "Flexible Scheduling",
      description: "Available evenings, weekends, and holidays to work around your business schedule",
      icon: <AccessTimeIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
    },
    {
      title: "Professional Results",
      description: "Commercial-grade equipment and trained professionals deliver exceptional results",
      icon: <CleaningServicesIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
    }
  ]

  // FAQ data
  const faqData = [
    {
      question: "How long does a commercial one-time deep cleaning take?",
      answer: "The duration depends on your facility size and scope of work. Most office spaces take 4-8 hours, while larger facilities may require 1-2 days. We'll provide a detailed timeline with your quote."
    },
    {
      question: "Can you work outside normal business hours?",
      answer: "Absolutely! We prefer to work after hours, evenings, or weekends to avoid disrupting your business operations. We're available 24/7 for emergency cleaning needs."
    },
    {
      question: "Do you provide all cleaning supplies and equipment?",
      answer: "Yes, we bring all necessary commercial-grade cleaning supplies, equipment, and tools. You don't need to provide anything - we handle it all."
    },
    {
      question: "How much does commercial one-time deep cleaning cost?",
      answer: "Pricing varies based on facility size, scope of work, and specific requirements. We provide detailed written quotes after evaluating your space and discussing your needs."
    },
    {
      question: "Are you insured for commercial work?",
      answer: "Yes, we carry comprehensive commercial insurance including general liability and bonding. We can provide certificates of insurance for your records."
    },
    {
      question: "Can you handle post-construction cleanup?",
      answer: "Absolutely! We specialize in post-construction cleanup including dust removal, paint cleanup, window restoration, and preparing your space for occupancy."
    },
    {
      question: "Do you offer same-day service for urgent needs?",
      answer: "Yes, we offer same-day service for urgent cleaning needs, subject to availability. Call 937-892-4157 for immediate assistance."
    },
    {
      question: "What areas of the business do you clean?",
      answer: "We clean all areas including offices, conference rooms, restrooms, break rooms, lobbies, hallways, and storage areas. We can customize the service to focus on specific areas as needed."
    }
  ]

  // Table of Contents items
  const tocItems = [
    { text: '🏢 Commercial One-Time Deep Cleaning Services', href: '#commercial-one-time-services' },
    { text: '🎯 Cleaning Scenarios & Situations', href: '#cleaning-scenarios' },
    { text: '✨ What\'s Included in Deep Cleaning', href: '#whats-included' },
    { text: '⭐ Why Choose One-Time Deep Cleaning', href: '#why-choose' },
    { text: '📍 Service Areas', href: '#service-areas' },
    { text: '❓ Frequently Asked Questions', href: '#faq' }
  ]

  // Before/After comparison data
  const beforeAfterComparisons = [
    {
      title: "Professional Window Cleaning",
      description: "Post-construction window restoration and detailing - from dusty and debris-covered to crystal clear",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/IMG-20240513-WA0012.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/20240512_125224-scaled.webp",
      beforeAlt: "Commercial windows before professional cleaning - showing construction dust and debris",
      afterAlt: "Commercial windows after professional deep cleaning - crystal clear and spotless"
    },
    {
      title: "Commercial Restroom Deep Cleaning",
      description: "Complete sanitization and restoration of commercial bathroom facilities",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/IMG-20240512-WA0025.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/IMG-20240512-WA0027.webp",
      beforeAlt: "Commercial bathroom before professional deep cleaning",
      afterAlt: "Commercial bathroom after professional deep cleaning and sanitization"
    },
    {
      title: "Commercial Floor Deep Cleaning",
      description: "Stripping, cleaning and restoration of commercial floors removing construction debris and buildup",
      beforeImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/IMG-20240512-WA0010.webp",
      afterImage: "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/WhatsApp-Image-2024-05-12-at-18.02.07_cdbb91df.webp",
      beforeAlt: "Commercial floors before professional deep cleaning - covered in construction debris",
      afterAlt: "Commercial floors after professional deep cleaning - pristine and polished"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Commercial One-Time Deep Cleaning Dayton OH | Special Events & Move-Out Cleaning | Gem City Cleaning</title>
        <meta name="description" content="Professional one-time commercial deep cleaning in Dayton, OH. Perfect for special events, move-ins, post-construction, and quarterly deep cleans. Same-day availability!" />
        <meta name="keywords" content="commercial one-time cleaning, deep cleaning Dayton, office deep cleaning, post-construction cleanup, special event cleaning, move-out cleaning commercial" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/commercial-one-time-cleaning" />
        <meta property="og:title" content="Commercial One-Time Deep Cleaning Dayton OH | Gem City Cleaning" />
        <meta property="og:description" content="Professional one-time commercial deep cleaning in Dayton, OH. Perfect for special events, move-ins, post-construction cleanup." />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Commercial One-Time Deep Cleaning Dayton OH | Gem City Cleaning" />
        <meta name="twitter:description" content="Professional one-time commercial deep cleaning for special events, move-ins, and post-construction cleanup." />
        
        <link rel="canonical" href="https://gemcitycleaningcrew.com/commercial-one-time-cleaning" />
        
        {/* Enhanced LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://gemcitycleaningcrew.com/#business",
            "name": "Gem City Cleaning Crew",
            "alternateName": "Gem City Cleaning",
            "description": "Professional commercial and residential cleaning services in Dayton, OH. Specializing in deep cleaning, one-time cleaning, and recurring maintenance services.",
            "url": "https://gemcitycleaningcrew.com",
            "logo": "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp",
            "image": [
              "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/20240512_125224-scaled.webp",
              "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/IMG-20240512-WA0027.webp",
              "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/WhatsApp-Image-2024-05-12-at-18.02.07_cdbb91df.webp"
            ],
            "telephone": "937-892-4157",
            "email": "contact@gemcitycleaningcrew.com",
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
              "latitude": "39.7589",
              "longitude": "-84.1916"
            },
            "openingHours": [
              "Mo-Fr 08:00-18:00",
              "Sa 09:00-17:00",
              "Su 10:00-16:00"
            ],
            "priceRange": "$$",
            "currenciesAccepted": "USD",
            "paymentAccepted": ["Cash", "Credit Card", "Check", "PayPal", "Venmo"],
            "areaServed": [
              {
                "@type": "City",
                "name": "Dayton",
                "addressRegion": "OH"
              },
              {
                "@type": "City", 
                "name": "Kettering",
                "addressRegion": "OH"
              },
              {
                "@type": "City",
                "name": "Beavercreek", 
                "addressRegion": "OH"
              },
              {
                "@type": "City",
                "name": "Oakwood",
                "addressRegion": "OH"
              },
              {
                "@type": "City",
                "name": "Centerville",
                "addressRegion": "OH"
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "39.7589",
                "longitude": "-84.1916"
              },
              "geoRadius": "30000"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "85",
              "reviewCount": "85"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Commercial Client"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Excellent commercial deep cleaning service. They transformed our office space completely."
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Commercial Cleaning Services",
              "itemListElement": cleaningScenarios.map((scenario, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": scenario.title,
                  "description": scenario.description
                }
              }))
            },
            "sameAs": [
              "https://www.facebook.com/gemcitycleaningcrew",
              "https://www.instagram.com/gemcitycleaningcrew",
              "https://www.linkedin.com/company/gem-city-cleaning-crew"
            ]
          })}
        </script>

        {/* Enhanced Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://gemcitycleaningcrew.com/commercial-one-time-cleaning#service",
            "name": "Commercial One-Time Deep Cleaning",
            "alternateName": ["Commercial Deep Cleaning", "Office Deep Cleaning", "One-Time Commercial Cleaning"],
            "description": "Professional one-time deep cleaning services for commercial spaces in Dayton, OH including special events, move-ins, post-construction cleanup, and quarterly deep cleans with same-day availability.",
            "image": [
              "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/20240512_125224-scaled.webp",
              "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/IMG-20240512-WA0027.webp",
              "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/WhatsApp-Image-2024-05-12-at-18.02.07_cdbb91df.webp"
            ],
            "provider": {
              "@id": "https://gemcitycleaningcrew.com/#business"
            },
            "serviceType": "Commercial Cleaning",
            "category": [
              "Deep Cleaning",
              "Commercial Cleaning", 
              "Office Cleaning",
              "Post-Construction Cleaning",
              "Event Cleaning",
              "Move-Out Cleaning"
            ],
            "areaServed": [
              {
                "@type": "City",
                "name": "Dayton",
                "addressRegion": "OH"
              },
              {
                "@type": "State",
                "name": "Ohio",
                "addressRegion": "OH"
              }
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://gemcitycleaningcrew.com/commercial-one-time-cleaning",
              "servicePhone": "937-892-4157",
              "availableLanguage": "English"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Special Events & Open Houses Cleaning",
                "description": "Pre and post-event deep cleaning for business events and open houses",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "USD",
                  "price": "Contact for Quote"
                },
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01",
                "validThrough": "2025-12-31"
              },
              {
                "@type": "Offer", 
                "name": "Move-In/Move-Out Commercial Cleaning",
                "description": "Complete deep cleaning for businesses relocating or preparing spaces",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "USD",
                  "price": "Contact for Quote"
                },
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "Post-Construction Cleanup",
                "description": "Specialized cleaning after renovations and construction projects",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "USD", 
                  "price": "Contact for Quote"
                },
                "availability": "https://schema.org/InStock"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Commercial Deep Cleaning Services",
              "itemListElement": deepCleaningAreas.map((area, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": area.title,
                  "description": area.tasks.join(", ")
                }
              }))
            },
            "serviceOutput": "Clean commercial space ready for business operations",
            "additionalType": "https://www.wikidata.org/wiki/Q1642547"
          })}
        </script>

        {/* ImageGallery Schema for Before/After Photos */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Commercial Deep Cleaning Before and After Results",
            "description": "Real before and after photos showing dramatic transformations from our commercial deep cleaning services",
            "image": beforeAfterComparisons.flatMap(comparison => [
              {
                "@type": "ImageObject",
                "name": `${comparison.title} - Before`,
                "url": comparison.beforeImage,
                "description": comparison.beforeAlt,
                "caption": `Before: ${comparison.description}`
              },
              {
                "@type": "ImageObject", 
                "name": `${comparison.title} - After`,
                "url": comparison.afterImage,
                "description": comparison.afterAlt,
                "caption": `After: ${comparison.description}`
              }
            ])
          })}
        </script>

        {/* WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://gemcitycleaningcrew.com/commercial-one-time-cleaning",
            "url": "https://gemcitycleaningcrew.com/commercial-one-time-cleaning",
            "name": "Commercial One-Time Deep Cleaning Dayton OH | Special Events & Move-Out Cleaning",
            "description": "Professional one-time commercial deep cleaning in Dayton, OH. Perfect for special events, move-ins, post-construction, and quarterly deep cleans. Same-day availability!",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://gemcitycleaningcrew.com/#website",
              "url": "https://gemcitycleaningcrew.com",
              "name": "Gem City Cleaning Crew"
            },
            "about": {
              "@id": "https://gemcitycleaningcrew.com/commercial-one-time-cleaning#service"
            },
            "mainEntity": {
              "@id": "https://gemcitycleaningcrew.com/#business"
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
                  "name": "Commercial Cleaning",
                  "item": "https://gemcitycleaningcrew.com/commercial-cleaning"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "One-Time Deep Cleaning",
                  "item": "https://gemcitycleaningcrew.com/commercial-one-time-cleaning"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".hero-subtitle"]
            },
            "significantLink": [
              "https://gemcitycleaningcrew.com/quote",
              "tel:937-892-4157"
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
            "url": "https://gemcitycleaningcrew.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/gemcitycleaningcrew-facebook.webp",
              "width": 1200,
              "height": 630
            },
            "foundingDate": "2020",
            "founder": {
              "@type": "Person",
              "name": "Gem City Cleaning Crew Founder"
            },
            "numberOfEmployees": "5-10",
            "slogan": "Professional Cleaning Services in Dayton, OH",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "937-892-4157",
                "contactType": "customer service",
                "availableLanguage": "English",
                "areaServed": "US"
              },
              {
                "@type": "ContactPoint",
                "telephone": "937-892-4157", 
                "contactType": "sales",
                "availableLanguage": "English",
                "areaServed": "US"
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "39.7589",
                "longitude": "-84.1916"
              },
              "geoRadius": "30000"
            }
          })}
        </script>

        {/* Enhanced FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://gemcitycleaningcrew.com/commercial-one-time-cleaning#faq",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
                "author": {
                  "@type": "Organization",
                  "name": "Gem City Cleaning Crew"
                }
              }
            }))
          })}
        </script>

        {/* HowTo Schema for Deep Cleaning Process */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How Commercial One-Time Deep Cleaning Works",
            "description": "Step-by-step process for professional commercial deep cleaning services",
            "image": "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/20240512_125224-scaled.webp",
            "totalTime": "PT4H",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "Contact for Quote"
            },
            "step": [
              {
                "@type": "HowToStep",
                "name": "Initial Assessment",
                "text": "We evaluate your commercial space and discuss specific areas needing attention",
                "image": "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/IMG-20240513-WA0012.webp"
              },
              {
                "@type": "HowToStep", 
                "name": "Room-by-Room Deep Clean",
                "text": "Following our comprehensive checklist plus intensive deep cleaning tasks for all areas",
                "image": "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/IMG-20240512-WA0025.webp"
              },
              {
                "@type": "HowToStep",
                "name": "Quality Inspection", 
                "text": "Final walkthrough to ensure every area meets our high commercial standards",
                "image": "https://gemcitycleaningcrew.com/wp-content/uploads/2025/06/WhatsApp-Image-2024-05-12-at-18.02.07_cdbb91df.webp"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Box
        className="hero-section"
        sx={{
          background: `linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)), url('https://gemcitycleaningcrew.com/wp-content/uploads/2023/04/benjamin-child-GWe0dlVD9e0-unsplash.jpg')`,
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
            label="ONE-TIME • NO CONTRACTS • SAME-DAY AVAILABLE" 
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
            Commercial One-Time Deep Cleaning
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
            Professional Deep Cleaning for Special Events, Move-Ins & More
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
            Available evenings, weekends & holidays in Dayton, OH
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
              Get Free Deep Cleaning Quote
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
            {['Same-Day Available', 'No Contracts', 'After-Hours Service', 'Commercial Grade'].map((item) => (
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

      {/* Table of Contents */}
      <TableOfContents 
        items={tocItems} 
        collapsible={true}
        defaultExpanded={false}
        showItemCount={true}
      />

      {/* Cleaning Scenarios Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="cleaning-scenarios">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            When Do You Need One-Time Commercial Deep Cleaning?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            Professional deep cleaning solutions for every business situation
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {cleaningScenarios.map((scenario, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', position: 'relative', overflow: 'visible' }}>
                {scenario.popular && (
                  <Chip 
                    label="MOST REQUESTED"
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
                  <Box 
                    sx={{
                      width: 60,
                      height: 60,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3
                    }}
                  >
                    {scenario.icon}
                  </Box>
                  
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
                    {scenario.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ flex: 1, mb: 3 }}>
                    {scenario.description}
                  </Typography>
                  
                  <Box sx={{ textAlign: 'left' }}>
                    {scenario.features.map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CheckCircleIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />
                        <Typography variant="body2" sx={{ fontWeight: 500, color: '#525252' }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* What's Included Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="whats-included">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            What's Included in Our Commercial Deep Cleaning?
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            Our comprehensive one-time deep cleaning service covers every area of your commercial space 
            with meticulous attention to detail and commercial-grade equipment.
          </Typography>

          <Grid container spacing={4}>
            {deepCleaningAreas.map((area, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                        mb: 3
                      }}
                    >
                      {area.title}
                    </Typography>
                    <Box sx={{ '& > div': { mb: 1 } }}>
                      {area.tasks.map((task, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CheckCircleIcon sx={{ fontSize: 16, color: theme.palette.primary.main, mt: 0.2 }} />
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {task}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="why-choose">
        <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
          Why Choose Our One-Time Deep Cleaning Service?
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {whyChooseReasons.map((reason, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <CardContent>
                  <Box sx={{ mb: 3 }}>{reason.icon}</Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: theme.palette.primary.main }}>
                    {reason.title}
                  </Typography>
                  <Typography variant="body1">
                    {reason.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Card 
            sx={{ 
              maxWidth: 700, 
              mx: 'auto', 
              p: 4,
              background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
              border: `2px solid ${theme.palette.primary.main}`,
              borderRadius: 3
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}>
              Ready for Professional Deep Cleaning?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#525252', fontSize: '1.1rem' }}>
              Get a customized quote for your commercial space. Same-day service available for urgent needs.
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
                  fontWeight: 600
                }}
              >
                Get Free Deep Cleaning Quote
              </Button>
            </Box>
          </Card>
        </Box>
      </Container>

      {/* Before & After Results Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="results">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2, color: theme.palette.primary.main }}>
              See Our Commercial Deep Cleaning Results
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              Real before and after photos from our commercial cleaning projects. These dramatic transformations 
              show the professional quality and attention to detail you can expect from our team.
            </Typography>
          </Box>

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
                          <Box
                            component="img"
                            height="300"
                            width="100%"
                            src={comparison.beforeImage}
                            alt={comparison.beforeAlt}
                            loading="lazy"
                            style={{
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
                          <Box
                            component="img"
                            height="300"
                            width="100%"
                            src={comparison.afterImage}
                            alt={comparison.afterAlt}
                            loading="lazy"
                            style={{
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

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: theme.palette.primary.main }}>
              Ready for These Results in Your Space?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#525252', maxWidth: 600, mx: 'auto' }}>
              These photos show what's possible when you choose professional commercial deep cleaning. 
              Get the same dramatic transformation for your business.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={handleOpenQuoteForm}
              sx={{
                fontSize: '1.1rem',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, #880E4F 100%)`,
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Get My Free Deep Cleaning Quote
            </Button>
          </Box>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }} id="faq">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2, color: theme.palette.primary.main }}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Everything you need to know about our commercial one-time deep cleaning service
            </Typography>
          </Box>

          {faqData.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 2 }}>
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

      {/* Service Areas */}
      <Box id="service-areas">
        <AreasWeServe />
      </Box>

      {/* Final CTA */}
      <Box sx={{ backgroundColor: theme.palette.primary.main, color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Need Professional Deep Cleaning Today?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Same-day service available for urgent commercial cleaning needs in Dayton, OH
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
            >
              Get Free Deep Cleaning Quote
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

export default CommercialOneTimeCleaning 