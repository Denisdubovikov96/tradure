import Image from "next/image";
import ContentWrapper from "../ui/ContentWrapper";

const text = {
  title: "Tools Built for YOU",
  body: [
    "The world is a dynamic place and investors need dynamic tools. Like all traders in today's age, the founders of Tradure LLC started off trading on some of the brokerage apps you probably use too. Frustrated by the tools (should we say no tools) offered and lack of innovation available on these platforms we set out to democratize finance in a way that gives YOU the tools that professionals enjoy.",
    `Automation takes the emotion out of trading, but coding a strategy is difficult, tedious, and time consuming. We wanted to make a product for the world where anyone could place complex and dynamic automated trades with just the click
      of a button.`,

    `Enjoy.`,
  ],
};

const BuiltForYouAboutSection = () => {
  return (
    <ContentWrapper
      classes={{
        root: "bg-[#E1FFF6]",
        content:
          "py-[100px] max-md:py-[30px] overflow-hidden flex gap-8 max-md:flex-col-reverse",
      }}
    >
      <div className="max-w-2/4 flex-grow relative max-h-[340px] max-md:max-h-full w-full max-w-[700px] min-h-[200px] flex gap-4">
        <div className="relative max-w-[400px] h-[500px] w-full translate-y-[-150px] max-md:translate-y-0">
          <Image
            fill
            src={"/img/sections/built-for-you-1.png"}
            alt="2"
            className="object-contain"
          />
        </div>
        <div className="relative max-w-[400px] h-[500px] w-full translate-y-[-30px] max-md:translate-y-0">
          <Image
            fill
            src={"/img/sections/built-for-you-2.png"}
            alt="2"
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex-grow max-w-[700px]">
        <h2 className="mb-10 text-primary text-[42px] max-md:text-2xl font-bold">
          {text.title}
        </h2>

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

export default BuiltForYouAboutSection;
