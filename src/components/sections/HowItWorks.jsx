import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/theme/ThemeContext';
import {
    Search,
    FileText,
    Rocket,
    BarChart2,
    Users,
    MessageSquare,
    ArrowRight
} from 'lucide-react';

const HowItWorks = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const steps = [
        {
            id: 'analysis',
            icon: Search,
            color: 'blue'
        },
        {
            id: 'proposal',
            icon: FileText,
            color: 'green'
        },
        {
            id: 'implementation',
            icon: Rocket,
            color: 'orange'
        },
        {
            id: 'monitoring',
            icon: BarChart2,
            color: 'purple'
        }
    ];

    const getColorClasses = (color) => {
        const baseClasses = theme === 'dark' ? {
            blue: 'bg-blue-900 text-blue-400',
            green: 'bg-green-900 text-green-400',
            orange: 'bg-orange-900 text-orange-400',
            purple: 'bg-purple-900 text-purple-400'
        } : {
            blue: 'bg-blue-100 text-blue-600',
            green: 'bg-green-100 text-green-600',
            orange: 'bg-orange-100 text-orange-600',
            purple: 'bg-purple-100 text-purple-600'
        };
        return baseClasses[color];
    };

    const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
    const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const cardBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
    const borderClass = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

    return (
        <section className={`section ${bgClass}`}>
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-3xl sm:text-4xl font-bold ${textClass} mb-4`}
                    >
                        {t('howItWorks.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                    >
                        {t('howItWorks.subtitle')}
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Timeline line - Desktop */}
                    <div className="hidden md:block absolute top-24 left-12 right-12 h-0.5 bg-gray-200" />

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative text-center"
                                >
                                    {/* Step Number */}
                                    <div className={`w-12 h-12 rounded-full ${
                                        theme === 'dark' ? 'bg-primary-700' : 'bg-primary-600'
                                    } text-white text-xl font-bold flex items-center justify-center mx-auto mb-4 relative z-10`}>
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-full ${
                                        getColorClasses(step.color)
                                    } flex items-center justify-center mx-auto mb-6`}>
                                        <Icon className="h-8 w-8" />
                                    </div>

                                    {/* Content */}
                                    <h3 className={`text-xl font-semibold ${textClass} mb-3`}>
                                        {t(`howItWorks.steps.${step.id}.title`)}
                                    </h3>
                                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                        {t(`howItWorks.steps.${step.id}.description`)}
                                    </p>

                                    {/* Details List */}
                                    <ul className="mt-4 space-y-2 text-left">
                                        {[1, 2, 3].map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2 flex-shrink-0" />
                                                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                                    {t(`howItWorks.steps.${step.id}.details.${item}`)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Connector Arrow - Desktop */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-20 right-0 transform translate-x-1/2">
                                            <ArrowRight className={`h-6 w-6 ${
                                                theme === 'dark' ? 'text-gray-700' : 'text-gray-300'
                                            }`} />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Integration Benefits */}
                <div className="mt-16 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800 rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <h3 className={`text-2xl font-semibold ${textClass}`}>
                            {t('howItWorks.benefits.title')}
                        </h3>
                        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                            {t('howItWorks.benefits.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {['flexibility', 'scalability', 'transparency'].map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                className={`${cardBgClass} p-6 rounded-xl`}
                            >
                                <h4 className={`text-lg font-semibold ${textClass} mb-2`}>
                                    {t(`howItWorks.benefits.items.${benefit}.title`)}
                                </h4>
                                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                    {t(`howItWorks.benefits.items.${benefit}.description`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="/contact"
                            className={`btn ${theme === 'dark' ? 'btn-white' : 'btn-primary'}`}
                        >
                            {t('howItWorks.cta.button')}
                        </a>
                        <p className={`mt-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            {t('howItWorks.cta.subtext')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;