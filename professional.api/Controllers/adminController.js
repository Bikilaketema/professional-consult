const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const Admin = require("../Models/Admin");
const Token = require("../Models/Token");

exports.login = [
  body("username").trim().notEmpty().withMessage("Username is required").escape(),
  body("password").trim().notEmpty().withMessage("Password is required").escape(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    const admin = await Admin.findOne({ where: { username } });
    if (!admin) return res.status(401).json({ error: "Invalid credentials" });

    const isPasswordValid = await (password == admin.password);
    if (!isPasswordValid) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXPIRY_TIME });

    // Store the token in the database
    await Token.destroy({ where: { adminId: admin.id } });
    await Token.create({ adminId: admin.id, token });

    res.json({ message: "Logged in successfully", token });
  }
];


exports.logout = async (req, res) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
  
    if (!token) {
      return res.status(400).json({ error: "Token is required" });
    }
  
    // Remove token from the database
    await Token.destroy({ where: { token } });
  
    res.json({ message: "Logged out successfully" });
  };
  