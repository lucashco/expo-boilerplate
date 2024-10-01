import {AuthCredentials} from '@/features';

export interface SessionService {
  session: AuthCredentials | null;
  isLoading: boolean;
  saveCredentials: (credentials: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
}
