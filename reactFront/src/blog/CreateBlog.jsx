import axios from "axios"
import { useState, useEffect } from "react"
import { link } from "react-router-dom"

const URL = "http://localhost:8000/blogs"

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
    await axios.delete(`${URL}/${id}`)
    getBlogs()
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
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
                    <link to={`/edit/${blog.id}`} className="btn btn-info">
                      Editar
                    </link>
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
