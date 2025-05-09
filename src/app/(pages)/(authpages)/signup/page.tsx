"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function SignupPage() {
    const theme = useSelector((state: any) => state.theme.value);
    return (
        <>
            <div className="w-1/2 bg-[#071717] flex flex-col justify-center items-center p-10 space-y-6">
                <h2 className="text-2xl font-bold w-full text-center">
                    Quer conhecer nossa plataforma? Entraremos em{" "}
                    <span className="text-[#59cb75]">contato com você!</span>
                </h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Nome"
                        className="w-full px-4 py-2 rounded bg-white text-[#0A1E1E] outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 rounded bg-white text-[#0A1E1E] outline-none"
                    />
                    <input
                        type="tel"
                        placeholder="Telefone"
                        className="w-full px-4 py-2 rounded bg-white text-[#0A1E1E] outline-none"
                    />
                    <button
                        onClick={() => redirect("/confirmed")}
                        className="w-full py-2 cursor-pointer bg-[#34C759] hover:bg-[#1E842D] rounded text-white"
                    >
                        Entrar em contato
                    </button>
                </div>
                <p className="text-sm text-center mt-4">
                    Ja tem uma conta?{" "}
                    <button
                        onClick={() => redirect("/login")}
                        className="text-[#34C759]"
                    >
                        Entrar
                    </button>
                </p>
            </div>
            <div className="w-1/2  bg-[#59cb75] text-[#0A1E1E] p-10 flex flex-col justify-center items-center">
                <Image
                    src={"/signup.png"}
                    width={300}
                    height={300}
                    alt="Imagem de Signup"
                />
            </div>
        </>
    );
}
