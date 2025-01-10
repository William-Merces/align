// src/pages/Terms.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';

const Terms = () => {
    return (
        <>
            <SEO
                title="Termos de Uso | Align"
                description="Termos e condições de uso dos serviços da Align."
            />

            {/* Header */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                            Termos de Uso
                        </h1>
                        <p className="text-xl text-gray-600">
                            Última atualização: {new Date().toLocaleDateString('pt-BR')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-lg">
                            <h2>1. Termos</h2>
                            <p>
                                Ao acessar o site da Align, você concorda em cumprir estes termos de
                                serviço, todas as leis e regulamentos aplicáveis e concorda que é
                                responsável pelo cumprimento de todas as leis locais aplicáveis.
                            </p>

                            <h2>2. Uso de Licença</h2>
                            <p>
                                É concedida permissão para baixar temporariamente uma cópia dos
                                materiais (informações ou software) no site da Align, apenas para
                                visualização transitória pessoal e não comercial.
                            </p>
                            <p>
                                Esta é a concessão de uma licença, não uma transferência de título e,
                                sob esta licença, você não pode:
                            </p>
                            <ul>
                                <li>modificar ou copiar os materiais;</li>
                                <li>
                                    usar os materiais para qualquer finalidade comercial ou para
                                    exibição pública;
                                </li>
                                <li>
                                    tentar descompilar ou fazer engenharia reversa de qualquer
                                    software contido no site da Align;
                                </li>
                                <li>
                                    remover quaisquer direitos autorais ou outras notações de
                                    propriedade dos materiais;
                                </li>
                                <li>
                                    transferir os materiais para outra pessoa ou 'espelhar' os
                                    materiais em qualquer outro servidor.
                                </li>
                            </ul>

                            <h2>3. Serviços</h2>
                            <p>
                                Os serviços são fornecidos "como estão". A Align não oferece
                                garantias, expressas ou implícitas, e, por este meio, isenta e nega
                                todas as outras garantias, incluindo, sem limitação, garantias
                                implícitas ou condições de comercialização, adequação a um fim
                                específico ou não violação de propriedade intelectual ou outra
                                violação de direitos.
                            </p>

                            <h2>4. Limitações</h2>
                            <p>
                                Em nenhum caso a Align ou seus fornecedores serão responsáveis por
                                quaisquer danos (incluindo, sem limitação, danos por perda de dados
                                ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou
                                da incapacidade de usar os materiais em nosso site.
                            </p>

                            <h2>5. Privacidade e Proteção de Dados</h2>
                            <p>
                                Nos comprometemos com a proteção de seus dados pessoais de acordo
                                com a Lei Geral de Proteção de Dados (LGPD) e outras legislações
                                aplicáveis. Para mais informações, consulte nossa{' '}
                                <Link to="/privacy" className="text-primary-600 hover:text-primary-700">
                                    Política de Privacidade
                                </Link>
                                .
                            </p>

                            <h2>6. Precisão dos Materiais</h2>
                            <p>
                                Os materiais exibidos no site da Align podem incluir erros técnicos,
                                tipográficos ou fotográficos. A Align não garante que qualquer
                                material em seu site seja preciso, completo ou atual.
                            </p>

                            <h2>7. Links</h2>
                            <p>
                                A Align não analisou todos os sites vinculados ao seu site e não é
                                responsável pelo conteúdo de nenhum site vinculado. A inclusão de
                                qualquer link não implica endosso por parte da Align do site.
                            </p>

                            <h2>8. Modificações</h2>
                            <p>
                                A Align pode revisar estes termos de serviço do site a qualquer
                                momento, sem aviso prévio. Ao usar este site, você concorda em
                                ficar vinculado à versão atual desses termos de serviço.
                            </p>

                            <h2>9. Lei Aplicável</h2>
                            <p>
                                Estes termos e condições são regidos e interpretados de acordo com
                                as leis brasileiras e você se submete irrevogavelmente à jurisdição
                                exclusiva dos tribunais do Brasil.
                            </p>
                        </div>

                        {/* Bottom Contact Section */}
                        <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Dúvidas sobre nossos termos?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Nossa equipe está à disposição para esclarecer qualquer dúvida
                                sobre nossos termos de uso.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link to="/contact" className="btn btn-primary">
                                    Fale Conosco
                                </Link>
                                <Link to="/faq" className="btn btn-secondary">
                                    Ver FAQ
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                            Links Úteis
                        </h3>
                        <div className="grid sm:grid-cols-3 gap-6">
                            <Link
                                to="/privacy"
                                className="flex items-center justify-center p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Política de Privacidade
                            </Link>
                            <Link
                                to="/cookies"
                                className="flex items-center justify-center p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Política de Cookies
                            </Link>
                            <Link
                                to="/compliance"
                                className="flex items-center justify-center p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Compliance
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Terms;