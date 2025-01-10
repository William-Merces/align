// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    MessageSquare,
    Clock,
    MapPin,
    Calendar
} from 'lucide-react';
import ContactForm from '../components/forms/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import LocationMap from '../components/contact/LocationMap';
import SEO from '../components/utils/SEO';

const Contact = () => {
    const contactMethods = [
        {
            icon: Phone,
            title: 'Fale Conosco',
            description: 'Estamos disponíveis para atender sua ligação',
            action: 'Ligar Agora',
            link: 'tel:+551199999999'
        },
        {
            icon: MessageSquare,
            title: 'Chat Online',
            description: 'Converse em tempo real com nossa equipe',
            action: 'Iniciar Chat',
            link: '#chat'
        },
        {
            icon: Calendar,
            title: 'Agende uma Call',
            description: 'Escolha o melhor horário para conversarmos',
            action: 'Agendar',
            link: '#schedule'
        }
    ];

    return (
        <>
            <SEO
                title="Contato - Align | Fale com um Especialista"
                description="Entre em contato com a Align e descubra como podemos ajudar sua empresa a otimizar a comunicação e alcançar melhores resultados."
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
                            Vamos Transformar sua Comunicação
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-600"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Entre em contato e descubra como podemos ajudar sua empresa
                            a alcançar melhores resultados
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Contact Methods Grid */}
            <section className="py-12">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => {
                            const Icon = method.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-xl shadow-sm p-6 text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 text-primary-600 mb-4">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {method.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {method.description}
                                    </p>
                                    <a
                                        href={method.link}
                                        className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                                    >
                                        {method.action} →
                                    </a>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-sm p-8"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Fale com um Especialista
                                </h2>
                                <ContactForm />
                            </motion.div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <ContactInfo />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Nossa Localização
                        </h2>
                        <p className="text-lg text-gray-600">
                            Estamos estrategicamente localizados para atender nossos clientes da
                            melhor forma possível
                        </p>
                    </div>

                    <LocationMap />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Dúvidas Frequentes
                            </h2>
                            <p className="text-lg text-gray-600">
                                Encontre respostas rápidas para as principais dúvidas sobre nossos serviços
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Qual o prazo médio de resposta?
                                </h3>
                                <p className="text-gray-600">
                                    Nossa equipe responde a todas as solicitações em até 4 horas durante
                                    horário comercial.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Como funciona o processo inicial?
                                </h3>
                                <p className="text-gray-600">
                                    Após o primeiro contato, agendamos uma reunião para entender suas
                                    necessidades e apresentar as melhores soluções.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Vocês atendem empresas de qualquer porte?
                                </h3>
                                <p className="text-gray-600">
                                    Sim, temos soluções personalizadas para empresas de todos os
                                    tamanhos e segmentos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-primary-900 text-white">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Fique por Dentro das Novidades
                        </h2>
                        <p className="text-lg text-primary-100 mb-8">
                            Receba conteúdo exclusivo sobre comunicação empresarial e
                            novidades da Align
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Seu melhor email"
                                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                            <button type="submit" className="btn btn-white">
                                Inscrever-se
                            </button>
                        </form>
                        <p className="mt-4 text-sm text-primary-200">
                            Você pode cancelar sua inscrição a qualquer momento.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;