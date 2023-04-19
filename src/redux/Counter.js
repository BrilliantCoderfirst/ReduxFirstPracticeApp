import { createSlice } from "@reduxjs/toolkit";

const Counter = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = Counter.actions;
export default Counter.reducer;
