import {useContext} from 'react';

import {SessionContext} from './Providers/SessionProvider';

export function useSession() {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error('useSession must be used with SessionProvider');
  }

  return context;
}
