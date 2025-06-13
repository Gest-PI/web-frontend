"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Condominio = {
    id: number;
    nome: string;
    endereco: string;
    apartamentos: number;
};

const initialData: Condominio[] = [
    {
        id: 1,
        nome: "Jardim das Flores",
        endereco: "Rua das Acácias, 123",
        apartamentos: 150,
    },
    {
        id: 2,
        nome: "Vila Verde",
        endereco: "Av. dos Pinheiros, 98",
        apartamentos: 90,
    },
    {
        id: 3,
        nome: "Bosque Azul",
        endereco: "Travessa das Palmeiras, 45",
        apartamentos: 210,
    },
];

export default function Condominios() {
    const [condominios, setCondominios] = useState<Condominio[]>(initialData);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        nome: "",
        endereco: "",
        apartamentos: "",
    });

    function limparForm() {
        setFormData({ nome: "", endereco: "", apartamentos: "" });
        setEditingId(null);
    }

    function iniciarEdicao(cond: Condominio) {
        setEditingId(cond.id);
        setFormData({
            nome: cond.nome,
            endereco: cond.endereco,
            apartamentos: String(cond.apartamentos),
        });
    }

    function validarCampos() {
        if (!formData.nome.trim()) {
            toast.error("Nome é obrigatório");
            return false;
        }
        if (!formData.endereco.trim()) {
            toast.error("Endereço é obrigatório");
            return false;
        }
        if (
            !formData.apartamentos.trim() ||
            isNaN(Number(formData.apartamentos)) ||
            Number(formData.apartamentos) <= 0
        ) {
            toast.error("Apartamentos deve ser número positivo");
            return false;
        }
        return true;
    }

    function criarCondominio() {
        if (!validarCampos()) return;

        const novo: Condominio = {
            id:
                condominios.length > 0
                    ? Math.max(...condominios.map((c) => c.id)) + 1
                    : 1,
            nome: formData.nome.trim(),
            endereco: formData.endereco.trim(),
            apartamentos: Number(formData.apartamentos),
        };
        setCondominios([...condominios, novo]);
        toast.success("Condomínio criado com sucesso!");
        limparForm();
    }

    function salvarEdicao() {
        if (!validarCampos()) return;
        if (editingId === null) return;

        setCondominios((conds) =>
            conds.map((c) =>
                c.id === editingId
                    ? {
                          ...c,
                          nome: formData.nome.trim(),
                          endereco: formData.endereco.trim(),
                          apartamentos: Number(formData.apartamentos),
                      }
                    : c
            )
        );
        toast.success("Condomínio atualizado com sucesso!");
        limparForm();
    }

    function deletarCondominio(id: number) {
        if (window.confirm("Tem certeza que deseja deletar este condomínio?")) {
            setCondominios((conds) => conds.filter((c) => c.id !== id));
            toast.info("Condomínio deletado");
            if (editingId === id) limparForm();
        }
    }

    return (
        <div className="min-h-screen w-full bg-gray-900 text-white p-6 font-sans max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center select-none">
                Condomínios
            </h1>

            <div className="flex flex-col md:flex-row gap-10">
                {/* Formulário à esquerda */}
                <section className="bg-gray-800 p-6 rounded-md shadow-md md:w-1/3">
                    <h2 className="text-xl font-semibold mb-4">
                        {editingId !== null
                            ? "Editar Condomínio"
                            : "Criar Novo Condomínio"}
                    </h2>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Nome do condomínio"
                            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                            value={formData.nome}
                            onChange={(e) =>
                                setFormData((f) => ({
                                    ...f,
                                    nome: e.target.value,
                                }))
                            }
                        />
                        <input
                            type="text"
                            placeholder="Endereço"
                            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                            value={formData.endereco}
                            onChange={(e) =>
                                setFormData((f) => ({
                                    ...f,
                                    endereco: e.target.value,
                                }))
                            }
                        />
                        <input
                            type="number"
                            min={1}
                            placeholder="Número de apartamentos"
                            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
                            value={formData.apartamentos}
                            onChange={(e) =>
                                setFormData((f) => ({
                                    ...f,
                                    apartamentos: e.target.value,
                                }))
                            }
                        />
                        <div className="flex justify-end gap-3">
                            {editingId !== null && (
                                <button
                                    className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700 transition"
                                    onClick={limparForm}
                                    type="button"
                                >
                                    Cancelar
                                </button>
                            )}
                            <button
                                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"
                                onClick={
                                    editingId !== null
                                        ? salvarEdicao
                                        : criarCondominio
                                }
                                type="button"
                            >
                                {editingId !== null ? "Salvar" : "Criar"}
                            </button>
                        </div>
                    </div>
                </section>

                {/* Tabela à direita */}
                <section className="md:w-2/3 overflow-x-auto rounded-md shadow-md bg-gray-800 p-4">
                    <table className="w-full table-auto border-collapse text-left">
                        <thead>
                            <tr className="bg-gray-700">
                                <th className="px-4 py-3 border border-gray-600">
                                    Nome
                                </th>
                                <th className="px-4 py-3 border border-gray-600">
                                    Endereço
                                </th>
                                <th className="px-4 py-3 border border-gray-600">
                                    Apartamentos
                                </th>
                                <th className="px-4 py-3 border border-gray-600 text-center">
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {condominios.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={4}
                                        className="text-center py-6 text-gray-400"
                                    >
                                        Nenhum condomínio cadastrado
                                    </td>
                                </tr>
                            )}
                            {condominios.map((cond) => (
                                <tr
                                    key={cond.id}
                                    className="odd:bg-gray-800 even:bg-gray-700"
                                >
                                    <td className="px-4 py-3 border border-gray-600">
                                        {cond.nome}
                                    </td>
                                    <td className="px-4 py-3 border border-gray-600">
                                        {cond.endereco}
                                    </td>
                                    <td className="px-4 py-3 border border-gray-600">
                                        {cond.apartamentos}
                                    </td>
                                    <td className="px-4 py-3 border border-gray-600 text-center space-x-2">
                                        <button
                                            className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 transition"
                                            onClick={() => iniciarEdicao(cond)}
                                            title="Editar"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
                                            onClick={() =>
                                                deletarCondominio(cond.id)
                                            }
                                            title="Deletar"
                                        >
                                            Deletar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}
