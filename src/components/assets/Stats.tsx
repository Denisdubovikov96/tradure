import Defs from "./defs";
import Layout from "./layout";
import Columns from "./columns";
import { useState, useEffect,useCallback } from "react";

const Stats: React.FC<React.SVGAttributes<SVGAElement>> = () => {
  const [range, setRange] = useState(150);

  const onScroll = useCallback(() => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setRange(scrolled * 3);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 515 221"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animated-svg"
      >
        <Defs />
        <Columns range={range} />
        <Layout />
      </svg>
    </>
  );
};

export default Stats;
