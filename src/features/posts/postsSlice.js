import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit.",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi excepturi sit, tempore voluptas provident assumenda?",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur..",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorum animi ipsam fuga, quos in illum voluptatum libero quis dolor!",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
