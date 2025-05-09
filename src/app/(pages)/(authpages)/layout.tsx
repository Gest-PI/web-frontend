"use client";

import { useSelector } from "react-redux";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const theme = useSelector((state: any) => state.theme.value);
    return (
        <div
            className={`min-h-screen flex items-center justify-center ${
                theme == "light" ? "bg-gray-100" : "bg-[#0A1E1E]"
            }  text-white px-4`}
        >
            <div className="flex flex-col md:flex-row w-full max-w-6xl h-[500px] rounded-xl overflow-hidden shadow-lg">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
