import {createContext, PropsWithChildren, useState} from 'react';

export const SessionContext = createContext({});

export function SessionProvider({children}: PropsWithChildren) {
  const [session, setSession] = useState<null | string>(null);

  function saveCredentials() {
    setSession('Save user');
  }

  return (
    <SessionContext.Provider value={{session, saveCredentials}}>
      {children}
    </SessionContext.Provider>
  );
}
