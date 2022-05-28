const { DataTypes } = require('sequelize');
const {sequelize} = require("../services/bd.service");

const VideoModel = sequelize.define('Video', {
  // Model attributes are defined here
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true
  },

  estado: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

}, {
  // Other model options go here
tableName: 'videos',
timestamps: false 

});

module.exports = {
  VideoModel
};