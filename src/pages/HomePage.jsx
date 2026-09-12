import React, { useState, useEffect } from 'react'
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
  CardActionArea
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import BusinessIcon from '@mui/icons-material/Business'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import ScheduleIcon from '@mui/icons-material/Schedule'
import PersonIcon from '@mui/icons-material/Person'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'

// Import the stunning CSS styles
import '../styles/homepages/HomePage.css'

// Components
import AreasWeServe from '../components/AreasWeServe'
import TrustBlock from '../components/TrustBlock'

// Content
import { getAllPosts } from '../content/blog'
import { GBP_REVIEW_URL, generateFAQPageSchema } from '../utils/localBusinessSchema'

// Real facts only — founding year, licensing, and background-check policy
// are the same ones already published in AboutPage.jsx's trustStats/
// differentiators and localBusinessSchema.js. Not a rich-result/SERP claim —
// Google retired FAQ rich results for all sites May 7 2026 — this schema is
// added purely so crawlers and LLM answer engines can parse the Q&A directly,
// matching the same reasoning already used for location pages' FAQPage
// schema (see generateFAQPageSchema's own comment in localBusinessSchema.js).
const HOMEPAGE_FAQS = [
  {
    question: 'Do you require contracts?',
    answer: 'No. Gem City Cleaning Crew has never required contracts — cancel anytime, change your cleaning frequency anytime, no cancellation fees.'
  },
  {
    question: 'Are your cleaners background-checked and insured?',
    answer: 'Yes. Every cleaner passes a Checkr background check before their first visit, and Gem City Cleaning Crew carries full licensing and insurance coverage, with a certificate available on request.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve Dayton and the surrounding Miami Valley, including Kettering, Centerville, Oakwood, Miamisburg, Springboro, Huber Heights, Beavercreek, and more.'
  },
  {
    question: 'How do I get a free quote?',
    answer: 'Request a free, no-obligation quote online in a couple of minutes, or call 937-892-4157. Most requests get a response within a couple hours during business hours (Monday-Friday 10am-6pm, Saturday 10am-2pm).'
  },
  {
    question: 'Do you bring your own cleaning supplies?',
    answer: 'Yes. We bring professional-grade supplies and equipment to every visit — you never need to buy or provide any cleaning products.'
  },
  {
    question: 'How long has Gem City Cleaning Crew been in business?',
    answer: 'Since 2017. Chris and Macy Wilson founded Gem City Cleaning Crew in Dayton, Ohio, and the team has cleaned 700+ homes across the Miami Valley since.'
  }
]

const HomePage = () => {
  const theme = useTheme()
  const recentPosts = getAllPosts().slice(0, 3)

  // Rotating headline animation - Elementor style slide-down
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const headlines = ['Amazing', 'Easier', 'Better', 'Brighter', 'Simpler', 'Fun', 'Healthy']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 2500) // Match Elementor 2500ms delay
    return () => clearInterval(interval)
  }, [headlines.length])

  // Service cards that beat the competition
  const serviceCards = [
    {
      title: "House Cleaning",
      description: "Custom cleaning plans that fit YOUR life",
      icon: <HomeIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      link: "/residential",
      badge: "Most Popular",
      features: ["3-month trained staff", "All supplies included", "Custom room selection"],
      differentiator: "Personalized service that adapts to your specific needs"
    },
    {
      title: "Office Cleaning",
      description: "No contracts, maximum flexibility",
      icon: <BusinessIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      link: "/commercial",
      badge: "No Contracts!",
      features: ["No long-term contracts", "Free estimates", "Flexible scheduling"],
      differentiator: "Freedom and flexibility for your business"
    },
    {
      title: "Specialized Services",
      description: "Deep cleans, move-outs, post-construction",
      icon: <CleaningServicesIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      link: "/deep-cleaning",
      badge: "Same Day Available",
      features: ["Move-in/move-out", "Post-construction cleanup", "Deep sanitizing"],
      differentiator: "Comprehensive cleaning solutions for every situation"
    }
  ]

  // Competitive advantages
  const competitiveAdvantages = [
    {
      icon: <PersonIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />,
      title: "Local Service",
      description: "Locally owned and operated with personal attention to detail",
      highlight: "Not a corporate franchise"
    },
    {
      icon: <LocalOfferIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />,
      title: "No Contracts Ever",
      description: "Cancel anytime, change frequency anytime - total flexibility",
      highlight: "Complete freedom"
    },
    {
      icon: <ScheduleIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />,
      title: "3 Months Training",
      description: "Every cleaner goes through 3 months of rigorous training",
      highlight: "Most companies: 1 week training"
    },
    {
      icon: <CheckCircleIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />,
      title: "100% Supply Guarantee",
      description: "We bring everything - you don't buy a single cleaning product",
      highlight: "Save $200+ annually"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Gem City Cleaning Crew | House & Office Cleaning in Dayton, OH</title>
        <meta name="description" content="Gem City Cleaning Crew provides professional house and office cleaning throughout Dayton, Ohio and the Miami Valley. No contracts, licensed and insured, free quotes. Call 937-892-4157" />
        <meta name="keywords" content="Gem City Cleaning Crew, Dayton cleaning company, house cleaning Dayton, office cleaning Dayton, no contracts" />
        <link rel="preload" as="image" href="/images/legacy/katja-rooke-77JACslA8G0-unsplash-scaled.jpg" fetchPriority="high" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/" />
        <meta property="og:title" content="Gem City Cleaning Crew | House & Office Cleaning in Dayton, OH" />
        <meta property="og:description" content="Professional house and office cleaning throughout Dayton, Ohio and the Miami Valley. No contracts, licensed and insured, free quotes." />
        <meta property="og:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Gem City Cleaning Crew - Professional house cleaning service in Dayton, Ohio" />
        <meta property="og:site_name" content="Gem City Cleaning Crew" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://gemcitycleaningcrew.com/" />
        <meta name="twitter:title" content="Gem City Cleaning Crew | House & Office Cleaning in Dayton, OH" />
        <meta name="twitter:description" content="Professional house and office cleaning throughout Dayton, Ohio and the Miami Valley. No contracts, licensed and insured. Call 937-892-4157" />
        <meta name="twitter:image" content="https://gemcitycleaningcrew.com/images/legacy/gemcitycleaningcrew-facebook.webp" />
        <meta name="twitter:image:alt" content="Gem City Cleaning Crew - Professional house cleaning service in Dayton, Ohio" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://gemcitycleaningcrew.com/" />
        
        {/* LocalBusiness itself is injected once, site-wide, by the app shell (App.jsx / entry-server.jsx) — a per-page copy here would duplicate it with a conflicting/inconsistent version. */}

        {/* WebSite entity — the canonical home for the #website @id that
        location pages already reference via generateLocationWebPageSchema's
        isPartOf field (src/utils/localBusinessSchema.js), but that no page
        defined until now. No SearchAction: this site has no working /search
        route, and an unresolvable action is worse than omitting one — same
        reasoning already applied to the dropped LinkedIn sameAs entry. */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://gemcitycleaningcrew.com/#website',
            url: 'https://gemcitycleaningcrew.com',
            name: 'Gem City Cleaning Crew',
            description: 'Professional house cleaning services in Dayton, Ohio',
            publisher: { '@id': 'https://gemcitycleaningcrew.com/#business' }
          })}
        </script>

        {/* Homepage FAQ — plain visible content below, schema added only for
        AI-answer-engine/LLM-crawler parsing, not a Google rich-result claim
        (Google retired FAQ rich results for all sites May 7 2026). */}
        <script type="application/ld+json">
          {JSON.stringify(generateFAQPageSchema(HOMEPAGE_FAQS))}
        </script>
      </Helmet>

      {/* Hero Section with Rotating Headlines */}
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
          {/* Trust Badge */}
          <Chip 
            label="PROFESSIONAL • RELIABLE • TRUSTED" 
            sx={{ 
              mb: 3, 
              backgroundColor: theme.palette.primary.main, 
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem',
              px: 2,
              height: 'auto',
              maxWidth: { xs: '90%', sm: 'none' },
              '& .MuiChip-label': {
                display: 'block',
                whiteSpace: 'normal',
                overflow: 'visible',
                textOverflow: 'clip',
                lineHeight: 1.4,
                py: 0.75
              }
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
            Trusted Cleaning Crew in Dayton, OH
          </Typography>

          <Typography
            variant="h4"
            component="p"
            className="hero-subtitle"
            sx={{
              color: 'white',
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              fontWeight: 400,
              mb: 2,
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            Professional house and office cleaning with 3-month trained staff, no long-term contracts, and flexible scheduling
          </Typography>

          {/* Single Prominent Rating -- links to the real Google Business
              Profile (CID 7373519259471335388) instead of rendering as an
              unverifiable claim. See 2026-09-11 SEO audit follow-up,
              "self-serving review schema" finding. */}
          <Box
            component="a"
            href={GBP_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              mb: 4,
              minHeight: 40, // Prevent layout shift
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': { opacity: 0.85 }
            }}
          >
            <Rating
              value={4.6}
              precision={0.5}
              readOnly
              size="large"
              sx={{
                color: '#FFD700',
                '& .MuiRating-icon': {
                  fontSize: '2rem' // Fixed size to prevent shifts
                }
              }}
            />
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: '#FFD700',
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                minWidth: 200, // Prevent text shifting
                textDecoration: 'underline'
              }}
            >
              4.6/5 stars • 90+ reviews
            </Typography>
          </Box>
          
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
              Get Free Quote (No Contracts!)
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
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderWidth: 2
                }
              }}
            >
              Call 937-892-4157
            </Button>
          </Box>

          {/* Key Differentiators Bar */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: { xs: 2, md: 4 }, 
            flexWrap: 'wrap',
            opacity: 0.9 
          }}>
            {['No Contracts', '3-Month Training', 'Local Service', 'All Supplies Included'].map((item) => (
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

      {/* Why Choose Us */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Why Choose Gem City Cleaning Crew
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.1rem' }}>
            Whether you&apos;re looking for house cleaning or a maid service, get the same professional, personal touch every visit
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {competitiveAdvantages.map((advantage, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 4, 
                  height: '100%',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8]
                  },
                  '& .advantage-icon': { mt: 0.5 },
                  '& .advantage-content': { flex: 1 }
                }}
              >
                <Box className="advantage-icon">{advantage.icon}</Box>
                <Box className="advantage-content">
                    <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                      {advantage.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {advantage.description}
                    </Typography>
                    <Chip 
                      label={advantage.highlight}
                      size="small"
                      sx={{ 
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        fontWeight: 600
                      }}
                    />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mt: 5, textAlign: 'center', lineHeight: 1.7 }}>
          Chris and Macy Wilson founded Gem City Cleaning Crew in Dayton in 2017, and the team has
          since cleaned 700+ homes across the Miami Valley. Every cleaner passes a Checkr background
          check before their first visit, and our licensing and insurance coverage are backed by a
          certificate available on request. We bring our own professional-grade supplies to every
          visit, so you never have to buy or store a single cleaning product.
        </Typography>
      </Container>

      {/* We Make Life Section with Rotating Text */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="lg">
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                lineHeight: 1.1,
              color: '#1C1C1C',
              textAlign: 'center',
              '& .headline-dynamic': {
                color: '#D81B60 !important',
                display: 'inline-block',
                verticalAlign: 'baseline',
                position: 'relative',
                overflow: 'visible',
                minWidth: '250px'
              },
              '& .headline-text': {
                position: 'relative',
                fontWeight: 800,
                color: '#D81B60 !important',
                lineHeight: 1.1
              }
              }}
            >
              We Make Life{' '}
              <Box 
                component="span" 
              className="headline-dynamic elementor-headline-dynamic-wrapper"
                sx={{ 
                  display: 'inline-block',
                minWidth: '250px',
                textAlign: 'left',
                verticalAlign: 'baseline'
                }}
              >
                {headlines.map((word, index) => (
                  <Box
                    key={index}
                    component="span"
                    aria-hidden={index === currentHeadline ? undefined : true}
                  className={`headline-text elementor-headline-dynamic-text ${index === currentHeadline ? 'elementor-headline-text-active' : ''}`}
                    sx={{
                      display: index === currentHeadline ? 'inline-block' : 'none',
                    position: 'absolute',
                    width: '100%',
                    fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    {word}!
                  </Box>
                ))}
              </Box>
            </Typography>
        </Container>
      </Box>

      {/* Service Cards */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              Cleaning Services That Fit Your Life
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Flexible, personal service that corporate chains can&apos;t match
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {serviceCards.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    overflow: 'visible',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[12]
                    }
                  }}
                >
                  {service.badge && (
                    <Chip 
                      label={service.badge}
                      sx={{
                        position: 'absolute',
                        top: -8,
                        right: 16,
                        zIndex: 10,
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        height: 24,
                        borderRadius: '12px',
                        '& .MuiChip-label': {
                          px: 1.5,
                          py: 0.5
                        }
                      }}
                    />
                  )}
                  <CardActionArea component={Link} to={service.link} sx={{ height: '100%' }}>
                    <CardContent 
                      sx={{ 
                        p: 4, 
                        textAlign: 'center',
                        '& .service-icon': { mb: 3 },
                        '& .service-features': { 
                          display: 'flex', 
                          flexDirection: 'column', 
                          gap: 1, 
                          mb: 3 
                        },
                        '& .feature-item': {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 1
                        }
                      }}
                    >
                      <Box className="service-icon">{service.icon}</Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        {service.description}
                      </Typography>
                      
                      <Box className="service-features">
                        {service.features.map((feature, idx) => (
                          <Box key={idx} className="feature-item">
                            <CheckCircleIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />
                            <Typography variant="body2">{feature}</Typography>
                          </Box>
                        ))}
                      </Box>

                      <Typography 
                        variant="caption" 
                        sx={{ 
                          fontStyle: 'italic',
                          color: theme.palette.primary.main,
                          fontWeight: 600
                        }}
                      >
                        {service.differentiator}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <TrustBlock variant="full" />

      {/* Service Areas with Map */}
      <AreasWeServe />

      {/* Blog Teaser Section */}
      {recentPosts && recentPosts.length > 0 && (
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              Cleaning Tips & Local Updates
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Expert advice and community news from your local Dayton cleaning professionals
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {recentPosts.map((post) => (
              <Grid item xs={12} md={4} key={post.slug}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8]
                    }
                  }}
                >
                  <CardActionArea component={Link} to={`/blog/${post.slug}`} sx={{ height: '100%' }}>
                    {post.coverImage && (
                      <Box
                        component="img"
                        src={post.coverImage}
                        alt={post.title}
                        loading="lazy"
                        sx={{
                          width: '100%',
                          height: 200,
                          objectFit: 'cover',
                          aspectRatio: '16/9' // Fixed aspect ratio to prevent shifts
                        }}
                      />
                    )}
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {post.description}
                      </Typography>
                      <Typography variant="caption" color="primary" sx={{ fontWeight: 600 }}>
                        Read More →
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              component={Link}
              to="/blog"
              sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  color: 'white'
                }
              }}
            >
              View All Articles
            </Button>
          </Box>
        </Container>
      )}

      {/* Homepage FAQ */}
      <Container id="faq" maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            The questions we hear most from Dayton-area homeowners and businesses
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {HOMEPAGE_FAQS.map((faq) => (
            <Grid item xs={12} md={6} key={faq.question}>
              <Card elevation={1} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" component="h3" sx={{ mb: 1.5, fontWeight: 600, color: 'primary.main' }}>
                  {faq.question}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {faq.answer}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Final CTA */}
      <Box sx={{ backgroundColor: theme.palette.primary.main, color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
            Ready for Professional Service?
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: 'white', mb: 4, opacity: 0.9 }}>
            Experience the difference of our 3-month trained cleaning professionals.
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
            >
              Get Free Quote (No Contracts!)
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

export default HomePage 