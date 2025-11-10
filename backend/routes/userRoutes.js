const express = require("express");
const router = express.Router();

// ✅ Correct imports — using destructuring
const { getUserProfile } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

// ✅ Ensure both are real functions
console.log({
  getUserProfileType: typeof getUserProfile,
  protectType: typeof protect
});

// ✅ Profile Route
router.get("/profile", protect, getUserProfile);

module.exports = router;
