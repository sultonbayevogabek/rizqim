const { Sequelize } = require('sequelize')
const { DB_URL } = require('../config')
const {
   User, Portfolio, Experience, Education, Language, Skill, Board, Message, Admin, Sponsor, Statistics
} = require('../models/UserModel')

const sequelize = new Sequelize(DB_URL, {
   logging: false
})

module.exports = async function () {
   const db = {}

   db.users = await User(Sequelize, sequelize)
   db.portfolios = await Portfolio(Sequelize, sequelize)
   db.experiences = await Experience(Sequelize, sequelize)
   db.educations = await Education(Sequelize, sequelize)
   db.languages = await Language(Sequelize, sequelize)
   db.skills = await Skill(Sequelize, sequelize)
   db.boards = await Board(Sequelize, sequelize)
   db.messages = await Message(Sequelize, sequelize)
   db.admins = await Admin(Sequelize, sequelize)
   db.sponsors = await Sponsor(Sequelize, sequelize)
   db.statistics = await Statistics(Sequelize, sequelize)

   // Relationships
   db.users.hasMany(db.portfolios, {
      foreignKey: { name: 'user_id', allowNull: false }
   })

   db.portfolios.belongsTo(db.users, {
      foreignKey: { name: 'user_id', allowNull: false }
   })

   db.users.hasMany(db.experiences, {
      foreignKey: { name: 'user_id', allowNull: false }
   })

   db.users.hasMany(db.languages, {
      foreignKey: { name: 'user_id', allowNull: false }
   })

   db.languages.belongsTo(db.users, {
      foreignKey: { name: 'user_id', allowNull: false }
   })

   db.experiences.belongsTo(db.users, {
      foreignKey: { name: 'user_id', allowNull: false }
   })

   db.users.hasMany(db.educations, {
      foreignKey: { name: 'user_id', allowNull: false }
   })

   db.educations.belongsTo(db.users, {
      foreignKey: { name: 'user_id', allowNull: false }
   })

   db.users.hasOne(db.admins, {
      foreignKey: {
         name: 'user_id', allowNull: false
      }
   })

   db.admins.belongsTo(db.users, {
      foreignKey: {
         name: 'user_id', allowNull: false
      }
   })

   await sequelize.sync({ force: false })
   return db
}
