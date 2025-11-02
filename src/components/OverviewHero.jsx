import { Gauge, Droplet, CreditCard, BarChart3 } from "lucide-react";

export default function OverviewHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs font-semibold ring-1 ring-emerald-400/20">
              Real-time, data-driven operations
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              Modern Petrol Pump Management System
            </h1>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Streamline every aspect of your fuel station: live inventory for Petrol, Diesel, and CNG, automated tank monitoring with low-stock alerts, seamless POS billing, loyalty rewards, shift management, and executive-grade reporting in one secure dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#features" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 font-semibold text-slate-900 hover:bg-emerald-400 transition">
                Explore Features
              </a>
              <a href="#reports" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 font-semibold text-white hover:bg-white/20 transition ring-1 ring-white/20">
                See Reports
              </a>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <KPICard icon={<Droplet className="h-5 w-5 text-emerald-400" />} label="Live Inventory" value="22,400 L" sub="Across Petrol/Diesel/CNG" />
              <KPICard icon={<Gauge className="h-5 w-5 text-cyan-400" />} label="Tank Health" value="Optimal" sub="Auto alerts configured" />
              <KPICard icon={<CreditCard className="h-5 w-5 text-violet-400" />} label="Today's Sales" value="$12,940" sub="Cash + Digital" />
              <KPICard icon={<BarChart3 className="h-5 w-5 text-amber-400" />} label="Gross Margin" value="8.4%" sub="Blended" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KPICard({ icon, label, value, sub }) {
  return (
    <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-300">{label}</div>
        <div>{icon}</div>
      </div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
      <div className="mt-1 text-xs text-slate-400">{sub}</div>
    </div>
  );
}
