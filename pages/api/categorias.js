import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient() se puede poner afuera tambien

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const categorias = await prisma.categoria.findMany({
    // Eager Loading (cargar todo)
    include: {
      productos: true
    }
  })
  res.status(200).json(categorias)
}       