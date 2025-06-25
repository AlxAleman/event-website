// src/components/EventHotel.jsx
import { useState } from "react";

export default function EventHotel({ hotel }) {
  const [showDetails, setShowDetails] = useState(false);

  if (!hotel) return null;

  return (
    <section className="my-20 max-w-6xl mx-auto w-full px-2">
      <h2 className="text-white text-3xl md:text-4xl font-black mb-8 tracking-widest">HOTEL BOOKING</h2>
      <div className="mb-8 text-right">
        <button
          className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold rounded-full px-7 py-2 shadow-lg transition"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {showDetails && (
        <div className="grid md:grid-cols-2 gap-8">
          {hotel.packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-[#151a3b]/90 rounded-2xl p-0 shadow-2xl border border-yellow-200/20 overflow-hidden flex flex-col"
              style={{ minHeight: 560 }}
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-100 object-cover object-center"
                style={{ filter: "contrast(1.08)" }}
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-extrabold text-2xl mb-2 tracking-wide text-yellow-400 drop-shadow">
                  {pkg.title}
                </h3>
                <ul className="mb-4 text-gray-100/90 font-medium text-base pl-5 list-disc">
                  {pkg.benefits.map((b, i) => <li key={i} className="mb-1">{b}</li>)}
                </ul>
                <div className="flex-1 flex flex-col justify-end">
                  <span className="font-black text-xl text-white mb-4">{pkg.price}</span>
                  <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-full px-5 py-2 text-sm shadow">
                    MORE INFO
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
