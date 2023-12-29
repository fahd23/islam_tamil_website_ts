// components/Footer.js
import Link from "next/link";
import React from "react";

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com", icon: null },
  { name: "Facebook", url: "https://facebook.com", icon: null },
  { name: "WhatsApp", url: "https://wa.me/your-whatsapp-number", icon: null },
  { name: "YouTube", url: "https://www.youtube.com/your-channel", icon: null },
  { name: "Telegram", url: "https://t.me/your-telegram", icon: null },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/your-soundcloud",
    icon: null,
  },
  { name: "Mixlr", url: "https://mixlr.com/your-mixlr", icon: null },
];

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-primary-foreground text-white p-4 md:p-8 text-center">
      {/* Navigation Links */}
      <nav className="mb-4 md:mb-6">
        <Link
          href="/"
          className="text-gray-300 hover:text-gray-400 mx-2 md:mx-3"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-300 hover:text-gray-400 mx-2 md:mx-3"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-gray-300 hover:text-gray-400 mx-2 md:mx-3"
        >
          Contact
        </Link>
      </nav>

      {/* Social Media Links with Icons or Names */}
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center space-x-2 md:space-x-4">
        {socialLinks.map(({ name, url, icon }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 mx-1 md:mx-2"
          >
            {icon ? icon : name}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="mt-4 md:mt-8 text-sm">
        &copy; 2023 Islam Tamil. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
