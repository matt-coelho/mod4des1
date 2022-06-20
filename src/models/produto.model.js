const Sequelize = require("sequelize")
const db = require("../repositories/db/repository.js")

const produto = db.define("produto", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  codigo: { type: Sequelize.STRING, allowNull: false },
  descricao: { type: Sequelize.STRING, allowNull: false },
  preco: { type: Sequelize.DOUBLE, allowNull: false },
})

module.exports = { produto }
