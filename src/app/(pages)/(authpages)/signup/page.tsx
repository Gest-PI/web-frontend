"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function SignupPage() {
    const theme = useSelector((state: any) => state.theme.value);
    return (
        <>
            <div
                className={`md:w-1/2 bg-[#071717] flex flex-col justify-center p-10 items-center space-y-6 ${
                    theme == "light"
                        ? "bg-gray-200 text-black"
                        : "bg-[#071717] text-white"
                } `}
            >
                <h2 className="text-2xl font-bold w-full text-center">
                    Quer conhecer nossa plataforma? Entraremos em{" "}
                    <span
                        className={`${
                            theme == "light"
                                ? "text-[#189938]"
                                : "text-[#34C759]"
                        }`}
                    >
                        contato com você!
                    </span>
                </h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        className={`w-full px-4 py-2 rounded ${
                            theme == "light" ? "bg-white" : " bg-[#072727]"
                        }  outline-none`}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        className={`w-full px-4 py-2 rounded ${
                            theme == "light" ? "bg-white" : " bg-[#072727]"
                        }  outline-none`}
                    />
                    <input
                        type="tel"
                        placeholder="Telefone"
                        className={`w-full px-4 py-2 rounded ${
                            theme == "light" ? "bg-white" : " bg-[#072727]"
                        }  outline-none`}
                    />
                    <button
                        onClick={() => redirect("/confirmed")}
                        className={`w-full py-2 cursor-pointer rounded text-white ${
                            theme == "light"
                                ? "bg-[#34C759] hover:bg-[#1E842D]"
                                : "bg-[#1E842D] hover:bg-[#34C759]"
                        }`}
                    >
                        Entrar em contato
                    </button>
                </div>
                <p className="text-sm text-center mt-4">
                    Ja tem uma conta?{" "}
                    <button
                        onClick={() => redirect("/login")}
                        className={`${
                            theme == "light"
                                ? "text-[#189938]"
                                : "text-[#34C759]"
                        } cursor-pointer`}
                    >
                        Entrar
                    </button>
                </p>
            </div>
            <div
                className={`md:w-1/2 hidden md:flex ${
                    theme == "light" ? "bg-[#59cb75]" : "bg-[#1E842D]"
                } p-10 flex-col justify-center items-center `}
            >
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
