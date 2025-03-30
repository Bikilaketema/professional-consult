const express = require("express");
const { getAllSchools, createSchool, updateSchool, deleteSchool } = require("../Controllers/schoolController");
const authMiddleware = require("../Middleware/auth");
const rateLimitMiddleware = require("../Middleware/throttleMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getAllSchools);
router.post("/", rateLimitMiddleware,createSchool);
router.patch("/:id", authMiddleware, updateSchool);
router.delete("/:id", authMiddleware, deleteSchool);

module.exports = router;
