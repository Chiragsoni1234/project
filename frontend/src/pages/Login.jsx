// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import API from "../api/axiosInstance";


// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await API.post("http://localhost:5000/api/auth/login", form);
//       localStorage.setItem("token", data.token);
//       navigate("/scan");
//     } catch {
//       alert("Invalid credentials!");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-green-50">
//       <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded-lg w-80 space-y-4">
//         <h2 className="text-2xl font-bold text-center text-green-600">Login</h2>
//         <input type="email" placeholder="Email" className="w-full border p-2 rounded"
//           onChange={(e) => setForm({ ...form, email: e.target.value })} />
//         <input type="password" placeholder="Password" className="w-full border p-2 rounded"
//           onChange={(e) => setForm({ ...form, password: e.target.value })} />
//         <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Login</button>
//       </form>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosInstance";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      navigate("/scan");
    } catch {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 dark:bg-gray-900 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg p-8 rounded-lg w-80 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-green-600 dark:text-green-400">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded dark:bg-gray-700 dark:text-white"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded dark:bg-gray-700 dark:text-white"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Login
        </button>

        <p className="text-center mt-4 text-gray-700 dark:text-gray-300">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-green-600 font-semibold cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}
