import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>FASHIONHUB</h3>
          <p className={styles.footerText}>
            Discover the latest trends in fashion with our curated collection of clothing and accessories.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}><FiInstagram /></a>
            <a href="#" className={styles.socialIcon}><FiTwitter /></a>
            <a href="#" className={styles.socialIcon}><FiFacebook /></a>
            <a href="#" className={styles.socialIcon}><FiYoutube /></a>
          </div>
        </div>
        
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>Shop</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Men's Clothing</a></li>
            <li><a href="#">Women's Clothing</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Sale</a></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>Help</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>Contact</h4>
          <ul className={styles.footerLinks}>
            <li>123 Fashion Street</li>
            <li>New York, NY 10001</li>
            <li>info@fashionhub.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} FASHIONHUB. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;