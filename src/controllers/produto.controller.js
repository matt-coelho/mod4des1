import service from "../services/produto.service.js"

async function create(req, res, next) {
  const produto = req.body
  try {
    if (!produto.codigo || !produto.descricao || !produto.preco) {
      throw new Error("Campos obrigatorios para produto não informados")
    }
    const p = await service.read(produto)
    if (p.id) {
      produto.id = p.id
      res.send(await service.update(produto))
    }
    res.status(201).send(await service.create(produto))
  } catch (err) {
    next(err)
  }
}

async function read(req, res, next) {
  const produto = { id: parseInt(req.params.id) }
  console.log(produto)
  try {
    res.send(await service.read(produto))
  } catch (err) {
    next(err)
  }
}

async function update(req, res, next) {
  const produto = req.body
  try {
    if (
      !produto.id ||
      !produto.codigo ||
      !produto.descricao ||
      !produto.preco
    ) {
      throw new Error("Campos obrigatorios nao informados")
    }
    res.send(await service.update(produto))
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  let produto_r = { id: req.params.id }
  try {
    if (!produto_r.id) {
      throw new Error("Produto não informado")
    }
    const produto_f = await service.read(produto_r)
    if (!produto_f.codigo || !produto_f.preco) {
      res.status(405).send(JSON.stringify({ error: `Produto não encontrado.` }))
    }
    res.send(await service.remove(produto_r))
  } catch (err) {
    next(err)
  }
}

export default { create, read, update, remove }
