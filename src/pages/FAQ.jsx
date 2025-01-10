// src/pages/FAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Plus,
    Minus,
    MessageSquare,
    PhoneCall,
    Mail,
    HelpCircle
} from 'lucide-react';
import SEO from '../components/utils/SEO';

const categories = [
    {
        id: 'services',
        title: 'Nossos Serviços',
        icon: HelpCircle,
        questions: [
            {
                question: 'Quais serviços a Align oferece?',
                answer: 'A Align oferece uma gama completa de serviços de comunicação empresarial, incluindo Desenvolvimento, Customer Support, Video Editing, Marketing, Project Management, Admin, Accounting e Design. Cada serviço é personalizado de acordo com as necessidades específicas do cliente.'
            },
            {
                question: 'Como funciona o processo de implementação?',
                answer: 'O processo de implementação segue quatro etapas principais: 1) Análise inicial das necessidades, 2) Proposta personalizada, 3) Implementação com onboarding completo, e 4) Acompanhamento contínuo com suporte dedicado.'
            },
            {
                question: 'Vocês atendem empresas de qualquer tamanho?',
                answer: 'Sim, nossos serviços são escaláveis e adaptáveis para empresas de todos os portes, desde startups até grandes corporações. Desenvolvemos soluções personalizadas para cada caso.'
            }
        ]
    },
    {
        id: 'pricing',
        title: 'Preços e Planos',
        icon: MessageSquare,
        questions: [
            {
                question: 'Como funciona o modelo de preços?',
                answer: 'Trabalhamos com um modelo transparente de precificação baseado nos serviços utilizados e volume de demanda. Oferecemos planos flexíveis que podem ser ajustados conforme suas necessidades.'
            },
            {
                question: 'Existe período mínimo de contrato?',
                answer: 'Oferecemos diferentes modalidades de contrato para atender às necessidades de cada cliente. Entre em contato para discutirmos a melhor opção para sua empresa.'
            },
            {
                question: 'Quais formas de pagamento são aceitas?',
                answer: 'Aceitamos diversas formas de pagamento, incluindo cartão de crédito, transferência bancária e boleto. Os pagamentos são processados mensalmente com base nos serviços utilizados.'
            }
        ]
    },
    {
        id: 'support',
        title: 'Suporte e Atendimento',
        icon: PhoneCall,
        questions: [
            {
                question: 'Como funciona o suporte?',
                answer: 'Oferecemos suporte 24/7 através de múltiplos canais (chat, email, telefone). Nossa equipe está sempre disponível para ajudar com qualquer questão ou necessidade.'
            },
            {
                question: 'Qual o tempo médio de resposta?',
                answer: 'Nosso tempo médio de primeira resposta é de 4 horas, com resolução da maioria dos casos em até 24 horas. Casos críticos têm prioridade e atendimento imediato.'
            },
            {
                question: 'O suporte é oferecido em outros idiomas?',
                answer: 'Sim, nossa equipe é multilíngue e pode oferecer suporte em diversos idiomas, incluindo Português, Inglês e Espanhol.'
            }
        ]
    },
    {
        id: 'technical',
        title: 'Questões Técnicas',
        icon: Mail,
        questions: [
            {
                question: 'Quais tecnologias vocês utilizam?',
                answer: 'Utilizamos as tecnologias mais modernas e seguras do mercado, sempre atualizadas com as últimas tendências. Nossa stack inclui ferramentas enterprise-grade para garantir a melhor performance.'
            },
            {
                question: 'Como vocês garantem a segurança dos dados?',
                answer: 'Seguimos rigorosos protocolos de segurança, incluindo criptografia de ponta a ponta, backups regulares e conformidade com LGPD e outras regulamentações de proteção de dados.'
            },
            {
                question: 'É possível integrar com outros sistemas?',
                answer: 'Sim, nossas soluções são desenvolvidas pensando em interoperabilidade. Oferecemos APIs e integrações com os principais sistemas do mercado.'
            }
        ]
    }
];

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('services');
    const [openQuestions, setOpenQuestions] = useState({});

    const toggleQuestion = (categoryId, questionIndex) => {
        setOpenQuestions(prev => ({
            ...prev,
            [`${categoryId}-${questionIndex}`]: !prev[`${categoryId}-${questionIndex}`]
        }));
    };

    const filteredCategories = categories.map(category => ({
        ...category,
        questions: category.questions.filter(q =>
            q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.questions.length > 0);

    return (
        <>
            <SEO
                title="FAQ - Perguntas Frequentes | Align"
                description="Encontre respostas para as principais dúvidas sobre os serviços da Align."
            />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h1
                            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Como Podemos Ajudar?
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-600 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Encontre respostas para as principais dúvidas sobre nossos serviços
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div
                            className="max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Buscar pergunta..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-16">
                <div className="container-custom">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-colors ${activeCategory === category.id
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-white text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <Icon className="h-5 w-5 mr-2" />
                                    {category.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Questions */}
                    <div className="max-w-3xl mx-auto">
                        {filteredCategories.map((category) => (
                            <div
                                key={category.id}
                                className={activeCategory === category.id ? 'block' : 'hidden'}
                            >
                                <div className="space-y-4">
                                    {category.questions.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="bg-white rounded-lg shadow-sm"
                                        >
                                            <button
                                                onClick={() => toggleQuestion(category.id, index)}
                                                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                                            >
                                                <span className="font-medium text-gray-900">
                                                    {item.question}
                                                </span>
                                                {openQuestions[`${category.id}-${index}`] ? (
                                                    <Minus className="h-5 w-5 text-primary-600" />
                                                ) : (
                                                    <Plus className="h-5 w-5 text-primary-600" />
                                                )}
                                            </button>

                                            <AnimatePresence>
                                                {openQuestions[`${category.id}-${index}`] && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="px-4 pb-4"
                                                    >
                                                        <p className="text-gray-600">
                                                            {item.answer}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* No Results */}
                        {searchTerm && !filteredCategories.length && (
                            <div className="text-center py-12">
                                <h3 className="text-lg font-medium text-gray-900 mb-2">
                                    Nenhum resultado encontrado
                                </h3>
                                <p className="text-gray-600">
                                    Tente buscar com outras palavras ou entre em contato conosco.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Ainda tem Dúvidas?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <MessageSquare className="h-6 w-6 text-primary-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Chat Online
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Converse em tempo real com nossa equipe de suporte
                                </p>
                                <button className="btn btn-primary w-full">
                                    Iniciar Chat
                                </button>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <PhoneCall className="h-6 w-6 text-primary-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Suporte por Telefone
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Fale diretamente com um de nossos especialistas
                                </p>
                                <a href="tel:+551199999999" className="btn btn-primary w-full">
                                    Ligar Agora
                                </a>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Mail className="h-6 w-6 text-primary-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Envie um Email
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Nossa equipe responde em até 4 horas
                                </p>
                                <a href="mailto:suporte@align.com" className="btn btn-primary w-full">
                                    Enviar Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;