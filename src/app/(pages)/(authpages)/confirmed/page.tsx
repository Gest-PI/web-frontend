"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function ConfirmedPage() {
    const theme = useSelector((state: any) => state.theme.value);
    return (
        <>
            <div
                className={`md:w-1/2 bg-[#071717] flex flex-col justify-center p-10 items-center ${
                    theme == "light"
                        ? "bg-gray-200 text-black"
                        : "bg-[#071717] text-white"
                }`}
            >
                <h1
                    className={`font-bold text-4xl pb-2 ${
                        theme == "light" ? "text-[#189938]" : "text-[#34C759]"
                    }`}
                >
                    Parabéns!
                </h1>
                <span className="text-xl">
                    Fique atento ao telefone! <br /> Logo{" "}
                    <span
                        className={`${
                            theme == "light"
                                ? "text-[#189938]"
                                : "text-[#34C759]"
                        }`}
                    >
                        entraremos em contato
                    </span>{" "}
                    com você.
                </span>
                <button
                    onClick={() => redirect("/login")}
                    className={`w-full cursor-pointer py-2 mt-16 ${
                        theme == "light"
                            ? "bg-[#34C759] hover:bg-[#1E842D]"
                            : "bg-[#1E842D] hover:bg-[#34C759]"
                    } rounded text-white`}
                >
                    voltar
                </button>
            </div>
            <div
                className={`md:w-1/2 hidden md:flex ${
                    theme == "light" ? "bg-[#59cb75]" : "bg-[#1E842D]"
                } text-[#0A1E1E] p-10 flex-col justify-center items-center`}
            >
                <Image
                    src={"/confirmed.png"}
                    width={300}
                    height={300}
                    alt="Imagem de Signup"
                />
            </div>
        </>
    );
}
