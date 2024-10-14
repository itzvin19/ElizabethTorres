import TestimonioCard from "./TestiomonioCard";
import { DimensionType, TestimonioCardType } from "../types";

type TestimoniosSliderProps = {
    containerPadding: DimensionType
    currentIndex: number,
    state: TestimonioCardType[]
    animating: boolean
}

const InfiniteSlider = ({ containerPadding, currentIndex, state, animating }: TestimoniosSliderProps) => {


    const totalWidth = window.innerWidth - containerPadding.x * 2; // Ancho total disponible sin padding
    let itemsQuantity = innerWidth > 480 ? 3 : 1
    const itemWidth = (totalWidth - 20) / itemsQuantity;

    return (
        <>
            <div className={`w-full overflow-hidden`}>
                <div className="flex text-slate-50 w-full overflow-x-hidden" >
                    {state.map((x) => {
                        // Calculamos el desplazamiento para cada elemento
                        const translateX = (itemWidth) * currentIndex
                        return (
                            <TestimonioCard
                                testimonio={{
                                    img: x.img,
                                    testimonio: x.testimonio,
                                    nombreTestigo: x.nombreTestigo
                                } as TestimonioCardType}
                                animated={animating}
                                itemWidth={itemWidth}
                                translateX={translateX}
                                key={x.id}

                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default InfiniteSlider;
