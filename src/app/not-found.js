"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-center px-4 py-10">
      <Image
        src="https://instagram.fbho4-1.fna.fbcdn.net/v/t39.30808-6/467154818_18020197808560959_7228355550863747789_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjU2M3g1NjMuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fbho4-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QF8ZZfhRcyZusWGtwQsQxrqcrRKH74Q2oyQ--PxftJEcW5aQcEKIor5Oqhbw47hlxWYrHgiuQZlTOAJ2-5Smr87&_nc_ohc=xfrQZj9tIJIQ7kNvwG_pte6&_nc_gid=aDCEr8GHHrbeuErF7EzNtQ&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzI4NDE0NDI1MjM3OTY0MjMwNw%3D%3D.3-ccb7-5&oh=00_AfKAdu1pwj7wsfd1TfcQYV_yPqfkM533tC89dAhheb_CWQ&oe=683CF026&_nc_sid=7a9f4b"
        alt="404 Not Found"
        width={400}
        height={400}
        className="mb-8 rounded-lg shadow-xl"
      />

      <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">
        Oops! Page Not Found
      </h1>

      <p className="text-zinc-300 mb-6 text-lg max-w-xl">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full transition"
      >
        Go to Home
      </Link>
    </section>
  );
}
