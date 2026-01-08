import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  User, Bike, Shield, Star, Clock, Check, Plus,
  Instagram, MapPin, AlertTriangle, CheckCircle, Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const RiderProfileSection = () => {
  const { t } = useTranslation();

  const badges = [
    { key: 'punctual', icon: Clock },
    { key: 'organizer', icon: Star },
    { key: 'verified', icon: Shield },
  ];

  const motorcycles = [
    { brand: 'KTM', model: '390 Adventure', cc: 373, type: 'ADV', active: true },
    { brand: 'Yamaha', model: 'MT-07', cc: 689, type: 'Naked', active: false },
    { brand: 'Honda', model: 'CB500X', cc: 471, type: 'ADV', active: false },
  ];

  const features = ['multipleMotos', 'activeBike', 'realReputation'];

  return (
    <section id="rider-profile" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            {t('riderProfile.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('riderProfile.subtitle')}
          </p>
        </motion.div>

        {/* Phone Mockups Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-12">
          
          {/* Phone 1: Rider Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[260px]">
              <p className="text-sm font-medium text-center text-muted-foreground mb-3">
                {t('riderProfile.screens.profile')}
              </p>
              <div className="bg-primary rounded-[2rem] p-1.5 shadow-xl">
                <div className="bg-card rounded-[1.6rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-card px-3 pt-1.5 pb-0.5 flex items-center justify-between">
                    <span className="text-[9px] text-muted-foreground">9:41</span>
                    <div className="flex items-center gap-0.5">
                      <div className="w-3 h-1.5 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-5 h-2 bg-trust rounded-sm" />
                    </div>
                  </div>

                  {/* Profile Header */}
                  <div className="px-4 py-4 text-center border-b border-border">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-2 shadow-lg">
                      <span className="text-xl font-bold text-accent-foreground">MF</span>
                    </div>
                    <h3 className="font-bold text-foreground text-base">@MotoFuego</h3>
                    <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                      <MapPin size={10} />
                      Ciudad de México
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 bg-accent/10 px-2.5 py-1 rounded-full">
                      <span className="text-[10px] font-medium text-accent">
                        {t('riderProfile.ridingStyle.medium')}
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 divide-x divide-border py-3 px-2">
                    <div className="text-center">
                      <p className="text-lg font-bold text-foreground">47</p>
                      <p className="text-[9px] text-muted-foreground">{t('riderProfile.stats.rides')}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-foreground">3</p>
                      <p className="text-[9px] text-muted-foreground">{t('riderProfile.stats.motos')}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-trust">98%</p>
                      <p className="text-[9px] text-muted-foreground">{t('riderProfile.stats.reputation')}</p>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="px-3 py-3 border-t border-border">
                    <p className="text-[10px] font-medium text-muted-foreground uppercase mb-2">
                      {t('riderProfile.badges.title')}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {badges.map((badge) => (
                        <div 
                          key={badge.key}
                          className="flex items-center gap-1 bg-trust/10 px-2 py-1 rounded-full"
                        >
                          <badge.icon size={10} className="text-trust" />
                          <span className="text-[9px] font-medium text-trust">
                            {t(`riderProfile.badges.${badge.key}`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="px-3 py-2 border-t border-border flex items-center justify-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
                      <Instagram size={14} className="text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground">@motofuego_mx</span>
                  </div>

                  <div className="h-4 flex items-end justify-center pb-1">
                    <div className="w-16 h-0.5 bg-muted-foreground/30 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phone 2: My Motorcycles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[260px]">
              <p className="text-sm font-medium text-center text-muted-foreground mb-3">
                {t('riderProfile.screens.motorcycles')}
              </p>
              <div className="bg-primary rounded-[2rem] p-1.5 shadow-xl">
                <div className="bg-card rounded-[1.6rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-card px-3 pt-1.5 pb-0.5 flex items-center justify-between">
                    <span className="text-[9px] text-muted-foreground">9:41</span>
                    <div className="flex items-center gap-0.5">
                      <div className="w-3 h-1.5 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-5 h-2 bg-trust rounded-sm" />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                    <h3 className="font-bold text-foreground">{t('riderProfile.myMotos')}</h3>
                    <Button size="sm" className="h-7 px-2 text-[10px] bg-accent hover:bg-accent/90">
                      <Plus size={12} className="mr-1" />
                      {t('riderProfile.addMoto')}
                    </Button>
                  </div>

                  {/* Motorcycles List */}
                  <div className="p-3 space-y-2">
                    {motorcycles.map((moto, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`p-3 rounded-xl border ${moto.active ? 'border-accent bg-accent/5' : 'border-border bg-secondary/30'}`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${moto.active ? 'bg-accent/20' : 'bg-secondary'}`}>
                              <Bike size={16} className={moto.active ? 'text-accent' : 'text-muted-foreground'} />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-foreground">{moto.brand} {moto.model}</p>
                              <p className="text-[10px] text-muted-foreground">{moto.cc}cc • {moto.type}</p>
                            </div>
                          </div>
                          {moto.active ? (
                            <span className="text-[9px] bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-medium">
                              {t('riderProfile.activeMoto')}
                            </span>
                          ) : (
                            <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tip */}
                  <div className="px-3 pb-3">
                    <div className="bg-secondary/50 rounded-lg p-2">
                      <p className="text-[9px] text-muted-foreground text-center">
                        {t('riderProfile.motoTip')}
                      </p>
                    </div>
                  </div>

                  <div className="h-4 flex items-end justify-center pb-1">
                    <div className="w-16 h-0.5 bg-muted-foreground/30 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phone 3: Compatibility + Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[260px]">
              <p className="text-sm font-medium text-center text-muted-foreground mb-3">
                {t('riderProfile.screens.compatibility')}
              </p>
              <div className="bg-primary rounded-[2rem] p-1.5 shadow-xl">
                <div className="bg-card rounded-[1.6rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-card px-3 pt-1.5 pb-0.5 flex items-center justify-between">
                    <span className="text-[9px] text-muted-foreground">9:41</span>
                    <div className="flex items-center gap-0.5">
                      <div className="w-3 h-1.5 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-5 h-2 bg-trust rounded-sm" />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="px-4 py-3 border-b border-border">
                    <h3 className="font-bold text-foreground text-sm">{t('riderProfile.rideDetails')}</h3>
                  </div>

                  {/* Compatibility Card - Compatible */}
                  <div className="p-3">
                    <div className="bg-trust/10 border border-trust/20 rounded-xl p-3 mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle size={16} className="text-trust" />
                        <span className="text-xs font-semibold text-trust">
                          {t('riderProfile.compatibility.compatible')}
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">
                        {t('riderProfile.compatibility.yourMoto')}: <span className="text-foreground font-medium">KTM 390 ADV</span>
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="text-[9px] bg-trust/20 text-trust px-2 py-0.5 rounded">300cc+</span>
                        <span className="text-[9px] bg-trust/20 text-trust px-2 py-0.5 rounded">ADV</span>
                      </div>
                    </div>

                    {/* Compatibility Card - Not Compatible */}
                    <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-3 mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle size={16} className="text-destructive" />
                        <span className="text-xs font-semibold text-destructive">
                          {t('riderProfile.compatibility.notCompatible')}
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">
                        {t('riderProfile.compatibility.requires')}: <span className="text-foreground font-medium">600cc+ / Solo Sport</span>
                      </p>
                    </div>

                    {/* Rider Alerts */}
                    <div className="border-t border-border pt-3">
                      <p className="text-[10px] font-medium text-muted-foreground uppercase mb-2">
                        {t('riderProfile.alerts.title')}
                      </p>
                      <div className="space-y-1.5">
                        <button className="w-full flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-2 text-left">
                          <AlertTriangle size={14} className="text-yellow-600" />
                          <span className="text-[10px] text-foreground">{t('riderProfile.alerts.help')}</span>
                        </button>
                        <button className="w-full flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-lg p-2 text-left">
                          <AlertTriangle size={14} className="text-destructive" />
                          <span className="text-[10px] text-foreground">{t('riderProfile.alerts.incident')}</span>
                        </button>
                      </div>
                      <p className="text-[8px] text-muted-foreground mt-2 text-center">
                        {t('riderProfile.alerts.description')}
                      </p>
                    </div>
                  </div>

                  <div className="h-4 flex items-end justify-center pb-1">
                    <div className="w-16 h-0.5 bg-muted-foreground/30 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 text-center"
              >
                <div className="w-10 h-10 mx-auto bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  {feature === 'multipleMotos' && <Bike size={20} className="text-accent" />}
                  {feature === 'activeBike' && <Check size={20} className="text-accent" />}
                  {feature === 'realReputation' && <Award size={20} className="text-accent" />}
                </div>
                <p className="text-sm font-medium text-foreground">
                  {t(`riderProfile.features.${feature}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RiderProfileSection;