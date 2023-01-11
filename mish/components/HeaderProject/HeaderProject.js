import React from "react";
import TagPost from "../Tag/TagPost";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function HeaderProject(props) {
  useEffect(() => {
    gsap.to(".coverUserSrc", {
      duration: 10,
      filter: "blur(16px)",
      transform: "scale(1.5)",
      opacity: 0,
      y: -400,
      transformOrigin: "top",
      scrollTrigger: {
        trigger: ".coverUser",
        start: "top",
        end: "bottom ",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="headerProject">
      <div className="coverProject">
        <span />
        <img
          className="coverUserSrc"
          src={`${process.env.STRAPI_HOST}${props.image}`}
        />
      </div>
      <div className="projectInfo">
        <p className="mark_new">{props.mark}</p>
        <h2>{props.name}</h2>
        <p className="description">{props.description}</p>
        <div className="card__tag">
          {
            props.tags.split(";").map((value) => (<TagPost name={value} />))
          }
        </div>
      </div>
    </div>
  );
}

export default HeaderProject;
