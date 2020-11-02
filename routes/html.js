const router = require("express").Router();
const path = require("path");

//need a route for "/"
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"../public/index.html"));
  });
//need a route for "/exercise"
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname,"../public/exercise.html"));
  });
//need a route for "/stats"
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname,"../public/stats.html"));
  });
  

module.exports = router;