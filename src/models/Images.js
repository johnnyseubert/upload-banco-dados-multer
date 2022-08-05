const sequelize = require('../database')
const { DataTypes } = require('sequelize')

const ImageModel = sequelize.define('images', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
   },
   filename: DataTypes.STRING,
   imageText: DataTypes.TEXT
})

module.exports = ImageModel