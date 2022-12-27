import React, { useState } from "react";
import Link from "next/link";

import NavItem from "./NavItem";
import ButtonGray from "../Button/ButtonGray";
import ButtonRed from "../Button/ButtonRed";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MENU_LIST = [
  { text: "Компания", href: "/company" },
  { text: "Проекты", href: "/project" },
  { text: "Услуги", href: "/service" },
  { text: "Блог", href: "/blog" },
  { text: "Контакты", href: "/contact" },
];
const NavBar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"} className="logo">
          <h1 className="logo"></h1>
        </Link>

        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
      <div className="nav__action">
        <div className="nav__button-bar">
          <Link href="../../assets/Page.pdf" target="_blank" download>
            <ButtonGray name="Скачать презентацию" />
          </Link>
          <Link href="/brief">
            <ButtonRed name="Обсудить проект" />
          </Link>
        </div>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
