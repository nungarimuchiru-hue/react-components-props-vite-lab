import React from "react";
import blogData from "../data/blog";
import Header from "./components/header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
