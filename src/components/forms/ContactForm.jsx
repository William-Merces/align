// src/components/forms/ContactForm.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import {
    Send,
    Loader2
} from 'lucide-react';

const serviceOptions = [
    'Desenvolvimento',
    'Customer Support',
    'Video Editing',
    'Marketing',
    'Project Management',
    'Admin',
    'Accounting',
    'Design'
];

const budgetRanges = [
    'Até R$ 5.000',
    'R$ 5.000 - R$ 10.000',
    'R$ 10.000 - R$ 20.000',
    'R$ 20.000 - R$ 50.000',
    'Acima de R$ 50.000'
];

const ContactForm = () => {
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
            // Aqui você implementaria a lógica de envio do formulário
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulação
            setSubmitted(true);
            reset();
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
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
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mensagem Enviada!
                </h3>
                <p className="text-gray-600 mb-6">
                    Agradecemos seu contato. Nossa equipe retornará em breve.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary"
                >
                    Enviar Nova Mensagem
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Nome */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Nome Completo *
                </label>
                <input
                    type="text"
                    id="name"
                    {...register('name', {
                        required: 'Nome é obrigatório',
                        minLength: {
                            value: 3,
                            message: 'Nome deve ter pelo menos 3 caracteres'
                        }
                    })}
                    className={`block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${errors.name ? 'border-red-300' : 'border-gray-300'
                        }`}
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                    </p>
                )}
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Email Corporativo *
                </label>
                <input
                    type="email"
                    id="email"
                    {...register('email', {
                        required: 'Email é obrigatório',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email inválido'
                        }
                    })}
                    className={`block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${errors.email ? 'border-red-300' : 'border-gray-300'
                        }`}
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* Telefone */}
            <div>
                <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Telefone *
                </label>
                <input
                    type="tel"
                    id="phone"
                    {...register('phone', {
                        required: 'Telefone é obrigatório',
                        pattern: {
                            value: /^[0-9()-\s+]*$/,
                            message: 'Telefone inválido'
                        }
                    })}
                    className={`block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${errors.phone ? 'border-red-300' : 'border-gray-300'
                        }`}
                    placeholder="(11) 99999-9999"
                />
                {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.phone.message}
                    </p>
                )}
            </div>

            {/* Empresa */}
            <div>
                <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Empresa *
                </label>
                <input
                    type="text"
                    id="company"
                    {...register('company', {
                        required: 'Empresa é obrigatória'
                    })}
                    className={`block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${errors.company ? 'border-red-300' : 'border-gray-300'
                        }`}
                />
                {errors.company && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.company.message}
                    </p>
                )}
            </div>

            {/* Cargo */}
            <div>
                <label
                    htmlFor="jobTitle"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Cargo
                </label>
                <input
                    type="text"
                    id="jobTitle"
                    {...register('jobTitle')}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
            </div>

            {/* Tamanho da Empresa */}
            <div>
                <label
                    htmlFor="companySize"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Tamanho da Empresa
                </label>
                <select
                    id="companySize"
                    {...register('companySize')}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                >
                    <option value="">Selecione</option>
                    <option value="1-10">1-10 funcionários</option>
                    <option value="11-50">11-50 funcionários</option>
                    <option value="51-200">51-200 funcionários</option>
                    <option value="201-500">201-500 funcionários</option>
                    <option value="501+">501+ funcionários</option>
                </select>
            </div>

            {/* Serviços de Interesse */}
            <div>
                <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Serviços de Interesse *
                </label>
                <div className="grid grid-cols-2 gap-4">
                    {serviceOptions.map((service) => (
                        <div key={service} className="flex items-center">
                            <input
                                type="checkbox"
                                id={service}
                                value={service}
                                {...register('services', {
                                    required: 'Selecione pelo menos um serviço'
                                })}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor={service}
                                className="ml-2 text-sm text-gray-600"
                            >
                                {service}
                            </label>
                        </div>
                    ))}
                </div>
                {errors.services && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.services.message}
                    </p>
                )}
            </div>

            {/* Orçamento */}
            <div>
                <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Orçamento Mensal Estimado
                </label>
                <select
                    id="budget"
                    {...register('budget')}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                >
                    <option value="">Selecione</option>
                    {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                            {range}
                        </option>
                    ))}
                </select>
            </div>

            {/* Mensagem */}
            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Mensagem *
                </label>
                <textarea
                    id="message"
                    rows={4}
                    {...register('message', {
                        required: 'Mensagem é obrigatória',
                        minLength: {
                            value: 20,
                            message: 'Mensagem deve ter pelo menos 20 caracteres'
                        }
                    })}
                    className={`block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${errors.message ? 'border-red-300' : 'border-gray-300'
                        }`}
                    placeholder="Descreva suas necessidades e objetivos..."
                />
                {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                    </p>
                )}
            </div>

            {/* Preferência de Contato */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferência de Contato
                </label>
                <div className="space-y-2">
                    {['Email', 'Telefone', 'WhatsApp'].map((method) => (
                        <div key={method} className="flex items-center">
                            <input
                                type="radio"
                                id={method}
                                value={method}
                                {...register('contactPreference')}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                            />
                            <label
                                htmlFor={method}
                                className="ml-2 text-sm text-gray-600"
                            >
                                {method}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* LGPD Consent */}
            <div>
                <div className="flex items-start">
                    <input
                        type="checkbox"
                        id="consent"
                        {...register('consent', {
                            required: 'É necessário aceitar os termos'
                        })}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1"
                    />
                    <label
                        htmlFor="consent"
                        className="ml-2 text-sm text-gray-600"
                    >
                        Concordo com o processamento dos meus dados de acordo com a
                        <a href="/privacy" className="text-primary-600 hover:text-primary-700 ml-1">
                            Política de Privacidade
                        </a>
                    </label>
                </div>
                {errors.consent && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.consent.message}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary flex items-center justify-center"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin h-5 w-5 mr-2" />
                            Enviando...
                        </>
                    ) : (
                        <>
                            <Send className="h-5 w-5 mr-2" />
                            Enviar Mensagem
                        </>
                    )}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;