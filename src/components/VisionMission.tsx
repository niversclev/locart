import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react';

export default function VisionMission() {
  const missions = [
    {
      icon: <Target size={24} />,
      title: "Desain Kustom",
      desc: "Menghadirkan desain UI/UX yang 100% mencerminkan identitas unik setiap brand."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Teknologi Tepat Guna",
      desc: "Menyediakan sistem e-commerce yang canggih namun mudah dioperasikan."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Integrasi Menyeluruh",
      desc: "Menyatukan payment gateway dan logistik dalam satu platform yang mulus."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Pendampingan Berkelanjutan",
      desc: "Menjadi konsultan digital yang mendampingi pertumbuhan bisnis jangka panjang."
    }
  ];

  return (
    <section className="py-32 bg-dark-section text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-kawung-dark opacity-10 pointer-events-none"></div>
      
      {/* Huge Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-heading font-bold text-outline-white whitespace-nowrap pointer-events-none z-0 opacity-50">
        VISION
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-accent text-sm font-medium mb-8 border border-accent/20">
              <Target size={16} />
              Visi Kami
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-[1.1] tracking-tight">
              Menjadi Katalisator <br />
              <span className="text-gradient-gold">Digitalisasi UMKM</span> <br />
              di Indonesia.
            </h2>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light max-w-xl">
              Kami bermimpi melihat setiap brand lokal memiliki kebanggaan atas identitas digital mereka, mampu bersaing di pasar global tanpa kehilangan jati diri lokalnya.
            </p>
          </motion.div>

          {/* Mission Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="glass-dark p-8 rounded-[24px] flex flex-col gap-6 items-start group hover:bg-white/5 transition-colors duration-300 relative overflow-hidden"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent flex-shrink-0 border border-white/5 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {mission.icon}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 font-heading">{mission.title}</h3>
                    <p className="text-white/60 leading-relaxed font-light text-sm">{mission.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
