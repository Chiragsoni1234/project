// // src/pages/Home.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col min-h-screen bg-green-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">
//       {/* Animated Main Section */}
//       <motion.main
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="flex-grow flex flex-col items-center justify-center text-center px-6"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-4xl font-bold text-green-700 dark:text-green-400 mb-4"
//         >
//           Welcome to <span className="text-green-600">TrueLabel</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-lg mb-8 max-w-lg"
//         >
//           Your AI-powered product analyzer — scan food, cosmetics, or medicines
//           to reveal health pros, cons, and safety insights.
//         </motion.p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//           onClick={() => navigate("/scan")}
//           className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform"
//         >
//           Upload / Scan Product
//         </motion.button>
//       </motion.main>

//       {/* Footer at Bottom */}
//       <footer className="mt-auto py-4 text-center bg-green-100 dark:bg-gray-800 text-green-700 dark:text-gray-300 shadow-inner w-full">
//         <p className="text-sm tracking-wide">
//           💚 Made with passion by{" "}
//           <span className="font-semibold text-green-600 dark:text-green-400">
//             G7
//           </span>
//         </p>
//       </footer>
//     </div>
//   );
// }


// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // User not logged in → redirect to signup
      navigate("/signup");
    } else {
      // Already logged in → go to scan page
      navigate("/scan");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-green-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">
      {/* Animated Main Section */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-grow flex flex-col items-center justify-center text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold text-green-700 dark:text-green-400 mb-4"
        >
          Welcome to <span className="text-green-600">TrueLabel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg mb-8 max-w-lg"
        >
          Your AI-powered product analyzer — scan food, cosmetics, or medicines
          to reveal health pros, cons, and safety insights.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          onClick={handleUploadClick}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform"
        >
          Upload / Scan Product
        </motion.button>
      </motion.main>

      {/* Footer at Bottom */}
      <footer className="mt-auto py-4 text-center bg-green-100 dark:bg-gray-800 text-green-700 dark:text-gray-300 shadow-inner w-full">
        <p className="text-sm tracking-wide">
          💚 Made with passion by{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            G7
          </span>
        </p>
      </footer>
    </div>
  );
}
