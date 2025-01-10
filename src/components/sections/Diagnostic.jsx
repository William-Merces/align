// src/components/sections/Diagnostic.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const questions = [
    {
        id: 1,
        question: 'Qual o tamanho da sua empresa?',
        options: [
            { value: 'small', label: '1-10 funcionários' },
            { value: 'medium', label: '11-50 funcionários' },
            { value: 'large', label: '51-200 funcionários' },
            { value: 'enterprise', label: '200+ funcionários' }
        ]
    },
    {
        id: 2,
        question: 'Quais são seus principais desafios de comunicação?',
        options: [
            { value: 'efficiency', label: 'Eficiência operacional' },
            { value: 'costs', label: 'Custos elevados' },
            { value: 'quality', label: 'Qualidade do serviço' },
            { value: 'scale', label: 'Dificuldade de escalar' }
        ]
    },
    {
        id: 3,
        question: 'Quais serviços mais te interessam?',
        options: [
            { value: 'development', label: 'Desenvolvimento' },
            { value: 'support', label: 'Customer Support' },
            { value: 'marketing', label: 'Marketing' },
            { value: 'management', label: 'Project Management' }
        ]
    }
];

const ResultCard = ({ title, description, icon: Icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-start">
            <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-600" />
                </div>
            </div>
            <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    </div>
);

const Diagnostic = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (questionId, answer) => {
        setAnswers({ ...answers, [questionId]: answer });
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResults(true);
        }
    };

    const resetDiagnostic = () => {
        setCurrentStep(0);
        setAnswers({});
        setShowResults(false);
    };

    return (
        <section className="section bg-gray-50" id="diagnostic">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Diagnóstico Rápido
                    </h2>
                    <p className="text-lg text-gray-600">
                        Responda algumas perguntas rápidas e descubra como podemos ajudar sua empresa
                        a otimizar a comunicação e reduzir custos
                    </p>
                </div>

                {/* Diagnostic Content */}
                <div className="max-w-2xl mx-auto">
                    {!showResults ? (
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-sm p-8"
                        >
                            {/* Progress Bar */}
                            <div className="mb-8">
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div
                                        className="h-2 bg-primary-600 rounded-full transition-all duration-300"
                                        style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Questão {currentStep + 1} de {questions.length}
                                </p>
                            </div>

                            {/* Question */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                {questions[currentStep].question}
                            </h3>

                            {/* Options */}
                            <div className="space-y-3">
                                {questions[currentStep].options.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                                        className="w-full p-4 rounded-lg border-2 border-gray-200 hover:border-primary-500 transition-colors duration-200 group text-left"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-900 group-hover:text-primary-600">
                                                {option.label}
                                            </span>
                                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-xl shadow-sm p-8">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                    Recomendações Personalizadas
                                </h3>

                                <div className="space-y-4">
                                    <ResultCard
                                        title="Otimização de Processos"
                                        description="Com base nas suas respostas, identificamos oportunidades de otimização que podem reduzir custos operacionais em até 40%."
                                        icon={Check}
                                    />
                                    <ResultCard
                                        title="Solução Integrada"
                                        description="Recomendamos uma solução que integra customer support e project management para maximizar a eficiência da sua equipe."
                                        icon={Check}
                                    />
                                    <ResultCard
                                        title="Escalabilidade"
                                        description="Nossa solução permite escalar suas operações de forma ágil e controlada, mantendo a qualidade do serviço."
                                        icon={Check}
                                    />
                                </div>

                                {/* CTAs */}
                                <div className="mt-8 space-y-4">
                                    <a
                                        href="/contact"
                                        className="block w-full btn btn-primary text-center"
                                    >
                                        Falar com um Especialista
                                    </a>
                                    <button
                                        onClick={resetDiagnostic}
                                        className="block w-full btn btn-secondary text-center"
                                    >
                                        Refazer Diagnóstico
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Bottom Text */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-600">
                        Análise gratuita e sem compromisso. Seus dados estão protegidos e não serão compartilhados.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Diagnostic;
