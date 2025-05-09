import React from "react";

export default function LogoutIcon({
    className,
    onClick,
}: {
    className?: string;
    onClick?: () => void;
}) {
    return (
        <button onClick={onClick} className="cursor-pointer">
            <svg
                className={className || "w-5 h-5 text-gray-600"}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 21h4a2 2 0 002-2V5a2 2 0 00-2-2H3"
                />
            </svg>
        </button>
    );
}
