// src/components/services/IntegrationDiagram.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    HeadphonesIcon,
    Video,
    BarChart3,
    ClipboardList,
    UserCog,
    Calculator,
    Paintbrush,
    ArrowRight
} from 'lucide-react';

const services = [
    { icon: Code2, name: 'Desenvolvimento', color: 'bg-blue-500' },
    { icon: HeadphonesIcon, name: 'Customer Support', color: 'bg-green-500' },
    { icon: Video, name: 'Video Editing', color: 'bg-purple-500' },
    { icon: BarChart3, name: 'Marketing', color: 'bg-red-500' },
    { icon: ClipboardList, name: 'Project Management', color: 'bg-yellow-500' },
    { icon: UserCog, name: 'Admin', color: 'bg-indigo-500' },
    { icon: Calculator, name: 'Accounting', color: 'bg-pink-500' },
    { icon: Paintbrush, name: 'Design', color: 'bg-orange-500' }
];

const ConnectionLine = ({ index }) => (
    <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 * index, duration: 0.5 }}
        className="absolute h-px bg-gray-200 transform origin-left"
        style={{
            width: '100%',
            top: '50%',
            left: '100%',
            transform: `rotate(${45 * index}deg)`
        }}
    />
);

const ServiceNode = ({ service, index, total }) => {
    const Icon = service.icon;
    const angle = (360 / total) * index;
    const radius = 200; // Adjust this value to change the circle size

    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="absolute"
            style={{
                transform: `translate(${x}px, ${y}px)`
            }}
        >
            <div className="relative">
                <div className={`w-16 h-16 rounded-full ${service.color} bg-opacity-10 flex items-center justify-center`}>
                    <Icon className={`h-8 w-8 ${service.color} text-opacity-90`} />
                </div>
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <p className="text-sm font-medium text-gray-900">{service.name}</p>
                </div>
            </div>
        </motion.div>
    );
};

const IntegrationDiagram = () => {
    return (
        <div className="relative w-full max-w-4xl mx-auto h-[600px]">
            {/* Central Hub */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
                <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center">
                        <img
                            src="/align-logo-white.svg"
                            alt="Align Logo"
                            className="w-12 h-12"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Service Nodes */}
            {services.map((service, index) => (
                <ServiceNode
                    key={service.name}
                    service={service}
                    index={index}
                    total={services.length}
                />
            ))}

            {/* Integration Benefits */}
            <div className="absolute bottom-0 left-0 right-0 text-center">
                <div className="grid grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="font-bold text-2xl text-primary-600 mb-2">40%</div>
                        <p className="text-sm text-gray-600">Redução em Custos</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="font-bold text-2xl text-primary-600 mb-2">65%</div>
                        <p className="text-sm text-gray-600">Aumento em Eficiência</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="font-bold text-2xl text-primary-600 mb-2">98%</div>
                        <p className="text-sm text-gray-600">Satisfação dos Clientes</p>
                    </motion.div>
                </div>
            </div>

            {/* Radial Connection Lines */}
            {services.map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="absolute top-1/2 left-1/2 w-[200px] h-px bg-gray-200 origin-left"
                    style={{
                        transform: `rotate(${(360 / services.length) * index}deg)`
                    }}
                />
            ))}

            {/* Outer Circle */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.8 }}
                className="absolute top-1/2 left-1/2 w-[420px] h-[420px] border-2 border-primary-200 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    );
};

export default IntegrationDiagram;
