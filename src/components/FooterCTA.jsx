export default function FooterCTA() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Run a smarter, more profitable fuel station</h3>
            <p className="mt-2 text-slate-300">Cut manual work, prevent stock-outs, and delight customers with faster service.</p>
          </div>
          <div className="md:text-right">
            <a href="#features" className="inline-flex items-center rounded-md bg-emerald-500 px-5 py-2.5 font-semibold text-slate-900 hover:bg-emerald-400 transition">Get Started</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} Petrol Pump Management System – All rights reserved.</div>
      </div>
    </footer>
  );
}
