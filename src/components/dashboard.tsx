import React, { useEffect, useState } from "react";
import { Subscription, User } from "../types/jsonTypes";
import { fetchUsers, fetchSubscriptions } from "../services/dataServices";
import UserList from "./userList";
import VisualCharts from "./visualCharts";
import "../styles/dashboard.css";

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    async function loadData() {
      const users = await fetchUsers();
      const subscriptions = await fetchSubscriptions();

      setUsers(users);
      setSubscriptions(subscriptions);
    }
    loadData();
  }, []);

  return (
    <>
      <div className="dashboard">
        <h1 className="subscription-heading">Subscribers Dashboard</h1>
        <VisualCharts users={users} subscriptions={subscriptions} />
        <UserList users={users} subscriptions={subscriptions} />
      </div>
    </>
  );
};

export default Dashboard;
