import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Container,
  Typography,
  Box,
  Chip,
  Button,
  Divider
} from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PersonIcon from '@mui/icons-material/Person'
import CategoryIcon from '@mui/icons-material/Category'
import TagIcon from '@mui/icons-material/Tag'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { format } from 'date-fns'
import DOMPurify from 'dompurify'

import LoadingSpinner from '../components/LoadingSpinner'
import { usePost, useRankMathSEO } from '../hooks/useWordPress'
import { 
  getFeaturedImage,
  generateSEOTitle,
  generateArticleStructuredData,
  generateSocialMetaData,
  extractKeywords,
  calculateReadingTime,
  getSafeExcerpt
} from '../utils/seo'

const PostPage = () => {
  const { slug } = useParams()
  const { data: post, isLoading, error } = usePost(slug)
  const { data: seoData } = useRankMathSEO(post?.link)

  if (isLoading) return <LoadingSpinner />

  if (error || !post) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" color="error">
          Post not found
        </Typography>
        <Button
          component={Link}
          to="/blog"
          startIcon={<ArrowBackIcon />}
          sx={{ mt: 2 }}
        >
          Back to Blog
        </Button>
      </Container>
    )
  }

  const featuredImage = getFeaturedImage(post)
  const seoTitle = generateSEOTitle(seoData?.title || post.title?.rendered)
  const seoDescription = seoData?.description || getSafeExcerpt(post, 160)
  const structuredData = generateArticleStructuredData(post, seoData)
  const socialMeta = generateSocialMetaData(post, seoData, featuredImage)
  const keywords = extractKeywords(post, seoData)
  const readingTime = calculateReadingTime(post.content?.rendered)

  // Get categories and tags
  const categories = post._embedded?.['wp:term']?.find(terms => 
    terms.some(term => term.taxonomy === 'category')
  )?.filter(term => term.taxonomy === 'category') || []
  
  const tags = post._embedded?.['wp:term']?.find(terms => 
    terms.some(term => term.taxonomy === 'post_tag')
  )?.filter(term => term.taxonomy === 'post_tag') || []

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={keywords.join(', ')} />
        
        {/* Article structured data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
        
        {/* Social media meta tags */}
        <meta property="og:title" content={socialMeta.title} />
        <meta property="og:description" content={socialMeta.description} />
        <meta property="og:image" content={socialMeta.image} />
        <meta property="og:type" content={socialMeta.type} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={socialMeta.title} />
        <meta name="twitter:description" content={socialMeta.description} />
        <meta name="twitter:image" content={socialMeta.image} />
      </Helmet>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <Button
          component={Link}
          to="/blog"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 3 }}
          color="primary"
        >
          Back to Blog
        </Button>

        <article>
          <header>
            <Typography variant="h1" component="h1" gutterBottom>
              {post.title?.rendered}
            </Typography>

            {/* Post meta information */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2, 
                mb: 3,
                color: 'text.secondary',
                fontSize: '0.9rem'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CalendarTodayIcon fontSize="small" />
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </Box>
              
              {post._embedded?.author?.[0] && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <PersonIcon fontSize="small" />
                  {post._embedded.author[0].name}
                </Box>
              )}
              
              {readingTime > 0 && (
                <Box>
                  📖 {readingTime} min read
                </Box>
              )}
            </Box>

            {/* Categories */}
            {categories.length > 0 && (
              <Box sx={{ mb: 2 }}>
                {categories.map((category) => (
                  <Chip
                    key={category.id}
                    label={category.name}
                    size="small"
                    color="primary"
                    sx={{ mr: 1, mb: 1 }}
                    icon={<CategoryIcon />}
                  />
                ))}
              </Box>
            )}

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
                {featuredImage.caption && (
                  <Typography 
                    variant="caption" 
                    color="text.secondary" 
                    sx={{ display: 'block', mt: 1, textAlign: 'center', fontStyle: 'italic' }}
                  >
                    {featuredImage.caption}
                  </Typography>
                )}
              </Box>
            )}
          </header>

          {/* Post content */}
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
              },
              '& pre': {
                backgroundColor: 'grey.100',
                p: 2,
                borderRadius: 1,
                overflow: 'auto'
              }
            }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.content?.rendered || '')
            }}
          />

          {/* Tags */}
          {tags.length > 0 && (
            <>
              <Divider sx={{ my: 4 }} />
              <Box>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TagIcon /> Tags
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {tags.map((tag) => (
                    <Chip
                      key={tag.id}
                      label={tag.name}
                      size="small"
                      variant="outlined"
                      color="secondary"
                    />
                  ))}
                </Box>
              </Box>
            </>
          )}
        </article>

        {/* Call to action */}
        <Box sx={{ mt: 6, p: 3, backgroundColor: 'primary.light', borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom color="primary.contrastText">
            Need Professional Cleaning Services?
          </Typography>
          <Typography variant="body1" paragraph color="primary.contrastText">
            Contact Gem City Cleaning Crew for all your residential and commercial cleaning needs.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/quote"
          >
            Get Your Free Quote
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default PostPage 