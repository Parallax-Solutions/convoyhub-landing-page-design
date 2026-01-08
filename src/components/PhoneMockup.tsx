import { motion } from 'framer-motion';
import { Map, LayoutGrid, Filter, Users, Clock, Navigation, Search, MapPin, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PhoneMockup = () => {
  const mockRides = [
    { title: 'Ruta del Café', distance: '127 km', riders: 12, time: 'Dom 9:00 AM', color: 'bg-accent', textColor: 'text-accent-foreground' },
    { title: 'Costa Pacífica', distance: '180 km', riders: 18, time: 'Sáb 6:30 AM', color: 'bg-trust', textColor: 'text-trust-foreground' },
    { title: 'Mirador Andino', distance: '65 km', riders: 6, time: 'Dom 8:00 AM', color: 'bg-primary', textColor: 'text-primary-foreground' },
  ];

  return (
    <div className="w-[260px] sm:w-[300px] lg:w-[320px]">
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
              <span className="text-sm text-muted-foreground">Buscar rodadas...</span>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-border">
            <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
              <Button variant="secondary" size="sm" className="h-7 px-3 gap-1.5 text-xs bg-card shadow-sm">
                <Map size={12} />
                Mapa
              </Button>
              <Button variant="ghost" size="sm" className="h-7 px-3 gap-1.5 text-xs text-muted-foreground">
                <LayoutGrid size={12} />
                Cards
              </Button>
            </div>
            <Button variant="outline" size="sm" className="h-7 px-2 gap-1 text-xs">
              <Filter size={12} />
              Filtros
            </Button>
          </div>

          {/* Map Area */}
          <div className="h-44 bg-[#e8f4e8] relative overflow-hidden">
            {/* Roads grid */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 176">
              {/* Background roads */}
              <path d="M0 60 L320 60" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
              <path d="M0 120 L320 120" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
              <path d="M100 0 L100 176" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
              <path d="M220 0 L220 176" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
            </svg>
            
            {/* Cluster pins - colors match the cards below */}
            <motion.div 
              className="absolute top-6 left-12 z-10"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-pointer">
                <span className="text-accent-foreground font-bold text-sm">5</span>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-accent" />
            </motion.div>

            <motion.div 
              className="absolute top-14 right-16 z-10"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            >
              <div className="w-9 h-9 bg-trust rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-pointer">
                <span className="text-trust-foreground font-bold text-sm">3</span>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-trust" />
            </motion.div>

            <motion.div 
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            >
              <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-pointer">
                <span className="text-primary-foreground font-bold text-sm">8</span>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-primary" />
            </motion.div>

            {/* Current location dot */}
            <div className="absolute bottom-6 right-8">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse shadow-lg" />
              <div className="absolute inset-0 w-6 h-6 bg-accent/20 rounded-full -translate-x-1.5 -translate-y-1.5" />
            </div>
          </div>

          {/* Bottom Sheet with drag handle */}
          <div className="bg-card rounded-t-2xl -mt-3 relative shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
            {/* Drag Handle */}
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-10 h-1 bg-muted-foreground/30 rounded-full" />
            </div>
            
            {/* Results Header */}
            <div className="px-4 py-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">
                Próximas rodadas
              </span>
              <span className="text-xs text-accent font-medium cursor-pointer hover:underline">
                Ver todas
              </span>
            </div>

            {/* Ride Cards - icon colors match map pins */}
            <div className="px-4 pb-3 space-y-2.5">
              {mockRides.map((ride, index) => (
                <motion.div
                  key={ride.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border shadow-sm"
                >
                  {/* Icon - matches map pin color */}
                  <div className={`w-11 h-11 ${ride.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <Navigation size={20} className={ride.textColor} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-sm text-foreground truncate">{ride.title}</h4>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
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

            {/* Bottom Navigation */}
            <div className="border-t border-border px-6 py-3 flex justify-around">
              <div className="flex flex-col items-center gap-1">
                <MapPin size={18} className="text-accent" />
                <span className="text-[10px] text-accent font-medium">Descubrir</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Navigation size={18} className="text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">Mis rutas</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Users size={18} className="text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">Amigos</span>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="h-6 flex items-end justify-center pb-1">
              <div className="w-24 h-1 bg-muted-foreground/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;