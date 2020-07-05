import React from "react";
import "./pageUser.css";
import PostBlog from "../../components/PostBlog/PostBlog";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../components/mapToProps";
import { connect } from "react-redux";

function PageUser(props) {
  const { dataPost, updatePost, dataUser, updateUsers, children } = props;

  const userId = Number(props.match.params.userId);
  const user = dataUser.find((user) => user.id === userId);
  const posts = dataPost.filter((post) => post.userId === user.id);

  return (
    <section>
      <div className="users__profile-wrap">
        <div className="users__profile-avatar">
          {user.name.split(" ").map((name) => name[0].toUpperCase())}
        </div>
        <div>
          <h3 className="users__profile-name">
            {user.name} • {user.username}
          </h3>
          <ul className="users__profile-info">
            <li>
              <a href={user.email}>{user.email}</a>
            </li>
            <li>
              <a href={user.phone}>{user.phone}</a>
            </li>
            <li>
              <a href={user.website}>{user.website}</a>
            </li>
          </ul>
        </div>
      </div>
      <h4 className="users__profile-posts-title">Articles</h4>

      <section className="users__profile-posts">
        {posts.map((item) => (
          <PostBlog {...item} key={item.id} setUserName={false} />
        ))}
      </section>
    </section>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PageUser);
