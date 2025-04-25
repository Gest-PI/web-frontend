export default function MoonIcon({ size = 24 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21 12C21 16.9706 16.9706 21 12 21C10.1063 21 8.33702 20.3764 6.92893 19.3033C10.8579 18.5 14 15.031 14 11C14 6.96898 10.8579 3.5 6.92893 2.6967C8.33702 1.62357 10.1063 1 12 1C16.9706 1 21 5.02944 21 10V12Z"
                fill="white"
            />
        </svg>
    );
}
