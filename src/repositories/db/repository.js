const Sequelize = require("sequelize")

const sequelize = new Sequelize(
  "postgres://iydascqg:OdbRTFG9Fpo1KgoGxULL5T-lUqGMgAT3@fanny.db.elephantsql.com/iydascqg",
  { dialect: "postgres", define: { timestamps: false } }
)

module.exports = { sequelize }
