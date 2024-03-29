import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./showBlog.css"
import { motion } from "framer-motion"

const URI = "http://localhost:8000/blogs/"

const CompShowBlog = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    getBlogs()
  }, [])

  // procedimiento para obtener los blogs
  const getBlogs = async () => {
    const res = await axios.get(URI)
    setBlogs(res.data.data)
  }

  // procedimiento para borrar los blogs
  const deleteBlog = async (id) => {
    axios.delete(`${URI}${id}`)
    getBlogs()
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
      <h1>App full Stack</h1>
      <div className="row">
        <div className="col">
          <Link to={"/create"} className="btn btn-primary">
            Create<i class="ri-add-fill"></i>
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Accions</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.content}</td>
                  <td>
                    <Link to={`/edit/${blog.id}`} className="link">
                      <i class="ri-edit-box-line"></i>
                    </Link>
                    <button
                      className="btn-delete"
                      onClick={() => deleteBlog(blog.id)}
                    >
                      <i class="ri-delete-bin-line"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  )
}

export default CompShowBlog
