import express from "express"
import cors from "cors"
import bd from "./database/db.js"
import blogRoutes from "./routers/routers.js"

const app = express()

// Hello world

app.get("/", (req, res) => {
  res.send("Hello world")
})

// Setting up the view engine

app.use(cors())
app.use(express.json())
app.use("/blogs", blogRoutes)

try {
  await bd.authenticate()
  console.log("Conexion exitosa")
} catch (error) {
  console.log("Error al conectar: " + error)
}

// Listen Port 8000
app.listen(8000, () => {
  console.log("Server started on port 8000")
})
