// src/components/services/ServiceHighlight.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '../../lib/constants';

const benefitsList = {
    efficiency: [
        'Redução de 40% no tempo de resposta',
        'Automação de processos repetitivos',
        'Integração entre departamentos',
        'Comunicação mais eficiente'
    ],
    quality: [
        'Padrões internacionais de qualidade',
        'Monitoramento em tempo real',
        'Feedback contínuo',
        'Melhoria constante'
    ],
    cost: [
        'Redução de custos operacionais',
        'Melhor alocação de recursos',
        'Previsibilidade de gastos',
        'ROI mensurável'
    ],
    scale: [
        'Escalabilidade sob demanda',
        'Flexibilidade operacional',
        'Adaptação rápida',
        'Crescimento sustentável'
    ]
};

const ServiceHighlight = () => {
    const [activeService, setActiveService] = useState(services[0]);
    const [activeBenefit, setActiveBenefit] = useState('efficiency');

    const benefits = {
        efficiency: 'Eficiência Operacional',
        quality: 'Qualidade Superior',
        cost: 'Redução de Custos',
        scale: 'Escalabilidade'
    };

    return (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Service Selection */}
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Benefícios que Transformam seu Negócio
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Descubra como cada serviço da Align pode impactar positivamente
                    sua empresa em diferentes aspectos
                </p>

                {/* Service Tabs */}
                <div className="space-y-4 mb-8">
                    {services.map((service) => {
                        const Icon = service.icon;
                        const isActive = service.id === activeService.id;

                        return (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(service)}
                                className={`w-full flex items-center p-4 rounded-lg transition-all ${isActive
                                        ? 'bg-primary-50 border-primary-200 shadow-sm'
                                        : 'bg-white hover:bg-gray-50'
                                    }`}
                            >
                                <div className={`p-2 rounded-lg ${isActive ? 'bg-primary-100' : 'bg-gray-100'
                                    }`}>
                                    <Icon className={`h-6 w-6 ${isActive ? 'text-primary-600' : 'text-gray-600'
                                        }`} />
                                </div>
                                <span className={`ml-4 font-medium ${isActive ? 'text-primary-900' : 'text-gray-700'
                                    }`}>
                                    {service.title}
                                </span>
                                {isActive && (
                                    <ArrowRight className="ml-auto h-5 w-5 text-primary-600" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Right Column - Benefits Display */}
            <div className="bg-white rounded-xl shadow-sm p-8">
                {/* Benefit Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {Object.entries(benefits).map(([key, label]) => (
                        <button
                            key={key}
                            onClick={() => setActiveBenefit(key)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeBenefit === key
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Active Benefits List */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeBenefit}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="space-y-4">
                            {benefitsList[activeBenefit].map((benefit, index) => (
                                <motion.li
                                    key={benefit}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start"
                                >
                                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mr-3" />
                                    <span className="text-gray-600">{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </AnimatePresence>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200">
                    <div>
                        <div className="text-3xl font-bold text-primary-600 mb-2">
                            +45%
                        </div>
                        <p className="text-sm text-gray-600">
                            Aumento médio em produtividade
                        </p>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary-600 mb-2">
                            -30%
                        </div>
                        <p className="text-sm text-gray-600">
                            Redução em custos operacionais
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHighlight;