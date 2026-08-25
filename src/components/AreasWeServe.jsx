import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Typography,
  Box,
  Grid,
  Chip,
  Button
} from '@mui/material'
import styles from '../styles/components/AreasWeServe.module.css'
import { CITY_SLUGS } from '../data/locations'

const AreasWeServe = ({ onCityClick }) => {
  // Service areas
  const serviceAreas = [
    'Dayton', 'Kettering', 'Oakwood', 'Centerville',
    'Miamisburg', 'Springboro', 'Huber Heights', 'Riverside',
    'Xenia', 'Beavercreek', 'Fairborn', 'Yellow Springs',
    'Tipp City', 'Bellbrook', 'Vandalia', 'Troy',
    'Springfield', 'Franklin', 'Middletown', 'Carlisle'
  ]

  // Only the first 16 of the above have a real /locations/:city page (the
  // last 4 — Springfield, Franklin, Middletown, Carlisle — are listed as
  // "areas we serve" but have no dedicated CITY_SLUGS entry). Slugify each
  // name and only link the ones that resolve to a real page; the rest stay
  // as plain, non-linked labels rather than 404ing.
  const slugFor = (area) => area.toLowerCase().replace(/\s+/g, '-')

  return (
    <Container maxWidth="lg" className={styles.container}>
      {/* Header Section - Completely Separate */}
      <Box className={styles.headerSection}>
        <Typography variant="h2" component="h2" className={styles.title}>
          Proudly Serving Greater Dayton
        </Typography>
        <Typography variant="body1" className={styles.subtitle}>
          Local knowledge, local service - we know your neighborhood
        </Typography>
        <Typography variant="body2" className={styles.introText}>
          Gem City Cleaning Crew proudly serves Dayton and nearby communities like Kettering, Centerville, and Huber Heights with professional house cleaning and move-in/move-out services. Our local team knows the area and provides reliable, trustworthy cleaning services throughout the Greater Dayton region.
        </Typography>
      </Box>

      {/* Content Section - Map and Areas */}
      <Grid container spacing={6} className={styles.contentGrid}>
        <Grid item xs={12} md={6}>
          <Box className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.943777908926!2d-84.13519959999999!3d39.763370699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88408371bc0dde8b%3A0x665400b32d4a4fdc!2sGem%20City%20Cleaning%20Crew!5e0!3m2!1sen!2sus!4v1749236444079!5m2!1sen!2sus"
              className={styles.map}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gem City Cleaning Crew - Professional House Cleaning Services in Dayton, OH"
            ></iframe>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6} className={styles.areasSection}>
          <Typography variant="h4" component="h3" className={styles.areasTitle}>
            Areas We Serve
          </Typography>
          
          <Grid container spacing={2} className={styles.areasGrid}>
            {serviceAreas.map((area, index) => {
              // LocationPage.jsx passes onCityClick for an in-page
              // scroll-to-anchor — preserve that exact behavior unchanged,
              // never wrap it in a navigation Link.
              if (onCityClick) {
                return (
                  <Grid item xs={6} sm={4} key={index}>
                    <Chip
                      label={area}
                      className={styles.areaChip}
                      onClick={() => onCityClick(area)}
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: 'rgba(216, 27, 96, 0.08)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    />
                  </Grid>
                )
              }

              // Every other call site (21 service pages): link to the real
              // location page when one exists, so these chips actually pass
              // internal link equity instead of rendering as inert text.
              const hasPage = CITY_SLUGS.includes(slugFor(area))
              const chip = (
                <Chip
                  label={area}
                  className={styles.areaChip}
                  sx={{
                    cursor: hasPage ? 'pointer' : 'default',
                    '&:hover': hasPage ? {
                      backgroundColor: 'rgba(216, 27, 96, 0.08)',
                      transform: 'translateY(-2px)'
                    } : {}
                  }}
                />
              )

              return (
                <Grid item xs={6} sm={4} key={index}>
                  {hasPage ? (
                    <Link
                      to={`/locations/${slugFor(area)}/house-cleaning-services`}
                      style={{ textDecoration: 'none' }}
                    >
                      {chip}
                    </Link>
                  ) : chip}
                </Grid>
              )
            })}
          </Grid>

          <Box className={styles.expandSection}>
            <Typography variant="h6" component="h4" className={styles.expandTitle}>
              Don't see your area?
            </Typography>
            <Typography variant="body2" className={styles.expandText}>
              We're expanding! Call us to see if we can serve your location.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AreasWeServe
