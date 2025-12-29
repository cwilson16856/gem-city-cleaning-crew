import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Typography,
  Button,
  Box,
  Chip,
  Rating,
  useTheme
} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'

const HeroSection = ({ 
  title,
  subtitle,
  description,
  backgroundImage,
  chipText,
  showRating = false,
  ratingValue = 4.5,
  reviewCount = "85+",
  primaryButtonText = "Get Free Quote",
  primaryButtonLink = "/quote",
  showSecondaryButton = true,
  secondaryButtonText = "Call 937-892-4157",
  secondaryButtonLink = "tel:937-892-4157",
  differentiators = [],
  containerMaxWidth = "lg"
}) => {
  const theme = useTheme()

  return (
    <Box
      className="hero-section"
      sx={{
        background: `linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        minHeight: { xs: 600, md: 700 },
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container 
        maxWidth={containerMaxWidth}
        sx={{
          position: 'relative',
          zIndex: 2
        }}
      >
        {chipText && (
          <Chip 
            label={chipText}
            sx={{ 
              mb: 3, 
              backgroundColor: theme.palette.primary.main, 
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem',
              px: 2
            }} 
          />
        )}
        
        <Typography 
          variant="h1" 
          component="h1"
          className="hero-title"
          sx={{ 
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 700,
            mb: 2,
            lineHeight: 1.1,
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="h4"
          className="hero-subtitle"
          sx={{ 
            fontSize: { xs: '1.2rem', md: '1.8rem' },
            fontWeight: 400,
            mb: 2,
            maxWidth: 800,
            mx: 'auto',
            color: 'black',
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
          }}
        >
          {subtitle}
        </Typography>

        {description && (
          <Typography 
            variant="h5"
            sx={{ 
              fontSize: { xs: '1.1rem', md: '1.4rem' },
              fontWeight: 500,
              mb: 4,
              maxWidth: 700,
              mx: 'auto',
              color: 'black',
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
            }}
          >
            {description}
          </Typography>
        )}

        {showRating && (
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: 2, 
              mb: 4,
              minHeight: 40,
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
            }}
          >
            <Rating 
              value={ratingValue} 
              precision={0.5} 
              readOnly 
              size="large" 
              sx={{ 
                color: '#FFD700',
                '& .MuiRating-icon': {
                  fontSize: '2rem',
                  filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))'
                }
              }} 
            />
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#FFD700', 
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                minWidth: 200,
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
              }}
            >
              {ratingValue}/5 stars • {reviewCount} reviews
            </Typography>
          </Box>
        )}
        
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to={primaryButtonLink}
            sx={{
              fontSize: '1.1rem',
              px: 4,
              py: 1.5,
              backgroundColor: '#1C1C1C !important',
              color: 'white !important',
              fontWeight: 600,
              position: 'relative',
              zIndex: 9999,
              border: '3px solid white !important',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5) !important',
              '&:hover': {
                backgroundColor: '#000000 !important',
                color: 'white !important',
                transform: 'translateY(-2px)',
                border: '3px solid white !important',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.6) !important'
              }
            }}
          >
            {primaryButtonText}
          </Button>

          {showSecondaryButton && (
            <Button
              variant="outlined"
              size="large"
              href={secondaryButtonLink}
              startIcon={<PhoneIcon />}
              sx={{
                fontSize: '1.1rem',
                px: 4,
                py: 1.5,
                borderColor: 'white',
                color: 'white',
                borderWidth: 2,
                fontWeight: 600,
                position: 'relative',
                zIndex: 10,
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                '&:hover': {
                  borderColor: 'white',
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderWidth: 2,
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)'
                }
              }}
            >
              {secondaryButtonText}
            </Button>
          )}
        </Box>

        {differentiators.length > 0 && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: { xs: 2, md: 4 }, 
            flexWrap: 'wrap',
            opacity: 0.9 
          }}>
            {differentiators.map((item) => (
              <Chip 
                key={item}
                label={item} 
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontWeight: 600,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                  }
                }} 
              />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default HeroSection 