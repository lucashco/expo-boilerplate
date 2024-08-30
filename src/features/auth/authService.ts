import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {SignInData} from './authTypes';

async function signIn(payload: SignInData) {
  const response = await authApi.signIn(payload);
  const data = authAdapter.toAuthData(response);

  return data;
}

export const authService = {
  signIn,
};
