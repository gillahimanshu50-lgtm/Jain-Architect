import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header({ currentPage = 'home' }: { currentPage?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkText = isScrolled || currentPage === 'projects';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className={`font-bold text-2xl tracking-tighter ${isDarkText ? 'text-zinc-900' : 'text-white'}`}>
          Agarwal Architect<span className="text-orange-500">.</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'Projects', 'Reviews', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium hover:text-orange-500 transition-colors ${isDarkText ? 'text-zinc-600' : 'text-zinc-200'}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors">
            Talk To Us
          </a>
        </div>

        <button className="md:hidden text-zinc-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X color={isDarkText ? '#18181b' : '#ffffff'} /> : <Menu color={isDarkText ? '#18181b' : '#ffffff'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col gap-4">
          {['Home', 'Services', 'Projects', 'Reviews', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-zinc-900 font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a href="#contact" className="bg-orange-500 text-white px-6 py-3 rounded-full text-center font-medium mt-2" onClick={() => setMobileMenuOpen(false)}>
            Talk To Us
          </a>
        </div>
      )}
    </header>
  );
}
