import { TestimonioCardType } from "../types"

type TestimonioCardProp={
    testimonio:TestimonioCardType,
    animated:boolean,
    itemWidth:number,
    translateX:number
}

const TestimonioCard = ({testimonio,animated,itemWidth,translateX}:TestimonioCardProp)=> {
    return (
        <div className={`px-6 py-4 bg-slate-100 text-blue-950 rounded-xl flex flex-none flex-col space-y-8 items-center relative ${animated ? "duration-500" : "duration-0"}`}
             style={{ width: `${itemWidth}px`, transform: `translateX(-${translateX}px)` }}>
            <div className="flex absolute top-0 w-full justify-between">
                <img src="img/vectors/commas.png" className="w-1/12 top-4 left-8 relative" alt="" />
                <img src="img/vectors/testSeparator.png" className="w-3/4 top-0" alt="" />
            </div>
            <img src={testimonio.img} className="w-40" alt="" />
            <p className="text-justify text-md">{testimonio.testimonio}</p>
            <p className="text-right w-full font-bold text-xl">{testimonio.nombreTestigo}</p>
        </div>
    )
}

export default TestimonioCard
