import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { motion } from "framer-motion"

const URI = "http://localhost:8000/blogs/"

const CompEditBlog = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  // procedimiento para guardar
  const update = async (e) => {
    e.preventDefault()
    await axios.put(URI + id, {
      title: title,
      content: content,
    })
    navigate("/")
  }

  useEffect(() => {
    getBlogById()
  }, [])

  const getBlogById = async () => {
    const res = await axios.get(URI + id)
    setTitle(res.data.title)
    setContent(res.data.content)
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
      <h1>Edit Blog</h1>
      <form onSubmit={update}>
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
          Save
        </button>
      </form>
    </motion.div>
  )
}

export default CompEditBlog
