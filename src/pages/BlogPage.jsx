import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box
} from '@mui/material'
import { format } from 'date-fns'

import { getAllPosts } from '../content/blog'
import { generateBreadcrumbStructuredData, generateCanonicalUrl } from '../utils/seo'

const BlogPage = () => {
  const posts = getAllPosts()

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: 'Home', url: generateCanonicalUrl('/') },
    { name: 'Blog', url: generateCanonicalUrl('/blog') }
  ])

  return (
    <>
      <Helmet>
        <title>Blog - Gem City Cleaning Crew</title>
        <meta name="description" content="Read our latest cleaning tips, industry news, and service updates. Professional cleaning advice from Gem City Cleaning Crew." />
        {breadcrumbData && (
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbData)}
          </script>
        )}
      </Helmet>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Cleaning Tips & News
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Stay updated with our latest cleaning tips, industry insights, and service announcements.
        </Typography>

        {posts.length > 0 ? (
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {posts.map((post) => (
              <Grid item xs={12} md={6} lg={4} key={post.slug}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  {post.coverImage && (
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.coverImage}
                      alt={post.title}
                      sx={{ objectFit: 'cover' }}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" component="h2" gutterBottom>
                      <Link
                        to={`/blog/${post.slug}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        {post.title}
                      </Link>
                    </Typography>

                    <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                      {post.description}
                    </Typography>

                    <Box sx={{ mt: 'auto' }}>
                      <Typography variant="caption" color="text.secondary">
                        {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="text.secondary">
              No blog posts found.
            </Typography>
          </Box>
        )}
      </Container>
    </>
  )
}

export default BlogPage
