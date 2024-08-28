import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {SignInData} from './authType';

async function signIn(payload: SignInData) {
  const response = await authApi.signIn(payload);
  const data = authAdapter.toAuthData(response);

  return data;
}

export const authService = {
  signIn,
};
