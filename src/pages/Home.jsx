// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Componentes de seção
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Benefits from '../components/sections/Benefits';
import HowItWorks from '../components/sections/HowItWorks';
import Comparison from '../components/sections/Comparison';
import FAQ from '../components/sections/FAQ';
import Diagnostic from '../components/sections/Diagnostic';
import TrustedBy from '../components/sections/TrustedBy';

// Componente de SEO (opcional, se você estiver usando react-helmet ou similar)
import SEO from '../components/utils/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="Align - Transforme a comunicação da sua empresa em resultados"
                description="Soluções integradas de comunicação que aumentam a eficiência, reduzem custos e impulsionam o crescimento do seu negócio."
            />

            {/* Hero Section */}
            <Hero />

            {/* Trusted By Section */}
            <TrustedBy />

            {/* Serviços */}
            <Services />

            {/* Benefícios */}
            <Benefits />

            {/* Diagnóstico Rápido */}
            <Diagnostic />

            {/* Como Funciona */}
            <HowItWorks />

            {/* Comparativo */}
            <Comparison />

            {/* FAQ */}
            <FAQ />

            {/* Chat Widget */}
            <div className="fixed bottom-4 right-4 z-50">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
                >
                    <button
                        className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg transition-colors"
                        onClick={() => {/* Implementar lógica do chat */ }}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                    </button>
                </motion.div>
            </div>

            {/* WhatsApp Link */}
            <div className="fixed bottom-4 left-4 z-50">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.5, type: "spring", stiffness: 260, damping: 20 }}
                >
                    <a
                        href="https://wa.me/seunumero"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M21.384 4.616C19.726 2.957 17.536 2 15.231 2c-4.627 0-8.385 3.757-8.385 8.385 0 1.473.383 2.918 1.113 4.197l-1.192 4.354 4.45-1.166c1.236.676 2.632 1.032 4.051 1.032 4.626 0 8.384-3.758 8.384-8.385 0-2.305-.957-4.495-2.615-6.153zM15.23 20.369c-1.255 0-2.485-.338-3.565-.977l-.255-.152-2.646.693.705-2.578-.167-.265c-.707-1.122-1.079-2.42-1.079-3.75 0-3.858 3.139-6.996 6.997-6.996 1.869 0 3.625.728 4.944 2.048 1.32 1.319 2.048 3.075 2.048 4.944 0 3.857-3.138 6.995-6.996 6.995zm4.226-5.239c-.21-.106-1.241-.614-1.434-.684-.192-.07-.333-.106-.473.105-.14.211-.544.684-.667.824-.123.14-.246.157-.456.053-.21-.105-.886-.328-1.686-1.044-.623-.556-1.043-1.242-1.166-1.452-.122-.21-.013-.324.092-.428.095-.095.21-.247.316-.37.105-.124.14-.212.21-.353.07-.14.035-.264-.018-.37-.053-.105-.473-1.14-.649-1.561-.171-.408-.344-.353-.473-.353-.122-.002-.263-.002-.403-.002-.14 0-.368.053-.561.263-.192.21-.737.72-.737 1.756s.755 2.034.86 2.175c.105.14 1.497 2.286 3.624 3.201.507.218.902.348 1.21.447.508.161.97.138 1.335.084.408-.06 1.257-.514 1.434-1.01.177-.494.177-.916.124-1.005-.053-.088-.193-.143-.403-.248z"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </>
    );
};

export default Home;