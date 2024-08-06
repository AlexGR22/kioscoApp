import Image from 'next/image'
import { formatearDinero } from '@/helpers'
import useKiosco from '@/hooks/useKiosco'

const Producto = ({producto}) => {
    const {handleSetProducto, handleChangeModal} = useKiosco()
    const {nombre, imagen,precio} = producto
  return (
    <div className='border p-3'>
        <Image 
            src={`/assets/img/${imagen}.jpg`} 
            width={400}   
            height={500}
            style={{ width: '100%' , height: 'auto' }}
            priority
            alt={`Imagen del menú : ${nombre}`} />
        <div className='p-5'>
                <h3 className='text-2xl font-bold'>{nombre}</h3>
                <p className='mt-5 text-4xl font-black text-amber-500'> {formatearDinero(precio)}</p>
                <button
                    type='button'
                    className='bg-indigo-500 hover:bg-indigo-600 text-white w-full mt-5 p-3 uppercase font-bold'
                    onClick={() => {
                        handleSetProducto(producto)
                        handleChangeModal()
                      }}
                >
                    Añadir al carrito
                </button>
        </div>
    </div>
  )
}

export default Producto