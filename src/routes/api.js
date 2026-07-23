const express = require("express");
const router = express.Router();

const {
  home,
  health,
  status,
  version
} = require("../controllers/apiController");

router.get("/", home);
router.get("/health", health);
router.get("/status", status);
router.get("/version", version);

module.exports = router;
