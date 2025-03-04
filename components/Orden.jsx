import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'
import { formatearDinero } from '@/helpers'


export default function Orden({ orden }) {

    const { id, nombre, total, pedido } = orden

    const completarORden = async () => {
        try {
           const data = await axios.post(`/api/ordenes/${id}`)
            toast.success('Orden Lista');
        } catch (error) {
            toast.error('Hubo un error');
        }
    }

    return (
        <div className='border p-10 space-y-5'>
            <h3 className="text-xl font-bold">Orden : {id}</h3>
            <p className="text-lg font-bold">Cliente : {nombre}</p>
            <div>
                {pedido.map((comida) => (
                    <div key={comida.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                        <div>
                            <Image
                                width={100}
                                height={100}
                                style={{ width: '100%', height: 'auto' }}
                                src={`/assets/img/${comida.imagen}.jpg`}
                                alt={`Imagen comida ${comida.imagen}`}
                            />
                        </div>
                        <div className='p-5 space-y-2'>
                        <h4 className="text-xl font-bold text-amber-500">
                            {comida.nombre}
                        </h4>
                        <p className="text-lg font-bold"> Cantidad : {comida.cantidad} </p>
                        </div>
                        
                    </div>
                ))}
            </div>
            <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 font-black text-4xl ">
                    Total : {formatearDinero(total)}
                </p>

                <button
                    type="button"
                    className="bg-green-600 hover:bg-green-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg"
                    onClick={completarORden}
                >
                    Completar Orden
                </button>
            </div>
        </div>
    )
}
