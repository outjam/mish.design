import React from 'react'
import Card from '../../Card/Card'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

function PostGridPage() {

    useEffect(() => {
        gsap.to(".cardSpacer1n", {
            duration: 10,
            scrollTrigger: {
                trigger: ".postGridPage",
                start: "top center",
                end: "bottom ",
                scrub: 5,
              },
              y: 50,
          });
        gsap.to(".cardSpacer2n", {
            duration: 10,
            scrollTrigger: {
                trigger: ".postGridPage",
                start: "top center",
                end: "bottom ",
                scrub: 5,
              },
              y: -250,
          });
          gsap.to(".cardSpacer3n", {
            duration: 10,
            scrollTrigger: {
                trigger: ".postGridPage",
                start: "top center",
                end: "bottom ",
                scrub: 5,
              },
              y: -100,
          });
          gsap.to(".cardSpacer4n", {
            duration: 10,
            scrollTrigger: {
                trigger: ".postGridPage",
                start: "top center",
                end: "bottom ",
                scrub: 5,
              },
              y: -400,
          });
      }, []);
      
    return (
        <div className="postGridPage">
                <span className="cardSpacer1n"><Card /></span>
                <span className="cardSpacer2n"><Card /></span>
                <span className="cardSpacer3n"><Card /></span>
                <span className="cardSpacer4n"><Card /></span>
        </div>
    )
}

export default PostGridPage
