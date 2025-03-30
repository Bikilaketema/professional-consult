const express = require("express");
const { getAllTeachers, createTeacher, updateTeacher, deleteTeacher } = require("../Controllers/teacherController");
const authMiddleware = require("../Middleware/auth");
const rateLimitMiddleware = require("../Middleware/throttleMiddleware");
const router = express.Router();

router.get("/", authMiddleware, getAllTeachers);
router.post("/", rateLimitMiddleware, createTeacher);
router.patch("/:id", authMiddleware, updateTeacher);
router.delete("/:id", authMiddleware, deleteTeacher);

module.exports = router;
