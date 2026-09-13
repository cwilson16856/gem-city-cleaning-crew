import React from 'react'
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material'

// Generic heading + intro + Grid-of-cards content block, used by
// CityServicePage for the home-eras/business-districts, neighborhoods, and
// seasonal-hooks sections added by the 2026-09 location-page content-depth
// expansion. Deliberately icon-less and text-forward (title + body only) so
// per-city data authoring never has to also choose an MUI icon per item.
const InfoCardGrid = ({ id, heading, intro, items, columns = 3 }) => {
  if (!items?.length) return null

  const safeColumns = Math.min(12, Math.max(1, columns))
  const columnWidth = Math.floor(12 / safeColumns)

  return (
    <Box id={id} sx={{ mb: 5 }}>
      <Typography variant="h5" component="h2" sx={{ mb: intro ? 1 : 2, fontWeight: 600 }}>
        {heading}
      </Typography>
      {intro && (
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6 }}>
          {intro}
        </Typography>
      )}
      <Container disableGutters maxWidth={false} sx={{ overflow: 'hidden' }}>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={columnWidth} key={item.title}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {item.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default InfoCardGrid
