import React from "react";

function Profile() {
  let user = localStorage.getItem("User");
  user = JSON.parse(user);

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}

export default Profile;
