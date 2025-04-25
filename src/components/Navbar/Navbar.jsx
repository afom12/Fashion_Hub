import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingBag, FiUser, FiSearch } from 'react-icons/fi';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button 
          className={styles.menuButton}
          onClick={() => setIsOpen(true)}
        >
          <FiMenu />
        </button>
        
        <Link to="/home" className={styles.logo}>
          FASHION<span>HUB</span>
        </Link>
        
        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <button 
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>
          
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className={styles.icons}>
          <button className={styles.iconButton}>
            <FiSearch />
          </button>
          <button className={styles.iconButton}>
            <FiUser />
          </button>
          <button className={styles.iconButton}>
            <FiShoppingBag />
            <span className={styles.cartCount}>0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;