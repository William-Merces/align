//src/components/sections/Contact.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/theme/ThemeContext';
import { 
    Phone, 
    Mail, 
    MessageSquare, 
    Clock, 
    Calendar 
} from 'lucide-react';
import ContactForm from '../forms/ContactForm';
import ContactInfo from '../contact/ContactInfo';
import { getFormattedAddress } from '../../lib/constants';

const Contact = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const contactMethods = [
        {
            id: 'phone',
            icon: Phone,
            title: 'contact.methods.phone.title',
            description: 'contact.methods.phone.description',
            action: 'contact.methods.phone.action',
            link: 'tel:+551199999999'
        },
        {
            id: 'chat',
            icon: MessageSquare,
            title: 'contact.methods.chat.title',
            description: 'contact.methods.chat.description',
            action: 'contact.methods.chat.action',
            link: '#chat'
        },
        {
            id: 'calendar',
            icon: Calendar,
            title: 'contact.methods.calendar.title',
            description: 'contact.methods.calendar.description',
            action: 'contact.methods.calendar.action',
            link: '#schedule'
        }
    ];

    const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
    const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const cardBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';

    return (
        <>
            {/* Hero Section */}
            <section className={`pt-32 pb-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`text-4xl sm:text-5xl font-bold ${textClass} mb-6`}
                        >
                            {t('contact.hero.title')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                        >
                            {t('contact.hero.subtitle')}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Contact Methods Grid */}
            <section className="py-12">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => {
                            const Icon = method.icon;
                            return (
                                <motion.div
                                    key={method.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`${cardBgClass} rounded-xl shadow-sm p-6 text-center`}
                                >
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
                                        theme === 'dark' ? 'bg-primary-900 text-primary-400' : 'bg-primary-50 text-primary-600'
                                    } mb-4`}>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className={`text-xl font-semibold ${textClass} mb-2`}>
                                        {t(method.title)}
                                    </h3>
                                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                                        {t(method.description)}
                                    </p>
                                    <a
                                        href={method.link}
                                        className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                                    >
                                        {t(method.action)} →
                                    </a>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Main Contact Form Section */}
            <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className={`${cardBgClass} rounded-xl shadow-sm p-8`}
                            >
                                <h2 className={`text-2xl font-bold ${textClass} mb-6`}>
                                    {t('contact.form.title')}
                                </h2>
                                <ContactForm />
                            </motion.div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <ContactInfo />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Hours Section */}
            <section className="py-16">
                <div className="container-custom">
                    <div className={`${cardBgClass} rounded-xl shadow-sm p-8 max-w-3xl mx-auto`}>
                        <div className="flex items-start">
                            <Clock className="h-6 w-6 text-primary-600 mt-1" />
                            <div className="ml-4">
                                <h3 className={`text-xl font-semibold ${textClass} mb-4`}>
                                    {t('contact.hours.title')}
                                </h3>
                                <div className="space-y-2">
                                    {['weekdays', 'saturday', 'sunday'].map((day) => (
                                        <p key={day} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                            {t(`contact.hours.${day}`)}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className={`py-16 ${theme === 'dark' ? 'bg-primary-900' : 'bg-primary-600'} text-white`}>
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            {t('contact.newsletter.title')}
                        </h2>
                        <p className="text-lg text-primary-100 mb-8">
                            {t('contact.newsletter.subtitle')}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder={t('contact.newsletter.placeholder')}
                                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                            <button type="submit" className="btn btn-white">
                                {t('contact.newsletter.button')}
                            </button>
                        </form>
                        <p className="mt-4 text-sm text-primary-200">
                            {t('contact.newsletter.disclaimer')}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;