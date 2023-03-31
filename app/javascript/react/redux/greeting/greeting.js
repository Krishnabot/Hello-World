import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_GREETING = "greetings/getGreeting";

const greetingsReducer = (state = "", action) => {
  switch (action.type) {
    case `${GET_GREETING}/fulfilled`:
      return action.payload.message;
    default:
      return state;
  }
};

const getGreeting = createAsyncThunk(GET_GREETING, async () => {
  const response = await axios.get("http://localhost:3000/greetings/index");
  return response.data;
});

export { greetingsReducer, getGreeting };
