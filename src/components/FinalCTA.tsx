import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FinalCTA = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section id="cta" className="section-padding section-dark relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, hsl(var(--accent) / 0.15) 0%, transparent 60%)',
        }}
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-road-foreground mb-8">
            {t('finalCta.headline')}
          </h2>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-trust/10 border border-trust/30"
            >
              <div className="w-16 h-16 rounded-full bg-trust/20 flex items-center justify-center">
                <CheckCircle size={32} className="text-trust" />
              </div>
              <p className="text-lg text-road-foreground font-medium">
                ¡Gracias! Te notificaremos cuando esté listo.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
              <Input
                type="email"
                placeholder={t('finalCta.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 bg-road-foreground/10 border-road-foreground/20 text-road-foreground placeholder:text-road-foreground/50 text-base px-5"
              />
              <Button 
                type="submit"
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-14 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    {t('finalCta.button')}
                    <ArrowRight className="ml-2" size={18} />
                  </>
                )}
              </Button>
            </form>
          )}

          <Button 
            variant="ghost" 
            size="lg"
            className="text-road-foreground/70 hover:text-road-foreground hover:bg-road-foreground/10"
          >
            <Users size={18} className="mr-2" />
            {t('finalCta.secondary')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
