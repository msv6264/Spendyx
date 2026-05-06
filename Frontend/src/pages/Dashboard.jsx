import MainLayout from "../layouts/MainLayout";

export default function Dashboard() {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold text-white mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-5">

        <div className="bg-[#0d0f18] border border-white/5 rounded-2xl p-5">
          <p className="text-slate-500 text-sm mb-2">
            Total Spent
          </p>

          <h2 className="text-white text-3xl font-bold">
            ₹25,430
          </h2>
        </div>

        <div className="bg-[#0d0f18] border border-white/5 rounded-2xl p-5">
          <p className="text-slate-500 text-sm mb-2">
            This Month
          </p>

          <h2 className="text-white text-3xl font-bold">
            ₹8,210
          </h2>
        </div>

      </div>

    </MainLayout>
  );
}