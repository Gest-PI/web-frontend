const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0A1E1E] text-white px-4">
            <div className="flex w-full max-w-6xl h-[500px] rounded-xl overflow-hidden shadow-lg">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
