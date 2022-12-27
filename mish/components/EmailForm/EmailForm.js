import React from 'react'
import Button from "../Button/Button"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function EmailForm() {

    useEffect(() => {
        gsap.to(".video__emailForm", {
            transform: 'scale(0.5)',
            transformOrigin: 'top',
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
            transform: 'scale(0.5)',
            transformOrigin: 'top',
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
                preLoad="auto"
                loop
            />
            </div>
            <div className="form__emailForm">
                <h3 className="headline-5">Начать сотрудничество</h3>

                <div className="bolt bolt_top_right">
                    <div>
                        <div className="bolt_X_one"></div>
                        <div className="bolt_X_two"></div>
                    </div>
                </div> 

                
                <span className="bolt_top_left"></span>
                <span className="bolt_bottom"></span>
                <div className="buttonSendEmail">
                    <Button name="Отправить"></Button>
                </div>
            </div>
        </div>
    )
}

export default EmailForm
