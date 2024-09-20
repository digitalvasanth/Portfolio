import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import projectReducer from "./projectSlice";

const appStore = configureStore({
    reducer: {
        nav: navReducer,
        project: projectReducer
    }
});

export default appStore;