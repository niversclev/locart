import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Code, Palette, Zap } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section className="relative bg-[#0a1f1e] min-h-[100svh] flex items-center pt-20 overflow-hidden">
      {/* Creative Background with Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-kawung-dark opacity-[0.03]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-accent text-sm font-medium mb-8 border border-accent/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Website Builder UMKM Lokal
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] mb-6 tracking-tight">
              Website <span className="text-gradient-gold">Eksklusif</span> <br />
              Untuk Produk Lokal Terbaik Kamu
            </h1>
            
            <p className="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed max-w-xl font-body font-light">
              Locart membangun kehadiran digital UMKM lokal Indonesia — dari desain UI/UX kustom, payment gateway, hingga logistik. Satu partner.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-[#E8D070] text-dark-section font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(196,165,53,0.4)] group"
              >
                Konsultasi Gratis
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a 
                href="#layanan"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full glass-dark hover:bg-white/10 text-white font-medium transition-colors"
              >
                Lihat Layanan
              </a>
            </div>
          </motion.div>

          {/* Creative Visual Composition */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Floating Glass Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="absolute top-10 right-10 w-72 glass-dark p-6 rounded-3xl shadow-2xl z-20"
              style={{ y: y1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center text-white shadow-lg">
                  <Palette size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Custom Design</h3>
                  <p className="text-xs text-white/60">100% Tailored UI</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-white/10 rounded-full"></div>
                <div className="h-2 w-4/5 bg-white/10 rounded-full"></div>
                <div className="h-2 w-full bg-white/10 rounded-full"></div>
              </div>
            </motion.div>

            {/* Floating Glass Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 5 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="absolute bottom-20 right-0 w-80 glass-dark p-6 rounded-3xl shadow-2xl z-30 backdrop-blur-xl"
              style={{ y: y2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg">
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Seamless Tech</h3>
                  <p className="text-xs text-white/60">Fast & Responsive</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="h-16 flex-1 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                  <Zap size={20} className="text-accent" />
                </div>
                <div className="h-16 flex-1 bg-white/5 rounded-xl border border-white/10"></div>
                <div className="h-16 flex-1 bg-white/5 rounded-xl border border-white/10"></div>
              </div>
            </motion.div>

            {/* Central Abstract Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/10 flex items-center justify-center z-10"
            >
              <div className="w-48 h-48 rounded-full border border-accent/30 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-xl"></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
