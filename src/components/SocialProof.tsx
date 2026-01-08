import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Route, Lock, Radio, Shield } from 'lucide-react';

const SocialProof = () => {
  const { t } = useTranslation();

  const benefits = [
    { icon: Route, label: t('socialProof.routes') },
    { icon: Lock, label: t('socialProof.rides') },
    { icon: Radio, label: t('socialProof.convoy') },
    { icon: Shield, label: t('socialProof.reputation') },
  ];

  return (
    <section className="bg-secondary py-4 sm:py-6 border-y border-border/50">
      <div className="section-container">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 lg:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon size={14} className="sm:w-[18px] sm:h-[18px] text-accent" />
              </div>
              <span className="font-medium text-foreground text-xs sm:text-sm lg:text-base">{benefit.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
