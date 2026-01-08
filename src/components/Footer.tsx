import { useTranslation } from 'react-i18next';
import { Instagram, Twitter, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-road border-t border-road-foreground/10">
      <div className="section-container py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Logo */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-base sm:text-lg">C</span>
              </div>
              <span className="font-display font-bold text-lg sm:text-xl text-road-foreground">ConvoyHub</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-8">
            <a href="#" className="text-xs sm:text-sm text-road-foreground/70 hover:text-road-foreground transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-xs sm:text-sm text-road-foreground/70 hover:text-road-foreground transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-xs sm:text-sm text-road-foreground/70 hover:text-road-foreground transition-colors">
              {t('footer.contact')}
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-road-foreground/10 flex items-center justify-center text-road-foreground/60 hover:text-accent hover:bg-road-foreground/20 transition-all"
              >
                <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-road-foreground/10 text-center">
          <p className="text-xs sm:text-sm text-road-foreground/40">
            © {new Date().getFullYear()} ConvoyHub. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;