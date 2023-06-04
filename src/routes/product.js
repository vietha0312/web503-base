import express from 'express'
import { create, getAll, getOne, remove, update } from '../controllers/product'


const router = express.Router()
router.get("/products", getAll)
router.get("/products", getOne)
router.post("/products", create)
router.put("/products/:id", update)
router.delete("/products/:id", remove)

export default router