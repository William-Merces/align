// src/components/about/ProcessTimeline.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    FileText,
    Rocket,
    BarChart2,
    Users,
    MessageSquare
} from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: 'Análise Inicial',
        description: 'Entendemos suas necessidades específicas e objetivos.',
        details: [
            'Avaliação de requisitos',
            'Análise de processos atuais',
            'Identificação de oportunidades'
        ]
    },
    {
        icon: FileText,
        title: 'Proposta Personalizada',
        description: 'Desenvolvemos uma solução sob medida para seu negócio.',
        details: [
            'Definição de escopo',
            'Planejamento de recursos',
            'Cronograma detalhado'
        ]
    },
    {
        icon: Users,
        title: 'Formação da Equipe',
        description: 'Selecionamos os melhores profissionais para seu projeto.',
        details: [
            'Seleção especializada',
            'Perfis compatíveis',
            'Experiência comprovada'
        ]
    },
    {
        icon: Rocket,
        title: 'Implementação',
        description: 'Iniciamos a execução do projeto com metodologia ágil.',
        details: [
            'Onboarding estruturado',
            'Treinamento inicial',
            'Integração com equipe'
        ]
    },
    {
        icon: MessageSquare,
        title: 'Comunicação Contínua',
        description: 'Mantemos feedback constante e transparência total.',
        details: [
            'Updates regulares',
            'Reuniões de alinhamento',
            'Canais dedicados'
        ]
    },
    {
        icon: BarChart2,
        title: 'Monitoramento e Otimização',
        description: 'Acompanhamos métricas e otimizamos resultados.',
        details: [
            'KPIs personalizados',
            'Relatórios periódicos',
            'Melhorias contínuas'
        ]
    }
];

const TimelineStep = ({ step, index }) => {
    const Icon = step.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-6"
        >
            {/* Timeline Line */}
            <div className="relative flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center z-10 ${index === 0 ? 'mt-0' : ''
                    }`}>
                    <Icon className="h-6 w-6 text-primary-600" />
                </div>
                {index !== steps.length - 1 && (
                    <div className="w-px h-full bg-primary-200 absolute top-12" />
                )}
            </div>

            {/* Content */}
            <div className="pb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                    {step.description}
                </p>
                <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2" />
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const ProcessTimeline = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Como Trabalhamos
                    </h2>
                    <p className="text-lg text-gray-600">
                        Um processo estruturado e transparente para garantir os melhores resultados
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {steps.map((step, index) => (
                        <TimelineStep key={index} step={step} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <a href="/contact" className="btn btn-primary">
                            Inicie Seu Projeto
                        </a>
                        <p className="mt-4 text-sm text-gray-600">
                            Agende uma consulta gratuita e descubra como podemos ajudar
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
