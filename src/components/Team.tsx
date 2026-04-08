import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Team() {
  const team = [
    { name: "Sebastian", role: "CEO", desc: "Visionary leader with 10+ years in digital strategy.", img: "https://picsum.photos/seed/sebastian/400/400" },
    { name: "Kevin Yudo", role: "CTO", desc: "Tech architect specializing in scalable e-commerce.", img: "https://picsum.photos/seed/kevin/400/400" },
    { name: "Angel Gabriella", role: "CDO", desc: "Design expert crafting intuitive user experiences.", img: "https://picsum.photos/seed/angel/400/400" },
    { name: "Paulus", role: "CMO", desc: "Marketing strategist driving brand growth.", img: "https://picsum.photos/seed/paulus/400/400" }
  ];

  return (
    <section id="tim" className="py-32 bg-dark-section text-white relative overflow-hidden">
      {/* Marquee Background */}
      <div className="absolute top-1/4 left-0 w-full overflow-hidden opacity-5 pointer-events-none -rotate-3">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-[10vw] font-heading font-bold mx-4">MEET THE EXPERTS</span>
          <span className="text-[10vw] font-heading font-bold mx-4">MEET THE EXPERTS</span>
          <span className="text-[10vw] font-heading font-bold mx-4">MEET THE EXPERTS</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">Di Balik <span className="text-gradient-gold">Locart</span></h2>
            <p className="text-white/70 text-lg max-w-xl font-light">
              Para ahli di balik layar yang siap membantu bisnis Anda tumbuh melalui teknologi dan desain.
            </p>
          </div>
          <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-dark-section transition-colors flex items-center gap-2 text-sm font-medium">
            Lihat Semua Tim <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border-b border-white/10 py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-white/5 transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 z-10 relative">
                <span className="text-white/30 font-mono text-sm">0{index + 1}</span>
                <h3 className="text-3xl md:text-5xl font-heading font-bold group-hover:text-accent transition-colors duration-500">{member.name}</h3>
              </div>
              
              <div className="z-10 relative mt-4 md:mt-0 flex items-center gap-8">
                <div className="flex flex-col items-start md:items-end">
                  <p className="text-white/90 text-lg font-medium">{member.role}</p>
                  <p className="text-white/50 text-sm font-light hidden md:block">{member.desc}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight size={20} className="text-accent" />
                </div>
              </div>

              {/* Floating Image Reveal on Hover (Desktop only) */}
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 pointer-events-none z-0 shadow-2xl rotate-[-5deg] group-hover:rotate-[5deg]">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
