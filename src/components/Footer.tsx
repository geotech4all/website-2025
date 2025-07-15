import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, MessageCircle, YoutubeIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/geotech4all", icon: "linkedin" },
    { name: "X (Twitter)", url: "https://x.com/Geotech4All", icon: "x" },
    { name: "Facebook", url: "https://facebook.com/Geotech4all", icon: "facebook" },
    { name: "Instagram", url: "https://www.instagram.com/geotech4all", icon: "instagram" },
    { name: "YouTube", url: "https://youtube.com/@geotech4all", icon: "youtube" },
    { name: "WhatsApp", url: "https://bit.ly/Geotech4All", icon: "whatsapp" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                // src="https://drive.google.com/file/d/1-shoW8gwwIuzeJr2QJCkyDr6VDtqgBQD/download?usp=sharing" 
                // alt="Geotech4All Logo" 
                // className="w-12 h-12 object-contain" 
              />
            <h3 className="text-2xl font-bold text-white">Geotech<span className="text-geotech-white">4All</span></h3>
            </div>
            <p className="text-gray-300 pr-4">Leveraging cutting-edge technology and expert knowledge to deliver high-quality geoscience solutions.</p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-300 hover:text-geotech-red transition-colors"
                >
                  {social.icon === "message-circle" ? (
                    <MessageCircle size={24} />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-${social.icon}`}/>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-geotech-red transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-geotech-red transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-geotech-red transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-geotech-red transition-colors">Products</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-geotech-red transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-geotech-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-geotech-red transition-colors">Geo-data Acquisition</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-geotech-red transition-colors">Geoscience Analysis</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-geotech-red transition-colors">Training & Capacity Building</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-geotech-red transition-colors">Geospatial Visualization</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-geotech-red transition-colors">Research Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-geotech-red" />
                <span className="text-gray-300">Lagos, Nigeria & London, UK</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-geotech-red" />
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-gray-300 hover:text-geotech-red transition-colors">
                  {SOCIAL_LINKS.email}
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-geotech-red" />
                <a href={`tel:${SOCIAL_LINKS.phone}`} className="text-gray-300 hover:text-geotech-red transition-colors">
                  {SOCIAL_LINKS.phone}
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle size={18} className="mr-2 text-geotech-red" />
                <a 
                  href="https://bit.ly/Geotech4All" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-geotech-red transition-colors"
                >
                  WhatsApp Business
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-8 mb-6 border-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Geotech4All. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              CAC No. 7441166 (Nigeria) | Company No. 15807278 (UK)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
