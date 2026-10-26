import HeroSection from "../components/HeroSection";
import BrandsBanner from "../components/BrandsBanner";
import ProductGrid from "../components/ProductGrid";
import NewsletterBanner from "../components/NewsletterBanner";
import { useHomeProducts } from "../hooks/UseHomeProducts";


function HomePage() {
  const {
    loading,
    error,
    newArrivalsList,
    topSellingList,
    showAllNew,
    showAllTop,
    toggleNew,
    toggleTop,
    goToProduct,
  } = useHomeProducts();

  if (loading) return <div className="p-20 text-center">Loading products...</div>;
  if (error) return <div className="p-20 text-center text-red-500">{error}</div>;

  return (
    <main className="bg-white">
      <HeroSection />
      <BrandsBanner />
      
      <ProductGrid 
        title="NEW ARRIVALS" 
        products={newArrivalsList} 
        showAll={showAllNew} 
        onToggleShowAll={toggleNew} 
        onProductClick={goToProduct}
      />

      <ProductGrid 
        title="TOP SELLING" 
        products={topSellingList} 
        showAll={showAllTop} 
        onToggleShowAll={toggleTop} 
        onProductClick={goToProduct}
      />

      <NewsletterBanner />
    </main>
  );
}

export default HomePage;