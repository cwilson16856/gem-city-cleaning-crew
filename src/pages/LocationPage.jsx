import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Divider,
  useTheme
} from '@mui/material'
import AreasWeServe from '../components/AreasWeServe'
import HeroSection from '../components/HeroSection'

const LocationPage = () => {
  const theme = useTheme()
  const location = useLocation()
  const cityRefs = useRef({})

  // Effect to handle scrolling when URL has a hash
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && cityRefs.current[hash]) {
      setTimeout(() => {
        cityRefs.current[hash].scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        })
      }, 100)
    }
  }, [location])

  // Function to create city ID
  const createCityId = (city) => city.toLowerCase().replace(/\s+/g, '-')

  // Service areas with their details
  const serviceAreas = [
    {
      city: 'Dayton',
      residential: {
        title: 'House Cleaning Services in Dayton',
        path: '/locations/dayton/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Dayton',
        path: '/locations/dayton/commercial-cleaning-services'
      }
    },
    {
      city: 'Kettering',
      residential: {
        title: 'House Cleaning Services in Kettering',
        path: '/locations/kettering/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Kettering',
        path: '/locations/kettering/commercial-cleaning-services'
      }
    },
    {
      city: 'Oakwood',
      residential: {
        title: 'House Cleaning Services in Oakwood',
        path: '/locations/oakwood/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Oakwood',
        path: '/locations/oakwood/commercial-cleaning-services'
      }
    },
    {
      city: 'Centerville',
      residential: {
        title: 'House Cleaning Services in Centerville',
        path: '/locations/centerville/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Centerville',
        path: '/locations/centerville/commercial-cleaning-services'
      }
    },
    {
      city: 'Miamisburg',
      residential: {
        title: 'House Cleaning Services in Miamisburg',
        path: '/locations/miamisburg/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Miamisburg',
        path: '/locations/miamisburg/commercial-cleaning-services'
      }
    },
    {
      city: 'Springboro',
      residential: {
        title: 'House Cleaning Services in Springboro',
        path: '/locations/springboro/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Springboro',
        path: '/locations/springboro/commercial-cleaning-services'
      }
    },
    {
      city: 'Huber Heights',
      residential: {
        title: 'House Cleaning Services in Huber Heights',
        path: '/locations/huber-heights/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Huber Heights',
        path: '/locations/huber-heights/commercial-cleaning-services'
      }
    },
    {
      city: 'Riverside',
      residential: {
        title: 'House Cleaning Services in Riverside',
        path: '/locations/riverside/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Riverside',
        path: '/locations/riverside/commercial-cleaning-services'
      }
    },
    {
      city: 'Xenia',
      residential: {
        title: 'House Cleaning Services in Xenia',
        path: '/locations/xenia/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Xenia',
        path: '/locations/xenia/commercial-cleaning-services'
      }
    },
    {
      city: 'Beavercreek',
      residential: {
        title: 'House Cleaning Services in Beavercreek',
        path: '/locations/beavercreek/house-cleaning-services'
      },
      commercial: {
        title: '7+ Elite Commercial Cleaning Services in Beavercreek',
        path: '/locations/beavercreek/commercial-services'
      }
    },
    {
      city: 'Fairborn',
      residential: {
        title: 'House Cleaning Services in Fairborn',
        path: '/locations/fairborn/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Fairborn',
        path: '/locations/fairborn/commercial-cleaning-services'
      }
    },
    {
      city: 'Yellow Springs',
      residential: {
        title: 'House Cleaning Services in Yellow Springs',
        path: '/locations/yellow-springs/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Yellow Springs',
        path: '/locations/yellow-springs/commercial-cleaning-services'
      }
    },
    {
      city: 'Tipp City',
      residential: {
        title: 'House Cleaning Services in Tipp City',
        path: '/locations/tipp-city/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Tipp City',
        path: '/locations/tipp-city/commercial-cleaning-services'
      }
    },
    {
      city: 'Bellbrook',
      residential: {
        title: 'House Cleaning Services in Bellbrook',
        path: '/locations/bellbrook/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Bellbrook',
        path: '/locations/bellbrook/commercial-cleaning-services'
      }
    },
    {
      city: 'Vandalia',
      residential: {
        title: 'House Cleaning Services in Vandalia',
        path: '/locations/vandalia/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Vandalia',
        path: '/locations/vandalia/commercial-cleaning-services'
      }
    },
    {
      city: 'Troy',
      residential: {
        title: 'House Cleaning Services in Troy',
        path: '/locations/troy/house-cleaning-services'
      },
      commercial: {
        title: 'Commercial Cleaning Services in Troy',
        path: '/locations/troy/commercial-cleaning-services'
      }
    }
  ]

  return (
    <>
      <Helmet>
        <title>Cleaning Services Locations | Dayton & Surrounding Areas | Gem City Cleaning</title>
        <meta name="description" content="Professional cleaning services throughout Greater Dayton including Kettering, Centerville, Beavercreek & more. Residential & commercial cleaning services." />
      </Helmet>

      {/* Hero Section */}
      <HeroSection 
        title="Service Locations"
        subtitle="Professional Cleaning Services Throughout Greater Dayton"
        description="Residential & Commercial Cleaning Services in Dayton and Surrounding Areas"
        backgroundImage="/images/legacy/katja-rooke-77JACslA8G0-unsplash-scaled.jpg"
        chipText="LICENSED • INSURED • PROFESSIONAL"
        showRating={true}
        ratingValue={4.5}
        reviewCount="85+"
        primaryButtonText="Get Your Free Quote"
        primaryButtonLink="/quote"
        differentiators={[
          'Same-Day Available',
          'No Contracts',
          'Local Service',
          'Professional Staff'
        ]}
      />

      {/* Areas We Serve Component */}
      <Box id="service-areas">
        <AreasWeServe 
          onCityClick={(city) => {
            const cityId = createCityId(city)
            if (cityRefs.current[cityId]) {
              cityRefs.current[cityId].scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
              })
            }
          }}
        />
      </Box>

      {/* City-Specific Services */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Find Services in Your Area
        </Typography>

        <Grid container spacing={4}>
          {serviceAreas.map((area) => (
            <Grid 
              item 
              xs={12} 
              md={6} 
              key={area.city}
              ref={el => cityRefs.current[createCityId(area.city)] = el}
              id={createCityId(area.city)}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:target': {
                    transform: 'scale(1.02)',
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h4" component="h3" sx={{ mb: 3, color: theme.palette.primary.main }}>
                    {area.city}
                  </Typography>
                  
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Residential Services
                  </Typography>
                  <CardActionArea 
                    component={Link} 
                    to={area.residential.path}
                    sx={{ mb: 3, p: 2, borderRadius: 1 }}
                  >
                    <Typography variant="body1">
                      {area.residential.title}
                    </Typography>
                  </CardActionArea>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Commercial Services
                  </Typography>
                  <CardActionArea 
                    component={Link} 
                    to={area.commercial.path}
                    sx={{ mb: 1, p: 2, borderRadius: 1 }}
                  >
                    <Typography variant="body1">
                      {area.commercial.title}
                    </Typography>
                  </CardActionArea>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default LocationPage
