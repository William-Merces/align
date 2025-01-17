import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { routes } from '../../config/routes';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    
    // Obtém as rotas do idioma atual
    const currentRoutes = routes[i18n.language] || routes.en;

    const menuItems = [
        { 
            label: t('navigation.services'), 
            href: currentRoutes.services 
        },
        { 
            label: t('navigation.howItWorks'), 
            href: currentRoutes.howItWorks 
        },
        { 
            label: t('navigation.whyAlign'), 
            href: currentRoutes.whyAlign 
        },
        { 
            label: t('navigation.contact'), 
            href: currentRoutes.contact 
        },
    ];

    return (
        <nav className="flex items-center justify-between w-full">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        to={item.href}
                        className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-600 hover:text-primary-600 focus:outline-none"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden z-50">
                    <div className="flex flex-col space-y-4 px-4 py-6">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            to={currentRoutes.contact}
                            className="btn btn-primary w-full text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            {t('common.buttons.contact')}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;