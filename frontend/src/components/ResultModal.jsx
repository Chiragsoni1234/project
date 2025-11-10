import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function ResultModal({ item, onClose }) {
  if (!item) return null;

  const data = [
    { name: "Healthy", value: item.healthScore || 0 },
    { name: "Unhealthy", value: 100 - (item.healthScore || 0) },
  ];

  const COLORS = ["#16a34a", "#ef4444"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 w-[90%] md:w-[600px]">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-2xl font-semibold text-green-600">{item.productName}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            ✖
          </button>
        </div>

        {/* Image */}
        {item.imageUrl && (
          <img
            src={`http://localhost:5000/${item.imageUrl}`}
            alt={item.productName}
            className="rounded-lg mb-4 mx-auto max-h-48 object-cover"
          />
        )}

        {/* Score Chart */}
        <div className="w-full h-48 flex justify-center items-center">
          <ResponsiveContainer width="60%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Info */}
        <div className="mt-4 text-gray-800 dark:text-gray-200">
          <p className="font-semibold mb-1">
            Health Score:{" "}
            <span className="text-green-600 font-bold">
              {item.healthScore || "N/A"}
            </span>
          </p>
          <p className="font-semibold mb-1">
            Recommendation:{" "}
            <span
              className={`${
                item.recommendation === "Avoid" ? "text-red-500" : "text-green-500"
              } font-bold`}
            >
              {item.recommendation}
            </span>
          </p>

          <div className="mt-4">
            <h3 className="font-semibold text-lg text-green-700">Pros ✅</h3>
            <ul className="list-disc list-inside">
              {item.pros
                ? item.pros.split(",").map((pro, i) => (
                    <li key={i} className="text-green-600">
                      {pro.trim()}
                    </li>
                  ))
                : "No pros listed"}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg text-red-700">Harms ⚠️</h3>
            <ul className="list-disc list-inside">
              {item.harms
                ? item.harms.split(",").map((harm, i) => (
                    <li key={i} className="text-red-600">
                      {harm.trim()}
                    </li>
                  ))
                : "No harms listed"}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
