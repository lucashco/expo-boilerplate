import {createContext, PropsWithChildren, useEffect, useState} from 'react';

import {AuthCredentials} from '@/features';

import {sessionStorage} from '../sessionStorage';
import {SessionService} from '../sessionTypes';

export const SessionContext = createContext<SessionService>({
  session: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function SessionProvider({children}: PropsWithChildren) {
  const [session, setSession] = useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // You can use this place to get user from database to check if user was already logged
  // Add more logic and so on.

  async function startAuthSession() {
    try {
      const authSession = await sessionStorage.get();

      if (authSession) {
        setSession(authSession);
      }
    } catch (error) {
      setSession(null);
      console.log('startAuthSession =>', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(credentials: AuthCredentials) {
    await sessionStorage.set(credentials);
    setSession(credentials);
  }

  async function removeCredentials() {
    await sessionStorage.remove();
    setSession(null);
  }

  useEffect(() => {
    startAuthSession();
  }, []);

  return (
    <SessionContext.Provider
      value={{session, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </SessionContext.Provider>
  );
}
