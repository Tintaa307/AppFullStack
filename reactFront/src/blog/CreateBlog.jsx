import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const URI = "http://localhost:8000/blogs/"

const CompCreateBlog = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()

  // procedimiento para guardar
  const saveBlog = async (e) => {
    e.preventDefault()
    await axios.post(URI, {
      title,
      content,
    })
    navigate("/")
  }

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        width: window.innerWidth,
        transition: { duration: 0.4, type: "spring", bounce: 0.6 },
      }}
      className="container"
    >
      <h1>Create Blog</h1>
      <form onSubmit={saveBlog}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            type="text"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </motion.div>
  )
}

export default CompCreateBlog
