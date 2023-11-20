import React from "react";
import "./style.scss";
import { ShoeType } from "@/store/shoe/type";
import { useHistory } from "react-router-dom";

type Props = {
  item: ShoeType;
};

const SearchResultItem = ({ item }: Props) => {
  const history = useHistory();

  return (
    <div
      className="shoe-item-wrapper"
      onClick={() => history.push(`/shoe?id=${item.id}`)}
    >
      {item.name}
    </div>
  );
};

export default SearchResultItem;
