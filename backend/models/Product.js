// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   productName: { type: String },
//   imageUrl: { type: String },
//   extractedText: { type: String },
//   healthScore: { type: Number },
//   harms: { type: String },
//   pros: { type: String },
//   recommendation: { type: String },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Product", productSchema);


// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  productName: { type: String },
  category: { type: String }, // food | cosmetic | medicine | other
  detectedCategoryConfidence: { type: Number, default: 0 },
  imageUrl: { type: String },
  extractedText: { type: String },
  usabilityPercentage: { type: Number },
  verdict: { type: String },
  pros: { type: String },
  harms: { type: String },
  recommendation: { type: String },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
