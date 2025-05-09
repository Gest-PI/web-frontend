import React from "react";

export default function GoogleLoginButton({
    onClick,
}: {
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-3 cursor-pointer px-2 py-2 rounded-lg shadow-sm border border-gray-500  hover:bg-gray-100 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-[#34C759]"
            aria-label="Sign in with Google"
        >
            <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M21.805 10.023h-9.75v3.94h5.61c-.24 1.33-.99 2.44-2.1 3.16v2.62h3.4c1.99-1.83 3.14-4.54 3.14-7.72 0-.66-.06-1.31-.18-1.93z"
                    fill="#4285F4"
                />
                <path
                    d="M12.055 22c2.84 0 5.23-.94 6.97-2.56l-3.4-2.62c-.94.63-2.13.99-3.57.99-2.74 0-5.06-1.85-5.89-4.34H3.63v2.72C5.36 19.98 8.48 22 12.055 22z"
                    fill="#34A853"
                />
                <path
                    d="M6.165 13.47a6.963 6.963 0 010-4.42V6.33H3.63a10.002 10.002 0 000 9.34l2.535-2.2z"
                    fill="#FBBC05"
                />
                <path
                    d="M12.055 4.74c1.55 0 2.95.53 4.04 1.57l3.03-3.03C17.28 1.13 14.89 0 12.055 0 8.48 0 5.36 2.02 3.63 4.74l2.535 2.72c.83-2.49 3.15-4.34 5.89-4.34z"
                    fill="#EA4335"
                />
            </svg>
        </button>
    );
}
