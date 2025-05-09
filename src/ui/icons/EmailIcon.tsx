import React from "react";

export default function EmailIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className || "w-5 h-5 text-gray-500"}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4c-1.1 0-2-.9-2-2V6a2 2 0 012-2z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 6l-10 7L2 6"
            />
        </svg>
    );
}
