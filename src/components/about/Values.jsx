// src/components/about/Values.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    Star,
    Heart,
    Lightbulb,
    Gem,
    Users,
    Globe
} from 'lucide-react';

const values = [
    {
        icon: Star,
        color: 'bg-yellow-500',
        title: 'Excelência',
        description: 'Buscamos a excelência em tudo o que fazemos, superando expectativas e entregando resultados excepcionais.'
    },
    {
        icon: Heart,
        color: 'bg-red-500',
        title: 'Compromisso',
        description: 'Comprometidos com o sucesso dos nossos clientes, trabalhando em parceria para alcançar objetivos comuns.'
    },
    {
        icon: Lightbulb,
        color: 'bg-purple-500',
        title: 'Inovação',
        description: 'Constantemente buscando novas soluções e tecnologias para oferecer o melhor para nossos clientes.'
    },
    {
        icon: Gem,
        color: 'bg-blue-500',
        title: 'Qualidade',
        description: 'Mantemos os mais altos padrões de qualidade em nossos serviços e processos.'
    },
    {
        icon: Users,
        color: 'bg-green-500',
        title: 'Colaboração',
        description: 'Acreditamos no poder do trabalho em equipe e da sinergia para alcançar resultados extraordinários.'
    },
    {
        icon: Globe,
        color: 'bg-indigo-500',
        title: 'Responsabilidade',
        description: 'Comprometidos com práticas éticas e sustentáveis em todas as nossas operações.'
    }
];

const Values = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Nossos Valores
                    </h2>
                    <p className="text-lg text-gray-600">
                        Os princípios que guiam nossas ações e decisões todos os dias
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center mb-4">
                                    <div className={`w-12 h-12 rounded-lg ${value.color} bg-opacity-10 flex items-center justify-center mr-4`}>
                                        <Icon className={`h-6 w-6 ${value.color} text-opacity-90`} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {value.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Values;