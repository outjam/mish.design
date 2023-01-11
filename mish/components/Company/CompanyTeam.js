import React from "react";
import Link from "next/link";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function CompanyTeam({ employers }) {
  useEffect(() => {
    gsap.to(".titleAwards", {
      opacity: 0,
      duration: 10,
      y: -200,
      scrollTrigger: {
        trigger: ".companyTeamSection",
        start: "top center",
        end: "bottom",
        scrub: 9,
      },
    });
  }, []);
  return (
    <div className="companyTeamSection">
      <h4 className="titleAwards">
        Чтобы делать лучший продукт, мы работаем с лучшими специалистами
      </h4>
      <div className="companyTeam">
        {
          employers.map((value, index) => {
            return (<Link key={index} href="/profile">
                  <div className="companyTeam_profile">
                    <img src={`${process.env.STRAPI_HOST}${value.attributes.Employer[0].EmployeImage.data.attributes.url}`}/>
                    <p>{value.attributes.Employer[0].EmployeName}</p>
                    <p>
                      <small>{value.attributes.Employer[0].Grade}</small>
                    </p>
                  </div>
                </Link>)})
        }
      </div>
    </div>
  );
}

export default CompanyTeam;
