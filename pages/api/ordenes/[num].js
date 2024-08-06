import { PrismaClient } from "@prisma/client";


export default async function handler (req,res) {
    const prisma = new PrismaClient();

    if(req.method === 'POST') {
        const {num} = req.query
        const {estado} = req.body
        const ordenActualizada = await prisma.orden.update({
                where: {
                        id: parseInt(num)
                    },
                data: {
                            estado: true
                        }
                    })
                    res.status(200).json(ordenActualizada)
        // console.log(req.query);
        // console.log('actualizando');
    }

}