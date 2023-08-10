import Image from "next/image"

const el = [
    {
        title: "Technical",
        description: "Native technical indicators serve as execution points for trading strategies",
        icon: '/img/icons/tech.svg'
    },
    {
        title: "Fundamental",
        description: "Automate trading using company valuation metrics to execute buys and sells",
        icon: '/img/icons/tech-list.svg'
    },
    {
        title: "Portfolio Management",
        description: "Automatic rebalancing, trade execution, and benchmarked performnce analysis",
        icon: '/img/icons/list.svg'
    },
]

const small = ` *Each aspect of Tradure's three pronged strategy approach allows for automated performance back testing with statistical analysis`


const ApproachSection = () => {

    return (
        <div>
            <h2 className="mb-10 text-center text-primary text-[42px] font-bold">
                Our Approach
            </h2>

            <div className="flex flex-wrap justify-center gap-8 mb-[40px]">
                {el.map(({ title, description,icon }) => {
                    return (
                        <div key={title} className='py-[46px] px-[50px] bg-black rounded-3xl shadow max-w-[440px]'>
                            <h4 className="text-primary font-semibold mb-4 text-2xl flex items-center">
                                <span className="mr-2">
                                    <Image src={icon} height={24} width={24} alt={title} />
                                </span>
                                {title}
                            </h4>
                            <p className="text-white">
                                {description}
                            </p>
                        </div>
                    )
                })}
            </div>

            <div className="pb-[40px] flex justify-center">
                <small className="text-center text-[#809F96] w-full max-md:text-left">
                   {small}
                </small>
            </div>
        </div>
    )
}

export default ApproachSection