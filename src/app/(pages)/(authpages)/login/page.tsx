"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import GoogleLoginIcon from "@/ui/icons/GoogleLoginIcon";
import { redirect } from "next/navigation";
import { useState } from "react";
import { AuthService } from "@/api/auth/Auth.service";
import { AuthToasts } from "../AuthToasts";

export default function LoginPage() {
    const theme = useSelector((state: any) => state.theme.value);
    const [data, setdata] = useState({
        username: "",
        password: "",
        error: null,
        loading: false,
    });

    const handleLogin = async () => {
        const response: any = await AuthService.Login(
            data.username,
            data.password
        );

        if (response.status === 200) {
            localStorage.setItem("token", response.data);
            AuthToasts.loginSuccess();
            redirect("/dashboard");
        } else if (response.status === 401) {
            AuthToasts.credentialsError();
            setdata({ ...data, error: response.status });
        } else {
            AuthToasts.defaultError();
        }
    };

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
                        type="username"
                        placeholder="Nome de usuário"
                        className={`w-full px-4 py-2 rounded ${
                            theme == "light" ? "bg-white" : " bg-[#072727]"
                        } ${
                            data.error != null ? "border-red-400 border-2" : ""
                        }  outline-none`}
                        value={data.username}
                        onChange={(e) =>
                            setdata({
                                ...data,
                                username: e.target.value,
                                error: null,
                            })
                        }
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        className={`w-full px-4 py-2 rounded  outline-none  ${
                            theme == "light" ? "bg-white " : " bg-[#072727]"
                        } ${
                            data.error != null ? "border-red-400 border-2" : ""
                        }`}
                        value={data.password}
                        onChange={(e) =>
                            setdata({
                                ...data,
                                password: e.target.value,
                                error: null,
                            })
                        }
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
                        onClick={() => handleLogin()}
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
