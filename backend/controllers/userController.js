const Product = require("../models/Product");
const User = require("../models/User");

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ Correctly count products linked by user ID
    const analyzedCount = await Product.countDocuments({ user: req.user._id });

    res.json({
      name: user.name,
      email: user.email,
      analyzedCount,
    });
  } catch (error) {
    console.error("Error fetching profile:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
