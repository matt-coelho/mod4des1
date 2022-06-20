import Sequelize from "sequelize"

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "postgres",
  username: "postgres",
  password: "admin",
  logging: false,
})

export default sequelize
