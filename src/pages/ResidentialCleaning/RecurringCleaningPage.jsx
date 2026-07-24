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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import RepeatIcon from '@mui/icons-material/Repeat'
import PersonIcon from '@mui/icons-material/Person'
import ScheduleIcon from '@mui/icons-material/Schedule'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import StarIcon from '@mui/icons-material/Star'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import HandshakeIcon from '@mui/icons-material/Handshake'

// Import the styling
import '../../styles/homepages/HomePage.css'
import '../../styles/pages/ResidentialPage.css'

// Components
import AreasWeServe from '../../components/AreasWeServe'

const RecurringCleaningPage = () => {
  const theme = useTheme()

  // Process steps for recurring service
  const processSteps = [
    {
      title: "Get Started",
      description: "Give us a call and we'll work together to create your perfect cleaning plan by choosing rooms, tasks, and frequency (weekly, bi-weekly, or monthly).",
      details: ["Free phone consultation", "Custom room selection", "Choose your frequency", "No contracts required"]
    },
    {
      title: "Initial Deep Clean", 
      description: "We begin with a thorough deep cleaning to establish the perfect baseline, then your assigned cleaner starts regular service on your schedule.",
      details: ["Complete deep cleaning first", "Meet your assigned cleaner", "Establish cleaning routine", "Same day/time each visit"]
    },
    {
      title: "Enjoy Consistency",
      description: "Relax as your dedicated professional cleaner maintains your home week after week, with the flexibility to adjust anytime.",
      details: ["Same cleaner every visit", "Consistent quality results", "Easy scheduling changes", "100% satisfaction guaranteed"]
    }
  ]

  // Recurring service benefits - positive focus only
  const recurringBenefits = [
    {
      title: "Complete Flexibility",
      description: "Enjoy the freedom to adjust your schedule, change frequency, or pause service anytime. We work around your life with no long-term commitments.",
      icon: <HandshakeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Change plans anytime with no penalties"
    },
    {
      title: "Consistent Professional Cleaner", 
      description: "Build a trusted relationship with your dedicated cleaner who learns your home's unique needs and preferences over time.",
      icon: <PersonIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Same trained professional every visit"
    },
    {
      title: "Personalized Service Plans",
      description: "Every home is different. We create custom cleaning plans tailored to your specific rooms, preferences, and family needs.",
      icon: <ScheduleIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Custom plans designed just for you"
    },
    {
      title: "Excellent Communication",
      description: "We meet you where you are. Whether you prefer calls, texts, emails, or even mail - we want to hear from you and take your concerns seriously.",
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Multiple ways to reach us on your terms"
    },
    {
      title: "Feedback Appreciated",
      description: "We take feedback very seriously because we're in your home and you deserve to have it cleaned your way. Rate your cleaning after every service.",
      icon: <StarIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Post-cleaning rating system for continuous improvement"
    },
    {
      title: "Professional Standards",
      description: "Our 3-month training program, professional equipment, and rigorous quality standards ensure exceptional results every single visit.",
      icon: <CheckCircleIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      benefit: "Trained professionals with commercial-grade equipment"
    }
  ]

  // Frequency options
  const frequencyOptions = [
    {
      title: "Weekly Cleaning",
      description: "Perfect for busy families, homes with pets, or high-traffic households",
      features: ["Maintains spotless home", "Reduces allergens weekly", "Perfect for large families", "Best value per cleaning"],
      popular: true,
      savings: "Most Popular"
    },
    {
      title: "Bi-Weekly Cleaning", 
      description: "Ideal balance of cleanliness and budget for most homeowners",
      features: ["Great for working couples", "Maintains clean home", "Budget-friendly option", "Flexible scheduling"],
      popular: false,
      savings: "Best Value"
    },
    {
      title: "Monthly Cleaning",
      description: "Maintain your home's cleanliness with regular deep attention",
      features: ["Perfect for single occupants", "Supplemental cleaning", "Special occasion prep", "Seasonal maintenance"],
      popular: false,
      savings: "Most Affordable"
    }
  ]

  // Customer testimonials focused on recurring service
  const recurringTestimonials = [
    {
      name: "Amanda T.",
      text: "I have been using Gem City for four years now and am consistently happy with their service. I typically have the same cleaner each visit which is great for building trust.",
      rating: 5,
      highlight: "4+ Years of Service",
      service: "Bi-weekly cleaning"
    },
    {
      name: "Anne B.", 
      text: "I've been using Gem City cleaning for 3 years, and I am very happy with the job they do. Consistent, reliable, positive, trustworthy. If ever I've had concerns, they make it right quickly.",
      rating: 5,
      highlight: "3+ Years of Service", 
      service: "Weekly cleaning"
    },
    {
      name: "Eli M.",
      text: "These guys do a great job. The initial deep clean was very thorough and all follow on cleans have been great. They do a really good job working around schedules and have always been friendly.",
      rating: 5,
      highlight: "Consistent Quality",
      service: "Monthly cleaning"
    }
  ]

  // FAQ specifically for recurring services
  const recurringFAQ = [
    {
      question: "How does recurring cleaning service work?",
      answer: "We start with a free in-home estimate to understand your needs and preferences. After customizing your cleaning plan and frequency, we begin with an initial deep clean to establish the baseline. Then your assigned cleaner follows your regular schedule - same day, same time, same professional cleaner every visit."
    },
    {
      question: "Can I have the same cleaner for every recurring visit?",
      answer: "Yes! We prioritize consistency and try our best to assign the same professional cleaner to your home every visit. This builds trust, ensures they know your preferences, and provides the personal touch that sets us apart from corporate chains."
    },
    {
      question: "What if I need to reschedule or skip a cleaning?",
      answer: "No problem! We offer complete flexibility with no contracts. Simply call, text, or email us at least 24 hours in advance to reschedule or skip a cleaning. We understand life happens and work around your schedule."
    },
    {
      question: "Do you require long-term contracts for recurring service?", 
      answer: "Never! Unlike corporate cleaning companies that lock you into 6-12 month contracts, we believe in earning your business every visit. Cancel anytime, change frequency anytime, or adjust your cleaning plan - you're never locked in."
    },
    {
      question: "How do recurring cleaning prices compare to one-time cleanings?",
      answer: "Recurring cleanings are significantly more affordable per visit than one-time cleanings because your home stays consistently clean, requiring less time and effort. The more frequent your service, the better the value per cleaning."
    },
    {
      question: "What's included in recurring cleaning vs deep cleaning?",
      answer: "Recurring cleanings follow the same thorough checklist as our deep cleans, but they're easier to complete because your home stays consistently clean. We may include additional deep cleaning tasks seasonally or upon request for a small additional fee."
    },
    {
      question: "Can I customize what gets cleaned during recurring visits?",
      answer: "Absolutely! During your estimate, we'll create a custom cleaning plan specifying exactly which rooms and tasks you want completed. You can add or remove rooms, skip certain tasks, or request special attention to specific areas."
    },
    {
      question: "What happens if I'm not satisfied with a recurring cleaning?",
      answer: "We offer a 100% satisfaction guarantee. If you're not completely happy with any cleaning, contact us within 24 hours and we'll return to re-clean the areas of concern at no additional charge. Your satisfaction is our priority."
    },
    {
      question: "Do I need to be home during recurring cleanings?",
      answer: "It's completely up to you! Many recurring customers prefer to provide a key or code so cleaning can happen while they're at work. Others like to be home, especially for the first few visits. We're flexible and work with your preference."
    },
    {
      question: "How far in advance should I schedule recurring cleaning service?",
      answer: "We recommend scheduling 1-2 weeks in advance to secure your preferred day and time slot. However, we often have same-week availability and can sometimes accommodate last-minute requests depending on our schedule."
    }
  ]

  // Competitor comparison data
  const competitorComparison = [
    {
      feature: "Same Cleaner Every Visit",
      gemCity: { status: "✅", text: "Yes" },
      mollyMaid: { status: "🚫", text: "Not guaranteed" },
      theMaids: { status: "🚫", text: "Rotating team" },
      maidRight: { status: "✅", text: "Usually" }
    },
    {
      feature: "Contract-Free",
      gemCity: { status: "✅", text: "Always" },
      mollyMaid: { status: "✅", text: "Yes" },
      theMaids: { status: "✅", text: "Yes" },
      maidRight: { status: "✅", text: "Yes" }
    },
    {
      feature: "Custom Room-by-Room Plans",
      gemCity: { status: "✅", text: "Fully Customized" },
      mollyMaid: { status: "🟡", text: "Some customization" },
      theMaids: { status: "🟡", text: "Limited" },
      maidRight: { status: "✅", text: "Customized" }
    },
    {
      feature: "Locally Owned & Operated",
      gemCity: { status: "✅", text: "Dayton-based" },
      mollyMaid: { status: "🚫", text: "National Franchise" },
      theMaids: { status: "🚫", text: "National Franchise" },
      maidRight: { status: "✅", text: "Yes" }
    },
    {
      feature: "Training Program",
      gemCity: { status: "✅", text: "3-Month Training" },
      mollyMaid: { status: "🟡", text: "Variable" },
      theMaids: { status: "✅", text: "22-Step Process" },
      maidRight: { status: "🟡", text: "Certified Process" }
    },
    {
      feature: "100% Satisfaction Guarantee",
      gemCity: { status: "✅", text: "Yes" },
      mollyMaid: { status: "✅", text: "Yes" },
      theMaids: { status: "✅", text: "Yes" },
      maidRight: { status: "✅", text: "Yes" }
    }
  ]

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="/images/legacy/katja-rooke-77JACslA8G0-unsplash-scaled.jpg" fetchPriority="high" />
        {/* Primary Meta Tags */}
        <title>Best Recurring House Cleaning Service Dayton OH | No Contracts | Same Cleaner Every Visit | Gem City Cleaning</title>
        <meta name="title" content="Best Recurring House Cleaning Service Dayton OH | No Contracts | Same Cleaner Every Visit" />
        <meta name="description" content="⭐ #1 Rated Recurring House Cleaning Service in Dayton, OH. No contracts, same professional cleaner every visit, flexible scheduling. Weekly, bi-weekly & monthly options. FREE quotes! Call 937-892-4157" />
        <meta name="keywords" content="recurring house cleaning Dayton, weekly cleaning service Dayton OH, bi-weekly house cleaning, no contract cleaning service, regular house cleaning Dayton, maid service Dayton, professional house cleaners Dayton, weekly maid service, Kettering house cleaning, Centerville cleaning service, Oakwood maid service, recurring cleaning near me, house cleaning subscription Dayton, residential cleaning service, same cleaner every visit, flexible house cleaning" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="US-OH" />
        <meta name="geo.placename" content="Dayton, Ohio" />
        <meta name="author" content="Gem City Cleaning Crew" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="theme-color" content="#D81B60" />
        
        {/* Open Graph / Facebook - Enhanced */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gem City Cleaning Crew" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/recurring-cleaning-service" />
        <meta property="og:title" content="Best Recurring House Cleaning Service Dayton OH | No Contracts | Same Cleaner" />
        <meta property="og:description" content="⭐ #1 Rated Recurring House Cleaning in Dayton. No contracts, same professional cleaner every visit, flexible scheduling. Weekly, bi-weekly & monthly options. FREE quotes!" />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />
        <meta property="og:image:alt" content="Professional recurring house cleaning results showing organized living room with vacuum lines" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={new Date().toISOString()} />
        <meta property="business:contact_data:locality" content="Dayton" />
        <meta property="business:contact_data:region" content="OH" />
        <meta property="business:contact_data:country_name" content="United States" />
        <meta property="business:contact_data:phone_number" content="+1-937-892-4157" />

        {/* Twitter Cards - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GemCityCleaning" />
        <meta name="twitter:creator" content="@GemCityCleaning" />
        <meta name="twitter:title" content="Best Recurring House Cleaning Service Dayton OH | No Contracts | Same Cleaner" />
        <meta name="twitter:description" content="⭐ #1 Rated Recurring House Cleaning in Dayton. No contracts, same professional cleaner every visit. Weekly, bi-weekly & monthly options. FREE quotes!" />
        <meta name="twitter:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />
        <meta name="twitter:image:alt" content="Professional recurring house cleaning results in Dayton OH" />
        
        {/* Additional Social Media */}
        <meta property="article:author" content="Gem City Cleaning Crew" />
        <meta property="article:publisher" content="https://www.facebook.com/GemCityCleaningCrew" />
        <meta property="article:published_time" content="2024-01-15T10:00:00Z" />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        
        {/* Canonical and Alternate URLs */}
        <link rel="canonical" href="https://gemcitycleaningcrew.com/recurring-cleaning-service" />
        <link rel="alternate" hrefLang="en-us" href="https://gemcitycleaningcrew.com/recurring-cleaning-service" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
        <link rel="preload" href="/images/legacy/katja-rooke-77JACslA8G0-unsplash-scaled.jpg" as="image" />
        
        {/* JSON-LD Structured Data - Enhanced LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://gemcitycleaningcrew.com/#business",
            "name": "Gem City Cleaning Crew",
            "alternateName": "Gem City Cleaning",
            "description": "Professional recurring house cleaning service in Dayton, OH with no contracts, same cleaner every visit, and flexible scheduling options for weekly, bi-weekly, and monthly service.",
            "url": "https://gemcitycleaningcrew.com",
            "telephone": "+1-937-892-4157",
            "email": "info@gemcitycleaningcrew.com",
            "foundingDate": "2020",
            "priceRange": "$$",
            "currenciesAccepted": "USD",
            "paymentAccepted": "Cash, Check, Credit Card, Venmo, Zelle",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dayton",
              "addressRegion": "OH",
              "addressCountry": "US"
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
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Amanda T."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "I have been using Gem City for four years now and am consistently happy with their service. I typically have the same cleaner each visit which is great for building trust.",
                "datePublished": "2023-11-15"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Anne B."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "I've been using Gem City cleaning for 3 years, and I am very happy with the job they do. Consistent, reliable, positive, trustworthy. If ever I've had concerns, they make it right quickly.",
                "datePublished": "2023-10-22"
              }
            ],
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
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Recurring Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "Weekly Recurring House Cleaning",
                  "description": "Professional weekly house cleaning service with same cleaner every visit, no contracts required",
                  "category": "House Cleaning Service"
                },
                {
                  "@type": "Offer",
                  "name": "Bi-weekly Recurring House Cleaning",
                  "description": "Bi-weekly house cleaning service with flexible scheduling and consistent professional cleaner",
                  "category": "House Cleaning Service"
                },
                {
                  "@type": "Offer",
                  "name": "Monthly Recurring House Cleaning",
                  "description": "Monthly house cleaning service with no long-term contracts and 100% satisfaction guarantee",
                  "category": "House Cleaning Service"
                }
              ]
            }
          })}
        </script>

        {/* Service Schema - Enhanced */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://gemcitycleaningcrew.com/recurring-cleaning-service#service",
            "name": "Recurring House Cleaning Service",
            "alternateName": ["Weekly House Cleaning", "Bi-weekly House Cleaning", "Monthly House Cleaning", "Regular Maid Service"],
            "description": "Professional recurring house cleaning service in Dayton, Ohio with no contracts, same cleaner every visit, and flexible scheduling options for weekly, bi-weekly, and monthly service",
            "serviceType": "House Cleaning Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Gem City Cleaning Crew",
              "telephone": "+1-937-892-4157",
              "url": "https://gemcitycleaningcrew.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dayton",
                "addressRegion": "OH",
                "addressCountry": "US"
              }
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Weekly House Cleaning Service",
                "description": "Weekly recurring house cleaning with same professional cleaner every visit",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01",
                "areaServed": "Dayton, OH and surrounding areas"
              },
              {
                "@type": "Offer",
                "name": "Bi-weekly House Cleaning Service", 
                "description": "Bi-weekly recurring house cleaning with flexible scheduling",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01",
                "areaServed": "Dayton, OH and surrounding areas"
              },
              {
                "@type": "Offer",
                "name": "Monthly House Cleaning Service",
                "description": "Monthly recurring house cleaning with no contracts required",
                "priceCurrency": "USD", 
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01",
                "areaServed": "Dayton, OH and surrounding areas"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "85",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>

        {/* FAQ Schema - Enhanced */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": recurringFAQ.map((faq, index) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
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
                "name": "Residential Cleaning",
                "item": "https://gemcitycleaningcrew.com/residential-cleaning"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Recurring Cleaning Service",
                "item": "https://gemcitycleaningcrew.com/recurring-cleaning-service"
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
                "availableLanguage": "English"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dayton",
              "addressRegion": "OH",
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

        {/* Competitor Comparison Schema for AI Overview */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Dayton Recurring Cleaning Service Comparison",
            "description": "Comparison of top recurring house cleaning services in Dayton, Ohio",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Gem City Cleaning",
                "url": "https://gemcitycleaningcrew.com/recurring-cleaning-service",
                "description": "Local, contract-free, same-cleaner service with customized cleaning plans and a 3-month training program."
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Molly Maid",
                "url": "https://www.mollymaid.com/southeast-dayton/our-services/regular-cleaning-service/",
                "description": "National brand with flexible scheduling but rotating staff and limited plan customization."
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "The Maids",
                "url": "https://www.maids.com/250/",
                "description": "Franchise offering team-based cleaning with a health-focused 22-step process and HEPA vacuums."
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Maid Right",
                "url": "https://www.maidright.com/dayton/",
                "description": "Premium personalized service with a certified cleaning process and local ownership."
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Box
        className="hero-section"
        sx={{
          background: `linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)), url('/images/legacy/katja-rooke-77JACslA8G0-unsplash-scaled.jpg')`,
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
            label="RECURRING • FLEXIBLE • NO CONTRACTS" 
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
            Best Recurring House Cleaning Service in Dayton
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
            Same Professional Cleaner • No Contracts • Flexible Scheduling
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
            Weekly, Bi-weekly, or Monthly Service • Cancel Anytime
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
              component={Link}
              to="/quote?service=recurring-cleaning"
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
              Get Free Recurring Service Quote
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
            {['No Contracts Ever', 'Same Cleaner Each Visit', 'Flexible Scheduling', 'Local Personal Service'].map((item) => (
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

      {/* How It Works Process */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            How Our Recurring Cleaning Service Works
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
            Getting started with recurring house cleaning service is simple. We make the process easy 
            and flexible, so you can enjoy a consistently clean home without any hassle.
          </Typography>
        </Box>

        {/* For 3 steps, we'll use a clean grid layout */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {processSteps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  textAlign: 'center',
                  p: 4,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  border: `2px solid ${theme.palette.primary.main}15`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[12],
                    borderColor: theme.palette.primary.main
                  }
                }}
              >
                {/* Step number as main visual element */}
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
                    mb: 3,
                    boxShadow: '0 4px 16px rgba(216, 27, 96, 0.3)'
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 700,
                      fontSize: '2.5rem'
                    }}
                  >
                    {index + 1}
                  </Typography>
                </Box>
                
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: theme.palette.primary.main }}>
                  {step.title}
                </Typography>
                
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#525252' }}>
                  {step.description}
                </Typography>

                {/* Step details */}
                <Box sx={{ textAlign: 'left' }}>
                  {step.details.map((detail, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <CheckCircleIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {detail}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Premium Service Benefits */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              The Gem City Recurring Cleaning Advantage
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              Experience the difference of professional recurring cleaning service designed around your life. 
              Our commitment to excellence shows in every detail of your service experience.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {recurringBenefits.map((benefit, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    p: 4,
                    transition: 'all 0.3s ease',
                    border: `1px solid ${theme.palette.primary.main}20`,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8],
                      borderColor: theme.palette.primary.main
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                    <Box sx={{ flexShrink: 0, mt: 1 }}>
                      {benefit.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: theme.palette.primary.main }}>
                        {benefit.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                        {benefit.description}
                      </Typography>
                      <Chip 
                        label={benefit.benefit}
                        size="small"
                        sx={{ 
                          backgroundColor: 'rgba(216, 27, 96, 0.1)',
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          fontSize: '0.75rem'
                        }}
                      />
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Additional Value Points */}
          <Box sx={{ mt: 8 }}>
            <Typography variant="h3" component="h3" sx={{ mb: 4, textAlign: 'center', color: theme.palette.primary.main }}>
              What Makes Our Recurring Service Special
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Box 
                    sx={{
                      width: 80,
                      height: 80,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    3-Month Training Program
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Every cleaner completes our comprehensive 3-month training program to ensure professional, consistent results.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Box 
                    sx={{
                      width: 80,
                      height: 80,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3
                    }}
                  >
                    <CleaningServicesIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    All Supplies Included
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We bring all professional cleaning supplies and equipment - you don't need to buy anything.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Box 
                    sx={{
                      width: 80,
                      height: 80,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3
                    }}
                  >
                    <StarIcon sx={{ fontSize: 40, color: 'white' }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    100% Satisfaction Guarantee
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Not completely satisfied? We'll return within 24 hours to make it right at no additional charge.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Competitor Comparison Table */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            How We Compare to Other Cleaning Services in Dayton
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
            See why Gem City Cleaning is the top choice for recurring house cleaning service 
            compared to national chains and other local competitors.
          </Typography>
        </Box>

        <TableContainer 
          component={Paper} 
          sx={{ 
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            overflow: 'hidden',
            mb: 4
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="cleaning service comparison">
            <TableHead>
              <TableRow sx={{ backgroundColor: theme.palette.primary.main }}>
                <TableCell 
                  sx={{ 
                    color: 'white', 
                    fontWeight: 700, 
                    fontSize: '1.1rem',
                    borderBottom: 'none'
                  }}
                >
                  Feature
                </TableCell>
                <TableCell 
                  sx={{ 
                    color: 'white', 
                    fontWeight: 700, 
                    fontSize: '1.1rem',
                    borderBottom: 'none',
                    backgroundColor: theme.palette.primary.dark
                  }}
                >
                  Gem City Cleaning
                </TableCell>
                <TableCell 
                  sx={{ 
                    color: 'white', 
                    fontWeight: 700, 
                    fontSize: '1.1rem',
                    borderBottom: 'none',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)'
                  }}
                >
                  Molly Maid
                </TableCell>
                <TableCell 
                  sx={{ 
                    color: 'white', 
                    fontWeight: 700, 
                    fontSize: '1.1rem',
                    borderBottom: 'none'
                  }}
                >
                  The Maids
                </TableCell>
                <TableCell 
                  sx={{ 
                    color: 'white', 
                    fontWeight: 700, 
                    fontSize: '1.1rem',
                    borderBottom: 'none',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)'
                  }}
                >
                  Maid Right
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {competitorComparison.map((row, index) => (
                <TableRow 
                  key={index}
                  sx={{ 
                    '&:nth-of-type(even)': { 
                      backgroundColor: 'rgba(0, 0, 0, 0.02)' 
                    },
                    '&:hover': { 
                      backgroundColor: 'rgba(216, 27, 96, 0.05)' 
                    }
                  }}
                >
                  <TableCell 
                    component="th" 
                    scope="row"
                    sx={{ 
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: '#333'
                    }}
                  >
                    {row.feature}
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      backgroundColor: 'rgba(216, 27, 96, 0.08)',
                      fontWeight: 600,
                      fontSize: '0.95rem'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>{row.gemCity.status}</span>
                      <span>{row.gemCity.text}</span>
                    </Box>
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      fontSize: '0.95rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.02)'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>{row.mollyMaid.status}</span>
                      <span>{row.mollyMaid.text}</span>
                    </Box>
                  </TableCell>
                  <TableCell 
                    sx={{ fontSize: '0.95rem' }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>{row.theMaids.status}</span>
                      <span>{row.theMaids.text}</span>
                    </Box>
                  </TableCell>
                  <TableCell 
                    sx={{ 
                      fontSize: '0.95rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.02)'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span style={{ fontSize: '1.2rem' }}>{row.maidRight.status}</span>
                      <span>{row.maidRight.text}</span>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h4" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
            Why Choose Local Over National Chains?
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.1rem', color: '#525252', mb: 4 }}>
            As a local Dayton business, we build lasting relationships with our customers. 
            You'll always know who's cleaning your home, and we're personally invested in your satisfaction.
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/quote?service=recurring-cleaning"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              '&:hover': { 
                backgroundColor: theme.palette.primary.dark,
                transform: 'translateY(-2px)'
              }
            }}
          >
            Choose the Local Advantage - Get Quote
          </Button>
        </Box>
      </Container>

      {/* Cleaning Checklist Link Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h3" sx={{ mb: 3, color: theme.palette.primary.main, fontWeight: 600 }}>
              See Exactly What's Included in Our Recurring Service
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#525252', mb: 4, lineHeight: 1.6 }}>
              Wondering what tasks we complete during each recurring cleaning visit? 
              Our comprehensive checklist shows you exactly what to expect every time we clean your home.
            </Typography>
            
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <CheckCircleIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Room-by-Room Tasks
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Detailed breakdown of what we clean in every room
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <AssignmentIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Customizable Options
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    See which tasks can be added or removed
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <ScheduleIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Time Estimates
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Know how long each cleaning will take
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/residential-house-cleaning-checklist"
              sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderWidth: 2,
                '&:hover': { 
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  borderWidth: 2,
                  transform: 'translateY(-2px)'
                }
              }}
            >
              View Our Complete Cleaning Checklist
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Frequency Options */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Choose Your Recurring Cleaning Frequency
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
            Select the cleaning frequency that works best for your lifestyle and budget. 
            You can always adjust your schedule later - we're completely flexible!
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {frequencyOptions.map((option, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.3s ease',
                  border: option.popular ? `3px solid ${theme.palette.primary.main}` : `1px solid ${theme.palette.primary.main}20`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[12]
                  }
                }}
              >
                {option.savings && (
                  <Chip 
                    label={option.savings}
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: 16,
                      zIndex: 10,
                      backgroundColor: option.popular ? theme.palette.primary.main : '#4CAF50',
                      color: 'white',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      height: 28
                    }}
                  />
                )}
                
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.main }}>
                    {option.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: 3, color: '#525252' }}>
                    {option.description}
                  </Typography>
                  
                  <Box sx={{ textAlign: 'left', mb: 3 }}>
                    {option.features.map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CheckCircleIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  
                  <Button
                    variant={option.popular ? "contained" : "outlined"}
                    fullWidth
                    component={Link}
                    to={`/quote?service=recurring-cleaning&frequency=${option.title.toLowerCase().replace(' ', '-')}`}
                    sx={{
                      py: 1.5,
                      fontWeight: 600,
                      ...(option.popular ? {
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': { backgroundColor: theme.palette.primary.dark }
                      } : {
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        '&:hover': { 
                          backgroundColor: theme.palette.primary.main,
                          color: 'white'
                        }
                      })
                    }}
                  >
                    Get {option.title} Quote
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* See the Results - Image Showcase */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              See the Results of Our Recurring Cleaning
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              Every room, every visit, every time. Experience the consistent professional quality that makes 
              our recurring cleaning service the best choice for your home.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Living Room */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                  transition: 'all 0.3s ease',
                  border: '3px solid white',
                  backgroundColor: 'white',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.2)',
                    '& .image-overlay': {
                      opacity: 1
                    }
                  }
                }}
              >
                {/* Caption at top of frame */}
                <Box
                  sx={{
                    backgroundColor: 'white',
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                    p: 2,
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                    Organized & Detailed
                  </Typography>
                </Box>
                
                {/* Image container */}
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src="/images/legacy/living-room-2.jpg"
                    alt="Professional recurring cleaning results - living room with visible vacuum lines showing attention to detail"
                    sx={{
                      width: '100%',
                      height: 280,
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  
                  {/* Elegant overlay */}
                  <Box
                    className="image-overlay"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0.95) 100%)',
                      color: 'white',
                      p: 3,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 10,
                      height: '60%'
                    }}
                  >
                    <Box sx={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                        Living Spaces
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white', fontWeight: 500, textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                        Notice the perfect vacuum lines - proof of our attention to detail in every room
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Kitchen */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                  transition: 'all 0.3s ease',
                  border: '3px solid white',
                  backgroundColor: 'white',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.2)',
                    '& .image-overlay': {
                      opacity: 1
                    }
                  }
                }}
              >
                {/* Caption at top of frame */}
                <Box
                  sx={{
                    backgroundColor: 'white',
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                    p: 2,
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                    Spotless & Sanitized
                  </Typography>
                </Box>
                
                {/* Image container */}
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src="/images/legacy/kitchen-2.jpg"
                    alt="Professional recurring kitchen cleaning - spotless counters, organized and sanitized"
                    sx={{
                      width: '100%',
                      height: 280,
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  
                  {/* Elegant overlay */}
                  <Box
                    className="image-overlay"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0.95) 100%)',
                      color: 'white',
                      p: 3,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 10,
                      height: '60%'
                    }}
                  >
                    <Box sx={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                        Kitchen Deep Clean
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white', fontWeight: 500, textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                        Spotless counters, organized spaces, and thorough sanitization every visit
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Bathroom */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                  transition: 'all 0.3s ease',
                  border: '3px solid white',
                  backgroundColor: 'white',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.2)',
                    '& .image-overlay': {
                      opacity: 1
                    }
                  }
                }}
              >
                {/* Caption at top of frame */}
                <Box
                  sx={{
                    backgroundColor: 'white',
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                    p: 2,
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                    Deep & Thorough
                  </Typography>
                </Box>
                
                {/* Image container */}
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src="/images/legacy/bathroom-4.jpg"
                    alt="Professional recurring bathroom cleaning - sparkling clean bathtub and walk-in shower"
                    sx={{
                      width: '100%',
                      height: 280,
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  
                  {/* Elegant overlay */}
                  <Box
                    className="image-overlay"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0.95) 100%)',
                      color: 'white',
                      p: 3,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 10,
                      height: '60%'
                    }}
                  >
                    <Box sx={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                        Bathroom Excellence
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white', fontWeight: 500, textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                        Sparkling fixtures, pristine surfaces, and complete sanitization
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Bottom message */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h4" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
              Consistent Excellence in Every Room
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.1rem', color: '#525252' }}>
              These aren't stock photos - they're real results from our recurring cleaning service. 
              Week after week, this is the level of quality you can expect throughout your entire home.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Customer Testimonials */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              What Our Recurring Customers Say
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Real reviews from customers who trust us with their homes week after week
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {recurringTestimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8]
                    }
                  }}
                >
                  <Chip 
                    label={testimonial.highlight}
                    size="small"
                    sx={{ 
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: 600
                    }}
                  />
                  
                  <Rating value={testimonial.rating} readOnly size="small" sx={{ mb: 2 }} />
                  
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', lineHeight: 1.6 }}>
                    "{testimonial.text}"
                  </Typography>
                  
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                      - {testimonial.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.service}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Service Areas */}
      <AreasWeServe />

      {/* FAQ Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              Recurring Cleaning Service FAQ
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Common questions about our recurring house cleaning service
            </Typography>
          </Box>

          {recurringFAQ.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`recurring-faq-${index}`}
                id={`recurring-faq-${index}`}
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

      {/* Final CTA */}
      <Box sx={{ backgroundColor: theme.palette.primary.main, color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Ready for Reliable Recurring Cleaning?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join the hundreds of Dayton families who trust us with their homes every week. 
            No contracts, same cleaner, flexible scheduling guaranteed.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote?service=recurring-cleaning"
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
              Get Free Recurring Service Quote
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

export default RecurringCleaningPage 