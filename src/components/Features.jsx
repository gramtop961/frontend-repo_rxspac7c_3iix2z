import { Droplet, Bell, CreditCard, Wallet, Users, Shield, BarChart3, Server } from "lucide-react";

const features = [
  {
    icon: Droplet,
    title: "Real-time Fuel Inventory",
    desc: "Track Petrol, Diesel, and CNG levels in real time across pumps and tanks with automatic reconciliation.",
    points: [
      "Multi-fuel SKU support",
      "Auto tank-to-sales sync",
      "Variance and shrinkage flags",
    ],
  },
  {
    icon: Bell,
    title: "Automated Tank Alerts",
    desc: "Smart thresholds trigger low-stock and anomaly alerts for underground tanks.",
    points: [
      "Configurable min/max levels",
      "Water ingress & temperature notes",
      "Daily calibration reminders",
    ],
  },
  {
    icon: CreditCard,
    title: "POS & Payments",
    desc: "Fast billing at forecourt POS with support for cash, cards, UPI/QR, and wallets.",
    points: [
      "Offline-safe queueing",
      "Integrated discounts & offers",
      "Digital receipt & SMS/Email",
    ],
  },
  {
    icon: Wallet,
    title: "Loyalty & CRM",
    desc: "Drive repeat visits with points, tiers, and personalized campaigns.",
    points: [
      "Points per litre or bill",
      "Segmented promotions",
      "Customer 360 and history",
    ],
  },
  {
    icon: Users,
    title: "Shifts & Commissions",
    desc: "Define shifts, assign attendants, and automate incentive calculations.",
    points: [
      "Per-nozzle accountability",
      "Commission slabs & targets",
      "Attendance and handover logs",
    ],
  },
  {
    icon: BarChart3,
    title: "Sales & Finance Reports",
    desc: "Daily summaries, tax-ready statements, and margin analytics for management.",
    points: [
      "Day close Z-reports",
      "Fuel-wise profit & loss",
      "Banking & settlement view",
    ],
  },
  {
    icon: Server,
    title: "Centralized Owner Dashboard",
    desc: "Live performance, inventory health, and financial snapshots from anywhere.",
    points: [
      "Multi-station overview",
      "Role-based access control",
      "Mobile-friendly monitoring",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "Encrypted data, audit trails, and configurable approvals for a tamper-proof operation.",
    points: [
      "Granular permissions",
      "Two-step approvals",
      "Immutable audit logs",
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Core Capabilities</h2>
        <p className="mt-2 text-slate-600 max-w-3xl">A complete, integrated system engineered for operational efficiency, fewer manual errors, and better customer service.</p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-slate-900/90 p-2 text-white">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{f.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
                {f.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
