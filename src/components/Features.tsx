import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { User, Users, Map, Calendar, Compass, Radio } from 'lucide-react';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: User,
      title: t('features.riderProfile.title'),
      description: t('features.riderProfile.description'),
      color: 'bg-accent',
    },
    {
      icon: Users,
      title: t('features.guilds.title'),
      description: t('features.guilds.description'),
      color: 'bg-trust',
    },
    {
      icon: Map,
      title: t('features.routes.title'),
      description: t('features.routes.description'),
      color: 'bg-primary',
    },
    {
      icon: Calendar,
      title: t('features.rides.title'),
      description: t('features.rides.description'),
      color: 'bg-accent',
    },
    {
      icon: Compass,
      title: t('features.discover.title'),
      description: t('features.discover.description'),
      color: 'bg-trust',
    },
    {
      icon: Radio,
      title: t('features.liveMap.title'),
      description: t('features.liveMap.description'),
      color: 'bg-primary',
    },
  ];

  return (
    <section id="features" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            {t('features.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card group"
            >
              <div className={`w-10 sm:w-12 h-10 sm:h-12 ${feature.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-transform group-hover:scale-110`}>
                <feature.icon size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
