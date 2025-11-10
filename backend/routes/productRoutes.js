const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const { scanProduct, getHistory } = require("../controllers/productController");

console.log({
  protectType: typeof protect,
  uploadType: typeof upload,
  uploadSingleType: typeof upload.single,
  scanProductType: typeof scanProduct,
  getHistoryType: typeof getHistory,
});

if (typeof getHistory !== "function") {
  console.error("❌ Route definition failed: getHistory is not a function");
}

router.post("/scan", protect, upload.single("image"), scanProduct);
router.get("/history", protect, getHistory);

module.exports = router;
