import React, {useState} from "react";
import ButtonBlue from "../Button/ButtonBlue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import {CmsApi} from "../../services/strapi";

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
  const [clientInfo, setClientInfo] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const infoChange = (type, value) => {
    switch (type) {
      case 'name':
        setClientInfo(value)
        break;
      case 'email':
        value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && setClientEmail(value)
        break;
      case 'checkbox':
        setConfirmed(value)
        break;
      default:
        break;
    }
  }
  const userCreate = () => {
    confirmed & CmsApi.createNewClient(clientInfo, clientEmail)
  }
  return (
    <div className="emailForm">
      <div className="video__emailForm">
        <video
          className="video__emailForm-video"
          src="https://culture3k.com/bottle.mp4"
          muted
          autoPlay={"autoplay"}
          controls={false}
          preload="auto"
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
            <input type="text" id="fname" name="fname" onChange={(e) => infoChange('name', e.currentTarget.value)}></input>
          </div>
          <div className="input">
            <label for="fname">Электронная почта</label>
            <input type="text" id="fname" name="fname" onChange={(e) => infoChange('email',e.currentTarget.value)}></input>
          </div>
          <div className="privacyConatiner">
            <input className="inputCheckBox" type="checkbox" onChange={(e) => infoChange('checkbox', !confirmed)}/>
            <p className="privacyInfoForm">
              Я согласен (на) с политикой конфиденциальности и даю согласие на
              обработку персональных данных
            </p>
          </div>
        </form>
        <div className="buttonSendEmail">
          <button className="buttonBlue" onClick={() => userCreate()}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default EmailForm;
