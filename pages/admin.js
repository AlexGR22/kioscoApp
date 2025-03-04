import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "@/layout/AdminLayout"
import Orden from "@/components/Orden"


export default function Admin() {

    const fetcher = () => axios('/api/ordenes').then(res => res.data)

    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 100})

    // console.log(data);
    // console.log(error);
    // console.log(isLoading);


    return (
        <AdminLayout pagina={'Admin'}>
            <h1 className="text-4xl font-black">Panel de Administracion</h1>
            <p className="text-2xl my-10">Administra tus ordenes</p>

            {data && data.length ? data.map(orden => (
                <Orden key={orden.id} orden={orden} />
            )) : (
                <p>No hay ordenes pendientes</p>
            )}

        </AdminLayout>
    )
}
