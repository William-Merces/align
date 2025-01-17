import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/theme/ThemeContext';
import { ArrowRight, Check } from 'lucide-react';
import ContactForm from '../forms/ContactForm';

const Hero = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const highlights = ['efficiency', 'implementation', 'scalability'];

    const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
    const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const cardBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';

    return (
        <section className={`relative ${bgClass} pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pb-24`}>
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${textClass} tracking-tight`}
                        >
                            {t('hero.title')}
                            <span className="text-primary-600">
                                {' '}{t('hero.titleHighlight')}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl`}
                        >
                            {t('hero.subtitle')}
                        </motion.p>

                        {/* Key Solutions List */}
                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            {highlights.map((highlight, index) => (
                                <motion.li
                                    key={highlight}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    className="flex items-center text-lg"
                                >
                                    <span className="flex-shrink-0 p-1 rounded-full bg-primary-100 mr-3">
                                        <Check className="h-5 w-5 text-primary-600" />
                                    </span>
                                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                                        {t(`hero.highlights.${highlight}`)}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Urgency Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                                theme === 'dark'
                                    ? 'bg-primary-900 text-primary-100'
                                    : 'bg-primary-50 text-primary-700'
                            }`}
                        >
                            {t('hero.urgencyBadge')}
                        </motion.div>

                        {/* CTA Buttons - Visible only on mobile */}
                        <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
                            <Link
                                to="/contact"
                                className={`btn ${theme === 'dark' ? 'btn-white' : 'btn-primary'} text-center`}
                            >
                                {t('hero.cta.primary')}
                            </Link>
                            <Link
                                to="/services"
                                className="btn btn-secondary text-center"
                            >
                                {t('hero.cta.secondary')}
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className={`relative z-10 ${cardBgClass} rounded-xl shadow-xl p-6`}
                        >
                            <h3 className={`text-2xl font-semibold ${textClass} mb-2`}>
                                {t('hero.form.title')}
                            </h3>
                            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                {t('hero.form.subtitle')}
                            </p>
                            <div className="mt-6">
                                <ContactForm />
                            </div>
                        </motion.div>

                        {/* Background decoration */}
                        {theme === 'dark' ? null : (
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-100 to-primary-50 rounded-xl transform translate-x-4 translate-y-4" />
                        )}
                    </div>
                </div>

                {/* Quick Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className={`mt-16 pt-8 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}
                >
                    <div className="grid md:grid-cols-3 gap-8">
                        {['speed', 'support', 'guarantee'].map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + (index * 0.1) }}
                                className="text-center"
                            >
                                <div className={`text-2xl font-bold text-primary-600 mb-2`}>
                                    {t(`hero.benefits.${benefit}.value`)}
                                </div>
                                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                    {t(`hero.benefits.${benefit}.description`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;