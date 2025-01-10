// src/components/layout/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
            <div className="container-custom py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src="/align-logo.svg"
                            alt="Align Logo"
                            className="h-8 w-auto"
                        />
                    </Link>

                    {/* Navigation */}
                    <Navigation />

                    {/* CTA Button - Hidden on mobile */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="btn btn-primary"
                        >
                            Fale com um Especialista
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;