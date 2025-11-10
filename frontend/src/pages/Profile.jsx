import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500 dark:text-gray-300">
        Loading profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        Failed to load profile. Please log in again.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md text-center border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-6">
          My Profile
        </h2>
        <p className="text-lg mb-2">
          <strong>Name:</strong> {user.name || "Unknown"}
        </p>
        <p className="text-lg mb-2">
          <strong>Email:</strong> {user.email || "Not available"}
        </p>
        <p className="text-lg">
          <strong>Products Analyzed:</strong>{" "}
          <span className="text-green-600 dark:text-green-400 font-semibold">
            {user.productCount ?? 0}
          </span>
        </p>
      </div>
    </div>
  );
}
