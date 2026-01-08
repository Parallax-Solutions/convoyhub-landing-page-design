import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Settings, Share2, Radio } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      icon: MapPin,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
    },
    {
      number: '02',
      icon: Settings,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
    },
    {
      number: '03',
      icon: Share2,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
    },
    {
      number: '04',
      icon: Radio,
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description'),
    },
  ];

  return (
    <section id="how-it-works" className="section-padding section-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--trust)) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-road-foreground mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-road-foreground/70 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-road-foreground/20 -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10 text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start">
                  {/* Step number */}
                  <span className="text-accent font-display font-bold text-5xl opacity-30 mb-2">
                    {step.number}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-road-foreground/10 flex items-center justify-center mb-4 border border-road-foreground/20">
                    <step.icon size={28} className="text-accent" />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-road-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-road-foreground/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
