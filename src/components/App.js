import React from "react";
import blogData from "../data/blog";
import headers from "../components/Header";
import about from "../components/About";
import article from "../components/Article";
import articleList from "../components/ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <headers />
      <about />
      <article />
      <articleList />
    </div>
  );
}

export default App;
//blogName={blogData.name}