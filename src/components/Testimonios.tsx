import { useEffect, useMemo, useState } from "react";
import InfiniteSlider from "./InfiniteSlider"
import { testimoniosData } from "../data/testimonios";


const Testimonios = () => {

    const testArray = useMemo(() => {
        return [testimoniosData[testimoniosData.length - 1], ...testimoniosData.slice(0, -1)];
    }, [testimoniosData]);

    const [state, setState] = useState(testArray);
    const [containerPadding, setContainerPadding] = useState({x:0,y:0});
    const [animating, setAnimating] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(1); // Cambia a 0 para iniciar desde el primer elemento visible

    const updatePadding = () => {
        if (window.innerWidth <= 640) {
            setContainerPadding({ x: 30, y: 32 });
        } else if (window.innerWidth <= 768) {
            setContainerPadding({ x: 144, y: 32 });
        } else {
            setContainerPadding({ x: 192, y: 32 });
        }
    };

    useEffect(() => {
        updatePadding();
        window.addEventListener("resize", updatePadding);
        return () => {
            window.removeEventListener("resize", updatePadding);
        };
    }, [testimoniosData]);

    const avanzarSlider = () => {
        if (!animating) { return }
        setCurrentIndex((prevIndex) => (prevIndex + 1) % state.length);
        setTimeout(() => {
            setAnimating(false)
            setState([...state.slice(1), state[0]])
            setCurrentIndex(1)
        }, 500)
        setTimeout(() => setAnimating(true), 600)
    };

    const retrocederSlider = () => {
        if (!animating) { return }
        setCurrentIndex((prevIndex) => (prevIndex - 1) % state.length);
        setTimeout(() => {
            setAnimating(false)
            setState((prevState) => {
                return [prevState[prevState.length - 1], ...prevState.slice(0, prevState.length - 1)];
            });
            setCurrentIndex(1)
        }, 500)
        setTimeout(() => setAnimating(true), 600)
    };

    return (
        <section className="bg-slate-50 rounded-[30px] rounded-br-none py-8 flex flex-col space-y-8 sm:space-y-12" id="testimonios" style={{ padding: `${containerPadding.y}px ${containerPadding.x}px ${containerPadding.y}px ${containerPadding.x}px` }}>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between items-center">
                <span className="uppercase font-bold text-2xl sm:text-5xl text-blue-950"> QUE ES LO QUE LA GENTE <br /> DICE DE NOSOTROS</span>
                <div className="w-1/2 sm:w-2/12 flex justify-between">
                    <button className="p-4 sm:p-6 2xl:p-8 text-2xl border-2 text-blue-950 border-blue-950 rounded-full hover:border-slate-50 duration-75 hover:text-slate-50 hover:bg-blue-950" onClick={() => retrocederSlider()}>
                        <svg className="w-4 2xl:w-6 fill-current" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                    </button>
                    <button className="p-4 sm:p-6 2xl:p-8 text-2xl border-2 text-blue-950 border-blue-950 rounded-full hover:border-slate-50 duration-75 hover:text-slate-50 hover:bg-blue-950" onClick={() => avanzarSlider()}>
                        <svg className="w-4 2xl:w-6 fill-current" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </button>
                </div>
            </div>
            <InfiniteSlider
                containerPadding={containerPadding}
                currentIndex={currentIndex}
                state={state}
                animating={animating}
            />
        </section>
    )
}

export default Testimonios
