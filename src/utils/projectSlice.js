import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice(
    {
        name: "project",
        initialState: {
            projectDetails: [
                {
                    id: 0,
                    name: "HUNGER-STOP",
                    description: "A delivery web app like Swiggy, user can search for resturant and the items can add to cart and user have their billing page.",
                    toolDescription: "Built a restaurant search and filter with live data fromSwiggy API, managedState with Redux, implemented routing and error handling, and optimized build withParcel and Babel.",
                    skillsUsed: ["React", "Tailwindcss", "Redux Toolkit", "Firebase"],
                    url: "https://res.cloudinary.com/dc6fwvmjh/image/upload/v1725644274/s2rjl9gvbbnbrdcvxqi8.png"
                },
                {
                    id: 1,
                    name: "NETFLIX-GPT",
                    description: "A delivery web app like Swiggy, user can search for resturant and the items can add to cart and user have their billing page.",
                    toolDescription: "Built a restaurant search and filter with live data fromSwiggy API, managedState with Redux, implemented routing and error handling, and optimized build withParcel and Babel.",
                    skillsUsed: ["React", "Tailwindcss", "Redux Toolkit", "Firebase"],
                    url: "https://res.cloudinary.com/dc6fwvmjh/image/upload/v1725644274/s2rjl9gvbbnbrdcvxqi8.png"
                },
                {
                    id: 2,
                    name: "YOUTUBE-CLONE",
                    description: "A delivery web app like Swiggy, user can search for resturant and the items can add to cart and user have their billing page.",
                    toolDescription: "Built a restaurant search and filter with live data fromSwiggy API, managedState with Redux, implemented routing and error handling, and optimized build withParcel and Babel.",
                    skillsUsed: ["React", "Tailwindcss", "Redux Toolkit", "Firebase"],
                    url: "https://res.cloudinary.com/dc6fwvmjh/image/upload/v1725644274/s2rjl9gvbbnbrdcvxqi8.png"
                }

            ]
        },
        reducers: {
            addProject: (state, action) => {
                state.projectDetails = action.payload;
            }
        }
    }
);

export const { addProject } = projectSlice.actions;

export default projectSlice.reducer;