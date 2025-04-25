"use client";
import { useSelector } from "react-redux";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const theme = useSelector((state: any) => state.theme.value);
    return (
        <div
            className={`flex flex-col items-center justify-center h-screen ${
                theme ? "bg-[#0A1E1E]" : "bg-gray-100"
            } bg-gray-100`}
        >
            {children}
        </div>
    );
};

export default Wrapper;
