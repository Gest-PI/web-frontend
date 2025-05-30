"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "@/redux/theme/theme.slice";

export default function ThemeHydrator() {
    const dispatch = useDispatch();

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        dispatch(setTheme(storedTheme));
        document.documentElement.classList.toggle(
            "dark",
            storedTheme === "dark"
        );
    }, []);

    return null;
}
