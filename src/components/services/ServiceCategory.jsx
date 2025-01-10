// src/components/services/ServiceCategory.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ServiceCategory = ({ service }) => {
    const Icon = service.icon;

    return (
        <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6">
            {/* Icon */}
            <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-lg mb-4 group-hover:bg-primary-100 transition-colors">
                <Icon className="h-6 w-6 text-primary-600" />
            </div>

            {/* Content */}
            <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                    {service.description}
                </p>

                {/* Sub-services List */}
                <ul className="space-y-2 mb-6">
                    {service.subServices.slice(0, 4).map((subService, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                            <ChevronRight className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                            {subService}
                        </li>
                    ))}
                    {service.subServices.length > 4 && (
                        <li className="text-sm text-primary-600">
                            + {service.subServices.length - 4} outros serviços
                        </li>
                    )}
                </ul>

                {/* CTA */}
                <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:gap-2 transition-all"
                >
                    Saiba mais
                    <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
            </div>

            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10" />
        </div>
    );
};

export default ServiceCategory;