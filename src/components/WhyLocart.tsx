import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function WhyLocart() {
  const reasons = [
    {
      num: "01",
      title: "All-in-One Solution",
      desc: "Tidak perlu pusing koordinasi dengan banyak vendor. Dari riset, desain, development, hingga integrasi payment dan logistik, kami tangani semuanya.",
      bg: "bg-primary text-white",
      iconBg: "bg-white/10 text-white",
      numColor: "text-white/5"
    },
    {
      num: "02",
      title: "Konsultan, Bukan Sekadar Vendor",
      desc: "Kami tidak sekadar membuat website lalu pergi. Kami mendampingi Anda setelah peluncuran, memastikan platform berjalan optimal untuk bisnis Anda.",
      bg: "bg-surface text-text",
      iconBg: "bg-white text-primary",
      numColor: "text-primary/5"
    },
    {
      num: "03",
      title: "Harga Kompetitif, Kualitas Premium",
      desc: "Mendapatkan website dengan kualitas enterprise dan desain custom tidak harus menguras kas bisnis UMKM Anda. Kami menawarkan solusi yang masuk akal.",
      bg: "bg-background text-text",
      iconBg: "bg-white text-primary",
      numColor: "text-primary/5"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text tracking-tight">Kenapa Memilih Locart?</h2>
        </div>

        <div className="space-y-8 relative">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`sticky top-32 ${reason.bg} p-8 md:p-12 rounded-[32px] shadow-xl border border-black/5 transition-transform overflow-hidden group`}
              style={{
                top: `calc(8rem + ${index * 2}rem)`,
                zIndex: 10 + index
              }}
            >
              {/* Huge Background Number */}
              <div className={`absolute -right-8 -bottom-12 text-[12rem] font-heading font-bold leading-none ${reason.numColor} pointer-events-none select-none group-hover:scale-110 transition-transform duration-700`}>
                {reason.num}
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                <div className={`flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center shadow-sm ${reason.iconBg} transform group-hover:scale-110 transition-transform duration-500`}>
                  <CheckCircle2 size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 font-heading">{reason.title}</h3>
                  <p className={`text-lg leading-relaxed max-w-2xl font-light ${index === 0 ? 'text-white/80' : 'text-text-muted'}`}>
                    {reason.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
