import { useState } from "react";
import { LayoutDashboard, Receipt, Menu, ChevronLeft } from "lucide-react";

const links = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Expenses",
    icon: <Receipt size={20} />,
  },
];

export default function Sidebar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside 
      className={`${isOpen ? 'w-64' : 'w-20'} bg-[#07090e] border-r border-white/5 h-screen p-5 transition-all duration-300 relative flex flex-col`}
    >
      {isOpen && (
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute -right-3 top-6 bg-violet-600 rounded-full p-1 text-white hover:bg-violet-500 transition shadow-lg"
        >
          <ChevronLeft size={16} />
        </button>
      )}

      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="flex justify-center w-full mb-8 text-slate-400 hover:text-white transition"
        >
          <Menu size={24} />
        </button>
      )}

      <div 
        className={`flex items-center gap-3 mb-10 cursor-pointer ${!isOpen && 'justify-center'}`}
        onClick={() => setActiveTab("Expenses")}
      >
        <div className="w-10 h-10 shrink-0 rounded-xl bg-violet-600 flex items-center justify-center">
          <span className="text-white font-bold">₹</span>
        </div>

        {isOpen && <h1 className="text-white text-xl font-bold whitespace-nowrap">Spendyx</h1>}
      </div>

      <div className="space-y-2 flex-1">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => setActiveTab(link.name)}
            title={!isOpen ? link.name : ""}
            className={`w-full flex items-center ${!isOpen ? 'justify-center' : 'gap-3 px-4'} py-3 rounded-xl transition ${
              activeTab === link.name 
                ? 'bg-violet-600 text-white' 
                : 'text-slate-400 hover:bg-violet-600/10 hover:text-violet-400'
            }`}
          >
            <div className="shrink-0">{link.icon}</div>
            {isOpen && <span className="whitespace-nowrap">{link.name}</span>}
          </button>
        ))}
      </div>
    </aside>
  );
}
