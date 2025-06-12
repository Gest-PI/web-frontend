"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const SideBarItems = () => {
    const theme = useSelector((state: any) => state.theme.value);
    const pathname = usePathname();
    const items = [
        {
            label: "Resumo",
            link: "/dashboard",
            image: "/darkSumarry.png",
            alt: "Summary",
        },
        {
            label: "Condomínio",
            link: "/dashboard/condominium",
            image: "/darkCondominium.png",
            alt: "Condominium",
        },
        {
            label: "Financeiro",
            link: "/dashboard/financial",
            image: "/darkFinancial.png",
            alt: "Financial",
        },
        {
            label: "Reservas",
            link: "/dashboard/reservations",
            image: "/darkReservations.png",
            alt: "Condominium",
        },
        {
            label: "Moradores",
            link: "/dashboard/residents",
            image: "/darkResidents.png",
            alt: "Residents",
        },
    ];

    return (
        <div className="h-full w-full">
            {items.map((item, id) => {
                return (
                    <Link href={item.link} key={id}>
                        <div
                            key={item.label}
                            className={`flex items-center justify-center h-12 w-full cursor-pointer ${
                                theme == "light"
                                    ? "hover:bg-[#9dcba8]"
                                    : "hover:bg-[#0A1E1E]"
                            } ${
                                pathname == item.link
                                    ? theme == "light"
                                        ? "bg-[#9dcba8]"
                                        : "bg-[#0A1E1E]"
                                    : ""
                            }`}
                        >
                            <div className="flex w-full justify-center items-center">
                                <span className="pr-2">{item.label}</span>
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={18}
                                    height={18}
                                />
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};
