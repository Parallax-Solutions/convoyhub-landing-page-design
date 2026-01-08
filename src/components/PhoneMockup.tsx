import { motion } from 'framer-motion';
import { MapPin, Users, Navigation, Clock } from 'lucide-react';

const PhoneMockup = () => {
  const rideCards = [
    { 
      title: 'Ruta Costera Sur', 
      distance: '127 km', 
      riders: 12, 
      time: 'Dom 9:00 AM',
      color: 'bg-accent'
    },
    { 
      title: 'Sierra Nevada', 
      distance: '85 km', 
      riders: 8, 
      time: 'Sáb 7:30 AM',
      color: 'bg-trust'
    },
    { 
      title: 'Vuelta al Valle', 
      distance: '156 km', 
      riders: 15, 
      time: 'Dom 8:00 AM',
      color: 'bg-primary'
    },
  ];

  return (
    <div className="phone-frame w-[240px] sm:w-[280px] lg:w-[300px]">
      <div className="phone-screen aspect-[9/19] p-0 relative">
        {/* Status bar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-1.5 sm:py-2 bg-road text-road-foreground text-[10px] sm:text-xs">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-road-foreground/80 rounded-sm" />
            <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-road-foreground/80 rounded-sm" />
            <div className="w-4 sm:w-6 h-2 sm:h-3 bg-road-foreground/80 rounded-sm" />
          </div>
        </div>

        {/* App header */}
        <div className="bg-road px-3 sm:px-4 pb-3 sm:pb-4">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="text-road-foreground font-display font-bold text-base sm:text-lg">Descubrir</span>
            <div className="flex gap-2">
              <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-road-foreground/20 flex items-center justify-center">
                <Navigation size={12} className="sm:w-3.5 sm:h-3.5 text-road-foreground" />
              </div>
            </div>
          </div>
          
          {/* Search bar */}
          <div className="bg-road-foreground/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
            <MapPin size={12} className="sm:w-4 sm:h-4 text-road-foreground/60" />
            <span className="text-road-foreground/60 text-xs sm:text-sm">Buscar rodadas...</span>
          </div>
        </div>

        {/* Map section */}
        <div className="h-28 sm:h-36 bg-secondary relative overflow-hidden">
          {/* Simplified map UI */}
          <div className="absolute inset-0 opacity-40" 
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 10px, hsl(var(--border)) 10px, hsl(var(--border)) 11px), repeating-linear-gradient(90deg, transparent, transparent 10px, hsl(var(--border)) 10px, hsl(var(--border)) 11px)'
            }}
          />
          
          {/* Map pins */}
          <motion.div 
            className="absolute top-6 sm:top-8 left-10 sm:left-12 w-5 sm:w-6 h-5 sm:h-6 bg-accent rounded-full flex items-center justify-center shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-accent-foreground text-[10px] sm:text-xs font-bold">3</span>
          </motion.div>
          <motion.div 
            className="absolute top-12 sm:top-16 right-12 sm:right-16 w-5 sm:w-6 h-5 sm:h-6 bg-trust rounded-full flex items-center justify-center shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <span className="text-trust-foreground text-[10px] sm:text-xs font-bold">2</span>
          </motion.div>
          <motion.div 
            className="absolute bottom-8 sm:bottom-12 left-1/2 w-5 sm:w-6 h-5 sm:h-6 bg-primary rounded-full flex items-center justify-center shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <span className="text-primary-foreground text-[10px] sm:text-xs font-bold">5</span>
          </motion.div>
        </div>

        {/* Ride cards */}
        <div className="bg-background p-3 sm:p-4 space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <span className="font-semibold text-xs sm:text-sm text-foreground">Próximas rodadas</span>
            <span className="text-[10px] sm:text-xs text-accent font-medium">Ver todas</span>
          </div>
          
          {rideCards.map((ride, index) => (
            <motion.div
              key={ride.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
              className="bg-card border border-border rounded-lg sm:rounded-xl p-2 sm:p-3 flex items-center gap-2 sm:gap-3"
            >
              <div className={`w-8 sm:w-10 h-8 sm:h-10 ${ride.color} rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Navigation size={12} className="sm:w-4 sm:h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-xs sm:text-sm text-foreground truncate">{ride.title}</p>
                <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground mt-0.5">
                  <span>{ride.distance}</span>
                  <span className="flex items-center gap-0.5 sm:gap-1">
                    <Users size={8} className="sm:w-2.5 sm:h-2.5" />
                    {ride.riders}
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={10} />
                <span>{ride.time}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border px-4 sm:px-6 py-2 sm:py-3 flex justify-around">
          <div className="flex flex-col items-center gap-0.5 sm:gap-1">
            <MapPin size={14} className="sm:w-[18px] sm:h-[18px] text-accent" />
            <span className="text-[8px] sm:text-[10px] text-accent font-medium">Descubrir</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 sm:gap-1">
            <Navigation size={14} className="sm:w-[18px] sm:h-[18px] text-muted-foreground" />
            <span className="text-[8px] sm:text-[10px] text-muted-foreground">Mis rutas</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 sm:gap-1">
            <Users size={14} className="sm:w-[18px] sm:h-[18px] text-muted-foreground" />
            <span className="text-[8px] sm:text-[10px] text-muted-foreground">Hermandad</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
