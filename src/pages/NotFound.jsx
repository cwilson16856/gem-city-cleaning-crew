import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Container, Typography, Button, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Gem City Cleaning Crew</title>
        <meta name="description" content="The page you're looking for could not be found. Return to our homepage or browse our cleaning services." />
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h1" component="h1" color="primary" gutterBottom>
            404
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Page Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Sorry, we couldn't find the page you're looking for. It may have been moved, deleted, or you may have entered an incorrect URL.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/"
            startIcon={<HomeIcon />}
            color="primary"
          >
            Go Home
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/blog"
            startIcon={<SearchIcon />}
            color="primary"
          >
            Browse Blog
          </Button>
        </Box>

        <Box sx={{ mt: 6, p: 3, backgroundColor: 'grey.50', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Looking for cleaning services?
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Don't let a broken link stop you from getting the professional cleaning services you need.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/page/contact-us"
          >
            Contact Us Today
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default NotFound 