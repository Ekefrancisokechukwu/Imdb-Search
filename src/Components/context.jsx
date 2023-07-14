/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [query, setQuery] = useState("transformers");
  const { isLoading, data: movies, error } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider
      value={{ user, setUser, movies, isLoading, query, setQuery, error }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
