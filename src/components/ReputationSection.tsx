import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Clock, MessageSquare, BadgeCheck } from 'lucide-react';

const ReputationSection = () => {
  const { t } = useTranslation();

  const signals = [
    { icon: CheckCircle, key: 'attendance' },
    { icon: Clock, key: 'punctuality' },
    { icon: MessageSquare, key: 'reviews' },
  ];

  return (
    <section id="communities" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Mock UI Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="w-full max-w-sm">
              <div className="bg-card rounded-xl sm:rounded-2xl border border-border shadow-xl p-4 sm:p-6">
                {/* Profile header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-lg sm:text-2xl font-bold text-accent">MR</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display font-bold text-base sm:text-lg text-foreground">Mario Rider</h4>
                      <BadgeCheck size={16} className="sm:w-[18px] sm:h-[18px] text-trust" />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Desde 2023 • Honda CB650R</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-secondary">
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={14} 
                        className={`sm:w-[18px] sm:h-[18px] ${star <= 4 ? 'text-accent fill-accent' : 'text-border'}`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-sm sm:text-base text-foreground">4.8</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">(23 rodadas)</span>
                </div>

                {/* Verified badge */}
                <div className="flex items-center gap-2 mb-3 sm:mb-4 p-2 sm:p-3 rounded-lg bg-trust/10 border border-trust/20">
                  <BadgeCheck size={16} className="sm:w-5 sm:h-5 text-trust" />
                  <span className="text-xs sm:text-sm font-medium text-trust">{t('reputation.verified')}</span>
                </div>

                {/* Signals */}
                <div className="space-y-2 sm:space-y-3">
                  {signals.map((signal) => (
                    <div key={signal.key} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <signal.icon size={12} className="sm:w-3.5 sm:h-3.5 text-accent" />
                      </div>
                      <span className="text-xs sm:text-sm text-foreground">{t(`reputation.signals.${signal.key}`)}</span>
                      <div className="flex-1 h-1.5 sm:h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-accent rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              {t('reputation.title')}
            </h2>
            <p className="text-base sm:text-lg text-accent font-medium mb-3 sm:mb-4">
              {t('reputation.subtitle')}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t('reputation.description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReputationSection;
