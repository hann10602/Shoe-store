import React, { useEffect } from "react";
import "./style.scss";
import { abouts } from "@/constants/about";

type Props = {};

const About = (props: Props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <div className="header-space"></div>
      <div id="about">
        {abouts.map((about, i) => (
          <div className="about-item">
            <p className="about-title">{about.title}</p>
            <div className="about-body">
              {i % 2 !== 0 && (
                <img
                  className="about-image-left"
                  src={about.image}
                  alt="about"
                />
              )}
              <div className="about-content">{about.content}</div>
              {i % 2 === 0 && (
                <img
                  className="about-image-right"
                  src={about.image}
                  alt="about"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
