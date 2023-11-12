import React from "react";
import "./style.scss";
import LeatherShoe1 from "@/assets/img/web/leather-shoe-1.jpg";
import LeatherShoe2 from "@/assets/img/web/leather-shoe-2.jpg";
import Sneaker1 from "@/assets/img/web/sneaker-1.jpg";
import Sneaker2 from "@/assets/img/web/sneaker-2.jpg";
import Banner from "./Banner";
import AdditionService from "./AdditionService";
import AdvertConcept from "./AdvertConcept";
import ProductGroup from "./ProductGroup";
import { ConceptType } from "./AdvertConcept/AdvertConcept";

type Props = {};

const concept: ConceptType[] = [
  {
    id: 1,
    title: "Leather Shoe",
    description:
      "Leather shoes are a timeless and sophisticated choice in footwear. Crafted from high-quality leather, these shoes not only exude elegance but also offer durability and comfort. The supple texture of leather molds to the foot over time, providing a personalized fit. Whether in classic designs like oxfords or more casual styles like loafers, leather shoes seamlessly transition from formal occasions to everyday wear. The rich hues and fine craftsmanship of leather footwear make them a staple in any wardrobe, symbolizing both refinement and enduring style.",
    bgColor: "concept-white",
    imageRight: (
      <div className="concept-image-right">
        <img
          className="right-shoe-top"
          src={LeatherShoe2}
          alt="leather-shoe1"
        />
        <img
          className="right-shoe-down"
          src={LeatherShoe1}
          alt="leather-shoe2"
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "Sneaker",
    description:
      "Sneakers are versatile footwear designed for comfort and style. With their rubber soles and cushioned insoles, sneakers provide excellent support for various activities, from casual strolls to intense workouts. The wide array of designs, colors, and materials make sneakers a fashionable choice for individuals of all ages, allowing them to express their personality through their footwear.",
    bgColor: "concept-red",
    imageLeft: (
      <div className="concept-image-left">
        <img className="left-shoe-top" src={Sneaker2} alt="sneaker1" />
        <img className="left-shoe-down" src={Sneaker1} alt="sneaker2" />
      </div>
    ),
  },
];

const HomePage = (props: Props) => {
  return (
    <main>
      <Banner />
      <AdditionService />
      {concept.map((item) => (
        <AdvertConcept item={item} key={item.id}/>
      ))}
      <ProductGroup />
    </main>
  );
};

export default HomePage;
