const { body, validationResult } = require("express-validator");
const School = require("../Models/School");

exports.getAllSchools = async (req, res) => {
  try {
    const schools = await School.findAll();
    if (!schools) return res.status(404).json({ error: "No schools found" });
    res.json(schools);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch schools" });
  }
};

exports.createSchool = [
  // Validation rules
  body("schoolName").notEmpty().withMessage("School name is required").trim().escape(),
  body("gradeLevel").notEmpty().withMessage("Grade level is required").trim().escape(),
  body("subjectsNeeded").isArray().withMessage("Subjects needed must be an array"),
  body("numberOfTeachersNeeded").isNumeric().withMessage("Number of teachers needed must be a number"),
  body("trainingType").notEmpty().withMessage("Training type is required").trim().escape(),
  body("phoneNumber").isMobilePhone().withMessage("Invalid phone number"),

  // Controller logic
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { schoolName, gradeLevel, subjectsNeeded, numberOfTeachersNeeded, trainingType, phoneNumber } = req.body;

    try {
      const school = await School.create({
        schoolName,
        gradeLevel,
        subjectsNeeded,
        numberOfTeachersNeeded,
        trainingType,
        phoneNumber,
      });
      res.status(201).json(school);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create school" });
    }
  },
];

exports.updateSchool = [
    // Validation rules
    body("schoolName").optional().notEmpty().withMessage("School name is required").trim().escape(),
    body("gradeLevel").optional().notEmpty().withMessage("Grade level is required").trim().escape(),
    body("subjectsNeeded").optional().isArray().withMessage("Subjects needed must be an array"),
    body("numberOfTeachersNeeded").optional().isNumeric().withMessage("Number of teachers needed must be a number"),
    body("trainingType").optional().notEmpty().withMessage("Training type is required").trim().escape(),
    body("phoneNumber").optional().isMobilePhone().withMessage("Invalid phone number"),

    // Controller logic
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { schoolName, gradeLevel, subjectsNeeded, numberOfTeachersNeeded, trainingType, phoneNumber } = req.body;

        try {
            const school = await School.findByPk(id);
            if (!school) {
                return res.status(404).json({ error: "School not found" });
            }

            await School.update(
                { schoolName, gradeLevel, subjectsNeeded, numberOfTeachersNeeded, trainingType, phoneNumber },
                { where: { id } }
            );
            const updatedSchool = await School.findByPk(id);
            res.json({ message: "School updated", school: updatedSchool });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to update school" });
        }
    },
];

exports.deleteSchool = async (req, res) => {
    const { id } = req.params;

    try {
        const school = await School.findByPk(id);
        if (!school) {
            return res.status(404).json({ error: "School not found" });
        }

        await School.destroy({ where: { id } });
        res.json({ message: "School deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete school" });
    }
};