"use client";

import { toggleTheme } from "@/redux/theme/theme.slice";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import NightIcon from "../icons/NightIcon";
import DayIcon from "../icons/DayIcon";

export default function FloatButton() {
    const dispatch = useDispatch();
    const theme = useSelector((state: any) => state.theme.value);
    const handleClick = useCallback(() => {
        dispatch(toggleTheme());
    }, []);

    return (
        <button
            onClick={handleClick}
            className={`fixed bottom-4 right-6 ${
                theme == "light" ? "bg-black" : "bg-white   "
            } text-white p-2 cursor-pointer rounded-full shadow-lg hover:p-3 transition-all`}
            aria-label="Botão flutuante"
        >
            {theme == "light" ? <NightIcon /> : <DayIcon />}
        </button>
    );
}
