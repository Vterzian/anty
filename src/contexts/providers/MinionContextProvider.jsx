import React, { useState } from 'react';
import { MinionContext } from '..';

const MinionContextProvider = ({ children }) => {
  return (
    <MinionContext.Provider>
      {children}
    </MinionContext.Provider>
  );
};

export default MinionContextProvider;