import React from "react";
import PostBlog from "../../components/PostBlog/PostBlog";
import "./HomePage.css"
import { mapStateToProps, mapDispatchToProps } from "../../components/mapToProps";
import { connect } from "react-redux";

function HomePage(props) {
  const { dataPost, updatePost} = props;

  return (
    <section className="home-page">
      {dataPost.map((item) => (
        <PostBlog {...item} key={item.id} setUserName={true}/>
      ))}
    </section>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
