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
import CategoryIcon from '@mui/icons-material/Category'
import TagIcon from '@mui/icons-material/Tag'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { format } from 'date-fns'
import DOMPurify from 'dompurify'

import { getPostBySlug } from '../content/blog'
import {
  generateSEOTitle,
  generateBreadcrumbStructuredData,
  generateCanonicalUrl,
  generateSocialMetaData,
  calculateReadingTime
} from '../utils/seo'
import {
  generateBlogPostingStructuredData,
  generateFAQPageStructuredData,
  generateHowToStructuredData
} from '../utils/blogSchema'

const PostPage = () => {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
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

  const postUrl = generateCanonicalUrl(`/blog/${post.slug}`)
  const seoTitle = generateSEOTitle(post.title)
  const seoDescription = post.description
  const structuredData = generateBlogPostingStructuredData(post, postUrl)
  const faqStructuredData = generateFAQPageStructuredData(post.faqs)
  const howToStructuredData = generateHowToStructuredData(post)
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: 'Home', url: generateCanonicalUrl('/') },
    { name: 'Blog', url: generateCanonicalUrl('/blog') },
    { name: post.title, url: postUrl }
  ])
  const socialMeta = generateSocialMetaData(post)
  const readingTime = calculateReadingTime(post.content)

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        {post.keywords?.length > 0 && (
          <meta name="keywords" content={post.keywords.join(', ')} />
        )}

        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
        {faqStructuredData && (
          <script type="application/ld+json">
            {JSON.stringify(faqStructuredData)}
          </script>
        )}
        {howToStructuredData && (
          <script type="application/ld+json">
            {JSON.stringify(howToStructuredData)}
          </script>
        )}
        {breadcrumbData && (
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbData)}
          </script>
        )}

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
              {post.title}
            </Typography>

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
                {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
              </Box>

              {readingTime > 0 && (
                <Box>
                  📖 {readingTime} min read
                </Box>
              )}
            </Box>

            {post.category && (
              <Box sx={{ mb: 2 }}>
                <Chip
                  label={post.category}
                  size="small"
                  color="primary"
                  sx={{ mr: 1, mb: 1 }}
                  icon={<CategoryIcon />}
                />
              </Box>
            )}

            {post.coverImage && (
              <Box sx={{ mb: 4 }}>
                <img
                  src={post.coverImage}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </Box>
            )}
          </header>

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
              },
              '& table': {
                width: '100%',
                borderCollapse: 'collapse',
                my: 2
              },
              '& th, & td': {
                border: '1px solid',
                borderColor: 'grey.300',
                p: 1,
                textAlign: 'left'
              },
              '& th': {
                backgroundColor: 'grey.50',
                fontWeight: 600
              }
            }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.content || '')
            }}
          />

          {post.tags?.length > 0 && (
            <>
              <Divider sx={{ my: 4 }} />
              <Box>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TagIcon /> Tags
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {post.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
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
