// src/components/contact/LocationMap.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const locations = [
    {
        city: 'São Paulo',
        address: 'Av. Paulista, 1000 - Bela Vista',
        zipCode: 'CEP: 01310-100',
        phone: '+55 (11) 9999-9999',
        email: 'sp@align.com',
        hours: 'Segunda à Sexta: 9h às 18h',
        coordinates: {
            lat: -23.5505,
            lng: -46.6333
        }
    },
    {
        city: 'Rio de Janeiro',
        address: 'Av. Rio Branco, 500 - Centro',
        zipCode: 'CEP: 20040-002',
        phone: '+55 (21) 9999-9999',
        email: 'rj@align.com',
        hours: 'Segunda à Sexta: 9h às 18h',
        coordinates: {
            lat: -22.9068,
            lng: -43.1729
        }
    }
];

const LocationCard = ({ location }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-sm p-6"
    >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {location.city}
        </h3>

        <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div className="ml-3">
                    <p className="text-gray-900">{location.address}</p>
                    <p className="text-gray-600 text-sm">{location.zipCode}</p>
                </div>
            </div>

            {/* Phone */}
            <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <a
                    href={`tel:${location.phone}`}
                    className="ml-3 text-gray-600 hover:text-primary-600 transition-colors"
                >
                    {location.phone}
                </a>
            </div>

            {/* Email */}
            <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <a
                    href={`mailto:${location.email}`}
                    className="ml-3 text-gray-600 hover:text-primary-600 transition-colors"
                >
                    {location.email}
                </a>
            </div>

            {/* Business Hours */}
            <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div className="ml-3">
                    <p className="text-gray-600">{location.hours}</p>
                    <p className="text-gray-600 text-sm">Sábado: 9h às 13h</p>
                </div>
            </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
            <a
                href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn btn-primary text-center"
            >
                Ver no Mapa
            </a>
            <a
                href={`tel:${location.phone}`}
                className="flex-1 btn btn-secondary text-center"
            >
                Ligar
            </a>
        </div>
    </motion.div>
);

const LocationMap = () => {
    return (
        <div>
            {/* Map */}
            <div className="relative h-96 bg-gray-200 rounded-xl mb-12">
                {/* Aqui você integraria com um serviço de mapas como Google Maps */}
                <div className="absolute inset-0 bg-gray-900/10 rounded-xl" />

                {/* Map Markers */}
                {locations.map((location) => (
                    <div
                        key={location.city}
                        className="absolute"
                        style={{
                            left: `${(location.coordinates.lng + 180) * (100 / 360)}%`,
                            top: `${(90 - location.coordinates.lat) * (100 / 180)}%`
                        }}
                    >
                        <div className="relative -translate-x-1/2 -translate-y-1/2">
                            <div className="w-4 h-4 bg-primary-600 rounded-full animate-ping absolute" />
                            <div className="w-4 h-4 bg-primary-600 rounded-full relative" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Location Cards */}
            <div className="grid md:grid-cols-2 gap-8">
                {locations.map((location) => (
                    <LocationCard key={location.city} location={location} />
                ))}
            </div>

            {/* Global Support */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 bg-primary-50 rounded-xl p-8 text-center"
            >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Suporte Global
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Além de nossas unidades físicas, oferecemos suporte remoto para clientes
                    em todo o mundo, com atendimento em múltiplos idiomas e adaptado aos
                    diferentes fusos horários.
                </p>
                <div className="mt-6">
                    <a href="/contact" className="btn btn-primary">
                        Entre em Contato
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default LocationMap;