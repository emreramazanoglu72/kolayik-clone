import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [authentication, setAuthentication] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const authentication = localStorage.getItem("authentication");
    const userInfoStore = localStorage.getItem("userInfo");
    setAuthentication(JSON.parse(authentication));
    setUserInfo(JSON.parse(userInfoStore));
  };
  const logout = () => {
    setAuthentication(null);
    setUserInfo(null);
    localStorage.clear();
    router.push("/login");
  };

  const state = {
    authentication,
    setAuthentication,
    userInfo,
    setUserInfo,
    logout,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
