import useKiosco from "@/hooks/useKiosco"
import { useRouter } from "next/router"


const pasos = [
    {paso:1, nombre: 'Menú', url:'/'},
    {paso:2, nombre: 'Resumen', url:'/resumen'},
    {paso:3, nombre: 'Datos y Total', url:'/total'},
]

const Pasos = () => {
    const {handleClickCategoria} = useKiosco()
    const router = useRouter()

    const calcularProgreso =  () => {
       let valor ;
       if (router.pathname === '/') { 
           valor = 2
       } else if (router.pathname === '/resumen') {
           valor = 47  
       } else {
           valor = 100
       }
       return valor
    }


  return (
    <>
        <div className="flex justify-between mb-5">
            {pasos.map(paso => (
                <button
                    onClick={() => {
                        if (paso.url === '/') {
                            handleClickCategoria(1);
                            router.push(paso.url);
                        }else {
                            handleClickCategoria(0);
                            router.push(paso.url);
                    }
                    }}
                    key={paso.paso}
                    className="text-2xl font-bold"
                >
                    {paso.nombre}
                </button>
            ))}
        </div>

        <div className="bg-gray-100 mb-10">
            <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white" style={{width: `${calcularProgreso()}%`}}>
                
            </div>
        </div>
    </>
  )
}

export default Pasos