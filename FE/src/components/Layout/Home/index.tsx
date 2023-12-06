import AppStore from "@/assets/img/web/appstore.png";
import QRCode from "@/assets/img/web/bancode.png";
import GooglePlay from "@/assets/img/web/googleplay.png";
import ConnectFooter from "@/assets/img/web/web-carousel-1.jpg";
import ReplaceAvatar from "@/assets/img/web/replace-avatar.jpg";
import { categoryAsyncAction } from "@/store/category/action";
import {
  categoriesSelector,
  isGettingCategoriesSelector,
} from "@/store/category/selector";
import { useAppDispatch } from "@/store/store";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NavigateItem, { NavType } from "../NavigateItem/NavigateItem";
import "./style.scss";
import { useDebounce } from "@/hooks";
import { shoeAsyncAction } from "@/store/shoe/action";
import {
  isSearchShoesSelector,
  shoesSearchSelector,
} from "@/store/shoe/selector";
import SearchResultItem from "./SearchResultItem";
import { userSelector } from "@/store/user/selector";
import { logout } from "@/store/user/slice";

interface IPropsLayoutMain {
  children: React.ReactNode;
}

type HeaderMenuItemType = {
  id: number;
  onClick: () => void;
  title: string;
  icon: React.ReactElement;
};

export const LayoutMain: React.FC<IPropsLayoutMain> = ({ children }) => {
  const [isMenuDisplay, setIsMenuDisplay] = useState<boolean>(false);
  const [isMobileNav, setIsMobileNav] = useState<boolean>(false);
  const [searchContent, setSearchContent] = useState<string>("");
  const [isTextContain, setIsTextContain] = useState<boolean>(false);
  const [hidden, setHidden] = useState(false);

  const history = useHistory();

  const dispatch = useAppDispatch();

  const categories = useSelector(categoriesSelector);
  const shoes = useSelector(shoesSearchSelector);
  const isGettingCategories = useSelector(isGettingCategoriesSelector);
  const isSearchShoes = useSelector(isSearchShoesSelector);

  const loginUser = useSelector(userSelector);

  const userImageRef = useRef<HTMLImageElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const searchResult = useDebounce(searchContent, 1000);

  useEffect(() => {
    dispatch(categoryAsyncAction.getAll());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [dispatch]);

  const navMenu: NavType[] = [
    {
      id: 1,
      path: "/home",
      title: "Home",
    },
    {
      id: 2,
      title: "Category",
      menuItem: categories,
    },
    {
      id: 3,
      title: "About",
      path: "/about",
    },
    {
      id: 4,
      path: "/policy",
      title: "Policy",
    },
  ];

  const headerMenu: HeaderMenuItemType[] = [
    {
      id: 1,
      onClick: () => history.push("/user"),
      title: "View profile",
      icon: (
        <svg
          viewBox="-42 0 512 512.001"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m210.351562 246.632812c33.882813 0 63.21875-12.152343 87.195313-36.128906 23.96875-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.128906 87.195312 23.980469 23.96875 53.316406 36.125 87.191406 36.125zm-65.972656-189.292968c18.394532-18.394532 39.972656-27.335938 65.972656-27.335938 25.996094 0 47.578126 8.941406 65.976563 27.335938 18.394531 18.398437 27.339844 39.980468 27.339844 65.972656 0 26-8.945313 47.578125-27.339844 65.976562-18.398437 18.398438-39.980469 27.339844-65.976563 27.339844-25.992187 0-47.570312-8.945312-65.972656-27.339844-18.398437-18.394531-27.34375-39.976562-27.34375-65.976562 0-25.992188 8.945313-47.574219 27.34375-65.972656zm0 0" />
          <path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.3125-10.339844-7.808594-20.550781-13.375-30.335938-5.769532-10.15625-12.550782-19-20.160157-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.042969 5.339844-10.96875 0-22.085937-1.796876-33.042968-5.339844-11.210938-3.621094-20.300782-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.753906-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.609375 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.0625 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.777344-1.023438 19.953125-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.4375 23.730469 65.066406 23.730469h246.53125c26.621094 0 48.511719-7.984375 65.0625-23.730469 16.757813-15.945312 25.253906-37.589843 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm-44.90625 72.828125c-10.933594 10.40625-25.449218 15.464844-44.378906 15.464844h-246.527344c-18.933594 0-33.449218-5.058594-44.378906-15.460938-10.722656-10.207031-15.933594-24.140625-15.933594-42.585937 0-9.59375.316406-19.066407.949219-28.160157.617187-8.921874 1.878906-18.722656 3.75-29.136718 1.847656-10.285156 4.199219-19.9375 6.996094-28.675782 2.683593-8.378906 6.34375-16.675781 10.882812-24.667968 4.332031-7.617188 9.316407-14.152344 14.816407-19.417969 5.144531-4.925781 11.628906-8.957031 19.269531-11.980469 7.066406-2.796875 15.007812-4.328125 23.628906-4.558594 1.050781.558594 2.921875 1.625 5.953125 3.601563 6.167969 4.019531 13.277344 8.605469 21.136719 13.625 8.859375 5.648437 20.273437 10.75 33.910156 15.152344 13.941406 4.507812 28.160156 6.796875 42.273437 6.796875 14.113282 0 28.335938-2.289063 42.269532-6.792969 13.648437-4.410156 25.058594-9.507813 33.929687-15.164063 8.042969-5.140624 14.953125-9.59375 21.121094-13.617187 3.03125-1.972656 4.902344-3.042969 5.953125-3.601563 8.625.230469 16.566406 1.761719 23.636719 4.558594 7.636719 3.023438 14.121093 7.058594 19.265625 11.980469 5.5 5.261719 10.484375 11.796875 14.816406 19.421875 4.542969 7.988281 8.207031 16.289062 10.886719 24.660156 2.800781 8.75 5.15625 18.398438 7 28.675782 1.867187 10.433593 3.132812 20.238281 3.75 29.144531v.007812c.636719 9.058594.957031 18.527344.960937 28.148438-.003906 18.449219-5.214844 32.378906-15.9375 42.582031zm0 0" />
        </svg>
      ),
    },
    {
      id: 2,
      onClick: () => {
        localStorage.removeItem("jwt");
        history.push("/sign-in");
        dispatch(logout());
      },
      title: "Logout",
      icon: (
        <svg
          id="Layer_1"
          viewBox="0 0 512 512"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="m363.335 488a24 24 0 0 1 -24 24h-226.253a80.09 80.09 0 0 1 -80-80v-352a80.09 80.09 0 0 1 80-80h226.253a24 24 0 0 1 0 48h-226.253a32.035 32.035 0 0 0 -32 32v352a32.034 32.034 0 0 0 32 32h226.253a24 24 0 0 1 24 24zm108.553-248.97-114.051-114.052a24 24 0 1 0 -33.937 33.941l73.077 73.081h-188.936a24 24 0 1 0 0 48h188.935l-73.08 73.08a24 24 0 1 0 33.941 33.941l114.051-114.05a24 24 0 0 0 0-33.941z" />
        </svg>
      ),
    },
  ];

  const handleHiddenMenu = (event: MouseEvent) => {
    if (
      isMenuDisplay === true &&
      !userImageRef.current?.contains(event.target as Node) &&
      !menuRef.current?.contains(event.target as Node)
    ) {
      setIsMenuDisplay(false);
    }
  };

  const handleMobileNav = (event: MouseEvent) => {
    if (
      isMobileNav === true &&
      !mobileNavRef.current?.contains(event.target as Node)
    ) {
      setIsMobileNav(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (searchContent === "") {
      setIsTextContain(false);
    } else {
      setIsTextContain(true);
    }
  }, [searchContent]);

  useLayoutEffect(() => {
    document.addEventListener("mousedown", handleHiddenMenu);
    document.addEventListener("mousedown", handleMobileNav);

    return () => {
      document.removeEventListener("mousedown", handleHiddenMenu);
      document.removeEventListener("mousedown", handleMobileNav);
    };
  });

  useEffect(() => {
    if (searchResult !== "") {
      dispatch(shoeAsyncAction.searchShoes({ search: searchResult }));
    }
  }, [searchResult, dispatch]);

  return (
    <div id="project-wrapper">
      {isMobileNav && (
        <div id="mobile-nav-wrapper-outside">
          <div id="mobile-nav-wrapper-inside">
            <div id="mobile-nav-background"></div>
            <nav id="mobile-nav" ref={mobileNavRef}>
              <div>
                <span className="logo" onClick={() => history.push("/home")}>
                <svg
                  id="Capa_1"
                  enable-background="new 0 0 512 512"
                  height="80"
                  viewBox="0 0 512 512"
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <linearGradient
                    id="SVGID_1_"
                    gradientUnits="userSpaceOnUse"
                    x1="256"
                    x2="256"
                    y1="512"
                    y2="0"
                  >
                    <stop offset="0" stop-color="#ffbef9" />
                    <stop offset="1" stop-color="#fff1ff" />
                  </linearGradient>
                  <linearGradient
                    id="SVGID_2_"
                    gradientUnits="userSpaceOnUse"
                    x1="256"
                    x2="256"
                    y1="336"
                    y2="176"
                  >
                    <stop offset="0" stop-color="#ff81ff" />
                    <stop offset="1" stop-color="#a93aff" />
                  </linearGradient>
                  <circle cx="256" cy="256" fill="url(#SVGID_1_)" r="256" />
                  <path
                    d="m359.379 241.48-9.741-1.389c-15.518-2.217-30.692-6.291-45.323-11.789l-28.807 34.592c-3.133 3.753-8.718 4.286-12.517 1.137-3.765-3.142-4.276-8.75-1.136-12.526l25.357-30.448c-5.47-2.602-10.832-5.413-16.068-8.459l-26.082 31.321c-3.133 3.753-8.718 4.286-12.517 1.137-3.764-3.142-4.276-8.75-1.136-12.526l24.616-29.561c-10.421-7.262-20.271-15.352-29.274-24.361-2.533-2.552-6.358-3.307-9.68-1.927-3.322 1.372-5.482 4.618-5.482 8.212 0 14.705-11.953 26.666-26.647 26.666h-28.174c-13.627 0-26.968-5.529-36.605-15.173-2.542-2.535-6.35-3.316-9.681-1.927-3.322 1.372-5.482 4.618-5.482 8.212v79.998h300.03c-5.521-21.197-23.205-37.974-45.651-41.189zm-254.379 58.965v8.889c0 14.704 11.953 26.666 26.647 26.666h266.471c4.91 0 8.882-3.976 8.882-8.889v-26.666z"
                    fill="url(#SVGID_2_)"
                  />
                </svg>
              </span>
              </div>
              {loginUser ? (
                <NavigateItem
                  item={{ id: 5, title: "Profile", path: "/user" }}
                />
              ) : (
                <NavigateItem
                  item={{ id: 5, title: "Sign in", path: "/sign-in" }}
                />
              )}
              <NavigateItem
                item={{ id: 6, title: "Cart", path: "/user?page=carts" }}
              />
              {navMenu.map((item) => (
                <NavigateItem key={item.id} item={item} />
              ))}
            </nav>
          </div>
        </div>
      )}
      <header className={`${hidden ? "header-hidden" : "header-display"}`}>
        <span className="logo" onClick={() => history.push("/home")}>
          <svg
            id="Capa_1"
            enable-background="new 0 0 512 512"
            height="80"
            viewBox="0 0 512 512"
            width="80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient
              id="SVGID_1_"
              gradientUnits="userSpaceOnUse"
              x1="256"
              x2="256"
              y1="512"
              y2="0"
            >
              <stop offset="0" stop-color="#ffbef9" />
              <stop offset="1" stop-color="#fff1ff" />
            </linearGradient>
            <linearGradient
              id="SVGID_2_"
              gradientUnits="userSpaceOnUse"
              x1="256"
              x2="256"
              y1="336"
              y2="176"
            >
              <stop offset="0" stop-color="#ff81ff" />
              <stop offset="1" stop-color="#a93aff" />
            </linearGradient>
            <circle cx="256" cy="256" fill="url(#SVGID_1_)" r="256" />
            <path
              d="m359.379 241.48-9.741-1.389c-15.518-2.217-30.692-6.291-45.323-11.789l-28.807 34.592c-3.133 3.753-8.718 4.286-12.517 1.137-3.765-3.142-4.276-8.75-1.136-12.526l25.357-30.448c-5.47-2.602-10.832-5.413-16.068-8.459l-26.082 31.321c-3.133 3.753-8.718 4.286-12.517 1.137-3.764-3.142-4.276-8.75-1.136-12.526l24.616-29.561c-10.421-7.262-20.271-15.352-29.274-24.361-2.533-2.552-6.358-3.307-9.68-1.927-3.322 1.372-5.482 4.618-5.482 8.212 0 14.705-11.953 26.666-26.647 26.666h-28.174c-13.627 0-26.968-5.529-36.605-15.173-2.542-2.535-6.35-3.316-9.681-1.927-3.322 1.372-5.482 4.618-5.482 8.212v79.998h300.03c-5.521-21.197-23.205-37.974-45.651-41.189zm-254.379 58.965v8.889c0 14.704 11.953 26.666 26.647 26.666h266.471c4.91 0 8.882-3.976 8.882-8.889v-26.666z"
              fill="url(#SVGID_2_)"
            />
          </svg>
        </span>
        <span id="mobile-menu" onClick={() => setIsMobileNav(true)}>
          <svg
            id="Layer_1"
            enable-background="new 0 0 512 512"
            height="40"
            viewBox="0 0 512 512"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m464.883 64.267h-289.233c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h289.232c25.98 0 47.117-21.137 47.117-47.117.001-26.013-21.136-47.149-47.116-47.149z" />
            <path d="m47.134 64.267c-25.989 0-47.134 21.144-47.134 47.133s21.145 47.133 47.134 47.133 47.133-21.144 47.133-47.133-21.144-47.133-47.133-47.133z" />
            <path d="m47.134 208.867c-25.989 0-47.134 21.144-47.134 47.133s21.145 47.133 47.134 47.133 47.133-21.144 47.133-47.133-21.144-47.133-47.133-47.133z" />
            <path d="m47.134 353.467c-25.989 0-47.134 21.144-47.134 47.133s21.145 47.133 47.134 47.133 47.133-21.144 47.133-47.133-21.144-47.133-47.133-47.133z" />
            <path d="m464.883 208.867h-289.233c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h289.232c25.98 0 47.117-21.137 47.117-47.117.001-26.013-21.136-47.149-47.116-47.149z" />
            <path d="m464.883 353.467h-289.233c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h289.232c25.98 0 47.117-21.137 47.117-47.117.001-26.012-21.136-47.149-47.116-47.149z" />
          </svg>
        </span>
        <nav id="pc-nav">
          {navMenu.map((item) => (
            <NavigateItem key={item.id} item={item} />
          ))}
        </nav>
        <div id="header-right">
          <div id="search-bar">
            <input
              id="search-input"
              type="text"
              value={searchContent}
              onChange={(e) => setSearchContent(e.target.value.trim())}
            />
            {!isSearchShoes &&
              searchContent !== "" &&
              shoes.length !== undefined && (
                <div id="search-result">
                  {shoes
                    .filter((shoe) =>
                      shoe.name
                        .toUpperCase()
                        .includes(searchContent.toUpperCase())
                    )
                    .slice(0, 5)
                    .map((shoe) => (
                      <SearchResultItem key={shoe.id} item={shoe} />
                    ))}
                </div>
              )}
            {isSearchShoes && searchContent !== "" && (
              <svg
                id="Capa_1"
                enable-background="new 0 0 497 497"
                height="20"
                viewBox="0 0 497 497"
                width="20"
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
            )}
            {isTextContain && !isSearchShoes && (
              <svg
                height="20"
                viewBox="0 0 32 32"
                onClick={() => setSearchContent("")}
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_22" data-name="Layer 22">
                  <path d="m25.9 6.1a14 14 0 1 0 0 19.8 14 14 0 0 0 0-19.8zm-4.9 13.44a1 1 0 0 1 0 1.46 1 1 0 0 1 -.71.29 1 1 0 0 1 -.7-.29l-3.59-3.59-3.54 3.59a1 1 0 0 1 -.7.29 1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l3.54-3.59-3.54-3.54a1 1 0 0 1 1.41-1.41l3.54 3.54 3.54-3.54a1 1 0 0 1 1.46 1.41l-3.59 3.54z" />
                </g>
              </svg>
            )}
          </div>
          <span
            id="shopping-bag"
            onClick={() => history.push("/user?page=carts")}
          >
            <svg
              height="32"
              viewBox="0 0 512 512"
              fill="white"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Layer_1" data-name="Layer 1">
                <path d="m437.127 492.035a21.82 21.82 0 0 1 -16.076 6.965h-330.102a22.035 22.035 0 0 1 -21.989-23.459l1.757-27.141h370.566l1.757 27.141a21.821 21.821 0 0 1 -5.913 16.494zm-15.685-350.15a22.084 22.084 0 0 0 -21.989-20.612h-38.167v18.9a22.787 22.787 0 1 1 -30 0v-18.9h-150.286v18.9a22.787 22.787 0 1 1 -30 0v-18.9h-38.453a22.084 22.084 0 0 0 -21.989 20.613l-19.194 296.514h369.272zm-255.585 28.508a13.036 13.036 0 0 0 5.143-25.014v-36.093c0-59.286 44.136-86.286 85.144-86.286s85.142 27 85.142 86.286v35.876a13.034 13.034 0 1 0 10 .355v-36.231c0-29.658-10.313-54.618-29.825-72.181-17.268-15.544-40.461-24.105-65.317-24.105s-48.05 8.561-65.318 24.1c-19.512 17.568-29.826 42.528-29.826 72.186v35.98a13.032 13.032 0 0 0 4.856 25.127z" />
              </g>
            </svg>
          </span>
          {loginUser !== undefined ? (
            <div id="header-user">
              <img
                id="header-user-image"
                src={loginUser?.avatar || ReplaceAvatar}
                alt=""
                ref={userImageRef}
                onClick={() => setIsMenuDisplay(!isMenuDisplay)}
              />
              {isMenuDisplay && (
                <div id="header-user-menu" ref={menuRef}>
                  {headerMenu.map((item) => (
                    <div
                      key={item.id}
                      className="menu-item"
                      onClick={item.onClick}
                    >
                      {item.icon}
                      <p className="title">{item.title}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div id="header-user-sign" onClick={() => history.push("/sign-in")}>
              Sign in
            </div>
          )}
        </div>
      </header>
      <main>{children}</main>
      <img id="connect-footer" src={ConnectFooter} alt="connect-footer" />
      <footer>
        <div id="footer-overall">
          <div className="footer-overall-item">
            <h2>Category</h2>
            {!isGettingCategories ? (
              navMenu[1].menuItem?.map((category) => (
                <p
                  key={category.id}
                  onClick={() => {
                    history.push(`/search?s=?&category=${category.code}`);
                  }}
                >
                  {category.name}
                </p>
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
          <div className="footer-overall-item">
            <h2>Address</h2>
            <p>
              Van Phu - Phu La <br /> Ha Dong dist - Ha Noi
            </p>
          </div>
          <div className="footer-overall-item">
            <h2>Support</h2>
            <p onClick={() => history.push("/about")}>About</p>
            <p>Feedback and help</p>
          </div>
          <div className="footer-overall-item">
            <h2>Download App</h2>
            <div id="app-group">
              <img
                src={QRCode}
                alt="QR code"
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
              <div>
                <div className="app">
                  <a href="https://www.apple.com/vn/">
                    <img src={AppStore} alt="app store" />
                  </a>
                </div>
                <div className="app">
                  <a href="https://play.google.com/store/games?hl=en">
                    <img src={GooglePlay} alt="google play" />
                  </a>
                </div>
              </div>
            </div>
            <div id="social-group">
              <h2>Social page</h2>

              <div id="social-wrapper">
                <div className="social-link">
                  <a href="https://www.facebook.com/">
                    <svg
                      height="40"
                      viewBox="0 0 64 64"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill-rule="evenodd">
                        <path
                          d="m32 64h-16a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16h-6a5 5 0 0 0 -10 0z"
                          fill="#3764b9"
                        />
                        <path
                          d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30"
                          fill="#507dd2"
                        />
                        <path
                          d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16"
                          fill="#1e4ba0"
                        />
                        <path
                          d="m52 18a2 2 0 0 1 -2 2h-6a2 2 0 0 0 -2 2v8h7.56a2 2 0 0 1 1.9612 2.392c-.3713 1.857-.8757 4.379-1.2 6a2 2 0 0 1 -1.9612 1.608h-6.36v24h-10v-24h-6a2 2 0 0 1 -2-2v-6a2 2 0 0 1 2-2h6v-8a12 12 0 0 1 12-12h6a2 2 0 0 1 2 2z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="social-link">
                  <a href="https://www.instagram.com/">
                    <svg
                      height="40"
                      viewBox="0 0 512 512.00038"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <radialGradient
                        id="a"
                        cx="104.9571229418"
                        cy="447.4474330468"
                        gradientUnits="userSpaceOnUse"
                        r="564.64588968"
                      >
                        <stop offset="0" stop-color="#fae100" />
                        <stop offset=".0544" stop-color="#fadc04" />
                        <stop offset=".1167" stop-color="#fbce0e" />
                        <stop offset=".1829" stop-color="#fcb720" />
                        <stop offset=".2514" stop-color="#fe9838" />
                        <stop offset=".3054" stop-color="#ff7950" />
                        <stop offset=".4922" stop-color="#ff1c74" />
                        <stop offset="1" stop-color="#6c1cd1" />
                      </radialGradient>
                      <linearGradient
                        id="b"
                        gradientUnits="userSpaceOnUse"
                        x1="196.3726539866"
                        x2="-671.0159540134"
                        y1="222.4596783332"
                        y2="-265.4464136668"
                      >
                        <stop
                          offset="0"
                          stop-color="#a1b5d8"
                          stop-opacity="0"
                        />
                        <stop
                          offset=".3094"
                          stop-color="#90a2bd"
                          stop-opacity=".309804"
                        />
                        <stop
                          offset=".7554"
                          stop-color="#7c8b9c"
                          stop-opacity=".756863"
                        />
                        <stop offset="1" stop-color="#748290" />
                      </linearGradient>
                      <linearGradient
                        id="c"
                        gradientUnits="userSpaceOnUse"
                        x1="256.0003"
                        x2="256.0003"
                        y1="451.9660859688"
                        y2="531.773969673"
                      >
                        <stop
                          offset="0"
                          stop-color="#fae100"
                          stop-opacity="0"
                        />
                        <stop
                          offset=".3068"
                          stop-color="#fca800"
                          stop-opacity=".305882"
                        />
                        <stop
                          offset=".6275"
                          stop-color="#fe7300"
                          stop-opacity=".627451"
                        />
                        <stop
                          offset=".8685"
                          stop-color="#ff5200"
                          stop-opacity=".866667"
                        />
                        <stop offset="1" stop-color="#ff4500" />
                      </linearGradient>
                      <linearGradient id="d">
                        <stop
                          offset="0"
                          stop-color="#833ab4"
                          stop-opacity="0"
                        />
                        <stop offset="1" stop-color="#833ab4" />
                      </linearGradient>
                      <linearGradient
                        id="e"
                        gradientUnits="userSpaceOnUse"
                        x1="226.8724066998"
                        x2="100.1606848024"
                        y1="226.147987369"
                        y2="99.4361650794"
                      />
                      <linearGradient
                        id="f"
                        gradientUnits="userSpaceOnUse"
                        x1="350.899540777"
                        x2="287.6555669352"
                        y1="468.287448276"
                        y2="170.1375727138"
                      />
                      <linearGradient
                        id="g"
                        gradientUnits="userSpaceOnUse"
                        x1="374.965057"
                        x2="120.9410670648"
                        y1="374.9649673922"
                        y2="120.9408770648"
                      />
                      <linearGradient
                        id="h"
                        gradientUnits="userSpaceOnUse"
                        x1="393.806665096"
                        x2="309.8058007666"
                        y1="221.2631037014"
                        y2="137.2623397642"
                      />
                      <linearGradient
                        id="i"
                        gradientUnits="userSpaceOnUse"
                        x1="357.6582448576"
                        x2="150.5426107646"
                        y1="155.0495285836"
                        y2="362.1651626766"
                      >
                        <stop offset="0" stop-color="#833ab4" />
                        <stop offset=".0922" stop-color="#9c3495" />
                        <stop offset=".2927" stop-color="#dc2546" />
                        <stop offset=".392" stop-color="#fd1d1d" />
                        <stop offset=".5589" stop-color="#fc6831" />
                        <stop offset=".6887" stop-color="#fc9b40" />
                        <stop offset=".7521" stop-color="#fcaf45" />
                        <stop offset=".7806" stop-color="#fdb750" />
                        <stop offset=".8656" stop-color="#fecb6a" />
                        <stop offset=".9415" stop-color="#ffd87a" />
                        <stop offset="1" stop-color="#ffdc80" />
                      </linearGradient>
                      <path
                        d="m503.234375 91.578125c-4.660156-43.664063-39.144531-78.15625-82.8125-82.8125-109.507813-11.6875-219.335937-11.6875-328.839844 0-43.667969 4.660156-78.15625 39.148437-82.816406 82.8125-11.6875 109.503906-11.6875 219.335937 0 328.839844 4.660156 43.667969 39.148437 78.15625 82.8125 82.816406 109.503906 11.6875 219.335937 11.6875 328.84375 0 43.667969-4.660156 78.152344-39.148437 82.8125-82.816406 11.6875-109.503907 11.6875-219.332031 0-328.839844zm0 0"
                        fill="url(#a)"
                      />
                      <path
                        d="m475.386719 110.097656c-4.132813-38.746094-34.734375-69.351562-73.484375-73.488281-97.171875-10.367187-194.632813-10.367187-291.804688 0-38.746094 4.136719-69.351562 34.742187-73.488281 73.488281-10.367187 97.171875-10.367187 194.632813 0 291.800782 4.136719 38.75 34.742187 69.355468 73.488281 73.488281 97.171875 10.371093 194.632813 10.371093 291.800782 0 38.75-4.132813 69.355468-34.738281 73.488281-73.488281 10.371093-97.167969 10.371093-194.628907 0-291.800782zm0 0"
                        fill="url(#b)"
                      />
                      <path
                        d="m7.671875 409.804688c.351563 3.539062.714844 7.078124 1.09375 10.617187 4.660156 43.664063 39.148437 78.152344 82.816406 82.8125 109.503907 11.6875 219.335938 11.6875 328.839844 0 43.667969-4.660156 78.152344-39.148437 82.8125-82.8125.378906-3.539063.742187-7.078125 1.097656-10.617187zm0 0"
                        fill="url(#c)"
                      />
                      <path
                        d="m503.234375 420.417969c6.28125-58.839844 9.179687-117.773438 8.710937-176.699219l-117.03125-117.03125c-14.621093-16.691406-35.976562-27.109375-61.070312-28.011719-51.605469-1.859375-103.375-1.765625-154.988281.007813-42.867188 1.476562-72.84375 30.289062-80.53125 72.636718-1.355469 7.476563-2.167969 15.050782-3.234375 22.582032v124.148437c.589844 4.023438 1.457031 8.027344 1.726562 12.074219 1.71875 25.757812 12.304688 47.820312 29.253906 62.746094l119.09375 119.089844c58.445313.410156 116.894532-2.496094 175.257813-8.726563 43.667969-4.660156 78.152344-39.148437 82.8125-82.816406zm0 0"
                        fill="url(#e)"
                      />
                      <path
                        d="m503.234375 420.421875c-4.65625 43.660156-39.152344 78.15625-82.8125 82.8125-58.355469 6.226563-116.816406 9.136719-175.253906 8.726563l-118.914063-118.914063c13.785156 12.066406 31.753906 19.414063 52.605469 20.199219 51.601563 1.9375 103.382813 1.886718 154.984375.027344 46.671875-1.6875 80.445312-36.230469 81.902344-82.902344 1.554687-49.554688 1.554687-99.238282 0-148.792969-.664063-21.53125-8.222656-40.476563-20.753906-54.8125l116.957031 116.957031c.460937 58.917969-2.4375 117.859375-8.714844 176.699219zm0 0"
                        fill="url(#f)"
                      />
                      <path
                        d="m316.414062 200.558594c-14.992187-16.324219-36.503906-26.566406-60.414062-26.566406-45.289062 0-82.007812 36.71875-82.007812 82.007812 0 23.910156 10.242187 45.421875 26.566406 60.414062l189.738281 189.738282c10.042969-.875 20.085937-1.847656 30.121094-2.917969 43.667969-4.660156 78.15625-39.148437 82.816406-82.816406 1.070313-10.035157 2.042969-20.078125 2.917969-30.121094zm0 0"
                        fill="url(#g)"
                      />
                      <path
                        d="m511.007812 311.152344-152.703124-152.699219c-3.5625-4.675781-9.175782-7.710937-15.507813-7.710937-10.773437 0-19.511719 8.734374-19.511719 19.511718 0 6.332032 3.035156 11.945313 7.710938 15.507813l177.28125 177.285156c1.203125-17.292969 2.113281-34.59375 2.730468-51.894531zm0 0"
                        fill="url(#h)"
                      />
                      <path
                        d="m95.089844 193.902344c1.066406-7.53125 1.878906-15.105469 3.234375-22.582032 7.683593-42.347656 37.664062-71.160156 80.53125-72.636718 51.613281-1.773438 103.382812-1.867188 154.988281-.007813 46.65625 1.679688 80.445312 36.226563 81.902344 82.898438 1.550781 49.558593 1.550781 99.238281 0 148.796875-1.457032 46.671875-35.234375 81.214844-81.898438 82.898437-51.605468 1.863281-103.386718 1.910157-154.988281-.027343-46.664063-1.753907-78.921875-36.378907-82.042969-83.121094-.269531-4.042969-1.136718-8.050782-1.726562-12.074219 0-41.382813 0-82.765625 0-124.144531zm160.953125 191.707031c23.617187 0 47.257812.707031 70.84375-.164063 36.980469-1.371093 59.726562-23.441406 60.589843-60.386718 1.070313-46.035156 1.070313-92.132813 0-138.171875-.863281-36.9375-23.625-59.523438-60.589843-60.308594-46.917969-.992187-93.886719-.984375-140.804688 0-36.683593.769531-59.496093 22.898437-60.492187 59.429687-1.265625 46.617188-1.265625 93.316407 0 139.933594.996094 36.527344 23.808594 58.144532 60.496094 59.503906 23.289062.867188 46.636718.164063 69.957031.164063zm0 0"
                        fill="url(#i)"
                      />
                      <g fill="#fff">
                        <path d="m95.089844 193.902344c1.066406-7.53125 1.878906-15.105469 3.234375-22.582032 7.683593-42.347656 37.664062-71.160156 80.53125-72.636718 51.613281-1.773438 103.382812-1.867188 154.988281-.007813 46.65625 1.679688 80.445312 36.226563 81.902344 82.898438 1.550781 49.558593 1.550781 99.238281 0 148.796875-1.457032 46.671875-35.234375 81.214844-81.898438 82.898437-51.605468 1.863281-103.386718 1.910157-154.988281-.027343-46.664063-1.753907-78.921875-36.378907-82.042969-83.121094-.269531-4.042969-1.136718-8.050782-1.726562-12.074219 0-41.382813 0-82.765625 0-124.144531zm160.953125 191.707031c23.617187 0 47.257812.707031 70.84375-.164063 36.980469-1.371093 59.726562-23.441406 60.589843-60.386718 1.070313-46.035156 1.070313-92.132813 0-138.171875-.863281-36.9375-23.625-59.523438-60.589843-60.308594-46.917969-.992187-93.886719-.984375-140.804688 0-36.683593.769531-59.496093 22.898437-60.492187 59.429687-1.265625 46.617188-1.265625 93.316407 0 139.933594.996094 36.527344 23.808594 58.144532 60.496094 59.503906 23.289062.867188 46.636718.164063 69.957031.164063zm0 0" />
                        <path d="m256 173.996094c-45.289062 0-82.007812 36.714844-82.007812 82.003906 0 45.292969 36.71875 82.007812 82.007812 82.007812 45.292969 0 82.007812-36.714843 82.007812-82.007812 0-45.289062-36.714843-82.003906-82.007812-82.003906zm0 135.777344c-29.699219 0-53.773438-24.074219-53.773438-53.773438s24.074219-53.773438 53.773438-53.773438 53.773438 24.074219 53.773438 53.773438-24.074219 53.773438-53.773438 53.773438zm0 0" />
                        <path d="m362.304688 170.253906c0 10.773438-8.734376 19.507813-19.507813 19.507813s-19.511719-8.734375-19.511719-19.507813c0-10.777344 8.738282-19.511718 19.511719-19.511718s19.507813 8.734374 19.507813 19.511718zm0 0" />
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="social-link">
                  <a href="https://twitter.com/?lang=en">
                    <svg
                      height="40"
                      viewBox="0 0 152 152"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Color_Icon" data-name="Color Icon">
                          <g id="_04.Twitter" data-name="04.Twitter">
                            <rect
                              id="Background"
                              fill="#03a9f4"
                              height="152"
                              rx="12"
                              width="152"
                            />
                            <path
                              id="Icon"
                              d="m125.23 45.47a42 42 0 0 1 -11.63 3.19 20.06 20.06 0 0 0 8.88-11.16 40.32 40.32 0 0 1 -12.8 4.89 20.18 20.18 0 0 0 -34.92 13.8 20.87 20.87 0 0 0 .47 4.6 57.16 57.16 0 0 1 -41.61-21.11 20.2 20.2 0 0 0 6.21 27 19.92 19.92 0 0 1 -9.12-2.49v.22a20.28 20.28 0 0 0 16.17 19.82 20.13 20.13 0 0 1 -5.29.66 18 18 0 0 1 -3.83-.34 20.39 20.39 0 0 0 18.87 14.06 40.59 40.59 0 0 1 -25 8.61 36.45 36.45 0 0 1 -4.83-.28 56.79 56.79 0 0 0 31 9.06c37.15 0 57.46-30.77 57.46-57.44 0-.89 0-1.75-.07-2.61a40.16 40.16 0 0 0 10.04-10.48z"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="social-link">
                  <a href="https://www.youtube.com/">
                    <svg
                      height="40"
                      viewBox="0 0 176 176"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="_02.youtube" data-name="02.youtube">
                          <path
                            id="background"
                            d="m144.52 173a532.59 532.59 0 0 1 -113 0 32.07 32.07 0 0 1 -28.52-28.48 532.59 532.59 0 0 1 0-113 32.07 32.07 0 0 1 28.48-28.52 532.59 532.59 0 0 1 113 0 32.07 32.07 0 0 1 28.52 28.48 532.59 532.59 0 0 1 0 113 32.07 32.07 0 0 1 -28.48 28.52z"
                            fill="#e60000"
                          />
                          <path
                            id="icon"
                            d="m140.43 61.54c-2.2-6.77-9.48-10.87-16.18-11.81a343.16 343.16 0 0 0 -72.5 0c-6.7.94-14 5-16.18 11.81a137.42 137.42 0 0 0 0 52.93c2.2 6.76 9.48 10.87 16.18 11.81a343.16 343.16 0 0 0 72.5 0c6.7-.94 14-5 16.18-11.81a137.42 137.42 0 0 0 0-52.93zm-65.59 47.54v-42.16l34.32 21.08c-11.57 7.11-22.8 14-34.32 21.08z"
                            fill="#fff"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div id="footer-end">
          <p>@2023 Shoe store</p>
        </div>
      </footer>
    </div>
  );
};
