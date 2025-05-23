"use client";
import { ReactNode } from "react";
import { useSelector } from "react-redux";

const SideBar = ({ children }: { children: ReactNode }) => {
    const theme = useSelector((state: any) => state.theme.value);
    return (
        <div
            className={` ${
                theme == "light"
                    ? "bg-gray-200 text-black"
                    : "bg-black text-white"
            }   w-56 h-full flex justify-center`}
        >
            {children}
        </div>
    );
};

export default SideBar;
