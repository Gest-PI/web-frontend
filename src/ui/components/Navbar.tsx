"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import UserIconBlackBg from "../icons/UserIconBlackBg";
import UserIconWhiteBg from "../icons/UserIconWhiteBg";

const Navbar = () => {
    const theme = useSelector((state: any) => state.theme.value);
    return (
        <div
            className={`w-full flex pl-11 justify-between pr-10 items-center h-20 ${
                theme == "light" ? "bg-gray-200" : "bg-black"
            } `}
        >
            <Image
                alt="Logo"
                src={theme == "light" ? "/lightLogo.png" : "/darkLogo.png"}
                width={100}
                height={100}
            />
            {theme == "dark" ? <UserIconWhiteBg /> : <UserIconBlackBg />}
        </div>
    );
};

export default Navbar;
