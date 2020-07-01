import React from "react";

function UserProfile(item) {
  return (
    <section>
 
      <h3>{item.name}</h3>
      <address>
        <ul>
          <li>
            <a href={item.email}>email</a>
          </li>
          <li>
            <a href={item.phone}>phone</a>
          </li>
          <li>username:{item.username}</li>
          <li>website: {item.website}"</li>
        </ul>
      </address>
    </section>
  );
}

export default UserProfile;
