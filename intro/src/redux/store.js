import { configureStore } from "@reduxjs/toolkit";
import counterRecuder from "../components/counter/counterSlicer";

export default configureStore({
  reducer: {
    counter: counterRecuder,
  },
});
