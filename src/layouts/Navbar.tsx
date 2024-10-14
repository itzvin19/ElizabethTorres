import { Outlet } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <header>
            <div className="py-2 px-4 sm:px-24 2xl:px-32 text-slate-50 rounded-xl mb-10 flex justify-between items-center">
              <img className="w-32 2xl:w-48" src="/img/logo.png" alt="" />
              <a href="https://wa.me/51984497003?text=¡Hola%20Elizabeth!%20Estoy%20interesado/a%20en%20obtener%20más%20información%20sobre%20los%20terrenos%20disponibles%20cerca%20del%20megapuerto%20de%20Chancay.%20¿Podrías%20ayudarme,%20por%20favor?" target="_blank" className="py-2 2xl:py-4 px-6 2xl:px-8 2xl:text-xl rounded-2xl bg-yellow-600 hover:bg-yellow-800 duration-150 shadow-black shadow-md">Contactar</a>
            </div>
    </header>
    <main className="">
        <Outlet/>
    </main>

    </>
  )
}

export default Navbar
