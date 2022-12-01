import React, { useState } from "react";

import "../../css/AddPostForm.css";
import { nanoid } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onPostClick = () => {
    if (title && content) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          content,
        })
      );
    }
    setTitle("");
    setContent("");
  };

  return (
    <div className="add-post-form">
      <h2>Add Post</h2>
      <form>
        <label htmlFor="post-title">Post Title:</label>
        <input
          type="text"
          id="post-title"
          className="post-title"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="post-content">Content:</label>
        <textarea
          id="post-content"
          className="post-content"
          onChange={onContentChange}
        />
        <button type="button" onClick={onPostClick}>
          Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
