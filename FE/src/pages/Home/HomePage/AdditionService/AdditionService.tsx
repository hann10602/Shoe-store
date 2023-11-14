import React, { memo } from "react";
import ShipCod from "@/assets/img/web/service1.png";
import FreeShip from "@/assets/img/web/service2.png";
import Return from "@/assets/img/web/service3.png";
import "./style.scss";
import Service, { ServiceType } from "./Service";

type Props = {};

const service: ServiceType[] = [
  {
    id: 1,
    title: "Payment after receipt",
    subTitle: "Nationwide delivery",
    image: <img src={ShipCod} alt="ship-cod" />,
  },
  {
    id: 2,
    title: "Free ship",
    subTitle: "For order than 49.99$",
    image: <img src={FreeShip} alt="free-ship" />,
  },
  {
    id: 3,
    title: "Free products exchange",
    subTitle: "30 days from purchase datex",
    image: <img src={Return} alt="return" />,
  },
];

const AdditionService = (props: Props) => {
  return (
    <div id="addition-service">
      {service.map((item) => (
        <Service key={item.id} item={item} />
      ))}
    </div>
  );
};

export default memo(AdditionService);
