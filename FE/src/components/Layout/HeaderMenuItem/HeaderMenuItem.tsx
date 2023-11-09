import React from "react";
import "./style.scss"

export type HeaderMenuItemType = {
  id: number;
  title: string;
};

type Props = {
  item: HeaderMenuItemType;
};

const HeaderMenuItem = ({ item }: Props) => {
  return <div className="menu-item">
    {item.title}
  </div>;
};

export default HeaderMenuItem;
