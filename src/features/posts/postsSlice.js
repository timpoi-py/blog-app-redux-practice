import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit.",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi excepturi sit, tempore voluptas provident assumenda?",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
    },
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur..",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorum animi ipsam fuga, quos in illum voluptatum libero quis dolor!",
    date: sub(new Date(), { minutes: 30 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
            },
          },
        };
      },
    },
    addReaction(state, action) {
      const { postId, reaction } = action.payload;
      const postExists = state.find((post) => post.id === postId);
      if (postExists) {
        postExists.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost, addReaction } = postsSlice.actions;

export default postsSlice.reducer;
