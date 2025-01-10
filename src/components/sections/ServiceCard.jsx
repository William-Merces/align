// src/components/sections/ServiceCard.jsx
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = service.icon;

    return (
        <div
            className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Card Content */}
            <div className="p-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-primary-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                    {service.description}
                </p>

                {/* Sub-services */}
                <ul className="space-y-2 mb-6">
                    {service.subServices.slice(0, 3).map((subService, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                            <ChevronRight className="h-4 w-4 text-primary-500 mr-2" />
                            {subService}
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto">
                    <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                        Saiba mais
                        <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
            </div>

            {/* Hover Effect Background */}
            <div className={`absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} />
        </div>
    );
};

export default ServiceCard;