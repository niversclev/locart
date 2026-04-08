import { motion } from 'motion/react';
import { Layout, ShoppingCart, CreditCard, Truck, Globe, Search, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layout size={32} />,
      title: "Custom UI/UX Design",
      desc: "Tampilan 100% sesuai identitas brand, bukan template.",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
      bg: "bg-surface",
      iconBg: "bg-white text-primary",
      descColor: "text-text-muted",
      extra: (
        <div className="mt-8 relative h-48 rounded-2xl overflow-hidden border border-black/5 group-hover:border-primary/20 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
          <div className="absolute top-4 left-4 right-4 bottom-[-20px] bg-white rounded-t-xl shadow-lg p-4 flex flex-col gap-3 transform group-hover:translate-y-2 transition-transform duration-500">
            <div className="w-full h-8 bg-gray-100 rounded-md"></div>
            <div className="w-3/4 h-4 bg-gray-100 rounded-md"></div>
            <div className="w-1/2 h-4 bg-gray-100 rounded-md"></div>
          </div>
        </div>
      )
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "E-Commerce",
      desc: "Sistem belanja yang mudah dioperasikan UMKM.",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      bg: "bg-white",
      iconBg: "bg-surface text-primary",
      descColor: "text-text-muted"
    },
    {
      icon: <CreditCard size={24} />,
      title: "Payment Gateway",
      desc: "GoPay, OVO, DANA, QRIS, transfer bank.",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      bg: "bg-primary text-white",
      iconBg: "bg-white/10 text-white",
      descColor: "text-white/80"
    },
    {
      icon: <Truck size={24} />,
      title: "API Logistik",
      desc: "Terintegrasi dengan JNE, J&T, Sicepat langsung dari website.",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1",
      bg: "bg-dark-section text-white",
      iconBg: "bg-white/10 text-accent",
      descColor: "text-white/70"
    },
    {
      icon: <Globe size={24} />,
      title: "Hosting & Domain",
      desc: "Cloud hosting dan domain — klien terima beres.",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      bg: "bg-white",
      iconBg: "bg-surface text-primary",
      descColor: "text-text-muted"
    },
    {
      icon: <Search size={24} />,
      title: "Konsultasi & Riset",
      desc: "Riset audience dan user journey sebelum development.",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      bg: "bg-white",
      iconBg: "bg-surface text-primary",
      descColor: "text-text-muted"
    }
  ];

  return (
    <section id="layanan" className="py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary text-sm font-medium mb-6 shadow-sm border border-black/5">
            <ShieldCheck size={16} />
            Layanan Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6 tracking-tight">Solusi Digital <span className="text-gradient">End-to-End</span></h2>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto font-light">
            Semua yang Anda butuhkan untuk membangun, mengelola, dan mengembangkan bisnis secara online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[32px] p-8 md:p-10 ${service.bg} ${service.colSpan} ${service.rowSpan} shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5 flex flex-col justify-between`}
            >
              {/* Animated Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ${service.iconBg}`}>
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-3 font-heading ${service.bg.includes('text-white') ? 'text-white' : 'text-text'}`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed font-light ${service.descColor}`}>
                  {service.desc}
                </p>
                {service.extra && (
                  <div className="mt-auto pt-8">
                    {service.extra}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
