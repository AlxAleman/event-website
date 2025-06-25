import { FaYoutube, FaTwitch, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra menú al cambiar de ruta
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup al desmontar
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const menuLinks = [
    { to: "/", label: "Home", active: true },
    { to: "/events", label: "Events", active: true },
    { to: "#", label: "News", active: false },
    { to: "#", label: "Awards", active: false },
    { to: "#", label: "About", active: false },
  ];

  const socials = [
    { href: "https://www.youtube.com", icon: <FaYoutube />, label: "YouTube" },
    { href: "https://www.twitch.tv", icon: <FaTwitch />, label: "Twitch" },
    { href: "https://www.facebook.com", icon: <FaFacebookF />, label: "Facebook" },
    { href: "https://twitter.com", icon: <FaXTwitter />, label: "X (Twitter)" },
  ];

  const handleInactiveClick = (e, active) => {
    if (!active) {
      e.preventDefault();
      alert("Coming Soon! 🚀");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111634]/70 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src="/alex-logo.svg" alt="EVO Logo" className="h-6 sm:h-8 cursor-pointer" />
            <span
              className={`font-extrabold tracking-widest text-base sm:text-lg transition-colors duration-300 ${
                scrolled ? "text-white" : "text-yellow-400"
              }`}
            >
              EVO
            </span>
          </Link>
        </div>

        {/* Hamburguesa solo en móvil */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 sm:w-10 sm:h-10 z-50 relative"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span 
            className={`block w-5 sm:w-7 h-0.5 sm:h-1 rounded-full bg-yellow-400 mb-1 transition-all duration-300 ${
              open ? "rotate-45 translate-y-1.5 sm:translate-y-2" : ""
            }`}
          />
          <span 
            className={`block w-5 sm:w-7 h-0.5 sm:h-1 rounded-full bg-yellow-400 mb-1 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span 
            className={`block w-5 sm:w-7 h-0.5 sm:h-1 rounded-full bg-yellow-400 transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-1.5 sm:-translate-y-2" : ""
            }`}
          />
        </button>

        {/* Menú desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className={`flex gap-6 lg:gap-8 items-center font-medium transition-colors duration-300 ${
            scrolled ? "text-white" : "text-yellow-400"
          }`}>
            {menuLinks.map(link => (
              <li key={link.label}>
                {link.active ? (
                  <Link 
                    to={link.to} 
                    className={`hover:text-yellow-300 transition-colors duration-200 ${
                      location.pathname === link.to ? "text-yellow-300" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    onClick={(e) => handleInactiveClick(e, link.active)}
                    className="opacity-50 hover:opacity-70 transition-opacity duration-200 cursor-not-allowed relative group"
                  >
                    {link.label}
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      Coming Soon
                    </span>
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Social icons desktop */}
          <div className="flex gap-2 lg:gap-3 ml-4">
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  scrolled ? "text-white opacity-80" : "text-yellow-400 opacity-80"
                } hover:opacity-100 text-lg lg:text-xl transition-all duration-200 hover:scale-110`}
                title={label}
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay del menú mobile */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black/70 z-40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        {/* Drawer del menú mobile */}
        <aside
          className={`absolute top-0 right-0 h-full w-72 max-w-[90vw] bg-white shadow-2xl p-6 sm:p-8 flex flex-col justify-center gap-6
            transform transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={e => e.stopPropagation()}
        >
          {/* Logo en el menú móvil */}
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <img src="/alex-logo.svg" alt="EVO Logo" className="h-6" />
            <span className="font-extrabold tracking-widest text-sm text-[#111634]">EVO</span>
          </div>

          {/* Menu items */}
          <ul className="flex flex-col gap-4 sm:gap-5 font-bold text-lg text-[#111634] mt-8">
            {menuLinks.map(link => (
              <li key={link.label}>
                {link.active ? (
                  <Link
                    to={link.to}
                    className={`hover:text-yellow-400 transition-colors duration-200 block py-2 ${
                      location.pathname === link.to ? "text-yellow-400" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    onClick={(e) => handleInactiveClick(e, link.active)}
                    className="opacity-50 hover:opacity-70 transition-opacity duration-200 text-left py-2 flex items-center gap-2"
                  >
                    {link.label}
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Soon</span>
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Social icons mobile */}
          <div className="flex gap-3 sm:gap-4 mt-6 justify-center">
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 text-xl sm:text-2xl hover:text-[#111634] transition-colors duration-200 hover:scale-110"
                title={label}
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Botón de cierre en la parte inferior */}
          <button
            onClick={() => setOpen(false)}
            className="mt-8 bg-gray-100 hover:bg-gray-200 text-[#111634] font-medium py-3 px-6 rounded-full transition-colors duration-200 text-center"
          >
            Close Menu
          </button>
        </aside>
      </div>
    </nav>
  );
}

export default Navbar;