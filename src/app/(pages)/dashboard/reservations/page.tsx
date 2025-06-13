"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Reservation {
    id: number;
    spaceId: number;
    spaceName: string;
    date: string;
    time: string;
    name: string;
    apartment: string;
}

const spaces = [
    { id: 1, name: "Salão de Festas" },
    { id: 2, name: "Churrasqueira" },
    { id: 3, name: "Quadra Poliesportiva" },
];

export default function SpaceReservation() {
    const [selectedSpace, setSelectedSpace] = useState(spaces[0].id);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [filterDate, setFilterDate] = useState("");

    const handleReserve = () => {
        if (!date || !time) {
            toast.warn("Preencha a data e o horário!");
            return;
        }

        const conflict = reservations.find(
            (r) =>
                r.spaceId === selectedSpace &&
                r.date === date &&
                r.time === time
        );

        if (conflict) {
            toast.error("Espaço já está ocupado nesse horário!");
            return;
        }

        const spaceName =
            spaces.find((s) => s.id === selectedSpace)?.name || "";

        const newReservation: Reservation = {
            id: Date.now(),
            spaceId: selectedSpace,
            spaceName,
            date,
            time,
            name: "João da Silva", // Simulado
            apartment: "302B", // Simulado
        };

        setReservations([...reservations, newReservation]);
        setDate("");
        setTime("");
        toast.success("Reserva realizada com sucesso!");
    };

    const filteredReservations = reservations.filter(
        (res) => res.date === filterDate
    );

    return (
        <div className="w-full mx-auto bg-gray-900 text-white rounded-xl shadow-lg p-8 flex flex-row gap-8 items-start">
            <ToastContainer />

            {/* Formulário */}
            <div className="w-1/2 space-y-5">
                <h2 className="text-2xl font-bold">Reserva de Espaços</h2>

                <div>
                    <label className="block text-sm mb-1">Espaço</label>
                    <select
                        value={selectedSpace}
                        onChange={(e) =>
                            setSelectedSpace(Number(e.target.value))
                        }
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
                    >
                        {spaces.map((space) => (
                            <option key={space.id} value={space.id}>
                                {space.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm mb-1">Data</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1">Horário</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
                    />
                </div>

                <button
                    onClick={handleReserve}
                    className="w-full bg-green-600 hover:bg-green-700 transition text-white py-2 px-4 rounded"
                >
                    Reservar
                </button>
            </div>

            {/* Reservas e Filtro */}
            <div className="w-1/2 space-y-6">
                <div>
                    <h3 className="text-xl font-semibold mb-2">
                        Reservas Realizadas
                    </h3>
                    {reservations.length > 0 ? (
                        <ul className="space-y-2">
                            {reservations.map((res) => (
                                <li
                                    key={res.id}
                                    className="p-3 bg-gray-800 rounded text-sm"
                                >
                                    <strong>{res.spaceName}</strong> –{" "}
                                    {res.date} às {res.time}
                                    <br />
                                    <span className="text-gray-300">
                                        Morador: {res.name} • Apto:{" "}
                                        {res.apartment}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-400 text-sm">
                            Nenhuma reserva registrada.
                        </p>
                    )}
                </div>

                <div className="pt-4 border-t border-gray-700">
                    <h3 className="text-lg font-semibold mb-2">
                        Espaços Ocupados em uma Data
                    </h3>
                    <input
                        type="date"
                        value={filterDate}
                        onChange={(e) => setFilterDate(e.target.value)}
                        className="w-full p-2 mb-3 bg-gray-800 border border-gray-700 rounded"
                    />
                    {filterDate && (
                        <>
                            {filteredReservations.length > 0 ? (
                                <ul className="space-y-2">
                                    {filteredReservations.map((res) => (
                                        <li
                                            key={res.id}
                                            className="p-2 bg-gray-800 rounded text-sm"
                                        >
                                            <strong>{res.spaceName}</strong> às{" "}
                                            {res.time}
                                            <br />
                                            <span className="text-gray-300">
                                                Morador: {res.name} • Apto:{" "}
                                                {res.apartment}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-400 text-sm">
                                    Nenhuma reserva nessa data.
                                </p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
