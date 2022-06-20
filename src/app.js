import express from "express"
import cors from "cors"
import routerProduto from "./routes/produto.route.js"

const app = express(cors)
app.use(express.json())

app.use("/", routerProduto)

app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message })
})

export default app
