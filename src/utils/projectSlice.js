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
                    url: [
                        {
                            id: 0,
                            url: "https://res.cloudinary.com/dc6fwvmjh/image/upload/v1725644274/s2rjl9gvbbnbrdcvxqi8.png"
                        },
                        {
                            id: 1,
                            url: "https://res.cloudinary.com/dc6fwvmjh/image/upload/v1726903003/xyy8ycr0hgwulyzvlxpi.png"
                        },
                        {
                            id: 2,
                            url: "https://res.cloudinary.com/dc6fwvmjh/image/upload/v1726903005/bfw5oafc2tluo8ea1sjr.png"
                        },
                        {
                            id: 3,
                            url: "https://res.cloudinary.com/dc6fwvmjh/image/upload/v1726903004/tzqzioyuvd27goq81x7i.png"
                        },
                        {
                            id: 4,
                            url: "https://res.cloudinary.com/dc6fwvmjh/image/upload/v1726903002/ncllxpohuwqjk1cuwhif.png"
                        },

                    ],
                    projectLink: "https://github.com/KOSIREDDYRAKESH/HungerStop"

                },
                {
                    id: 1,
                    name: "NETFLIX-GPT",
                    description: "User-Authenticated Movie Search Platform: Search for Movies, View Posters and Descriptions After Secure Login",
                    toolDescription: "NetflixGpt is a React-based app with Firebase authentication, showcasing movie posters and a special Movies GPT feature with a search bar. It includes a language change option and uses Redux for state management and Tailwind CSS for styling.",
                    skillsUsed: ["React", "Tailwindcss", "Redux Toolkit", "Firebase"],
                    url: [
                        {
                            id: 0,
                            url: "https://res.cloudinary.com/dc6fwvmjh/image/upload/v1726918263/aq3utduxsvyayafp6qmf.png"
                        },
                        {
                            id: 1,
                            url: "https://res.cloudinary.com/dc6fwvmjh/image/upload/v1726917842/f4lipsnzbyjtemgzd3a1.png"
                        },
                        {
                            id: 2,
                            url: "https://res.cloudinary.com/dc6fwvmjh/image/upload/v1726917994/zxecqfd8bxwmpaq9bzdv.png"
                        },
                        {
                            id: 3,
                            url: "https://res.cloudinary.com/dc6fwvmjh/image/upload/v1726918180/hw2ihuh09yxn9ouxkezx.png"
                        },
                        {
                            id: 4,
                            url: "https://res.cloudinary.com/dc6fwvmjh/image/upload/v1726918071/yxncfarcwkdjljqivmrg.png"
                        },

                    ],
                    projectLink: "https://netflix-gpt-biy9.vercel.app/browser"
                },


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