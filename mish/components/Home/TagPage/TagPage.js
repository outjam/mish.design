import React from 'react'
import Tag from '../../Tag/Tag'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function TagPage() {

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
                    <Tag name="Ux" />
                    <Tag name="Videoproduction" />
                    <Tag name="Mobile" cursor="https://wallpapers-clan.com/wp-content/uploads/2022/08/meme-gif-pfp-1.gif" />
                    <Tag name="Desktop" cursor="https://media3.giphy.com/media/M9C8PHLkh0hQxraaLG/giphy.gif" />
                    <Tag name="Research" />
                    <Tag name="Copywriting" />
                    <Tag name="Graphic" />
            </div>
            <div className="tagPageTwo">
                    <Tag name="Copywriting" />
                    <Tag name="Graphic" />
                    <Tag name="Brand" cursor="https://media.giphy.com/media/GcSqyYa2aF8dy/giphy.gif" />
                    <Tag name="Ui" />
                    <Tag name="Frontend" cursor="https://www.icegif.com/wp-content/uploads/icegif-1617.gif" />
                    <Tag name="Backend" cursor="https://i.gifer.com/6hwr.gif" />
                    <Tag name="React" />
            </div>
            <div className="tagPageThree">
                    <Tag name="Web" />
                    <Tag name="App" cursor="https://media4.giphy.com/media/KxtZLJlAAwNGUVH2eV/giphy.gif?cid=6c09b9527df569dda09e0bab48f41f327abeed26c713a40b&rid=giphy.gif&ct=g" />
                    <Tag name="Frontend" />
                    <Tag name="React" />
                    <Tag name="Graphic" />
                    <Tag name="Backend" cursor="https://media.giphy.com/media/GcSqyYa2aF8dy/giphy.gif" />
                    <Tag name="Brand" />
            </div>
        </div>
    )
}

export default TagPage
