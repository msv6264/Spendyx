import { Bell, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("spendyx-token");
    navigate("/login");
  };

  return (
    <header className="h-16 border-b border-white/5 bg-[#07090e] px-6 flex items-center justify-between">
      {/* Search */}
      <div className="flex items-center gap-3 bg-[#131520] border border-white/5 px-4 py-2 rounded-xl w-80">
        <Search size={18} className="text-slate-500" />

        <input
          type="text"
          placeholder="Search expenses..."
          className="bg-transparent outline-none text-white w-full text-sm"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-xl bg-[#131520] border border-white/5 flex items-center justify-center">
          <Bell size={18} className="text-slate-400" />
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}
