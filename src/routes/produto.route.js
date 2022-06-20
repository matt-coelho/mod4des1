const express = require("express")

const router = express.Router()

router.post("/produto", controller.create)
router.get("/produto/:id", constroller.read)
router.put("/produto", constroller.update)
router.delete("/produto/:id", constroller.remove)

module.exports = { router }
