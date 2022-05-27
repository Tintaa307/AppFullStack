import bd from "../database/db.js"
import { DataTypes } from "sequelize"

const BlogModel = bd.define("Blog", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
})

export default BlogModel
