import Wrapper from "@/ui/components/Wrapper";
import Navbar from "@/ui/components/Navbar";
import SideBar from "@/ui/components/SideBar";
import MainContent from "@/ui/components/MainContent";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <Navbar />
            <Wrapper>
                <SideBar />
                <MainContent>{children}</MainContent>
            </Wrapper>
        </div>
    );
};

export default DashboardLayout;
