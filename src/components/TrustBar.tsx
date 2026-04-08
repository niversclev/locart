export default function TrustBar() {
  const items = [
    "All-in-One Solution",
    "100% Custom Design",
    "Payment Gateway Terintegrasi",
    "API Logistik",
    "Cloud Hosting",
    "Konsultasi Digital",
  ];

  // Duplicate items for seamless marquee
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="bg-surface py-6 mt-12 border-y border-primary/10 overflow-hidden relative">
      {/* Gradient masks for smooth fade on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10"></div>

      <div className="flex w-[300%] animate-marquee">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 px-8 w-max flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="font-heading font-bold text-text-muted text-lg tracking-wide uppercase">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
