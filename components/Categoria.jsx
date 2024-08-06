import Image from "next/image"
import useKiosco from "@/hooks/useKiosco"

const Categoria = ({categoria}) => {
    const {handleClickCategoria, categoriaActual} = useKiosco()
    const {nombre,icono,id} = categoria
  return (
    <div className={`flex items-center gap-4 w-full border p-5 hover:bg-amber-400 ${categoriaActual?.id === id ? 'bg-amber-400' : ''}`}>
        <Image
            src={`/assets/img/icono_${icono}.svg`}
            width={0}
            height={0}
            style={{ width: 70 , height: 'auto' }}
            alt="imagen icono"
            className="mr-5"
        />

        <button
            type="button"
            className="text-2xl font-bold hover:cursor-pointer"
            onClick={() => handleClickCategoria(id)}
        >
            {nombre}
        </button>
    </div>
  )
}

export default Categoria