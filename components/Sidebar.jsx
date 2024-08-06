
import Image from "next/image"
import useKiosco from "../hooks/useKiosco"
import Categoria from "./Categoria"


const Sidebar = () => {
  const { categorias } = useKiosco();
  

  return (
    <>
        <Image
            src="/assets/img/logo.svg"
            width={0}
            height={0}
            style={{ width: 300 , height: 100 }}
            alt="logo"
            priority
        />
        <nav className="mt-10">
            {categorias.map((categoria) => (
                <Categoria
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </nav>
    </>
  )
}

export default Sidebar