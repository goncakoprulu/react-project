import React from "react";
import Blogs from "../components/Blogs/Blogs";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

const Blog = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="blog-page">
        <Blogs />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Blog;
