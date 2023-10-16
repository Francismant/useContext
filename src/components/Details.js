import React, { useContext } from "react";
import { userContext } from "../content/userContext";

function Details() {
    const user = useContext(userContext)
  return (
    <div>
      <h1>Details</h1>
      <p>{user.name} || {user.age}</p>
    </div>
  );
}

export default Details;
