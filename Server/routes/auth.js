import express from "express";
import { model } from "mongoose";

const router = express.Router();

router.get("/register", (req, res) => {
  res.send("register user");
});

module.exports = router;
