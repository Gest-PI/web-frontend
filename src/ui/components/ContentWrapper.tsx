import { ReactNode } from "react";

const ContentWrapper = ({ children }: { children: ReactNode }) => {
    return <div className="w-full h-screen flex flex-row ">{children}</div>;
};

export default ContentWrapper;
