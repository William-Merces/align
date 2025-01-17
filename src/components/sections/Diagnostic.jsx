import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/theme/ThemeContext';
import { Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const initialQuestions = ['size', 'challenges', 'services'];

const Diagnostic = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (questionId, answer) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
        if (currentStep < initialQuestions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResults(true);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const resetDiagnostic = () => {
        setCurrentStep(0);
        setAnswers({});
        setShowResults(false);
    };

    const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
    const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const cardBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
    const borderClass = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

    return (
        <section className={`section ${bgClass}`} id="diagnostic">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className={`text-3xl sm:text-4xl font-bold ${textClass} mb-4`}>
                        {t('diagnostic.title')}
                    </h2>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {t('diagnostic.subtitle')}
                    </p>
                </div>

                {/* Diagnostic Content */}
                <div className="max-w-2xl mx-auto">
                    {!showResults ? (
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className={`${cardBgClass} rounded-xl shadow-sm p-8`}
                        >
                            {/* Progress Bar */}
                            <div className="mb-8">
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div
                                        className="h-2 bg-primary-600 rounded-full transition-all duration-300"
                                        style={{ width: `${((currentStep + 1) / initialQuestions.length) * 100}%` }}
                                    />
                                </div>
                                <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {t('diagnostic.progress', { 
                                        current: currentStep + 1, 
                                        total: initialQuestions.length 
                                    })}
                                </p>
                            </div>

                            {/* Question */}
                            <h3 className={`text-xl font-semibold ${textClass} mb-6`}>
                                {t(`diagnostic.questions.${initialQuestions[currentStep]}.title`)}
                            </h3>

                            {/* Options */}
                            <div className="space-y-3">
                                {t(`diagnostic.questions.${initialQuestions[currentStep]}.options`, { returnObjects: true }).map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleAnswer(initialQuestions[currentStep], option.value)}
                                        className={`w-full p-4 rounded-lg border-2 ${borderClass} ${
                                            theme === 'dark' 
                                                ? 'hover:border-primary-500 hover:bg-gray-700'
                                                : 'hover:border-primary-500 hover:bg-gray-50'
                                        } transition-colors duration-200 group text-left`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className={textClass}>
                                                {option.label}
                                            </span>
                                            <ArrowRight className={`w-5 h-5 ${
                                                theme === 'dark' 
                                                    ? 'text-gray-500 group-hover:text-primary-500'
                                                    : 'text-gray-400 group-hover:text-primary-600'
                                            }`} />
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Navigation */}
                            {currentStep > 0 && (
                                <button
                                    onClick={handleBack}
                                    className={`mt-6 btn ${theme === 'dark' ? 'btn-white' : 'btn-secondary'}`}
                                >
                                    <ChevronLeft className="w-5 h-5 mr-2" />
                                    {t('diagnostic.back')}
                                </button>
                            )}
                        </motion.div>
                    ) : (
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                {/* Results */}
                                <div className={`${cardBgClass} rounded-xl shadow-sm p-8`}>
                                    <h3 className={`text-2xl font-bold ${textClass} mb-6`}>
                                        {t('diagnostic.results.title')}
                                    </h3>

                                    <div className="space-y-4">
                                        {/* Recommendations based on answers */}
                                        {Object.entries(answers).map(([question, answer]) => (
                                            <div
                                                key={question}
                                                className={`p-4 rounded-lg ${
                                                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                                                }`}
                                            >
                                                <h4 className={`text-lg font-semibold ${textClass} mb-2`}>
                                                    {t(`diagnostic.results.recommendations.${question}.title`)}
                                                </h4>
                                                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                                    {t(`diagnostic.results.recommendations.${question}.${answer}`)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTAs */}
                                    <div className="mt-8 space-y-4">
                                        <a
                                            href="/contact"
                                            className="block w-full btn btn-primary text-center"
                                        >
                                            {t('diagnostic.results.cta.contact')}
                                        </a>
                                        <button
                                            onClick={resetDiagnostic}
                                            className={`block w-full btn ${
                                                theme === 'dark' ? 'btn-white' : 'btn-secondary'
                                            } text-center`}
                                        >
                                            {t('diagnostic.results.cta.restart')}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>

                {/* Bottom Text */}
                <div className="text-center mt-8">
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {t('diagnostic.disclaimer')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Diagnostic;