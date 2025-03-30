const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./Config/database"); // Database connection
const adminRoutes = require("./Routes/adminRoutes");
const schoolRoutes = require("./Routes/schoolRoutes");
const teacherRoutes = require("./Routes/teacherRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/schools", schoolRoutes);
app.use("/api/teachers", teacherRoutes);

// Sync Database (Auto Migration)
sequelize.sync({ alter: true }) // This ensures auto-migration
  .then(() => console.log("Database synced successfully! 🚀"))
  .catch(err => console.error("Database sync error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
