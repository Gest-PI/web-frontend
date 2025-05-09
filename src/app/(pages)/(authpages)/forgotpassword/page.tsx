"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function ForgotPasswordPage() {
    const theme = useSelector((state: any) => state.theme.value);
    const [sendEmail, setSendEmail] = useState(false);
    const handleClick = () => {
        setSendEmail(true);
    };

    if (sendEmail) {
        return (
            <>
                <div className="md:w-1/2 flex justify-center items-center flex-col bg-[#071717] p-10 space-y-4">
                    <div className=" space-y-4 w-full">
                        <span className="text-[#59cb75] text-2xl font-bold">
                            Email enviado com sucesso! Verifique sua caixa de
                            entrada ou spam.
                        </span>
                        <button
                            onClick={() => redirect("/login")}
                            className="w-full cursor-pointer py-2 mt-16 bg-[#34C759] hover:bg-[#1E842D] rounded text-white"
                        >
                            voltar
                        </button>
                    </div>
                </div>

                <div className="md:w-1/2  bg-[#59cb75] text-[#0A1E1E] p-10 flex flex-col justify-between items-center">
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
            <div className="md:w-1/2 flex items-center  justify-center flex-col bg-[#071717] p-10 space-y-4">
                <h1 className="text-2xl font-bold">Esqueceu sua senha?</h1>
                <span>
                    <span className="text-[#59cb75]">
                        Não se preocupe! Isso acontece.
                    </span>{" "}
                    Por favor, adicione abaixo o e-mail associado a sua conta
                    que lhe enviaremos um e-mail de recuperação de senha.
                </span>
                <div className="space-y-4 w-full">
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="w-full px-4 py-2 rounded bg-white text-[#0A1E1E] outline-none"
                    />
                    <button
                        onClick={() => handleClick()}
                        className="w-full py-2 cursor-pointer bg-[#34C759] hover:bg-[#1E842D] rounded text-white"
                    >
                        Enviar
                    </button>
                </div>
            </div>

            <div
                className={`md:w-1/2  ${
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
