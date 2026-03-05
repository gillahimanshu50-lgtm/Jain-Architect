import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const values = [
    "Innovative Design Solutions",
    "Sustainable Architecture",
    "Client-Centric Approach",
    "Uncompromising Quality"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/architecture/800/1000" 
                alt="Modern architecture building" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-orange-500 text-white p-8 rounded-3xl shadow-xl hidden md:block"
            >
              <div className="text-5xl font-black mb-2">15+</div>
              <div className="text-sm font-medium uppercase tracking-wider">Years of<br/>Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-6">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6 leading-tight">
              Building the future, <br />
              <span className="text-zinc-500">honoring the past.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-zinc-600 mb-10">
              <p>
                Founded in 2008, Jain Architect has grown from a small boutique studio into a leading architectural firm. Our journey is defined by a relentless pursuit of excellence and a passion for creating spaces that inspire.
              </p>
              <p>
                Our mission is to design environments that enhance the human experience while respecting the natural world. We believe that great architecture is not just about buildings, but about the lives lived within them.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-zinc-900">{value}</span>
                </motion.div>
              ))}
            </div>

            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-zinc-900 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition-colors"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
