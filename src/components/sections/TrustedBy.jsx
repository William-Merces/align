import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/theme/ThemeContext';

const certifications = [
    {
        id: 'iso27001',
        logo: '/certifications/iso27001.svg'
    },
    {
        id: 'lgpd',
        logo: '/certifications/lgpd.svg'
    },
    {
        id: 'soc2',
        logo: '/certifications/soc2.svg'
    }
];

const associations = [
    {
        id: 'abes',
        logo: '/associations/abes.svg'
    },
    {
        id: 'brasscom',
        logo: '/associations/brasscom.svg'
    }
];

const TrustedBy = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

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

    const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
    const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const cardBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
    const borderClass = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
    const logoClass = theme === 'dark' ? 'brightness-90' : 'brightness-100';

    return (
        <section className={`py-12 ${bgClass}`}>
            <div className="container-custom">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className={`text-2xl font-semibold ${textClass}`}>
                            {t('trustedBy.title')}
                        </h2>
                        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                            {t('trustedBy.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Certificações */}
                        <div>
                            <h3 className={`text-lg font-semibold ${textClass} mb-6`}>
                                {t('trustedBy.certifications.title')}
                            </h3>
                            <div className="grid grid-cols-3 gap-6">
                                {certifications.map((cert) => (
                                    <motion.div
                                        key={cert.id}
                                        variants={itemVariants}
                                        className="flex flex-col items-center"
                                    >
                                        <div className={`w-20 h-20 ${cardBgClass} rounded-full shadow-sm flex items-center justify-center mb-3`}>
                                            <img
                                                src={cert.logo}
                                                alt={t(`trustedBy.certifications.${cert.id}.name`)}
                                                className={`w-12 h-12 object-contain ${logoClass}`}
                                            />
                                        </div>
                                        <p className={`text-sm font-medium ${textClass} text-center`}>
                                            {t(`trustedBy.certifications.${cert.id}.name`)}
                                        </p>
                                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-center mt-1`}>
                                            {t(`trustedBy.certifications.${cert.id}.description`)}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Associações */}
                        <div>
                            <h3 className={`text-lg font-semibold ${textClass} mb-6`}>
                                {t('trustedBy.associations.title')}
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                {associations.map((assoc) => (
                                    <motion.div
                                        key={assoc.id}
                                        variants={itemVariants}
                                        className="flex flex-col items-center"
                                    >
                                        <div className={`w-20 h-20 ${cardBgClass} rounded-full shadow-sm flex items-center justify-center mb-3`}>
                                            <img
                                                src={assoc.logo}
                                                alt={t(`trustedBy.associations.${assoc.id}.name`)}
                                                className={`w-12 h-12 object-contain ${logoClass}`}
                                            />
                                        </div>
                                        <p className={`text-sm font-medium ${textClass} text-center`}>
                                            {t(`trustedBy.associations.${assoc.id}.name`)}
                                        </p>
                                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-center mt-1`}>
                                            {t(`trustedBy.associations.${assoc.id}.description`)}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Commitment Section */}
                    <motion.div
                        variants={itemVariants}
                        className={`mt-16 text-center ${cardBgClass} rounded-xl p-8 shadow-sm`}
                    >
                        <h3 className={`text-xl font-bold ${textClass} mb-4`}>
                            {t('trustedBy.commitment.title')}
                        </h3>
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                            {t('trustedBy.commitment.description')}
                        </p>

                        {/* CTA Final */}
                        <div className="mt-8">
                            <a href="/contact" className={`btn ${theme === 'dark' ? 'btn-white' : 'btn-primary'}`}>
                                {t('trustedBy.commitment.cta')}
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TrustedBy;