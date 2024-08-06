import Layout from "@/layout/Layout"
import useKiosco from "@/hooks/useKiosco"
import ResumenProducto from "@/components/ResumenProducto"

export default function Resumen() {

  const {pedido} = useKiosco()

  return (
    <Layout pagina={'Resumen'}>
      {pedido.length === 0 ? (
        <p>No hay elementos en tu pedido...</p>
      ): (
        pedido.map(producto => (
          <ResumenProducto
            key={producto.id}
            producto={producto}
          />
        ))
      )}
    </Layout>
  )
}
