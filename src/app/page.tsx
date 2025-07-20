// import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import Carousel from "./components/Carousel";
import CustomerReviews from "./components/CustomerReviews";
import CustomDesign from "./components/CustomDesign";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white antialiased bg-grid-white/[0.02]">
      {/* <Navbar /> */}
      <HeroSection />
      <Products />
      <Carousel />
      <CustomerReviews />
      <CustomDesign />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
