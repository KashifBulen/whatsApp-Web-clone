// DrawerContext.js
import React, { createContext, useContext, useState } from 'react';

export const DrawerContext = createContext();


export const DrawerProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const value = {
    isDrawerOpen,
    toggleDrawer,
  };

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
};
