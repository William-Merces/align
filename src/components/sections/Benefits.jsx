// src/components/sections/Benefits.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    MessageSquare,
    TrendingDown,
    Zap,
    Users,
    Settings,
    Globe
} from 'lucide-react';

const benefits = [
    {
        icon: MessageSquare,
        title: 'Comunicação mais eficiente',
        description: 'Reduza ruídos e aumente a clareza na comunicação entre equipes e departamentos.'
    },
    {
        icon: TrendingDown,
        title: 'Redução de custos operacionais',
        description: 'Otimize recursos e reduza gastos desnecessários com processos mais eficientes.'
    },
    {
        icon: Zap,
        title: 'Aumento de produtividade',
        description: 'Acelere entregas e melhore resultados com processos otimizados e integrados.'
    },
    {
        icon: Users,
        title: 'Maior engajamento',
        description: 'Promova melhor colaboração e motivação entre as equipes com comunicação clara.'
    },
    {
        icon: Settings,
        title: 'Processos otimizados',
        description: 'Automatize e simplifique fluxos de trabalho para maior eficiência operacional.'
    },
    {
        icon: Globe,
        title: 'Suporte multilíngue',
        description: 'Comunique-se efetivamente com equipes e clientes em diferentes idiomas e culturas.'
    }
];

const BenefitCard = ({ benefit, index }) => {
    const Icon = benefit.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
        >
            <div className="rounded-full bg-primary-50 p-4 mb-4">
                <Icon className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
            </h3>
            <p className="text-gray-600">
                {benefit.description}
            </p>
        </motion.div>
    );
};

const Benefits = () => {
    return (
        <section className="section bg-gradient-to-b from-white to-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Benefícios que Transformam seu Negócio
                    </h2>
                    <p className="text-lg text-gray-600">
                        Descubra como nossa solução integrada pode impulsionar a eficiência e
                        os resultados da sua empresa.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} benefit={benefit} index={index} />
                    ))}
                </div>

                {/* Results Preview */}
                <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        <div className="p-8 text-center">
                            <div className="text-4xl font-bold text-primary-600 mb-2">40%</div>
                            <p className="text-gray-600">Redução em tempo de resposta</p>
                        </div>
                        <div className="p-8 text-center">
                            <div className="text-4xl font-bold text-primary-600 mb-2">65%</div>
                            <p className="text-gray-600">Aumento em produtividade</p>
                        </div>
                        <div className="p-8 text-center">
                            <div className="text-4xl font-bold text-primary-600 mb-2">90%</div>
                            <p className="text-gray-600">Satisfação dos clientes</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <a href="#diagnostic" className="btn btn-primary">
                            Faça um Diagnóstico Gratuito
                        </a>
                        <p className="mt-4 text-sm text-gray-600">
                            Descubra como podemos ajudar sua empresa em menos de 5 minutos
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
