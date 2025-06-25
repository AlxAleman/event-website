import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroBanner from "../components/HeroBanner";
import EventsBar from "../components/EventsBar";
import NewsSection from "../components/NewsSection";
import LatestVideos from "../components/LatestVideos";
import AboutSection from "../components/AboutSection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";

function HomePage({ isFirstLoad = false }) {
  const [contentVisible, setContentVisible] = useState(!isFirstLoad);

  useEffect(() => {
    if (isFirstLoad) {
      // Si es primera carga, esperar un poco más antes de mostrar contenido
      const timer = setTimeout(() => setContentVisible(true), 500);
      return () => clearTimeout(timer);
    } else {
      // Si no es primera carga, mostrar contenido inmediatamente
      setContentVisible(true);
    }
  }, [isFirstLoad]);

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <HeroBanner />
      <div id="eventsbar-sentinel" style={{ height: 1 }}></div>
      <EventsBar />

      <main className="pt-20">
        <AnimatePresence>
          {contentVisible && (
            <motion.div
              key="main-content"
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              transition={{ 
                duration: isFirstLoad ? 0.7 : 0.3, 
                ease: "easeOut",
                delay: isFirstLoad ? 0.2 : 0
              }}
            >
              <NewsSection />
              <LatestVideos />
              <AboutSection />
              <PartnersSection />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default HomePage;