import React, { useEffect, useState } from 'react';
import { FaRocket, FaRegCalendarAlt, FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const navItems = ['About', 'Features', 'Pricing', 'Solution', 'Services'];

  const megaMenuItems = [
  { name: 'Digital Transformation Consulting Services', link: '#digital-transformation' },
  { name: 'Technology Solutions Sales & Services', link: '#technology-solutions' },
  { name: 'Engineering Services & IT Services', link: '#engineering-services' },
  { name: 'Manufacturing Facility & Services', link: '#manufacturing-facility' },
  { name: 'Management Services Portfolio MSP', link: '#management-services' },
  { name: 'VIA-MCT', link: '#via-mct' },
];

  // Auto close sidebar on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-black h-16 flex items-center transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        role="banner"
        aria-label="Navigation bar"
      >
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <a href="/" className="flex items-center gap-2 text-white">
                <img
                  src="/images/vm-logo.jpg"
                  alt="VM Intellect Logo"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-white font-bold text-lg">VM Intellect</span>
              </a>
            </div>

            {/* Hamburger Icon */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white text-2xl focus:outline-none"
                aria-label="Open menu"
              >
                <FaBars />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block relative">
              <ul className="flex space-x-8 text-white font-medium">
                {navItems.map((item) => {
                  const isServices = item === 'Services';

                  return (
                    <li
                      key={item}
                      onMouseEnter={() => {
                        setHovered(item);
                        if (isServices) setIsServicesHovered(true);
                      }}
                      onMouseLeave={() => {
                        setHovered(null);
                        if (isServices) setIsServicesHovered(false);
                      }}
                      className="relative group"
                    >
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="relative inline-block py-2 transition-transform duration-300 ease-in-out hover:-translate-y-1"
                      >
                        <span className="flex items-center gap-1">
                          {item}
                          {isServices && (
                            <FaChevronDown
                              className={`text-xs mt-0.5 transition-transform duration-300 ${
                                isServicesHovered ? 'rotate-180' : ''
                              }`}
                            />
                          )}
                        </span>
                        {/* Underline */}
                        <span
                          className={`absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 ${
                            hovered === item ? 'w-full' : 'w-0'
                          }`}
                        />
                      </a>

                      {/* Mega menu */}
                      {isServices && isServicesHovered && (
                        <div
                          className="absolute left-0 top-full mt-0 w-96 bg-black shadow-lg rounded-md py-6 px-8 text-white z-50"
                          onMouseEnter={() => setIsServicesHovered(true)}
                          onMouseLeave={() => setIsServicesHovered(false)}
                        >
                          <ul className="space-y-4">
{megaMenuItems.map((item, idx) => (
  <li key={idx} className="cursor-pointer hover:text-red-500 whitespace-pre-line">
    <a href={item.link}>{item.name}</a>
  </li>
))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="#"
                className="group flex items-center gap-2 px-5 py-2 bg-red-600 text-white font-semibold text-sm rounded-full hover:bg-white hover:text-black transition-all whitespace-nowrap"
              >
                <FaRocket className="text-white group-hover:text-red-600 text-base transition-all" />
                Start Your Free Trial
              </a>

              <a
                href="#"
                className="group flex items-center gap-2 px-5 py-2 border border-white text-white font-semibold text-sm rounded-full hover:bg-white hover:text-black transition-all whitespace-nowrap"
              >
                <FaRegCalendarAlt className="text-white group-hover:text-red-600 text-base transition-all" />
                Book a Free Demo
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-black text-white z-50 p-5 transform transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden
          w-full max-w-[320px] sm:max-w-[288px] flex flex-col`}
      >
        {/* Header with logo and close button */}
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
          <a href="/" className="flex items-center gap-2 text-white">
            <img
              src="/images/vm-logo.jpg"
              alt="VM Intellect Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-white font-bold text-lg">VM Intellect</span>
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-xl"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Scrollable menu items container */}
        <ul className="space-y-4 text-sm font-medium overflow-y-auto flex-grow pr-2">
          {navItems.map((item) => {
            if (item === 'Services') {
              return (
                <li key={item}>
                  <button
                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                    className="flex justify-between items-center w-full text-left hover:text-red-500 focus:outline-none"
                    aria-expanded={isMobileServicesOpen}
                    aria-controls="mobile-services-submenu"
                  >
                    <span>{item}</span>
                    {isMobileServicesOpen ? (
                      <FaChevronUp className="ml-2" />
                    ) : (
                      <FaChevronDown className="ml-2" />
                    )}
                  </button>

                  {isMobileServicesOpen && (
                    <ul
                      id="mobile-services-submenu"
                      className="mt-2 ml-4 space-y-2 text-white"
                    >
                      {megaMenuItems.map((subItem, idx) => (
  <li key={idx} className="cursor-pointer hover:text-red-500 whitespace-pre-line">
    <a href={subItem.link}>{subItem.name}</a> {/* Correctly accessing properties */}
  </li>
))}

                    </ul>
                  )}
                </li>
              );
            } else {
              return (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}  // The href now points to the section id
                    className="block hover:text-red-500"
                    onClick={() => setIsMobileMenuOpen(false)} // Close the menu on link click
                  >
                    {item}
                  </a>
                </li>
              );
            }
          })}
          <hr className="border-gray-600 my-4" />
          {/* Mobile Buttons */}
          <li>
            <a
              href="#"
              className="block px-4 py-2 bg-red-600 text-white rounded-full text-center hover:bg-white hover:text-black transition"
              onClick={() => setIsMobileMenuOpen(false)}  // Close the menu when clicking buttons
            >
              Start Your Free Trial
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 border border-white rounded-full text-center hover:bg-white hover:text-black transition"
              onClick={() => setIsMobileMenuOpen(false)}  // Close the menu when clicking buttons
            >
              Book a Free Demo
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
