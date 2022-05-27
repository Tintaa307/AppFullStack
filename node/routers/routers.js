import express from "express"
import {
  getAllBlogs,
  getOneBlog,
  createBlog,
  createBlog,
  deleteBlog,
} from "../controllers/blogController"

const router = express.Router()

router.get("/", getAllBlogs)
router.get("/:id", getOneBlog)
router.post("/", createBlog)
router.put("/:id", createBlog)
router.delete("/:id", deleteBlog)

export default router
