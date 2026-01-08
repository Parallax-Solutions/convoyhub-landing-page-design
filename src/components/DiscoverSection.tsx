import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Clock, MapPin, ChevronLeft, Share2, Heart, Calendar, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DiscoverSection = () => {
  const { t } = useTranslation();

  const rideParticipants = [
    { name: 'Carlos M.', avatar: 'CM' },
    { name: 'Ana G.', avatar: 'AG' },
    { name: 'Luis R.', avatar: 'LR' },
  ];

  const stops = [
    { name: 'Punto de encuentro', time: '9:00 AM', type: 'start' },
    { name: 'Parada 1 - Mirador', time: '10:30 AM', type: 'stop' },
    { name: 'Parada 2 - Café', time: '12:00 PM', type: 'stop' },
    { name: 'Destino final', time: '2:00 PM', type: 'end' },
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

        {/* Mobile App Frame - Route Detail */}
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

                {/* App Header - Route Detail */}
                <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <ChevronLeft size={18} className="text-foreground" />
                    </div>
                    <span className="font-semibold text-foreground">Ruta del Café</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <Share2 size={16} className="text-muted-foreground" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <Heart size={16} className="text-muted-foreground" />
                    </div>
                  </div>
                </div>

                {/* Map with Route */}
                <div className="h-48 bg-[#e8f4e8] relative overflow-hidden">
                  {/* Roads grid */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 192">
                    {/* Background roads */}
                    <path d="M0 70 L320 70" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
                    <path d="M0 140 L320 140" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
                    <path d="M80 0 L80 192" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
                    <path d="M200 0 L200 192" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
                    
                    {/* Main Route - Blue line like Google Maps */}
                    <motion.path 
                      d="M40 170 Q70 150 90 120 Q120 70 160 55 Q200 40 250 50 Q290 60 300 35"
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
                      d="M40 170 Q70 150 90 120 Q120 70 160 55 Q200 40 250 50 Q290 60 300 35"
                      stroke="hsl(var(--primary))"
                      strokeWidth="14"
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
                  
                  {/* Route markers */}
                  {/* Start point */}
                  <div className="absolute left-[32px] bottom-[14px] z-10">
                    <div className="w-5 h-5 bg-trust rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Stop 1 */}
                  <motion.div 
                    className="absolute left-[82px] top-[95px] z-10"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <span className="text-accent-foreground font-bold text-[10px]">1</span>
                    </div>
                  </motion.div>

                  {/* Stop 2 */}
                  <motion.div 
                    className="absolute left-[152px] top-[35px] z-10"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <span className="text-accent-foreground font-bold text-[10px]">2</span>
                    </div>
                  </motion.div>

                  {/* End point flag */}
                  <div className="absolute right-[12px] top-[20px] z-10">
                    <div className="w-6 h-6 bg-destructive rounded-sm flex items-center justify-center border-2 border-white shadow-lg">
                      <MapPin size={12} className="text-white" />
                    </div>
                  </div>

                  {/* Convoy riders on route - avatars showing who's riding */}
                  <motion.div 
                    className="absolute left-[115px] top-[60px] z-20"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex -space-x-1.5">
                      <div className="w-6 h-6 bg-trust rounded-full border-2 border-white shadow-md text-[8px] text-trust-foreground flex items-center justify-center font-bold">CM</div>
                      <div className="w-6 h-6 bg-accent rounded-full border-2 border-white shadow-md text-[8px] text-accent-foreground flex items-center justify-center font-bold">AR</div>
                      <div className="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-md text-[8px] text-primary-foreground flex items-center justify-center font-bold">+2</div>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Sheet with drag handle */}
                <div className="bg-card rounded-t-2xl -mt-3 relative shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
                  {/* Drag Handle */}
                  <div className="flex justify-center pt-2 pb-1">
                    <div className="w-10 h-1 bg-muted-foreground/30 rounded-full" />
                  </div>

                  {/* Route Info Card */}
                  <div className="px-4 py-2">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-foreground">Ruta del Café</h3>
                        <p className="text-xs text-muted-foreground">Organizado por @RiderMaster</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-foreground">127 km</span>
                        <p className="text-xs text-muted-foreground">~4 horas</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        Dom 9:00 AM
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={12} />
                        12/20 confirmados
                      </span>
                    </div>

                    {/* Participants */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex -space-x-2">
                        {rideParticipants.map((p, i) => (
                          <div key={i} className="w-7 h-7 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-[10px] font-medium text-foreground">
                            {p.avatar}
                          </div>
                        ))}
                        <div className="w-7 h-7 rounded-full bg-accent border-2 border-card flex items-center justify-center text-[10px] font-bold text-accent-foreground">
                          +9
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">asistirán</span>
                    </div>

                    {/* Stops list */}
                    <div className="space-y-2 mb-3">
                      {stops.map((stop, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <div className={`w-2 h-2 rounded-full ${stop.type === 'start' ? 'bg-trust' : stop.type === 'end' ? 'bg-destructive' : 'bg-accent'}`} />
                          <span className="flex-1 text-foreground">{stop.name}</span>
                          <span className="text-muted-foreground">{stop.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="px-4 pb-3">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-11 gap-2">
                      <Navigation size={16} />
                      Unirme a esta rodada
                    </Button>
                  </div>

                  {/* Home Indicator */}
                  <div className="h-6 flex items-end justify-center pb-1">
                    <div className="w-24 h-1 bg-muted-foreground/30 rounded-full" />
                  </div>
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