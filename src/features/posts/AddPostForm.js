import React, { useState, useRef } from "react";

import "../../css/AddPostForm.css";
import { selectAllUsers } from "../users/usersSlice";

import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const postTitleInput = useRef();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const onPostClick = () => {
    if (title && content) {
      dispatch(addPost(title, content, userId));
    }
    setTitle("");
    setContent("");
    setUserId("");
    postTitleInput.current.focus();
  };

  const allFilled = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div className="add-post-form">
      <h2>Add Post</h2>
      <form>
        <label htmlFor="post-title">Post Title:</label>
        <input
          ref={postTitleInput}
          type="text"
          id="post-title"
          className="post-title"
          value={title}
          onChange={onTitleChange}
        />
        <div className="select-post-author">
          <label htmlFor="post-author">Author:</label>
          <select
            name="post-author"
            id="post-author"
            value={userId}
            onChange={onAuthorChange}
          >
            <option value=""></option>
            {usersOptions}
          </select>
        </div>
        <label htmlFor="post-content">Content:</label>
        <textarea
          id="post-content"
          className="post-content"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={onPostClick} disabled={!allFilled}>
          Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
