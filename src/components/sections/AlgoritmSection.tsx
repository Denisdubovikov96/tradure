import Image from "next/image"
import RotatedSVG from "../assets/RotatedSVG"

const aEl = [
    `Let technology do what it's made to do and trade for you! Tradure lets you take the emotion out of trading giving you perpetual diamond hands. Get some sick tendies all while you regain your life back by playing a round of golf, fishing, going to the beach, or going on a hike. Get your life back and let Tradure trade for you.`,
    `The founders of Tradure are individual investors just like you. After losing money trading on some of the basic trading platforms (we'll leave the names out of it) we decided to create a tool to help individual investors gain access to the tools hedge funds love.`,
    `Harness the power of algorithmic trading strategies through Tradure in order to trade like a hedge fund mogul without needing any of the coding or technical expertise. With Tradure's strategy builder you will be able to design strategies to help outperform any market scenario with the click of a button.`
]

const AlgoritmSection = () => {
    return (
        <div className="flex gap-8 max-md:flex-col-reverse">
            <div className="max-w-2/4 flex-grow relative flex justify-center items-center">
                <div className="w-full min-w-[200px] max-w-[250px] relative max-h-[450px] h-full min-h-[400px] ">
                    <Image fill src={'/img/sections/strategy-builder.png'} alt='2' className="object-contain z-10" />
                    <div className="absolute top-0 right-0 translate-x-[30%] translate-y-[-50%] z-[9]">
                        <RotatedSVG/>
                    </div>
                </div>
            </div>

            <div className="flex-grow max-w-[700px] py-[100px] max-md:pt-[50px] max-md:pb-[80px]">
                <h2 className="mb-10 text-primary text-[42px] max-md:text-2xl font-bold">
                    Algorithmic Trading. Made Easy
                </h2>
                <h4 className="mb-5 text-2xl max-md:text-lg font-semibold">
                    Strategy Builder
                </h4>
                <div className="flex flex-col gap-3">
                    {aEl.map((text, i) => (<p key={i} className='m-0'>{text}</p>))}
                </div>
            </div>

        </div>
    )
}

export default AlgoritmSection