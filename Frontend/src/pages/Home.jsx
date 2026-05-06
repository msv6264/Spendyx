import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Home({ children }) {

  return (
    <div className="flex h-screen bg-[#090b12]">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

      </div>

    </div>
  );
}