
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const KioscoContext = createContext();

const KioscoProvider = ({children}) => {
    
    const [categorias,setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState([])
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0)
    
    const router = useRouter()
 

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data)
    }
    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(cate => cate.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId, ...producto}) => {
        if(pedido.some(p => p.id === producto.id)) {
           const pedidoActualizado = pedido.map(p => p.id === producto.id ? producto : p)
           setPedido(pedidoActualizado)
           toast.success('Guardado Correctamente')
        }
        else {
            setPedido([...pedido, producto])
            toast.success('Agregado al pedido')
        }
        setModal(false)

    }

    const handleEditarCantidad = id => {
        const productoActualizado = pedido.filter(p => p.id === id)
        console.log(pedido);
        setProducto(productoActualizado[0])
        setModal(!modal)
    }

    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter(p => p.id !== id)
        setPedido(pedidoActualizado)
    }

    const colocarOrden = async (e) => {
        e.preventDefault()

        try{
         await axios.post('/api/ordenes',{pedido, nombre, total, fecha: Date.now().toString()})

         //Resetear el pedido
         setCategoriaActual(categorias[0])
         setPedido([])
         setNombre('')
         setTotal(0)

         toast.success('Pedido Realizado Correctamente')

         setTimeout(() => {
            router.push('/')
         }, 3000);
        }catch (error){
            console.log(error);
        }

        console.log({pedido, nombre, total});
      }

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total,producto) => (producto.precio * producto.cantidad) + total,0)
        setTotal(nuevoTotal)
    }, [pedido])

    return (
        <KioscoContext.Provider
            value={{
                categoriaActual,
                categorias,
                handleClickCategoria,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProducto,
                nombre,
                setNombre,
                colocarOrden,
                total
            }}
        >
            {children}
        </KioscoContext.Provider>
    )
}

export { 
    KioscoProvider 
}
export default KioscoContext