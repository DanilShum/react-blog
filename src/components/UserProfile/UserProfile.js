import React from "react";
import "./userProfile.css";
import { Link } from "react-router-dom";

function UserProfile(item) {
  const bgStyle = item.name.split(" ").map((name) => name[0].toUpperCase());
  return (
    <section className="users__item">
      <Link to={`user/${item.id}`} className="users__item-name">
        {item.name}
      </Link>
      <div> • </div>
      <ul className="users__item-info">
        <li className="users__item-username">{item.username}</li>
        <li>
          <a href={item.email}>{item.email}</a>
        </li>
        <li>
          <a href={item.phone}> {item.phone}</a>
        </li>

        <li>
          <a href={item.website}>{item.website}</a>
        </li>
      </ul>
    </section>
  );
}

export default UserProfile;
