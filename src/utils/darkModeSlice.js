import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice(
    {
        name: "nav-Mode",
        initialState: {
            isModeDark: "false"
        },
        reducers: {
            toogleMode: (state) => {
                state.isModeDark = !state.isModeDark;
            }
        }
    }
);
export const { toogleMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
