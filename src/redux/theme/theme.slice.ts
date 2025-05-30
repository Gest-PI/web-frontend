
import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: "light",
    },
    reducers: {
        setTheme: (state, action) => {
            state.value = action.payload;
        },
        toggleTheme: (state) => {
            state.value = state.value === "light" ? "dark" : "light";
            if (typeof window !== "undefined") {
                localStorage.setItem("theme", state.value);
            }
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
