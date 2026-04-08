import { motion } from 'motion/react';
import { Home, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="tentang" className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-kawung opacity-5 pointer-events-none"></div>
      
      {/* Huge Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-heading font-bold text-outline whitespace-nowrap pointer-events-none z-0">
        LOCART
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Rotating Badge */}
            <div className="absolute -top-12 -left-12 w-32 h-32 animate-spin-slow hidden md:block opacity-80">
              <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="text-[11px] font-bold tracking-widest uppercase">
                  <textPath href="#circlePath">Locart • Digital Agency • UMKM Lokal •</textPath>
                </text>
              </svg>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface text-primary text-sm font-medium mb-8 border border-primary/10 shadow-sm">
              <Sparkles size={16} className="text-accent" />
              Tentang Kami
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text mb-8 leading-[1.1] tracking-tight relative">
              Kami Lahir dari <br />
              <span className="text-gradient relative inline-block">
                Keresahan yang Sama
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>
            
            <div className="space-y-6 text-text-muted text-lg md:text-xl leading-relaxed font-light max-w-2xl relative">
              <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-transparent rounded-full opacity-30"></div>
              <p>
                Terlalu banyak produk lokal berkualitas tinggi yang tenggelam di marketplace — kalah visual, kalah branding. Locart hadir untuk mengubah itu.
              </p>
              <p>
                Kami adalah konsultan digital yang memahami bisnis UMKM dari dalam. Kami percaya bahwa setiap brand lokal berhak memiliki rumah digitalnya sendiri yang profesional, eksklusif, dan mudah dikelola.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="lg:col-span-5 lg:col-start-8 relative"
          >
            {/* Floating decorative elements */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl z-0"
            ></motion.div>
            
            <div className="bg-dark-section p-10 md:p-14 rounded-[32px] shadow-2xl relative z-10 overflow-hidden group">
              <div className="absolute inset-0 bg-kawung-dark opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/40 rounded-full blur-3xl group-hover:bg-primary/60 transition-colors duration-500"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
                  <Home size={28} className="text-accent" />
                </div>
                <blockquote className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight mb-8">
                  "Go Exclusive, <br />
                  <span className="text-accent">Go Locart.</span>"
                </blockquote>
                <div className="h-px w-12 bg-accent/50 mb-8"></div>
                <p className="text-white/70 font-light text-lg">
                  Membangun ekosistem digital yang mandiri untuk UMKM Indonesia, satu website pada satu waktu.
                </p>
              </div>
            </div>
            
            {/* Decorative background frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-[32px] -z-10 transform translate-x-4 translate-y-4"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
