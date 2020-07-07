import React from "react";
import "./commentPost.css";
import { Link } from "react-router-dom";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../components/mapToProps";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import HighlightOff from "@material-ui/icons/HighlightOff";

function CommentPost(props) {
  const { dataUser, updateUsers, dataComment, updateComments } = props;

  let nameAuthorComment = Math.floor(Math.random() * 10);

  return (
    <div className="user-comment">
      <div className="user-comment__avatar">
        {dataUser[nameAuthorComment].name
          .split(" ")
          .map((name) => name[0].toUpperCase())}
      </div>
      <div className="user-comment__content">
        <p>{props.body}</p>

        <div className="user-comment__content-wrapper">
          <Link to={`/user/${nameAuthorComment + 1}`}>
            <strong>
              <em>{dataUser[nameAuthorComment].name}</em>
            </strong>
          </Link>
          <a href={props.email}> {props.email}</a>
        </div>
      </div>

      <Fab
        size="small"
        className="user-comment__delete"
        onClick={() =>
          props.deleteElement(updateComments, dataComment, props.id)
        }
      >
        <HighlightOff color="secondary" />
      </Fab>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentPost);
