import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import Footer from '../../components/Footer/Footer';
import '../../styles/main.scss';

const Home = () => {
  useEffect(() => {
    document.title = "FashionHub | Modern Clothing";
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <main>
        <section className="section">
          <h2 className="section-title">New Arrivals</h2>
          <ProductGrid category="new" />
        </section>
        
        <section className="section">
          <h2 className="section-title">Trending Now</h2>
          <ProductGrid category="trending" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;