import { MdClose, MdMenu } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const router = useRouter();
  const [path, setPath] = useState<string>("");
  const [isShowNavbar, setIsShowNavbar] = useState<boolean>(false);

  useEffect(() => {
    const pathURL = router.pathname.replace(/^./, "");
    setPath(pathURL);
  }, [router]);

  const onChangeMenu = (route: string) => {
    setPath(route.substring(1));
    setIsShowNavbar(false);
  };

  const listMenu = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "About",
      path: "/about",
    },
    {
      text: "Portfolio",
      path: "/portfolio",
    },
    {
      text: "Certificate",
      path: "/certificate",
    },
  ];

  return (
    <>
      <header
        className={`p-0 bg-white z-40 h-[65px] ${isShowNavbar ? "" : "shadow"}`}
      >
        <div>
          <Link href={"/"}>
            <Image
              src="/assets/logo/DevT.png"
              width={100}
              height={50}
              alt="logo"
            />
          </Link>
          <div className={"hidden md:flex flex-row gap-10"}>
            {listMenu.map((it, index) => {
              const isActiveMenu = path === it.path.substring(1);
              return (
                <Link
                  key={index}
                  className={`${
                    isActiveMenu && "bg-darkblue px-4 rounded-full text-white"
                  } hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer transition-all duration-500`}
                  href={it.path}
                  onClick={() => onChangeMenu(it.path)}
                >
                  {it.text}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setIsShowNavbar(!isShowNavbar)}
            className={"flex flex-row md:hidden delay-75"}
          >
            {isShowNavbar ? (
              <MdClose className="text-4xl" />
            ) : (
              <MdMenu className="text-4xl" />
            )}
          </button>
        </div>
      </header>

      <div
        className={`z-50 fixed flex flex-col ${
          isShowNavbar ? "translate-x-0" : "translate-x-full"
        } duration-300 md:hidden gap-10 bg-white h-screen w-full px-5 py-5 mt-16`}
      >
        {listMenu.map((it, index) => (
          <Link
            key={index}
            className={`${
              path === it.path.substring(1) &&
              "bg-darkblue px-4 rounded-full text-white"
            } hover:bg-darkblue hover:rounded-full px-4 hover:text-white hover:cursor-pointer w-fit`}
            href={it.path}
            onClick={() => onChangeMenu(it.path)}
          >
            {it.text}
          </Link>
        ))}
      </div>
    </>
  );
};
