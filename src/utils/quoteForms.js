// Single source of truth for the GHL quote form IDs used across the site.
// Referencing this instead of hardcoding IDs in each component avoids the
// residential and commercial forms ever getting cross-wired.
export const QUOTE_FORMS = {
  residential: {
    formId: 'lHxZlrt3gWUXleLkGg53',
    formName: 'Request a House Cleaning Quote',
    label: 'Residential Cleaning'
  },
  commercial: {
    formId: 'e92364XqqrSKEuAcM3qM',
    formName: 'Request a Commercial Quote',
    label: 'Commercial Cleaning'
  }
}
