import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "A stunning 4-bedroom villa featuring open-plan living and seamless indoor-outdoor integration."
  },
  {
    id: 2,
    title: "Urban Tech Hub",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "State-of-the-art office space designed for collaboration and innovation in the heart of the city."
  },
  {
    id: 3,
    title: "Eco-Friendly Retreat",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Sustainable boutique resort nestled in nature, built with locally sourced materials."
  },
  {
    id: 4,
    title: "Luxury Penthouse",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "High-end interior design and renovation for a skyline penthouse with panoramic views."
  },
  {
    id: 5,
    title: "Cultural Center",
    category: "Public",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "A modern architectural landmark serving as a hub for arts, education, and community events."
  },
  {
    id: 6,
    title: "Retail Flagship Store",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Immersive retail experience designed to elevate brand identity and customer engagement."
  }
];

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tight mb-6"
          >
            Our <span className="text-orange-500">Projects</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-500 max-w-2xl mx-auto"
          >
            Explore our portfolio of thoughtfully designed spaces that blend aesthetics, functionality, and sustainability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-zinc-900">
                  {project.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">{project.title}</h3>
                <p className="text-zinc-500 mb-6 line-clamp-2">{project.description}</p>
                <div className="flex items-center text-orange-500 font-bold group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
