import React from 'react'
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

const PrivacyPolicy = () => {
  const theme = useTheme()

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Gem City Cleaning Crew</title>
        <meta
          name="description"
          content="How Gem City Cleaning Crew collects, uses, and protects your personal information, including text messaging consent and opt-out."
        />
        <link rel="canonical" href="https://gemcitycleaningcrew.com/privacy-policy" />
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
            Privacy Policy
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>
            Last Updated: July 25, 2026
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="body1" sx={{ mb: 5, fontSize: '1.1rem', lineHeight: 1.7 }}>
          Gem City Cleaning Crew (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
          This policy explains what information we collect when you request a quote or otherwise contact
          us, how we use it, and how you can opt out of communications at any time.
        </Typography>

        <Section title="1. Information We Collect">
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.05rem', lineHeight: 1.7 }}>
            When you submit a quote request or contact form, we collect the information you provide,
            which typically includes:
          </Typography>
          <List sx={{ pl: 2 }}>
            <ListItemStyled>Your name, phone number, and email address.</ListItemStyled>
            <ListItemStyled>Your service address and details about the cleaning service you&apos;re requesting.</ListItemStyled>
            <ListItemStyled>Any additional notes you choose to include about your project.</ListItemStyled>
          </List>
        </Section>

        <Section title="2. How We Use Your Information">
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.05rem', lineHeight: 1.7 }}>
            We use the information you provide to respond to your quote request and to arrange
            cleaning services. This includes contacting you by <strong>email, text message (SMS), or
            phone call</strong> regarding your inquiry, your quote, and your scheduled service.
          </Typography>
        </Section>

        <Section title="3. Text Messaging Consent, Frequency &amp; Opt-Out">
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.05rem', lineHeight: 1.7 }}>
            By providing your mobile number on our quote or contact form, you consent to receive text
            messages from Gem City Cleaning Crew related to your quote request and, if you become a
            customer, your scheduled cleaning appointments (reminders, confirmations, cancellations,
            and reschedule notices).
          </Typography>
          <List sx={{ pl: 2 }}>
            <ListItemStyled>Message frequency varies based on your inquiry and, if applicable, your cleaning schedule.</ListItemStyled>
            <ListItemStyled>Message and data rates may apply.</ListItemStyled>
            <ListItemStyled>Reply <strong>STOP</strong> at any time to opt out of text messages, or <strong>HELP</strong> for help.</ListItemStyled>
            <ListItemStyled>Consent to receive texts is not required to purchase our cleaning services — you may always request a quote by phone or email instead.</ListItemStyled>
          </List>
        </Section>

        <Section title="4. We Do Not Sell or Share Your Information">
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.05rem', lineHeight: 1.7 }}>
            We do not sell your personal information to third parties. No mobile information —
            including your phone number and your SMS consent — will be shared with or sold to third
            parties or affiliates for marketing or promotional purposes. We share your information only
            with the service providers who help us operate our business (for example, our scheduling and
            messaging providers), and only as needed to provide our services to you.
          </Typography>
        </Section>

        <Section title="5. Data Retention &amp; Security">
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.05rem', lineHeight: 1.7 }}>
            We retain your information for as long as needed to respond to your inquiry or provide
            ongoing service, and take reasonable measures to protect it from unauthorized access.
          </Typography>
        </Section>

        <Section title="6. Changes to This Policy">
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.05rem', lineHeight: 1.7 }}>
            We may update this Privacy Policy from time to time. The &quot;Last Updated&quot; date above
            reflects the most recent revision.
          </Typography>
        </Section>

        <Section title="7. Contact Us">
          <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            If you have questions about this Privacy Policy, contact us at{' '}
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

export default PrivacyPolicy
