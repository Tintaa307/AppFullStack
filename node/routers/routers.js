import express from "express"
import {
  getAllBlogs,
  getOneBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController"

const router = express.Router()

router.get("/", getAllBlogs)
router.get("/:id", getOneBlog)
router.post("/", createBlog)
router.put("/:id", updateBlog)
router.delete("/:id", deleteBlog)

export default router
