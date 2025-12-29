# WordPress React Frontend

A modern React application that connects to your WordPress site via the REST API, featuring RankMath SEO integration and a beautiful, responsive design.

## Features

- 🚀 **Modern React with Vite** - Fast development and build times
- 🎨 **Material-UI Components** - Beautiful, accessible UI components
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🔍 **SEO Optimized** - Built-in SEO with RankMath integration
- ⚡ **Performance Focused** - React Query for efficient data fetching
- 🛡️ **Secure** - DOMPurify for content sanitization
- 📊 **Analytics Ready** - Google Analytics integration ready

## WordPress Integration

This app connects to your WordPress site using:
- **WordPress REST API** for content delivery
- **RankMath SEO Plugin** for advanced SEO features
- **Featured Images** and embedded media
- **Categories and Tags** for content organization
- **Custom Post Types** support

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env` file in the project root:

```env
# WordPress Configuration
REACT_APP_WORDPRESS_URL=https://your-wordpress-site.com
REACT_APP_SITE_URL=https://your-react-site.com

# SEO Configuration
REACT_APP_SITE_NAME=Gem City Cleaning Tools
REACT_APP_DEFAULT_TITLE=Professional Cleaning Services
REACT_APP_DEFAULT_DESCRIPTION=Professional cleaning services and tools for residential and commercial cleaning.

# Social Media
REACT_APP_TWITTER_HANDLE=@YourTwitterHandle
REACT_APP_FACEBOOK_URL=https://facebook.com/yourpage
REACT_APP_INSTAGRAM_URL=https://instagram.com/yourpage

# Contact Information
REACT_APP_PHONE=(555) 123-4567
REACT_APP_EMAIL=info@gemcitycleaningtools.com
REACT_APP_ADDRESS=Tipp City, Ohio 45371
```

### 3. WordPress Setup

#### Enable WordPress REST API
The WordPress REST API is enabled by default in WordPress 4.7+. No additional setup required.

#### Install RankMath SEO Plugin (Recommended)
1. Install and activate the RankMath SEO plugin
2. Enable the REST API in RankMath settings
3. The app will automatically fetch SEO data for enhanced meta tags

#### Optional Plugins
- **REST API Menus** - For dynamic navigation menus
- **Custom Post Types** - If you have custom content types

### 4. Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   └── LoadingSpinner.jsx
├── pages/              # Page components
│   ├── HomePage.jsx    # Landing page
│   ├── BlogPage.jsx    # Blog listing
│   ├── PostPage.jsx    # Individual blog post
│   ├── PageView.jsx    # WordPress pages
│   └── NotFound.jsx    # 404 error page
├── hooks/              # Custom React hooks
│   └── useWordPress.js # WordPress API hooks
├── services/           # API services
│   └── wordpressApi.js # WordPress REST API client
├── utils/              # Utility functions
│   └── seo.js         # SEO helper functions
└── styles/             # CSS styles
    └── index.css      # Global styles
```

## WordPress REST API Endpoints

The app uses these WordPress REST API endpoints:

- `GET /wp-json/wp/v2/posts` - Blog posts
- `GET /wp-json/wp/v2/pages` - WordPress pages
- `GET /wp-json/wp/v2/categories` - Post categories
- `GET /wp-json/wp/v2/tags` - Post tags
- `GET /wp-json/wp/v2/media` - Media files
- `GET /wp-json/rankmath/v1/seo-data` - RankMath SEO data

## SEO Features

### Built-in SEO Optimization
- Dynamic meta titles and descriptions
- Open Graph and Twitter Card tags
- Structured data (JSON-LD) for articles and business
- Canonical URLs
- Image alt text and captions
- Reading time calculation

### RankMath Integration
When RankMath is installed, the app automatically:
- Fetches SEO titles and descriptions
- Uses focus keywords for meta tags
- Integrates with RankMath's schema markup
- Respects SEO settings from WordPress admin

## Performance Features

- **React Query** for intelligent caching and data fetching
- **Code splitting** with React.lazy()
- **Image optimization** with responsive loading
- **Prefetching** for better user experience
- **Service worker** ready for offline functionality

## Customization

### Styling
The app uses Material-UI with a custom theme. Modify the theme in `src/App.jsx`:

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32', // Your brand color
    },
    // ... other theme options
  },
})
```

### Adding Custom Post Types
To add support for custom post types, extend the WordPress API service:

```javascript
// In src/services/wordpressApi.js
async getCustomPosts(postType, params = {}) {
  const response = await this.api.get(`/${postType}`, { params })
  return response.data
}
```

### Custom Hooks
Create custom hooks in `src/hooks/` for specific functionality:

```javascript
// Example: useServices.js for a services custom post type
export const useServices = (params = {}) => {
  return useCustomPosts('services', params)
}
```

## Deployment

### Environment Variables for Production
Set these environment variables in your hosting platform:

- `REACT_APP_WORDPRESS_URL` - Your WordPress site URL
- `REACT_APP_SITE_URL` - Your React app URL

### Recommended Hosting
- **Vercel** - Automatic deployments from Git
- **Netlify** - JAMstack focused hosting
- **AWS S3 + CloudFront** - Scalable and cost-effective

### WordPress CORS Setup
If you encounter CORS issues, add this to your WordPress `functions.php`:

```php
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: https://your-react-site.com");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}
add_action('init','add_cors_http_header');
```

## Troubleshooting

### Common Issues

1. **CORS Errors**: Configure CORS in WordPress or use a proxy
2. **Missing Posts**: Check WordPress REST API is enabled
3. **SEO Data Not Loading**: Verify RankMath plugin is installed and REST API is enabled
4. **Images Not Loading**: Check media URLs and CORS settings

### Development Tips

- Use browser dev tools to inspect WordPress API responses
- Test API endpoints directly in browser: `your-site.com/wp-json/wp/v2/posts`
- Use React Developer Tools for debugging components

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
- Check the WordPress REST API documentation
- Review Material-UI component documentation
- Open an issue in this repository 