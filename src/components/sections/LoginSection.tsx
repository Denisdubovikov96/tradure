import Image from "next/image";
import ContentWrapper from "../ui/ContentWrapper";

const text = {
  title: "The Power of Mobile",
  subtitle: "Tradure App",
  body: [
    "Download the Tradure App to get rid of those paper hands and always have the power of mobility. Available on both the App Store and Google Play Store take your hedge fund global so the suits can't get to you.",
    " Coming Soon!",
  ],
};

const LoginInfoSection = () => {
  return (
    <ContentWrapper
      classes={{
        root: "bg-black overflow-hidden",
        content:
          "flex gap-8 max-h-[500px] max-md:flex-col max-md:max-h-full max-md:pb-10",
      }}
    >
      <div className="flex-grow max-w-[700px] text-white py-[125px] max-md:py-10">
        <h2 className="mb-10  text-[42px] max-md:text-2xl font-bold">
          {text.title}
        </h2>
        <h4 className="mb-5 text-2xl font-semibold">{text.title}</h4>
        <div className="flex flex-col gap-3">
          {text.body.map((t, i) => (
            <p key={i} className="m-0">
              {t}
            </p>
          ))}
        </div>
      </div>

      <div className="max-w-2/4 flex-grow relative h-[660px] max-md:h-[330px] flex gap-2 overflow-hidden">
        <div className="max-w-[300px] w-full flex-grow relative translate-y-[60px] max-md:translate-y-0">
          <Image
            fill
            src={"/img/sections/login-full.png"}
            alt="2"
            className="object-contain"
          />
        </div>
        <div className="max-w-[300px] w-full flex-grow relative translate-y-[-80px]  max-md:translate-y-0">
          <Image
            fill
            src={"/img/sections/register-full-2.png"}
            alt="2"
            className="object-contain"
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default LoginInfoSection;
