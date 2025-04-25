import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import styles from './Welcome.module.scss';

const Welcome = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={styles.welcomeContainer}>
      {/* Animated background elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>

      {/* Main content */}
      <motion.div 
        className={styles.content}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={textVariants} className={styles.brandTag}>
          NEW COLLECTION 2023
        </motion.div>
        
        <motion.h1 variants={textVariants} className={styles.mainTitle}>
          <span className={styles.titleLine1}>ELEVATE YOUR</span>
          <span className={styles.titleLine2}>STYLE ESSENCE</span>
        </motion.h1>
        
        <motion.p variants={textVariants} className={styles.subtitle}>
          Discover curated fashion that speaks to your individuality
        </motion.p>
        
        <motion.div variants={textVariants}>
          <Link to="/home" className={styles.enterButton}>
            EXPLORE NOW
            <FiArrowRight className={styles.arrowIcon} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating fashion items */}
      <div className={styles.floatingItems}>
        <div className={styles.item1}></div>
        <div className={styles.item2}></div>
        <div className={styles.item3}></div>
      </div>
    </div>
  );
};

export default Welcome;