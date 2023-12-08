"use client";

import { createContext, useState } from "react";

//Using createContext to set theme 
export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== undefined){
        const value = localStorage.getItem("theme");
        return value || "light";
    }
};

export const ThemeContextProvider = ({children})=>{
    const [theme, setTheme] = useState(()=>{
        return getFromLocalStorage();
    });
    return <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>;
};