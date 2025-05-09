"use client";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function ConfirmedPage() {
    return (
        <>
            <div className="w-1/2 bg-[#071717] p-24 flex flex-col items-center">
                <h1 className="font-bold text-4xl pb-2 text-[#59cb75]">
                    Parabéns!
                </h1>
                <span className="text-xl">Fique atento ao telefone!</span>
                <span className="text-xl">
                    Logo{" "}
                    <span className="text-[#59cb75]">
                        entraremos em contato
                    </span>{" "}
                    com você.
                </span>
                <button
                    onClick={() => redirect("/login")}
                    className="w-full cursor-pointer py-2 mt-16 bg-[#34C759] hover:bg-[#1E842D] rounded text-white"
                >
                    voltar
                </button>
            </div>
            <div className="w-1/2  bg-[#59cb75] text-[#0A1E1E] p-10 flex flex-col justify-center items-center">
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
