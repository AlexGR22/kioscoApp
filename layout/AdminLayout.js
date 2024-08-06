import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Kiosco Cafetería" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5 flex flex-col gap-10 h-screen">
          <Image
            width={300}
            height={100}
            src="/assets/img/logo.svg"
            alt="imagen logotipo"
            priority
          />
          <div className="h-2/3 flex items-center gap-5">
            <div className="flex flex-col">
          <button
            type="button"
            className="bg-green-600 hover:bg-green-800 text-white m-5 py-3 px-10 uppercase font-bold rounded-lg"

          >
            Completar Orden
          </button>
          <button
            type="button"
            className="bg-green-600 hover:bg-green-800 text-white m-5 py-3 px-10 uppercase font-bold rounded-lg "
          >
            Completar Orden
          </button>
          </div>
          </div>
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            {children}
          </div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}