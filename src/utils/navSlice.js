import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice(
    {
        name: "nav",
        initialState: {
            isMenuOpen: false
        },
        reducers: {
            toogleMenu: (state) => {
                state.isMenuOpen = !state.isMenuOpen;
            }
        }
    }
);

export const { toogleMenu } = navSlice.actions;

export default navSlice.reducer;