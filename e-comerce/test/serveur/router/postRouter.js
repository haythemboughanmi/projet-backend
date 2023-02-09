const router= require("express").Router()
const samir=require("../controllers/post")
router.post("/api/createposte",samir.addProduct)
router.get("/api/getAllPost",samir.getProduct)
router.put("/api/updatePost/:id",samir.updateProduct)
router.delete("/api/deletePost/:id",samir.deleteProduct)
module.exports={postrouter:router}

