import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { PostsPage } from "./pages/PostsPage";
import { CommentsPage } from "./pages/CommentsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userposts" element={<PostsPage />} />
        <Route path="/postcomments" element={<CommentsPage />} />
      </Routes>
    </div>
  );
}

export default App;
