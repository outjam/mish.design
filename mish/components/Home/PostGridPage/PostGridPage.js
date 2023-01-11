import React from "react";
import Card from "../../Card/Card";
import ButtonMore from "../../Button/ButtonMore";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function PostGridPage({ projects }) {
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
  const displayedProjects = projects.filter((value) => value.attributes.MainPageDisplay)
  return (
    <>
      <div className="postGridPage">
        {
          displayedProjects.map((value, index) => (
              <span className={`cardSpacer${index + 1}n`}>
                <Card project={value} id={value.id}/>
              </span>
          ))
        }
      </div>
      <div className="buttonMore_HomeMain">
        <Link href="/project">
          <ButtonMore name="Показать всё" />
        </Link>
      </div>
    </>
  );
}

export default PostGridPage;
