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
    <section className="bg-secondary py-6 border-y border-border/50">
      <div className="section-container">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <benefit.icon size={18} className="text-accent" />
              </div>
              <span className="font-medium text-foreground text-sm sm:text-base">{benefit.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
