import Avatar from "@/assets/img/web/suggest-product.jpg";
import React, { useState } from "react";
import { getCurrentLoginUser } from "@/utils";
import { useHistory, useLocation } from "react-router-dom";
import AdminNav from "./AdminNav";
import UserList from "@/pages/Admin/UserList";
import ProductList from "@/pages/Admin/ProductList";
import CategoryList from "@/pages/Admin/CategoryList";
import BillList from "@/pages/Admin/BillList";
import { useAppDispatch } from "@/store/store";
import { userAsyncAction } from "@/store/user/action";
import { authAsyncAction } from "@/store/auth/action";

interface IPropsLayoutMain {
  children: React.ReactNode;
}

export const LayoutAdmin: React.FC<IPropsLayoutMain> = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  const location = useLocation();

  const tab = new URLSearchParams(location.search).get("tab");

  const history = useHistory();

  const loginUser = getCurrentLoginUser();

  return (
    <div className="w-full relative">
      <aside
        className={`${
          isOpenSidebar ? "min-w-[96px] md:min-w-[320px]" : "min-w-[96px]"
        } h-screen border-solid border-r absolute border-r-gray-300`}
      >
        <div
          className={`${
            isOpenSidebar ? "px-6" : "justify-center"
          } flex items-center border-solid border-b h-16 border-b-gray-300 relative`}
        >
          <span
            className={`md:block hidden absolute right-0 rounded-full bg-gray-300 p-2 translate-x-1/2`}
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          >
            {isOpenSidebar ? (
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={12}
                height={12}
                viewBox="0 0 492 492"
              >
                <path
                  d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
                />
              </svg>
            ) : (
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={12}
                height={12}
                viewBox="0 0 492 492"
              >
                <path
                  d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
                />
              </svg>
            )}
          </span>
          <svg
            className="cursor-pointer"
            onClick={() => history.push("/admin")}
            id="Capa_1"
            enable-background="new 0 0 512 512"
            height="48"
            viewBox="0 0 512 512"
            width="48"
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
          {isOpenSidebar && (
            <p
              className={`hidden md:block ml-5 text-2xl font-semibold text-gray-600`}
            >
              Shoe store
            </p>
          )}
        </div>
        <div>
          <AdminNav isOpenSidebar={isOpenSidebar} />
        </div>
      </aside>
      <div
        className={`${isOpenSidebar ? "ml-[96px] md:ml-[320px]" : "ml-[96px]"}`}
      >
        <header className="border-solid border-b px-5 h-16 border-b-gray-300 flex items-center justify-end">
          <div className="flex items-center">
            <p
              className="underline font-semibold mr-6 text-lg cursor-pointer text-gray-600"
              onClick={() => {
                localStorage.removeItem("login-user");
                history.push("/sign-in");
              }}
            >
              Logout
            </p>
            <img src={Avatar} alt="avatar" className="w-12 h-12 rounded-full" />
          </div>
        </header>
        {!tab && <div className="p-6">{children}</div>}
        {tab === "user" && (
          <div className="p-6">
            <UserList />
          </div>
        )}
        {tab === "shoe" && (
          <div className="p-6">
            <ProductList />
          </div>
        )}
        {tab === "category" && (
          <div className="p-6">
            <CategoryList />
          </div>
        )}
        {tab === "bill" && (
          <div className="p-6">
            <BillList />
          </div>
        )}
      </div>
    </div>
  );
};

export default LayoutAdmin;
