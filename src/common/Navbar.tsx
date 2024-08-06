import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Icon from "./Icon";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const flag = useRef(false);

  useEffect(() => {
    if (!flag.current) {
      flag.current = true;
      document.addEventListener("scroll", () => setScrollY(window.scrollY));
    }
  }, []);

  return (
    <nav
      className={twMerge(
        "p-page py-3 flex fixed top-0 w-full z-[999] duration-300",
        scrollY > 13 ? "bg-background text-front" : "text-back bg-transparent"
      )}
    >
      <div className="flex items-center gap-x-2">
        <img src="/logo.png" className="w-10 aspect-square" />
        <h1 className="text-2xl font-extrabold tracking-tight font-inter">
          ONLY
        </h1>
      </div>

      <div className="py-1">
        <figure
          className={twMerge(
            "w-[1px] bg-back/30 h-full mx-6",
            scrollY > 13 && "bg-front/30"
          )}
        />
      </div>

      <div className="flex gap-x-8 items-center">
        {navLinks.map((item, key) => (
          <Link key={key} className="font-semibold text-lg" to={item.to}>
            {item.name}
          </Link>
        ))}
      </div>

      <section className="flex-1 flex justify-center">
        <div
          className={twMerge(
            "flex items-center bg-background/30 backdrop-blur-3xl rounded-xl p-2 w-1/2",
            scrollY > 13 && "backdrop-blur-none bg-front/5"
          )}
        >
          <Icon icon="search" className="text-2xl" />
          <input
            className={twMerge(
              "bg-transparent text-lg placeholder:text-back/70 px-2 font-medium",
              scrollY > 13 && "placeholder:text-front/70 text-front"
            )}
            placeholder="Search"
          />
        </div>
      </section>

      <div className="flex gap-x-4">
        <button>Connect</button>
        <button>Soethgng</button>
      </div>
    </nav>
  );
}

const navLinks = [
  {
    name: "Datasets",
    to: "/",
  },
  {
    name: "Surveys",
    to: "/surveys",
  },
  {
    name: "Creator",
    to: "/creator",
  },
];
