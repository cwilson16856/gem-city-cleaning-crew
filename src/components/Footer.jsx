import React from 'react'
import { Link } from 'react-router-dom'
import {
  Phone,
  Email,
  Schedule
} from '@mui/icons-material'
import styles from '../styles/components/Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const serviceAreas = [
    'Dayton', 'Kettering', 'Oakwood', 'Centerville',
    'Miamisburg', 'Springboro', 'Huber Heights', 'Riverside',
    'Xenia', 'Beavercreek', 'Fairborn', 'Yellow Springs',
    'Tipp City', 'Bellbrook', 'Vandalia', 'Troy',
    'Springfield', 'Franklin', 'Middletown', 'Carlisle'
  ]

  const services = [
    { name: 'Residential Cleaning', link: '/residential' },
    { name: 'Recurring Cleaning', link: '/recurring-cleaning-service' },
    { name: 'Deep Cleaning', link: '/deep-cleaning' },
    { name: 'Move-In/Out Cleaning', link: '/move-in-out-cleaning' },
    { name: 'Commercial Cleaning', link: '/commercial' },
    { name: 'Office Cleaning', link: '/commercial' },
    { name: 'Blog', link: '/blog' }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainGrid}>
          {/* Company Info */}
          <div>
            <div className={styles.companyInfoSection}>
              <div className={styles.logoContainer}>
                <div className={styles.logoImageContainer}>
                  <img
                    src="/logo-header.png"
                    alt="Gem City Cleaning Crew Logo"
                    width="40"
                    height="40"
                    className={styles.logoImage}
                  />
                </div>
                <div className={styles.logoTextContainer}>
                  <h6 className={styles.companyName}>
                    Gem City Cleaning Crew
                  </h6>
                  <p className={styles.companyTagline}>
                    We Make Life Easier
                  </p>
                </div>
              </div>
              
              <p className={styles.companyDescription}>
                Professional residential and commercial cleaning services in the Dayton area since 2017. 
                We provide reliable, thorough cleaning services that make your life easier.
              </p>
              
              <p className={styles.companyCredentials}>
                Licensed • Insured • Satisfaction Guaranteed
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h6 className={styles.sectionTitle}>
              Contact Information
            </h6>
            
            <div className={styles.contactStack}>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <div>
                  <p className={styles.contactLabel}>
                    Phone
                  </p>
                  <p 
                    className={styles.contactValue}
                    onClick={() => window.open('tel:937-892-4157')}
                  >
                    937-892-4157
                  </p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <Email className={styles.contactIcon} />
                <div>
                  <p className={styles.contactLabel}>
                    Email
                  </p>
                  <p 
                    className={styles.contactValue}
                    onClick={() => window.open('mailto:info@gemcitycleaningcrew.com')}
                  >
                    info@gemcitycleaningcrew.com
                  </p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <Schedule className={styles.contactIcon} />
                <div>
                  <p className={styles.contactLabel}>
                    Business Hours
                  </p>
                  <p className={styles.contactValue}>
                    Monday 8:00 AM - 5:00 PM<br />
                    Tuesday 8:00 AM - 5:00 PM<br />
                    Wednesday 8:00 AM - 5:00 PM<br />
                    Thursday 8:00 AM - 5:00 PM<br />
                    Friday 8:00 AM - 5:00 PM<br />
                    Saturday Closed<br />
                    Sunday Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Areas */}
          <div>
            <h6 className={styles.sectionTitle}>
              Our Services
            </h6>
            
            <div className={styles.servicesSection}>
              <div className={styles.servicesList}>
                {services.map((service, index) => (
                  service.link ? (
                    <Link 
                      key={index} 
                      to={service.link} 
                      className={styles.serviceItemLink}
                    >
                      {service.name}
                    </Link>
                  ) : (
                    <p key={index} className={styles.serviceItem}>
                      {service.name}
                    </p>
                  )
                ))}
              </div>
            </div>

            <h6 className={styles.sectionTitle}>
              Service Areas
            </h6>
            
            <div className={styles.serviceAreasContainer}>
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className={styles.serviceAreaChip}
                >
                  {area}
                </span>
              ))}
            </div>
            
            <p className={styles.additionalAreasNote}>
              Proudly serving Dayton and communities within 30+ miles — <Link to="/locations" className={styles.serviceItemLink}>view all service areas</Link>
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <hr className={styles.divider} />
        
        <div className={styles.bottomFooter}>
          <p className={styles.bottomFooterText}>
            © {currentYear} Gem City Cleaning Crew LLC. All rights reserved. | Established 2017
          </p>
          <p className={styles.bottomFooterText}>
            Proudly serving the Dayton area
          </p>
        </div>
      </div>
    </footer> 
  )
}

export default Footer 