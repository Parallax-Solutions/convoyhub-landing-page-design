import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-white/70 hover:text-white hover:bg-white/10"
    >
      <Globe size={16} />
      <span className="font-medium">{i18n.language === 'es' ? 'ES' : 'EN'}</span>
      <span className="text-white/30">|</span>
      <span className="text-white/40">{i18n.language === 'es' ? 'EN' : 'ES'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
