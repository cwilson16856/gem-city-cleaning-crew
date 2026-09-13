import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Typography,
  Box,
  Grid,
  Chip
} from '@mui/material'
import styles from '../styles/components/AreasWeServe.module.css'
import { CITY_SLUGS } from '../data/locations'
import LazyMapEmbed from './LazyMapEmbed'

// currentCity: pass the page's own city (e.g. LocationPage.jsx's
// CityServicePage, XeniaHouseCleaningPage, BeavercreekCommercialPage) so the
// intro sentence below leads with the actual page topic instead of the
// generic Dayton-area blurb repeating verbatim on 30+ different city pages —
// see 2026-09-11 SEO audit, Content finding #3 (the boilerplate previously
// named Kettering/Centerville/Huber Heights even on the Troy/Xenia/Tipp City
// pages, which read as templated). Omit it (e.g. the homepage, the
// /locations index) to keep the original generic copy.
//
// serviceType: 'residential' | 'commercial', pass alongside currentCity so
// the intro sentence names the right service line. Without this the intro
// hardcoded "house cleaning and move-in/move-out services" even on the 16
// commercial location pages — a real bug caught in the 2026-09-11 SEO audit
// follow-up (factually wrong copy live on every commercial city page).
// Defaults to the residential phrasing so every other existing call site
// (all of which are residential pages) is unaffected.
const AreasWeServe = ({ onCityClick, currentCity, serviceType = 'residential' }) => {
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

  const nearbyExamples = currentCity
    ? serviceAreas.filter((area) => area !== currentCity).slice(0, 3)
    : ['Kettering', 'Centerville', 'Huber Heights']

  const serviceLine = serviceType === 'commercial'
    ? 'commercial and office cleaning services'
    : 'house cleaning and move-in/move-out services'

  const introText = currentCity
    ? `Gem City Cleaning Crew proudly serves ${currentCity} and the surrounding Greater Dayton area — including ${nearbyExamples.join(', ')} — with professional ${serviceLine}. Our local team knows ${currentCity} and provides reliable, trustworthy cleaning services throughout the region.`
    : `Gem City Cleaning Crew proudly serves Dayton and nearby communities like ${nearbyExamples.join(', ')} with professional ${serviceLine}. Our local team knows the area and provides reliable, trustworthy cleaning services throughout the Greater Dayton region.`

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
          {introText}
        </Typography>
      </Box>

      {/* Content Section - Map and Areas */}
      <Grid container spacing={6} className={styles.contentGrid}>
        <Grid item xs={12} md={6}>
          <Box className={styles.mapContainer}>
            <LazyMapEmbed
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.943777908926!2d-84.13519959999999!3d39.763370699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88408371bc0dde8b%3A0x665400b32d4a4fdc!2sGem%20City%20Cleaning%20Crew!5e0!3m2!1sen!2sus!4v1749236444079!5m2!1sen!2sus"
              title="Gem City Cleaning Crew - Professional House Cleaning Services in Dayton, OH"
              className={styles.map}
            />
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
              Don&apos;t see your area?
            </Typography>
            <Typography variant="body2" className={styles.expandText}>
              We&apos;re expanding! Call us to see if we can serve your location.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AreasWeServe
