export interface UserResponse {
  accessToken: string;
  user: {
    email: string;
    id: number;
    isAdmin: boolean;
  };
}
