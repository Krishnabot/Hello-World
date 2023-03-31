import { configureStore } from "@reduxjs/toolkit";
import { greetingsReducer } from "./greeting/greeting";

const store = configureStore({
  reducer: {
    greeting: greetingsReducer,
  },
});

export default store;
