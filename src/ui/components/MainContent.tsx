"use client";
import { ReactNode } from "react";
import { useSelector } from "react-redux";

const MainContent = ({ children }: { children: ReactNode }) => {
    const theme = useSelector((state: any) => state.theme.value);
    return (
        <div
            className={`w-full h-full flex ${
                theme == "light"
                    ? "bg-[#9dcba8] text-black"
                    : "bg-[#0A1E1E] text-white"
            } `}
        >
            {children}
        </div>
    );
};

export default MainContent;
