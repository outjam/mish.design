import React from 'react'
import Tag from '../../Tag/Tag'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import CardBrand from "../../Card/CardBrand";

gsap.registerPlugin(ScrollTrigger);

function TagPage({ tags }) {

    useEffect(() => {
        gsap.to(".tagPageOne", {
            scrollTrigger: {
                start: "top",
                end: "bottom",
                scrub: true,
              },
              x: 500,
          })
      }, []);

      useEffect(() => {
        gsap.to(".tagPageTwo", {
            scrollTrigger: {
                start: "top",
                end: "bottom",
                scrub: true,
              },
              x: -400   
          })
      }, []);

      useEffect(() => {
        gsap.to(".tagPageThree", {
            scrollTrigger: {
                start: "top",
                end: "bottom",
                scrub: true,
              },
              x: 400,
          })
      }, []);

    return (
        <div className="tagPage">
            <div className="tagPageOne">
                {
                    tags.map((value, index) => {
                        if (index < 6) {
                            return value.attributes.Tag.CursourImage.data ?
                            (<Tag name={value.attributes.Tag.Title} cursor={process.env.STRAPI_HOST + value.attributes.Tag.CursourImage.data[0].attributes.url} />) :
                            (<Tag name={value.attributes.Tag.Title}/>)
                        }
                        return null
                    })
                }
            </div>
            <div className="tagPageTwo">
                {
                    tags.map((value, index) => {
                        if (index > 6 && index < 13) {
                            return value.attributes.Tag.CursourImage.data ?
                                (<Tag name={value.attributes.Tag.Title} cursor={process.env.STRAPI_HOST + value.attributes.Tag.CursourImage.data[0].attributes.url} />) :
                                (<Tag name={value.attributes.Tag.Title}/>)
                        }
                        return null
                    })
                }
            </div>
            <div className="tagPageThree">
                {
                    tags.map((value, index) => {
                        if (index > 13 && index < 21) {
                            return value.attributes.Tag.CursourImage.data ?
                                (<Tag name={value.attributes.Tag.Title} cursor={process.env.STRAPI_HOST + value.attributes.Tag.CursourImage.data[0].attributes.url} />) :
                                (<Tag name={value.attributes.Tag.Title}/>)
                        }
                        return null
                    })
                }
            </div>
        </div>
    )
}

export default TagPage
