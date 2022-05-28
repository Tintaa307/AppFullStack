import './App.css'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import CompShowBlog from './blog/ShowBlog.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
