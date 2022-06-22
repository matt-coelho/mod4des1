import Sequelize from "sequelize"
import dotenv from "dotenv"

dotenv.config()

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.sql_server,
  port: process.env.sql_port,
  database: process.env.sql_db,
  username: process.env.sql_user,
  password: process.env.sql_pass,
  logging: false,
})

export default sequelize
