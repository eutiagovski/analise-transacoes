const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Registro = sequelize.define("registro", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dataTransacao: {
    type: DataTypes.STRING,
  },
  dataImportacao: {
    type: DataTypes.STRING,
  },
});

// Registro.sync({force: true});
module.exports = Registro;
