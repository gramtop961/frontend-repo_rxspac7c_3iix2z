import { ClipboardList, FileText, Users, Wallet } from "lucide-react";

export default function ReportsAndWorkflows() {
  return (
    <section id="reports" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-slate-900/90 p-2 text-white">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Daily Sales & Financial Reports</h3>
            </div>
            <p className="mt-3 text-slate-600">Close your day with confidence. Instantly generate tax-ready, bank-reconciled summaries.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-slate-500">
                    <th className="py-2">Metric</th>
                    <th className="py-2">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-2">Total Sales</td>
                    <td className="py-2 font-semibold">$12,940</td>
                  </tr>
                  <tr>
                    <td className="py-2">Fuel Volume Sold</td>
                    <td className="py-2 font-semibold">9,860 L</td>
                  </tr>
                  <tr>
                    <td className="py-2">Gross Margin</td>
                    <td className="py-2 font-semibold">8.4%</td>
                  </tr>
                  <tr>
                    <td className="py-2">Cash vs Digital</td>
                    <td className="py-2 font-semibold">38% / 62%</td>
                  </tr>
                  <tr>
                    <td className="py-2">Tax Liability</td>
                    <td className="py-2 font-semibold">$1,035</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-slate-900/90 p-2 text-white">
                <ClipboardList className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Shift & Commission Workflow</h3>
            </div>
            <div className="mt-4 space-y-4">
              <WorkflowStep step="1" title="Shift Setup" icon={<Users className="h-4 w-4" /> } desc="Define shift timings, assign attendants to pumps/nozzles." />
              <WorkflowStep step="2" title="Live Operations" icon={<Wallet className="h-4 w-4" /> } desc="POS bills mapped to attendants. Sales and deviations tracked in real time." />
              <WorkflowStep step="3" title="Day Close" icon={<FileText className="h-4 w-4" /> } desc="Auto compute commissions, reconcile cash drawers, and export statements." />
              <WorkflowStep step="4" title="Review & Approve" icon={<ClipboardList className="h-4 w-4" /> } desc="Supervisor reviews, owner signs off digitally with complete audit trail." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowStep({ step, title, desc, icon }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="h-7 w-7 flex items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">{step}</div>
        <div className="flex-1 w-px bg-slate-200" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className="text-slate-700">{icon}</div>
          <div className="font-semibold text-slate-900">{title}</div>
        </div>
        <p className="mt-1 text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}
