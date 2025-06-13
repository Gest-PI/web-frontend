"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Morador {
    id: number;
    nome: string;
    apartamento: string;
    telefone: string;
    pessoas: number;
    condominio: string;
}

const moradoresIniciais: Morador[] = [
    {
        id: 1,
        nome: "João da Silva",
        apartamento: "302B",
        telefone: "(31) 98888-0001",
        pessoas: 4,
        condominio: "Condomínio A",
    },
    {
        id: 2,
        nome: "Maria Oliveira",
        apartamento: "201A",
        telefone: "(31) 97777-0002",
        pessoas: 3,
        condominio: "Condomínio A",
    },
    {
        id: 3,
        nome: "Carlos Lima",
        apartamento: "405C",
        telefone: "(31) 96666-0003",
        pessoas: 2,
        condominio: "Condomínio B",
    },
    {
        id: 4,
        nome: "Ana Paula",
        apartamento: "101D",
        telefone: "(31) 95555-0004",
        pessoas: 5,
        condominio: "Condomínio B",
    },
];

export default function MoradoresTabela() {
    const [moradores, setMoradores] = useState<Morador[]>(moradoresIniciais);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [form, setForm] = useState<Omit<Morador, "id">>({
        nome: "",
        apartamento: "",
        telefone: "",
        pessoas: 1,
        condominio: "",
    });

    const limparForm = () => {
        setForm({
            nome: "",
            apartamento: "",
            telefone: "",
            pessoas: 1,
            condominio: "",
        });
        setEditingId(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "telefone") {
            let v = value.replace(/\D/g, "");
            if (v.length > 11) v = v.slice(0, 11);
            if (v.length > 10)
                v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
            else if (v.length > 5)
                v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
            else if (v.length > 2)
                v = v.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
            else if (v.length > 0) v = v.replace(/^(\d*)/, "($1");
            setForm((prev) => ({ ...prev, telefone: v }));
            return;
        }

        setForm((prev) => ({
            ...prev,
            [name]: name === "pessoas" ? Number(value) : value,
        }));
    };

    const validarForm = () => {
        if (!form.nome.trim()) {
            toast.error("Nome é obrigatório");
            return false;
        }
        if (!form.apartamento.trim()) {
            toast.error("Apartamento é obrigatório");
            return false;
        }
        if (
            !form.telefone.trim() ||
            form.telefone.replace(/\D/g, "").length !== 11
        ) {
            toast.error("Telefone inválido");
            return false;
        }
        if (!form.condominio.trim()) {
            toast.error("Condomínio é obrigatório");
            return false;
        }
        if (form.pessoas <= 0) {
            toast.error("Número de pessoas deve ser maior que zero");
            return false;
        }
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validarForm()) return;

        if (editingId !== null) {
            setMoradores((prev) =>
                prev.map((m) => (m.id === editingId ? { ...m, ...form } : m))
            );
            toast.success("Morador editado com sucesso");
        } else {
            setMoradores((prev) => [...prev, { id: Date.now(), ...form }]);
            toast.success("Morador criado com sucesso");
        }
        limparForm();
    };

    const handleEditar = (morador: Morador) => {
        setForm({
            nome: morador.nome,
            apartamento: morador.apartamento,
            telefone: morador.telefone,
            pessoas: morador.pessoas,
            condominio: morador.condominio,
        });
        setEditingId(morador.id);
    };

    const handleDeletar = (id: number) => {
        if (confirm("Deseja realmente deletar este morador?")) {
            setMoradores((prev) => prev.filter((m) => m.id !== id));
            toast.success("Morador deletado");
            if (editingId === id) limparForm();
        }
    };

    return (
        <div className="h-screen w-full bg-gray-900 text-white p-4 font-sans flex gap-6">
            <ToastContainer position="top-center" autoClose={2000} />
            {/* Formulário - ocupa 35% */}
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 bg-gray-800 p-4 rounded-md w-[35%] min-w-[320px]"
            >
                <h2 className="text-xl font-bold mb-2 text-center">
                    Adicionar / Editar Morador
                </h2>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={form.nome}
                    onChange={handleChange}
                    className="rounded bg-gray-700 border border-gray-600 px-3 py-2 focus:outline-none"
                    autoComplete="off"
                />
                <input
                    type="text"
                    name="apartamento"
                    placeholder="Apartamento"
                    value={form.apartamento}
                    onChange={handleChange}
                    className="rounded bg-gray-700 border border-gray-600 px-3 py-2 focus:outline-none"
                    autoComplete="off"
                />
                <input
                    type="text"
                    name="telefone"
                    placeholder="Telefone (31) 99999-9999"
                    value={form.telefone}
                    onChange={handleChange}
                    maxLength={15}
                    className="rounded bg-gray-700 border border-gray-600 px-3 py-2 focus:outline-none"
                    autoComplete="off"
                />
                <input
                    type="number"
                    name="pessoas"
                    placeholder="Número de pessoas"
                    value={form.pessoas}
                    min={1}
                    onChange={handleChange}
                    className="rounded bg-gray-700 border border-gray-600 px-3 py-2 focus:outline-none"
                />
                <input
                    type="text"
                    name="condominio"
                    placeholder="Condomínio"
                    value={form.condominio}
                    onChange={handleChange}
                    className="rounded bg-gray-700 border border-gray-600 px-3 py-2 focus:outline-none"
                    autoComplete="off"
                />
                <div className="flex gap-3 justify-center mt-2">
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded font-semibold transition"
                    >
                        {editingId !== null ? "Salvar" : "Adicionar"}
                    </button>
                    {editingId !== null && (
                        <button
                            type="button"
                            onClick={limparForm}
                            className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded font-semibold transition"
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            </form>

            {/* Tabela - ocupa 65% */}
            <div className="flex-1 overflow-auto rounded-md bg-gray-800 p-4">
                <h2 className="text-xl font-bold mb-4 text-center">
                    Lista de Moradores
                </h2>
                <table className="min-w-full border-collapse text-left text-sm sm:text-base">
                    <thead>
                        <tr className="bg-gray-700 text-gray-300">
                            <th className="p-2 border border-gray-600">Nome</th>
                            <th className="p-2 border border-gray-600 w-24">
                                Apartamento
                            </th>
                            <th className="p-2 border border-gray-600 w-36">
                                Telefone
                            </th>
                            <th className="p-2 border border-gray-600 w-20 text-center">
                                Pessoas
                            </th>
                            <th className="p-2 border border-gray-600 w-32">
                                Condomínio
                            </th>
                            <th className="p-2 border border-gray-600 w-36 text-center">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {moradores.map((morador) => (
                            <tr
                                key={morador.id}
                                className="hover:bg-gray-700 transition"
                            >
                                <td className="p-2 border border-gray-700">
                                    {morador.nome}
                                </td>
                                <td className="p-2 border border-gray-700">
                                    {morador.apartamento}
                                </td>
                                <td className="p-2 border border-gray-700">
                                    {morador.telefone}
                                </td>
                                <td className="p-2 border border-gray-700 text-center">
                                    {morador.pessoas}
                                </td>
                                <td className="p-2 border border-gray-700">
                                    {morador.condominio}
                                </td>
                                <td className="p-2 border border-gray-700 flex justify-center gap-2">
                                    <button
                                        onClick={() => handleEditar(morador)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 rounded text-sm"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDeletar(morador.id)
                                        }
                                        className="bg-red-600 hover:bg-red-700 text-white px-3 rounded text-sm"
                                    >
                                        Deletar
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {moradores.length === 0 && (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="p-4 text-center text-gray-500"
                                >
                                    Nenhum morador cadastrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
