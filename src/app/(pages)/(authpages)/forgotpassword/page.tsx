"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import LeftArrowIcon from "@/ui/icons/LeftArrowIcon";

export default function ForgotPasswordPage() {
    const theme = useSelector((state: any) => state.theme.value);
    const [sendEmail, setSendEmail] = useState(false);
    const handleClick = () => {
        setSendEmail(true);
    };

    if (sendEmail) {
        return (
            <>
                <div
                    className={`md:w-1/2 flex justify-center items-center p-10 flex-col space-y-4  ${
                        theme == "light"
                            ? "bg-gray-200 text-black"
                            : "bg-[#071717] text-white"
                    }`}
                >
                    <div className=" space-y-4 w-full">
                        <span
                            className={`${
                                theme == "light"
                                    ? "text-[#189938]"
                                    : "text-[#34C759]"
                            } text-2xl font-bold`}
                        >
                            Email enviado com sucesso! Verifique sua caixa de
                            entrada ou spam.
                        </span>
                        <button
                            onClick={() => redirect("/login")}
                            className={`w-full cursor-pointer py-2 mt-16 rounded text-white ${
                                theme == "light"
                                    ? "bg-[#34C759] hover:bg-[#1E842D]"
                                    : "bg-[#1E842D] hover:bg-[#34C759]"
                            }`}
                        >
                            voltar
                        </button>
                    </div>
                </div>

                <div
                    className={`hidden md:flex md:w-1/2 ${
                        theme == "light" ? "bg-[#59cb75]" : "bg-[#1E842D]"
                    } text-[#0A1E1E] p-10 flex-col justify-between items-center`}
                >
                    <Image
                        src={"/forgotpassword.png"}
                        width={400}
                        height={400}
                        alt="Imagem de Forgot Password"
                    />
                </div>
            </>
        );
    }

    return (
        <>
            <div
                className={`md:w-1/2 flex items-center justify-center p-10 flex-col  ${
                    theme == "light"
                        ? "bg-gray-200 text-black"
                        : "bg-[#071717] text-white"
                } p-10 space-y-4`}
            >
                <div className="w-full flex items-center justify-start">
                    <LeftArrowIcon theme={theme} href={"/login"} />
                </div>
                <h1 className="text-2xl font-bold w-full flex items-center justify-center gap-2">
                    Esqueceu sua senha?
                </h1>
                <span>
                    <span
                        className={`${
                            theme == "light"
                                ? "text-[#189938]"
                                : "text-[#34C759]"
                        }`}
                    >
                        Não se preocupe! Isso acontece.
                    </span>{" "}
                    Por favor, adicione abaixo o e-mail associado a sua conta
                    que lhe enviaremos um e-mail de recuperação de senha.
                </span>
                <div className="space-y-4 w-full">
                    <input
                        type="email"
                        placeholder="E-mail"
                        className={`w-full px-4 py-2 rounded  outline-none  ${
                            theme == "light" ? "bg-white " : " bg-[#072727]"
                        }`}
                    />
                    <button
                        onClick={() => handleClick()}
                        className={`w-full py-2 cursor-pointer rounded text-white ${
                            theme == "light"
                                ? "bg-[#34C759] hover:bg-[#1E842D]"
                                : "bg-[#1E842D] hover:bg-[#34C759]"
                        }`}
                    >
                        Enviar
                    </button>
                </div>
            </div>

            <div
                className={`md:w-1/2 hidden md:flex  ${
                    theme == "light" ? "bg-[#59cb75]" : "bg-[#1E842D]"
                } text-[#0A1E1E] p-10 flex flex-col justify-between items-center`}
            >
                <Image
                    src={"/forgotpassword.png"}
                    width={400}
                    height={400}
                    alt="Imagem de Forgot Password"
                />
            </div>
        </>
    );
}
