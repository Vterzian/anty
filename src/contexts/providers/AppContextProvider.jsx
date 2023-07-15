import React, { useState } from 'react';
import { AppContext } from '..';

const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;