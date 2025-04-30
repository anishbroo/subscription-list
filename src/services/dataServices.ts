import usersData from "../data/users.json";
import subscriptionData from "../data/subscriptions.json";
import { User, Subscription } from "../types/jsonTypes";

export async function fetchUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(usersData), 500);
  });
}

export async function fetchSubscriptions(): Promise<Subscription[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(subscriptionData), 500);
  });
}
