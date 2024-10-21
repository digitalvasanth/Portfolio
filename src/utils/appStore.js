import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import projectReducer from "./projectSlice";
import modeReducer from "./darkModeSlice";

const appStore = configureStore({
    reducer: {
        nav: navReducer,
        project: projectReducer,
        mode: modeReducer
    }
});

export default appStore;