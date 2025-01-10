// src/components/sections/Comparison.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisonData = [
    {
        category: 'Processo de Integração',
        traditional: {
            title: 'Modelo Tradicional',
            value: 'Processo lento e burocrático',
            hasFeature: false
        },
        align: {
            title: 'Modelo Align',
            value: 'Onboarding rápido e eficiente',
            hasFeature: true
        }
    },
    {
        category: 'Flexibilidade',
        traditional: {
            value: 'Contratos longos e rígidos',
            hasFeature: false
        },
        align: {
            value: 'Flexibilidade para ajustar conforme necessidade',
            hasFeature: true
        }
    },
    {
        category: 'Gestão de Equipe',
        traditional: {
            value: 'Pouco controle sobre a equipe',
            hasFeature: false
        },
        align: {
            value: 'Controle total sobre a equipe e processos',
            hasFeature: true
        }
    },
    {
        category: 'Custos',
        traditional: {
            value: 'Custos fixos altos e imprevisíveis',
            hasFeature: false
        },
        align: {
            value: 'Custos transparentes e previsíveis',
            hasFeature: true
        }
    },
    {
        category: 'Suporte',
        traditional: {
            value: 'Suporte limitado em horário comercial',
            hasFeature: false
        },
        align: {
            value: 'Suporte dedicado 24/7',
            hasFeature: true
        }
    },
    {
        category: 'Escalabilidade',
        traditional: {
            value: 'Processo complexo de expansão',
            hasFeature: false
        },
        align: {
            value: 'Escalabilidade rápida e sem complicações',
            hasFeature: true
        }
    }
];

const ComparisonRow = ({ item, isEven }) => (
    <div className={`grid grid-cols-3 ${isEven ? 'bg-gray-50' : 'bg-white'} transition-colors duration-200`}>
        {/* Category */}
        <div className="p-4 border-r border-gray-200">
            <p className="font-medium text-gray-900">{item.category}</p>
        </div>

        {/* Traditional Model */}
        <div className="p-4 border-r border-gray-200">
            <div className="flex items-center">
                <X className="h-5 w-5 text-red-500 flex-shrink-0 mr-2" />
                <p className="text-gray-600">{item.traditional.value}</p>
            </div>
        </div>

        {/* Align Model */}
        <div className="p-4">
            <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                <p className="text-gray-900 font-medium">{item.align.value}</p>
            </div>
        </div>
    </div>
);

const Comparison = () => {
    const [hoveredRow, setHoveredRow] = useState(null);

    return (
        <section className="section bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        The Align Difference
                    </h2>
                    <p className="text-lg text-gray-600">
                        Compare e descubra por que empresas estão escolhendo o modelo Align
                        para suas necessidades de comunicação e operação
                    </p>
                </div>

                {/* Comparison Table */}
                <motion.div
                    className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {/* Header Row */}
                    <div className="grid grid-cols-3 bg-gray-900 text-white">
                        <div className="p-4 border-r border-gray-700">
                            <p className="font-semibold">Característica</p>
                        </div>
                        <div className="p-4 border-r border-gray-700">
                            <p className="font-semibold">Modelo Tradicional</p>
                        </div>
                        <div className="p-4">
                            <p className="font-semibold">Modelo Align</p>
                        </div>
                    </div>

                    {/* Comparison Rows */}
                    {comparisonData.map((item, index) => (
                        <motion.div
                            key={index}
                            onHoverStart={() => setHoveredRow(index)}
                            onHoverEnd={() => setHoveredRow(null)}
                            animate={{
                                backgroundColor: hoveredRow === index ? 'rgba(59, 130, 246, 0.05)' : 'transparent'
                            }}
                        >
                            <ComparisonRow item={item} isEven={index % 2 === 0} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Benefits */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Implementação Rápida</h3>
                        <p className="text-gray-600">Início de operação em questão de dias, não meses</p>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Garantia de Qualidade</h3>
                        <p className="text-gray-600">Processos rigorosos de controle e monitoramento</p>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">ROI Comprovado</h3>
                        <p className="text-gray-600">Economia média de 40% em custos operacionais</p>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <a href="/contact" className="btn btn-primary">
                        Conheça Nossa Metodologia
                    </a>
                    <p className="mt-4 text-sm text-gray-600">
                        Agende uma demonstração personalizada para sua empresa
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Comparison;