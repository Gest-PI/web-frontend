const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="w-full h-20  bg-green-400">NavBar</div>
            <div className="w-full h-screen flex flex-row">
                <div className="bg-purple-400 w-32 h-full">SideBar</div>
                <div className="w-full h-full">{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;
