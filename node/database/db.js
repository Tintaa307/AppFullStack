import sequelize from "sequelize"

const bd = new sequelize("database_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
})

export default bd
