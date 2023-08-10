import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ContentWrapper from "../ui/ContentWrapper";

type Props = {};

const headerLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

const Header = (props: Props) => {
  const [isOpen, setOpen] = React.useState(false);
  // for check active link
  const router = useRouter();

  const toggle = () => {
    setOpen((p) => !p);
  };

  return (
    <ContentWrapper
      classes={{
        content: "flex justify-between py-[30px]",
        root: classNames("relative z-1000 bg-black"),
      }}
    >
      <Link
        href={"/"}
        className={classNames(
          "flex items-center gap-1 uppercase font-semibold text-3xl z-[110]",
          isOpen ? "text-black" : "text-white "
        )}
      >
        <Image width={45} height={30} src="/logo.svg" alt="logo" />
        <span>Tradure</span>
      </Link>

      <nav className="flex gap-12 items-center max-md:hidden text-white ">
        {headerLinks.map(({ href,title }) => (
          <Link key={href} href={href} className={classNames("hover:text-[#47D7AC]", router.pathname === href ? "text-[#47D7AC]" : "")}>
            {title}
          </Link>
        ))}
      </nav>

      {isOpen && (
        <div className="absolute w-full left-0 top-0 h-[400px] z-[100] pt-[80px] bg-white">
          <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[300px] h-[150px] bg-[#47D7AC] blur-[80px] z-[-1]" />
          <nav className="flex flex-col justify-center gap-6 h-full items-center text-black text-3xl z-[200]">
            <Link href={"/"} onClick={toggle} className="hover:text-[#47D7AC]">
              Home
            </Link>
            <Link
              href={"/about"}
              onClick={toggle}
              className="hover:text-[#47D7AC]"
            >
              About us
            </Link>
            <Link
              href={"/contact"}
              onClick={toggle}
              className="hover:text-[#47D7AC]"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      <button
        className="max-md:visible max-md:block hidden z-[110]"
        onClick={toggle}
      >
        {isOpen ? (
          <Image
            height={30}
            width={30}
            alt="burger"
            src={"/img/icons/close.svg"}
            className=""
          />
        ) : (
          <Image
            height={30}
            width={30}
            alt="burger"
            src={"/img/icons/burger.svg"}
            className=""
          />
        )}
      </button>
    </ContentWrapper>
  );
};

export default Header;
