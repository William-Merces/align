import React from 'react';
import { motion } from 'framer-motion';
import { Code2, HeadphonesIcon, Video, BarChart3, ClipboardList, UserCog, Calculator, Paintbrush } from 'lucide-react';
import { useTheme } from '../../context/theme/ThemeContext';
import { useTranslation } from 'react-i18next';

const services = [
    { icon: Code2, name: 'development', color: 'bg-blue-500' },
    { icon: HeadphonesIcon, name: 'customer-support', color: 'bg-green-500' },
    { icon: Video, name: 'video-editing', color: 'bg-purple-500' },
    { icon: BarChart3, name: 'marketing', color: 'bg-red-500' },
    { icon: ClipboardList, name: 'project-management', color: 'bg-yellow-500' },
    { icon: UserCog, name: 'admin', color: 'bg-indigo-500' },
    { icon: Calculator, name: 'accounting', color: 'bg-pink-500' },
    { icon: Paintbrush, name: 'design', color: 'bg-orange-500' }
];

const ServiceNode = ({ service, index, isDesktop = false }) => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const Icon = service.icon;

    if (isDesktop) {
        // Desktop: Layout circular
        const radius = 200;
        const angle = (360 / services.length) * index;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="absolute"
                style={{ transform: `translate(${x}px, ${y}px)` }}
            >
                <div className={`w-16 h-16 ${service.color} bg-opacity-10 rounded-full flex items-center justify-center`}>
                    <Icon className={`h-8 w-8 ${service.color} text-opacity-90`} />
                </div>
                <p className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {t(`services.${service.name}.title`)}
                </p>
            </motion.div>
        );
    }

    // Mobile: Layout vertical
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className={`flex items-center p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
        >
            <div className={`w-12 h-12 ${service.color} bg-opacity-10 rounded-full flex items-center justify-center`}>
                <Icon className={`h-6 w-6 ${service.color} text-opacity-90`} />
            </div>
            <div className="ml-4">
                <p className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {t(`services.${service.name}.title`)}
                </p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t(`services.${service.name}.shortDesc`)}
                </p>
            </div>
        </motion.div>
    );
};

const IntegrationDiagram = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const bgColorClass = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
    const textColorClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const subTextColorClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

    return (
        <section className={`py-16 ${bgColorClass}`}>
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className={`text-3xl font-bold mb-4 ${textColorClass}`}>
                        {t('integrationDiagram.title')}
                    </h2>
                    <p className={`text-lg ${subTextColorClass}`}>
                        {t('integrationDiagram.subtitle')}
                    </p>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:block">
                    <div className="relative w-full max-w-4xl mx-auto h-[600px]">
                        {/* Central Logo */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center">
                                    <img src="/align-logo-white.svg" alt="Align Logo" className="w-12 h-12" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Nodes */}
                        {services.map((service, index) => (
                            <ServiceNode
                                key={service.name}
                                service={service}
                                index={index}
                                isDesktop={true}
                            />
                        ))}

                        {/* Connection Lines */}
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
                    </div>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden space-y-4">
                    {services.map((service, index) => (
                        <ServiceNode
                            key={service.name}
                            service={service}
                            index={index}
                            isDesktop={false}
                        />
                    ))}
                </div>

                {/* Integration Benefits */}
                <div className="mt-16 grid md:grid-cols-3 gap-6">
                    {['efficiency', 'synergy', 'scalability'].map((benefit, index) => (
                        <motion.div
                            key={benefit}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
                        >
                            <h3 className={`text-lg font-semibold mb-2 ${textColorClass}`}>
                                {t(`integrationDiagram.benefits.${benefit}.title`)}
                            </h3>
                            <p className={subTextColorClass}>
                                {t(`integrationDiagram.benefits.${benefit}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a
                            href="/contact"
                            className={`btn ${theme === 'dark' ? 'btn-white' : 'btn-primary'}`}
                        >
                            {t('integrationDiagram.cta')}
                        </a>
                        <p className={`mt-4 text-sm ${subTextColorClass}`}>
                            {t('integrationDiagram.ctaSubtext')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IntegrationDiagram;