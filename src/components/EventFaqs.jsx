// src/components/EventFaqs.jsx
export default function EventFaqs({ faqs }) {
  return (
    <section className="relative py-16 px-4 md:px-12 mx-auto max-w-6xl mt-10">
      <h2 className="text-5xl md:text-6xl font-extrabold tracking-wider text-[#e0e6f9] mb-12 text-left opacity-80 select-none pointer-events-none"
          style={{ textShadow: "0 3px 32px #c4d8ff" }}>
        FAQS
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="bg-white/90 rounded-lg shadow px-6 py-4 cursor-pointer">
            <summary className="font-bold text-lg text-black">{faq.question}</summary>
            <div className="mt-2 text-gray-800 text-base">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
