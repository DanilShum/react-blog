import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import CommentPost from "../../components/CommentPost/CommentPost";
import { Link } from "react-router-dom";

import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../components/mapToProps";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import HighlightOff from "@material-ui/icons/HighlightOff";
import "./pageArticle.css";

function PageArticle(props) {
  const articleId = Number(props.match.params.articleId);
  const {
    dataPost,
    updatePost,
    dataUser,
    updateUsers,
    dataComment,
    updateComments,
  } = props;

  const [visible, setVisible] = useState(true);
  const article = dataPost.find((post) => post.id === articleId);
  const [editElement, setEditElement] = useState(" ");
  const [title, setTitle] = useState(false);
  const [body, setBody] = useState(false);
  const inputEdit = useRef();

  function editPost(element) {
    setVisible(false);
    setEditElement(element);
  }

  function savePost(evt) {
    updatePost(
      dataPost.map((post) => {
        if (post.id === article.id) {
          if (title) {
            post.title = editElement;
          }
          if (body) {
            post.body = editElement;
          }
        }
        return post;
      })
    );
    setTitle(false);
    setBody(false);
    setVisible(true);
  }

  function deletePost() {
    updatePost(dataPost.filter((post) => post.id !== article.id));
  }

  function fetchComments() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(function (response) {
        updateComments(
          response.data.filter((comment) => comment.postId === article.id)
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return article ? (
    <section className="page-article">
      <header className="page-article__header">
        <h2
          onDoubleClick={() => {
            inputEdit.current.focus(); // ffffffffffffffffffffffffffff
            if (!title) {
              editPost(article.title);
              setTitle(true);
              setBody(false);
            } else {
              savePost();
            }
          }}
          className="page-article__title"
        >
          {article.title}
          <Fab
            size="small"
            onClick={() => {
              if (!title) {
                editPost(article.title);
                setTitle(true);
                setBody(false);
              } else {
                savePost();
              }
            }}
            className="page-article__btn-edit-title btn"
          >
            {!title ? (
              <EditIcon color="secondary" />
            ) : (
              <AddIcon color="primary" />
            )}
          </Fab>
        </h2>
      </header>
      <section className="page-article__content">
        <p
          onDoubleClick={() => {
            if (!body) {
              editPost(article.body);
              setBody(true);
              setTitle(false);
            } else {
              savePost();
            }
          }}
          className="page-article__body"
        >
          {article.body}
          <Fab
            size="small"
            onClick={() => {
              if (!body) {
                editPost(article.body);
                setBody(true);
                setTitle(false);
              } else {
                savePost();
              }
            }}
            className="page-article__btn-edit-body btn"
          >
            {!body ? (
              <EditIcon color="secondary" />
            ) : (
              <AddIcon color="primary" />
            )}
          </Fab>
        </p>
      </section>

      <div className="page-article__info">
        <Link className="page-article__author" to={`/user/${article.userId}`}>
          <strong>
            <em>{dataUser[article.userId - 1].name}</em>
          </strong>
        </Link>

        <div className="page-article__delete">
          <p>If you want to delete this article, click this button</p>
          <Fab
            size="small"
            onClick={deletePost}
            className="page-article__btn-delete"
          >
            <HighlightOff color="secondary" />
          </Fab>
        </div>
      </div>

      <textarea
        ref={inputEdit}
        value={editElement}
        onChange={(evt) => setEditElement(evt.target.value)}
        onKeyDown={(evt) => evt.key === "Enter" && savePost()}
        className={`page-article__body-edit ${visible && "visible"}`}
        rows="10"
      ></textarea>

      <section className="page-article__comment">
        {dataComment &&
          dataComment.map((comment) => (
            <CommentPost {...comment} key={comment.id} />
          ))}
      </section>
    </section>
  ) : (
    404
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(PageArticle);
