import React from "react";
import { User, Subscription } from "../types/jsonTypes";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import "../styles/visualCharts.css";

interface VisualChartsProps {
  users: User[];
  subscriptions: Subscription[];
}

const VisualCharts: React.FC<VisualChartsProps> = ({
  users,
  subscriptions,
}) => {
  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.active === "1").length;
  const inactiveUsers = totalUsers - activeUsers;

  const userActivityData = [
    { name: "Active", value: activeUsers },
    { name: "Inactive", value: inactiveUsers },
  ];

  const colors = ["green", "orange"];

  return (
    <>
      <div className="summary">
        <div className="card">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>

        <div className="card">
          <h3>Active Users</h3>
          <p>{activeUsers}</p>
        </div>

        <div className="card">
          <h3>Subscription Users</h3>
          <p>{subscriptions.length}</p>
        </div>
      </div>

      <div className="chart-container">
        <h3>User Activity</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={userActivityData} dataKey="value" label>
              {userActivityData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Legend layout="vertical" align="right" verticalAlign="middle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default VisualCharts;
