import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function BannerCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-zinc-900 rounded-3xl overflow-hidden flex flex-col lg:flex-row relative shadow-2xl">
          
          <div className="p-10 lg:p-16 flex-1 flex flex-col justify-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1]"
            >
              DESIGNED FOR <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">LIVING</span><span className="text-orange-500">.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg mb-10 max-w-md font-medium"
            >
              We have been building homes for 10 years. We know what works and what looks good. Let us help you build a place you love.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a href="#projects" className="inline-flex items-center gap-3 bg-white text-zinc-900 px-8 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 w-fit group">
                Start Your Project 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="flex-1 min-h-[500px] relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Modern Solid Interior Architecture" 
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
