import { Home, Building2, Box, Leaf, Shield, Hexagon, Triangle } from 'lucide-react';

const partners = [
  { name: 'HomeBuilder', color: 'text-blue-600', icon: Home },
  { name: 'CityDesign', color: 'text-purple-600', icon: Building2 },
  { name: 'ModernSpace', color: 'text-teal-600', icon: Box },
  { name: 'EcoBuild', color: 'text-green-600', icon: Leaf },
  { name: 'StrongWalls', color: 'text-slate-800', icon: Shield },
  { name: 'ApexArch', color: 'text-red-600', icon: Triangle },
  { name: 'CoreStruct', color: 'text-indigo-600', icon: Hexagon },
];

// Double the array for seamless scrolling
const duplicatedPartners = [...partners, ...partners];

export default function SocialProof() {
  return (
    <section className="py-16 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-center text-sm font-bold text-zinc-400 uppercase tracking-widest">
          Trusted by top companies
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        {/* Fade gradients for edges to make it look premium */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-marquee items-center py-4">
          {duplicatedPartners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-3 mx-4 px-8 py-4 rounded-2xl bg-white border border-zinc-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] cursor-pointer"
              >
                <div className={`p-2 rounded-xl bg-zinc-50 ${partner.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-xl font-extrabold tracking-tight ${partner.color}`}>
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
