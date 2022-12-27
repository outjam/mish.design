import React from "react";
import Link from "next/link";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function CompanyTeam(props) {
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
        <Link href="/profile">
          <div className="companyTeam_profile">
            <img src="https://culture3k.com/profile_1.mp4" />
            <p>Арсений Закиров</p>
            <p>
              <small>Лид 3д дизайна</small>
            </p>
          </div>
        </Link>

        <Link href="/profile">
          <div className="companyTeam_profile">
            <img src="https://culture3k.com/profile_2.mp4" />
            <p>Имя Фамилия</p>
            <p>
              <small>Должность</small>
            </p>
          </div>
        </Link>

        <Link href="/profile">
          <div className="companyTeam_profile">
            <img src="https://culture3k.com/profile_3.mp4" />
            <p>Имя Фамилия</p>
            <p>
              <small>Должность</small>
            </p>
          </div>
        </Link>

        <Link href="/profile">
          <div className="companyTeam_profile">
            <img src="https://culture3k.com/profile_4.mp4" />
            <p>Имя Фамилия</p>
            <p>
              <small>Должность</small>
            </p>
          </div>
        </Link>

        <Link href="/profile">
          <div className="companyTeam_profile">
            <img src="https://culture3k.com/profile_5.mp4" />
            <p>Имя Фамилия</p>
            <p>
              <small>Должность</small>
            </p>
          </div>
        </Link>

        <Link href="/profile">
          <div className="companyTeam_profile">
            <img src="https://culture3k.com/profile_6.mp4" />
            <p>Имя Фамилия</p>
            <p>
              <small>Должность</small>
            </p>
          </div>
        </Link>

        <Link href="/profile">
          <div className="companyTeam_profile">
            <img src="https://culture3k.com/profile_7.mp4" />
            <p>Имя Фамилия</p>
            <p>
              <small>Должность</small>
            </p>
          </div>
        </Link>

        <Link href="/profile">
          <div className="companyTeam_profile">
            <img src="https://culture3k.com/profile_8.mp4" />
            <p>Имя Фамилия</p>
            <p>
              <small>Должность</small>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CompanyTeam;
