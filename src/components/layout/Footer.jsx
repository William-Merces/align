// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { name: 'Desenvolvimento', href: '/services/development' },
            { name: 'Customer Support', href: '/services/customer-support' },
            { name: 'Video Editing', href: '/services/video-editing' },
            { name: 'Marketing', href: '/services/marketing' },
            { name: 'Project Management', href: '/services/project-management' },
            { name: 'Admin', href: '/services/admin' },
            { name: 'Accounting', href: '/services/accounting' },
            { name: 'Design', href: '/services/design' }
        ],
        company: [
            { name: 'Sobre Nós', href: '/about' },
            { name: 'Como Funciona', href: '/how-it-works' },
            { name: 'Por que a Align', href: '/why-align' },
            { name: 'Contato', href: '/contact' }
        ],
        support: [
            { name: 'FAQ', href: '/faq' },
            { name: 'Centro de Ajuda', href: '/help' },
            { name: 'Base de Conhecimento', href: '/knowledge' },
            { name: 'Status', href: '/status' }
        ],
        legal: [
            { name: 'Termos de Uso', href: '/terms' },
            { name: 'Política de Privacidade', href: '/privacy' },
            { name: 'Cookies', href: '/cookies' },
            { name: 'Compliance', href: '/compliance' }
        ]
    };

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: '#' },
        { name: 'Twitter', icon: Twitter, href: '#' },
        { name: 'LinkedIn', icon: Linkedin, href: '#' },
        { name: 'Instagram', icon: Instagram, href: '#' }
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <img
                                src="/align-logo-white.svg"
                                alt="Align Logo"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Transformando a comunicação empresarial com soluções integradas e
                            personalizadas para impulsionar seus resultados.
                        </p>
                        <div className="space-y-3">
                            <a
                                href="tel:+1234567890"
                                className="flex items-center text-gray-400 hover:text-white transition-colors"
                            >
                                <Phone className="h-5 w-5 mr-2" />
                                +1 (234) 567-890
                            </a>
                            <a
                                href="mailto:contato@align.com"
                                className="flex items-center text-gray-400 hover:text-white transition-colors"
                            >
                                <Mail className="h-5 w-5 mr-2" />
                                contato@align.com
                            </a>
                            <div className="flex items-center text-gray-400">
                                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                                <span>São Paulo, SP - Brasil</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Serviços</h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Empresa</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h3 className="text-white font-semibold mt-8 mb-4">Suporte</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">
                            Receba novidades e conteúdo exclusivo sobre comunicação empresarial
                        </p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Seu email"
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="w-full btn btn-primary"
                            >
                                Inscrever-se
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} Align. Todos os direitos reservados.
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className="text-gray-400 hover:text-white text-sm transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;