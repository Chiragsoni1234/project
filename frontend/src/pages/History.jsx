// src/pages/History.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/products/history", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setHistory(res.data || []);
      } catch (err) {
        console.error("Error fetching history:", err.message);
      }
    };
    fetchHistory();
  }, []);

  if (history.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 dark:text-gray-300">
        No products analyzed yet.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Your Scan History
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {history.map((item, idx) => {
          const score = item.usabilityPercentage || item.healthScore || 0;
          const COLORS =
            score >= 75
              ? ["#22c55e", "#e5e7eb"] // Green for healthy
              : score >= 50
              ? ["#facc15", "#e5e7eb"] // Yellow for medium
              : ["#ef4444", "#e5e7eb"]; // Red for risky

          return (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-green-600 mb-2 text-center">
                {item.productName || "Unnamed Product"}
              </h2>

              {item.imageUrl && (
                <img
                  src={`http://localhost:5000/${item.imageUrl}`}
                  alt="product"
                  className="w-32 h-32 object-cover mx-auto rounded-lg shadow-md mb-3"
                />
              )}

              <div className="flex justify-center items-center h-48">
                <ResponsiveContainer width="80%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Healthy", value: score },
                        { name: "Unhealthy", value: 100 - score },
                      ]}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={2}
                    >
                      {COLORS.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <p
                className={`text-center font-bold text-lg mt-2 ${
                  score >= 75
                    ? "text-green-600"
                    : score >= 50
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                Verdict: {item.verdict || "N/A"}
              </p>

              <div className="mt-4 text-sm text-left">
                <p className="mb-2">
                  <strong className="text-green-600">✅ Pros:</strong>{" "}
                  {item.pros || "No data"}
                </p>
                <p className="mb-2">
                  <strong className="text-red-500">⚠️ Harms:</strong>{" "}
                  {item.harms || "No data"}
                </p>
                <p>
                  <strong className="text-pink-500">💡 Recommendation:</strong>{" "}
                  {item.recommendation || "No recommendation available"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
