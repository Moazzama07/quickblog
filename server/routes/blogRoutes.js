import express from 'express';
import { addBlog, addComment, deleteBlogById, getAllBlogs, generateContent, getBlogById, getBlogComments, togglePublish } from '../controllers/blogControllers.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const blogRouter = express.Router();

// Add blog
blogRouter.post("/add", upload.single('image'), auth, addBlog);

// Get all blogs
blogRouter.get("/all", getAllBlogs);  // static route first

// Get blog by ID
blogRouter.get("/:blogId", getBlogById);  // dynamic route last

// Delete blog
blogRouter.post("/delete", auth, deleteBlogById);

// Toggle publish status
blogRouter.post("/toggle-publish", auth, togglePublish);

blogRouter.post("/add-comment", addComment);
blogRouter.post("/comments", getBlogComments);
blogRouter.post("/generate", auth, generateContent);

export default blogRouter;
