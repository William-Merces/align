// src/components/sections/FAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = {
    services: {
        title: 'Sobre nossos serviços',
        questions: [
            {
                question: 'Quais serviços a Align oferece?',
                answer: 'A Align oferece uma gama completa de serviços incluindo Desenvolvimento, Customer Support, Video Editing, Marketing, Project Management, Admin, Accounting e Design. Cada serviço é personalizado para atender às necessidades específicas de sua empresa.'
            },
            {
                question: 'Como vocês garantem a qualidade dos serviços?',
                answer: 'Mantemos rigorosos processos de controle de qualidade, incluindo monitoramento constante, feedback regular e treinamento contínuo das equipes. Também utilizamos métricas e KPIs específicos para cada serviço.'
            },
            {
                question: 'Posso contratar apenas um serviço específico?',
                answer: 'Sim, nossos serviços podem ser contratados individualmente ou em conjunto, dependendo das suas necessidades. Oferecemos flexibilidade para adaptar nossos serviços ao seu modelo de negócio.'
            }
        ]
    },
    implementation: {
        title: 'Processo de implementação',
        questions: [
            {
                question: 'Quanto tempo leva para começar?',
                answer: 'O processo de implementação é ágil e pode ser iniciado em questão de dias. Após a análise inicial e definição do escopo, realizamos um onboarding estruturado para garantir uma transição suave.'
            },
            {
                question: 'Como funciona o processo de onboarding?',
                answer: 'O onboarding inclui análise das necessidades, configuração dos sistemas, treinamento inicial da equipe e definição de processos e métricas. Todo o processo é acompanhado por um gerente de projeto dedicado.'
            },
            {
                question: 'Preciso ter conhecimento técnico?',
                answer: 'Não é necessário conhecimento técnico prévio. Nossa equipe oferece todo o suporte necessário e treinamento para utilização das ferramentas e processos.'
            }
        ]
    },
    costs: {
        title: 'Custos e contratos',
        questions: [
            {
                question: 'Como funciona o modelo de precificação?',
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
    support: {
        title: 'Suporte e manutenção',
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
                question: 'Como são feitas as atualizações e melhorias?',
                answer: 'Realizamos atualizações e melhorias contínuas em nossos processos e sistemas, sempre comunicando previamente e garantindo zero impacto nas operações.'
            }
        ]
    }
};

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="w-full flex items-center justify-between py-4 px-2 text-left focus:outline-none"
                onClick={toggleOpen}
            >
                <span className="font-medium text-gray-900">{question}</span>
                {isOpen ? (
                    <Minus className="h-5 w-5 text-primary-600 flex-shrink-0 ml-4" />
                ) : (
                    <Plus className="h-5 w-5 text-primary-600 flex-shrink-0 ml-4" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-4 px-2 text-gray-600">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQCategory = ({ category, questions }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
            <div className="space-y-2">
                {questions.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === index}
                        toggleOpen={() => toggleQuestion(index)}
                    />
                ))}
            </div>
        </div>
    );
};

const FAQ = () => {
    const [activeTab, setActiveTab] = useState('services');

    return (
        <section className="section bg-gray-50" id="faq">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-lg text-gray-600">
                        Encontre respostas para as principais dúvidas sobre nossos serviços e
                        como podemos ajudar sua empresa
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {Object.entries(faqData).map(([key, { title }]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === key
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {title}
                        </button>
                    ))}
                </div>

                {/* FAQ Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <FAQCategory
                        category={faqData[activeTab].title}
                        questions={faqData[activeTab].questions}
                    />
                </motion.div>

                {/* Still Have Questions */}
                <div className="mt-12 text-center bg-white rounded-lg shadow-sm p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Ainda tem dúvidas?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Nossa equipe está pronta para ajudar com qualquer questão adicional
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/contact"
                            className="btn btn-primary inline-flex items-center justify-center"
                        >
                            Fale Conosco
                        </a>
                        <a
                            href="mailto:contato@align.com"
                            className="btn btn-secondary inline-flex items-center justify-center"
                        >
                            Envie um Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
