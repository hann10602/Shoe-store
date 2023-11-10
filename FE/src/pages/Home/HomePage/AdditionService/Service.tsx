import React from "react";

export type ServiceType = {
  id: number;
  title: string;
  subTitle: string;
  image: React.JSX.Element;
};

type Props = {
  item: ServiceType;
};

const Service = ({ item }: Props) => {
  return (
    <div className="service">
      {item.image}
      <div className="service-content">
        <p className="service-title">{item.title}</p>
        <p className="service-sub-title">{item.subTitle}</p>
      </div>
    </div>
  );
};

export default Service;
