import { useState } from 'react';
import { FiHeart, FiShoppingBag, FiEye } from 'react-icons/fi';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Helper function to get image path
  const getImagePath = (imageName) => {
    return `/images/products/${imageName}`;
  };

  return (
    <div 
      className={styles.productCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <img 
          src={getImagePath(product.image)} 
          alt={product.name} 
          className={styles.productImage}
          onError={(e) => {
            e.target.src = '/images/products/placeholder.jpg'; // fallback image
          }}
        />
        
        {product.isNew && <span className={styles.badge}>New</span>}
        {product.isTrending && <span className={styles.badge}>Trending</span>}
        
        <div className={`${styles.actions} ${isHovered ? styles.visible : ''}`}>
          <button 
            className={`${styles.actionButton} ${isWishlisted ? styles.active : ''}`}
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <FiHeart />
          </button>
          <button className={styles.actionButton}>
            <FiShoppingBag />
          </button>
          <button className={styles.actionButton}>
            <FiEye />
          </button>
        </div>
      </div>
      
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;