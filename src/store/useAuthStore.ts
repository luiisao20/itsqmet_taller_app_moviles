import { create } from "zustand";

import { User } from "../interfaces/User";

const usersList: User[] = [
  {
    id: 1,
    name: "Luis",
    lastName: "Bravo",
    email: "bravo.luis.1995@gmail.com",
    cellphone: "0978823632",
    password: "lucho123",
  },
];

interface AuthState {
  users: User[];

  registerUser: (user: User) => void;
  existsUser: (email: string) => boolean;
  loginUser: (email: string, password: string) => User | undefined;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  users: [...usersList],

  registerUser: (user: User) => {
    const newId: number = get().users.push.length + 1;
    const newUser: User = {
      ...user,
      id: newId,
    };

    set({ users: [...get().users, newUser] });
  },

  existsUser: (email: string) => {
    const exists = get().users.find((user) => user.email === email);

    if (exists) return true;

    return false;
  },

  loginUser: (email: string, password: string) => {
    const currentUser = get().users.find(
      (user) => user.email === email && user.password === password
    );

    return currentUser;
  },
}));
