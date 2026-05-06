import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div data-theme="night" className="min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

