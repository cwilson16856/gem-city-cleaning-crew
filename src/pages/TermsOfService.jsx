import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  useTheme
} from '@mui/material'

const Section = ({ title, children }) => {
  const theme = useTheme()
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}>
        {title}
      </Typography>
      {children}
    </Box>
  )
}

const ListItemStyled = ({ children }) => (
  <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 0, ml: 3, py: 0.5 }}>
    <Typography variant="body1" component="span" sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
      {children}
    </Typography>
  </ListItem>
)

const TermsOfService = () => {
  const theme = useTheme()

  return (
    <>
      <Helmet>
        <title>Terms of Service | Gem City Cleaning Crew</title>
        <meta
          name="description"
          content="Terms of Service for Gem City Cleaning Crew, including quote requests, communications, and text messaging terms."
        />
        <link rel="canonical" href="https://gemcitycleaningcrew.com/terms-of-service" />
        <meta name="robots" content="noindex, follow" />
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
            Terms of Service
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>
            Last Updated: July 25, 2026
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="body1" sx={{ mb: 5, fontSize: '1.1rem', lineHeight: 1.7 }}>
          These Terms of Service (&quot;Terms&quot;) govern your use of gemcitycleaningcrew.com and any
          quote request or contact form on this site. By submitting a form on this site, you agree to
          these Terms.
        </Typography>

        <Section title="1. Quote Requests">
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.05rem', lineHeight: 1.7 }}>
            Submitting a quote request through our website is an inquiry only. It does not create a
            binding agreement for cleaning services. A service agreement is formed only once we confirm
            pricing and scheduling with you directly, whether by phone, email, or text.
          </Typography>
        </Section>

        <Section title="2. Communications &amp; Text Messaging">
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.05rem', lineHeight: 1.7 }}>
            By providing your phone number or email address, you agree that we may contact you by{' '}
            <strong>email, text message (SMS), or phone call</strong> about your quote request and, if
            you become a customer, your scheduled cleaning appointments.
          </Typography>
          <List sx={{ pl: 2 }}>
            <ListItemStyled>Message frequency varies. Message and data rates may apply.</ListItemStyled>
            <ListItemStyled>Reply <strong>STOP</strong> to any text message to opt out at any time, or <strong>HELP</strong> for help.</ListItemStyled>
            <ListItemStyled>
              For details on how we handle your information and text messaging consent, see our{' '}
              <Link to="/privacy-policy" style={{ color: theme.palette.primary.main }}>Privacy Policy</Link>.
            </ListItemStyled>
          </List>
        </Section>

        <Section title="3. Pricing &amp; Scheduling">
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.05rem', lineHeight: 1.7 }}>
            Quotes provided online or by phone are estimates based on the information you provide.
            Final pricing may be adjusted after we confirm the scope of work. Appointment times are
            confirmed directly with you and may be subject to availability.
          </Typography>
        </Section>

        <Section title="4. Limitation of Liability">
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.05rem', lineHeight: 1.7 }}>
            Our website and quote form are provided &quot;as is.&quot; We are not liable for delays in
            receiving messages sent through this site, as delivery depends on your carrier and email
            provider.
          </Typography>
        </Section>

        <Section title="5. Governing Law">
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.05rem', lineHeight: 1.7 }}>
            These Terms are governed by the laws of the State of Ohio.
          </Typography>
        </Section>

        <Section title="6. Changes to These Terms">
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.05rem', lineHeight: 1.7 }}>
            We may update these Terms from time to time. The &quot;Last Updated&quot; date above
            reflects the most recent revision.
          </Typography>
        </Section>

        <Section title="7. Contact Us">
          <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Questions about these Terms? Contact us at{' '}
            <a href="mailto:info@gemcitycleaningcrew.com" style={{ color: theme.palette.primary.main }}>
              info@gemcitycleaningcrew.com
            </a>{' '}
            or{' '}
            <a href="tel:937-892-4157" style={{ color: theme.palette.primary.main }}>
              937-892-4157
            </a>.
          </Typography>
        </Section>
      </Container>
    </>
  )
}

export default TermsOfService
