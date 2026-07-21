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
  useTheme
} from '@mui/material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import VerifiedIcon from '@mui/icons-material/Verified'
import GroupsIcon from '@mui/icons-material/Groups'
import PhoneIcon from '@mui/icons-material/Phone'

const coreValues = [
  {
    title: 'Have Fun',
    description: 'We believe that a positive and enjoyable work environment translates into better service for our clients.',
    icon: <SentimentSatisfiedAltIcon sx={{ fontSize: 48 }} />
  },
  {
    title: 'Reliability',
    description: 'We strive to deliver on our promises and commitments to our clients and team members.',
    icon: <VerifiedIcon sx={{ fontSize: 48 }} />
  },
  {
    title: 'Employee Centric',
    description: 'We believe that happy employees lead to happy clients, so we strive to create a positive and supportive work environment.',
    icon: <GroupsIcon sx={{ fontSize: 48 }} />
  }
]

const AboutPage = () => {
  const theme = useTheme()

  return (
    <>
      <Helmet>
        <title>About Us | Gem City Cleaning Crew</title>
        <meta name="description" content="Learn about Gem City Cleaning Crew, Dayton's trusted residential and commercial cleaning company. Our mission, values, and what makes us different." />
        <link rel="canonical" href="https://gemcitycleaningcrew.com/about-us" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Gem City Cleaning Crew',
            url: 'https://gemcitycleaningcrew.com/about-us'
          })}
        </script>
      </Helmet>

      <Box
        sx={{
          background: 'linear-gradient(135deg, #D81B60 0%, #AD1457 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 700 }}>
            About Us
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.7 }}>
          Most of our clients come to us because we offer commercial &amp; residential cleaning services.
          But that's not what they want.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.7 }}>
          They want a home that feels good when you walk in from a long day's work, a night where finally
          they get to kick back and relax. A business that wants to smell great, and not have to worry
          about the extra tasks so they can focus on their clients.
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.7, fontWeight: 600 }}>
          That's what we do.
        </Typography>

        <Typography variant="h2" component="h2" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}>
          We Make Life Easier!
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.7 }}>
          We create a positive atmosphere in the home and business by cleaning from top to bottom. The
          services that we offer — house cleaning, commercial cleaning, post-construction cleanup, deep
          cleaning, sanitization, and move in/out cleaning — are all part of the way we help you thrive
          at home or in the workplace.
        </Typography>

        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center', color: theme.palette.primary.main, fontWeight: 700 }}>
          Our Core Values
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
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

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" sx={{ mb: 1, fontWeight: 600 }}>
            Located in Dayton, OH
          </Typography>
          <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
            Let's Get To Work!
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            We'd love to hear from you and see how we can help.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/quote"
              sx={{ fontSize: '1.1rem', px: 4, py: 1.5, fontWeight: 600 }}
            >
              Request a Quote
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="tel:937-892-4157"
              startIcon={<PhoneIcon />}
              sx={{ fontSize: '1.1rem', px: 4, py: 1.5, fontWeight: 600 }}
            >
              Call 937-892-4157
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default AboutPage
