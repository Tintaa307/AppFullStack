import './App.css'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import CompShowBlog from './blog/ShowBlog.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CompCreateBlog from './blog/CreateBlog.jsx'
import CompEditBlog from './blog/EditBlog.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowBlog />} />
          <Route path="/create" element={<CompCreateBlog />} />
          <Route path="/edit/:id" element={<CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
