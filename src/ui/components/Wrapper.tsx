import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
    return <div className="w-full h-screen flex flex-row">{children}</div>;
};

export default Wrapper;
