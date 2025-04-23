import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./theme.slice";

export type ThemeState = {
    theme: {
        value: "light" | "dark";
    };
};

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
    },
});

export { store };
