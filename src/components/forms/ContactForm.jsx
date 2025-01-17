import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/theme/ThemeContext';
import { Send, Loader2, Check } from 'lucide-react';
import { serviceIds } from '../../lib/constants';

const ContactForm = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            // Simulação de envio - substitua pela sua lógica real
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitted(true);
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
            >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    theme === 'dark' ? 'bg-green-900' : 'bg-green-100'
                }`}>
                    <Check className={`h-8 w-8 ${
                        theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                    {t('contactForm.success.title')}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {t('contactForm.success.message')}
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className={`mt-6 btn ${theme === 'dark' ? 'btn-white' : 'btn-secondary'}`}
                >
                    {t('contactForm.success.newMessage')}
                </button>
            </motion.div>
        );
    }

    const inputClassName = `block w-full rounded-lg shadow-sm sm:text-sm ${
        theme === 'dark' 
            ? 'bg-gray-800 border-gray-700 text-white focus:ring-primary-500 focus:border-primary-500' 
            : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
    }`;

    const labelClassName = `block text-sm font-medium mb-1 ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
    }`;

    const errorClassName = "mt-1 text-sm text-red-600";

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Nome */}
            <div>
                <label htmlFor="name" className={labelClassName}>
                    {t('contactForm.fields.name.label')} *
                </label>
                <input
                    type="text"
                    id="name"
                    {...register('name', {
                        required: t('contactForm.fields.name.required'),
                        minLength: {
                            value: 3,
                            message: t('contactForm.fields.name.minLength')
                        }
                    })}
                    className={`${inputClassName} ${errors.name ? 'border-red-300' : ''}`}
                />
                {errors.name && (
                    <p className={errorClassName}>{errors.name.message}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className={labelClassName}>
                    {t('contactForm.fields.email.label')} *
                </label>
                <input
                    type="email"
                    id="email"
                    {...register('email', {
                        required: t('contactForm.fields.email.required'),
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: t('contactForm.fields.email.invalid')
                        }
                    })}
                    className={`${inputClassName} ${errors.email ? 'border-red-300' : ''}`}
                />
                {errors.email && (
                    <p className={errorClassName}>{errors.email.message}</p>
                )}
            </div>

            {/* Telefone */}
            <div>
                <label htmlFor="phone" className={labelClassName}>
                    {t('contactForm.fields.phone.label')} *
                </label>
                <input
                    type="tel"
                    id="phone"
                    {...register('phone', {
                        required: t('contactForm.fields.phone.required'),
                        pattern: {
                            value: /^[0-9()-\s+]*$/,
                            message: t('contactForm.fields.phone.invalid')
                        }
                    })}
                    className={`${inputClassName} ${errors.phone ? 'border-red-300' : ''}`}
                    placeholder={t('contactForm.fields.phone.placeholder')}
                />
                {errors.phone && (
                    <p className={errorClassName}>{errors.phone.message}</p>
                )}
            </div>

            {/* Empresa */}
            <div>
                <label htmlFor="company" className={labelClassName}>
                    {t('contactForm.fields.company.label')} *
                </label>
                <input
                    type="text"
                    id="company"
                    {...register('company', {
                        required: t('contactForm.fields.company.required')
                    })}
                    className={`${inputClassName} ${errors.company ? 'border-red-300' : ''}`}
                />
                {errors.company && (
                    <p className={errorClassName}>{errors.company.message}</p>
                )}
            </div>

            {/* Serviços de Interesse */}
            <div>
                <label className={labelClassName}>
                    {t('contactForm.fields.services.label')} *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.values(serviceIds).map((serviceId) => (
                        <div key={serviceId} className="flex items-center">
                            <input
                                type="checkbox"
                                id={serviceId}
                                value={serviceId}
                                {...register('services', {
                                    required: t('contactForm.fields.services.required')
                                })}
                                className={`h-4 w-4 ${
                                    theme === 'dark'
                                        ? 'text-primary-400 bg-gray-700 border-gray-600'
                                        : 'text-primary-600 border-gray-300'
                                } rounded focus:ring-primary-500`}
                            />
                            <label
                                htmlFor={serviceId}
                                className={`ml-2 text-sm ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}
                            >
                                {t(`services.${serviceId}.title`)}
                            </label>
                        </div>
                    ))}
                </div>
                {errors.services && (
                    <p className={errorClassName}>{errors.services.message}</p>
                )}
            </div>

            {/* Mensagem */}
            <div>
                <label htmlFor="message" className={labelClassName}>
                    {t('contactForm.fields.message.label')} *
                </label>
                <textarea
                    id="message"
                    rows={4}
                    {...register('message', {
                        required: t('contactForm.fields.message.required'),
                        minLength: {
                            value: 20,
                            message: t('contactForm.fields.message.minLength')
                        }
                    })}
                    className={`${inputClassName} ${errors.message ? 'border-red-300' : ''}`}
                    placeholder={t('contactForm.fields.message.placeholder')}
                />
                {errors.message && (
                    <p className={errorClassName}>{errors.message.message}</p>
                )}
            </div>

            {/* LGPD Consent */}
            <div>
                <div className="flex items-start">
                    <input
                        type="checkbox"
                        id="consent"
                        {...register('consent', {
                            required: t('contactForm.fields.consent.required')
                        })}
                        className={`h-4 w-4 ${
                            theme === 'dark'
                                ? 'text-primary-400 bg-gray-700 border-gray-600'
                                : 'text-primary-600 border-gray-300'
                        } rounded focus:ring-primary-500 mt-1`}
                    />
                    <label
                        htmlFor="consent"
                        className={`ml-2 text-sm ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}
                    >
                        {t('contactForm.fields.consent.label')}{' '}
                        <a
                            href="/privacy"
                            className="text-primary-600 hover:text-primary-500"
                        >
                            {t('contactForm.fields.consent.privacyLink')}
                        </a>
                    </label>
                </div>
                {errors.consent && (
                    <p className={errorClassName}>{errors.consent.message}</p>
                )}
            </div>

            {/* Submit Button */}
            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn ${
                        theme === 'dark' ? 'btn-white' : 'btn-primary'
                    } flex items-center justify-center`}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin h-5 w-5 mr-2" />
                            {t('contactForm.submitting')}
                        </>
                    ) : (
                        <>
                            <Send className="h-5 w-5 mr-2" />
                            {t('contactForm.submit')}
                        </>
                    )}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;