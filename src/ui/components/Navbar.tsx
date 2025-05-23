"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import UserIconBlackBg from "../icons/UserIconBlackBg";
import UserIconWhiteBg from "../icons/UserIconWhiteBg";
import LogoutIcon from "../icons/LogoutIcon";
import { redirect } from "next/navigation";

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
            <div className="flex justify-center items-center space-x-6">
                <div className="h-full">
                    <Image
                        src={
                            theme == "light"
                                ? "/lightBell.png"
                                : "/darkBell.png"
                        }
                        alt="Notifications"
                        width={28}
                        height={50}
                        className="cursor-pointer"
                    />
                </div>

                {theme == "dark" ? <UserIconWhiteBg /> : <UserIconBlackBg />}
                <LogoutIcon
                    onClick={() => redirect("/login")}
                    className={`${
                        theme == "light" ? "text-black" : "text-white"
                    } w-6`}
                />
            </div>
        </div>
    );
};

export default Navbar;
