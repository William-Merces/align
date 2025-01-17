import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/theme/ThemeContext';

const comparisonData = [
    {
        category: 'integration',
        traditional: {
            value: false,
            description: 'Processo lento e burocrático'
        },
        align: {
            value: true,
            description: 'Onboarding rápido e eficiente'
        }
    },
    {
        category: 'flexibility',
        traditional: {
            value: false,
            description: 'Contratos longos e rígidos'
        },
        align: {
            value: true,
            description: 'Flexibilidade para ajustar conforme necessidade'
        }
    },
    {
        category: 'team',
        traditional: {
            value: false,
            description: 'Pouco controle sobre a equipe'
        },
        align: {
            value: true,
            description: 'Controle total sobre a equipe e processos'
        }
    },
    {
        category: 'costs',
        traditional: {
            value: false,
            description: 'Custos fixos altos e imprevisíveis'
        },
        align: {
            value: true,
            description: 'Custos transparentes e previsíveis'
        }
    },
    {
        category: 'support',
        traditional: {
            value: false,
            description: 'Suporte limitado em horário comercial'
        },
        align: {
            value: true,
            description: 'Suporte dedicado 24/7'
        }
    },
    {
        category: 'scalability',
        traditional: {
            value: false,
            description: 'Processo complexo de expansão'
        },
        align: {
            value: true,
            description: 'Escalabilidade rápida e sem complicações'
        }
    }
];

const ComparisonRow = ({ item, isEven }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    
    const baseRowClass = "grid grid-cols-1 md:grid-cols-3 transition-colors duration-200 p-4 rounded-lg";
    const rowColorClass = theme === 'dark' 
        ? isEven ? 'bg-gray-800' : 'bg-gray-900'
        : isEven ? 'bg-gray-50' : 'bg-white';

    return (
        <div className={`${baseRowClass} ${rowColorClass}`}>
            {/* Category - Mobile & Desktop */}
            <div className="mb-4 md:mb-0">
                <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t(`comparison.categories.${item.category}`)}
                </p>
            </div>

            {/* Mobile View - Stacked Comparison */}
            <div className="md:hidden space-y-4">
                <div className="flex items-start">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0 mr-2 mt-1" />
                    <div>
                        <p className="font-medium text-red-600 mb-1">{t('comparison.traditional')}</p>
                        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                            {t(`comparison.descriptions.traditional.${item.category}`)}
                        </p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                    <div>
                        <p className="font-medium text-green-600 mb-1">{t('comparison.align')}</p>
                        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                            {t(`comparison.descriptions.align.${item.category}`)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop View - Side by Side */}
            <div className="hidden md:block">
                <div className="flex items-center">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0 mr-2" />
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {t(`comparison.descriptions.traditional.${item.category}`)}
                    </p>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {t(`comparison.descriptions.align.${item.category}`)}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Comparison = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [hoveredRow, setHoveredRow] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const rowVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    // Header background based on theme
    const headerBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-900';
    const headerTextClass = 'text-white';

    return (
        <section className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
            <div className="container-custom py-16">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className={`text-3xl font-bold mb-4 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                        {t('comparison.title')}
                    </h2>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {t('comparison.subtitle')}
                    </p>
                </div>

                {/* Comparison Table */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-2"
                >
                    {/* Header Row */}
                    <div className={`${headerBgClass} rounded-t-lg p-4 grid grid-cols-1 md:grid-cols-3`}>
                        <div className={`${headerTextClass} font-semibold`}>
                            {t('comparison.headers.feature')}
                        </div>
                        <div className={`hidden md:block ${headerTextClass} font-semibold`}>
                            {t('comparison.headers.traditional')}
                        </div>
                        <div className={`hidden md:block ${headerTextClass} font-semibold`}>
                            {t('comparison.headers.align')}
                        </div>
                    </div>

                    {/* Comparison Rows */}
                    {comparisonData.map((item, index) => (
                        <motion.div
                            key={item.category}
                            variants={rowVariants}
                            onHoverStart={() => setHoveredRow(index)}
                            onHoverEnd={() => setHoveredRow(null)}
                            animate={{
                                scale: hoveredRow === index ? 1.02 : 1,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <ComparisonRow item={item} isEven={index % 2 === 0} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="/contact"
                            className={`btn ${theme === 'dark' ? 'btn-white' : 'btn-primary'}`}
                        >
                            {t('comparison.cta')}
                        </a>
                        <p className={`mt-4 text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                            {t('comparison.ctaSubtext')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;