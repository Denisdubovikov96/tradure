import Image from "next/image";
import ContentWrapper from "../ui/ContentWrapper";

const text = {
  title: "Built for YOU",
  subtitle: "Professional Strategies",
  body: [
    "No code, no problem! Tradure requires no coding experience. Our tools allow for drag and drop, mix and match, pick and choose strategies across technical, fundamental, and portfolio management strategies.",
    "Like what you developed? Share it with your friends or deploy it over the Tradure Network.",
  ],
};

const BuiltForYouSection = () => {
  return (
    <ContentWrapper
      classes={{
        root: "bg-[#E1FFF6]",
        content: "py-[100px] max-md:py-[30px] flex gap-8 max-md:flex-col",
      }}
    >
      <div className="max-w-2/4 flex-grow relative max-h-[340px] w-full max-w-[700px] min-h-[200px]">
        <Image
          fill
          src={"/img/sections/built-for-you.png"}
          alt="2"
          className="object-contain"
        />
      </div>

      <div className="flex-grow max-w-[700px]">
        <h2 className="mb-10 text-primary text-[42px] max-md:text-2xl font-bold">
          {text.title}
        </h2>
        <h4 className="mb-5 text-2xl font-semibold">{text.subtitle}</h4>
        <div className="flex flex-col gap-3">
          {text.body.map((text, i) => (
            <p key={i} className="m-0">
              {text}
            </p>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default BuiltForYouSection;
