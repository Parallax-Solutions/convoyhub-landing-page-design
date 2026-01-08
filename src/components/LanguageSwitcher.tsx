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
      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
    >
      <Globe size={16} />
      <span className="font-medium">{i18n.language === 'es' ? 'ES' : 'EN'}</span>
      <span className="text-border">|</span>
      <span className="text-muted-foreground/60">{i18n.language === 'es' ? 'EN' : 'ES'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
