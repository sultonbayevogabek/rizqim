const {Sequelize, DataTypes: {STRING, UUIDV4}} = require('sequelize')
const {CONNECTION_STRING} = require('./config')

module.exports = async () => {
   const sequelize = new Sequelize(CONNECTION_STRING, {
      logging: true
   })

   const User = sequelize.define('User', {
      userId: {
         type: STRING,
         defaultValue: UUIDV4,
         primaryKey: true
      },
      firstName: {
         type: STRING,
         allowNull: false
      },
      lastName: {
         type: STRING,
         allowNull: false
      },
      email: {
         type: STRING,
         allowNull: false,
         unique: true
      }
   })
}
