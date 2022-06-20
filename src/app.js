const express = require("express")
const routerProduto = require("./routes/produto.route.js")

const app = express()
app.use(express.json())

app.use("/", routerProduto)

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message })
})

module.exports = { app }
