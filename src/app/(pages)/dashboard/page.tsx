"use client";
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

// Dados simulados
const condominios = [
    { id: 1, nome: "Jardim das Flores", apartamentos: 150 },
    { id: 2, nome: "Vila Verde", apartamentos: 90 },
    { id: 3, nome: "Bosque Azul", apartamentos: 210 },
    { id: 4, nome: "Solar do Lago", apartamentos: 120 },
];

const moradores = [
    { id: 1, nome: "João Silva", condominioId: 1 },
    { id: 2, nome: "Maria Souza", condominioId: 1 },
    { id: 3, nome: "Carlos Lima", condominioId: 2 },
    { id: 4, nome: "Ana Paula", condominioId: 3 },
    { id: 5, nome: "Pedro Santos", condominioId: 3 },
    { id: 6, nome: "Fernanda Costa", condominioId: 4 },
    { id: 7, nome: "Lucas Rocha", condominioId: 4 },
    { id: 8, nome: "Beatriz Melo", condominioId: 4 },
    { id: 9, nome: "Rafael Almeida", condominioId: 1 },
    { id: 10, nome: "Luciana Pereira", condominioId: 2 },
];

const contas = [
    { id: 1, condominioId: 1, tipo: "Gás", pago: true },
    { id: 2, condominioId: 1, tipo: "Energia", pago: false },
    { id: 3, condominioId: 2, tipo: "Água", pago: true },
    { id: 4, condominioId: 2, tipo: "Taxa", pago: true },
    { id: 5, condominioId: 3, tipo: "Gás", pago: false },
    { id: 6, condominioId: 3, tipo: "Energia", pago: false },
    { id: 7, condominioId: 4, tipo: "Água", pago: true },
    { id: 8, condominioId: 4, tipo: "Taxa", pago: true },
    { id: 9, condominioId: 1, tipo: "Água", pago: false },
    { id: 10, condominioId: 3, tipo: "Taxa", pago: true },
];

const reservas = [
    { id: 1, espaco: "Salão de Festas", ocupado: true },
    { id: 2, espaco: "Churrasqueira", ocupado: false },
    { id: 3, espaco: "Quadra", ocupado: true },
    { id: 4, espaco: "Salão de Jogos", ocupado: false },
    { id: 5, espaco: "Academia", ocupado: true },
    { id: 6, espaco: "Piscina", ocupado: false },
];

// --- Preparação dos dados ---

// Moradores e apartamentos por condomínio
const moradoresPorCondominio = condominios.map((cond) => ({
    nome: cond.nome,
    apartamentos: cond.apartamentos,
    moradores: moradores.filter((m) => m.condominioId === cond.id).length,
}));

// Contas por tipo e status
const tiposConta = ["Gás", "Energia", "Água", "Taxa"];

const contasPorTipoEStatus = tiposConta.map((tipo) => {
    const pagos = contas.filter((c) => c.tipo === tipo && c.pago).length;
    const naoPagos = contas.filter((c) => c.tipo === tipo && !c.pago).length;
    return { tipo, pagos, naoPagos };
});

// Reservas ocupadas e disponíveis
const totalReservas = reservas.length;
const ocupadasCount = reservas.filter((r) => r.ocupado).length;
const disponiveisCount = totalReservas - ocupadasCount;

// Moradores por condomínio para PieChart
const moradoresDistribuicao = moradoresPorCondominio.map(
    ({ nome, moradores }) => ({
        name: nome,
        value: moradores,
    })
);

// Contas pagas e não pagas por condomínio
const contasPorCondominio = condominios.map((cond) => {
    const pagos = contas.filter(
        (c) => c.condominioId === cond.id && c.pago
    ).length;
    const naoPagos = contas.filter(
        (c) => c.condominioId === cond.id && !c.pago
    ).length;
    return { nome: cond.nome, pagos, naoPagos };
});

// Cores para gráficos
const COLORS = ["#34C759", "#FF3B30", "#1E90FF", "#FFD700", "#8A2BE2"];
const green = "#34C759";
const red = "#FF3B30";
const blue = "#1E90FF";

// Custom Tooltip para barras
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-700 p-2 rounded-md shadow-lg text-sm text-white">
                <p>
                    <strong>{label}</strong>
                </p>
                {payload.map((entry: any, idx: number) => (
                    <p key={`item-${idx}`} style={{ color: entry.color }}>
                        {entry.name}: {entry.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

export default function ResumoDashboard() {
    return (
        <div className="min-h-screen w-full bg-gray-900 text-white p-8 font-sans overflow-auto">
            <h1 className="text-4xl font-extrabold text-center mb-10 tracking-wide select-none">
                Dashboard Resumo Condomínios
            </h1>

            <div
                className="
          grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
          gap-8 max-w-[1400px] mx-auto
          "
            >
                {/* Moradores x Apartamentos */}
                <section className="bg-gray-800 rounded-lg p-6 shadow-md flex flex-col">
                    <h2 className="text-xl font-semibold mb-4 text-center">
                        Moradores x Apartamentos
                    </h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart
                            data={moradoresPorCondominio}
                            margin={{ bottom: 60 }}
                        >
                            <XAxis
                                dataKey="nome"
                                angle={-35}
                                textAnchor="end"
                                interval={0}
                                height={60}
                                tick={{ fontSize: 13 }}
                                stroke="#bbb"
                            />
                            <YAxis allowDecimals={false} stroke="#bbb" />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend verticalAlign="top" height={36} />
                            <Bar
                                dataKey="moradores"
                                name="Moradores"
                                fill={green}
                                barSize={20}
                                radius={[5, 5, 0, 0]}
                            />
                            <Bar
                                dataKey="apartamentos"
                                name="Apartamentos"
                                fill={blue}
                                barSize={20}
                                radius={[5, 5, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </section>

                {/* Contas pagas x não pagas por tipo */}
                <section className="bg-gray-800 rounded-lg p-6 shadow-md flex flex-col">
                    <h2 className="text-xl font-semibold mb-4 text-center">
                        Contas Pagas x Não Pagas
                    </h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart
                            data={contasPorTipoEStatus}
                            margin={{ bottom: 60 }}
                        >
                            <XAxis
                                dataKey="tipo"
                                angle={-30}
                                textAnchor="end"
                                interval={0}
                                height={60}
                                tick={{ fontSize: 13 }}
                                stroke="#bbb"
                            />
                            <YAxis allowDecimals={false} stroke="#bbb" />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend verticalAlign="top" height={36} />
                            <Bar
                                dataKey="pagos"
                                name="Pagos"
                                fill={green}
                                barSize={20}
                                radius={[5, 5, 0, 0]}
                            />
                            <Bar
                                dataKey="naoPagos"
                                name="Não Pagos"
                                fill={red}
                                barSize={20}
                                radius={[5, 5, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </section>

                {/* Reservas Ocupadas x Disponíveis (Pie) */}
                <section className="bg-gray-800 rounded-lg p-6 shadow-md flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-6 text-center">
                        Reservas Ocupadas x Disponíveis
                    </h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={[
                                    { name: "Ocupadas", value: ocupadasCount },
                                    {
                                        name: "Disponíveis",
                                        value: disponiveisCount,
                                    },
                                ]}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={90}
                                fill={green}
                                label
                                labelLine={false}
                                animationDuration={800}
                            >
                                <Cell fill={red} />
                                <Cell fill={green} />
                            </Pie>
                            <Tooltip
                                formatter={(value: number, name: string) => [
                                    `${value}`,
                                    name,
                                ]}
                                contentStyle={{
                                    backgroundColor: "#222",
                                    borderRadius: 6,
                                    border: "none",
                                }}
                                itemStyle={{ color: "white" }}
                            />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </section>

                {/* Moradores por Condomínio (Pie) */}
                <section className="bg-gray-800 rounded-lg p-6 shadow-md flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-6 text-center">
                        Distribuição de Moradores
                    </h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={moradoresDistribuicao}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={90}
                                fill={blue}
                                label={({ name, percent }) =>
                                    `${name}: ${(percent * 100).toFixed(0)}%`
                                }
                                animationDuration={800}
                            >
                                {moradoresDistribuicao.map((_, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value: number, name: string) => [
                                    `${value} moradores`,
                                    name,
                                ]}
                                contentStyle={{
                                    backgroundColor: "#222",
                                    borderRadius: 6,
                                    border: "none",
                                }}
                                itemStyle={{ color: "white" }}
                            />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </section>

                {/* Contas pagas x não pagas por condomínio */}
                <section className="bg-gray-800 rounded-lg p-6 shadow-md flex flex-col">
                    <h2 className="text-xl font-semibold mb-4 text-center">
                        Contas Pagas x Não Pagas por Condomínio
                    </h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart
                            data={contasPorCondominio}
                            margin={{ bottom: 60 }}
                        >
                            <XAxis
                                dataKey="nome"
                                angle={-35}
                                textAnchor="end"
                                interval={0}
                                height={60}
                                tick={{ fontSize: 13 }}
                                stroke="#bbb"
                            />
                            <YAxis allowDecimals={false} stroke="#bbb" />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend verticalAlign="top" height={36} />
                            <Bar
                                dataKey="pagos"
                                name="Pagos"
                                fill={green}
                                barSize={20}
                                radius={[5, 5, 0, 0]}
                            />
                            <Bar
                                dataKey="naoPagos"
                                name="Não Pagos"
                                fill={red}
                                barSize={20}
                                radius={[5, 5, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </section>
            </div>

            {/* Resumo numérico final */}
            <footer className="max-w-[1400px] mx-auto mt-12 bg-gray-800 rounded-lg p-8 shadow-md flex flex-wrap justify-center gap-12 text-center">
                <div className="min-w-[120px]">
                    <span className="block text-5xl font-extrabold text-green-400">
                        {condominios.length}
                    </span>
                    <span className="text-gray-400 uppercase font-semibold tracking-wide">
                        Condomínios
                    </span>
                </div>
                <div className="min-w-[120px]">
                    <span className="block text-5xl font-extrabold text-blue-400">
                        {condominios.reduce(
                            (acc, c) => acc + c.apartamentos,
                            0
                        )}
                    </span>
                    <span className="text-gray-400 uppercase font-semibold tracking-wide">
                        Apartamentos
                    </span>
                </div>
                <div className="min-w-[120px]">
                    <span className="block text-5xl font-extrabold text-green-400">
                        {moradores.length}
                    </span>
                    <span className="text-gray-400 uppercase font-semibold tracking-wide">
                        Moradores
                    </span>
                </div>
                <div className="min-w-[120px]">
                    <span className="block text-5xl font-extrabold text-red-400">
                        {contas.length}
                    </span>
                    <span className="text-gray-400 uppercase font-semibold tracking-wide">
                        Contas
                    </span>
                </div>
                <div className="min-w-[120px]">
                    <span className="block text-5xl font-extrabold text-green-400">
                        {reservas.length}
                    </span>
                    <span className="text-gray-400 uppercase font-semibold tracking-wide">
                        Reservas
                    </span>
                </div>
            </footer>
        </div>
    );
}
