import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { UserPlus, Check, MessageCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FriendsSection = () => {
  const { t } = useTranslation();

  const mockFriends = [
    { name: 'Carlos M.', bike: 'BMW R1250GS', status: 'online', rides: 12, avatar: 'CM' },
    { name: 'Ana R.', bike: 'Ducati Monster', status: 'online', rides: 8, avatar: 'AR' },
    { name: 'Diego L.', bike: 'Harley Sportster', status: 'offline', rides: 23, avatar: 'DL' },
    { name: 'María F.', bike: 'Honda Africa Twin', status: 'online', rides: 15, avatar: 'MF' },
  ];

  const pendingRequests = [
    { name: 'Jorge V.', bike: 'KTM 390 Duke', mutualFriends: 3, avatar: 'JV' },
    { name: 'Laura S.', bike: 'Yamaha MT-07', mutualFriends: 5, avatar: 'LS' },
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
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {t('friends.appTitle')}
                    </h3>
                    <Button size="sm" className="h-8 w-8 p-0 rounded-full bg-accent hover:bg-accent/90">
                      <UserPlus size={16} className="text-accent-foreground" />
                    </Button>
                  </div>
                </div>

                {/* Pending Requests */}
                {pendingRequests.length > 0 && (
                  <div className="px-4 py-3 bg-accent/10 border-b border-border">
                    <p className="text-xs font-medium text-accent mb-2">
                      {t('friends.pendingRequests', { count: pendingRequests.length })}
                    </p>
                    <div className="space-y-2">
                      {pendingRequests.map((request, index) => (
                        <motion.div
                          key={request.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center justify-between bg-card rounded-lg p-2"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-accent">{request.avatar}</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{request.name}</p>
                              <p className="text-[10px] text-muted-foreground">
                                {request.mutualFriends} {t('friends.mutualFriends')}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <Button size="sm" className="h-7 px-2 text-xs bg-trust hover:bg-trust/90 text-trust-foreground">
                              <Check size={14} />
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Friends List */}
                <div className="px-4 py-3">
                  <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                    {t('friends.yourFriends')} ({mockFriends.length})
                  </p>
                  <div className="space-y-2">
                    {mockFriends.map((friend, index) => (
                      <motion.div
                        key={friend.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-primary">{friend.avatar}</span>
                            </div>
                            <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-card ${friend.status === 'online' ? 'bg-trust' : 'bg-muted-foreground/50'}`} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{friend.name}</p>
                            <p className="text-[10px] text-muted-foreground">{friend.bike}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                            {friend.rides} {t('friends.ridesShort')}
                          </span>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MessageCircle size={16} className="text-muted-foreground" />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Nav Hint */}
                <div className="px-4 py-3 border-t border-border bg-secondary/30">
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Users size={14} />
                    <span>{t('friends.findRiders')}</span>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="h-6 flex items-end justify-center pb-1">
                  <div className="w-24 h-1 bg-muted-foreground/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {['addFriends', 'seeStatus', 'inviteRides'].map((feature, index) => (
            <div key={feature} className="text-center p-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                {index === 0 && <UserPlus size={20} className="text-accent" />}
                {index === 1 && <Users size={20} className="text-accent" />}
                {index === 2 && <MessageCircle size={20} className="text-accent" />}
              </div>
              <p className="text-sm font-medium text-foreground">{t(`friends.features.${feature}`)}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FriendsSection;
