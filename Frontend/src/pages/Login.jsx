import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email,
          password: pass,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      localStorage.setItem("spendyx-token", data.token);

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07090e] px-4">
      <div className="w-full max-w-md bg-[#0d0f18] border border-white/5 rounded-3xl p-10 shadow-2xl">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-11 h-11 rounded-xl bg-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.5)]">
            <span className="text-white font-bold">₹</span>
          </div>

          <h1 className="text-white text-2xl font-bold">Spendyx</h1>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-white text-3xl font-bold mb-2">Welcome Back</h2>

          <p className="text-slate-500 text-sm">
            Login to continue tracking expenses
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-slate-400 text-sm mb-2">Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-[#131520] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/20"
            />
          </div>

          <div>
            <label className="block text-slate-400 text-sm mb-2">
              Password
            </label>

            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter password"
              className="w-full bg-[#131520] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/20"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 transition py-3 rounded-xl text-white font-semibold shadow-[0_0_20px_rgba(124,58,237,0.35)]"
          >
            Login
          </button>
        </form>

        <p className="text-center text-slate-500 text-sm mt-6">
          Don’t have an account?
          <Link
            to="/signup"
            className="text-violet-400 ml-1 hover:text-violet-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
