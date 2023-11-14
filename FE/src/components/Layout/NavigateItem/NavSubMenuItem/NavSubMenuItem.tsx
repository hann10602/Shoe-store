import React, { memo } from "react";
import { CategoryType } from "@/store/category/type";
import "./style.scss";
import { useHistory } from "react-router-dom";

type Props = {
  item: CategoryType;
};

const NavSubMenuItem = ({ item }: Props) => {
  const history = useHistory();

  return (
    <p
      className="nav-sub-menu-item"
      onClick={() => history.push(`/home?category=${item.code}`)}
    >
      {item.name}
    </p>
  );
};

export default memo(NavSubMenuItem);
