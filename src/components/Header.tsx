const Header = () => {
  return (
    <section>
    <div className="flex-col flex sm:flex-row justify-between items-center sm:space-x-16 bg-blue-950 px-4 sm:px-24 2xl:px-32 rounded-2xl">
      <div className="sm:w-2/3 flex flex-col space-y-6">
        <h1 className="text-slate-200 uppercase font-bold text-4xl sm:text-5xl 2xl:text-7xl">
          ¡Invierte en tu <span className="text-yellow-500">Futuro</span> Cerca del nuevo
          <span className="text-yellow-500"> Megapuerto de Chancay</span>!
        </h1>
        <p className="text-slate-200 text-lg 2xl:text-3xl p-2">
          Oportunidades únicas de inversión en la zona con mayor crecimiento del país. ¡No te quedes fuera!
        </p>
        <a href="https://wa.me/51984497003?text=¡Hola%20Elizabeth!%20Estoy%20interesado/a%20en%20obtener%20más%20información%20sobre%20los%20terrenos%20disponibles%20cerca%20del%20megapuerto%20de%20Chancay.%20¿Podrías%20ayudarme,%20por%20favor?" target="_blank" className="bg-yellow-600 text-center hover:bg-yellow-800 duration-150 shadow-black shadow-md text-white p-4 rounded-md w-full 2xl:text-3xl 2xl:p-6 sm:m-2">¡Reserva tu visita hoy mismo!</a>
      </div>
      <div className="">
        <img src="./img/header_main.png" className="mt-8 sm:mt-0 w-11/12 sm:w-full max-h-[550px]" alt="" />
      </div>
    </div>
  </section>
  )
}

export default Header
