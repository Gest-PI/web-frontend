import React from "react";

export default function FacebookLoginIcon({
    onClick,
}: {
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-3 px-2 py-2 rounded-lg shadow-sm border border-gray-300 bg-white hover:bg-gray-100 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-[#34C759]"
            aria-label="Sign in with Facebook"
        >
            <svg
                className="w-5 h-5 text-blue-600"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.098 2.797.142v3.24l-1.92.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.663V1.337C24 .6 23.4 0 22.675 0z" />
            </svg>
        </button>
    );
}
