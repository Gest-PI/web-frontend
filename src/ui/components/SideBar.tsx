"use client";
import { useSelector } from "react-redux";

const SideBar = () => {
    const theme = useSelector((state: any) => state.theme.value);
    return (
        <div
            className={` ${
                theme == "light"
                    ? "bg-gray-200 text-black"
                    : "bg-black text-white"
            }   w-56 h-full flex justify-center`}
        >
            SideBar
        </div>
    );
};

export default SideBar;
