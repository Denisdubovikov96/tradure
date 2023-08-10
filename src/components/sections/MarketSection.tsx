import Image from "next/image";
import GraphicsSVG from "../assets/GraphicsSVG";

const marketElements = [
  `Commission-free platforms, fractional share trading, social media-driven financial discourse, and Covid-19’s impact on personal finances has created a powerful mega-trend solidifying the role of retail traders in U.S markets`,
  `Despite macro headwinds, retail trading reached an all time high in 2023 (23% of vol.) surpassing the meme-driven surge seen in 2021 (22% of vol.)`,
  `The individual investor market reached $7.2 trillion in size in 2023 (IBIS World)`,
  `Combined, there are over 100 million users/accounts at just six of the most popular online brokerages for retail investors`,
];

const MarketSection = () => {
  return (
    <div className="flex gap-8 max-md:flex-col">
      <div className="flex-grow max-w-[700px]">
        <h2 className="mb-10 text-primary text-[42px] max-md:text-2xl font-bold">
          The Market
        </h2>
        <h4 className="mb-5 text-2xl max-md:text-lg font-semibold">
          The Rise of Retail Trading
        </h4>
        <div className="flex flex-col gap-3">
          {marketElements.map((text, i) => (
            <p key={i} className="m-0">
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="max-w-2/4 flex-grow relative max-h-[340px] min-w-[400px] w-full max-w-[700px] min-h-[200px]">
        <GraphicsSVG />
      </div>
    </div>
  );
};

export default MarketSection;
