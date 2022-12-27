import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function CompanyMisha() {
  useEffect(() => {
    gsap.to(".companyMisha-video", {
      transform: "scale(2.5)",
      transformOrigin: "center",
      opacity: 0,
      duration: 10,
      y: "80vh",
      scrollTrigger: {
        trigger: ".companyMisha",
        start: "top 15vh",
        end: "center ",
        scrub: 6,
      },
    });
  }, []);

  return (
    <div className="companyMisha">
      <video
        className="companyMisha-video"
        src="https://culture3k.com/Misha.mp4"
        muted
        autoPlay={"autoplay"}
        preLoad="auto"
        control="false"
        loop
      />
      <h1> </h1>
    </div>
  );
}

export default CompanyMisha;
