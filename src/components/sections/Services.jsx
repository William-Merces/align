// src/components/sections/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { services } from '../../lib/constants';

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="section bg-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Serviços Completos para Sua Empresa
                    </h2>
                    <p className="text-lg text-gray-600">
                        Soluções integradas que combinam expertise técnica com atendimento personalizado
                        para impulsionar o crescimento do seu negócio.
                    </p>
                </div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                        >
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <Link
                        to="/contact"
                        className="btn btn-primary inline-flex items-center"
                    >
                        Consulte um Especialista
                        <svg
                            className="ml-2 -mr-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;