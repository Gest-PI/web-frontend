"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSelector } from "react-redux";

const Login = () => {
    const theme = useSelector((state: any) => state.theme.value);
    const router = useRouter();
    return (
        <div
            className={`flex flex-col ${
                theme == "dark" ? "bg-[#0A1E1E] " : "bg-gray-200"
            }
             items-center justify-center h-screen w-full`}
        >
            <Image
                className="mb-2"
                src={theme == "light" ? "/lightLogo.png" : "/darkLogo.png"}
                alt="Logo"
                width={100}
                height={100}
            />
            <div
                className={` ${
                    theme == "light" ? "bg-[#0A1E1E] " : "bg-gray-200"
                } p-8 rounded shadow-md w-80 md:w-96`}
            >
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className={`block text-sm font-medium ${
                            theme == "light" ? "text-white" : "text-gray-700"
                        }`}
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className={`block text-sm font-medium ${
                            theme == "light" ? "text-white" : "text-gray-700"
                        }`}
                    >
                        Senha
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    onClick={() => router.push("/dashboard")}
                    className={`w-full bg-[#1E842D]
                     text-white py-2 rounded hover:bg-[#34C759] cursor-pointer transition duration-200`}
                >
                    Entrar
                </button>
            </div>
        </div>
    );
};

export default Login;
