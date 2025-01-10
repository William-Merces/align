// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Globe,
    Target,
    ShieldCheck,
    Award,
    Zap
} from 'lucide-react';
import SEO from '../components/utils/SEO';
import TeamMember from '../components/about/TeamMember';
import Values from '../components/about/Values';
import ProcessTimeline from '../components/about/ProcessTimeline';
import TechnologyStack from '../components/about/TechnologyStack';

const About = () => {
    const stats = [
        { number: '500+', label: 'Projetos Entregues' },
        { number: '15+', label: 'Países Atendidos' },
        { number: '98%', label: 'Satisfação dos Clientes' },
        { number: '4h', label: 'Tempo Médio de Resposta' }
    ];

    const differentials = [
        {
            icon: Users,
            title: 'Equipe Especializada',
            description: 'Profissionais altamente qualificados e com experiência comprovada em suas áreas de atuação.'
        },
        {
            icon: Globe,
            title: 'Alcance Global',
            description: 'Capacidade de atender clientes em diferentes países e fusos horários, com suporte multilíngue.'
        },
        {
            icon: Target,
            title: 'Foco em Resultados',
            description: 'Metodologia orientada a objetivos e métricas claras para maximizar o retorno do seu investimento.'
        },
        {
            icon: ShieldCheck,
            title: 'Segurança e Compliance',
            description: 'Processos e infraestrutura em conformidade com os mais altos padrões de segurança e privacidade.'
        },
        {
            icon: Award,
            title: 'Excelência Reconhecida',
            description: 'Certificações e reconhecimentos que atestam a qualidade dos nossos serviços.'
        },
        {
            icon: Zap,
            title: 'Inovação Constante',
            description: 'Sempre atualizados com as últimas tecnologias e melhores práticas do mercado.'
        }
    ];

    return (
        <>
            <SEO
                title="Sobre a Align | Excelência em Comunicação Empresarial"
                description="Conheça a Align e nossa missão de transformar a comunicação empresarial com soluções inovadoras e resultados comprovados."
            />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h1
                            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Transformando a Comunicação Empresarial
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-600 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Somos uma empresa focada em oferecer soluções inovadoras que
                            impulsionam a eficiência e os resultados dos nossos clientes.
                        </motion.p>
                    </div>

                    {/* Stats Grid */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center bg-white rounded-lg shadow-sm p-6"
                            >
                                <div className="text-3xl font-bold text-primary-600 mb-2">
                                    {stat.number}
                                </div>
                                <p className="text-sm text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Nossa Missão
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Transformar a comunicação empresarial através de soluções
                                inovadoras que permitem às empresas alcançarem seu máximo potencial,
                                construindo pontes entre pessoas e tecnologia.
                            </p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Nossa Visão
                            </h2>
                            <p className="text-lg text-gray-600">
                                Ser referência global em soluções de comunicação empresarial,
                                reconhecida pela excelência, inovação e impacto positivo nos
                                resultados dos nossos clientes.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/about/mission-vision.jpg"
                                alt="Align Mission and Vision"
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <Values />

            {/* Differentials Section */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Por que Escolher a Align
                        </h2>
                        <p className="text-lg text-gray-600">
                            Descubra o que nos torna diferentes e como podemos agregar valor
                            ao seu negócio
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {differentials.map((differential, index) => {
                            const Icon = differential.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-xl shadow-sm p-6"
                                >
                                    <div className="rounded-full bg-primary-50 w-12 h-12 flex items-center justify-center mb-4">
                                        <Icon className="h-6 w-6 text-primary-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {differential.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {differential.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <ProcessTimeline />

            {/* Team Section */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Nossa Equipe
                        </h2>
                        <p className="text-lg text-gray-600">
                            Conheça os profissionais dedicados que fazem a diferença em cada projeto
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TeamMember />
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <TechnologyStack />

            {/* CTA Section */}
            <section className="py-16 bg-primary-900 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Pronto para Transformar sua Comunicação?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                        Entre em contato e descubra como podemos ajudar sua empresa a alcançar
                        resultados extraordinários.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/contact" className="btn btn-white">
                            Falar com um Especialista
                        </a>
                        <a href="/services" className="btn btn-outline-white">
                            Conhecer Serviços
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;