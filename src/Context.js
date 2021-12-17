import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = { user, setUser, posts, setPosts, isLoggedIn, setIsLoggedIn };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
