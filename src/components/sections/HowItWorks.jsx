// src/components/sections/HowItWorks.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    FileText,
    Rocket,
    BarChart2
} from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: 'Análise Inicial',
        description: 'Entendemos suas necessidades específicas, avaliamos o escopo do projeto e definimos objetivos claros para sua empresa.',
        details: [
            'Entendimento das necessidades',
            'Avaliação do escopo',
            'Definição de objetivos'
        ]
    },
    {
        icon: FileText,
        title: 'Proposta Personalizada',
        description: 'Desenvolvemos uma solução sob medida, selecionando recursos e definindo a metodologia ideal para seu caso.',
        details: [
            'Seleção de recursos',
            'Definição de metodologia',
            'Cronograma inicial'
        ]
    },
    {
        icon: Rocket,
        title: 'Implementação',
        description: 'Iniciamos o processo de forma estruturada, com onboarding completo e treinamento inicial da equipe.',
        details: [
            'Onboarding',
            'Configuração',
            'Treinamento inicial'
        ]
    },
    {
        icon: BarChart2,
        title: 'Acompanhamento Contínuo',
        description: 'Fornecemos suporte dedicado, monitoramos métricas de performance e realizamos ajustes para otimização.',
        details: [
            'Suporte dedicado',
            'Métricas de performance',
            'Ajustes e otimizações'
        ]
    }
];

const Step = ({ step, index }) => {
    const Icon = step.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
        >
            {/* Connector Line */}
            {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-1/2 w-full h-0.5 bg-gray-200" />
            )}

            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Step Number */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white text-xl font-bold mb-4">
                    {index + 1}
                </div>

                {/* Icon */}
                <div className="rounded-full bg-primary-50 p-4 mb-4">
                    <Icon className="h-6 w-6 text-primary-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                </h3>
                <p className="text-gray-600 mb-4 max-w-sm">
                    {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2 text-left">
                    {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2" />
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const HowItWorks = () => {
    return (
        <section className="section bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Como Trabalhamos
                    </h2>
                    <p className="text-lg text-gray-600">
                        Um processo transparente e eficiente para garantir os melhores resultados
                        para sua empresa
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-4 gap-8 md:gap-12">
                    {steps.map((step, index) => (
                        <Step key={index} step={step} index={index} />
                    ))}
                </div>

                {/* Integration Benefits */}
                <div className="mt-16 bg-gray-50 rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                            Integração Perfeita com Seu Negócio
                        </h3>
                        <p className="text-gray-600">
                            Nossa metodologia foi desenvolvida para se adaptar perfeitamente aos
                            seus processos existentes
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                Flexibilidade
                            </h4>
                            <p className="text-gray-600">
                                Adaptamos nossa solução às suas necessidades específicas
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                Escalabilidade
                            </h4>
                            <p className="text-gray-600">
                                Crescemos junto com sua empresa, ajustando recursos conforme necessário
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                Transparência
                            </h4>
                            <p className="text-gray-600">
                                Acompanhamento claro de métricas e resultados em tempo real
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <a href="/contact" className="btn btn-primary">
                        Comece Agora
                    </a>
                    <p className="mt-4 text-sm text-gray-600">
                        Sem compromisso - Entenda como podemos ajudar sua empresa
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;