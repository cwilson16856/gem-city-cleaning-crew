import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Chip
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import PhoneIcon from '@mui/icons-material/Phone'

const QuoteForm = ({ open, onClose, title = "Get Your Free Cleaning Estimate!" }) => {
  const [formLoaded, setFormLoaded] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    if (open) {
      // Load the form embed script when modal opens
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')
      
      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://link.msgsndr.com/js/form_embed.js'
        script.async = true
        script.onload = () => setFormLoaded(true)
        document.body.appendChild(script)
      } else {
        setFormLoaded(true)
      }
    }
  }, [open])

  const handleClose = () => {
    setFormLoaded(false)
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      fullScreen={fullScreen}
      scroll="body"
      PaperProps={{
        sx: {
          borderRadius: fullScreen ? 0 : 3,
          maxHeight: fullScreen ? '100vh' : '95vh',
          overflow: 'hidden',
          background: '#ffffff',
          boxShadow: theme.shadows[12],
          m: fullScreen ? 0 : 2
        }
      }}
    >
      {/* Dialog Header */}
      <DialogTitle 
        sx={{ 
          p: { xs: 2, sm: 3 }, 
          pb: { xs: 1.5, sm: 2 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          position: 'relative'
        }}
      >
        <Box sx={{ pr: { xs: 5, sm: 6 } }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 1,
              fontFamily: 'Inter, sans-serif',
              fontSize: { xs: '1.3rem', sm: '1.5rem', md: '2rem' },
              color: 'white !important',
              lineHeight: { xs: 1.2, md: 1.3 }
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              opacity: 0.95,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              color: 'white !important',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              lineHeight: 1.4
            }}
          >
            Get your personalized cleaning estimate in just a few minutes
          </Typography>
          
          {/* Trust indicators */}
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 0.5, sm: 1 }, 
            mt: { xs: 1.5, sm: 2 }, 
            flexWrap: 'wrap',
            justifyContent: { xs: 'flex-start', sm: 'flex-start' }
          }}>
            {['Free Estimate', 'Same-Day Response', 'No Obligation'].map((item) => (
              <Chip 
                key={item}
                label={item} 
                size="small"
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  fontFamily: 'Inter, sans-serif',
                  height: { xs: 24, sm: 28 },
                  '& .MuiChip-label': {
                    px: { xs: 1, sm: 1.5 },
                    py: 0.5
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)'
                  }
                }} 
              />
            ))}
          </Box>
        </Box>
        
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: { xs: 8, sm: 12 },
            top: { xs: 8, sm: 12 },
            color: 'white',
            background: 'rgba(255, 255, 255, 0.1)',
            width: { xs: 36, sm: 40 },
            height: { xs: 36, sm: 40 },
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              transform: 'scale(1.05)'
            }
          }}
        >
          <CloseIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
        </IconButton>
      </DialogTitle>

      {/* Dialog Content */}
      <DialogContent 
        sx={{ 
          p: 0, 
          overflow: 'auto',
          maxHeight: fullScreen 
            ? 'calc(100vh - 180px)' 
            : isMobile 
              ? '60vh' 
              : '70vh',
          '-webkit-overflow-scrolling': 'touch' // Smooth scrolling on iOS
        }}
      >
        {/* Loading state */}
        {!formLoaded && (
          <Box sx={{ p: { xs: 3, sm: 4 }, textAlign: 'center' }}>
            <Typography 
              variant="body1" 
              sx={{ 
                color: theme.palette.text.secondary,
                fontFamily: 'Inter, sans-serif',
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}
            >
              Loading quote form...
            </Typography>
          </Box>
        )}

        {/* Iframe Form */}
        <Box 
          sx={{ 
            position: 'relative',
            background: '#ffffff',
            minHeight: formLoaded ? 'auto' : { xs: 300, sm: 400 },
            '& iframe': {
              display: formLoaded ? 'block' : 'none'
            }
          }}
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/lHxZlrt3gWUXleLkGg53"
            style={{
              width: '100%',
              height: fullScreen 
                ? 'calc(100vh - 180px)' 
                : isMobile 
                  ? '60vh' 
                  : '65vh',
              minHeight: isMobile ? '400px' : '500px',
              border: 'none',
              background: 'transparent'
            }}
            id="inline-lHxZlrt3gWUXleLkGg53" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Request a House Cleaning Quote"
            data-height={fullScreen 
              ? 'calc(100vh - 180px)' 
              : isMobile 
                ? '60vh' 
                : '65vh'}
            data-layout-iframe-id="inline-lHxZlrt3gWUXleLkGg53"
            data-form-id="lHxZlrt3gWUXleLkGg53"
            title="Request a House Cleaning Quote"
            onLoad={() => setFormLoaded(true)}
          />
        </Box>
      </DialogContent>

      {/* Dialog Actions */}
      <DialogActions 
        sx={{ 
          p: { xs: 2, sm: 3 }, 
          pt: { xs: 1.5, sm: 2 },
          backgroundColor: '#fafafa',
          borderTop: `1px solid ${theme.palette.divider}`,
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 }
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: { xs: 'center', sm: 'center' },
          width: '100%',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 2 }
        }}>
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: 600, 
                color: theme.palette.text.primary,
                fontFamily: 'Inter, sans-serif',
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}
            >
              Need immediate help?
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: theme.palette.text.secondary, 
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Call us directly for instant assistance
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 1.5, sm: 2 }, 
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            width: { xs: '100%', sm: 'auto' }
          }}>
            <Button
              variant="contained"
              startIcon={<PhoneIcon />}
              href="tel:937-892-4157"
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                color: '#ffffff',
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                borderRadius: 2,
                px: { xs: 2, sm: 3 },
                py: { xs: 1.5, sm: 1 },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                minHeight: { xs: 44, sm: 40 }, // Better touch target
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, #880E4F 100%)`,
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(216, 27, 96, 0.3)'
                }
              }}
            >
              937-892-4157
            </Button>
            
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{ 
                borderColor: theme.palette.text.secondary,
                color: theme.palette.text.secondary,
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
                borderRadius: 2,
                px: { xs: 2, sm: 3 },
                py: { xs: 1.5, sm: 1 },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                minHeight: { xs: 44, sm: 40 }, // Better touch target
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  borderColor: theme.palette.text.primary,
                  backgroundColor: 'rgba(28, 28, 28, 0.04)',
                  color: theme.palette.text.primary
                }
              }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

export default QuoteForm
