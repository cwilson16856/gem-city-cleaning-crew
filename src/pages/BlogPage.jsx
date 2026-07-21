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
  Box,
  Chip
} from '@mui/material'
import { format } from 'date-fns'

import LoadingSpinner from '../components/LoadingSpinner'
import { usePosts } from '../hooks/useWordPress'
import { getFeaturedImage, getSafeExcerpt } from '../utils/seo'

const BlogPage = () => {
  const { data: posts, isLoading, error } = usePosts({ per_page: 12, _embed: true })

  if (isLoading) return <LoadingSpinner />

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" color="error">
          Unable to load blog posts. Please try again later.
        </Typography>
      </Container>
    )
  }

  return (
    <>
      <Helmet>
        <title>Blog - Gem City Cleaning Crew</title>
        <meta name="description" content="Read our latest cleaning tips, industry news, and service updates. Professional cleaning advice from Gem City Cleaning Crew." />
      </Helmet>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Cleaning Tips & News
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Stay updated with our latest cleaning tips, industry insights, and service announcements.
        </Typography>

        {posts && posts.length > 0 ? (
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {posts.map((post) => {
              const featuredImage = getFeaturedImage(post)
              const excerpt = getSafeExcerpt(post, 150)
              
              return (
                <Grid item xs={12} md={6} lg={4} key={post.id}>
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
                    {featuredImage?.url && (
                      <CardMedia
                        component="img"
                        height="200"
                        image={featuredImage.url}
                        alt={featuredImage.alt}
                        sx={{ objectFit: 'cover' }}
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" component="h2" gutterBottom>
                        <Link 
                          to={`/blog/${post.slug}`}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          {post.title?.rendered}
                        </Link>
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                        {excerpt}
                      </Typography>
                      
                      <Box sx={{ mt: 'auto' }}>
                        <Typography variant="caption" color="text.secondary">
                          {format(new Date(post.date), 'MMMM d, yyyy')}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
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