import React from "react";
import TagPost from "../Tag/TagPost";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function HeaderUser(props) {
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
    gsap.to(".avatarUser", {
      duration: 10,
      y: -800,
      transformOrigin: "top",
      scrollTrigger: {
        trigger: ".headerUser",
        start: "top",
        end: "bottom ",
        scrub: 2,
      },
    });
  }, []);

  return (
    <div className="headerUser">
      <div className="avatarUser">
        <img className="avaUserSrc" src="http://culture3k.com/avaUser.jpg" />
      </div>
      <div className="coverUser">
        <span />
        <img
          className="coverUserSrc"
          src="http://culture3k.com/coverUser.jpg"
        />
      </div>
      <div className="userInfo">
        <p>{props.position}</p>
        <h2>{props.name}</h2>
        <p>
          <small>{props.data}</small>
        </p>
        <div className="card__tag">
          <TagPost name="Tag" />
          <TagPost name="Tag_2" />
        </div>
      </div>
    </div>
  );
}

export default HeaderUser;
