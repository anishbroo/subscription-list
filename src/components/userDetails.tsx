import React from "react";
import "../styles/userDetails.css";
import { User, Subscription } from "../types/jsonTypes";

interface UserDetailsProps {
  user: User;
  subscription?: Subscription;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user, subscription }) => {
  return (
    <>
      <div className="user-details">
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Active: {user.active === "0" ? "Inactive" : "Active"}</p>
        <p>Address: {user.address}</p>
        <p>Country: {user.country}</p>
        <p>Join Date: {user.join_date}</p>

        {subscription ? (
          <>
            <p>Package: {subscription.package}</p>
            <p>Expires On: {subscription.expires_on}</p>
          </>
        ) : (
          <>
            <p>No subscription found</p>
          </>
        )}
      </div>
    </>
  );
};

export default UserDetails;
