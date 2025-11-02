import { BarChart3, Droplet, Gauge, CreditCard } from "lucide-react";

export default function LiveDashboardMock() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Owner Dashboard</h2>
            <p className="mt-2 text-slate-600 max-w-3xl">A centralized, secure view of live performance, inventory health, and finances. Access it from any device, anywhere.</p>
          </div>
        </div>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-xl ring-1 ring-slate-200 p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Sales Today</div>
              <BarChart3 className="h-5 w-5 text-emerald-300" />
            </div>
            <div className="mt-4 h-40 w-full">
              <div className="h-full w-full rounded-md bg-white/10 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 h-full w-full flex items-end gap-1 p-2">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="bg-emerald-400/80 rounded-sm" style={{ height: `${Math.max(10, (Math.sin(i / 2) + 1) * 30)}%`, width: '4%' }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <Stat label="Gross" value="$12,940" />
              <Stat label="Transactions" value="482" />
              <Stat label="Avg. Bill" value="$26.8" />
            </div>
          </div>
          <div className="space-y-6">
            <Card title="Inventory Health" icon={<Droplet className="h-4 w-4 text-cyan-500" /> }>
              <MiniBar label="Petrol" value={68} color="bg-cyan-500" />
              <MiniBar label="Diesel" value={54} color="bg-emerald-500" />
              <MiniBar label="CNG" value={32} color="bg-amber-500" />
            </Card>
            <Card title="Pump Utilization" icon={<Gauge className="h-4 w-4 text-amber-500" /> }>
              <div className="text-sm text-slate-600">Current Peak: 78%</div>
              <div className="mt-2 h-2 w-full rounded bg-slate-200">
                <div className="h-2 rounded bg-amber-500" style={{ width: '78%' }} />
              </div>
            </Card>
            <Card title="Payments Mix" icon={<CreditCard className="h-4 w-4 text-violet-500" /> }>
              <div className="grid grid-cols-3 text-sm">
                <div>
                  <div className="font-semibold">Cash</div>
                  <div className="text-slate-600">38%</div>
                </div>
                <div>
                  <div className="font-semibold">Cards</div>
                  <div className="text-slate-600">29%</div>
                </div>
                <div>
                  <div className="font-semibold">UPI/QR</div>
                  <div className="text-slate-600">33%</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, icon, children }) {
  return (
    <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-slate-900">{title}</div>
        {icon}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-slate-400">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

function MiniBar({ label, value, color }) {
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-700">{label}</span>
        <span className="font-semibold">{value}%</span>
      </div>
      <div className="mt-1 h-2 w-full rounded bg-slate-200">
        <div className={`h-2 rounded ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
