import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Map, Users, Navigation, Target, AlertTriangle, 
  Radio, Settings, Bell, UserCheck, CheckCircle,
  Eye, Shield
} from 'lucide-react';

const MapComparisonSection = () => {
  const { t } = useTranslation();

  const participantFeatures = [
    { key: 'route', icon: Map },
    { key: 'riders', icon: Users },
    { key: 'status', icon: Radio },
    { key: 'center', icon: Target },
    { key: 'actions', icon: AlertTriangle },
  ];

  const organizerFeatures = [
    { key: 'panel', icon: Shield },
    { key: 'alerts', icon: Bell },
    { key: 'thresholds', icon: Settings },
    { key: 'broadcast', icon: Radio },
    { key: 'roles', icon: UserCheck, comingSoon: true },
    { key: 'resolve', icon: CheckCircle },
  ];

  return (
    <section id="map-comparison" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            {t('mapComparison.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('mapComparison.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Participant View */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Eye size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {t('mapComparison.participant.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('mapComparison.participant.subtitle')}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {participantFeatures.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                >
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={16} className="text-accent" />
                  </div>
                  <p className="text-sm text-foreground">
                    {t(`mapComparison.participant.features.${feature.key}`)}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Phone Mockup - Participant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex justify-center"
            >
              <div className="w-full max-w-[200px]">
                <div className="bg-primary rounded-[1.5rem] p-1.5 shadow-xl">
                  <div className="bg-card rounded-[1.2rem] overflow-hidden">
                    {/* Map View */}
                    <div className="h-32 bg-[#e8f4e8] relative">
                      {/* Route line */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 128">
                        <path 
                          d="M20 100 Q50 80 80 60 T140 40 T180 30" 
                          stroke="hsl(var(--accent))" 
                          strokeWidth="3" 
                          fill="none"
                          strokeDasharray="8 4"
                        />
                        {/* Stop markers */}
                        <circle cx="20" cy="100" r="6" fill="hsl(var(--trust))" />
                        <circle cx="80" cy="60" r="4" fill="hsl(var(--accent))" />
                        <circle cx="140" cy="40" r="4" fill="hsl(var(--accent))" />
                        <circle cx="180" cy="30" r="6" fill="hsl(var(--primary))" />
                      </svg>
                      
                      {/* Rider clusters */}
                      <motion.div 
                        className="absolute top-14 left-16"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                          <span className="text-trust-foreground font-bold text-[10px]">4</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="absolute top-8 right-10"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                          <span className="text-accent-foreground font-bold text-[8px]">2</span>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Bottom bar */}
                    <div className="p-2 bg-card border-t border-border">
                      <div className="flex gap-2">
                        <button className="flex-1 text-[8px] bg-secondary rounded py-1.5 text-foreground font-medium">
                          Centrarme
                        </button>
                        <button className="flex-1 text-[8px] bg-accent rounded py-1.5 text-accent-foreground font-medium">
                          Ver grupo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Organizer View */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border-2 border-primary/30 rounded-2xl p-6 sm:p-8 relative"
          >
            <div className="absolute -top-3 right-4">
              <span className="text-[10px] bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium">
                PRO
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Shield size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {t('mapComparison.organizer.title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('mapComparison.organizer.subtitle')}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {organizerFeatures.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex items-center gap-3 p-3 rounded-lg bg-primary/5 ${feature.comingSoon ? 'opacity-60' : ''}`}
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={16} className="text-primary" />
                  </div>
                  <p className="text-sm text-foreground flex-1">
                    {t(`mapComparison.organizer.features.${feature.key}`)}
                  </p>
                  {feature.comingSoon && (
                    <span className="text-[9px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                      {t('mapComparison.organizer.comingSoon')}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Phone Mockup - Control Tower */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex justify-center"
            >
              <div className="w-full max-w-[200px]">
                <div className="bg-primary rounded-[1.5rem] p-1.5 shadow-xl">
                  <div className="bg-card rounded-[1.2rem] overflow-hidden">
                    {/* Header */}
                    <div className="px-3 py-2 bg-primary/10 border-b border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-foreground">Torre de control</span>
                        <span className="text-[8px] bg-trust text-trust-foreground px-1.5 py-0.5 rounded">EN VIVO</span>
                      </div>
                    </div>
                    
                    {/* At Risk Panel */}
                    <div className="p-2 space-y-1.5">
                      <p className="text-[9px] font-semibold text-muted-foreground uppercase">En riesgo (2)</p>
                      
                      <div className="flex items-center gap-2 p-2 bg-destructive/10 rounded-lg border border-destructive/20">
                        <div className="w-5 h-5 bg-destructive/20 rounded-full flex items-center justify-center">
                          <span className="text-[8px] font-bold text-destructive">JL</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-[9px] font-medium text-foreground">Jorge L.</p>
                          <p className="text-[7px] text-destructive">Rezagado · 2.3km</p>
                        </div>
                        <AlertTriangle size={12} className="text-destructive" />
                      </div>
                      
                      <div className="flex items-center gap-2 p-2 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                        <div className="w-5 h-5 bg-yellow-500/20 rounded-full flex items-center justify-center">
                          <span className="text-[8px] font-bold text-yellow-600">MR</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-[9px] font-medium text-foreground">María R.</p>
                          <p className="text-[7px] text-yellow-600">Detenida · 5 min</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="p-2 border-t border-border">
                      <button className="w-full text-[8px] bg-primary rounded py-1.5 text-primary-foreground font-medium">
                        📢 Enviar aviso al grupo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapComparisonSection;