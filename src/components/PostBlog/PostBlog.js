import React from "react";
import "./PostBlog.css"
import { mapStateToProps, mapDispatchToProps } from "../mapToProps";
import { connect } from "react-redux";

function PostBlog(props) {
  const { dataUser, updateUsers } = props;
  return (
    <article className="post-blog">
      <h2 className="post-blog__title">{props.title}</h2>
      <div className="post-blog__content">{props.body}</div>
      <div className="post-blog__author">
        <strong>
          <em>{dataUser[props.userId - 1].name}</em>
        </strong>
      </div>
    </article>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostBlog);
