import {api} from '@/src/api';

import {AuthCredentialsAPI, SignInData} from './authTypes';

async function signIn(payload: SignInData) {
  const response = await api.post<AuthCredentialsAPI>('/auth/sign-in', payload);
  return response.data;
}

export const authApi = {
  signIn,
};
