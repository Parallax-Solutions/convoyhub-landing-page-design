import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Palette, Sparkles } from 'lucide-react';

const DesignAutonomy = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Palette size={16} />
            <span className="text-sm font-medium">{t('autonomy.title')}</span>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-trust/20 flex items-center justify-center">
                <Sparkles size={32} className="text-accent" />
              </div>
            </div>

            <p className="text-lg text-foreground leading-relaxed mb-6">
              {t('autonomy.description')}
            </p>

            <p className="text-base text-muted-foreground italic">
              {t('autonomy.note')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignAutonomy;
