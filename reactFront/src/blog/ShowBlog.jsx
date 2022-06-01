import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./showBlog.css"

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
    <div className="container">
      <h1>App full Stack</h1>
      <div className="row">
        <div className="col">
          <Link to={"/create"} className="btn btn-primary mt-2 mb-4">Crear</Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Accions</th>
              </tr>
            </thead>
            <tbody>
              {
                blogs.map((blog) => (
                  <tr key={blog.id}>
                    <td>{blog.title}</td>
                    <td>{blog.content}</td>
                    <td>
                      <Link to={`/edit/${blog.id}`} className="btn btn-info"><i class="ri-edit-box-line"></i></Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteBlog(blog.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CompShowBlog
