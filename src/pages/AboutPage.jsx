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
  useTheme
} from '@mui/material'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import VerifiedIcon from '@mui/icons-material/Verified'
import GroupsIcon from '@mui/icons-material/Groups'
import PhoneIcon from '@mui/icons-material/Phone'
import StarIcon from '@mui/icons-material/Star'
import ShieldIcon from '@mui/icons-material/Shield'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import SchoolIcon from '@mui/icons-material/School'

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

// Real trust stats — same figures used in GCCC's estimate/offer packet.
const trustStats = [
  { icon: <StarIcon sx={{ fontSize: 32 }} />, value: '4.6 / 5', label: '90+ Google reviews' },
  { icon: <ShieldIcon sx={{ fontSize: 32 }} />, value: 'Checkr Verified', label: 'Background check on every cleaner' },
  { icon: <VerifiedIcon sx={{ fontSize: 32 }} />, value: 'Licensed & Insured', label: 'Certificate available on request' },
  { icon: <HomeWorkIcon sx={{ fontSize: 32 }} />, value: '700+', label: 'Homes cleaned across Dayton' }
]

// Real differentiators — same content used in GCCC's estimate/offer packet
// ("Why Homeowners Trust Us"), added here 2026-09-11 so the site itself
// backs up claims like "no contracts" with the specifics behind them.
const differentiators = [
  { title: 'No contracts. Ever.', body: "Stay because you want to, not because you're stuck." },
  { title: 'The same cleaner every time.', body: 'They get to know your home, so nothing gets overlooked.' },
  { title: 'No initial-clean upcharge, up to 5 hours.', body: "That covers most homes. If we expect to run longer, we call first to talk through what's done, what's left, and next steps." },
  { title: 'We bring our own supplies.', body: 'Professional-grade products, included with every visit.' },
  { title: 'We reply within 30 minutes during business hours.', body: 'Through the portal, text, email, or a call — whatever\'s easiest for you.' },
  { title: "If your regular cleaner is out sick, we reach out before your appointment.", body: 'Your call: a substitute cleaner, or we reschedule around you.' }
]

const AboutPage = () => {
  const theme = useTheme()

  return (
    <>
      <Helmet>
        <title>About Us | Gem City Cleaning Crew</title>
        <meta name="description" content="Meet Chris and Macy Wilson, owners of Gem City Cleaning Crew — Dayton's no-contract residential and commercial cleaning company since 2017. Our mission, values, and training program." />
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
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {trustStats.map((stat) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ color: theme.palette.primary.main, mb: 1 }}>{stat.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>{stat.value}</Typography>
                <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h2" component="h2" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.7 }}>
          Most of our clients come to us because we offer commercial &amp; residential cleaning services.
          But that&apos;s not what they want.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.7 }}>
          They want a home that feels good when you walk in from a long day&apos;s work, a night where finally
          they get to kick back and relax. A business that wants to smell great, and not have to worry
          about the extra tasks so they can focus on their clients.
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.7, fontWeight: 600 }}>
          That&apos;s what we do.
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

        <Typography variant="h2" component="h2" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}>
          Meet the Owners
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.7 }}>
          Gem City Cleaning Crew is owned and run by <strong>Chris and Macy Wilson</strong>. We started the
          company in Dayton in 2017 because we saw too many cleaning services locking customers into
          long-term contracts and sending a different, unfamiliar crew every visit. We built GCCC to do
          the opposite: no contracts, and wherever possible, the same trained cleaner on your home or
          business every time, so they actually know it.
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.7 }}>
          Every cleaner on our team goes through our{' '}
          <Link to="/our-training-program" style={{ color: theme.palette.primary.main, fontWeight: 600 }}>
            three-month training program
          </Link>{' '}
          before working independently in a client&apos;s home or business — it&apos;s not a one-day orientation,
          it&apos;s how we make sure the standard we set is the standard you actually get.
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

        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center', color: theme.palette.primary.main, fontWeight: 700 }}>
          What Makes Us Different
        </Typography>
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {differentiators.map((item) => (
            <Grid item xs={12} sm={6} key={item.title}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.body}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            icon={<SchoolIcon />}
            component={Link}
            to="/our-training-program"
            clickable
            label="See how we train every cleaner"
            sx={{ fontSize: '1rem', py: 2.5, px: 1, fontWeight: 600 }}
          />
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" sx={{ mb: 1, fontWeight: 600 }}>
            Located in Dayton, OH
          </Typography>
          <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
            Let&apos;s Get To Work!
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            We&apos;d love to hear from you and see how we can help.
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
