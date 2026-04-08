export interface IUser {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserState {
  user: IUser | null;
  setUser: (user: IUser) => void;
  clear: () => void;
}
