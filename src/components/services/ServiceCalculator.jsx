// src/components/services/ServiceCalculator.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Users, BarChart } from 'lucide-react';

const ServiceCalculator = () => {
    const [formData, setFormData] = useState({
        teamSize: 10,
        avgSalary: 5000,
        workHours: 160,
        inefficiencyRate: 20
    });

    const [results, setResults] = useState({
        monthlySavings: 0,
        yearlySavings: 0,
        productivityGain: 0,
        roi: 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: parseFloat(value) || 0
        }));
    };

    useEffect(() => {
        // Cálculo dos resultados
        const calculateResults = () => {
            const { teamSize, avgSalary, workHours, inefficiencyRate } = formData;

            // Custo atual por hora
            const hourlyRate = avgSalary / workHours;

            // Horas perdidas por mês devido à ineficiência
            const wastedHours = workHours * (inefficiencyRate / 100);

            // Custo mensal das ineficiências
            const monthlyWaste = wastedHours * hourlyRate * teamSize;

            // Economia mensal estimada (considerando 60% de melhoria)
            const monthlySavings = monthlyWaste * 0.6;

            // Economia anual
            const yearlySavings = monthlySavings * 12;

            // Ganho de produtividade
            const productivityGain = inefficiencyRate * 0.6;

            // ROI (considerando investimento médio mensal)
            const averageMonthlyInvestment = teamSize * 500; // Valor exemplo
            const roi = ((monthlySavings - averageMonthlyInvestment) / averageMonthlyInvestment) * 100;

            setResults({
                monthlySavings,
                yearlySavings,
                productivityGain,
                roi
            });
        };

        calculateResults();
    }, [formData]);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Calculadora de Economia
                </h2>
                <p className="text-lg text-gray-600">
                    Descubra quanto sua empresa pode economizar ao otimizar a comunicação
                    e processos com a Align
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Form */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tamanho da Equipe
                        </label>
                        <input
                            type="number"
                            name="teamSize"
                            value={formData.teamSize}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Salário Médio (R$)
                        </label>
                        <input
                            type="number"
                            name="avgSalary"
                            value={formData.avgSalary}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Horas Trabalhadas por Mês
                        </label>
                        <input
                            type="number"
                            name="workHours"
                            value={formData.workHours}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Taxa de Ineficiência Atual (%)
                        </label>
                        <input
                            type="number"
                            name="inefficiencyRate"
                            value={formData.inefficiencyRate}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                    </div>
                </div>

                {/* Results */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        Resultados Estimados
                    </h3>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-start gap-4"
                        >
                            <div className="rounded-full p-2 bg-green-100">
                                <DollarSign className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Economia Mensal Estimada</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    R$ {results.monthlySavings.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-start gap-4"
                        >
                            <div className="rounded-full p-2 bg-blue-100">
                                <Clock className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Economia Anual Projetada</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    R$ {results.yearlySavings.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-start gap-4"
                        >
                            <div className="rounded-full p-2 bg-purple-100">
                                <Users className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Ganho de Produtividade</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {results.productivityGain.toFixed(1)}%
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-start gap-4"
                        >
                            <div className="rounded-full p-2 bg-orange-100">
                                <BarChart className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">ROI Estimado</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {results.roi.toFixed(1)}%
                                </p>
                            </div>
                        </motion.div>

                        <div className="pt-6 mt-6 border-t border-gray-200">
                            <button className="w-full btn btn-primary">
                                Receber Análise Detalhada
                            </button>
                            <p className="text-sm text-gray-500 text-center mt-4">
                                Receba um relatório completo com todas as projeções e possibilidades
                                de economia para sua empresa
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 text-center text-sm text-gray-500">
                * Os resultados são estimativas baseadas nos dados fornecidos e podem variar.
            </div>
        </div>
    );
};

export default ServiceCalculator;
