//src/components/sections/ServiceCard.jsx

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/theme/ThemeContext';

const ServiceCard = ({ service }) => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);
    const Icon = service.icon;

    const cardBgClass = theme === 'dark' 
        ? 'bg-gray-800 hover:bg-gray-700' 
        : 'bg-white hover:bg-gray-50';
    const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const subTextClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
    const borderClass = theme === 'dark' 
        ? 'border-gray-700 hover:border-primary-500' 
        : 'border-gray-200 hover:border-primary-500';

    return (
        <motion.div
            className={`group relative rounded-xl border transition-all duration-300 overflow-hidden ${cardBgClass} ${borderClass}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Card Content */}
            <div className="p-6">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center p-3 ${
                    theme === 'dark' 
                        ? 'bg-gray-700 group-hover:bg-gray-600' 
                        : 'bg-primary-50 group-hover:bg-primary-100'
                } rounded-lg mb-4 transition-colors`}>
                    <Icon className={`h-6 w-6 ${
                        theme === 'dark' 
                            ? 'text-primary-400' 
                            : 'text-primary-600'
                    }`} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-semibold ${textClass} mb-2`}>
                    {t(`services.${service.id}.title`)}
                </h3>

                {/* Description */}
                <p className={`${subTextClass} mb-4`}>
                    {t(`services.${service.id}.description`)}
                </p>

                {/* Sub-services */}
                <ul className="space-y-2 mb-6">
                    {[0, 1, 2].map((index) => (
                        <li key={index} className="flex items-center text-sm">
                            <ChevronRight className={`h-4 w-4 ${
                                theme === 'dark' 
                                    ? 'text-primary-400' 
                                    : 'text-primary-500'
                            } mr-2 flex-shrink-0`} />
                            <span className={subTextClass}>
                                {t(`services.${service.id}.subServices.${index}`)}
                            </span>
                        </li>
                    ))}
                    {service.subServices.length > 3 && (
                        <li className={`text-sm ${
                            theme === 'dark' 
                                ? 'text-primary-400' 
                                : 'text-primary-600'
                        }`}>
                            {t('services.moreServices', { 
                                count: service.subServices.length - 3 
                            })}
                        </li>
                    )}
                </ul>

                {/* CTA */}
                <Link
                    to={`/services/${service.id}`}
                    className={`inline-flex items-center text-sm font-medium ${
                        theme === 'dark' 
                            ? 'text-primary-400 hover:text-primary-300' 
                            : 'text-primary-600 hover:text-primary-700'
                    } transition-colors group-hover:gap-3`}
                >
                    {t('services.learnMore')}
                    <ChevronRight className="h-4 w-4 ml-2 transition-transform" />
                </Link>
            </div>

            {/* Hover Effect Background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${
                theme === 'dark'
                    ? 'from-primary-900/10 to-transparent'
                    : 'from-primary-50 to-transparent'
            } opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

            {/* Mobile Touch Effect */}
            <div className="md:hidden absolute inset-0 bg-current opacity-0 active:opacity-5 transition-opacity" />
        </motion.div>
    );
};

export default ServiceCard;