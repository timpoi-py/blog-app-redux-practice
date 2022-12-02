import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "John Smith",
  },
  {
    id: "1",
    name: "Peter Parker",
  },
  {
    id: "2",
    name: "Tony Stark",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
