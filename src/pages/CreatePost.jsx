// src/pages/CreatePost.jsx
import React, { useState } from "react";
import { usePost } from "../context/PostContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./createpost.css";

const CreatePost = () => {
  const { user } = useAuth();
  const { addPost } = usePost();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      author: user?.email || "Anonymous",
      timestamp: new Date().toLocaleString(),
    };

    addPost(newPost);
    setTitle("");
    setContent("");
    navigate("/");
  };

  return (
    <div className="create-post">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
       
        <textarea
          placeholder="Post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default CreatePost;

