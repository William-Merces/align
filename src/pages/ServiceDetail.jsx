// src/pages/ServiceDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    ArrowRight,
    Clock,
    Users,
    Target,
    Shield
} from 'lucide-react';
import { services } from '../lib/constants';
import ContactForm from '../components/forms/ContactForm';
import ServiceFeatures from '../components/services/ServiceFeatures';
import ServiceFAQ from '../components/services/ServiceFAQ';
import ServicePricing from '../components/services/ServicePricing';
import SEO from '../components/utils/SEO';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        const currentService = services.find(s => s.id === serviceId);
        setService(currentService);
    }, [serviceId]);

    if (!service) {
        return <div>Serviço não encontrado</div>;
    }

    const Icon = service.icon;

    return (
        <>
            <SEO
                title={`${service.title} - Align`}
                description={service.description}
            />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                            <Link to="/services">Serviços</Link>
                            <ArrowRight className="h-4 w-4" />
                            <span>{service.title}</span>
                        </div>

                        <div className="flex items-center mb-8">
                            <div className="w-16 h-16 rounded-lg bg-primary-100 flex items-center justify-center mr-6">
                                <Icon className="h-8 w-8 text-primary-600" />
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                                {service.title}
                            </h1>
                        </div>

                        <p className="text-xl text-gray-600 mb-8">
                            {service.description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#pricing" className="btn btn-primary">
                                Ver Planos e Preços
                            </a>
                            <button className="btn btn-secondary">
                                Agendar Demonstração
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16">
                <div className="container-custom">
                    <ServiceFeatures service={service} />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Por que escolher a Align para {service.title}?
                            </h2>
                            <p className="text-lg text-gray-600">
                                Descubra como nossa solução pode transformar sua operação e trazer
                                resultados reais para seu negócio
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <div className="flex items-center mb-4">
                                    <Clock className="h-6 w-6 text-primary-600 mr-3" />
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Resposta Rápida
                                    </h3>
                                </div>
                                <p className="text-gray-600">
                                    Equipe dedicada com tempo médio de resposta de 4 horas e resolução
                                    em até 24 horas.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <div className="flex items-center mb-4">
                                    <Users className="h-6 w-6 text-primary-600 mr-3" />
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Equipe Especializada
                                    </h3>
                                </div>
                                <p className="text-gray-600">
                                    Profissionais altamente qualificados e com experiência comprovada
                                    no segmento.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <div className="flex items-center mb-4">
                                    <Target className="h-6 w-6 text-primary-600 mr-3" />
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Foco em Resultados
                                    </h3>
                                </div>
                                <p className="text-gray-600">
                                    Metodologia própria focada em entregar resultados mensuráveis
                                    para seu negócio.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <div className="flex items-center mb-4">
                                    <Shield className="h-6 w-6 text-primary-600 mr-3" />
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Segurança e Compliance
                                    </h3>
                                </div>
                                <p className="text-gray-600">
                                    Processos em conformidade com as principais normas de segurança
                                    e privacidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-16">
                <div className="container-custom">
                    <ServicePricing service={service} />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <ServiceFAQ service={service} />
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="grid md:grid-cols-2">
                                <div className="p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        Comece Agora
                                    </h2>
                                    <p className="text-gray-600 mb-6">
                                        Entre em contato e descubra como podemos ajudar sua empresa
                                        com {service.title}
                                    </p>
                                    <ContactForm service={service} />
                                </div>
                                <div className="bg-primary-600 p-8 text-white">
                                    <h3 className="text-xl font-semibold mb-4">
                                        Por que escolher a Align?
                                    </h3>
                                    <ul className="space-y-4">
                                        {service.subServices.map((subService, index) => (
                                            <li key={index} className="flex items-center">
                                                <CheckCircle className="h-5 w-5 mr-3 text-primary-200" />
                                                <span>{subService}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetail;