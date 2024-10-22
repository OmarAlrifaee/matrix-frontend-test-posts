export type User = {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
  type: "admin" | "user";
};
export type AddUser = {
  email: string;
  user_type: "admin" | "user";
  password: string;
  password_confirmation: string;
  name: string;
};
