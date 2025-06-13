"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Conta {
    nome: string;
    apartamento: string;
    telefone: string;
    gas: { valor: number; pago: boolean };
    energia: { valor: number; pago: boolean };
    agua: { valor: number; pago: boolean };
    condominio: { valor: number; pago: boolean };
}

const contasIniciais: Conta[] = [
    {
        nome: "João da Silva",
        apartamento: "302B",
        telefone: "(31) 98888-0001",
        gas: { valor: 80, pago: true },
        energia: { valor: 120, pago: false },
        agua: { valor: 65, pago: true },
        condominio: { valor: 300, pago: false },
    },
    {
        nome: "Maria Oliveira",
        apartamento: "201A",
        telefone: "(31) 97777-0002",
        gas: { valor: 75, pago: true },
        energia: { valor: 110, pago: true },
        agua: { valor: 60, pago: true },
        condominio: { valor: 300, pago: true },
    },
    {
        nome: "Carlos Lima",
        apartamento: "405C",
        telefone: "(31) 96666-0003",
        gas: { valor: 90, pago: false },
        energia: { valor: 150, pago: false },
        agua: { valor: 70, pago: true },
        condominio: { valor: 300, pago: true },
    },
    {
        nome: "Ana Paula",
        apartamento: "101D",
        telefone: "(31) 95555-0004",
        gas: { valor: 85, pago: true },
        energia: { valor: 130, pago: true },
        agua: { valor: 68, pago: false },
        condominio: { valor: 300, pago: false },
    },
];

export default function ContasAPagar() {
    const [contas, setContas] = useState<Conta[]>(contasIniciais);

    const pagarConta = (
        index: number,
        tipo: keyof Omit<Conta, "nome" | "apartamento" | "telefone">
    ) => {
        const novaLista = [...contas];
        novaLista[index][tipo].pago = true;
        setContas(novaLista);
        toast.success(
            `Conta de ${tipo} paga com sucesso para ${novaLista[index].nome}`
        );
    };

    const formatStatus = (pago: boolean) => (
        <span
            className={`text-xs font-semibold ${
                pago ? "text-green-400" : "text-red-400"
            }`}
        >
            {pago ? "Pago" : "Não Pago"}
        </span>
    );

    const renderConta = (
        index: number,
        tipo: keyof Omit<Conta, "nome" | "apartamento" | "telefone">
    ) => {
        const conta = contas[index][tipo];
        return (
            <div className="flex flex-col gap-1">
                <span>R$ {conta.valor.toFixed(2)}</span>
                {formatStatus(conta.pago)}
                {!conta.pago && (
                    <button
                        onClick={() => pagarConta(index, tipo)}
                        className="mt-1 text-xs bg-green-600 hover:bg-green-700 transition text-white py-1 px-2 rounded"
                    >
                        Foi Pago
                    </button>
                )}
            </div>
        );
    };

    return (
        <div className="w-full mx-auto bg-gray-900 text-white rounded-xl shadow-xl p-8">
            <ToastContainer />
            <h2 className="text-2xl font-bold mb-6">
                Contas a Pagar dos Moradores
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm text-left">
                    <thead>
                        <tr className="bg-gray-800 text-gray-300">
                            <th className="p-3 border-b border-gray-700">
                                Morador
                            </th>
                            <th className="p-3 border-b border-gray-700">
                                Apartamento
                            </th>
                            <th className="p-3 border-b border-gray-700">
                                Telefone
                            </th>
                            <th className="p-3 border-b border-gray-700">
                                Gás
                            </th>
                            <th className="p-3 border-b border-gray-700">
                                Energia
                            </th>
                            <th className="p-3 border-b border-gray-700">
                                Água
                            </th>
                            <th className="p-3 border-b border-gray-700">
                                Condomínio
                            </th>
                            <th className="p-3 border-b border-gray-700">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {contas.map((morador, index) => {
                            const total =
                                morador.gas.valor +
                                morador.energia.valor +
                                morador.agua.valor +
                                morador.condominio.valor;

                            return (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-800 transition"
                                >
                                    <td className="p-3 border-b border-gray-800">
                                        {morador.nome}
                                    </td>
                                    <td className="p-3 border-b border-gray-800">
                                        {morador.apartamento}
                                    </td>
                                    <td className="p-3 border-b border-gray-800">
                                        {morador.telefone}
                                    </td>
                                    <td className="p-3 border-b border-gray-800">
                                        {renderConta(index, "gas")}
                                    </td>
                                    <td className="p-3 border-b border-gray-800">
                                        {renderConta(index, "energia")}
                                    </td>
                                    <td className="p-3 border-b border-gray-800">
                                        {renderConta(index, "agua")}
                                    </td>
                                    <td className="p-3 border-b border-gray-800">
                                        {renderConta(index, "condominio")}
                                    </td>
                                    <td className="p-3 border-b border-gray-800 font-bold text-green-400">
                                        R$ {total.toFixed(2)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
