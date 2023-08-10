import Button from "#/components/ui/Button";
import ContactForm from "#/components/forms/ContactForm";
import ContentWrapper from "#/components/ui/ContentWrapper";
import Image from "next/image";

export default function Contact() {
  return (
    <div className={`flex flex-col min-h-full`}>
      <ContentWrapper classes={{ root: "bg-black relative py-[50px]" }}>
        <div className="absolute inset-0 z-[9] text-black">
        <div
            className="fixed inset-0 z-1"
            style={{ backgroundImage: 'url("../img/grid-welcome.svg")', backgroundPosition: "100%" }}
          />
          <Image src="/img/ellipse-welcome.svg" fill alt="grid" />
        </div>

        <div className="text-white z-20 relative flex flex-col justify-center items-center pb-[60px]">
          <h1 className="text-[120px] max-md:text-[36px] font-semibold text-[#47D7AC] m-0">
            Contact us
          </h1>
          <p className="mt-[40px] mb-[20px] text-white ">Inquiries Welcome</p>
          <small className="text-[#809F96]">
            Whether it is a question about our services or a desire to work with
            the Tradure Team on a custom project, we welcome your inquiry.
            Please feel free to always reach out to us at the below contact
            information!
          </small>
        </div>

        <div className="absolute right-2/4 translate-x-2/4 max-w-5xl w-full z-[12] mx-auto px-[20px]">
          <div className="w-full bg-black text-white  p-[50px]   rounded-[40px] flex justify-around max-md:justify-center flex-wrap items-center gap-6">
            <div>
              <a
                className="text-2xl max-md:text-lg flex-grow flex gap-4"
                href="mailto:tradure.business@gmail.com"
              >
                <Image
                  height={30}
                  width={30}
                  src="/img/icons/message.svg"
                  alt="mail"
                />
                tradure.business@gmail.com
              </a>
            </div>
            <div>
              <a
                className="text-2xl max-md:text-lg  flex-grow flex gap-4"
                href="tel:774-573-6620"
              >
                <Image
                  height={30}
                  width={30}
                  src="/img/icons/phone.svg"
                  alt="mail"
                />
                774-573-6620
              </a>
            </div>
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper
        classes={{
          root: "bg-[#E1FFF6] relative flex-grow min-h-full",
          content: "py-[100px]",
        }}
      >
        <div className="absolute inset-0 z-[9] text-black">
          <Image src="/img/grid-welcome.svg" fill alt="grid" />
        </div>
        <div className="z-10 relative">
          <ContactForm />
        </div>
      </ContentWrapper>
    </div>
  );
}
