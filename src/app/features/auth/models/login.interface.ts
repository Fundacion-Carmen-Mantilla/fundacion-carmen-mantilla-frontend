export interface ILoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse{
  access_token: string
  token_type: string
  expires_in: number
}
