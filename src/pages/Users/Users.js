import React from "react";
import "./users.css";
import UserProfile from "components/UserProfile/UserProfile";
import { mapStateToProps, mapDispatchToProps } from "../../components/mapToProps";
import { connect } from "react-redux";

function Users(props) {
  const { dataUser, updateUsers } = props;

  return (
    <section className="users">
      <h1>USERS</h1>
      <div className="users__container">
        {dataUser.map((item) => (
          <UserProfile {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
