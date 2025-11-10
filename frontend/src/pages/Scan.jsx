// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Scan() {
//   const [productName, setProductName] = useState("");
//   const [image, setImage] = useState(null);
//   const [category, setCategory] = useState(""); // ✅ FIX: define category
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!image || !productName) return alert("Please fill all fields!");

//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append("productName", productName);
//       formData.append("category", category); // ✅ now works properly
//       formData.append("image", image);

//       const token = localStorage.getItem("token");
//       const res = await axios.post(
//         "https://project-eta-self-45.vercel.app/api/products/scan",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setLoading(false);
//       navigate("/result", { state: { result: res.data } });
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//       alert("Error analyzing product. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-green-50 dark:bg-gray-900 flex flex-col items-center justify-center py-8 px-4">
//       <h1 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-6">
//         Upload / Scan Product
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md space-y-4"
//       >
//         {/* Product Name */}
//         <input
//           type="text"
//           placeholder="Enter product name"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//           className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
//         />

//         {/* Category Dropdown */}
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
//         >
//           <option value="">Select Category</option>
//           <option value="food">Food</option>
//           <option value="cosmetic">Cosmetic / Beauty</option>
//           <option value="medicine">Medicine</option>
//           <option value="other">Other</option>
//         </select>

//         {/* Image Upload */}
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-md transition disabled:bg-gray-400"
//         >
//           {loading ? "Analyzing..." : "Analyze Product"}
//         </button>
//       </form>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Scan() {
//   const [productName, setProductName] = useState("");
//   const [image, setImage] = useState(null);
//   const [category, setCategory] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!image || !productName) return alert("Please fill all fields!");

//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append("productName", productName);
//       formData.append("category", category);
//       formData.append("image", image);

//       const token = localStorage.getItem("token");
//       const res = await axios.post(
//         "https://project-eta-self-45.vercel.app/api/products/scan",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // ✅ Save the full response for Result page
//       localStorage.setItem("result", JSON.stringify(res.data));

//       setLoading(false);
//       navigate("/result");
//     } catch (err) {
//       console.error("Scan failed:", err);
//       setLoading(false);
//       alert("Error analyzing product. Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center py-8 px-4">
//       <h1 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-6">
//         Upload / Scan Product
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md space-y-4"
//       >
//         <input
//           type="text"
//           placeholder="Enter product name"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//           className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
//         />

//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
//         >
//           <option value="">Select Category</option>
//           <option value="food">Food</option>
//           <option value="cosmetic">Cosmetic / Beauty</option>
//           <option value="medicine">Medicine</option>
//           <option value="other">Other</option>
//         </select>

//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-md transition disabled:bg-gray-400"
//         >
//           {loading ? "Analyzing..." : "Analyze Product"}
//         </button>
//       </form>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Scan() {
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !productName) return alert("Please fill all fields!");

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("category", category);
      formData.append("image", image);

      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://project-eta-self-45.vercel.app/api/products/scan",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLoading(false);
      navigate("/result", { state: { result: res.data } });
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Error analyzing product. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-8 text-center">
        Upload / Scan Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl shadow-xl p-8 
                   bg-white dark:bg-gray-800 
                   border border-gray-200 dark:border-gray-700 
                   transition-all duration-500"
      >
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-3 rounded-md border 
                       border-gray-300 dark:border-gray-600 
                       bg-gray-50 dark:bg-gray-700 
                       text-gray-900 dark:text-gray-100 
                       focus:ring-2 focus:ring-green-500 outline-none 
                       transition"
          />
        </div>

        {/* Category Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 rounded-md border 
                       border-gray-300 dark:border-gray-600 
                       bg-gray-50 dark:bg-gray-700 
                       text-gray-900 dark:text-gray-100 
                       focus:ring-2 focus:ring-green-500 outline-none 
                       transition"
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="cosmetic">Cosmetic / Beauty</option>
            <option value="medicine">Medicine</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 rounded-md border 
                       border-gray-300 dark:border-gray-600 
                       bg-gray-50 dark:bg-gray-700 
                       text-gray-900 dark:text-gray-100 
                       file:mr-4 file:py-2 file:px-4 file:rounded-md 
                       file:border-0 file:text-sm file:font-semibold 
                       file:bg-green-100 dark:file:bg-green-800 
                       file:text-green-700 dark:file:text-green-100 
                       hover:file:bg-green-200 dark:hover:file:bg-green-700"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-md 
                     bg-green-600 hover:bg-green-700 
                     text-white font-semibold 
                     transition disabled:bg-gray-400"
        >
          {loading ? "Analyzing..." : "Analyze Product"}
        </button>
      </form>
    </div>
  );
}
