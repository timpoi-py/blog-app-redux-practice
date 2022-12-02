import { useDispatch } from "react-redux";
import { addReaction } from "./postsSlice";

import React from "react";

const reactionEmojis = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
};

const ReactionBtns = ({ post }) => {
  const dispatch = useDispatch();
  const emojiBtns = Object.entries(reactionEmojis).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="emoji-btn"
        onClick={() =>
          dispatch(addReaction({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div className="reaction-btns">{emojiBtns}</div>;
};

export default ReactionBtns;
