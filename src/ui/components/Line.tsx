"use client";
import { useSelector } from "react-redux";

const Line = () => {
    const theme = useSelector((state: any) => state.theme.value);
    return (
        <hr
            className={`${
                theme == "light" ? "text-black" : "text-white"
            } w-full`}
        />
    );
};
export default Line;
