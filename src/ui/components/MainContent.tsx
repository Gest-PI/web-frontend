import { ReactNode } from "react";

const MainContent = ({ children }: { children: ReactNode }) => {
    return <div className="w-full h-full">{children}</div>;
};

export default MainContent;
