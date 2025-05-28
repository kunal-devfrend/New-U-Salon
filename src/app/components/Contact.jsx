"use client";

import { Mail, Phone, MapPin, Clock, Map } from "lucide-react";

const iconMap = {
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  clock: Clock,
  map: Map,
};

// === Static Contact Data ===
const contactData = {
  content: {
    title: "Get in Touch",
    subtitle: "We’d Love to Hear From You",
    description:
      "Whether you’re looking to book an appointment, ask a question, or just say hello, we’re here for you. Reach out to our team and let us pamper you.",
    cta_text: "Book Appointment",
    cta_link: "/book",
  },
  items: [
    {
      id: "contact-phone",
      title: "Phone",
      description: "+91 98765 43210",
      icon: "phone",
    },
    {
      id: "contact-email",
      title: "Email",
      description: "hello@yourfemalesalon.com",
      icon: "mail",
    },
    {
      id: "contact-location",
      title: "Location",
      description: "123 Beauty Lane, Rose Garden, New Delhi, India",
      icon: "map-pin",
    },
    {
      id: "contact-hours",
      title: "Working Hours",
      description: "Mon–Sat: 10 AM – 8 PM\nSun: 11 AM – 6 PM",
      icon: "clock",
    },
    {
      id: "contact-map",
      title: "Find Us on the Map",
      description: "We are easily accessible via Google Maps.",
      icon: "map",
      image_url:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8391775219!2d77.06889754778466!3d28.527252739140235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a964076d69%3A0x3649438b345e31bb!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1683719310671!5m2!1sen!2sin",
    },
  ],
};

export default function ContactPage() {
  const { content, items } = contactData;
  if (!content || !items) return null;

  const mapItem = items.find((item) => item.icon === "map");
  const contactItems = items.filter((item) => item.icon !== "map");

  return (
    <section
      id="contact"
      className="bg-black from-slate-950 via-slate-900 to-slate-950 text-white px-6 md:px-20 pb-20"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-extrabold text-pink-700 drop-shadow">
            {content.title}
          </h2>
          <p className="text-xl text-pink-300">{content.subtitle}</p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item) => {
            const Icon = iconMap[item.icon] || null;
            return (
              <div
                key={item.id}
                className="bg-slate-900 p-6 rounded-2xl shadow-lg"
              >
                {Icon && <Icon className="mb-3 text-pink-500" size={28} />}
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-gray-300 whitespace-pre-line text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <form className="bg-slate-900 p-8 rounded-2xl space-y-6 shadow-xl">
            <h3 className="text-2xl font-semibold text-pink-500 mb-2">
              Send Us a Message
            </h3>
            <div>
              <label className="block text-sm mb-1 text-slate-300">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-gray-400"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-slate-300">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-gray-400"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-slate-300">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full p-3 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-gray-400"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>

          {/* Embedded Google Map */}
          {mapItem?.image_url && (
            <div className="rounded-2xl overflow-hidden border-4 shadow-lg">
              <iframe
                src={mapItem.image_url}
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[450px]"
              ></iframe>
            </div>
          )}
        </div>

        {/* Optional CTA */}
        {content.cta_text && content.cta_link && (
          <div className="text-center mt-10">
            <a
              href={content.cta_link}
              className="inline-block px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition"
            >
              {content.cta_text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
