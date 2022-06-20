const model = require("../models/produto.model.js")

async function create(produto) {
  try {
    return await model.create(produto)
  } catch (err) {
    throw err
  }
}

async function readAll(produto) {
  try {
    return await model.findAll()
  } catch (err) {
    throw err
  }
}

async function readByCode(produto) {
  try {
    return await model.findOne({ where: { codigo: produto.codigo } })
  } catch (err) {
    throw err
  }
}

async function readByPK() {
  try {
    return await model.findByPk(produto.id)
  } catch (err) {
    throw err
  }
}

async function update(produto) {
  try {
    await model.update(produto, { where: { id: produto.id } })
    return await read(produto)
  } catch (err) {
    throw err
  }
}

async function remove(produto) {
  try {
    const produto_r = await read(produto)
    await model.destroy({ where: { id: produto.id } })
    return produto_r
  } catch (err) {
    throw err
  }
}

module.exports = { create, readByPK, readByCode, readAll, update, remove }
