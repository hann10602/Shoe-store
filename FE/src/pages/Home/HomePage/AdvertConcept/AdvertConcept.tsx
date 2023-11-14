import React, { memo } from "react";
import "./style.scss";

export type ConceptType = {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  imageLeft?: React.ReactElement;
  imageRight?: React.ReactElement;
};

type Props = {
  item: ConceptType;
};

const AdvertConcept = ({ item }: Props) => {
  return (
    <div className={`${item.bgColor} concept`}>
      {item.imageLeft}
      <div className="concept-content">
        <p className="concept-title">{item.title}</p>
        <p className="concept-sub-title">{item.description}</p>
        <div className="btn-wrapper">
          <button>Explore</button>
        </div>
      </div>
      {item.imageRight}
    </div>
  );
};

export default memo(AdvertConcept);
