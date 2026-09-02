import React, { useEffect, useState } from 'react'
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
  useTheme
} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import PaidIcon from '@mui/icons-material/Paid'
import ScheduleIcon from '@mui/icons-material/Schedule'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import RedeemIcon from '@mui/icons-material/Redeem'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import GroupsIcon from '@mui/icons-material/Groups'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import VerifiedIcon from '@mui/icons-material/Verified'

const SURVEY_ID = 'Nnr6tN3xgwCv1i8OXGH4'

const perks = [
  {
    title: 'Competitive Pay',
    description: 'We pay above the market average because we want to keep great people on our team.',
    icon: <PaidIcon sx={{ fontSize: 44 }} />
  },
  {
    title: 'Flexible Schedule',
    description: 'Rotating hours let you choose a schedule that actually fits your life.',
    icon: <ScheduleIcon sx={{ fontSize: 44 }} />
  },
  {
    title: 'Tips & Holiday Bonuses',
    description: 'Clients regularly show their appreciation with tips, and we pass along holiday bonuses too.',
    icon: <RedeemIcon sx={{ fontSize: 44 }} />
  },
  {
    title: 'Stay Active',
    description: 'Cleaning keeps you moving all day, so you get a built-in workout instead of sitting at a desk.',
    icon: <FitnessCenterIcon sx={{ fontSize: 44 }} />
  },
  {
    title: 'Mental Health Boost',
    description: "There's real satisfaction in turning a messy space into a clean one, visit after visit.",
    icon: <SelfImprovementIcon sx={{ fontSize: 44 }} />
  },
  {
    title: 'Real Camaraderie',
    description: 'Build genuine relationships with your teammates and the clients you clean for regularly.',
    icon: <GroupsIcon sx={{ fontSize: 44 }} />
  }
]

const coreValues = [
  {
    title: 'Have Fun',
    description: 'We believe a positive, enjoyable work environment translates into better service for our clients.',
    icon: <SentimentSatisfiedAltIcon sx={{ fontSize: 44 }} />
  },
  {
    title: 'Reliability',
    description: 'We strive to deliver on our promises and commitments to our clients and our team members.',
    icon: <VerifiedIcon sx={{ fontSize: 44 }} />
  },
  {
    title: 'Employee Centric',
    description: 'We believe happy employees lead to happy clients, so we invest in a supportive team culture.',
    icon: <GroupsIcon sx={{ fontSize: 44 }} />
  }
]

const HiringPage = () => {
  const theme = useTheme()
  const [surveyLoaded, setSurveyLoaded] = useState(false)

  useEffect(() => {
    // The GHL survey embed relies on this script to auto-size the iframe
    // and handle submissions, same pattern used by the /quote page.
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Now Hiring Cleaning Technicians in Dayton, OH | Gem City Cleaning Crew</title>
        <meta
          name="description"
          content="Gem City Cleaning Crew is hiring cleaning technicians in Dayton, OH. Competitive pay, flexible scheduling, tips, and a supportive team. Apply today."
        />
        <link rel="canonical" href="https://gemcitycleaningcrew.com/careers" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Now Hiring Cleaning Technicians in Dayton, OH | Gem City Cleaning Crew" />
        <meta
          property="og:description"
          content="Join the Gem City Cleaning Crew team. Competitive pay, flexible scheduling, tips, and a supportive team culture."
        />
        <meta property="og:url" content="https://gemcitycleaningcrew.com/careers" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://gemcitycleaningcrew.com/careers#webpage',
            name: 'Careers at Gem City Cleaning Crew',
            description: 'Job openings and application form for cleaning technician positions at Gem City Cleaning Crew in Dayton, OH.',
            url: 'https://gemcitycleaningcrew.com/careers',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gemcitycleaningcrew.com' },
                { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://gemcitycleaningcrew.com/careers' }
              ]
            }
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #D81B60 0%, #AD1457 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 700, mb: 2 }}>
            Join Our Team
          </Typography>
          <Typography variant="h5" component="p" sx={{ fontWeight: 400, mb: 4, color: 'white', opacity: 0.95 }}>
            We&apos;re hiring cleaning technicians in the Dayton area. Come do work that actually rewards you.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="#apply-now"
            sx={{
              fontSize: '1.1rem',
              px: 4,
              py: 1.5,
              backgroundColor: '#1C1C1C',
              color: 'white',
              fontWeight: 600,
              border: '3px solid white',
              '&:hover': {
                backgroundColor: '#000000',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Apply For Position
          </Button>
        </Container>
      </Box>

      {/* What's in it for you */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 1, textAlign: 'center', color: theme.palette.primary.main, fontWeight: 700 }}>
          What&apos;s In It For You
        </Typography>
        <Typography variant="body1" sx={{ mb: 5, textAlign: 'center', maxWidth: 700, mx: 'auto', color: 'text.secondary', fontSize: '1.1rem' }}>
          Cleaning is real work, and we make sure it rewards you for doing it well.
        </Typography>
        <Grid container spacing={4}>
          {perks.map((perk) => (
            <Grid item xs={12} sm={6} md={4} key={perk.title}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>{perk.icon}</Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
                    {perk.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {perk.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Core values */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" sx={{ mb: 5, textAlign: 'center', color: theme.palette.primary.main, fontWeight: 700 }}>
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {coreValues.map((value) => (
              <Grid item xs={12} md={4} key={value.title}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>{value.icon}</Box>
                    <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="body1" sx={{ mt: 4, textAlign: 'center' }}>
            Want the full story? Read more{' '}
            <Link to="/about-us" style={{ color: theme.palette.primary.main, textDecoration: 'none', fontWeight: 600 }}>
              about our mission and team
            </Link>.
          </Typography>
        </Container>
      </Box>

      {/* Application form */}
      <Container maxWidth="md" sx={{ py: 8 }} id="apply-now">
        <Typography variant="h2" component="h2" sx={{ mb: 1, textAlign: 'center', color: theme.palette.primary.main, fontWeight: 700 }}>
          Apply For Position
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: 'text.secondary', fontSize: '1.1rem' }}>
          Fill out the short questionnaire below and we&apos;ll be in touch.
        </Typography>

        <Paper
          elevation={2}
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            position: 'relative'
          }}
        >
          {!surveyLoaded && (
            <Box sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="body1" color="text.secondary">
                Loading application form...
              </Typography>
            </Box>
          )}
          <Box sx={{ '& iframe': { display: surveyLoaded ? 'block' : 'none' } }}>
            <iframe
              src={`https://api.leadconnectorhq.com/widget/survey/${SURVEY_ID}`}
              style={{ border: 'none', width: '100%' }}
              scrolling="no"
              id={SURVEY_ID}
              title="Cleaning Technician Application"
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              onLoad={() => setSurveyLoaded(true)}
            />
          </Box>
        </Paper>
      </Container>

      {/* Final CTA */}
      <Box sx={{ backgroundColor: theme.palette.primary.main, color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Have Questions Before You Apply?
          </Typography>
          <Typography variant="h6" component="p" sx={{ mb: 4, opacity: 0.9 }}>
            Give us a call and we&apos;ll walk you through what the job looks like day to day.
          </Typography>
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
        </Container>
      </Box>
    </>
  )
}

export default HiringPage
