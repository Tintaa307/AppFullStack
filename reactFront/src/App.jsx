import "./App.css"
import Home from "./components/home/Home"
import Nav from "./components/nav/Nav"
import CompShowBlog from "./blog/ShowBlog.jsx"
import { BrowserRouter } from "react-router-dom"
import CompCreateBlog from "./blog/CreateBlog.jsx"
import CompEditBlog from "./blog/EditBlog.jsx"
import AnimatedRoutes from "./components/AnimatedRoutes"

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
