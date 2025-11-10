// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const userRoutes = require("./routes/userRoutes");

// dotenv.config();
// connectDB();

// const app = express();
// // ✅ Step 1: Configure CORS BEFORE any routes
// const allowedOrigins = [
//   "https://project-cksm.vercel.app", // your frontend domain
//   "http://localhost:3000"            // optional for dev
// ];

// app.use(
//   cors({
//     origin: allowedOrigins,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

// // ✅ Step 2: Handle preflight requests explicitly
// app.options("*", cors({
//   origin: allowedOrigins,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true,
// }));

// app.use(express.json());
// app.use("/uploads", express.static("uploads")); // serve uploaded images

// // Routes
// app.use("/api/auth", require("./routes/authRoutes"));
// // Add product routes
// app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));
// app.get("/", (req, res) => {
//   res.json("hello vercel");
// });
// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();

const app = express();
// ✅ Step 1: Configure CORS BEFORE any routes
const allowedOrigins = [
  "https://project-cksm.vercel.app", // your frontend domain
  "http://localhost:3000"            // optional for dev
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);


app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve uploaded images

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
// Add product routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.get("/", (req, res) => {
  res.json("hello vercel");
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

