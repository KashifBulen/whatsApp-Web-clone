// DrawerContext.js
import React, { createContext, useContext, useState } from 'react';

export const DrawerContext = createContext();


export const DrawerProvider = ({ children }) => {
  const [isProfileOpen, setProfileOpen] = useState(false);
// isProfileOpen, setProfileOpen
  const toggleDrawer = () => {
    isProfileOpen((prev) => !prev);
  };

  const value = {
    isProfileOpen,
    toggleDrawer,
  };

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
};
