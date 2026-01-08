import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Map, LayoutGrid, Filter, MapPin, Users, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DiscoverSection = () => {
  const { t } = useTranslation();

  const mockRides = [
    { title: 'Ruta del Café', distance: '95 km', riders: 10, time: 'Sáb 7:00' },
    { title: 'Costa Pacífica', distance: '180 km', riders: 18, time: 'Dom 6:30' },
    { title: 'Mirador Andino', distance: '65 km', riders: 6, time: 'Sáb 8:00' },
  ];

  return (
    <section id="discover" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('discover.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            {t('discover.subtitle')}
          </p>
          <p className="text-base text-accent font-medium">
            {t('discover.filterHint')}
          </p>
        </motion.div>

        {/* Mock UI Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <Button variant="secondary" size="sm" className="gap-2">
                <Map size={16} />
                {t('discover.mapView')}
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                <LayoutGrid size={16} />
                {t('discover.cardView')}
              </Button>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter size={16} />
              Filtros
            </Button>
          </div>

          {/* Map + Cards layout */}
          <div className="flex flex-col lg:flex-row">
            {/* Map mock */}
            <div className="flex-1 h-64 lg:h-80 bg-secondary relative overflow-hidden">
              {/* Grid pattern */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 20px, hsl(var(--border)) 20px, hsl(var(--border)) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, hsl(var(--border)) 20px, hsl(var(--border)) 21px)'
                }}
              />
              
              {/* Cluster pins */}
              <motion.div 
                className="absolute top-12 left-1/4 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-accent-foreground font-bold">5</span>
              </motion.div>
              <motion.div 
                className="absolute top-20 right-1/3 w-10 h-10 bg-trust rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-trust-foreground font-bold">3</span>
              </motion.div>
              <motion.div 
                className="absolute bottom-16 left-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <span className="text-primary-foreground font-bold">8</span>
              </motion.div>

              {/* Current location */}
              <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-accent rounded-full animate-pulse-soft shadow-lg" />
              <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-accent/20 rounded-full -translate-x-2 -translate-y-2" />
            </div>

            {/* Cards panel */}
            <div className="lg:w-80 xl:w-96 p-4 border-t lg:border-t-0 lg:border-l border-border bg-background">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-foreground">16 rodadas encontradas</span>
                <span className="text-sm text-muted-foreground">Esta semana</span>
              </div>
              
              <div className="space-y-3">
                {mockRides.map((ride, index) => (
                  <motion.div
                    key={ride.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl border border-border bg-card hover:border-accent/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Navigation size={18} className="text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground truncate">{ride.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {ride.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users size={12} />
                            {ride.riders}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {ride.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverSection;
