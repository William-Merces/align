// src/components/layout/Navigation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: 'Serviços', href: '/services' },
        { label: 'Como Funciona', href: '/how-it-works' },
        { label: 'Por que a Align', href: '/why-align' },
        { label: 'Contato', href: '/contact' },
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
                            to="/contact"
                            className="btn btn-primary w-full text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Fale com um Especialista
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;