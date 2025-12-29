import React, { useState } from 'react'
import {
  Container,
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Collapse,
  IconButton,
  Chip
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import MenuBookIcon from '@mui/icons-material/MenuBook'

const TableOfContents = ({ 
  items = [], 
  title = "Table of Contents",
  maxWidth = "lg",
  containerSx = {},
  boxSx = {},
  titleSx = {},
  columns = 2,
  collapsible = false,
  defaultExpanded = true,
  showItemCount = false
}) => {
  const theme = useTheme()
  const [expanded, setExpanded] = useState(defaultExpanded)

  const handleToggle = () => {
    setExpanded(!expanded)
  }

  // Split items into columns
  const itemsPerColumn = Math.ceil(items.length / columns)
  const columnItems = []
  
  for (let i = 0; i < columns; i++) {
    const startIndex = i * itemsPerColumn
    const endIndex = startIndex + itemsPerColumn
    columnItems.push(items.slice(startIndex, endIndex))
  }

  const defaultBoxSx = {
    backgroundColor: '#f8f9fa', 
    borderRadius: 3, 
    p: collapsible && !expanded ? 2 : 4, 
    border: `2px solid ${theme.palette.primary.main}20`,
    maxWidth: 800,
    mx: 'auto',
    transition: 'all 0.3s ease',
    ...boxSx
  }

  const defaultTitleSx = {
    mb: collapsible ? 1 : 3, 
    color: theme.palette.primary.main, 
    fontWeight: 700, 
    textAlign: 'center',
    ...titleSx
  }

  const defaultContainerSx = {
    py: 6,
    ...containerSx
  }

  return (
    <Container maxWidth={maxWidth} sx={defaultContainerSx}>
      <Box sx={defaultBoxSx}>
        {collapsible ? (
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              gap: 1,
              mb: expanded ? 2 : 0
            }}
            onClick={handleToggle}
          >
            <MenuBookIcon sx={{ color: theme.palette.primary.main, fontSize: 24 }} />
            <Typography variant="h3" sx={defaultTitleSx}>
              {title}
            </Typography>
            {showItemCount && (
              <Chip 
                label={`${items.length} sections`}
                size="small"
                sx={{ 
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  fontSize: '0.75rem'
                }}
              />
            )}
            <IconButton 
              size="small" 
              sx={{ 
                color: theme.palette.primary.main,
                ml: 1
              }}
            >
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
        ) : (
          <Typography variant="h3" sx={defaultTitleSx}>
            {title}
          </Typography>
        )}
        
        <Collapse in={!collapsible || expanded} timeout={300}>
          <Grid container spacing={2}>
            {columnItems.map((columnItemList, columnIndex) => (
              <Grid item xs={12} md={12 / columns} key={columnIndex}>
                <List dense>
                  {columnItemList.map((item, index) => (
                    <ListItem sx={{ py: 0.5, px: 0 }} key={index}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon sx={{ fontSize: 20, color: theme.palette.primary.main }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Typography 
                            component="a" 
                            href={item.href} 
                            sx={{ 
                              color: theme.palette.primary.main, 
                              textDecoration: 'none', 
                              '&:hover': { textDecoration: 'underline' } 
                            }}
                          >
                            {item.text}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </Box>
    </Container>
  )
}

export default TableOfContents 