import React, { useState } from "react";
import Link from "next/link";
import Buttom from "../Button/Button"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Card() {

    useEffect(() => {
        gsap.to(".card__image", {
            duration: 10,
            backgroundPositionY: -1200,
            scrollTrigger: {
                trigger: ".card",
                toggleActions: 'play reset play reset',
                start: "top",
                end: "bottom ",
                scrub: 1,
              },
          });
      }, []);


    return (
        <Link className="card" href="/projectview" data-cursor-text="Смотреть">
            <div className="card__image card__image-project"></div>
            <div className="card__content">
                <div className="card__content-attribution">
                    <p className="attribution caption-1">Attribution 1</p>
                    <p className="attribution caption-1">Attribution 2</p>
                </div>
                <p className="body body-1">Title</p>
                <p className="description description-1">Description</p>
            </div>
            <div className="card__tag">
                Tag
            </div>
            <div className="card__action">
                <div className="card_action-person">Person</div>
                <Buttom name="Показать ещё" />
            </div>
        </Link>
    )
}

export default Card
