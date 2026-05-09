import { LayoutGrid } from "lucide-react";

export default function StatsCard({
  title,
  value,
  icon: Icon = LayoutGrid,
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0d0f18] p-5">
      <div className="absolute left-0 top-0 h-full w-1 bg-[#7C3AED]" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/15 to-transparent" />

      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <Icon className="text-[#7C3AED]" size={20} />

          <p className="text-slate-300 font-medium">
            {title}
          </p>
        </div>

        <h2 className="text-white text-3xl font-bold">
          {value}
        </h2>
      </div>
    </div>
  );
}