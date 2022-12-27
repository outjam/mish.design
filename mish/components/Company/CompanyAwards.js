import React from "react";
import CardAwards from "../Card/CardAwards";
import ButtonMore from "../Button/ButtonMore";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function CompanyAwards() {
  useEffect(() => {
    gsap.to(".titleAwards", {
      opacity: 0,
      duration: 10,
      y: -200,
      scrollTrigger: {
        trigger: ".companyAwardsSection",
        start: "top center",
        end: "bottom",
        scrub: 9,
      },
    });
  }, []);

  return (
    <div className="companyAwardsSection">
      <h4 className="titleAwards">
        Вместе мы получили более 15 престижных профессиональных наград в
        различных сферах
      </h4>
      <div className="companyAwards">
        <CardAwards
          img="http://culture3k.com/goldApp.gif"
          data="2022"
          title="1 место премии «Золотое приложение»"
          description="В номинации «Приложение для фитнеса»"
        />
        <CardAwards
          img="http://culture3k.com/goldApp.gif"
          data="2022"
          title="2 место премии «Золотое приложение»"
          description="В номинации «Приложение для психологической помощи»"
        />
        <CardAwards
          img="https://crosti.ru/patterns/00/21/c8/1b_picture_c190b256.jpg"
          data="2022"
          title="3 место премии «Рейтинг Рунета»"
          description="В номинации «Одностраничный сайт и лендинг»"
        />
        <CardAwards
          img="https://www.tourtrans.ru/images/countries/estoniya/tallin/shutterstock_160118099.jpg"
          data="2021"
          title="1 место премии «Рейтинг Рунета»"
          description="В номинации «Приложение на иностранном языке»"
        />
        <CardAwards
          img="http://culture3k.com/tagline.gif"
          data="2021"
          title="1 место премии «Tagline»"
          description="В номинации «Телеком, IT и интернет-бизнес»"
        />
        <CardAwards
          img="http://culture3k.com/tagline.gif"
          data="2022"
          title="2 место премии «Tagline»"
          description="В номинации «Лучшее мобильное MVP-приложение»"
        />
      </div>
      <ButtonMore name="Показать ещё" />
    </div>
  );
}

export default CompanyAwards;
