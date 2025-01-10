// src/components/sections/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../forms/ContactForm';

const Hero = () => {
    return (
        <section className="relative bg-white pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pb-24">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                            Transforme a comunicação da sua empresa em resultados
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl">
                            Soluções integradas de comunicação que aumentam a eficiência,
                            reduzem custos e impulsionam o crescimento do seu negócio.
                        </p>

                        {/* CTA Buttons - Visible only on mobile */}
                        <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
                            <Link to="/contact" className="btn btn-primary text-center">
                                Agende uma Consulta
                            </Link>
                            <Link to="/services" className="btn btn-secondary text-center">
                                Conheça Nossos Serviços
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="relative">
                        <div className="relative z-10 bg-white rounded-xl shadow-xl p-6">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                Fale com um Especialista
                            </h3>
                            <ContactForm />
                        </div>

                        {/* Background decoration */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-100 to-primary-50 rounded-xl transform translate-x-4 translate-y-4"></div>
                    </div>
                </div>

                {/* Trusted By Section */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <p className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wide mb-8">
                        Empresas que confiam em nós
                    </p>
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
                        {/* Aqui você adicionaria os logos dos parceiros */}
                        {/* Por enquanto, vou usar placeholders */}
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex justify-center items-center">
                                <div className="h-12 w-32 bg-gray-200 rounded-lg"></div>
                            </div>
                        ))}
                    </div>

                    {/* Metrics */}
                    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
                        <Metric number="500+" label="Projetos Entregues" />
                        <Metric number="15+" label="Países Atendidos" />
                        <Metric number="98%" label="Taxa de Satisfação" />
                        <Metric number="4h" label="Tempo Médio de Resposta" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Metric = ({ number, label }) => (
    <div className="text-center">
        <div className="text-3xl font-bold text-primary-600">{number}</div>
        <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
);

export default Hero;