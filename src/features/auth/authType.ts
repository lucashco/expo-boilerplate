export interface AuthCredentialsAPI {
  token: string;
  refresh_token: string;
}

export interface AuthCredentials {
  token: string;
  refreshToken: string;
}

export interface SignInData {
  email: string;
  password: string;
}
