const partners = [
    { name: "Beats by Dre", logo: "/partners/beatsbydre.svg" },
    { name: "Canva", logo: "/partners/canva.svg" },
    { name: "CheckIO", logo: "/partners/checkio.svg" },
    { name: "Google Fit", logo: "/partners/googlefit.svg" },
    { name: "Lapce", logo: "/partners/lapce.svg" },
    { name: "Tindie", logo: "/partners/tindie.svg" },
];



function PartnersSection() {
    return (
        <section className="bg-gradient-to-b from-blue-950 to-gray-900 py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-10 tracking-widest uppercase text-left">
                    Partners
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center bg-gray-950/80 p-8 rounded-2xl border border-blue-900 mb-8">
                    {partners.map((partner, idx) => (
                        <div key={idx} className="flex justify-center items-center h-16">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-10 w-auto max-w-[120px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300 logo-shine"
                                title={partner.name}
                            />

                        </div>
                    ))}
                </div>
                <div className="flex justify-end">
                    <a
                        href="#"
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-2 rounded-full flex items-center gap-2 shadow transition button-glow"
                    >
                        WORK WITH US <span className="text-lg">➔</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default PartnersSection;
