import React from "react";

const testimonials = [
  {
    quote: "IKS Nigeria delivered exceptional service and exceeded our expectations. Highly recommended!",
    author: "Jane Doe, CEO of Acme Corp",
    image: "/images/Testimony1.png",
    note: "Jane was impressed by our professionalism and timely delivery."
  },
  {
    quote: "Professional, reliable, and innovative. Our project was a great success thanks to IKS Nigeria.",
    author: "John Smith, Project Manager",
    image: "/images/Testimony2.png",
    note: "John appreciated our innovative approach and support throughout the project."
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Client Testimonials</h2>
      <div className="space-y-8 max-w-2xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial bg-white p-6 rounded shadow flex flex-col items-center">
            <img src={t.image} alt={t.author} className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-300" />
            <p className="text-lg italic mb-2 text-center">"{t.quote}"</p>
            <span className="block text-sm font-semibold text-gray-700 mb-2">- {t.author}</span>
            <span className="block text-xs text-gray-500 text-center">{t.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
