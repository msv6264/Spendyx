import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Expenses from "./Expenses";

export default function Home() {
  
  return (
    <div className="flex h-screen bg-[#090b12]">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          <Expenses />
        </main>

      </div>

    </div>
  );
}