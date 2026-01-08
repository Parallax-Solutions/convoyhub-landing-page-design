import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const { t } = useTranslation();

  const faqKeys = [
    'googleMaps',
    'whoSeesMap',
    'privacy',
    'addFriends',
    'friendsLocation',
    'multipleMotos',
    'publicPrivate',
    'guilds',
    'noSignal',
    'paidRides',
    'fakeReputation',
  ];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('faq.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqKeys.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={key}
                  className="bg-card border border-border rounded-lg sm:rounded-xl px-4 sm:px-6 data-[state=open]:border-accent/30"
                >
                  <AccordionTrigger className="text-left font-medium text-sm sm:text-base text-foreground hover:text-accent hover:no-underline py-4 sm:py-5">
                    {t(`faq.items.${key}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-5 leading-relaxed">
                    {t(`faq.items.${key}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;