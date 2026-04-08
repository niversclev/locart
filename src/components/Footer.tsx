export default function Footer() {
  return (
    <footer className="bg-dark-section text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-heading text-3xl font-bold tracking-tight text-white">
              LOCART
            </span>
            <p className="text-white/70 italic font-heading text-lg">
              "Go Exclusive, Go Locart."
            </p>
          </div>

          <div className="text-center md:text-right text-white/50 text-sm">
            <p>© 2025 Locart · Proudly built for local brands.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
