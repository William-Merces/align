// src/components/calculators/ROICalculator.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    DollarSign,
    Users,
    Clock,
    TrendingUp,
    Download,
    Mail,
    Printer,
    Share2
} from 'lucide-react';

const ROICalculator = () => {
    const [inputs, setInputs] = useState({
        teamSize: 10,
        avgSalary: 5000,
        workHours: 160,
        inefficiencyRate: 20,
        communicationIssues: 15,
        meetingHours: 20,
        responseTime: 24
    });

    const [results, setResults] = useState({
        monthlyTimesSaved: 0,
        monthlyCostsSaved: 0,
        annualSavings: 0,
        productivityGain: 0,
        roi: 0,
        paybackPeriod: 0
    });

    const [activeTab, setActiveTab] = useState('calculator');
    const [showResults, setShowResults] = useState(false);

    // Calcula os resultados baseado nos inputs
    const calculateResults = () => {
        // Tempo perdido por mês (em horas)
        const wastedHours =
            (inputs.workHours * (inputs.inefficiencyRate / 100)) + // Ineficiência geral
            (inputs.meetingHours * 0.3) + // 30% das reuniões são improdutivas
            (inputs.workHours * (inputs.communicationIssues / 100)); // Problemas de comunicação

        // Custo por hora
        const hourlyRate = inputs.avgSalary / inputs.workHours;

        // Custo mensal do tempo perdido
        const monthlyCostsSaved = wastedHours * hourlyRate * inputs.teamSize * 0.6; // 60% de melhoria

        // Tempo economizado por mês
        const monthlyTimesSaved = wastedHours * 0.6; // 60% de melhoria

        // Economia anual
        const annualSavings = monthlyCostsSaved * 12;

        // Ganho de produtividade
        const productivityGain = (monthlyTimesSaved / inputs.workHours) * 100;

        // ROI (considerando investimento médio mensal)
        const monthlyInvestment = inputs.teamSize * 200; // Valor exemplo por membro da equipe
        const roi = ((monthlyCostsSaved - monthlyInvestment) / monthlyInvestment) * 100;

        // Período de payback (em meses)
        const paybackPeriod = monthlyInvestment / monthlyCostsSaved;

        setResults({
            monthlyTimesSaved: Math.round(monthlyTimesSaved),
            monthlyCostsSaved: Math.round(monthlyCostsSaved),
            annualSavings: Math.round(annualSavings),
            productivityGain: Math.round(productivityGain),
            roi: Math.round(roi),
            paybackPeriod: Math.round(paybackPeriod * 10) / 10
        });

        setShowResults(true);
    };

    // Formata valores monetários
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    // Gera PDF do relatório
    const generatePDF = () => {
        // Implementar geração de PDF
        console.log('Gerando PDF...');
    };

    // Envia relatório por email
    const sendEmail = () => {
        // Implementar envio de email
        console.log('Enviando email...');
    };

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-primary-600 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">
                    Calculadora de ROI
                </h2>
                <p className="text-primary-100">
                    Descubra quanto sua empresa pode economizar otimizando a comunicação
                </p>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
                <div className="flex">
                    <button
                        onClick={() => setActiveTab('calculator')}
                        className={`px-6 py-3 text-sm font-medium border-b-2 ${activeTab === 'calculator'
                                ? 'border-primary-600 text-primary-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                    >
                        Calculadora
                    </button>
                    <button
                        onClick={() => setActiveTab('assumptions')}
                        className={`px-6 py-3 text-sm font-medium border-b-2 ${activeTab === 'assumptions'
                                ? 'border-primary-600 text-primary-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                    >
                        Premissas
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {activeTab === 'calculator' ? (
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Input Form */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Informações da Sua Empresa
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Tamanho da Equipe
                                    </label>
                                    <input
                                        type="number"
                                        value={inputs.teamSize}
                                        onChange={(e) => setInputs({ ...inputs, teamSize: parseInt(e.target.value) || 0 })}
                                        className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Salário Médio (R$)
                                    </label>
                                    <input
                                        type="number"
                                        value={inputs.avgSalary}
                                        onChange={(e) => setInputs({ ...inputs, avgSalary: parseInt(e.target.value) || 0 })}
                                        className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Horas Trabalhadas por Mês
                                    </label>
                                    <input
                                        type="number"
                                        value={inputs.workHours}
                                        onChange={(e) => setInputs({ ...inputs, workHours: parseInt(e.target.value) || 0 })}
                                        className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Taxa de Ineficiência (%)
                                    </label>
                                    <input
                                        type="number"
                                        value={inputs.inefficiencyRate}
                                        onChange={(e) => setInputs({ ...inputs, inefficiencyRate: parseInt(e.target.value) || 0 })}
                                        className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Problemas de Comunicação (%)
                                    </label>
                                    <input
                                        type="number"
                                        value={inputs.communicationIssues}
                                        onChange={(e) => setInputs({ ...inputs, communicationIssues: parseInt(e.target.value) || 0 })}
                                        className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Horas em Reuniões por Mês
                                    </label>
                                    <input
                                        type="number"
                                        value={inputs.meetingHours}
                                        onChange={(e) => setInputs({ ...inputs, meetingHours: parseInt(e.target.value) || 0 })}
                                        className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    />
                                </div>

                                <button
                                    onClick={calculateResults}
                                    className="w-full btn btn-primary mt-6"
                                >
                                    Calcular ROI
                                </button>
                            </div>
                        </div>

                        {/* Results */}
                        <div>
                            {showResults ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                        Resultados Estimados
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="bg-green-50 rounded-lg p-4">
                                            <div className="flex items-center">
                                                <DollarSign className="h-8 w-8 text-green-600" />
                                                <div className="ml-4">
                                                    <p className="text-sm text-gray-600">Economia Anual</p>
                                                    <p className="text-2xl font-bold text-gray-900">
                                                        {formatCurrency(results.annualSavings)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <div className="flex items-center">
                                                    <Clock className="h-6 w-6 text-primary-600" />
                                                    <div className="ml-3">
                                                        <p className="text-sm text-gray-600">Tempo Economizado/Mês</p>
                                                        <p className="text-xl font-bold text-gray-900">
                                                            {results.monthlyTimesSaved}h
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <div className="flex items-center">
                                                    <TrendingUp className="h-6 w-6 text-primary-600" />
                                                    <div className="ml-3">
                                                        <p className="text-sm text-gray-600">Ganho de Produtividade</p>
                                                        <p className="text-xl font-bold text-gray-900">
                                                            {results.productivityGain}%
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-primary-50 rounded-lg p-4">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                                Retorno sobre Investimento
                                            </h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">ROI</span>
                                                    <span className="font-bold text-primary-600">
                                                        {results.roi}%
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Período de Payback</span>
                                                    <span className="font-bold text-primary-600">
                                                        {results.paybackPeriod} meses
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-wrap gap-4">
                                            <button
                                                onClick={generatePDF}
                                                className="flex items-center text-gray-600 hover:text-primary-600"
                                            >
                                                <Download className="h-5 w-5 mr-1" />
                                                PDF
                                            </button>
                                            <button
                                                onClick={() => window.print()}
                                                className="flex items-center text-gray-600 hover:text-primary-600"
                                            >
                                                <Printer className="h-5 w-5 mr-1" />
                                                Imprimir
                                            </button>
                                            <button
                                                onClick={sendEmail}
                                                className="flex items-center text-gray-600 hover:text-primary-600"
                                            >
                                                <Mail className="h-5 w-5 mr-1" />
                                                Email
                                            </button>
                                            <button className="flex items-center text-gray-600 hover:text-primary-600">
                                                <Share2 className="h-5 w-5 mr-1" />
                                                Compartilhar
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="h-full flex items-center justify-center text-center p-8">
                                    <div className="max-w-sm">
                                        <TrendingUp className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Calcule seu ROI
                                        </h3>
                                        <p className="text-gray-600">
                                            Preencha as informações ao lado para descobrir quanto sua
                                            empresa pode economizar com a Align.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="prose max-w-none">
                        <h3>Premissas do Cálculo</h3>
                        <p>
                            Nossa calculadora de ROI utiliza as seguintes premissas para estimar
                            os potenciais benefícios:
                        </p>
                        <ul>
                            <li>
                                <strong>Melhoria na Eficiência:</strong> Consideramos uma melhoria média
                                de 60% nos processos de comunicação, baseado em casos reais de clientes.
                            </li>
                            <li>
                                <strong>Tempo em Reuniões:</strong> Estimamos que 30% do tempo gasto
                                em reuniões pode ser otimizado ou eliminado com melhores práticas
                                de comunicação.
                            </li>
                            <li>
                                <strong>Problemas de Comunicação:</strong> São considerados atrasos,
                                retrabalho e mal-entendidos causados por comunicação ineficiente.
                            </li>
                            <li>
                                <strong>Custos Operacionais:</strong> O cálculo considera o custo
                                por hora baseado no salário médio e horas trabalhadas.
                            </li>
                            <li>
                                <strong>Investimento:</strong> O valor do investimento é calculado
                                com base no tamanho da equipe e um valor médio por colaborador.
                            </li>
                        </ul>

                        <h4>Metodologia de Cálculo</h4>
                        <p>
                            Nossa metodologia de cálculo é baseada em três pilares principais:
                        </p>
                        <ol>
                            <li>
                                <strong>Economia de Tempo:</strong> Calculamos o tempo economizado
                                através da redução de ineficiências e otimização de processos.
                            </li>
                            <li>
                                <strong>Redução de Custos:</strong> Convertemos o tempo economizado
                                em valor monetário baseado nos custos operacionais.
                            </li>
                            <li>
                                <strong>Ganhos de Produtividade:</strong> Consideramos o aumento
                                de produtividade resultante da melhor comunicação.
                            </li>
                        </ol>

                        <h4>Fontes dos Dados</h4>
                        <p>
                            Nossas estimativas são baseadas em:
                        </p>
                        <ul>
                            <li>Estudos de caso com clientes atuais</li>
                            <li>Pesquisas de mercado sobre comunicação empresarial</li>
                            <li>Benchmarks da indústria</li>
                            <li>Análises de consultoria especializadas</li>
                        </ul>

                        <div className="bg-yellow-50 rounded-lg p-4 mt-6">
                            <h4 className="text-yellow-800 font-medium mb-2">Observação Importante</h4>
                            <p className="text-yellow-700 text-sm">
                                Os resultados apresentados são estimativas baseadas em médias do mercado
                                e podem variar dependendo de fatores específicos da sua empresa, como
                                setor de atuação, maturidade dos processos e outros aspectos particulares.
                            </p>
                        </div>
                    </div>
                )}

                {/* Call-to-Action */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">
                                Quer saber mais?
                            </h4>
                            <p className="text-gray-600">
                                Agende uma consulta e receba uma análise detalhada para sua empresa.
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <button className="btn btn-primary">
                                Falar com Especialista
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    O que Nossos Clientes Dizem
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-gray-600 mb-4">
                            "Conseguimos reduzir em 40% o tempo gasto em comunicações redundantes
                            e aumentamos significativamente nossa produtividade."
                        </p>
                        <div className="flex items-center">
                            <div>
                                <p className="font-medium text-gray-900">João Silva</p>
                                <p className="text-sm text-gray-600">Diretor de Operações, TechCorp</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-gray-600 mb-4">
                            "O ROI foi além das nossas expectativas. Em apenas 3 meses, já vimos
                            retorno do investimento com a Align."
                        </p>
                        <div className="flex items-center">
                            <div>
                                <p className="font-medium text-gray-900">Maria Costa</p>
                                <p className="text-sm text-gray-600">COO, InnovateX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;