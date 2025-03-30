const { DataTypes } = require("sequelize");
const sequelize = require("../Config/database");

const School = sequelize.define("School", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    schoolName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gradeLevel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subjectsNeeded: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    numberOfTeachersNeeded: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    trainingType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = School;
