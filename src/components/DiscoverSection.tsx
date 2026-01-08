import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Map, LayoutGrid, Filter, Users, Clock, Navigation, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DiscoverSection = () => {
  const { t } = useTranslation();

  const mockRides = [
    { title: 'Ruta del Café', distance: '127 km', riders: 12, time: 'Dom 9:00 AM' },
    { title: 'Costa Pacífica', distance: '180 km', riders: 18, time: 'Sáb 6:30 AM' },
    { title: 'Mirador Andino', distance: '65 km', riders: 6, time: 'Dom 8:00 AM' },
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

                {/* Map Area with Route */}
                <div className="h-56 bg-[#e8f4e8] relative overflow-hidden">
                  {/* Roads grid */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 224">
                    {/* Background roads */}
                    <path d="M0 80 L320 80" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
                    <path d="M0 160 L320 160" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
                    <path d="M80 0 L80 224" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
                    <path d="M200 0 L200 224" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
                    
                    {/* Main Route - Blue dashed line like Google Maps */}
                    <motion.path 
                      d="M40 200 Q60 180 80 160 Q120 100 160 80 Q200 60 240 70 Q280 80 290 50"
                      stroke="hsl(var(--primary))"
                      strokeWidth="5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    {/* Route glow effect */}
                    <motion.path 
                      d="M40 200 Q60 180 80 160 Q120 100 160 80 Q200 60 240 70 Q280 80 290 50"
                      stroke="hsl(var(--primary))"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </svg>
                  
                  {/* Rider markers on route */}
                  <motion.div 
                    className="absolute left-[70px] top-[130px] z-10"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <Users size={14} className="text-accent-foreground" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-accent" />
                  </motion.div>

                  <motion.div 
                    className="absolute left-[150px] top-[55px] z-10"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  >
                    <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <Users size={14} className="text-trust-foreground" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-trust" />
                  </motion.div>

                  <motion.div 
                    className="absolute right-[45px] top-[35px] z-10"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                  >
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <span className="text-primary-foreground font-bold text-xs">3</span>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-primary" />
                  </motion.div>

                  {/* Start point */}
                  <div className="absolute left-[32px] bottom-[16px] z-10">
                    <div className="w-4 h-4 bg-trust rounded-full border-2 border-white shadow-md" />
                    <div className="absolute w-8 h-8 bg-trust/20 rounded-full -translate-x-2 -translate-y-2 animate-ping" />
                  </div>

                  {/* End point flag */}
                  <div className="absolute right-[22px] top-[28px] z-10">
                    <div className="w-5 h-5 bg-destructive rounded-sm flex items-center justify-center border-2 border-white shadow-md">
                      <div className="w-0.5 h-3 bg-white absolute -top-3 left-1" />
                    </div>
                  </div>
                </div>

                {/* Results Header */}
                <div className="px-4 py-2 border-t border-border bg-card flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">
                    {t('discover.nextRides')}
                  </span>
                  <span className="text-xs text-accent font-medium cursor-pointer hover:underline">
                    {t('discover.seeAll')}
                  </span>
                </div>

                {/* Ride Cards - Improved design */}
                <div className="px-4 py-3 space-y-3 bg-card">
                  {mockRides.map((ride, index) => (
                    <motion.div
                      key={ride.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border shadow-sm"
                    >
                      {/* Icon */}
                      <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Navigation size={20} className="text-accent-foreground" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-sm text-foreground truncate">{ride.title}</h4>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="font-medium text-foreground/80">{ride.distance}</span>
                          <span className="flex items-center gap-1">
                            <Clock size={11} />
                            {ride.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users size={11} />
                            {ride.riders}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Home Indicator */}
                <div className="h-6 flex items-end justify-center pb-1 bg-card">
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
