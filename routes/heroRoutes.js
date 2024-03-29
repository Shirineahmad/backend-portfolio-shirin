const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const {
  getAllHero,
  getHeroByID,
  addHero,
  updateHeroByID,
  deleteHeroByID,
} = require("../controllers/heroControllers");

router.get("/getAll", getAllHero);
router.get("/getByID/:ID", getHeroByID);
router.post("/add", upload.single("image"), addHero);
router.put("/update/:ID", upload.single("image"), updateHeroByID);
router.delete("/delete/:ID", deleteHeroByID);

module.exports = router;
