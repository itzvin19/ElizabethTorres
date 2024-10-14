const Section1 = () => {
    return (
        <section className="px-4 sm:px-24 2xl:px-32 mb-20" id="benefits">
            <div className="bg-[url('/img/caracteristicas_bg.png')] rounded-xl p-8 mt-16 relative min-h-[1150px] sm:min-h-[380px] 2xl:min-h-[500px]">
                <div className="absolute top-0 right-0">
                    <img src="/img/frameSection.png" className="w-full min-h-[150px] sm:min-h-0" />
                    <span className="absolute top-0 right-0 uppercase text-white text-2xl text-center sm:text-left sm:text-4xl font-bold py-2 px-4">Invierte Hoy, Maximiza Mañana</span>
                </div>
                <div className="relative top-16 flex flex-col sm:flex-row sm:space-x-7 space-y-5 sm:space-y-0">
                    <div className="flex flex-col space-y-6 sm:w-1/4 2xl:text-2xl">
                        <a href="https://wa.me/51984497003?text=¡Hola%20Elizabeth!%20Estoy%20interesado/a%20en%20obtener%20más%20información%20sobre%20los%20terrenos%20disponibles%20cerca%20del%20megapuerto%20de%20Chancay.%20¿Podrías%20ayudarme,%20por%20favor?" target="_blank" className="bg-yellow-600 hover:bg-yellow-800 duration-150 text-white py-4 px-6 2xl:py-6 2xl:px-10 rounded-full text-center font-bold">
                            Aprovecha la oportunidad
                        </a>
                        <div className="bg-blue-950 p-4 2xl:p-8 text-white rounded-xl text-xl 2xl:text-3xl">
                            <p className="uppercase font-bold">
                                Por qué <span className="text-yellow-600">invertir</span> cerca del Megapuerto de Chancay es <span className="text-yellow-600">tu mejor decisión</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:w-3/4 sm:space-x-4 space-y-5 sm:space-y-0">
                        <div className="bg-slate-50 p-6 2xl:p-10 sm:w-1/3 rounded-2xl flex flex-col space-y-3 text-blue-950">
                            <div className="flex justify-between w-full space-x-6">
                                <img src="/img/vectors/location-dot-solid.svg" className="w-6" alt="" />
                                <span className="font-bold uppercase text-xl 2xl:text-3xl">Ubicación privilegiada</span>
                            </div>
                            <p className="text-justify 2xl:text-2xl">A solo minutos del megapuerto de Chancay, ideal para proyectos comerciales, industriales o residenciales</p>
                        </div>
                        <div className="bg-slate-50 p-6 2xl:p-10 sm:w-1/3 rounded-2xl flex flex-col space-y-3 text-blue-950">
                            <div className="flex justify-between w-full space-x-6">
                                <img src="/img/vectors/seedling-solid.svg" className="w-6" alt="" />
                                <span className="font-bold uppercase text-xl 2xl:text-3xl">Crecimiento asegurado</span>
                            </div>
                            <p className="text-justify 2xl:text-2xl">El valor de los terrenos está en constante alza gracias al desarrollo del megapuerto. ¡Invierte hoy y asegura tu ganancia a corto y mediano plazo!</p>
                        </div>
                        <div className="bg-slate-50 p-6 2xl:p-10 sm:w-1/3 rounded-2xl flex flex-col space-y-3 text-blue-950">
                            <div className="flex justify-between w-full space-x-6">
                                <img src="/img/vectors/handshake-solid.svg" className="w-6" alt="" />
                                <span className="font-bold uppercase text-xl  2xl:text-3xl">Facilidades de compra</span>
                            </div>
                            <p className="text-justify 2xl:text-2xl">Te brindamos asesoría personalizada, financiamiento flexible y asistencia legal para que adquirir tu terreno sea fácil y seguro</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1
