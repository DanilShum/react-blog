import React from "react";
import "./PostBlog.css";
import { mapStateToProps, mapDispatchToProps } from "../mapToProps";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function PostBlog(props) {
  const { dataUser, updateUsers, dataPost, updatePost } = props;

  return (
    <article className="post-blog">
      <Link className="post-blog__content" to={`/articles/${props.id}`}>
        <h2 className="post-blog__title">{props.title}</h2>
        <p className="post-blog__text">{props.body}</p>
      </Link>
      {props.setUserName && (
        <Link to={`/user/${props.userId}`} className="post-blog__author">
          <strong>
            <em>{dataUser[props.userId - 1].name}</em>
          </strong>
        </Link>
      )}
    </article>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostBlog);
