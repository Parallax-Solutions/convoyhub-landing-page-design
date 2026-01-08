import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Map, LayoutGrid, Filter, MapPin, Users, Clock, Navigation, Search } from 'lucide-react';
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
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            {t('discover.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            {t('discover.subtitle')}
          </p>
          <p className="text-sm sm:text-base text-accent font-medium">
            {t('discover.filterHint')}
          </p>
        </motion.div>

        {/* Mobile App Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[320px] sm:max-w-[360px]">
            {/* Phone Frame */}
            <div className="bg-primary rounded-[2.5rem] p-2 shadow-2xl">
              <div className="bg-card rounded-[2rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-card px-4 pt-2 pb-1 flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                    <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                    <div className="w-6 h-3 bg-trust rounded-sm" />
                  </div>
                </div>

                {/* App Header */}
                <div className="px-4 py-3 border-b border-border">
                  <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2">
                    <Search size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{t('discover.searchPlaceholder')}</span>
                  </div>
                </div>

                {/* View Toggle */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-border">
                  <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
                    <Button variant="secondary" size="sm" className="h-7 px-3 gap-1.5 text-xs bg-card shadow-sm">
                      <Map size={12} />
                      {t('discover.mapView')}
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 px-3 gap-1.5 text-xs text-muted-foreground">
                      <LayoutGrid size={12} />
                      {t('discover.cardView')}
                    </Button>
                  </div>
                  <Button variant="outline" size="sm" className="h-7 px-2 gap-1 text-xs">
                    <Filter size={12} />
                    Filtros
                  </Button>
                </div>

                {/* Map Area */}
                <div className="h-48 bg-secondary relative overflow-hidden">
                  {/* Grid pattern */}
                  <div 
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: 'repeating-linear-gradient(0deg, transparent, transparent 24px, hsl(var(--border)) 24px, hsl(var(--border)) 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, hsl(var(--border)) 24px, hsl(var(--border)) 25px)'
                    }}
                  />
                  
                  {/* Cluster pins */}
                  <motion.div 
                    className="absolute top-8 left-8 w-9 h-9 bg-accent rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-accent-foreground font-bold text-sm">5</span>
                  </motion.div>
                  <motion.div 
                    className="absolute top-16 right-16 w-9 h-9 bg-trust rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <span className="text-trust-foreground font-bold text-sm">3</span>
                  </motion.div>
                  <motion.div 
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 w-9 h-9 bg-primary rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <span className="text-primary-foreground font-bold text-sm">8</span>
                  </motion.div>

                  {/* Current location dot */}
                  <div className="absolute bottom-8 right-8">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse shadow-lg" />
                    <div className="absolute inset-0 w-6 h-6 bg-accent/20 rounded-full -translate-x-1.5 -translate-y-1.5" />
                  </div>
                </div>

                {/* Results Header */}
                <div className="px-4 py-2 border-t border-border bg-card flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">
                    {t('discover.ridesFound', { count: 16 })}
                  </span>
                  <span className="text-xs text-muted-foreground">{t('discover.thisWeek')}</span>
                </div>

                {/* Ride Cards */}
                <div className="px-3 py-2 space-y-2 max-h-[180px] overflow-hidden">
                  {mockRides.map((ride, index) => (
                    <motion.div
                      key={ride.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border"
                    >
                      <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Navigation size={16} className="text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-foreground truncate">{ride.title}</h4>
                        <div className="flex items-center gap-3 text-[10px] text-muted-foreground mt-0.5">
                          <span className="flex items-center gap-0.5">
                            <MapPin size={10} />
                            {ride.distance}
                          </span>
                          <span className="flex items-center gap-0.5">
                            <Users size={10} />
                            {ride.riders}
                          </span>
                          <span className="flex items-center gap-0.5">
                            <Clock size={10} />
                            {ride.time}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Home Indicator */}
                <div className="h-6 flex items-end justify-center pb-1">
                  <div className="w-24 h-1 bg-muted-foreground/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverSection;
