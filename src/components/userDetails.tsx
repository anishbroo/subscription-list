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
        <h2 className="user-heading">
          {user.first_name} {user.last_name}
        </h2>
        <p className="user-paragraph ">
          <b>Username:</b> {user.username}
        </p>
        <p className="user-paragraph ">
          <b>Email:</b> {user.email}
        </p>
        <p className="user-paragraph ">
          <b>Active:</b> {user.active === "0" ? "Inactive" : "Active"}
        </p>
        <p className="user-paragraph ">
          <b>Address:</b> {user.address}
        </p>
        <p className="user-paragraph ">
          <b>Country:</b> {user.country}
        </p>
        <p className="user-paragraph ">
          <b>Join Date:</b> {user.join_date}
        </p>

        {subscription ? (
          <>
            <p className="user-paragraph ">
              <b>Package:</b> {subscription.package}
            </p>
            <p className="user-paragraph ">
              <b>Expires on:</b> {subscription.expires_on}
            </p>
          </>
        ) : (
          <>
            <p className="user-paragraph ">No subscription found</p>
          </>
        )}
      </div>
    </>
  );
};

export default UserDetails;
