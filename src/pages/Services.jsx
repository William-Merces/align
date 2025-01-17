// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/theme/ThemeContext';
import { Monitor, Users, Check } from 'lucide-react';
import ServiceCard from '../components/sections/ServiceCard';
import { services } from '../lib/constants';

const Services = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const valueProps = [
        {
            id: 'integration',
            icon: Monitor,
            color: 'blue'
        },
        {
            id: 'flexibility',
            icon: Users,
            color: 'green'
        },
        {
            id: 'scalability',
            icon: Check,
            color: 'purple'
        }
    ];

    const getColorClasses = (color) => {
        const baseClasses = theme === 'dark' ? {
            blue: 'bg-blue-900 text-blue-400',
            green: 'bg-green-900 text-green-400',
            purple: 'bg-purple-900 text-purple-400'
        } : {
            blue: 'bg-blue-50 text-blue-600',
            green: 'bg-green-50 text-green-600',
            purple: 'bg-purple-50 text-purple-600'
        };
        return baseClasses[color];
    };

    const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
    const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const cardBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';

    return (
        <section className={`section ${bgClass}`}>
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-3xl sm:text-4xl font-bold ${textClass} mb-4`}
                    >
                        {t('services.section.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                    >
                        {t('services.section.subtitle')}
                    </motion.p>
                </div>

                {/* Quick Value Props */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {valueProps.map((prop, index) => {
                        const Icon = prop.icon;
                        return (
                            <motion.div
                                key={prop.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`${cardBgClass} p-6 rounded-xl text-center`}
                            >
                                <div className={`w-12 h-12 ${getColorClasses(prop.color)} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className={`text-lg font-semibold ${textClass} mb-2`}>
                                    {t(`services.valueProps.${prop.id}.title`)}
                                </h3>
                                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                    {t(`services.valueProps.${prop.id}.description`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Services Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    ))}
                </motion.div>

                {/* Integration Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`mt-12 ${cardBgClass} rounded-xl shadow-sm p-8 text-center`}
                >
                    <h3 className={`text-2xl font-bold ${textClass} mb-4`}>
                        {t('services.integration.title')}
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-6`}>
                        {t('services.integration.description')}
                    </p>
                    <Link
                        to="/contact"
                        className={`btn ${theme === 'dark' ? 'btn-white' : 'btn-primary'} inline-flex items-center`}
                    >
                        {t('services.integration.cta')}
                    </Link>
                </motion.div>

                {/* Quick Start Guide */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    {['consultation', 'plan', 'implementation'].map((step, index) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${cardBgClass} p-6 rounded-xl`}
                        >
                            <div className={`w-8 h-8 ${
                                theme === 'dark' ? 'bg-primary-900' : 'bg-primary-100'
                            } rounded-full flex items-center justify-center mb-4`}>
                                <span className={`text-sm font-bold ${
                                    theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                                }`}>
                                    {index + 1}
                                </span>
                            </div>
                            <h4 className={`text-lg font-semibold ${textClass} mb-2`}>
                                {t(`services.quickStart.${step}.title`)}
                            </h4>
                            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                {t(`services.quickStart.${step}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;