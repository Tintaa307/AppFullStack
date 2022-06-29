import React from "react"
import CompCreateBlog from "../blog/CreateBlog.jsx"
import CompEditBlog from "../blog/EditBlog.jsx"
import CompShowBlog from "../blog/ShowBlog.jsx"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<CompShowBlog />} />
        <Route path="/create" element={<CompCreateBlog />} />
        <Route path="/edit/:id" element={<CompEditBlog />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
