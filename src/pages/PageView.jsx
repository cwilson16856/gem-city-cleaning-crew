import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Container, Typography, Box, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DOMPurify from 'dompurify'

import LoadingSpinner from '../components/LoadingSpinner'
import { usePage, useRankMathSEO } from '../hooks/useWordPress'
import { 
  getFeaturedImage, 
  generateSEOTitle, 
  generateSocialMetaData
} from '../utils/seo'

const PageView = () => {
  const { slug } = useParams()
  const { data: page, isLoading, error } = usePage(slug)
  const { data: seoData } = useRankMathSEO(page?.id)

  if (isLoading) return <LoadingSpinner />

  if (error || !page) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" color="error">
          Page not found
        </Typography>
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{ mt: 2 }}
        >
          Back to Home
        </Button>
      </Container>
    )
  }

  const featuredImage = getFeaturedImage(page)
  const seoTitle = generateSEOTitle(seoData?.title || page.title?.rendered)
  const seoDescription = seoData?.description || page.excerpt?.rendered
  const socialMeta = generateSocialMetaData(page, seoData, featuredImage)

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        
        {/* Social media meta tags */}
        <meta property="og:title" content={socialMeta.title} />
        <meta property="og:description" content={socialMeta.description} />
        <meta property="og:image" content={socialMeta.image} />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={socialMeta.title} />
        <meta name="twitter:description" content={socialMeta.description} />
        <meta name="twitter:image" content={socialMeta.image} />
      </Helmet>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          {page.title?.rendered}
        </Typography>

        {/* Featured image */}
        {featuredImage?.url && (
          <Box sx={{ mb: 4 }}>
            <img
              src={featuredImage.url}
              alt={featuredImage.alt}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}
            />
          </Box>
        )}

        {/* Page content */}
        <Box 
          className="post-content"
          sx={{ 
            '& img': { 
              maxWidth: '100%', 
              height: 'auto',
              borderRadius: 2,
              my: 2
            },
            '& h1, & h2, & h3, & h4, & h5, & h6': {
              color: 'primary.main',
              mt: 3,
              mb: 2
            },
            '& p': {
              mb: 2,
              lineHeight: 1.7
            },
            '& blockquote': {
              borderLeft: 4,
              borderLeftColor: 'primary.main',
              pl: 2,
              py: 1,
              my: 2,
              backgroundColor: 'grey.50',
              fontStyle: 'italic'
            },
            '& ul, & ol': {
              pl: 3,
              my: 2
            }
          }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(page.content?.rendered || '')
          }}
        />
      </Container>
    </>
  )
}

export default PageView 