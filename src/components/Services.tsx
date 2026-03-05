import { motion } from 'motion/react';
import { Home, PenTool, HardHat, PaintBucket } from 'lucide-react';

const services = [
  {
    icon: <PenTool className="w-8 h-8 text-orange-500" />,
    title: 'Custom Design',
    desc: 'We draw the plans for your new home. We make sure it looks exactly how you want it.'
  },
  {
    icon: <Home className="w-8 h-8 text-orange-500" />,
    title: 'City Planning',
    desc: 'We handle all the rules and papers with the city so you do not have to worry.'
  },
  {
    icon: <HardHat className="w-8 h-8 text-orange-500" />,
    title: 'Home Building',
    desc: 'Our team builds your home from the ground up using the best materials.'
  },
  {
    icon: <PaintBucket className="w-8 h-8 text-orange-500" />,
    title: 'Interior Setup',
    desc: 'We help pick the colors, floors, and lights to make the inside look perfect.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-zinc-900"
          >
            What We Do<span className="text-orange-500">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 text-lg"
          >
            We help you at every step. From the first drawing to the final coat of paint.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-zinc-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
