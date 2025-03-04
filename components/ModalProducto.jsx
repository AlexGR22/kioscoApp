import { useState, useEffect } from "react"
import useKiosco from "@/hooks/useKiosco"
import Image from "next/image"
import { formatearDinero } from "@/helpers"

const ModalProducto = () => {
    const { producto, handleChangeModal, handleAgregarPedido,pedido } = useKiosco()
    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)

    useEffect(()=>{
        if (pedido.some(p => p.id === producto.id)) {

            const productoEdicion = pedido.find(p => p.id === producto.id)
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
    
        } 
    },[producto,pedido])        
        

    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <Image
                    width={300}
                    height={400}
                    style={{ width: 'auto' , height: 'auto' }}
                    alt={`imagen del producto : ${producto.nombre}`}
                    src={`/assets/img/${producto.imagen}.jpg`}
                />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={handleChangeModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <h1 className="text-3xl font-bold mt-5">
                    {producto.nombre}
                </h1>
                <p className="mt-5 font-black text-5xl text-amber-500 ">
                    {formatearDinero(producto.precio)}
                </p>
                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad <= 1) return
                            setCantidad(cantidad - 1)}}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </button>

                    <p className="text-3xl ">{cantidad}</p>

                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad >= 5) return
                            setCantidad(cantidad + 1)}}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-7 h-7"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                            />
                        </svg>

                    </button>
                </div>
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                    onClick={() => {
                        handleAgregarPedido({...producto,cantidad})
                    }}
                >
                   {edicion ? 'Guardar cambios' : 'Añadir al pedido'}
                </button>
            </div>
        </div>
    )
}

export default ModalProducto