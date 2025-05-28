"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Optional: use your custom or basic button if shadcn isn't available
export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-md text-base font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Hero3() {
  const content = {
    title: "Discover Your New Look",
    subtitle: "Luxury Hair & Beauty Services in the Heart of the City",
    description:
      "At New U Salon, we redefine beauty with expert stylists, premium products, and personalized care. Whether it’s a bold transformation or a quick touch-up, step into a space where style meets sophistication.",
    image_url: "", // Leave empty or add if needed
    background_url: "https://wallpaperaccess.com/full/2090318.jpg",
    cta_text: "Book Your Appointment",
    cta_link: "/booking",
  };

  const {
    title,
    subtitle,
    description,
    image_url,
    background_url,
    cta_text,
    cta_link,
  } = content;

  return (
    <section className="relative w-full min-h-screen text-white py-20 px-6 md:px-12 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      {background_url && (
        <div className="absolute inset-0 z-0">
          <Image
            src={background_url}
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      <div className="relative z-10 container max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <motion.div
          className="flex-1 max-w-xl text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {title && (
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 font-serif">
              {title}
            </h1>
          )}
          {subtitle && (
            <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
              {description}
            </p>
          )}

          {cta_text && cta_link && (
            <Link href={cta_link}>
              <Button className="bg-white text-black hover:bg-gray-200 transition">
                {cta_text}
              </Button>
            </Link>
          )}
        </motion.div>

        {/* Right: Optional Image */}
        {image_url && (
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={image_url}
              alt="Hero Image"
              width={400}
              height={400}
              className="rounded-lg shadow-2xl object-contain"
              priority
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
