export interface User {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  active: string;
  address: string;
  country: string;
  join_date: string;
}

export interface Subscription {
  id: number;
  user_id: string;
  package: string;
  expires_on: string;
}
