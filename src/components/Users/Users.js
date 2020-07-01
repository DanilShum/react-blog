import React from "react";
import UserProfile from "components/Users/UserProfile/UserProfile";
import { mapStateToProps, mapDispatchToProps } from "../mapToProps";
import { connect } from "react-redux";

function Users(props) {
  const { dataUser, updateUsers } = props;

  return (
    <section>
      <h1>USERS</h1>
      {dataUser.map((item) => (
        <UserProfile {...item} key={item.id} />
      ))}
    </section>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
