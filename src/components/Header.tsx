import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '#features', label: t('nav.features') },
    { href: '#how-it-works', label: t('nav.howItWorks') },
    { href: '#safety', label: t('nav.safety') },
    { href: '#communities', label: t('nav.communities') },
    { href: '#faq', label: t('nav.faq') },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-road/70 backdrop-blur-xl shadow-lg' : 'bg-road/50 backdrop-blur-md'
      } border-b border-white/10`}>
        <div className="section-container">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-base sm:text-lg">C</span>
              </div>
              <span className="font-display font-bold text-lg sm:text-xl text-white">ConvoyHub</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="link-underline text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <Button variant="ghost" size="sm" className="text-white/90 hover:text-white hover:bg-white/10" asChild>
                <a href="#discover">{t('nav.viewRides')}</a>
              </Button>
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a href="#cta">{t('nav.joinWaitlist')}</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white transition-transform duration-200 active:scale-90"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      >
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-14 sm:top-16 left-0 right-0 bottom-0 bg-road overflow-y-auto transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col min-h-full px-6 py-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-white/90 hover:text-white py-4 border-b border-white/10 transition-all duration-200 active:bg-white/5 hover:pl-2"
                  onClick={closeMenu}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-10px)'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className={`flex flex-col gap-4 mt-8 pt-4 border-t border-white/10 transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}>
              <div className="flex justify-center py-2">
                <LanguageSwitcher />
              </div>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-white bg-white/10 text-white hover:bg-white/20 h-12 font-semibold" 
                asChild
              >
                <a href="#discover" onClick={closeMenu}>{t('nav.viewRides')}</a>
              </Button>
              <Button 
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 font-semibold" 
                asChild
              >
                <a href="#cta" onClick={closeMenu}>{t('nav.joinWaitlist')}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
