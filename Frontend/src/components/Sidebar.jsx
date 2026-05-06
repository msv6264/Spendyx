import { LayoutDashboard, Receipt, BarChart3, Wallet } from "lucide-react";

const links = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={18} />,
  },
  {
    name: "Expenses",
    icon: <Receipt size={18} />,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#07090e] border-r border-white/5 h-screen p-5">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center">
          <span className="text-white font-bold">₹</span>
        </div>

        <h1 className="text-white text-xl font-bold">Spendyx</h1>
      </div>

      <div className="space-y-2">
        {links.map((link) => (
          <button
            key={link.name}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-violet-600/10 hover:text-violet-400 transition"
          >
            {link.icon}
            {link.name}
          </button>
        ))}
      </div>
    </aside>
  );
}
