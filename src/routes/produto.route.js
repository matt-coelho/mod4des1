import express from "express"
import controller from "../controllers/produto.controller.js"

const router = express.Router()

router.post("/produto", controller.create)
router.get("/produtos", controller.read)
router.get("/produto/:id", controller.read)
router.put("/produto", controller.update)
router.delete("/produto/:id", controller.remove)

export default router
