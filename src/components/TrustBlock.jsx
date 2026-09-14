import React from 'react'
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  Rating
} from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
import ShieldIcon from '@mui/icons-material/Shield'
import RateReviewIcon from '@mui/icons-material/RateReview'
import styles from '../styles/components/TrustBlock.module.css'
import { GBP_REVIEW_URL } from '../utils/localBusinessSchema'
import { VERIFIED_REVIEWS as REVIEWS, formatReviewDate } from '../data/testimonials'

// Canonical attributed-testimonial + real-policy component for the site's
// highest-trust-need pages (homepage, About Us, Quote). Added 2026-09-11 SEO
// audit follow-up, "third-party trust gap" finding: homepage testimonials
// were first-name-only with no source/date, "licensed and insured" only
// appeared in meta tags, and no re-clean/insurance policy existed in visible
// body copy anywhere on the site.
//
// Every fact below is sourced from something already published elsewhere on
// this site -- nothing new is asserted. The satisfaction-guarantee sentence
// is reused verbatim from RecurringCleaningPage.jsx's FAQ. There is no
// standalone "damage policy" anywhere on the site to draw from (confirmed by
// search) -- "licensed and insured" is the honest substitute, not a
// fabricated claim/timeline/dollar figure. The 3 reviews are real, dated
// Google reviews pulled live via the OpenSEO GBP lookup.
//
// This is the canonical attributed-testimonial pattern going forward. ~14
// other pages (AirBnbCleaning.jsx, CommercialPage.jsx, etc.) still carry
// their own unattributed, no-date testimonial arrays -- a real instance of
// the same underlying pattern, but out of scope for this component (the
// audit finding named the homepage specifically; see the trust-block plan's
// Widen-the-Search step for the full list and why it's a separate,
// not-yet-scoped follow-up rather than a silent gap).
//
// No Review/AggregateRating JSON-LD is added here deliberately -- hand-picked
// self-published testimonials rendered as Review schema is exactly the kind
// of self-serving review markup Google's guidelines prohibit, the same
// problem class already fixed elsewhere on this branch by linking the rating
// badge to the real GBP profile instead of asserting an unverifiable claim.
// aggregateRating on LocalBusiness (localBusinessSchema.js) stays the only
// review-signal schema; this component is plain visible HTML only.

const TrustBlock = ({ variant = 'full', showReviews = true }) => {
  const isCompact = variant === 'compact'
  const reviews = isCompact ? REVIEWS.slice(0, 1) : REVIEWS

  return (
    <Container maxWidth="lg" className={isCompact ? styles.compactContainer : styles.container}>
      {!isCompact && (
        <Box className={styles.headerSection}>
          <Typography variant="h2" component="h2" className={styles.title}>
            Why Homeowners Trust Gem City
          </Typography>
        </Box>
      )}

      <Box className={`${styles.policyBand} ${isCompact ? styles.compactPolicyBand : ''}`}>
        <Box className={styles.policyItem}>
          <VerifiedIcon className={styles.policyIcon} />
          <Typography className={styles.policyText}>
            <strong>100% satisfaction guarantee.</strong> If you&apos;re not completely happy with any
            cleaning, contact us within 24 hours and we&apos;ll return to re-clean the areas of concern
            at no additional charge. Your satisfaction is our priority.
          </Typography>
        </Box>
        <Box className={styles.policyItem}>
          <ShieldIcon className={styles.policyIcon} />
          <Typography className={styles.policyText}>
            <strong>Fully licensed and insured,</strong> with a certificate of insurance available on
            request.
          </Typography>
        </Box>
      </Box>

      {showReviews ? (
        <Grid container spacing={3} className={styles.reviewGrid}>
          {reviews.map((review) => (
            <Grid item xs={12} sm={isCompact ? 12 : 4} key={review.name}>
              <Card className={styles.reviewCard} elevation={1}>
                <Rating value={review.rating} readOnly size="small" />
                <Typography className={styles.reviewText}>
                  &ldquo;{review.text}&rdquo;
                </Typography>
                <Box className={styles.reviewByline}>
                  <RateReviewIcon fontSize="inherit" />
                  <span>
                    {review.name} · {review.platform}, {formatReviewDate(review.date)}
                  </span>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography className={styles.substituteTrustNote}>
          Serving the Dayton community with pride since 2017, with a 4.6-star average across 90+ Google reviews and Checkr-verified cleaners on every visit.
        </Typography>
      )}

      <Box className={styles.seeAllReviews}>
        <a
          href={GBP_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.seeAllReviewsLink}
        >
          See all 90+ reviews on Google
        </a>
      </Box>
    </Container>
  )
}

export default TrustBlock
