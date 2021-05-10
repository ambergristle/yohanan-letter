import { configureStore } from "@reduxjs/toolkit";
import publisherReducer from "../features/publisher/publisherSlice";

export const store = configureStore({
  reducer: {
    publisher: publisherReducer,
  },
});
