"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import GoogleLoginIcon from "@/ui/icons/GoogleLoginIcon";
import FacebookLoginIcon from "@/ui/icons/FacebookLoginIcon";
import { redirect } from "next/navigation";

export default function LoginPage() {
    const theme = useSelector((state: any) => state.theme.value);
    return (
        <>
            <div
                className={`w-full md:w-1/2 flex justify-center items-center p-10 flex-col ${
                    theme == "light"
                        ? "bg-gray-200 text-black"
                        : "bg-[#071717] text-white"
                }  p-10 space-y-4`}
            >
                <Image
                    src={theme == "light" ? "/lightLogo.png" : "/darkLogo.png"}
                    width={180}
                    height={150}
                    alt="logo"
                />
                <p>
                    Por favor, insira os detalhes da{" "}
                    <span
                        className={`${
                            theme == "light"
                                ? "text-[#189938]"
                                : "text-[#34C759]"
                        }`}
                    >
                        sua conta
                    </span>
                </p>
                <div className="space-y-4 w-full">
                    <input
                        type="email"
                        placeholder="E-mail"
                        className={`w-full px-4 py-2 rounded ${
                            theme == "light" ? "bg-white" : " bg-[#072727]"
                        }  outline-none`}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        className={`w-full px-4 py-2 rounded  outline-none  ${
                            theme == "light" ? "bg-white " : " bg-[#072727]"
                        }`}
                    />
                    <div className="flex justify-between text-sm">
                        <button
                            onClick={() => redirect("/forgotpassword")}
                            className={`cursor-pointer ${
                                theme == "light"
                                    ? "text-[#189938]"
                                    : "text-[#34C759]"
                            }`}
                        >
                            Esqueceu a senha?
                        </button>
                    </div>
                    <button
                        onClick={() => redirect("/dashboard")}
                        className={`w-full py-2 cursor-pointer ${
                            theme == "light"
                                ? "bg-[#34C759] hover:bg-[#1E842D]"
                                : "bg-[#1E842D] hover:bg-[#34C759]"
                        }  rounded text-white`}
                    >
                        Entrar
                    </button>
                </div>
                <div className="flex justify-center gap-2">
                    <GoogleLoginIcon />
                    <FacebookLoginIcon />
                </div>
                <p className="text-sm text-center mt-4">
                    Não tem uma conta?{" "}
                    <button
                        onClick={() => redirect("/signup")}
                        className={`${
                            theme == "light"
                                ? "text-[#189938]"
                                : "text-[#34C759]"
                        } cursor-pointer`}
                    >
                        Crie uma
                    </button>
                </p>
            </div>

            <div
                className={`hidden md:flex ${
                    theme == "light" ? "bg-[#59cb75]" : "bg-[#1E842D]"
                } md:w-1/2  text-[#0A1E1E] p-10  flex-col justify-between items-center `}
            >
                <Image
                    src={"/login.png"}
                    width={400}
                    height={400}
                    alt="Imagem de Login"
                />
            </div>
        </>
    );
}
