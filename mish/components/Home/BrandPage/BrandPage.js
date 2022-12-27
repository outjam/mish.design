import React from 'react'
import CardBrand from '../../Card/CardBrand'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function BrandPage() {

    useEffect(() => {
        gsap.to(".brandPageOne", {
            scrollTrigger: {
                start: "top center",
                end: "bottom center",
                scrub: 3,
              },
              x: -1000,
          })
      }, []);

      useEffect(() => {
        gsap.to(".brandPageTwo", {
            scrollTrigger: {
                start: "top center",
                end: "bottom center",
                scrub: 3,
              },
              x: 500,
          })
      }, []);

      useEffect(() => {
        gsap.to(".brandPageThree", {
            scrollTrigger: {
                start: "top center",
                end: "bottom center",
                scrub: 3,
              },
              x: -1200,
          })
      }, []);
      
    return (
        <div className="brandPage">
            <div className="brandPageOne">
                    <CardBrand name="Газпром"></CardBrand>
                    <CardBrand name="RadioPlayer"></CardBrand>
                    <CardBrand name="Восьмерка"></CardBrand>
                    <CardBrand name="Elife"></CardBrand>
                    <CardBrand name="Акра"></CardBrand>
                    <CardBrand name="МскГуру"></CardBrand>
                    <CardBrand name="Baza"></CardBrand>
            </div>
            <div className="brandPageTwo">
                    <CardBrand name="Альфабанк"></CardBrand>
                    <CardBrand name="MST"></CardBrand>
                    <CardBrand name="Nebula"></CardBrand>
                    <CardBrand name="Kaspersky"></CardBrand>
                    <CardBrand name="Газпром"></CardBrand>
                    <CardBrand name="Globus"></CardBrand>
                    <CardBrand name="SBI Bank"></CardBrand>
            </div>
            <div className="brandPageThree">
                    <CardBrand name="Беговое сообщество"></CardBrand>
                    <CardBrand name="CheMexsol"></CardBrand>
                    <CardBrand name="Picksell"></CardBrand>
                    <CardBrand name="Юрист Сосед"></CardBrand>
                    <CardBrand name="Сател"></CardBrand>
                    <CardBrand name="Bitzlato"></CardBrand>
                    <CardBrand name="БКС"></CardBrand>
            </div>
        </div>
    )
}

export default BrandPage
