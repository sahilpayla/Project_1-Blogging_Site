const express = require('express');
const router = express.Router();
const authors = require("../controller/authorController")
const blogs = require("../controller/blogController")
const middleware = require("../middleware/middleware")


router.post("/authors", authors.createAuthor) //no need to enter token

// LOGIN AUTHOR
router.post("/login", authors.loginAuthor) //no need to enter token

// BLOG CONTROLLER
router.post("/blogs", blogs.createBlog) //no need to enter token

router.get("/blogs", middleware.mid1,middleware.mid2, blogs.getBlog)

router.put("/blogs/:blogId", middleware.mid1, middleware.mid2,  blogs.updateBlog)

router.delete("/deleteBlog/:blogId", middleware.mid1,middleware.mid2, blogs.deleteBlog)

router.delete("/blogs", middleware.mid1, blogs.deleteBlogsQueryParams)




module.exports = router;