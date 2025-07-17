import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png';

const links = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact Us', href: '#contact' },
];

function getNavbarBg(scrolled, menuOpen) {
  // Always show background when menu is open on mobile
  if (menuOpen) return 'bg-gray-900 bg-opacity-95 backdrop-blur shadow-lg';
  return scrolled ? 'bg-gray-900 bg-opacity-90 backdrop-blur shadow-lg' : '';
}

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const [heroSectionHeight, setHeroSectionHeight] = useState(0);

  useEffect(() => {
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
      setHeroSectionHeight(heroSection.offsetHeight);
    }

    const handleScroll = () => {
      const scrollThreshold = heroSectionHeight > 0 ? heroSectionHeight - 80 : 80;
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroSectionHeight]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleClick = (name, href) => {
    setActive(name);
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-12 py-4 z-50 transition-colors duration-300 ${getNavbarBg(scrolled, menuOpen)}`}
    >
      <div className="flex items-center max-h-16">
        <img src={logo} alt="SemX Logo" className="h-40 md:h-40 mt-14 " />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 lg:gap-10 items-center list-none mr-0 md:mr-24 p-0">
        {links.map((link) => (
          <li key={link.name}>
            <button
              onClick={() => handleClick(link.name, link.href)}
              className={`relative bg-transparent border-none text-white text-lg px-2 py-1 transition-colors duration-200 cursor-pointer
                ${active === link.name ? 'font-bold' : ''}
                after:content-[""] after:block after:h-[3px] after:bg-green-400 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300
                ${
                  active === link.name
                    ? 'after:w-full'
                    : 'after:w-0 hover:after:w-full'
                }
              `}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu Overlay/Container */}
      {menuOpen && (
        <div className={`fixed top-[76px] left-0 w-full flex flex-col items-center z-40 md:hidden
                  max-h-[calc(100vh-76px)] overflow-y-auto rounded-b-lg shadow-lg transition-colors duration-300
                  bg-gray-900 bg-opacity-95 backdrop-blur`}>
          <ul className="flex flex-col items-center gap-4 py-6 w-full max-w-sm">
            {links.map((link) => (
              <li key={link.name} className="w-full flex justify-center">
                <button
                  onClick={() => handleClick(link.name, link.href)}
                  className={`relative bg-transparent border-none text-white text-xl px-4 py-2 transition-colors duration-200 cursor-pointer w-full text-center
                    ${active === link.name ? 'font-bold text-green-400' : ''}
                    hover:text-green-300
                    after:content-[""] after:block after:h-[3px] after:bg-green-400 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:transition-all after:duration-300
                    ${
                      active === link.name
                        ? 'after:w-full'
                        : 'after:w-0 hover:after:w-full'
                    }
                  `}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
         )}
    </nav>
  );
}