import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Clock,
    MessageSquare,
    FileText,
    BarChart2,
    ChevronRight,
    ChevronLeft,
    Check,
    Loader2
} from 'lucide-react';
import { useTheme } from '../../context/theme/ThemeContext';
import { useTranslation } from 'react-i18next';

const categories = [
    {
        id: 'meetings',
        icon: Clock,
        questions: [
            {
                id: 'dailyMeetings',
                inputType: 'number',
                min: 0,
                max: 20
            },
            {
                id: 'avgMeetingDuration',
                inputType: 'number',
                min: 0,
                max: 240
            },
            {
                id: 'unnecessaryMeetings',
                inputType: 'number',
                min: 0,
                max: 100
            }
        ]
    },
    {
        id: 'communication',
        icon: MessageSquare,
        questions: [
            {
                id: 'emailsPerDay',
                inputType: 'number',
                min: 0,
                max: 200
            },
            {
                id: 'timePerEmail',
                inputType: 'number',
                min: 0,
                max: 60
            },
            {
                id: 'chatMessages',
                inputType: 'number',
                min: 0,
                max: 480
            }
        ]
    },
    {
        id: 'documentation',
        icon: FileText,
        questions: [
            {
                id: 'docsPerWeek',
                inputType: 'number',
                min: 0,
                max: 50
            },
            {
                id: 'timePerDoc',
                inputType: 'number',
                min: 0,
                max: 240
            },
            {
                id: 'revisionTime',
                inputType: 'number',
                min: 0,
                max: 480
            }
        ]
    }
];

const ProductivityCalculator = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState(null);
    const [isCalculating, setIsCalculating] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleAnswer = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: parseFloat(value) || 0
        }));
    };

    const calculateResults = async () => {
        setIsCalculating(true);

        try {
            // Simulando cálculo assíncrono
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Cálculos de produtividade
            const meetingTimePerWeek = 
                (answers.dailyMeetings || 0) * 
                (answers.avgMeetingDuration || 0) * 5 / 60;

            const communicationTimePerWeek = 
                ((answers.emailsPerDay || 0) * (answers.timePerEmail || 0) * 5 / 60) +
                ((answers.chatMessages || 0) * 5 / 60);

            const documentationTimePerWeek = 
                ((answers.docsPerWeek || 0) * (answers.timePerDoc || 0) / 60) +
                ((answers.revisionTime || 0) / 60);

            const totalCurrentTime = 
                meetingTimePerWeek + 
                communicationTimePerWeek + 
                documentationTimePerWeek;

            const potentialTimeSaved = totalCurrentTime * 0.3;
            const annualHoursSaved = potentialTimeSaved * 48;
            const productivityIncrease = (potentialTimeSaved / totalCurrentTime) * 100;

            setResults({
                weeklyTimeSaved: Math.round(potentialTimeSaved),
                annualHoursSaved: Math.round(annualHoursSaved),
                productivityIncrease: Math.round(productivityIncrease),
                categories: {
                    meetings: Math.round(meetingTimePerWeek * 0.3),
                    communication: Math.round(communicationTimePerWeek * 0.3),
                    documentation: Math.round(documentationTimePerWeek * 0.3)
                }
            });
        } finally {
            setIsCalculating(false);
        }
    };

    const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
    const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const subTextClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
    const borderClass = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

    return (
        <div className={`${bgClass} rounded-xl shadow-sm overflow-hidden`}>
            {/* Header */}
            <div className="bg-primary-600 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">
                    {t('productivityCalculator.title')}
                </h2>
                <p className="text-primary-100">
                    {t('productivityCalculator.subtitle')}
                </p>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden p-4 border-b border-gray-200">
                <button
                    onClick={() => setShowMobileNav(!showMobileNav)}
                    className="w-full flex justify-between items-center text-left"
                >
                    <span className={textClass}>
                        {t(`productivityCalculator.categories.${activeCategory}.title`)}
                    </span>
                    {showMobileNav ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
            </div>

            <div className="md:flex">
                {/* Category Navigation */}
                <div className={`md:w-1/3 border-r ${borderClass} ${showMobileNav ? 'block' : 'hidden md:block'}`}>
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setActiveCategory(category.id);
                                    setShowMobileNav(false);
                                }}
                                className={`w-full flex items-center p-4 ${
                                    activeCategory === category.id 
                                        ? theme === 'dark' ? 'bg-gray-800' : 'bg-primary-50'
                                        : ''
                                } hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
                            >
                                <Icon className={`h-5 w-5 ${
                                    activeCategory === category.id ? 'text-primary-600' : subTextClass
                                }`} />
                                <span className={`ml-3 ${
                                    activeCategory === category.id ? textClass : subTextClass
                                }`}>
                                    {t(`productivityCalculator.categories.${category.id}.title`)}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Questions & Results */}
                <div className="md:w-2/3 p-6">
                    {!results ? (
                        <div className="space-y-6">
                            <div className="space-y-4">
                                {categories
                                    .find(c => c.id === activeCategory)
                                    .questions.map((question) => (
                                        <div key={question.id}>
                                            <label className={`block text-sm font-medium ${textClass} mb-2`}>
                                                {t(`productivityCalculator.questions.${question.id}`)}
                                            </label>
                                            <input
                                                type={question.inputType}
                                                min={question.min}
                                                max={question.max}
                                                value={answers[question.id] || ''}
                                                onChange={(e) => handleAnswer(question.id, e.target.value)}
                                                className={`w-full p-3 rounded-lg ${
                                                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                                                } ${borderClass} focus:ring-2 focus:ring-primary-500`}
                                            />
                                        </div>
                                    ))}
                            </div>

                            <button
                                onClick={calculateResults}
                                disabled={isCalculating}
                                className="w-full btn btn-primary"
                            >
                                {isCalculating ? (
                                    <>
                                        <Loader2 className="animate-spin h-5 w-5 mr-2" />
                                        {t('common.calculating')}
                                    </>
                                ) : (
                                    t('productivityCalculator.calculate')
                                )}
                            </button>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            {/* Results Summary */}
                            <div className={`p-6 rounded-lg ${
                                theme === 'dark' ? 'bg-green-900' : 'bg-green-50'
                            }`}>
                                <h3 className={`text-lg font-semibold ${
                                    theme === 'dark' ? 'text-green-100' : 'text-green-900'
                                } mb-4`}>
                                    {t('productivityCalculator.results.summary')}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <p className={subTextClass}>
                                            {t('productivityCalculator.results.annualSavings')}
                                        </p>
                                        <p className="text-2xl font-bold text-green-600">
                                            {results.annualHoursSaved} {t('common.hours')}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={subTextClass}>
                                            {t('productivityCalculator.results.productivityGain')}
                                        </p>
                                        <p className="text-2xl font-bold text-green-600">
                                            {results.productivityIncrease}%
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Category Breakdown */}
                            <div className="space-y-4">
                                {Object.entries(results.categories).map(([category, hours]) => (
                                    <div
                                        key={category}
                                        className={`p-4 rounded-lg ${
                                            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                                        }`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className={textClass}>
                                                    {t(`productivityCalculator.categories.${category}.title`)}
                                                </p>
                                                <p className={subTextClass}>
                                                    {t('productivityCalculator.results.potentialSavings')}
                                                </p>
                                            </div>
                                            <p className="text-xl font-bold text-primary-600">
                                                {hours} {t('common.hours')}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                                <button
                                    onClick={() => setResults(null)}
                                    className="btn btn-secondary"
                                >
                                    {t('common.recalculate')}
                                </button>
                                <button className="btn btn-primary">
                                    {t('common.getDetailedReport')}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* CTA Section */}
            <div className={`p-6 border-t ${borderClass}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h4 className={`text-lg font-semibold ${textClass}`}>
                            {t('productivityCalculator.cta.title')}
                        </h4>
                        <p className={subTextClass}>
                            {t('productivityCalculator.cta.subtitle')}
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <button className={`btn ${theme === 'dark' ? 'btn-white' : 'btn-primary'}`}>
                            {t('productivityCalculator.cta.button')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductivityCalculator;