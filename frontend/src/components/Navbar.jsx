// import { useContext, useState } from "react";
// import { ThemeContext } from "../context/ThemeContext";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const { dark, setDark } = useContext(ThemeContext);
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const token = localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <nav
//       className={`${
//         dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
//       } shadow-md`}
//     >
//       <div className="flex justify-between items-center p-4 max-w-6xl mx-auto relative">
//         <Link to="/" className="text-2xl font-bold text-green-600">
//           TrueLabel
//         </Link>

//         <div className="flex gap-6 items-center">
//           <Link to="/">Home</Link>
//           <Link to="/scan">Scan</Link>
//           <Link to="/history">History</Link>

//           {!token && <Link to="/login">Login</Link>}

//           {/* Profile Icon */}
//           {token && (
//             <div className="relative">
//               <button
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white text-lg font-semibold"
//               >
//                 👤
//               </button>

//               {menuOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border rounded-md shadow-lg py-2">
//                   <Link
//                     to="/profile"
//                     className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     My Profile
//                   </Link>
//                   <button
//                     onClick={() => {
//                       setDark(!dark);
//                       setMenuOpen(false);
//                     }}
//                     className="w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
//                   >
//                     {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
//                   </button>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 dark:hover:bg-gray-700"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


// import { useContext, useState } from "react";
// import { ThemeContext } from "../context/ThemeContext";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const { darkMode, setDarkMode } = useContext(ThemeContext); // ✅ Fixed variable names
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const token = localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <nav
//       className={`${
//         darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
//       } shadow-md`}
//     >
//       <div className="flex justify-between items-center p-4 max-w-6xl mx-auto relative">
//         <Link to="/" className="text-2xl font-bold text-green-600">
//           TrueLabel
//         </Link>

//         <div className="flex gap-6 items-center">
//           <Link to="/">Home</Link>
//           <Link to="/scan">Scan</Link>
//           <Link to="/history">History</Link>

//           {!token && <Link to="/login">Login</Link>}

//           {/* Profile Icon */}
//           {token && (
//             <div className="relative">
//               <button
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white text-lg font-semibold"
//               >
//                 👤
//               </button>

//               {menuOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border rounded-md shadow-lg py-2">
//                   <Link
//                     to="/profile"
//                     className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     My Profile
//                   </Link>

//                   <button
//                     onClick={() => {
//                       setDarkMode(!darkMode); // ✅ correct function name
//                       setMenuOpen(false);
//                     }}
//                     className="w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
//                   >
//                     {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
//                   </button>

//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 dark:hover:bg-gray-700"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-md`}
    >
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto relative">
        <Link to="/" className="text-2xl font-bold text-green-600">
          TrueLabel
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/">Home</Link>
          <Link to="/scan">Scan</Link>
          <Link to="/history">History</Link>

          {/* ✅ Show Signup if user is not logged in */}
          {!token && (
            <Link
              to="/signup"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold transition"
            >
              Sign Up
            </Link>
          )}

          {/* ✅ User menu when logged in */}
          {token && (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white text-lg font-semibold"
              >
                👤
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border rounded-md shadow-lg py-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={() => {
                      setDarkMode(!darkMode);
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
                  >
                    {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
