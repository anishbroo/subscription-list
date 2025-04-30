import React, { useState } from "react";
import { Subscription, User } from "../types/jsonTypes";
import UserDetails from "./userDetails";
import "../styles/userList.css";

interface UserListProps {
  users: User[];
  subscriptions: Subscription[];
}

const UserList: React.FC<UserListProps> = ({ users, subscriptions }) => {
  const [search, setSearch] = useState("");
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSortChange = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const filteredUsers = users
    .filter((data) =>
      `${data.first_name} ${data.last_name}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const nameA = `${a.first_name} ${a.last_name}`.toLowerCase();
      const nameB = `${b.first_name} ${b.last_name}`.toLowerCase();
      return sortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

  return (
    <div className="user-list-container">
      <div className="user-sidebar">
        <div className="search-sort">
          <input
            type="text"
            placeholder="Search users"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSortChange} className="sort-button">
            Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
          </button>
        </div>

        <ul className="user-names">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <li
                key={user.id}
                className={`user-name-item ${
                  selectedUserId === user.id ? "active" : ""
                }`}
                onClick={() =>
                  setSelectedUserId(selectedUserId === user.id ? null : user.id)
                }
              >
                {user.first_name} {user.last_name}
              </li>
            ))
          ) : (
            <li className="user-not-found">User not found</li>
          )}
        </ul>
      </div>

      <div className="user-details-section">
        {selectedUserId && (
          <UserDetails
            user={users.find((u) => u.id === selectedUserId)!}
            subscription={subscriptions.find(
              (s) => Number(s.user_id) === selectedUserId
            )}
          />
        )}
      </div>
    </div>
  );
};

export default UserList;
