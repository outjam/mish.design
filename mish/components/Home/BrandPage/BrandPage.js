import React from "react";
import CardBrand from "../../Card/CardBrand";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function BrandPage({ brands }) {
  useEffect(() => {
    gsap.to(".brandPageOne", {
      scrollTrigger: {
        start: "top center",
        end: "bottom center",
        scrub: 3,
      },
      x: -1000,
    });
  }, []);

  useEffect(() => {
    gsap.to(".brandPageTwo", {
      scrollTrigger: {
        start: "top center",
        end: "bottom center",
        scrub: 3,
      },
      x: 500,
    });
  }, []);

  useEffect(() => {
    gsap.to(".brandPageThree", {
      scrollTrigger: {
        start: "top center",
        end: "bottom center",
        scrub: 3,
      },
      x: -1200,
    });
  }, []);
  return (
    <div className="brandPage">
      <div className="brandPageOne">
        {
          brands.map((value, index) => {
            if (index < 6) {
              return (<CardBrand name={value.attributes.Brand[0].Title}></CardBrand>)
            }
            return null
          })
        }
      </div>
      <div className="brandPageTwo">
        {
          brands.map((value, index) => {
            if (index > 6 && index < 13){
              return (<CardBrand name={value.attributes.Brand[0].Title}></CardBrand>)
            }
            return null
          })
        }
      </div>
      <div className="brandPageThree">
        {
          brands.map((value, index) => {
            if (index > 13){
              return (<CardBrand name={value.attributes.Brand[0].Title}></CardBrand>)
            }
            return null
          })
        }
      </div>
    </div>
  );
}

export default BrandPage;
