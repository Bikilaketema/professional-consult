const { DataTypes } = require("sequelize");
const sequelize = require("../Config/database");
const Admin = require("./Admin");

const Token = sequelize.define("Token", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  adminId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Admin,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Token;
