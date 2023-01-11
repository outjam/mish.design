import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function CompanyMain() {
  useEffect(() => {
    gsap.to(".companyMain-video", {
      transform: "scale(1.5)",
      transformOrigin: "top",
      opacity: 0,
      duration: 10,
      y: "-50vh",
      clip: "circle(50% at 50% 50%)",
      scrollTrigger: {
        trigger: ".companyMain",
        start: "top",
        end: "bottom ",
        scrub: 3,
      },
    });
  }, []);

  return (
    <div className="companyMain">
      <video
        className="companyMain-video"
        src="http://culture3k.com/bubble.mp4"
        muted
        autoPlay={"autoplay"}
        preload="auto"
        loop
      />
    </div>
  );
}

export default CompanyMain;
