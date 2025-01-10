// src/components/calculators/ProductivityCalculator.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Clock,
    Calendar,
    Users,
    MessageSquare,
    FileText,
    Mail,
    Video,
    TrendingUp,
    Download,
    Printer
} from 'lucide-react';

const categories = [
    {
        id: 'meetings',
        icon: Video,
        title: 'Reuniões',
        description: 'Tempo gasto em reuniões e calls',
        questions: [
            {
                id: 'dailyMeetings',
                label: 'Número médio de reuniões por dia',
                type: 'number',
                min: 0,
                max: 20
            },
            {
                id: 'avgMeetingDuration',
                label: 'Duração média das reuniões (minutos)',
                type: 'number',
                min: 0,
                max: 240
            },
            {
                id: 'unnecessaryMeetings',
                label: '% de reuniões que poderiam ser emails',
                type: 'number',
                min: 0,
                max: 100
            }
        ]
    },
    {
        id: 'communication',
        icon: MessageSquare,
        title: 'Comunicação',
        description: 'Tempo gasto em comunicação da equipe',
        questions: [
            {
                id: 'emailsPerDay',
                label: 'Número médio de emails por dia',
                type: 'number',
                min: 0,
                max: 200
            },
            {
                id: 'timePerEmail',
                label: 'Tempo médio por email (minutos)',
                type: 'number',
                min: 0,
                max: 60
            },
            {
                id: 'chatMessages',
                label: 'Tempo diário em chats (minutos)',
                type: 'number',
                min: 0,
                max: 480
            }
        ]
    },
    {
        id: 'documentation',
        icon: FileText,
        title: 'Documentação',
        description: 'Tempo gasto com documentação',
        questions: [
            {
                id: 'docsPerWeek',
                label: 'Documentos produzidos por semana',
                type: 'number',
                min: 0,
                max: 50
            },
            {
                id: 'timePerDoc',
                label: 'Tempo médio por documento (minutos)',
                type: 'number',
                min: 0,
                max: 240
            },
            {
                id: 'revisionTime',
                label: 'Tempo em revisões (minutos/semana)',
                type: 'number',
                min: 0,
                max: 480
            }
        ]
    }
];

const ProductivityCalculator = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState(null);
    const [step, setStep] = useState(1);

    const handleAnswer = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: parseFloat(value)
        }));
    };

    const calculateResults = () => {
        // Tempo gasto em reuniões por semana
        const meetingTimePerWeek =
            (answers.dailyMeetings || 0) *
            (answers.avgMeetingDuration || 0) * 5 / 60; // Convertendo para horas

        // Tempo que poderia ser economizado em reuniões
        const meetingTimeSaved =
            meetingTimePerWeek * ((answers.unnecessaryMeetings || 0) / 100);

        // Tempo gasto em comunicação por semana
        const communicationTimePerWeek =
            ((answers.emailsPerDay || 0) * (answers.timePerEmail || 0) * 5 / 60) + // Emails
            ((answers.chatMessages || 0) * 5 / 60); // Chat

        // Tempo gasto em documentação por semana
        const documentationTimePerWeek =
            ((answers.docsPerWeek || 0) * (answers.timePerDoc || 0) / 60) + // Documentos
            ((answers.revisionTime || 0) / 60); // Revisões

        // Total de horas por semana
        const totalHoursPerWeek =
            meetingTimePerWeek +
            communicationTimePerWeek +
            documentationTimePerWeek;

        // Potencial de economia (30% em média)
        const potentialTimeSaved = totalHoursPerWeek * 0.3;

        // Economia anual (considerando 48 semanas úteis)
        const annualTimeSaved = potentialTimeSaved * 48;

        setResults({
            meetingTimePerWeek: Math.round(meetingTimePerWeek),
            meetingTimeSaved: Math.round(meetingTimeSaved),
            communicationTimePerWeek: Math.round(communicationTimePerWeek),
            documentationTimePerWeek: Math.round(documentationTimePerWeek),
            totalHoursPerWeek: Math.round(totalHoursPerWeek),
            potentialTimeSaved: Math.round(potentialTimeSaved),
            annualTimeSaved: Math.round(annualTimeSaved),
            productivityGain: Math.round((potentialTimeSaved / totalHoursPerWeek) * 100)
        });

        setStep(2);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-primary-600 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">
                    Calculadora de Produtividade
                </h2>
                <p className="text-primary-100">
                    Descubra quanto tempo sua equipe pode economizar otimizando a comunicação
                </p>
            </div>

            {/* Content */}
            <div className="p-6">
                {step === 1 ? (
                    <>
                        {/* Categories */}
                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                            {categories.map((category) => {
                                const Icon = category.icon;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`p-4 rounded-lg border-2 text-left transition-colors ${activeCategory === category.id
                                                ? 'border-primary-600 bg-primary-50'
                                                : 'border-gray-200 hover:border-primary-600'
                                            }`}
                                    >
                                        <div className="flex items-center mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                                                <Icon className="w-5 h-5 text-primary-600" />
                                            </div>
                                            <h3 className="ml-3 font-medium text-gray-900">
                                                {category.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {category.description}
                                        </p>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Questions */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                {categories.find(c => c.id === activeCategory).title}
                            </h3>
                            <div className="space-y-4">
                                {categories
                                    .find(c => c.id === activeCategory)
                                    .questions.map((question) => (
                                        <div key={question.id}>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                {question.label}
                                            </label>
                                            <input
                                                type={question.type}
                                                min={question.min}
                                                max={question.max}
                                                value={answers[question.id] || ''}
                                                onChange={(e) => handleAnswer(question.id, e.target.value)}
                                                className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-between">
                            <div className="text-sm text-gray-600">
                                * Preencha os campos para todas as categorias
                            </div>
                            <button
                                onClick={calculateResults}
                                className="btn btn-primary"
                            >
                                Calcular Produtividade
                            </button>
                        </div>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        {/* Results Summary */}
                        <div className="bg-primary-50 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Resultados da Análise
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-gray-600 mb-2">Potencial de Economia Anual</p>
                                    <div className="text-3xl font-bold text-primary-600">
                                        {results.annualTimeSaved} horas
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-600 mb-2">Ganho de Produtividade</p>
                                    <div className="text-3xl font-bold text-primary-600">
                                        {results.productivityGain}%
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Breakdown */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Meetings */}
                            <div className="bg-white rounded-lg shadow-sm p-4">
                                <div className="flex items-center mb-4">
                                    <Video className="w-5 h-5 text-primary-600" />
                                    <h4 className="ml-2 font-medium text-gray-900">Reuniões</h4>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Tempo Semanal</span>
                                        <span className="font-medium">{results.meetingTimePerWeek}h</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Potencial Economia</span>
                                        <span className="font-medium">{results.meetingTimeSaved}h</span>
                                    </div>
                                </div>
                            </div>

                            {/* Communication */}
                            <div className="bg-white rounded-lg shadow-sm p-4">
                                <div className="flex items-center mb-4">
                                    <MessageSquare className="w-5 h-5 text-primary-600" />
                                    <h4 className="ml-2 font-medium text-gray-900">Comunicação</h4>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Tempo Semanal</span>
                                        <span className="font-medium">{results.communicationTimePerWeek}h</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Potencial Economia</span>
                                        <span className="font-medium">{Math.round(results.communicationTimePerWeek * 0.3)}h</span>
                                    </div>
                                </div>
                            </div>

                            {/* Documentation */}
                            <div className="bg-white rounded-lg shadow-sm p-4">
                                <div className="flex items-center mb-4">
                                    <FileText className="w-5 h-5 text-primary-600" />
                                    <h4 className="ml-2 font-medium text-gray-900">Documentação</h4>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Tempo Semanal</span>
                                        <span className="font-medium">{results.documentationTimePerWeek}h</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Potencial Economia</span>
                                        <span className="font-medium">{Math.round(results.documentationTimePerWeek * 0.3)}h</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visualization */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                Distribuição do Tempo
                            </h4>
                            {/* Bar Chart */}
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Reuniões</span>
                                        <span>{Math.round((results.meetingTimePerWeek / results.totalHoursPerWeek) * 100)}%</span>
                                    </div>
                                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary-600"
                                            style={{
                                                width: `${(results.meetingTimePerWeek / results.totalHoursPerWeek) * 100}%`
                                            }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Comunicação</span>
                                        <span>{Math.round((results.communicationTimePerWeek / results.totalHoursPerWeek) * 100)}%</span>
                                    </div>
                                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary-600"
                                            style={{
                                                width: `${(results.communicationTimePerWeek / results.totalHoursPerWeek) * 100}%`
                                            }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Documentação</span>
                                        <span>{Math.round((results.documentationTimePerWeek / results.totalHoursPerWeek) * 100)}%</span>
                                    </div>
                                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary-600"
                                            style={{
                                                width: `${(results.documentationTimePerWeek / results.totalHoursPerWeek) * 100}%`
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recommendations */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                Recomendações para Melhorar a Produtividade
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <Video className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="font-medium text-gray-900">Otimização de Reuniões</h5>
                                        <p className="text-gray-600">
                                            Implemente agendas claras, timeboxing e substitua reuniões
                                            desnecessárias por comunicações assíncronas.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <MessageSquare className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="font-medium text-gray-900">Comunicação Eficiente</h5>
                                        <p className="text-gray-600">
                                            Centralize a comunicação, estabeleça diretrizes claras e
                                            utilize templates para comunicações frequentes.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="font-medium text-gray-900">Documentação Ágil</h5>
                                        <p className="text-gray-600">
                                            Adote ferramentas de documentação colaborativa e implemente
                                            processos de revisão mais eficientes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setStep(1)}
                                className="btn btn-secondary"
                            >
                                Recalcular
                            </button>
                            <button className="btn btn-primary">
                                <Download className="w-5 h-5 mr-2" />
                                Baixar Relatório Completo
                            </button>
                            <button
                                onClick={() => window.print()}
                                className="btn btn-secondary"
                            >
                                <Printer className="w-5 h-5 mr-2" />
                                Imprimir Resultados
                            </button>
                        </div>

                        {/* CTA */}
                        <div className="bg-primary-50 rounded-lg p-6 mt-8">
                            <div className="text-center">
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                    Quer saber mais?
                                </h4>
                                <p className="text-gray-600 mb-4">
                                    Agende uma consulta gratuita e descubra como podemos ajudar sua
                                    empresa a alcançar estes resultados.
                                </p>
                                <button className="btn btn-primary">
                                    Falar com um Especialista
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ProductivityCalculator;