import Button from "#/components/ui/Button";
import ContentWrapper from "#/components/ui/ContentWrapper";
import Modal from "#/components/ui/Modal";
import RegisterForm from "#/components/forms/RegisterForm";
import AlgoritmSection from "#/components/sections/AlgoritmSection";
import ApproachSection from "#/components/sections/ApproachSection";
import BuiltForYouSection from "#/components/sections/BuiltForYouSection";
import HistorySection from "#/components/sections/HistorySection";
import LoginInfoSection from "#/components/sections/LoginSection";
import MarketSection from "#/components/sections/MarketSection";
import TeamSection from "#/components/sections/TeamSection";
import Image from "next/image";
import React from "react";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`flex flex-col`}>
      <ContentWrapper classes={{ root: "bg-black relative py-[50px]" }}>
        <div className="absolute inset-0 z-[9] text-black overflow-hidden">
          <div
            className="absolute inset-0 z-1 animate-[pulse_2s_infinite]"
            style={{
              backgroundImage: 'url("../img/grid-welcome.svg")',
              backgroundAttachment: "fixed",
            }}
          />
          <Image src="/img/ellipse-welcome.svg" fill alt="grid" />
          <div className="overflow-hidden h-full w-[100%] absolute bg-[url('/img/vector-welcome.svg')] animate-[render-graph_10s_linear_infinite] bg-no-repeat max-md:hidden" />
        </div>
        <div className="flex items-start gap-4 pt-[100px] max-md:pt-[30px] relative z-100">
          <div className="text-white max-w-5xl z-20">
            <h1 className="text-[82px] max-md:text-[36px]">
              Complicated world — Simplified trading
            </h1>
            <p className="max-w-[500px] mt-[60px] text-secondary">
              Tradure provides both retail traders and institutional investors
              alike low-code no-code strategy building technology to automate
              trading
            </p>
            <div className="mt-[40px] flex flex-col">
              <div>
                <Button
                  className="px-[50px] max-md:w-full"
                  onClick={() => setIsOpen(true)}
                >
                  Join the Waitlist
                </Button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                  <div>
                    <RegisterForm />
                  </div>
                </Modal>
              </div>

              {/* <div className="mt-[20px] flex flex-grow gap-8"> */}
              <div className="flex gap-2 items-center mt-[20px] pb-10 w-full">
                <a
                  href=""
                  className="block min-w-[124px] min-h-[60px] max-w-[200px] w-full relative hover:opacity-70"
                >
                  <Image
                    fill
                    src="/img/app-store-badge.png"
                    alt="apple"
                    className="object-contain"
                  />
                </a>
                <a
                  href=""
                  className="block min-w-[124px] min-h-[60px] max-w-[200px] w-full relative hover:opacity-70"
                >
                  <Image
                    fill
                    src="/img/google-play-badge.png"
                    alt="google"
                    className="object-contain"
                  />
                </a>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="h-[540px] max-md:hidden">
            <div className="max-w-[620px]  absolute right-0 top-0 z-[10] ">
              <Image
                width={620}
                height={540}
                src="/img/home-welcome.png"
                alt="home-img"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute right-2/4 translate-x-2/4 max-w-5xl w-full z-[12] mx-auto px-[20px]">
          <HistorySection />
        </div>
      </ContentWrapper>

      <ContentWrapper
        classes={{
          root: "bg-gradient-to-b from-[#E1FFF6] via-white  to-[#E1FFF6] pt-[250px] max-md:pt-[500px] pb-[100px] relative",
        }}
      >
        <div className="absolute left-0 bottom-0 h-[400px] max-w-[1300px] w-full z-[2]">
          <Image
            src="/img/sections/bottom-vector.svg"
            fill
            alt="grid"
            className="object-cover"
          />
        </div>

        <div>
          <ApproachSection />
        </div>

        <div className="my-[50px]">
          <MarketSection />
        </div>

        <div className="z-[4] relative ">
          <AlgoritmSection />
        </div>
      </ContentWrapper>

      <LoginInfoSection />

      <BuiltForYouSection />

      <TeamSection />
    </div>
  );
}
