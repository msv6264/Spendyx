import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Expenses from "./Expenses";
import Dashboard from "./Dashboard";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Expenses");

  return (
    <div className="flex h-screen bg-[#090b12]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === "Expenses" && <Expenses />}
          {activeTab === "Dashboard" && <Dashboard />}
        </main>
      </div>
    </div>
  );
}