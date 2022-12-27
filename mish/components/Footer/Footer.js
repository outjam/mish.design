import React from "react";
import Link from "next/link";
import ButtonGray from "../Button/ButtonGray";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useEffect(() => {
    gsap.to(".sheetWow", {
      duration: 1,
      scrollTrigger: {
        trigger: ".footer-container",
        start: "top center",
        end: "bottom center",
        scrub: 4,
      },
      scaleY: 0,
      transformOrigin: "top",
    });
  }, []);

  return (
    <div className="scroller">
      <footer className="footer">
        <section className="footer-container">
          <span className="sheetWow"></span>
          <div className="footer-content-top">
            <h6>hello@mish.design</h6>

            <Link className="body-1" href="/">
              hello@mish.design
            </Link>
            <p>
              Идейные соображения высшего порядка, а также начало повседневной
              работы по формированию позиции требуют от нас анализа системы
              обучения кадров, соответствует насущным потребностям.
            </p>

            <div className="footer-content-bottom">
              <div className="footer-support-button">
                <Link href="/">
                  <ButtonGray name="Пользовательское соглашение" />
                </Link>
                <Link href="/">
                  <ButtonGray name="Политика конфиндициальности" />
                </Link>
                <Link href="/">
                  <ButtonGray name="Охрана труда" />
                </Link>
              </div>
              <p>
                Вся информация, представленная на сайте, носит информационный
                характер и ни при каких условиях не является публичной офертой,
                определяемой положениями Статьи 437(2) Гражданского кодекса РФ.
                Оставаясь на сайте Вы соглашаетесь с условиями
                «Пользовательского соглашения» Все права защищены. © 2016-2022
                ООО «Миш Дизайн» ИНН 5262338036
              </p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
