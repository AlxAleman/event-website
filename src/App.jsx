import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventPage from "./pages/events/EventPage";

function App() {
  const [showAppLoader, setShowAppLoader] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Verificar si ya se cargó antes en esta sesión del navegador
    const hasLoadedBefore = sessionStorage.getItem('evo-app-loaded');
    
    if (hasLoadedBefore) {
      // Ya se cargó antes en esta sesión, no mostrar loading
      setShowAppLoader(false);
      setIsFirstLoad(false);
    } else {
      // Primera vez en esta sesión, mostrar loading
      const loadingTimer = setTimeout(() => {
        setShowAppLoader(false);
        setIsFirstLoad(false);
        // Marcar como cargado en esta sesión
        sessionStorage.setItem('evo-app-loaded', 'true');
      }, 3000); // 3 segundos para coincidir con tu timing actual
      
      return () => clearTimeout(loadingTimer);
    }
  }, []);

  return (
    <>
      {/* Loader solo en primera carga de la aplicación */}
      {isFirstLoad && <Loader show={showAppLoader} />}
      
      {/* App principal - se muestra cuando termina el loading inicial */}
      <div className={isFirstLoad && showAppLoader ? 'hidden' : 'block'}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage isFirstLoad={isFirstLoad} />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:slug" element={<EventPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;