import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import video1 from './assets/video1.mp4'
import video2 from './assets/video2.mp4'
import FeatureSection from "./components/FeatureSection";
import WorkflowSection from "./components/WorkflowSection";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <WorkflowSection />
      <Pricing />
      <Testimonials />
      <Footer />
      </div>
    </>

  )
}