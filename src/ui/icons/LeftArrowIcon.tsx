"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface LeftArrowIconProps {
    size?: string;
    theme?: "light" | "dark";
    href: string;
}

const LeftArrowIcon: React.FC<LeftArrowIconProps> = ({
    size = "w-6 h-6",
    theme = "light",
    href,
}) => {
    const router = useRouter();
    const colorClass = theme === "dark" ? "text-white" : "text-black";

    const handleClick = () => {
        router.push(href);
    };

    return (
        <button onClick={handleClick} aria-label="Voltar">
            <svg
                className={`${size} ${colorClass}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>
    );
};

export default LeftArrowIcon;
