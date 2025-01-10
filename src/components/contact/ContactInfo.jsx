// src/components/contact/ContactInfo.jsx
import React from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Globe,
    Facebook,
    Twitter,
    Linkedin,
    Instagram
} from 'lucide-react';

const contacts = [
    {
        icon: Phone,
        label: 'Telefone',
        value: '+55 (11) 9999-9999',
        link: 'tel:+551199999999'
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'contato@align.com',
        link: 'mailto:contato@align.com'
    },
    {
        icon: MapPin,
        label: 'Endereço',
        value: 'Av. Paulista, 1000 - São Paulo, SP',
        link: 'https://maps.google.com'
    }
];

const socialMedia = [
    {
        icon: Facebook,
        name: 'Facebook',
        link: 'https://facebook.com/align'
    },
    {
        icon: Twitter,
        name: 'Twitter',
        link: 'https://twitter.com/align'
    },
    {
        icon: Linkedin,
        name: 'LinkedIn',
        link: 'https://linkedin.com/company/align'
    },
    {
        icon: Instagram,
        name: 'Instagram',
        link: 'https://instagram.com/align'
    }
];

const ContactInfo = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
            </h2>

            {/* Contact List */}
            <div className="space-y-6 mb-8">
                {contacts.map((contact) => {
                    const Icon = contact.icon;
                    return (
                        <a
                            key={contact.label}
                            href={contact.link}
                            className="flex items-start hover:bg-gray-50 p-3 rounded-lg transition-colors -mx-3"
                        >
                            <div className="flex-shrink-0">
                                <Icon className="h-6 w-6 text-primary-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                    {contact.label}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {contact.value}
                                </p>
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* Business Hours */}
            <div className="border-t border-gray-200 pt-6 mb-8">
                <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary-600" />
                    <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                            Horário de Atendimento
                        </p>
                        <div className="mt-2 space-y-1">
                            <p className="text-sm text-gray-600">
                                Segunda à Sexta: 9h às 18h
                            </p>
                            <p className="text-sm text-gray-600">
                                Sábado: 9h às 13h
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Support */}
            <div className="border-t border-gray-200 pt-6 mb-8">
                <div className="flex items-start">
                    <Globe className="h-6 w-6 text-primary-600" />
                    <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                            Suporte Global
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            Oferecemos suporte em múltiplos idiomas e atendemos
                            clientes em diferentes fusos horários
                        </p>
                    </div>
                </div>
            </div>

            {/* Social Media */}
            <div className="border-t border-gray-200 pt-6">
                <p className="text-sm font-medium text-gray-900 mb-4">
                    Siga-nos nas Redes Sociais
                </p>
                <div className="flex space-x-4">
                    {socialMedia.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-primary-600 transition-colors"
                                aria-label={social.name}
                            >
                                <Icon className="h-6 w-6" />
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Newsletter Signup */}
            <div className="border-t border-gray-200 pt-6 mt-8">
                <p className="text-sm font-medium text-gray-900 mb-4">
                    Receba Nossas Novidades
                </p>
                <form className="flex gap-2">
                    <input
                        type="email"
                        placeholder="Seu email"
                        className="flex-grow rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                    <button type="submit" className="btn btn-primary">
                        Assinar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactInfo;