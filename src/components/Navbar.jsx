import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <nav
      className={`${styles.paddingX} flex w-full items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Devzone 1.0{" "}
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`${
                active === title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer]`}
              onClick={() => {
                setActive(title);
                window.scrollTo(0, document.getElementById(id).offsetTop - 100);
              }}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}

          <div 
            class="apply-button"
            data-hackathon-slug="devzone" 
            data-button-theme="dark-inverted"
            className="apply-button max-h-[22px] max-w-[156px] scale-75 rounded-lg"
          ></div>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } sm:hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex  flex-col gap-10">
            {navLinks.map(({ id, title }) => (
              <li
                key={id}
                className={`${
                  active === title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(title);
                  window.scrollTo(
                    0,
                    document.getElementById(id).offsetTop - 100,
                  );
                }}
              >
                <a href={`#${id}`}>{title}</a>
              </li>
            ))}

            <li>
              <div 
                class="apply-button"
                data-hackathon-slug="devzone" 
                data-button-theme="dark-inverted"
                className="apply-button h-[22px] w-[156px]"
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
