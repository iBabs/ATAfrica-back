import express from 'express'
import { createStock, deleteStock, editStock, getSingleStock, getStock } from '../controllers/stockController.js'

const route = express.Router()

route.get('/stocks', getStock)
route.post('/stock', createStock)
route.get('/stocks/:id', getSingleStock)
route.delete('/stocks/:id', deleteStock)
route.put('/stocks/:id', editStock)


export default route