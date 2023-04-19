import { configureStore } from "@reduxjs/toolkit";
import Counter from "../redux/Counter";

const store = configureStore({
  reducer: { data: Counter },
});

export default store;
