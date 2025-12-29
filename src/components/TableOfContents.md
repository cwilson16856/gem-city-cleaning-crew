# TableOfContents Component

A reusable Table of Contents component for React applications using Material-UI with optional collapsible functionality.

## Usage

```jsx
import TableOfContents from '../components/TableOfContents'

// Basic usage with default settings
const basicItems = [
  { text: "Introduction", href: "#intro" },
  { text: "Features", href: "#features" },
  { text: "Pricing", href: "#pricing" },
  { text: "Contact", href: "#contact" }
]

<TableOfContents items={basicItems} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | Array | `[]` | Array of objects with `text` and `href` properties |
| `title` | String | `"Table of Contents"` | Title displayed at the top |
| `maxWidth` | String | `"lg"` | Maximum width of the container |
| `containerSx` | Object | `{}` | Custom styles for the outer container |
| `boxSx` | Object | `{}` | Custom styles for the content box |
| `titleSx` | Object | `{}` | Custom styles for the title |
| `columns` | Number | `2` | Number of columns to display items |
| `collapsible` | Boolean | `false` | Whether the table of contents can be collapsed |
| `defaultExpanded` | Boolean | `true` | Whether the table is expanded by default (when collapsible) |
| `showItemCount` | Boolean | `false` | Whether to show the number of sections as a chip |

## Examples

### Basic Example
```jsx
const items = [
  { text: "About Us", href: "#about" },
  { text: "Services", href: "#services" },
  { text: "Contact", href: "#contact" }
]

<TableOfContents items={items} />
```

### Collapsible Table of Contents (Hidden by Default)
```jsx
const items = [
  { text: "Getting Started", href: "#start" },
  { text: "Installation", href: "#install" },
  { text: "Configuration", href: "#config" },
  { text: "Advanced Usage", href: "#advanced" },
  { text: "Troubleshooting", href: "#troubleshoot" }
]

<TableOfContents 
  items={items}
  title="Page Navigation"
  collapsible={true}
  defaultExpanded={false}
  showItemCount={true}
/>
```

### Collapsible Table of Contents (Expanded by Default)
```jsx
const items = [
  { text: "Overview", href: "#overview" },
  { text: "Features", href: "#features" },
  { text: "Examples", href: "#examples" }
]

<TableOfContents 
  items={items}
  collapsible={true}
  defaultExpanded={true}
  showItemCount={false}
/>
```

### Custom Title and Single Column
```jsx
const items = [
  { text: "Getting Started", href: "#start" },
  { text: "Installation", href: "#install" },
  { text: "Configuration", href: "#config" }
]

<TableOfContents 
  items={items}
  title="Quick Navigation"
  columns={1}
/>
```

### Custom Styling
```jsx
const items = [
  { text: "Overview", href: "#overview" },
  { text: "Details", href: "#details" }
]

<TableOfContents 
  items={items}
  title="Page Contents"
  boxSx={{ 
    backgroundColor: '#e3f2fd',
    border: '3px solid #1976d2'
  }}
  titleSx={{
    color: '#1976d2',
    fontSize: '2rem'
  }}
  containerSx={{
    py: 8
  }}
/>
```

### Three Column Layout
```jsx
const manyItems = [
  { text: "Section 1", href: "#s1" },
  { text: "Section 2", href: "#s2" },
  { text: "Section 3", href: "#s3" },
  { text: "Section 4", href: "#s4" },
  { text: "Section 5", href: "#s5" },
  { text: "Section 6", href: "#s6" }
]

<TableOfContents 
  items={manyItems}
  columns={3}
/>
```

## Item Structure

Each item in the `items` array should be an object with the following structure:

```javascript
{
  text: "Display Text",  // The text to show in the table of contents
  href: "#section-id"   // The anchor link (should start with #)
}
```

## Features

### Collapsible Functionality
When `collapsible={true}`, the table of contents can be expanded/collapsed by clicking on the header. The component includes:
- Smooth expand/collapse animation
- Book icon indicator
- Optional section count chip
- Expand/collapse arrow icon
- Reduced padding when collapsed

### Responsive Design
- Automatically adjusts column layout on mobile devices
- Responsive grid system
- Touch-friendly interactive elements

### Accessibility
- Proper semantic markup
- Keyboard navigation support
- Screen reader friendly

## Default Styling

The component comes with default styling that includes:
- Light gray background (`#f8f9fa`)
- Primary theme color for text and icons
- Rounded corners
- Responsive grid layout
- Hover effects on links
- Check circle icons for each item
- Smooth transitions for collapsible functionality

All default styles can be overridden using the provided `sx` props. 