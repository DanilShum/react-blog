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

  function deleteCmment() {
    updateComments(dataComment.filter((comment) => comment.id !== props.id));
  }

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
        {/* <Link to={`/user/${nameAuthorComment}`}> */}
        <div className="user-comment__content-wrapper">
          <strong>
            <em>{dataUser[nameAuthorComment].name}</em>
          </strong>
          {/* </Link> */}
          <a href={props.email}> {props.email}</a>
        </div>
      </div>

      <Fab  size="small" className="user-comment__delete" onClick={deleteCmment}>
        <HighlightOff color="secondary"/>  
      </Fab>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentPost);
