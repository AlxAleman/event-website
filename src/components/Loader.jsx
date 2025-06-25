import { useEffect, useState } from "react";

function Loader({ show }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (!show) setHide(true);
  }, [show]);

  return (
    <div
      className={`
        fixed inset-0 flex items-center justify-center bg-gray-950 z-50
        transition-opacity duration-700
        ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
      style={{ willChange: "opacity" }}
    >
      {/* SVG loader igual que antes */}
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-28 w-28 text-white logo-shine-green animate-pulse"
      >
        <title>Astra</title>
        <path
          fill="currentColor"
          d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m-.1452 5.3226 1.4517 2.9032c-1.6452 3.3194-3.2904 6.6484-4.9355 9.9677H5.758c2.0323-4.287 4.0646-8.5838 6.0968-12.871m2.7097 5.3226c1.229 2.516 2.4484 5.0322 3.6774 7.5483h-2.8064c-.3194-.7451-.6484-1.4806-.9678-2.2258H12l.0484-.0967c.842-1.742 1.6742-3.4839 2.5161-5.2258"
        />
      </svg>
    </div>
  );
}

export default Loader;
