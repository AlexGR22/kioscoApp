import { useEffect, useCallback } from "react";
import Layout from "@/layout/Layout";
import useKiosco from "@/hooks/useKiosco";
import { formatearDinero } from "@/helpers";
export default function Total() {

  const { pedido,nombre,setNombre, colocarOrden,total } = useKiosco()

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre.length<3 ;
  }, [pedido,nombre])

  useEffect(() => {
    comprobarPedido()
  }, [pedido, comprobarPedido])

  return (
    <Layout pagina={'Total'}>
    <h1 className="text-4xl font-black">Confirmar pedido</h1>
    <p className="text-2xl my-10">Confirma el total de tu Pedido a continuación</p>
    <form
      onSubmit={colocarOrden}
    >
      <div>
        <label 
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl">
          Nombre
        </label>
        <input 
          id="nombre"
          type="text" 
          className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>
      <div className="mt-10">
        <p className="text-xl">
          Total a pagar : {''} <span className="font-bold">{formatearDinero(total)}</span>
        </p>
      </div>
      <div>
      <input 
        type="submit"
        disabled={comprobarPedido()}
        value="Confirmar pedido"
        className={` ${comprobarPedido()? 'opacity-40 ': ''} bg-indigo-600 hover:bg-indigo-800 w-full lg:w-auto px-5 py-2 rounded-md mt-5 uppercase font-bold text-white text-center `}
      />
      </div>
    </form>
  </Layout>
  
  )
}
