import BlogModel from "../models/BlogModels.js"

// Show all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll()
    res.json({ message: "Success!" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Show one blog
export const getOneBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findAll({
      where: { id: req.params.id },
    })
    res.json({ message: "Blog found!" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a new blog
export const createBlog = async (req, res) => {
  try {
    const blog = await BlogModel.create(req.body)
    res.json({ message: "Blog created successfully!" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Update a blog
export const updateBlog = async (req, res) => {
  try {
    const blog = await BlogModel.update(req.body, {
      where: { id: req.params.id },
    })
    res.json({ message: "Blog updated!" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Delete a blog
export const deleteBlog = async (req, res) => {
  try {
    const blog = await BlogModel.destroy({
      where: { id: req.params.id },
    })
    res.json({ message: "Blog deleted!" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
