// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { services } from '../lib/constants';
import ServiceCategory from '../components/services/ServiceCategory';
import ServiceHighlight from '../components/services/ServiceHighlight';
import IntegrationDiagram from '../components/services/IntegrationDiagram';
import ServiceCalculator from '../components/services/ServiceCalculator';
import SEO from '../components/utils/SEO';

const Services = () => {
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
        <>
            <SEO
                title="Serviços Align - Soluções Integradas de Comunicação"
                description="Conheça nosso portfólio completo de serviços de comunicação empresarial, desde desenvolvimento até suporte ao cliente."
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
                            Soluções Completas para
                            <span className="text-primary-600"> Sua Empresa</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-600 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Da comunicação interna ao atendimento ao cliente, oferecemos serviços
                            integrados que impulsionam a eficiência e os resultados do seu negócio.
                        </motion.p>
                        <motion.div
                            className="flex flex-wrap justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <a href="#calculator" className="btn btn-primary">
                                Calcular Economia
                            </a>
                            <Link to="/contact" className="btn btn-secondary">
                                Falar com Especialista
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service Categories Grid */}
            <section className="py-16">
                <div className="container-custom">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                            >
                                <ServiceCategory service={service} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Integration Diagram */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Serviços que Trabalham em Sintonia
                        </h2>
                        <p className="text-lg text-gray-600">
                            Entenda como nossos serviços se integram para criar uma solução completa
                            e eficiente para sua empresa
                        </p>
                    </div>
                    <IntegrationDiagram />
                </div>
            </section>

            {/* Service Highlights */}
            <section className="py-16">
                <div className="container-custom">
                    <ServiceHighlight />
                </div>
            </section>

            {/* Service Calculator */}
            <section id="calculator" className="py-16 bg-gray-50">
                <div className="container-custom">
                    <ServiceCalculator />
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-primary-900 text-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">
                            Pronto para Transformar sua Comunicação?
                        </h2>
                        <p className="text-lg text-primary-100 mb-8">
                            Agende uma consulta gratuita e descubra como nossos serviços podem
                            impulsionar os resultados da sua empresa.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="btn btn-white">
                                Agendar Consulta
                            </Link>
                            <a href="#calculator" className="btn btn-outline-white">
                                Calcular ROI
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;