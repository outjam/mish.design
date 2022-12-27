import React from 'react'
import Link from "next/link";
import Button from "../Button/Button";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {

    useEffect(() => {
        gsap.to(".sheetWow", {
            duration: 1,
            scrollTrigger: {
                trigger: ".footer-container",
                start: "top center",
                end: "bottom center",
                scrub: 3,
              },
              scaleY: 0,
              transformOrigin: 'top',
          });
      }, []);
   

    return (
        <div class="scroller">
        <footer class="footer">
            <section class="footer-container">
                <span className="sheetWow"></span>
                <div className="footer-content-top">
                    <h1>hello@mish.design</h1>

                    <Link className="headline-1" href="/">
                    hello@mish.design
                    </Link>
                    <p>
                    Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа системы обучения кадров, соответствует насущным потребностям.
                    </p>

                    <div className="footer-content-bottom">
                        <div className="footer-support-button">
                        <Link href="/">
                            <Button name="Пользовательское соглашение"></Button>
                        </Link>
                        <Link href="/">
                            <Button name="Политика конфиндициальности"></Button>
                        </Link>
                        <Link href="/">
                            <Button name="Охрана труда"></Button>
                        </Link>
                        </div>
                        <p>Вся информация, представленная на сайте, носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437(2) Гражданского кодекса РФ. Оставаясь на сайте Вы соглашаетесь с условиями «Пользовательского соглашения» Все права защищены. © 2016-2022 ООО «Миш Дизайн» ИНН 5262338036</p>
                    </div>
                </div>
            </section>
        </footer>
        </div>
    )
}

export default Footer
