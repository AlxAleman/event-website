//src\components\Footer.jsx

import { FaYoutube, FaTwitch, FaFacebookF, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="relative bg-[#181d43] text-white border-t-4 border-yellow-400 w-full overflow-hidden">
      {/* Contenido interno con márgenes responsivos */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        
        {/* Logo y nombre - En móvil centrado, en desktop alineado a la izquierda */}
        <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start gap-3 sm:gap-4">
          <img src="/alex-logo.svg" alt="Logo" className="h-8 sm:h-10 mb-1 sm:mb-2" />
          <div className="font-extrabold text-lg sm:text-xl tracking-widest text-yellow-400">EVO</div>
          <div className="text-xs text-white/60 mt-1 sm:mt-2 text-center sm:text-left">
            © {new Date().getFullYear()} EVO. All Rights Reserved.
          </div>
        </div>

        {/* Events - Centrado en móvil */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-yellow-400">Events</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/events/japan" className="hover:text-yellow-400 transition-colors duration-200">
                EVO Japan
              </a>
            </li>
            <li>
              <a href="/events/france" className="hover:text-yellow-400 transition-colors duration-200">
                EVO France
              </a>
            </li>
            <li>
              <a href="/events/singapore" className="hover:text-yellow-400 transition-colors duration-200">
                EVO Singapore
              </a>
            </li>
            <li>
              <a href="/events/usa" className="hover:text-yellow-400 transition-colors duration-200">
                EVO USA
              </a>
            </li>
          </ul>
        </div>

        {/* About - Centrado en móvil */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-yellow-400">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                About EVO
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                Community
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter + redes - Span completo en móvil y tablet */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-yellow-400 text-center sm:text-left">
            The Latest from EVO
          </h3>
          
          {/* Newsletter form - Stack vertical en móvil, horizontal en desktop */}
          <form className="flex flex-col sm:flex-row gap-2 mb-4 sm:mb-6">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/10 border border-white/30 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-white placeholder-white/60 backdrop-blur text-sm transition-all duration-200"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow transition-colors duration-200 text-sm whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>

          {/* Social media icons - Centrados en móvil */}
          <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
            <a 
              href="#" 
              className="bg-white/10 hover:bg-yellow-400 hover:text-black transition-all duration-200 p-2 sm:p-3 rounded-full text-lg sm:text-xl flex items-center justify-center shadow border border-white/20 hover:scale-105" 
              title="YouTube"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a 
              href="#" 
              className="bg-white/10 hover:bg-yellow-400 hover:text-black transition-all duration-200 p-2 sm:p-3 rounded-full text-lg sm:text-xl flex items-center justify-center shadow border border-white/20 hover:scale-105" 
              title="Twitch"
              aria-label="Twitch"
            >
              <FaTwitch />
            </a>
            <a 
              href="#" 
              className="bg-white/10 hover:bg-yellow-400 hover:text-black transition-all duration-200 p-2 sm:p-3 rounded-full text-lg sm:text-xl flex items-center justify-center shadow border border-white/20 hover:scale-105" 
              title="Facebook"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="#" 
              className="bg-white/10 hover:bg-yellow-400 hover:text-black transition-all duration-200 p-2 sm:p-3 rounded-full text-lg sm:text-xl flex items-center justify-center shadow border border-white/20 hover:scale-105" 
              title="X (Twitter)"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Políticas - Responsive spacing y layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 justify-center border-t border-white/10 pt-4 sm:pt-6 text-xs text-white/50">
        <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
          Code of Conduct
        </a>
        <span className="hidden sm:inline text-white/30">•</span>
        <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
          Privacy Policy
        </a>
        <span className="hidden sm:inline text-white/30">•</span>
        <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
          Terms of Service
        </a>
        <span className="hidden sm:inline text-white/30">•</span>
        <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
          Manage Cookies
        </a>
      </div>
    </footer>
  );
}

export default Footer;