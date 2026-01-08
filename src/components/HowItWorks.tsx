import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Settings, Users, Radio } from 'lucide-react';

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
      icon: Users,
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
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--trust)) 0%, transparent 50%)',
        }}
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-road-foreground mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-road-foreground/70 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        {/* Mobile/Tablet: Vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-road-foreground/20" />
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-16"
              >
                {/* Step circle on the line */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-road flex items-center justify-center border-2 border-accent z-10">
                  <step.icon size={20} className="text-accent" />
                </div>
                
                {/* Content */}
                <div className="bg-road-foreground/5 rounded-xl p-5 border border-road-foreground/10">
                  <span className="text-accent font-display font-bold text-sm mb-1 block">
                    Paso {step.number}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-road-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-road-foreground/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 relative">
          {/* Horizontal connector line */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-road-foreground/20 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Step number badge */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-road-foreground/10 flex items-center justify-center border border-road-foreground/20">
                  <step.icon size={28} className="text-accent" />
                </div>
              </div>

              <span className="text-accent font-display font-bold text-4xl opacity-20 block mb-2">
                {step.number}
              </span>
              <h3 className="font-display text-xl font-semibold text-road-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-road-foreground/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;