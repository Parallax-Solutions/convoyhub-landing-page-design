import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles, DollarSign, XCircle, History, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ComingSoon = () => {
  const { t } = useTranslation();

  const features = [
    { icon: DollarSign, key: 'pricing' },
    { icon: XCircle, key: 'cancellation' },
    { icon: History, key: 'history' },
  ];

  return (
    <section className="section-padding section-dark relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsl(var(--accent)) 0%, transparent 60%)',
        }}
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-road-foreground mb-4">
            {t('comingSoon.title')}
          </h2>

          <p className="text-base sm:text-lg text-road-foreground/70 mb-6">
            {t('comingSoon.subtitle')}
          </p>

          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/20 text-accent mb-4 sm:mb-6">
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium">{t('comingSoon.comingSoonLabel')}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 mb-8 sm:mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-road-foreground/10 border border-road-foreground/20"
              >
                <feature.icon size={14} className="sm:w-[18px] sm:h-[18px] text-accent" />
                <span className="text-road-foreground font-medium text-xs sm:text-base">
                  {t(`comingSoon.features.${feature.key}`)}
                </span>
              </motion.div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base"
          >
            <Bell size={16} className="sm:w-[18px] sm:h-[18px] mr-2" />
            {t('comingSoon.cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
