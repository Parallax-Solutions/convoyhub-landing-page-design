import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
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

  const navLinks = [
    { href: '#features', label: t('nav.features') },
    { href: '#how-it-works', label: t('nav.howItWorks') },
    { href: '#safety', label: t('nav.safety') },
    { href: '#communities', label: t('nav.communities') },
    { href: '#faq', label: t('nav.faq') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-road/98 backdrop-blur-lg shadow-lg' : 'bg-road/95 backdrop-blur-md'
    } border-b border-white/10`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50">
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
                className="link-underline text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10" asChild>
              <a href="#discover">{t('nav.viewRides')}</a>
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="#cta">{t('nav.joinWaitlist')}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fullscreen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-14 sm:top-16 lg:hidden bg-road/98 backdrop-blur-lg z-40"
          >
            <motion.div 
              className="flex flex-col h-full px-6 py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <nav className="flex flex-col gap-1 mb-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-xl font-medium text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="flex flex-col gap-4 mt-auto pb-8">
                <div className="flex justify-center mb-4">
                  <LanguageSwitcher />
                </div>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-white/30 text-white hover:bg-white/10 h-12" 
                  asChild
                >
                  <a href="#discover" onClick={() => setIsMenuOpen(false)}>{t('nav.viewRides')}</a>
                </Button>
                <Button 
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12" 
                  asChild
                >
                  <a href="#cta" onClick={() => setIsMenuOpen(false)}>{t('nav.joinWaitlist')}</a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
