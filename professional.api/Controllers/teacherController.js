const { body, validationResult } = require("express-validator");
const Teacher = require("../Models/Teacher");

exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    if (!teachers || teachers.length === 0) {
      return res.status(404).json({ error: "No teachers found" });
    }
    res.json(teachers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch teachers" });
  }
};

exports.createTeacher = [
  // Validation rules
  body("fname").notEmpty().withMessage("First name is required").trim().escape(),
  body("mname").notEmpty().withMessage("Middle name is required").trim().escape(),
  body("lname").notEmpty().withMessage("Last name is required").trim().escape(),
  body("subject").notEmpty().withMessage("Subject is required").trim().escape(),
  body("zone").notEmpty().withMessage("Zone is required").trim().escape(),
  body("town").notEmpty().withMessage("Town is required").trim().escape(),
  body("phoneNumber").isMobilePhone().withMessage("Invalid phone number"),

  // Controller logic
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fname, mname, lname, subject, zone, town, phoneNumber } = req.body;

    try {
      const teacher = await Teacher.create({
        fname,
        mname,
        lname,
        subject,
        zone,
        town,
        phoneNumber,
      });
      res.status(201).json(teacher);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create teacher" });
    }
  },
];

exports.updateTeacher = [
  // Validation rules
  body("fname").optional().notEmpty().withMessage("First name is required").trim().escape(),
  body("mname").optional().notEmpty().withMessage("Middle name is required").trim().escape(),
  body("lname").optional().notEmpty().withMessage("Last name is required").trim().escape(),
  body("subject").optional().notEmpty().withMessage("Subject is required").trim().escape(),
  body("zone").optional().notEmpty().withMessage("Zone is required").trim().escape(),
  body("town").optional().notEmpty().withMessage("Town is required").trim().escape(),
  body("phoneNumber").optional().isMobilePhone().withMessage("Invalid phone number"),

  // Controller logic
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { fname, mname, lname, subject, zone, town, phoneNumber } = req.body;

    try {
      const teacher = await Teacher.findByPk(id);
      if (!teacher) {
        return res.status(404).json({ error: "Teacher not found" });
      }

      await Teacher.update(
        { fname, mname, lname, subject, zone, town, phoneNumber },
        { where: { id } }
      );
      const updatedTeacher = await Teacher.findByPk(id);
      res.json({ message: "Teacher updated", teacher: updatedTeacher });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update teacher" });
    }
  },
];

exports.deleteTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const teacher = await Teacher.findByPk(id);
    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    await Teacher.destroy({ where: { id } });
    res.json({ message: "Teacher deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete teacher" });
  }
};