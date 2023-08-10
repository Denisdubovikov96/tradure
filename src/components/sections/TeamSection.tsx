import Image from "next/image"
import ContentWrapper from "../ui/ContentWrapper"

const team = [
    {
        fullName: "Grady Sullivan",
        img: "/img/team/sullivan.png"
    },
    {
        fullName: "Ashton Gray",
        img: "/img/team/gray.png"
    },
    {
        fullName: "Nick Basti",
        img: "/img/team/basti.png"
    },
    {
        fullName: "Chad Cordani",
        img: "/img/team/cordani.png"
    },
]


const TeamSection = () => {
    return (
        <ContentWrapper classes={{ root: 'bg-white', content: "py-[100px] max-md:py-[30px]" }}>
            <h2 className="mb-10 text-primary text-center text-[42px] max-md:text-2xl font-bold">
                Our Team
            </h2>

            <div className="flex justify-center flex-wrap gap-8">
                {team.map(({ fullName, img }, i) => {

                    return (
                        <div key={fullName} className='max-w-[200px] flex flex-col items-center justify-center'>
                            <div className="flex-grow min-h-[200px] p-4 rounded-full max-h-[200px] min-w-[200px] max-md:min-w-[140px] max-md:min-h-[140px] w-full h-full bg-[#E1FFF6] overflow-hidden relative">

                                <Image fill src={img} alt={fullName} />
                            </div>

                            <p className="mt-4 text-lg font-semibold text-black">
                                {fullName}
                            </p>
                        </div>
                    )
                })}
            </div>
        </ContentWrapper>
    )
}

export default TeamSection