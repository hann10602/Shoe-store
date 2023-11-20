import { CategoryType } from "@/store/category/type";
import React, { memo, useState } from "react";
import "./style.scss";
import NavSubMenuItem from "./NavSubMenuItem";
import { useSelector } from "react-redux";
import { isGettingCategoriesSelector } from "@/store/category/selector";
import { useHistory } from "react-router-dom";

export type NavType = {
  id: number;
  path?: string;
  title: string;
  menuItem?: CategoryType[];
};

type Props = {
  item: NavType;
};

const NavigateItem = ({ item }: Props) => {
  const [isMobileSubMenu, setIsMobileSubMenu] = useState<boolean>(false);
  const isGettingCategories = useSelector(isGettingCategoriesSelector);
  const history = useHistory();

  return (
    <div
      className="nav-item"
      onClick={() => {
        if (item.menuItem) {
          setIsMobileSubMenu(!isMobileSubMenu);
        } else if (item.path) {
          history.push(item.path);
        }
      }}
    >
      <div id="nav-content">
        {item.title}
        {item.menuItem && (
          <svg
            version="1.1"
            id="Capa_1"
            style={{ marginLeft: 8 }}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="white"
            viewBox="0 0 123.959 123.958"
          >
            <path
              d="M117.979,28.017h-112c-5.3,0-8,6.4-4.2,10.2l56,56c2.3,2.3,6.1,2.3,8.401,0l56-56
                    C125.979,34.417,123.279,28.017,117.979,28.017z"
            />
          </svg>
        )}
      </div>
      <div className="underline"></div>
      {isMobileSubMenu && item.menuItem && (
        <div className="mobile-nav-sub-menu">
          {!isGettingCategories ? (
            item.menuItem.map((category) => (
              <NavSubMenuItem key={category.id} item={category} />
            ))
          ) : (
            <div className="is-loading">
              <svg
                id="Capa_1"
                enable-background="new 0 0 497 497"
                height="40"
                viewBox="0 0 497 497"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <circle cx="98" cy="376" fill="#909ba6" r="53" />
                  <circle cx="439" cy="336" fill="#c8d2dc" r="46" />
                  <circle cx="397" cy="112" fill="#e9edf1" r="38" />
                  <ellipse
                    cx="56.245"
                    cy="244.754"
                    fill="#7e8b96"
                    rx="56.245"
                    ry="54.874"
                  />
                  <ellipse
                    cx="217.821"
                    cy="447.175"
                    fill="#a2abb8"
                    rx="51.132"
                    ry="49.825"
                  />
                  <ellipse
                    cx="349.229"
                    cy="427.873"
                    fill="#b9c3cd"
                    rx="48.575"
                    ry="47.297"
                  />
                  <ellipse
                    cx="117.092"
                    cy="114.794"
                    fill="#5f6c75"
                    rx="58.801"
                    ry="57.397"
                  />
                  <ellipse
                    cx="453.538"
                    cy="216.477"
                    fill="#dce6eb"
                    rx="43.462"
                    ry="42.656"
                  />
                  <circle cx="263" cy="62" fill="#4e5a61" r="62" />
                </g>
              </svg>
            </div>
          )}
        </div>
      )}
      {item.menuItem && (
        <div className="nav-sub-menu">
          {!isGettingCategories ? (
            item.menuItem.map((category) => (
              <NavSubMenuItem key={category.id} item={category} />
            ))
          ) : (
            <div className="is-loading">
              <svg
                id="Capa_1"
                enable-background="new 0 0 497 497"
                height="40"
                viewBox="0 0 497 497"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <circle cx="98" cy="376" fill="#909ba6" r="53" />
                  <circle cx="439" cy="336" fill="#c8d2dc" r="46" />
                  <circle cx="397" cy="112" fill="#e9edf1" r="38" />
                  <ellipse
                    cx="56.245"
                    cy="244.754"
                    fill="#7e8b96"
                    rx="56.245"
                    ry="54.874"
                  />
                  <ellipse
                    cx="217.821"
                    cy="447.175"
                    fill="#a2abb8"
                    rx="51.132"
                    ry="49.825"
                  />
                  <ellipse
                    cx="349.229"
                    cy="427.873"
                    fill="#b9c3cd"
                    rx="48.575"
                    ry="47.297"
                  />
                  <ellipse
                    cx="117.092"
                    cy="114.794"
                    fill="#5f6c75"
                    rx="58.801"
                    ry="57.397"
                  />
                  <ellipse
                    cx="453.538"
                    cy="216.477"
                    fill="#dce6eb"
                    rx="43.462"
                    ry="42.656"
                  />
                  <circle cx="263" cy="62" fill="#4e5a61" r="62" />
                </g>
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(NavigateItem);
