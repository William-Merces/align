// src/components/sections/TrustedBy.jsx
import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
    {
        name: 'ISO 27001',
        logo: '/certifications/iso27001.svg',
        description: 'Certificação em Segurança da Informação'
    },
    {
        name: 'LGPD Compliant',
        logo: '/certifications/lgpd.svg',
        description: 'Em conformidade com a Lei Geral de Proteção de Dados'
    },
    {
        name: 'SOC 2',
        logo: '/certifications/soc2.svg',
        description: 'Service Organization Control 2'
    }
];

const associations = [
    {
        name: 'ABES',
        logo: '/associations/abes.svg',
        description: 'Associação Brasileira das Empresas de Software'
    },
    {
        name: 'Brasscom',
        logo: '/associations/brasscom.svg',
        description: 'Associação Brasileira das Empresas de Tecnologia da Informação e Comunicação'
    }
];

const TrustedBy = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container-custom">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Título da Seção */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Excelência Reconhecida
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Certificações */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">
                                Certificações
                            </h3>
                            <div className="grid grid-cols-3 gap-6">
                                {certifications.map((cert, index) => (
                                    <motion.div
                                        key={cert.name}
                                        variants={itemVariants}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
                                            <img
                                                src={cert.logo}
                                                alt={cert.name}
                                                className="w-12 h-12 object-contain"
                                            />
                                        </div>
                                        <p className="text-sm font-medium text-gray-900 text-center">
                                            {cert.name}
                                        </p>
                                        <p className="text-xs text-gray-600 text-center mt-1">
                                            {cert.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Associações */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">
                                Associações
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                {associations.map((assoc, index) => (
                                    <motion.div
                                        key={assoc.name}
                                        variants={itemVariants}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
                                            <img
                                                src={assoc.logo}
                                                alt={assoc.name}
                                                className="w-12 h-12 object-contain"
                                            />
                                        </div>
                                        <p className="text-sm font-medium text-gray-900 text-center">
                                            {assoc.name}
                                        </p>
                                        <p className="text-xs text-gray-600 text-center mt-1">
                                            {assoc.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Métricas */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <motion.div
                            variants={itemVariants}
                            className="text-center bg-white rounded-lg shadow-sm p-6"
                        >
                            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                            <p className="text-sm text-gray-600">Projetos Entregues</p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="text-center bg-white rounded-lg shadow-sm p-6"
                        >
                            <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                            <p className="text-sm text-gray-600">Países Atendidos</p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="text-center bg-white rounded-lg shadow-sm p-6"
                        >
                            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                            <p className="text-sm text-gray-600">Satisfação dos Clientes</p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="text-center bg-white rounded-lg shadow-sm p-6"
                        >
                            <div className="text-3xl font-bold text-primary-600 mb-2">4h</div>
                            <p className="text-sm text-gray-600">Tempo Médio de Resposta</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TrustedBy;