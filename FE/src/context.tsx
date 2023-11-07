import React, { useEffect, useState, ReactNode } from "react";

import { io, Socket } from "socket.io-client";

// import { refreshToken } from "src/configs/http-client";
import { SOCKET_ACTION } from "@/constants";
import { localStorageHelper } from "@/utils";

interface IAppContext extends IAdminHomeProps {
  socketID: any;
  socket: any;
}
interface IAdminHomeProps {
  children: ReactNode;
}
export const AppContext = React.createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAdminHomeProps> = (props) => {
  const [socket, setSocket] = useState<any>(null);
  const [socketID, setSocketID] = useState<any>(null);

  useEffect(() => {
    const newSocket: Socket = io(process.env.REACT_APP_SOCKET_URL!, {
      extraHeaders: {
        Authentication: localStorageHelper.getItem(
          process.env.REACT_APP_ACCESS_TOKEN_KEY!
        ),
      },
    });
    setSocket(newSocket);
    newSocket.on(SOCKET_ACTION.CONNECT, () => setSocketID(newSocket.id));

    newSocket.on(SOCKET_ACTION.DISCONNECT, async (reason) => {
      if (reason === "io server disconnect") {
        // the disconnection was initiated by the server, you need to reconnect manually
        // await refreshToken();
        setTimeout(() => {
          newSocket.connect();
        }, 5000);
      }
    });

    newSocket.on(SOCKET_ACTION.CONNECT_ERROR, async (e) => {
      //   await refreshToken();
      setTimeout(() => {
        newSocket.connect();
      }, 3000);
    });

    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <AppContext.Provider value={{ socketID, socket, ...props }}>
      {props.children}
    </AppContext.Provider>
  );
};
