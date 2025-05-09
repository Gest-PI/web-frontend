"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

const SignupPage = () => {
    const theme = useSelector((state: any) => state.theme.value);
    return (
        <>
            <div className="w-1/2 flex justify-center items-center flex-col bg-[#071717] p-10 space-y-6">
                <Image
                    src={theme == "light" ? "/darkLogo.png" : "/lightLogo.png"}
                    width={150}
                    height={150}
                    alt="logo"
                />
                <p className="text-sm">
                    Por favor, insira os detalhes da sua conta
                </p>
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="w-full px-4 py-2 rounded bg-white text-[#0A1E1E] outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        className="w-full px-4 py-2 rounded bg-white text-[#0A1E1E] outline-none"
                    />
                    <div className="flex justify-between text-sm">
                        <a href="#" className="text-[#34C759]">
                            Esqueceu a senha?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-[#34C759] hover:bg-[#1E842D] rounded text-white"
                    >
                        Entrar
                    </button>
                </form>
                <div className="flex justify-center gap-4 mt-4">
                    <img src="/google.svg" className="w-6 h-6" />
                    <img src="/facebook.svg" className="w-6 h-6" />
                </div>
                <p className="text-sm text-center mt-4">
                    Não tem uma conta?{" "}
                    <a href="/signup" className="text-[#34C759]">
                        Crie uma
                    </a>
                </p>
            </div>

            <div className="w-1/2  bg-[#59cb75] text-[#0A1E1E] p-10 flex flex-col justify-between items-center">
                <Image
                    src={"/login.png"}
                    width={400}
                    height={400}
                    alt="Imagem de Login"
                />
            </div>
        </>
    );
};

export default SignupPage;
