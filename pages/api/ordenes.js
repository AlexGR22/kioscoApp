import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
    const prisma = new PrismaClient()
    
    //Obtener todas las ordenes
    const ordenes = await prisma.orden.findMany({
        // Eager Loading (cargar todo)
        where: {
          estado: false,
        }
      })
      res.status(200).json(ordenes)




    //Crear Ordenes
    if (req.method === 'POST'){
        const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                total: req.body.total,
                pedido: req.body.pedido,
                fecha: req.body.fecha,
            },
        })
          res.status(200).json(orden)

    }
}