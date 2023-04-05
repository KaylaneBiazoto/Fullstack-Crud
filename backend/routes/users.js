import express from 'express'
import { getUsers, addUser, updateUser, deleteUser } from '../controllers/user.js'

const router = express.Router()

router.get("/", getUsers)
router.post("/", addUser)
router.put("/:id_usuarios", updateUser)
router.delete("/:id_usuarios", deleteUser)

export default router