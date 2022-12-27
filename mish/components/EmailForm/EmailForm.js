import React from "react";
import ButtonBlue from "../Button/ButtonBlue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function EmailForm() {
  useEffect(() => {
    gsap.to(".video__emailForm", {
      transform: "scale(0.5)",
      transformOrigin: "top",
      duration: 10,
      scrollTrigger: {
        trigger: ".emailForm",
        start: "50",
        end: "bottom ",
        scrub: 1,
      },
      opacity: 0,
      rotate: -30,
      x: 800,
      y: 300,
    });
    gsap.to(".form__emailForm", {
      transform: "scale(0.5)",
      transformOrigin: "top",
      duration: 10,
      scrollTrigger: {
        trigger: ".emailForm",
        start: "100",
        end: "bottom ",
        scrub: 1,
      },
      opacity: 1,
      rotate: 5,
      x: 0,
      y: -300,
    });
  }, []);

  return (
    <div className="emailForm">
      <div className="video__emailForm">
        <video
          className="video__emailForm-video"
          src="https://culture3k.com/bottle.mp4"
          muted
          autoPlay={"autoplay"}
          control="false"
          preLoad="auto"
          loop
        />
      </div>
      <div className="form__emailForm">
        <h3 className="headline-5">
          Давайте сделаем
          <br />
          что-то новое вместе
        </h3>
        <form>
          <div className="input">
            <label for="fname">Имя и Фамилия</label>
            <input type="text" id="fname" name="fname"></input>
          </div>
          <div className="input">
            <label for="fname">Электронная почта</label>
            <input type="text" id="fname" name="fname"></input>
          </div>
          <p className="privacyInfoForm">
            Я согласен (на) с политикой конфиденциальности и даю согласие на
            обработку персональных данных
          </p>
        </form>
        <div className="buttonSendEmail">
          <ButtonBlue name="Отправить" />
        </div>
      </div>
    </div>
  );
}

export default EmailForm;
