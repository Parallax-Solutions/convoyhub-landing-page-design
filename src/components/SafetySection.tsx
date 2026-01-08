import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Shield, Eye, Power, Users, Map } from 'lucide-react';

const SafetySection = () => {
  const { t } = useTranslation();

  const safetyItems = [
    { icon: Check, key: 'consent' },
    { icon: Users, key: 'everyone' },
    { icon: Eye, key: 'organizerExtra' },
    { icon: Power, key: 'autoOff' },
    { icon: Shield, key: 'noTracking' },
  ];

  return (
    <section id="safety" className="section-padding bg-secondary relative overflow-hidden">
      {/* Subtle trust gradient */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(circle at 80% 20%, hsl(var(--trust)) 0%, transparent 50%)',
        }}
      />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="trust-badge mb-4 sm:mb-6">
              <Shield size={14} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Privacidad primero</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              {t('safety.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              {t('safety.subtitle')}
            </p>

            <div className="space-y-3 sm:space-y-4">
              {safetyItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border border-border"
                >
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-trust/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={14} className="sm:w-[18px] sm:h-[18px] text-trust" />
                  </div>
                  <p className="text-sm sm:text-base text-foreground font-medium pt-1 sm:pt-2">
                    {t(`safety.items.${item.key}`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual - Hidden on mobile for cleaner look */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Shield graphic */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-trust/20 to-trust/5 border border-trust/20 flex items-center justify-center">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 rounded-full bg-trust/20 flex items-center justify-center"
                  >
                    <Shield size={64} className="text-trust" />
                  </motion.div>
                  
                  {/* Orbiting elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0"
                  >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border border-trust/30 flex items-center justify-center shadow-lg">
                      <Check size={14} className="text-trust" />
                    </div>
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-card border border-trust/30 flex items-center justify-center shadow-lg">
                      <Users size={14} className="text-trust" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border border-trust/30 flex items-center justify-center shadow-lg">
                      <Power size={14} className="text-trust" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;