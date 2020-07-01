import React from "react";
import PostBlog from "../PostBlog/PostBlog";
import "./HomePage.css"
import { mapStateToProps, mapDispatchToProps } from "../mapToProps";
import { connect } from "react-redux";
function HomePage(props) {
  const { dataPost, updatePost} = props;

  return (
    <section className="home-page">
      {dataPost.map((item) => (
        <PostBlog {...item} key={item.id} />
      ))}
    </section>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
