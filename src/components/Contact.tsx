import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { FormEvent } from 'react';

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const business = formData.get('business');
    const whatsapp = formData.get('whatsapp');
    const needs = formData.get('needs');

    const text = `Halo Locart, saya tertarik untuk konsultasi.%0A%0ANama: ${name}%0ABisnis: ${business}%0AWhatsApp: ${whatsapp}%0AKebutuhan: ${needs}`;
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <section id="kontak" className="py-32 bg-[#0a1f1e] text-white relative overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-kawung-dark opacity-[0.03]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 glass-dark rounded-2xl flex items-center justify-center mb-8 text-accent border border-accent/20">
              <ArrowUpRight size={32} />
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-[1.1] tracking-tight">
              Siap Bawa Produkmu ke <br />
              <span className="text-gradient-gold">Level Berikutnya?</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-8 max-w-md leading-relaxed font-light">
              Mari diskusikan kebutuhan digital bisnis Anda. Tim kami siap membantu merancang solusi terbaik untuk UMKM Anda.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-dark rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-white placeholder-white/30"
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-white/80 mb-2">Nama Bisnis</label>
                <input 
                  type="text" 
                  id="business" 
                  name="business"
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-white placeholder-white/30"
                  placeholder="Masukkan nama bisnis Anda"
                  required
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-white/80 mb-2">Nomor WhatsApp</label>
                <input 
                  type="tel" 
                  id="whatsapp" 
                  name="whatsapp"
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-white placeholder-white/30"
                  placeholder="08xxxxxxxxxx"
                  required
                />
              </div>

              <div>
                <label htmlFor="needs" className="block text-sm font-medium text-white/80 mb-2">Kebutuhan</label>
                <select 
                  id="needs" 
                  name="needs"
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-white appearance-none"
                  required
                >
                  <option value="" className="text-black">Pilih kebutuhan Anda</option>
                  <option value="website-company-profile" className="text-black">Website Company Profile</option>
                  <option value="website-ecommerce" className="text-black">Website E-Commerce</option>
                  <option value="redesign" className="text-black">Redesign Website</option>
                  <option value="konsultasi" className="text-black">Konsultasi Digital</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-accent hover:bg-[#E8D070] text-dark-section font-bold py-4 rounded-full transition-all hover:scale-[1.02] mt-6 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(196,165,53,0.2)] hover:shadow-[0_0_30px_rgba(196,165,53,0.4)]"
              >
                Mulai Konsultasi Gratis
                <ArrowUpRight size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

