const Footer = () => {
  return (
    <section className="px-4 sm:px-24 2xl:px-32 pt-10 sm:pt-24 2xl:pt-32 mt-2 sm:mt-10 2xl:mt-12 relative">
      <div className="bg-yellow-600 rounded-xl px-6 sm:px-20 2xl:px-24 py-4 sm:py-10 flex">
        <div className="w-full sm:w-7/12 flex flex-col space-y-10">
            <div className="flex space-x-8 items-center">
                <div className="w-1/2 sm:w-1/3">
                    <img src="/img/logo.png" alt="" />
                </div>
                <div className="w-1/2 sm:w-1/3 text-slate-50 flex flex-col 2xl:text-2xl">
                    <label className="text-3xl 2xl:text-5xl">Menu</label>
                    <br />
                    <a href="https://wa.me/51984497003?text=¡Hola%20Elizabeth!%20Estoy%20interesado/a%20en%20obtener%20más%20información%20sobre%20los%20terrenos%20disponibles%20cerca%20del%20megapuerto%20de%20Chancay.%20¿Podrías%20ayudarme,%20por%20favor?" target="_blank">Contacto</a>
                    <a href="#benefits">Beneficios</a>
                    <a href="#testimonios">Testimonios</a>
                    <a href="#questions">Preguntas Frecuentes</a>
                </div>
            </div>
            <div className="flex border-t-2 py-4 2xl:py-6 px-8 w-full space-x-10 justify-end">
                <a href="https://www.facebook.com/people/Elizabeth-Torres-Bienes-Ra%C3%ADces/61566738701018/" target="_blank"><img src="img/vectors/facebook-brands-solid.svg" className="w-10 2xl:w-16" alt="" /></a>
                <a href="https://www.instagram.com/elitorresbraices/" target="_blank"><img src="img/vectors/instagram-brands-solid.svg" className="w-10 2xl:w-16" alt="" /></a>
            </div>
        </div>
        <div className="hidden sm:block">
            <img className="w-1/5 right-40 absolute bottom-0 z-10" src="/img/footerimg.webp" alt="" />
            <img className="w-3/12 right-24 2xl:right-32 top-24 2xl:top-32 absolute" src="/img/vectors/footerSeparator.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Footer
