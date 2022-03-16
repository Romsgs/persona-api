import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
const prisma = new PrismaClient()

export default {
  listUser: async (req: Request, res: Response) => {
    const usuariosEncontrados = await prisma.user.findMany()
    res.json(usuariosEncontrados)
  },
  createUser: async (req:Request, res: Response) => {
    const { email, password } = req.body
    await prisma.user.create({
      data:{
        email: email,
        password: password
      }
    })
  }
}