import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    { num: "01", title: "Konsultasi & Riset", desc: "Memahami visi, target pasar, dan kebutuhan spesifik bisnis Anda." },
    { num: "02", title: "Desain UI/UX", desc: "Merancang antarmuka yang menarik dan mudah digunakan sesuai identitas brand." },
    { num: "03", title: "Development", desc: "Membangun website dengan teknologi terkini dan integrasi sistem yang dibutuhkan." },
    { num: "04", title: "Launch & Support", desc: "Peluncuran website dan pendampingan berkelanjutan untuk memastikan performa optimal." }
  ];

  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6 tracking-tight">Proses Kerja Kami</h2>
          <p className="text-text-muted text-lg font-light">Langkah demi langkah menuju kehadiran digital yang profesional.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <div className="w-24 h-24 mb-8 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-white rounded-full shadow-sm border border-primary/10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-2 bg-surface rounded-full"></div>
                <span className="relative text-3xl font-heading font-bold text-primary">{step.num}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-text mb-4 font-heading">{step.title}</h3>
              <p className="text-text-muted leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
