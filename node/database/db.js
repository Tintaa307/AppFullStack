import { Sequelize } from "sequelize"

const bd = new Sequelize("databse_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
})

export default bd
