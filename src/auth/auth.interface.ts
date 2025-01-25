export interface User {
  id: number;
  email: string;
  password: string;
}

export interface Session {
  id: number;
  token: string;
  expiresAt: Date;
  user: User;
}
