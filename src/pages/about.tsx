import Button from "#/components/ui/Button";
import ContentWrapper from "#/components/ui/ContentWrapper";
import BuiltForYouAboutSection from "#/components/sections/BuiltForYouAboutSection";
import TeamSection from "#/components/sections/TeamSection";
import Image from "next/image";

export default function About() {
  return (
    <div className={`flex flex-col`}>
      <ContentWrapper classes={{ root: "bg-black relative py-[50px]" }}>
        <div className="absolute inset-0 z-[9] text-black">
        <div
            className="fixed inset-0 z-1"
            style={{ backgroundImage: 'url("../img/grid-welcome.svg")', backgroundPosition: "100%" }}
          />
          <Image src="/img/ellipse-welcome.svg" fill alt="grid" />
        </div>

        <div className="text-white z-20 relative flex flex-col justify-center items-center">
          <h1 className="text-[120px] max-md:text-[36px] font-semibold text-[#47D7AC] m-0">
            About us
          </h1>
          <p className="my-[40px] text-white ">
            Individual Investors. Just like YOU.
          </p>
          <Button className="px-[50px]">Write to Us</Button>
        </div>
      </ContentWrapper>

      <BuiltForYouAboutSection />

      <TeamSection />
    </div>
  );
}
