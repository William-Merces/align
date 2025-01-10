// src/components/blog/BlogNewsletter.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, Loader2 } from 'lucide-react';

const BlogNewsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            // Aqui você implementaria a lógica de envio do email
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulação
            setIsSubmitted(true);
        } catch (err) {
            setError('Ocorreu um erro ao cadastrar seu email. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 bg-primary-900">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    {!isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-800 mb-6">
                                <Mail className="h-8 w-8 text-white" />
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-4">
                                Receba Nossos Insights
                            </h2>
                            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                                Assine nossa newsletter e receba conteúdo exclusivo sobre
                                comunicação empresarial, gestão de equipes e tecnologia.
                            </p>

                            {/* Form */}
                            <form
                                onSubmit={handleSubmit}
                                className="max-w-md mx-auto"
                            >
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Seu melhor email"
                                        required
                                        className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-white flex items-center justify-center min-w-[120px]"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                        ) : (
                                            'Inscrever-se'
                                        )}
                                    </button>
                                </div>
                                {error && (
                                    <p className="mt-2 text-red-300 text-sm">
                                        {error}
                                    </p>
                                )}
                            </form>

                            {/* Features */}
                            <div className="grid sm:grid-cols-3 gap-6 mt-12">
                                <div className="text-center">
                                    <h4 className="text-white font-semibold mb-2">
                                        Conteúdo Exclusivo
                                    </h4>
                                    <p className="text-primary-100">
                                        Artigos e análises que você não encontra no blog
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-white font-semibold mb-2">
                                        Envio Semanal
                                    </h4>
                                    <p className="text-primary-100">
                                        Curadoria dos melhores conteúdos da semana
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-white font-semibold mb-2">
                                        Zero Spam
                                    </h4>
                                    <p className="text-primary-100">
                                        Apenas conteúdo relevante para sua empresa
                                    </p>
                                </div>
                            </div>

                            {/* Trust Text */}
                            <p className="text-primary-200 text-sm mt-8">
                                Seus dados estão seguros conosco. Você pode cancelar a qualquer momento.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-6">
                                <Check className="h-8 w-8 text-white" />
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-4">
                                Inscrição Confirmada!
                            </h2>
                            <p className="text-primary-100 text-lg mb-8">
                                Obrigado por se inscrever em nossa newsletter.
                                Em breve você receberá nosso conteúdo exclusivo.
                            </p>

                            {/* Social Share */}
                            <div className="inline-flex items-center bg-primary-800 rounded-lg p-2">
                                <span className="text-primary-100 px-3">
                                    Compartilhe com sua equipe
                                </span>
                                <button className="p-2 hover:bg-primary-700 rounded-lg transition-colors">
                                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                                    </svg>
                                </button>
                                <button className="p-2 hover:bg-primary-700 rounded-lg transition-colors">
                                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                                    </svg>
                                </button>
                                <button className="p-2 hover:bg-primary-700 rounded-lg transition-colors">
                                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default BlogNewsletter;
