const service = require("../services/produto.service.js")

async function create(req, res, next) {
  const produto = req.body
  if (!produto.codigo || !produto.descricao || !produto.preco) {
    throw new Error("Campos obrigatorios para produto não informados")
  }
  res.send(await service.create(produto))
}
