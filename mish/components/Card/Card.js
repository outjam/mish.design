import React, { useState } from "react";
import Link from "next/link";
import ButtonBlue from "../Button/ButtonBlue";
import TagPost from "../Tag/TagPost";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Card({ project, id }) {
  useEffect(() => {
    gsap.to(".card__image", {
      duration: 10,
      backgroundPositionY: -1200,
      scrollTrigger: {
        trigger: ".card",
        toggleActions: "play reset play reset",
        start: "top",
        end: "bottom ",
        scrub: 1,
      },
    });
  }, []);
  const { BackgroundImage, Attribute1, Attribute2, Title, Description, Tags, employer_list } = project.attributes.Project[0]
  return (
    <Link className="card" href={`/projectview?id=${id}`} data-cursor-text="Смотреть">
      <div className="card__image card__image-project" style={{
        backgroundImage: `url("${process.env.STRAPI_HOST}${BackgroundImage.data.attributes.url}")`
      }}></div>
      <div className="card__content">
        <div className="card__content-attribution">
          <p className="attribution caption-1">{Attribute1}</p>
          <p className="attribution caption-1">{Attribute2}</p>
        </div>
        <p className="body body-1">{Title}</p>
        <p className="description description-1">{Description}</p>
      </div>
      <div className="card__tag">
        {
          Tags.split(';').map((value) => (<TagPost name={value} />))
        }
      </div>
      <div className="card__action">
        <Link href="/profile">
          <div className="card_action-person">
            <img src={`${process.env.STRAPI_HOST}${employer_list.data.attributes.Photo.data.attributes.url}`} />
            <p>{employer_list.data.attributes.Name}</p>
          </div>
        </Link>
        <ButtonBlue name="Показать ещё" />
      </div>
    </Link>
  );
}

export default Card;
