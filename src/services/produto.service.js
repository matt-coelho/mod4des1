const repository = require("../repositories/produto.repository.js")

async function create(produto) {
  return await repository.create(produto)
}

async function read(produto) {
  if (!produto.id || !produto.codigo) {
    return await repository.readAll()
  }
  if (produto.id) {
    return await repository.readByPK(produto)
  }
  if (produto.codigo) {
    return await repository.readByCode(produto)
  }
}

async function update(produto) {
  return await repository.update(produto)
}

async function remove(produto) {
  return await repository.remove(produto)
}

module.exports = { create, read, update, remove }
