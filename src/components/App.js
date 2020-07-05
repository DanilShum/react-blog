import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import HeaderBlog from "./HeaderBlog/HeaderBlog";
import { mapStateToProps, mapDispatchToProps } from "./mapToProps";
import { connect } from "react-redux";

function App(props) {
  const {
    dataPost,
    updatePost,
    dataUser,
    updateUsers,
    dataComment,
    updateComments,
    children,
  } = props;


  function fetchPosts() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        updatePost(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function fetchAuthor() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        updateUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

 
  useEffect(() => {
    fetchPosts();
    fetchAuthor();
    
  }, []);

  return (
    <div className="App">
      <HeaderBlog />
      {dataPost && dataUser  && children}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
