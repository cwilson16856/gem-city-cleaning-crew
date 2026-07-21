import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  Chip,
  Divider,
  ListItemText
} from '@mui/material'
import {
  Menu as MenuIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Sms as SmsIcon,
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material'
import { isDevelopment } from '../config'

const Header = ({ siteInfo }) => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null)
  const [contactMenuAnchor, setContactMenuAnchor] = useState(null)
  const [residentialMenuAnchor, setResidentialMenuAnchor] = useState(null)
  const [commercialMenuAnchor, setCommercialMenuAnchor] = useState(null)
  const [locationsMenuAnchor, setLocationsMenuAnchor] = useState(null)
  const [locationsCommercialMenuAnchor, setLocationsCommercialMenuAnchor] = useState(null)
  const [locationsResidentialMenuAnchor, setLocationsResidentialMenuAnchor] = useState(null)
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null)
  }

  const handleContactMenuOpen = (event) => {
    setContactMenuAnchor(event.currentTarget)
  }

  const handleContactMenuClose = () => {
    setContactMenuAnchor(null)
  }

  const handleResidentialMenuOpen = (event) => {
    setResidentialMenuAnchor(event.currentTarget)
  }

  const handleResidentialMenuClose = () => {
    setResidentialMenuAnchor(null)
  }

  const handleCommercialMenuOpen = (event) => {
    setCommercialMenuAnchor(event.currentTarget)
  }

  const handleCommercialMenuClose = () => {
    setCommercialMenuAnchor(null)
  }

  const handleLocationsMenuOpen = (event) => {
    setLocationsMenuAnchor(event.currentTarget)
  }

  const handleLocationsMenuClose = () => {
    setLocationsMenuAnchor(null)
    setLocationsCommercialMenuAnchor(null)
    setLocationsResidentialMenuAnchor(null)
  }

  const handleLocationsCommercialMenuOpen = (event) => {
    setLocationsCommercialMenuAnchor(event.currentTarget)
  }

  const handleLocationsResidentialMenuOpen = (event) => {
    setLocationsResidentialMenuAnchor(event.currentTarget)
  }

  const handleCall = () => {
    window.open('tel:937-892-4157', '_self')
    handleContactMenuClose()
  }

  const handleEmail = () => {
    window.open('mailto:info@gemcitycleaningcrew.com', '_self')
    handleContactMenuClose()
  }

  const handleText = () => {
    window.open('sms:937-892-4157', '_self')
    handleContactMenuClose()
  }

  const isActive = (path) => location.pathname === path
  const isResidentialActive = () => {
    const residentialPaths = ['/residential', '/recurring-cleaning-service', '/deep-cleaning', '/kitchen-cleaning-services', '/bathroom-cleaning-services', '/move-in-out-cleaning', '/move-in-cleaning', '/move-out-cleaning', '/apartment-cleaning', '/condo-cleaning', '/airbnb-cleaning-service', '/residential-house-cleaning-checklist']
    return residentialPaths.includes(location.pathname)
  }

  const isCommercialActive = () => {
    const commercialPaths = ['/commercial', '/office-cleaning', '/office-cleaning-checklist', '/retail-cleaning', '/school-cleaning', '/corporate-building-cleaning', '/industrial-cleaning']
    return commercialPaths.includes(location.pathname)
  }

  const navigationLinks = [
    { label: 'About Us', path: '/page/about-us' },
    { label: 'Blog', path: '/blog' }
  ]

  // Location service areas in alphabetical order
  const locationCities = [
    'Beavercreek',
    'Bellbrook',
    'Brookville',
    'Carlisle',
    'Centerville',
    'Clayton',
    'Dayton',
    'Englewood',
    'Fairborn',
    'Franklin',
    'Germantown',
    'Huber Heights',
    'Kettering',
    'Lebanon',
    'Miamisburg',
    'Middletown',
    'Moraine',
    'New Carlisle',
    'New Lebanon',
    'Oakwood',
    'Riverside',
    'Springboro',
    'Springfield',
    'Tipp City',
    'Trotwood',
    'Troy',
    'Union',
    'Vandalia',
    'Washington Township',
    'West Carrollton',
    'West Milton',
    'Xenia',
    'Yellow Springs'
  ]

  const residentialLinks = [
    { label: 'Residential Services', path: '/residential', description: 'Complete house cleaning services' },
    { label: 'Recurring Cleaning', path: '/recurring-cleaning-service', description: 'Weekly, bi-weekly, monthly service' },
    { label: 'Deep Cleaning', path: '/deep-cleaning', description: 'Intensive one-time cleaning' },
    { label: 'Kitchen Cleaning', path: '/kitchen-cleaning-services', description: 'Appliances, grease removal, sanitization' },
    { label: 'Bathroom Cleaning', path: '/bathroom-cleaning-services', description: 'Sanitization, mold removal, grout restoration' },
    { label: 'Move-In/Out Cleaning', path: '/move-in-out-cleaning', description: 'Moving transition cleaning' },
    { label: 'Move-In Cleaning', path: '/move-in-cleaning', description: 'Fresh start for new homes' },
    { label: 'Move-Out Cleaning', path: '/move-out-cleaning', description: 'Protect your security deposit' },
    { label: 'Apartment Cleaning', path: '/apartment-cleaning', description: 'Specialized apartment & rental cleaning' },
    { label: 'Condo Cleaning', path: '/condo-cleaning', description: 'Luxury condo cleaning & HOA compliance' },
    { label: 'AirBnb Cleaning', path: '/airbnb-cleaning-service', description: 'Same-day guest turnaround' },
    { label: 'Cleaning Checklist', path: '/residential-house-cleaning-checklist', description: 'See what we clean' },
    { type: 'divider' },
    { label: 'Locations', type: 'header' },
    { label: 'Dayton', path: '/locations/dayton/house-cleaning-services', description: 'House Cleaning Services in Dayton' },
    { label: 'Kettering', path: '/locations/kettering/house-cleaning-services', description: 'House Cleaning Services in Kettering' },
    { label: 'Beavercreek', path: '/locations/beavercreek/house-cleaning-services', description: 'House Cleaning Services in Beavercreek' },
    { label: 'Centerville', path: '/locations/centerville/house-cleaning-services', description: 'House Cleaning Services in Centerville' },
    { label: 'View All Locations', path: '/locations', description: 'See all areas we serve', type: 'action' }
  ]

  const commercialLinks = [
    { label: 'Commercial Services', path: '/commercial', description: 'Business & office cleaning services' },
    { label: 'Office Cleaning', path: '/office-cleaning', description: 'Law firms, real estate, therapy offices' },
    { label: 'Office Cleaning Checklist', path: '/office-cleaning-checklist', description: 'See what we clean in offices' },
    { label: 'Retail Cleaning', path: '/retail-cleaning', description: 'Stores, shops, customer areas' },
    { label: 'Daycare Cleaning', path: '/school-cleaning', description: 'Daycares, childcare centers' },
    { label: 'Apartment Building Cleaning', path: '/apartment-building-cleaning', description: 'Common areas, hallways, laundry rooms' },
    { label: 'Commercial One-Time Cleaning', path: '/commercial-one-time-cleaning', description: 'Deep cleaning & special events' },
    { label: 'Industrial Cleaning', path: '/industrial-cleaning', description: 'Warehouses, manufacturing' },
    { type: 'divider' },
    { label: 'Locations', type: 'header' },
    { label: 'Dayton', path: '/locations/dayton/commercial-cleaning-services', description: 'Commercial Cleaning Services in Dayton' },
    { label: 'Kettering', path: '/locations/kettering/commercial-cleaning-services', description: 'Commercial Cleaning Services in Kettering' },
    { label: 'Beavercreek', path: '/locations/beavercreek/commercial-services', description: 'Elite Commercial Cleaning Services in Beavercreek' },
    { label: 'Centerville', path: '/locations/centerville/commercial-cleaning-services', description: 'Commercial Cleaning Services in Centerville' },
    { label: 'View All Locations', path: '/locations', description: 'See all areas we serve', type: 'action' }
  ]

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Box 
                className="logo-container"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  minHeight: 48,
                  minWidth: 48,
                  mr: 1.5
                }}
              >
                <img
                  src="/logo-header.png"
                  alt="Gem City Cleaning Crew Logo"
                  width="48"
                  height="48"
                  style={{
                    height: 48,
                    width: 48,
                    display: 'block'
                  }}
                />
              </Box>
              <Box sx={{ minWidth: 200 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700, 
                    color: theme.palette.primary.main,
                    fontSize: '1.4rem',
                    lineHeight: 1.2,
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Gem City Cleaning Crew
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: theme.palette.text.secondary,
                    fontSize: '0.75rem',
                    fontStyle: 'italic',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  We Make Life Easier
                </Typography>
              </Box>
            </Link>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* Navigation Links */}
              
              {/* Residential Dropdown */}
              <Button
                onClick={handleResidentialMenuOpen}
                endIcon={<ExpandMoreIcon />}
                sx={{
                  color: isResidentialActive() ? theme.palette.primary.main : theme.palette.text.primary,
                  fontWeight: isResidentialActive() ? 600 : 500,
                  px: 2,
                  py: 1,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: 'rgba(216, 27, 96, 0.04)'
                  }
                }}
              >
                Residential
              </Button>

              {/* Residential Dropdown Menu */}
              <Menu
                anchorEl={residentialMenuAnchor}
                open={Boolean(residentialMenuAnchor)}
                onClose={handleResidentialMenuClose}
                sx={{ mt: 1 }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              >
                {residentialLinks.map((link, index) => (
                  link.type === 'divider' ? (
                    <Divider key={`divider-${index}`} sx={{ my: 1 }} />
                  ) : link.type === 'header' ? (
                    <Typography
                      key={`header-${index}`}
                      variant="subtitle2"
                      sx={{
                        px: 2,
                        py: 1,
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        backgroundColor: 'rgba(216, 27, 96, 0.04)'
                      }}
                    >
                      {link.label}
                    </Typography>
                  ) : link.type === 'action' ? (
                    <MenuItem 
                      key={link.path}
                      component={Link} 
                      to={link.path} 
                      onClick={handleResidentialMenuClose}
                      sx={{ 
                        minWidth: 240,
                        py: 1.5,
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        '&:hover': { backgroundColor: 'rgba(216, 27, 96, 0.04)' }
                      }}
                    >
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {link.label}
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          {link.description}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ) : (
                    <MenuItem 
                      key={link.path}
                      component={Link} 
                      to={link.path} 
                      onClick={handleResidentialMenuClose}
                      sx={{ 
                        minWidth: 240,
                        py: 1.5,
                        color: isActive(link.path) ? theme.palette.primary.main : theme.palette.text.primary,
                        '&:hover': { backgroundColor: 'rgba(216, 27, 96, 0.04)' }
                      }}
                    >
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: isActive(link.path) ? 600 : 500 }}>
                          {link.label}
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          {link.description}
                        </Typography>
                      </Box>
                    </MenuItem>
                  )
                ))}
              </Menu>

              {/* Commercial Dropdown */}
              <Button
                onClick={handleCommercialMenuOpen}
                endIcon={<ExpandMoreIcon />}
                sx={{
                  color: isCommercialActive() ? theme.palette.primary.main : theme.palette.text.primary,
                  fontWeight: isCommercialActive() ? 600 : 500,
                  px: 2,
                  py: 1,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: 'rgba(216, 27, 96, 0.04)'
                  }
                }}
              >
                Commercial
              </Button>

              {/* Commercial Dropdown Menu */}
              <Menu
                anchorEl={commercialMenuAnchor}
                open={Boolean(commercialMenuAnchor)}
                onClose={handleCommercialMenuClose}
                sx={{ mt: 1 }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              >
                {commercialLinks.map((link, index) => (
                  link.type === 'divider' ? (
                    <Divider key={`divider-${index}`} sx={{ my: 1 }} />
                  ) : link.type === 'header' ? (
                    <Typography
                      key={`header-${index}`}
                      variant="subtitle2"
                      sx={{
                        px: 2,
                        py: 1,
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        backgroundColor: 'rgba(216, 27, 96, 0.04)'
                      }}
                    >
                      {link.label}
                    </Typography>
                  ) : link.type === 'action' ? (
                    <MenuItem 
                      key={link.path}
                      component={Link} 
                      to={link.path} 
                      onClick={handleCommercialMenuClose}
                      sx={{ 
                        minWidth: 240,
                        py: 1.5,
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        '&:hover': { backgroundColor: 'rgba(216, 27, 96, 0.04)' }
                      }}
                    >
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {link.label}
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          {link.description}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ) : (
                    <MenuItem 
                      key={link.path}
                      component={Link} 
                      to={link.path} 
                      onClick={handleCommercialMenuClose}
                      sx={{ 
                        minWidth: 240,
                        py: 1.5,
                        color: isActive(link.path) ? theme.palette.primary.main : theme.palette.text.primary,
                        '&:hover': { backgroundColor: 'rgba(216, 27, 96, 0.04)' }
                      }}
                    >
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: isActive(link.path) ? 600 : 500 }}>
                          {link.label}
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          {link.description}
                        </Typography>
                      </Box>
                    </MenuItem>
                  )
                ))}
              </Menu>

              {/* Other Navigation Links */}
              <Button
                onClick={handleLocationsMenuOpen}
                endIcon={<ExpandMoreIcon />}
                sx={{
                  color: isActive('/locations') ? theme.palette.primary.main : theme.palette.text.primary,
                  fontWeight: isActive('/locations') ? 600 : 500,
                  px: 2,
                  py: 1,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: 'rgba(216, 27, 96, 0.04)'
                  }
                }}
              >
                Locations
              </Button>

              {/* Locations Dropdown Menu */}
              <Menu
                anchorEl={locationsMenuAnchor}
                open={Boolean(locationsMenuAnchor)}
                onClose={handleLocationsMenuClose}
                sx={{ mt: 1 }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              >
                {/* Commercial Section */}
                <MenuItem 
                  onClick={handleLocationsCommercialMenuOpen}
                  sx={{ 
                    minWidth: 200,
                    py: 1.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Commercial
                  </Typography>
                  <ChevronRightIcon />
                </MenuItem>

                {/* Residential Section */}
                <MenuItem 
                  onClick={handleLocationsResidentialMenuOpen}
                  sx={{ 
                    minWidth: 200,
                    py: 1.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Residential
                  </Typography>
                  <ChevronRightIcon />
                </MenuItem>

                <Divider sx={{ my: 1 }} />

                <MenuItem 
                  component={Link} 
                  to="/locations" 
                  onClick={handleLocationsMenuClose}
                  sx={{ 
                    minWidth: 200,
                    py: 1.5,
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    '&:hover': { backgroundColor: 'rgba(216, 27, 96, 0.04)' }
                  }}
                >
                  View All Locations
                </MenuItem>
              </Menu>

              {/* Commercial Cities Submenu */}
              <Menu
                anchorEl={locationsCommercialMenuAnchor}
                open={Boolean(locationsCommercialMenuAnchor)}
                onClose={handleLocationsMenuClose}
                MenuListProps={{
                  onMouseLeave: handleLocationsMenuClose
                }}
                sx={{ 
                  ml: 1,
                  '& .MuiPaper-root': {
                    ml: 2
                  }
                }}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
              >
                {locationCities.map((city) => (
                  <MenuItem 
                    key={city}
                    component={Link}
                    to={city === 'Beavercreek' ? '/locations/beavercreek/commercial-services' : `/locations/${city.toLowerCase().replace(' ', '-')}/commercial-cleaning-services`}
                    onClick={handleLocationsMenuClose}
                    sx={{ 
                      minWidth: 280,
                      py: 1.5,
                      '&:hover': { backgroundColor: 'rgba(216, 27, 96, 0.04)' }
                    }}
                  >
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {city}
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        {city === 'Beavercreek' ? 'Elite Commercial Cleaning Services in Beavercreek' : `Commercial Cleaning Services in ${city}`}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Menu>

              {/* Residential Cities Submenu */}
              <Menu
                anchorEl={locationsResidentialMenuAnchor}
                open={Boolean(locationsResidentialMenuAnchor)}
                onClose={handleLocationsMenuClose}
                MenuListProps={{
                  onMouseLeave: handleLocationsMenuClose
                }}
                sx={{ 
                  ml: 1,
                  '& .MuiPaper-root': {
                    ml: 2
                  }
                }}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
              >
                {locationCities.map((city) => (
                  <MenuItem 
                    key={city}
                    component={Link}
                    to={`/locations/${city.toLowerCase().replace(' ', '-')}/house-cleaning-services`}
                    onClick={handleLocationsMenuClose}
                    sx={{ 
                      minWidth: 280,
                      py: 1.5,
                      '&:hover': { backgroundColor: 'rgba(216, 27, 96, 0.04)' }
                    }}
                  >
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {city}
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        House Cleaning Services in {city}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Menu>

              {/* About Us Link */}
              <Button
                component={Link}
                to="/page/about-us"
                sx={{
                  color: isActive('/page/about-us') ? theme.palette.primary.main : theme.palette.text.primary,
                  fontWeight: isActive('/page/about-us') ? 600 : 500,
                  px: 2,
                  py: 1,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: 'rgba(216, 27, 96, 0.04)'
                  }
                }}
              >
                About Us
              </Button>

              {/* Blog Link */}
              <Button
                component={Link}
                to="/blog"
                sx={{
                  color: isActive('/blog') ? theme.palette.primary.main : theme.palette.text.primary,
                  fontWeight: isActive('/blog') ? 600 : 500,
                  px: 2,
                  py: 1,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: 'rgba(216, 27, 96, 0.04)'
                  }
                }}
              >
                Blog
              </Button>

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/quote"
                  sx={{ 
                    px: 3,
                    color: 'white',
                    '&:hover': {
                      color: 'white'
                    }
                  }}
                >
                  Get Quote
                </Button>
                
                <Button
                  variant="outlined"
                  onClick={handleContactMenuOpen}
                  endIcon={<ExpandMoreIcon />}
                  sx={{ px: 2 }}
                >
                  Contact
                </Button>

                {/* Contact Dropdown Menu */}
                <Menu
                  anchorEl={contactMenuAnchor}
                  open={Boolean(contactMenuAnchor)}
                  onClose={handleContactMenuClose}
                  sx={{ mt: 1 }}
                >
                  <MenuItem onClick={handleCall} sx={{ gap: 2, minWidth: 180 }}>
                    <PhoneIcon sx={{ color: theme.palette.primary.main }} />
                    <Box>
                      <ListItemText primary="Call Us" secondary="937-892-4157" />
                    </Box>
                  </MenuItem>
                  <MenuItem onClick={handleText} sx={{ gap: 2 }}>
                    <SmsIcon sx={{ color: theme.palette.primary.main }} />
                    <Box>
                      <ListItemText primary="Text Us" secondary="937-892-4157" />
                    </Box>
                  </MenuItem>
                  <MenuItem onClick={handleEmail} sx={{ gap: 2 }}>
                    <EmailIcon sx={{ color: theme.palette.primary.main }} />
                    <Box>
                      <ListItemText primary="Email Us" secondary="info@gemcitycleaningcrew.com" />
                    </Box>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="Open navigation menu"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Mobile Menu */}
          <Menu
            anchorEl={mobileMenuAnchor}
            open={Boolean(mobileMenuAnchor)}
            onClose={handleMobileMenuClose}
            sx={{ mt: 1 }}
          >
            {/* Residential Services */}
            <MenuItem disabled sx={{ opacity: 1, backgroundColor: 'rgba(216, 27, 96, 0.04)' }}>
              <Typography variant="subtitle2" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                Residential Services
              </Typography>
            </MenuItem>
            {residentialLinks.map((link) => (
              <MenuItem 
                key={link.path}
                component={Link} 
                to={link.path} 
                onClick={handleMobileMenuClose}
                sx={{
                  pl: 3,
                  color: isActive(link.path) ? theme.palette.primary.main : theme.palette.text.primary,
                  fontWeight: isActive(link.path) ? 600 : 400
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: isActive(link.path) ? 600 : 400 }}>
                    {link.label}
                  </Typography>
                  <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                    {link.description}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
            
            <Divider sx={{ my: 1 }} />
            
            {/* Commercial Services */}
            <MenuItem disabled sx={{ opacity: 1, backgroundColor: 'rgba(216, 27, 96, 0.04)' }}>
              <Typography variant="subtitle2" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                Commercial Services
              </Typography>
            </MenuItem>
            {commercialLinks.map((link) => (
              <MenuItem 
                key={link.path}
                component={Link} 
                to={link.path} 
                onClick={handleMobileMenuClose}
                sx={{
                  pl: 3,
                  color: isActive(link.path) ? theme.palette.primary.main : theme.palette.text.primary,
                  fontWeight: isActive(link.path) ? 600 : 400
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: isActive(link.path) ? 600 : 400 }}>
                    {link.label}
                  </Typography>
                  <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                    {link.description}
                  </Typography>
                </Box>
              </MenuItem>
            ))}

            <Divider sx={{ my: 1 }} />
            
            {/* Other Navigation Links */}
            {navigationLinks.map((link) => (
              <MenuItem 
                key={link.path}
                component={Link} 
                to={link.path} 
                onClick={handleMobileMenuClose}
                sx={{
                  color: isActive(link.path) ? theme.palette.primary.main : theme.palette.text.primary,
                  fontWeight: isActive(link.path) ? 600 : 400
                }}
              >
                {link.label}
              </MenuItem>
            ))}
            <Divider sx={{ my: 1 }} />
            <MenuItem component={Link} to="/quote" onClick={handleMobileMenuClose}>
              <Typography color="primary" fontWeight={600}>Get Quote</Typography>
            </MenuItem>
            <MenuItem onClick={handleCall}>
              <PhoneIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
              Call: 937-892-4157
            </MenuItem>
            <MenuItem onClick={handleEmail}>
              <EmailIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
              Email Us
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header 