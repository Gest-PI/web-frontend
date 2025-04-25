import ContentWrapper from "@/ui/components/ContentWrapper";
import Navbar from "@/ui/components/Navbar";
import SideBar from "@/ui/components/SideBar";
import MainContent from "@/ui/components/MainContent";
import Wrapper from "@/ui/components/Wrapper";
import Line from "@/ui/components/Line";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Wrapper>
            <Navbar />
            <Line />
            <ContentWrapper>
                <SideBar />
                <MainContent>{children}</MainContent>
            </ContentWrapper>
        </Wrapper>
    );
};

export default DashboardLayout;
