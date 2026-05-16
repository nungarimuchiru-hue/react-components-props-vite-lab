import React from "react";
import blogData from "../data/blog";
// FIX 1: Capitalize the component file name if your file is named Header.js
import Header from "./components/Header"; 
import About from "./components/About";
import ArticleList from "./components/ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* FIX 2: Capitalize the JSX tag so React renders your custom component with its props */}
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;