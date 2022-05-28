import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./showBlog.css"

const URL = "http://localhost:8000/blogs/"

const CompShowBlog = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    getBlogs()
  }, [])

  // procedimiento para obtener los blogs
  const getBlogs = async () => {
    const res = await axios.get(URL)
    setBlogs(res.data)
  }

  // procedimiento para el
  const deleteBlog = async (id) => {
    axios.delete(`${URL}/${id}`)
    getBlogs()
  }

  return (
    <div className="container">
      <h1>App full Stack</h1>
      <div className="row">
        <div className="col">
          <Link to={"/create"} className="btn btn-primary mt-2 mb-2">Crear</Link>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Accions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.content}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteBlog(blog.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CompShowBlog
