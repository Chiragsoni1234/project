// controllers/productController.js
const Product = require("../models/Product");
const { analyzeText } = require("../utils/geminiAPI");

// ✅ Scan and save analyzed product
const scanProduct = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const { productName } = req.body;
    const imageUrl = req.file ? req.file.path : null;

    if (!productName) {
      return res.status(400).json({ message: "Product name is required" });
    }

    const extractedText = `Detected text from image: ${productName}`;
    const analysis = await analyzeText(extractedText);

    const product = new Product({
      user: req.user._id,
      productName,
      category: analysis.category || "unknown",
      detectedCategoryConfidence: analysis.detectedCategoryConfidence || 0,
      imageUrl,
      extractedText,
      usabilityPercentage: analysis.usabilityPercentage || 50,
      verdict: analysis.verdict || "Use with caution",
      pros: Array.isArray(analysis.pros) ? analysis.pros.join(", ") : analysis.pros || "No data available",
      harms: Array.isArray(analysis.harms) ? analysis.harms.join(", ") : analysis.harms || "No data available",
      recommendation: analysis.recommendation || "No recommendation available",
    });

    await product.save();

    if (req.user.history) {
      req.user.history.push(product._id);
      await req.user.save();
    }

    res.json(product);
  } catch (err) {
    console.error("❌ Error in scanProduct:", err.message);
    res.status(500).json({ message: "Server error in scanProduct" });
  }
};

// ✅ Fetch all products scanned by this user
const getHistory = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error("❌ Error in getHistory:", err.message);
    res.status(500).json({ message: "Server error in getHistory" });
  }
};

// ✅ Export both properly
module.exports = {
  scanProduct,
  getHistory,
};
