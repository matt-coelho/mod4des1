const express = require("express")

const router = express.Router()

router.post("/produto", controller.create)
router.get("/produto", constroller.read)
router.put("/produto", constroller.update)
router.delete("/produto", constroller.remove)

module.exports = { router }
