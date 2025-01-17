// TrustedBy.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/theme/ThemeContext';
import { useApp } from '../../context/AppContext';
import { regionalContent } from '../../config/regionalContent';

const TrustedBy = () => {
    // Hooks e Context
    const { theme } = useTheme();
    const { t, i18n } = useTranslation();
    const { isLoading } = useApp();
    
    // Estado local
    const [content, setContent] = useState(null);
    const [error, setError] = useState(null);

    // Efeito para atualizar o conteúdo quando o idioma muda
    useEffect(() => {
        try {
            const newContent = regionalContent[i18n.language] || regionalContent['en'];
            
            if (!newContent?.certifications || !newContent?.associations) {
                throw new Error('Invalid content structure');
            }
            
            setContent(newContent);
            setError(null);
        } catch (err) {
            console.error('Error loading regional content:', err);
            setError(t('errors.contentLoading'));
            setContent(regionalContent['en']);
        }
    }, [i18n.language, t]);

    // Classes condicionais baseadas no tema
    const themeClasses = {
        section: theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50',
        text: theme === 'dark' ? 'text-white' : 'text-gray-900',
        card: theme === 'dark' ? 'bg-gray-800' : 'bg-white',
        border: theme === 'dark' ? 'border-gray-700' : 'border-gray-200',
        logo: theme === 'dark' ? 'brightness-90' : 'brightness-100',
        description: theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
    };

    // Variantes de animação
    const animations = {
        container: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
            }
        },
        item: {
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 }
            },
            exit: {
                opacity: 0,
                y: -20,
                transition: { duration: 0.3 }
            }
        }
    };

    // Renderização do estado de carregamento
    if (isLoading) {
        return (
            <div className={`py-12 ${themeClasses.section}`}>
                <div className="container mx-auto px-4">
                    <div className="animate-pulse space-y-8">
                        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mx-auto"/>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[1, 2].map((i) => (
                                <div key={i} className="space-y-4">
                                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4"/>
                                    <div className="grid grid-cols-3 gap-4">
                                        {[1, 2, 3].map((j) => (
                                            <div key={j} className="h-24 bg-gray-300 dark:bg-gray-700 rounded"/>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Renderização do estado de erro
    if (error) {
        return (
            <div className={`py-12 ${themeClasses.section}`}>
                <div className="container mx-auto px-4 text-center">
                    <p className={`text-red-500 dark:text-red-400`}>{error}</p>
                </div>
            </div>
        );
    }

    // Não renderiza nada se não houver conteúdo
    if (!content) return null;

    const { certifications, associations } = content;

    // Renderização principal do componente
    return (
        <section className={`py-12 ${themeClasses.section}`}>
            <div className="container mx-auto px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={i18n.language}
                        variants={animations.container}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Cabeçalho */}
                        <div className="text-center mb-12">
                            <h2 className={`text-2xl font-semibold ${themeClasses.text}`}>
                                {t('trustedBy.title')}
                            </h2>
                            <p className={themeClasses.description}>
                                {t('trustedBy.subtitle')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Seção de Certificações */}
                            <motion.div variants={animations.item}>
                                <h3 className={`text-lg font-semibold ${themeClasses.text} mb-6`}>
                                    {t('trustedBy.certifications.title')}
                                </h3>
                                <div className="grid grid-cols-3 gap-6">
                                    {certifications.map((cert) => (
                                        <motion.div
                                            key={cert.id}
                                            variants={animations.item}
                                            className="flex flex-col items-center"
                                        >
                                            <div className={`w-20 h-20 ${themeClasses.card} rounded-full shadow-sm flex items-center justify-center mb-3`}>
                                                <img
                                                    src={cert.logo}
                                                    alt={t(`trustedBy.certifications.${cert.id}.name`)}
                                                    className={`w-12 h-12 object-contain ${themeClasses.logo}`}
                                                />
                                            </div>
                                            <p className={`text-sm font-medium ${themeClasses.text} text-center`}>
                                                {t(`trustedBy.certifications.${cert.id}.name`)}
                                            </p>
                                            <p className={`text-xs ${themeClasses.description} text-center mt-1`}>
                                                {t(`trustedBy.certifications.${cert.id}.description`)}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Seção de Parcerias */}
                            <motion.div variants={animations.item}>
                                <h3 className={`text-lg font-semibold ${themeClasses.text} mb-6`}>
                                    {t('trustedBy.associations.title')}
                                </h3>
                                <div className="grid grid-cols-2 gap-6">
                                    {associations.map((assoc) => (
                                        <motion.div
                                            key={assoc.id}
                                            variants={animations.item}
                                            className="flex flex-col items-center"
                                        >
                                            <div className={`w-20 h-20 ${themeClasses.card} rounded-full shadow-sm flex items-center justify-center mb-3`}>
                                                <img
                                                    src={assoc.logo}
                                                    alt={t(`trustedBy.associations.${assoc.id}.name`)}
                                                    className={`w-12 h-12 object-contain ${themeClasses.logo}`}
                                                />
                                            </div>
                                            <p className={`text-sm font-medium ${themeClasses.text} text-center`}>
                                                {t(`trustedBy.associations.${assoc.id}.name`)}
                                            </p>
                                            <p className={`text-xs ${themeClasses.description} text-center mt-1`}>
                                                {t(`trustedBy.associations.${assoc.id}.description`)}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Seção de Compromisso */}
                        <motion.div
                            variants={animations.item}
                            className={`mt-16 text-center ${themeClasses.card} rounded-xl p-8 shadow-sm`}
                        >
                            <h3 className={`text-xl font-bold ${themeClasses.text} mb-4`}>
                                {t('trustedBy.commitment.title')}
                            </h3>
                            <p className={`${themeClasses.description} max-w-2xl mx-auto`}>
                                {t('trustedBy.commitment.description')}
                            </p>

                            <div className="mt-8">
                                <a
                                    href="/contact"
                                    className={`inline-flex items-center px-6 py-3 rounded-lg
                                              ${theme === 'dark' 
                                                ? 'bg-white text-gray-900 hover:bg-gray-100' 
                                                : 'bg-primary-600 text-white hover:bg-primary-700'
                                              } 
                                              transition-colors duration-200`}
                                >
                                    {t('trustedBy.commitment.cta')}
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default TrustedBy;