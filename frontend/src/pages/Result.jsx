// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// export default function Result() {
//   const data = JSON.parse(localStorage.getItem("result")) || {};
//   const chartData = [
//     { name: "Health Score", value: data.healthScore || 0 },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center p-6">
//       <h2 className="text-3xl font-bold text-green-700 mb-6">AI Analysis Result</h2>

//       <ResponsiveContainer width="80%" height={300}>
//         <BarChart data={chartData}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="value" fill="#22c55e" />
//         </BarChart>
//       </ResponsiveContainer>

//       <div className="mt-6 max-w-xl bg-white p-6 rounded-lg shadow-md text-left">
//         <p><strong>Pros:</strong> {data.pros}</p>
//         <p><strong>Harms:</strong> {data.harms}</p>
//         <p><strong>Recommendation:</strong> {data.recommendation}</p>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// export default function Result() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Get analysis result either from localStorage or passed through route
//     const result = JSON.parse(localStorage.getItem("result"));
//     setData(result);
//   }, []);

//   if (!data) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen text-gray-500 dark:text-gray-300">
//         <p>No analysis available. Please scan a product first.</p>
//       </div>
//     );
//   }

//   // For backward compatibility: handle old `healthScore` or new `usabilityPercentage`
//   const score = data.usabilityPercentage || data.healthScore || 0;

//   const chartData = [
//     { name: "Usable", value: score },
//     { name: "Not usable", value: 100 - score },
//   ];

//   const COLORS = ["#16a34a", "#ef4444"];
//   const verdictColor =
//     data.verdict === "Safe to use"
//       ? "text-green-600"
//       : data.verdict === "Use with caution"
//       ? "text-yellow-500"
//       : "text-red-600";

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
//       <h2 className="text-3xl font-bold text-green-700 mb-4">
//         TrueLabel AI Product Analysis
//       </h2>

//       <h3 className="text-xl font-semibold mb-2">
//         Category:{" "}
//         <span className="text-green-600 dark:text-green-400">
//           {data.category ? data.category.toUpperCase() : "UNKNOWN"}
//         </span>
//       </h3>

//       <ResponsiveContainer width="80%" height={300}>
//         <PieChart>
//           <Pie
//             data={chartData}
//             cx="50%"
//             cy="50%"
//             innerRadius={70}
//             outerRadius={100}
//             startAngle={90}
//             endAngle={-270}
//             dataKey="value"
//           >
//             {chartData.map((entry, index) => (
//               <Cell key={index} fill={COLORS[index]} />
//             ))}
//           </Pie>
//           <Tooltip />
//         </PieChart>
//       </ResponsiveContainer>

//       <h3 className={`text-2xl font-semibold mt-4 ${verdictColor}`}>
//         Verdict: {data.verdict || "N/A"}
//       </h3>

//       <div className="mt-6 max-w-xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-left">
//         <p className="mb-3">
//           <strong>✅ Pros:</strong>{" "}
//           {Array.isArray(data.pros)
//             ? data.pros.join(", ")
//             : data.pros || "No data available"}
//         </p>
//         <p className="mb-3">
//           <strong>⚠️ Harms:</strong>{" "}
//           {Array.isArray(data.harms)
//             ? data.harms.join(", ")
//             : data.harms || "No data available"}
//         </p>
//         <p className="mb-3">
//           <strong>🧠 Recommendation:</strong>{" "}
//           {data.recommendation || "No recommendation available"}
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function Result() {
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    // ✅ Use state if available (from Scan page)
    if (location.state && location.state.result) {
      setData(location.state.result);
      localStorage.setItem("result", JSON.stringify(location.state.result));
    } else {
      // ✅ Fallback to localStorage (for refreshes)
      const saved = localStorage.getItem("result");
      if (saved) setData(JSON.parse(saved));
    }
  }, [location.state]);

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-500 dark:text-gray-300">
        <p>No analysis available. Please scan a product first.</p>
      </div>
    );
  }

  // ✅ Use new Gemini output values
  const score = data.usabilityPercentage || data.healthScore || 0;
  const chartData = [
    { name: "Usable", value: score },
    { name: "Not usable", value: 100 - score },
  ];

  const COLORS = ["#16a34a", "#ef4444"];
  const verdictColor =
    data.verdict === "Safe to use"
      ? "text-green-600"
      : data.verdict === "Use with caution"
      ? "text-yellow-500"
      : "text-red-600";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">
        TrueLabel AI Product Analysis
      </h2>

      <h3 className="text-xl font-semibold mb-2">
        Category:{" "}
        <span className="text-green-600 dark:text-green-400">
          {data.category ? data.category.toUpperCase() : "UNKNOWN"}
        </span>
      </h3>

      <ResponsiveContainer width={250} height={250}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <h3 className={`text-2xl font-semibold mt-4 ${verdictColor}`}>
        Verdict: {data.verdict || "N/A"}
      </h3>

      <div className="mt-6 max-w-xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-left">
        <p className="mb-3">
          <strong className="text-green-600 dark:text-green-400">✅ Pros:</strong>{" "}
          {Array.isArray(data.pros)
            ? data.pros.join(", ")
            : data.pros || "No data available"}
        </p>
        <p className="mb-3">
          <strong className="text-yellow-500">⚠️ Harms:</strong>{" "}
          {Array.isArray(data.harms)
            ? data.harms.join(", ")
            : data.harms || "No data available"}
        </p>
        <p className="mb-3">
          <strong className="text-pink-500">💡 Recommendation:</strong>{" "}
          {data.recommendation || "No recommendation available"}
        </p>
      </div>
    </div>
  );
}
