import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.scss';

const ProductGrid = ({ category }) => {
  // Updated mock data with correct image paths
  const products = {
    new: [
      { id: 1, name: 'Floral Summer Dress', price: 59.99, image: 'dress1.jpg', isNew: true },
      { id: 2, name: 'Denim Jacket', price: 79.99, image: 'jacket1.jpg', isNew: true },
      { id: 3, name: 'Striped T-Shirt', price: 29.99, image: 'tshirt1.jpg', isNew: true },
      { id: 4, name: 'Linen Pants', price: 49.99, image: 'pants1.jpg', isNew: true },
    ],
    trending: [
      { id: 5, name: 'Leather Crossbody Bag', price: 89.99, image: 'bag1.jpg', isTrending: true },
      { id: 6, name: 'White Sneakers', price: 69.99, image: 'shoes1.jpg', isTrending: true },
      { id: 7, name: 'Oversized Blazer', price: 99.99, image: 'blazer1.jpg', isTrending: true },
      { id: 8, name: 'Silk Scarf', price: 39.99, image: 'scarf1.jpg', isTrending: true },
    ]
  };

  return (
    <div className={styles.productGrid}>
      {products[category].map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;