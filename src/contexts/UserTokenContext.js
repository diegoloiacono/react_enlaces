import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const UserTokenContext = createContext();

export const UserTokenContextProvider = ({ children }) => {
  const { data: token, setData: setToken } = useLocalStorage("token", "");

  return (
    <UserTokenContext.Provider value={{ token, setToken }}>
      {children}
    </UserTokenContext.Provider>
  );
};

export const useUserTokenContext = () => {
  return useContext(UserTokenContext);
};
