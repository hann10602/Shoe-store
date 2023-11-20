import { TermType, terms } from "@/constants/policy";
import React, { useState } from "react";
import "./style.scss";

type Props = {};

const Policy = (props: Props) => {
  const [policies, setPolicies] = useState<TermType[]>(terms);
  const [change, setChange] = useState<boolean>(false);

  const handleScroll = (policy: TermType) => {
    const targetElement = document.getElementById(policy.code);

    if (targetElement) {
      const id = policies.indexOf(policy);
      const result = policies;
      policies[id].isOpen = true;

      setPolicies(result);
      setChange(!change);

      window.scrollTo({
        top: targetElement?.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="header-space"></div>
      <div id="policy">
        <div id="policy-index">
          {policies.map((policy) => {
            console.log(policies);
            return (
              <div
                className="policy-index-option"
                key={policy.id}
                onClick={() => handleScroll(policy)}
              >
                {policy.id}. {policy.title}
              </div>
            );
          })}
        </div>
        <div id="policy-wrapper">
          {policies.map((policy) => (
            <div className="policy-option" key={policy.id} id={policy.code}>
              <div className="policy-header">
                <p className="policy-title">
                  {policy.id}. {policy.title}
                </p>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    const id = policies.indexOf(policy);
                    const result = policies;
                    policies[id].isOpen = !policies[id].isOpen;

                    setPolicies(result);
                    setChange(!change);
                  }}
                >
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 451.847 451.847"
                  >
                    <path
                      d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                    />
                  </svg>
                </span>
              </div>
              {policy.isOpen && (
                <div className="policy-content">{policy.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;
