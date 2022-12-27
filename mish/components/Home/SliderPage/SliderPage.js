import React from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);


function SliderPage() {

    useEffect(() => {
        
        gsap.to(".headline_txt-one", {
            duration: 1,
            opacity: 1,
          });
          gsap.to(".headline_txt-two", {
            duration: 1.5,
            opacity: 1,
          });

        gsap.to(".sliderPage-video", {
            transform: 'scale(0.5)',
            transformOrigin: 'center',
            duration: 10,
            scrollTrigger: {
                trigger: ".sliderPage",
                start: "top",
                end: "bottom ",
                scrub: 1,
              },
              opacity: 1,
          });

          gsap.to(".headline-6", {
            duration: 1,
            scrollTrigger: {
                trigger: ".headline",
                start: "top center",
                end: "bottom center",
                scrub: 2,
              },
              opacity: 1,
              color: "white",
              y: 250
          });
      }, []);

    return (
        <div className="sliderPage">
            
                <video
                className="sliderPage-video"
                src="https://culture3k.com/office.mp4"
                muted
                autoPlay={"autoplay"}
                preLoad="auto"
                loop
                />
                <div className="headline">
                <h1>
                    <span className="HelloMishLine"><span className="headline_txt-one">Продуктовая <br/></span><span className="headline_txt-two">лаборатория</span></span>
                </h1>
                <p className="headline-6">Разнообразный и богатый опыт укрепление и развитие структуры в значительной степени обуславливает создание новых предложений.</p>
                </div>
        </div>
    )
}

export default SliderPage
