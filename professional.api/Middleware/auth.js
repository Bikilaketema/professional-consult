const jwt = require("jsonwebtoken");
const Token = require("../Models/Token");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    // Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the token exists and belongs to the correct admin ID
    const storedToken = await Token.findOne({ where: { token, adminId: decoded.id } });

    if (!storedToken) {
      return res.status(403).json({ error: "Invalid or expired token." });
    }

    req.user = decoded; // Attach admin info to the request
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      // If the token is expired, remove it from the database
      await Token.destroy({ where: { token } });
      return res.status(403).json({ error: "Token expired. Please log in again." });
    }

    return res.status(403).json({ error: "Invalid or expired token." });
  }
};

module.exports = authMiddleware;
