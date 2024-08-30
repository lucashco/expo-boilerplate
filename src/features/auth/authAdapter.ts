import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

function toAuthData(authCredentialsAPI: AuthCredentialsAPI): AuthCredentials {
  return {
    token: authCredentialsAPI.token,
    refreshToken: authCredentialsAPI.refresh_token,
  };
}

export const authAdapter = {
  toAuthData,
};
