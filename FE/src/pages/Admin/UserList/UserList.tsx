import { useAppDispatch } from "@/store/store";
import { userAsyncAction } from "@/store/user/action";
import { isGettingUsersSelector, usersSelector } from "@/store/user/selector";
import { UserType } from "@/store/user/type";
import { Skeleton } from "antd";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import DeletePage from "../DeletePage";
import ChangeUserPage from "./ChangeUserPage";

type Props = {};

const UserList = (props: Props) => {
  const [page, setPage] = useState<number>(1);
  const [isChangePage, setIsChangePage] = useState<boolean>(false);
  const [isDeletePage, setIsDeletePage] = useState<boolean>(false);
  const [isMenuBar, setIsMenuBar] = useState<number | undefined>(undefined);
  const [selectedEntity, setSelectedEntity] = useState<UserType | undefined>(
    undefined
  );
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  const users = useSelector(usersSelector);
  const isGettingUsers = useSelector(isGettingUsersSelector);

  const dispatch = useAppDispatch();

  // const menuRef = useRef<HTMLDivElement>(null);

  const tablePagination = Array.from(
    { length: Math.ceil(users.length / 10) },
    (_, index) => index + 1
  );

  const skeletonArray = Array.from({ length: 10 }, (_, index) => index + 1);

  const handleDelete = (id: number) => {
    dispatch(userAsyncAction.deletes({ id }));
    setIsDeletePage(false);
    setSelectedId(undefined);
  };

  const handleDeleteCancel = () => {
    setIsDeletePage(false);
    setSelectedId(undefined);
  };

  const handleChangeCancel = () => {
    setIsChangePage(false);
    setSelectedEntity(undefined);
  };

  // const handleHiddenMenu = (event: MouseEvent) => {
  //   if (
  //     isMenuBar !== undefined &&
  //     !menuRef.current?.contains(event.target as Node)
  //   ) {
  //     console.log(menuRef.current?.contains(event.target as Node));
  //     setIsMenuBar(undefined);
  //   }
  // };

  useEffect(() => {
    dispatch(userAsyncAction.getAll());
  }, [dispatch, users]);

  // useLayoutEffect(() => {
  //   document.addEventListener("mousedown", handleHiddenMenu);

  //   return () => {
  //     document.removeEventListener("mousedown", handleHiddenMenu);
  //   };
  // });
  return (
    <>
      {isChangePage && selectedEntity ? (
        <ChangeUserPage
          handleCancel={handleChangeCancel}
          user={selectedEntity}
        />
      ) : (
        <ChangeUserPage handleCancel={handleChangeCancel} />
      )}
      {selectedId && isDeletePage && (
        <DeletePage
          id={selectedId}
          handleDelete={handleDelete}
          handleCancel={handleDeleteCancel}
        />
      )}
      <div>
        <button className="px-10 py-3 bg-gray-200 rounded-md mb-6 font-semibold">
          Add
        </button>
      </div>
      <div className="overflow-auto rounded-md border border-solid border-gray-300">
        <table className="h-full w-full min-w-max">
          <thead>
            <tr className="bg-gray-200">
              <th className="min-w-[12%] h-10">Id</th>
              <th className="min-w-[12%] h-10">FullName</th>
              <th className="min-w-[12%] h-10">Username</th>
              <th className="min-w-[12%] h-10">Email</th>
              <th className="min-w-[12%] h-10">Phone number</th>
              <th className="min-w-[12%] h-10">Address</th>
              <th className="min-w-[12%] h-10">Role</th>
              <th className="min-w-[12%] h-10">Options</th>
            </tr>
          </thead>
          <tbody>
            {!isGettingUsers ? (
              users.slice(10 * (page - 1), 10 * (page - 1) + 10).map((user) => (
                <tr key={user.id}>
                  <td className="text-center h-14">{user.id}</td>
                  <td className="text-center h-14">{user.fullName}</td>
                  <td className="text-center h-14">{user.username}</td>
                  <td className="text-center h-14">{user.email}</td>
                  <td className="text-center h-14">{user.phoneNum}</td>
                  <td className="text-center h-14">{user.address}</td>
                  <td className="text-center h-14">{user.role}</td>
                  <td className="text-center h-14">
                    <div
                      className="flex justify-center cursor-pointer relative"
                      onClick={() =>
                        isMenuBar === undefined
                          ? setIsMenuBar(user.id)
                          : setIsMenuBar(undefined)
                      }
                    >
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width={20}
                        height={20}
                        viewBox="0 0 426.667 426.667"
                      >
                        <circle cx="42.667" cy="213.333" r="42.667" />
                        <circle cx="213.333" cy="213.333" r="42.667" />
                        <circle cx="384" cy="213.333" r="42.667" />
                      </svg>
                      <div
                        // ref={menuRef}
                        className={`${
                          isMenuBar === user.id ? "block" : "hidden"
                        } absolute left-0 top-6 bg-white z-10 border border-solid border-gray-300`}
                      >
                        <div
                          className="px-6 py-3 flex justify-center items-center hover:bg-gray-300 border-solid border-b border-gray-300"
                          onClick={() => setIsChangePage(true)}
                        >
                          Update
                        </div>
                        <div
                          className="px-6 py-3 flex justify-center items-center hover:bg-gray-300"
                          onClick={() => {
                            setIsDeletePage(true);
                            setSelectedId(user.id);
                          }}
                        >
                          Delete
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <>
                {skeletonArray.map(() => (
                  <tr className="h-14">
                    <td>
                      <div className="flex items-center">
                        <Skeleton
                          active
                          paragraph={{ rows: 1 }}
                          title={false}
                        />
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <div className="flex items-center">
                        <Skeleton
                          active
                          paragraph={{ rows: 1 }}
                          title={false}
                        />
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <div className="flex items-center">
                        <Skeleton
                          active
                          paragraph={{ rows: 1 }}
                          title={false}
                        />
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <div className="flex items-center">
                        <Skeleton
                          active
                          paragraph={{ rows: 1 }}
                          title={false}
                        />
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <div className="flex items-center">
                        <Skeleton
                          active
                          paragraph={{ rows: 1 }}
                          title={false}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
        <div className="flex justify-center items-center border-t border-solid border-gray-300 py-3">
          {tablePagination.map((item) => (
            <div
              className="w-10 h-10 cursor-pointer mr-2 last:mr-0 flex items-center justify-center rounded-md bg-gray-300"
              onClick={() => setPage(item)}
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
