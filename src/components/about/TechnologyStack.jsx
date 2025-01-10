// src/components/about/TechnologyStack.jsx
import React from 'react';
import { motion } from 'framer-motion';

const technologies = {
    'Desenvolvimento': [
        'React',
        'Node.js',
        'Python',
        'Java',
        'AWS',
        'Docker'
    ],
    'Design & UX': [
        'Figma',
        'Adobe XD',
        'Sketch',
        'InVision',
        'Zeplin'
    ],
    'Comunicação': [
        'Slack',
        'Microsoft Teams',
        'Zoom',
        'Discord',
        'Notion'
    ],
    'Gestão de Projetos': [
        'Jira',
        'Trello',
        'Asana',
        'Monday',
        'ClickUp'
    ],
    'Marketing': [
        'HubSpot',
        'Mailchimp',
        'Google Analytics',
        'SEMrush',
        'Hotjar'
    ],
    'Segurança': [
        'Auth0',
        'Cloudflare',
        'AWS Security',
        'SSL/TLS',
        'Firewall'
    ]
};

const TechnologyStack = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Nossa Stack Tecnológica
                    </h2>
                    <p className="text-lg text-gray-600">
                        Utilizamos as melhores e mais modernas tecnologias para entregar
                        soluções de alta qualidade
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {Object.entries(technologies).map(([category, techs], index) => (
                        <motion.div
                            key={category}
                            variants={itemVariants}
                            className="bg-white rounded-xl shadow-sm p-6"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Section */}
                <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Sempre Evoluindo
                        </h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Estamos constantemente atualizando nossa stack tecnológica e
                            incorporando novas ferramentas para oferecer as melhores soluções
                            para nossos clientes.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/services"
                                className="btn btn-primary"
                            >
                                Explorar Soluções
                            </a>
                            <a
                                href="/contact"
                                className="btn btn-secondary"
                            >
                                Consultar um Especialista
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg shadow-sm p-6 text-center"
                    >
                        <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                        <p className="text-sm text-gray-600">Tecnologias Integradas</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg shadow-sm p-6 text-center"
                    >
                        <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                        <p className="text-sm text-gray-600">Uptime Garantido</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg shadow-sm p-6 text-center"
                    >
                        <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                        <p className="text-sm text-gray-600">Monitoramento</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg shadow-sm p-6 text-center"
                    >
                        <div className="text-3xl font-bold text-primary-600 mb-2">ISO</div>
                        <p className="text-sm text-gray-600">Certificado</p>
                    </motion.div>
                </div>

                {/* Security Notice */}
                <div className="mt-12 text-center text-sm text-gray-600">
                    <p>
                        Todas as nossas soluções seguem os mais rigorosos padrões de segurança
                        e conformidade, incluindo LGPD e GDPR.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TechnologyStack;