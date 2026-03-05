import { motion } from 'motion/react';

export default function BottomCTA() {
  return (
    <section className="py-24 bg-orange-500">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
        >
          Ready To Build<span className="text-white-900">?</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-orange-100 text-xl mb-10"
        >
          Call us today. We will listen to your ideas and give you a free plan.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="#contact" className="inline-block bg-white text-orange-500 px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get A Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
