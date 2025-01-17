import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/theme/ThemeContext';
import {
    Search,
    Plus,
    Minus,
    MessageSquare,
    PhoneCall,
    Mail,
    HelpCircle
} from 'lucide-react';

const FAQ = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('services');
    const [openQuestions, setOpenQuestions] = useState({});

    const categories = [
        { id: 'services', icon: HelpCircle },
        { id: 'pricing', icon: MessageSquare },
        { id: 'support', icon: PhoneCall },
        { id: 'technical', icon: Mail }
    ];

    const toggleQuestion = (categoryId, questionIndex) => {
        setOpenQuestions(prev => ({
            ...prev,
            [`${categoryId}-${questionIndex}`]: !prev[`${categoryId}-${questionIndex}`]
        }));
    };

    // Filtra as perguntas baseado na busca
    const getFAQs = (categoryId) => {
        const questions = t(`faq.categories.${categoryId}.questions`, { returnObjects: true });
        if (!searchTerm) return questions;

        return questions.filter(q =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
    const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const cardBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
    const borderClass = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

    return (
        <section className={`${bgClass} py-16`}>
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-3xl sm:text-4xl font-bold ${textClass} mb-6`}
                    >
                        {t('faq.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                    >
                        {t('faq.subtitle')}
                    </motion.p>

                    {/* Search */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 max-w-xl mx-auto"
                    >
                        <div className="relative">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder={t('faq.searchPlaceholder')}
                                className={`w-full px-4 py-3 pl-12 rounded-lg ${
                                    theme === 'dark'
                                        ? 'bg-gray-800 border-gray-700 text-white'
                                        : 'bg-white border-gray-300'
                                } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        </div>
                    </motion.div>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                                    activeCategory === category.id
                                        ? 'bg-primary-600 text-white'
                                        : theme === 'dark'
                                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                <Icon className="h-5 w-5 mr-2" />
                                {t(`faq.categories.${category.id}.title`)}
                            </button>
                        );
                    })}
                </div>

                {/* FAQ Items */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {getFAQs(activeCategory).map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${cardBgClass} rounded-lg shadow-sm overflow-hidden`}
                        >
                            <button
                                onClick={() => toggleQuestion(activeCategory, index)}
                                className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                                aria-expanded={openQuestions[`${activeCategory}-${index}`]}
                            >
                                <span className={`font-medium ${textClass}`}>
                                    {faq.question}
                                </span>
                                {openQuestions[`${activeCategory}-${index}`] ? (
                                    <Minus className="h-5 w-5 text-primary-600 flex-shrink-0 ml-4" />
                                ) : (
                                    <Plus className="h-5 w-5 text-primary-600 flex-shrink-0 ml-4" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openQuestions[`${activeCategory}-${index}`] && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden border-t border-gray-200"
                                    >
                                        <div className="p-4">
                                            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}

                    {/* No Results */}
                    {getFAQs(activeCategory).length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <h3 className={`text-lg font-medium ${textClass} mb-2`}>
                                {t('faq.noResults.title')}
                            </h3>
                            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                {t('faq.noResults.message')}
                            </p>
                        </motion.div>
                    )}
                </div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h3 className={`text-xl font-semibold ${textClass} mb-4`}>
                        {t('faq.contact.title')}
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                        {t('faq.contact.message')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/contact" className={`btn ${theme === 'dark' ? 'btn-white' : 'btn-primary'}`}>
                            {t('faq.contact.buttons.contact')}
                        </a>
                        <a href="mailto:support@align.com" className="btn btn-secondary">
                            {t('faq.contact.buttons.email')}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;