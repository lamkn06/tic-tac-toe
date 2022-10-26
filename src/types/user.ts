export interface User {
  login: string;

  avatar_url: string;
}

export interface UserDetail extends User {
  company: string;
  name: string;
  location: string;
}
