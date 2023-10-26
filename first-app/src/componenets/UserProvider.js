import React, { createContext, useState } from 'react';

const UserContext = createContext();

export default function UserProvider({ children }) {
   const [userName, setUserName] = useState('John Doe');

   return (
      <UserContext.Provider value={userName}>
         {children}
      </UserContext.Provider>
   );
}

