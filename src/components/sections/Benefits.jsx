import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/theme/ThemeContext';
import {
    MessageSquare,
    TrendingDown,
    Zap,
    Users,
    Settings,
    Globe
} from 'lucide-react';

const benefits = [
    {
        id: 'communication',
        icon: MessageSquare,
        color: 'blue'
    },
    {
        id: 'costs',
        icon: TrendingDown,
        color: 'green'
    },
    {
        id: 'productivity',
        icon: Zap,
        color: 'yellow'
    },
    {
        id: 'engagement',
        icon: Users,
        color: 'purple'
    },
    {
        id: 'processes',
        icon: Settings,
        color: 'red'
    },
    {
        id: 'support',
        icon: Globe,
        color: 'indigo'
    }
];

const Benefits = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const getColorClasses = (color) => {
        const baseClasses = theme === 'dark' ? {
            blue: 'bg-blue-900 text-blue-400',
            green: 'bg-green-900 text-green-400',
            yellow: 'bg-yellow-900 text-yellow-400',
            purple: 'bg-purple-900 text-purple-400',
            red: 'bg-red-900 text-red-400',
            indigo: 'bg-indigo-900 text-indigo-400'
        } : {
            blue: 'bg-blue-100 text-blue-600',
            green: 'bg-green-100 text-green-600',
            yellow: 'bg-yellow-100 text-yellow-600',
            purple: 'bg-purple-100 text-purple-600',
            red: 'bg-red-100 text-red-600',
            indigo: 'bg-indigo-100 text-indigo-600'
        };
        return baseClasses[color];
    };

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
            transition: { duration: 0.5 }
        }
    };

    const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50';
    const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const cardBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
    const cardHoverClass = theme === 'dark' ? 'hover:bg-gray-700' : 'hover:shadow-lg';

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
                        {t('benefits.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                    >
                        {t('benefits.subtitle')}
                    </motion.p>
                </div>

                {/* Benefits Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.id}
                                variants={itemVariants}
                                className={`${cardBgClass} rounded-xl shadow-sm ${cardHoverClass} p-6 transition-all duration-300`}
                            >
                                <div className={`rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${getColorClasses(benefit.color)}`}>
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className={`text-xl font-semibold ${textClass} mb-3`}>
                                    {t(`benefits.items.${benefit.id}.title`)}
                                </h3>
                                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                    {t(`benefits.items.${benefit.id}.description`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Quick Value Props */}
                <div className="mt-16 grid md:grid-cols-3 gap-6">
                    {['efficiency', 'satisfaction', 'roi'].map((prop, index) => (
                        <motion.div
                            key={prop}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`text-center ${cardBgClass} p-6 rounded-xl`}
                        >
                            <div className={`text-2xl font-bold text-primary-600 mb-2`}>
                                {t(`benefits.stats.${prop}.value`)}
                            </div>
                            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                {t(`benefits.stats.${prop}.label`)}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <a
                        href="/contact"
                        className={`btn ${theme === 'dark' ? 'btn-white' : 'btn-primary'}`}
                    >
                        {t('benefits.cta')}
                    </a>
                    <p className={`mt-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {t('benefits.ctaSubtext')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Benefits;