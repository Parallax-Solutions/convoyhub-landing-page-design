import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { UserPlus, Check, MessageCircle, Users, Send, Search, Star, Eye, Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FriendsSection = () => {
  const { t } = useTranslation();

  const capabilities = [
    { key: 'addFriends', icon: UserPlus },
    { key: 'inviteOneTouch', icon: Send },
    { key: 'discoverFriends', icon: Search },
    { key: 'trustSignal', icon: Heart },
    { key: 'favorites', icon: Star },
    { key: 'seeOnMap', icon: MapPin },
    { key: 'myGroup', icon: Eye, comingSoon: true },
  ];

  const mockFriends = [
    { name: 'Carlos M.', bike: 'BMW R1250GS', status: 'online', rides: 12, avatar: 'CM' },
    { name: 'Ana R.', bike: 'Ducati Monster', status: 'online', rides: 8, avatar: 'AR' },
    { name: 'Diego L.', bike: 'Harley Sportster', status: 'offline', rides: 23, avatar: 'DL' },
  ];

  const pendingRequests = [
    { name: 'Jorge V.', bike: 'KTM 390 Duke', mutualFriends: 3, avatar: 'JV' },
  ];

  return (
    <section id="friends" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            {t('friends.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('friends.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Capabilities Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-card border border-border rounded-xl p-4 sm:p-5 relative ${cap.comingSoon ? 'opacity-75' : ''}`}
                >
                  {cap.comingSoon && (
                    <span className="absolute top-2 right-2 text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-medium">
                      {t('friends.capabilities.myGroup.comingSoon')}
                    </span>
                  )}
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                    <cap.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t(`friends.capabilities.${cap.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`friends.capabilities.${cap.key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Mobile App Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="w-full max-w-[300px] sm:max-w-[320px]">
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
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {t('friends.appTitle')}
                      </h3>
                      <Button size="sm" className="h-8 w-8 p-0 rounded-full bg-accent hover:bg-accent/90">
                        <UserPlus size={16} className="text-accent-foreground" />
                      </Button>
                    </div>
                  </div>

                  {/* Map area with friends locations */}
                  <div className="h-32 bg-[#e8f4e8] relative overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 128">
                      <path d="M0 45 L320 45" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
                      <path d="M0 90 L320 90" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
                      <path d="M80 0 L80 128" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
                      <path d="M200 0 L200 128" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.5" />
                    </svg>
                    
                    <motion.div 
                      className="absolute top-5 left-14"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <div className="w-7 h-7 bg-trust rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                        <span className="text-trust-foreground font-bold text-[9px]">CM</span>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="absolute top-12 right-16"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    >
                      <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                        <span className="text-accent-foreground font-bold text-[9px]">AR</span>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="absolute bottom-5 left-1/2 -translate-x-1/2"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                    >
                      <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                        <span className="text-primary-foreground font-bold text-[9px]">MF</span>
                      </div>
                    </motion.div>

                    <div className="absolute bottom-6 right-8">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse shadow-lg" />
                      <div className="absolute inset-0 w-6 h-6 bg-accent/20 rounded-full -translate-x-1.5 -translate-y-1.5" />
                    </div>
                  </div>

                  {/* Bottom Sheet */}
                  <div className="bg-card rounded-t-2xl -mt-3 relative shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
                    <div className="flex justify-center pt-2 pb-1">
                      <div className="w-10 h-1 bg-muted-foreground/30 rounded-full" />
                    </div>

                    {/* Pending Requests */}
                    {pendingRequests.length > 0 && (
                      <div className="px-4 py-2 bg-accent/10 border-b border-border">
                        <p className="text-xs font-medium text-accent mb-2">
                          {t('friends.pendingRequests', { count: pendingRequests.length })}
                        </p>
                        <div className="flex items-center justify-between bg-card rounded-lg p-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-accent">{pendingRequests[0].avatar}</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{pendingRequests[0].name}</p>
                              <p className="text-[10px] text-muted-foreground">
                                {pendingRequests[0].mutualFriends} {t('friends.mutualFriends')}
                              </p>
                            </div>
                          </div>
                          <Button size="sm" className="h-7 px-2 text-xs bg-trust hover:bg-trust/90 text-trust-foreground">
                            <Check size={14} />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Friends List */}
                    <div className="px-4 py-2">
                      <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                        {t('friends.yourFriends')} ({mockFriends.length})
                      </p>
                      <div className="space-y-1.5">
                        {mockFriends.map((friend, index) => (
                          <motion.div
                            key={friend.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <div className="relative">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                  <span className="text-[10px] font-bold text-primary">{friend.avatar}</span>
                                </div>
                                <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-card ${friend.status === 'online' ? 'bg-trust' : 'bg-muted-foreground/50'}`} />
                              </div>
                              <div>
                                <p className="text-xs font-medium text-foreground">{friend.name}</p>
                                <p className="text-[10px] text-muted-foreground">{friend.rides} {t('friends.ridesShort')}</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <MessageCircle size={12} className="text-muted-foreground" />
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="h-5 flex items-end justify-center pb-1">
                      <div className="w-20 h-1 bg-muted-foreground/30 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FriendsSection;