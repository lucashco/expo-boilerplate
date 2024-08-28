import {AuthCredentials, AuthCredentialsAPI} from './authType';

function toAuthData(authCredentialsAPI: AuthCredentialsAPI): AuthCredentials {
  return {
    token: authCredentialsAPI.token,
    refreshToken: authCredentialsAPI.refresh_token,
  };
}

export const authAdapter = {
  toAuthData,
};
