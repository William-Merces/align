import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    DollarSign,
    Clock,
    Users,
    BarChart,
    Download,
    Mail,
    Printer,
    Share2,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import { useTheme } from '../../context/theme/ThemeContext';
import { useTranslation } from 'react-i18next';

const ROICalculator = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        teamSize: 10,
        avgSalary: 5000,
        workHours: 160,
        inefficiencyRate: 20
    });

    const [results, setResults] = useState({
        monthlySavings: 0,
        yearlySavings: 0,
        productivityGain: 0,
        roi: 0
    });

    const [showResults, setShowResults] = useState(false);
    const [activeSection, setActiveSection] = useState('calculator');

    useEffect(() => {
        calculateResults();
    }, [formData]);

    const calculateResults = () => {
        const { teamSize, avgSalary, workHours, inefficiencyRate } = formData;
        const hourlyRate = avgSalary / workHours;
        const wastedHours = workHours * (inefficiencyRate / 100);
        const monthlyWaste = wastedHours * hourlyRate * teamSize;
        const monthlySavings = monthlyWaste * 0.6;
        const yearlySavings = monthlySavings * 12;
        const productivityGain = inefficiencyRate * 0.6;
        const averageMonthlyInvestment = teamSize * 500;
        const roi = ((monthlySavings - averageMonthlyInvestment) / averageMonthlyInvestment) * 100;

        setResults({
            monthlySavings,
            yearlySavings,
            productivityGain,
            roi
        });
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
    const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const subTextClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
    const inputBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
    const borderClass = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

    return (
        <div className={`${bgClass} rounded-xl shadow-sm overflow-hidden`}>
            {/* Header */}
            <div className="bg-primary-600 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">
                    {t('roiCalculator.title')}
                </h2>
                <p className="text-primary-100">
                    {t('roiCalculator.subtitle')}
                </p>
            </div>

            {/* Mobile Accordion Toggle */}
            <div className="md:hidden p-4 border-b border-gray-200">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center"
                >
                    <span className={textClass}>{t('roiCalculator.toggleCalculator')}</span>
                    {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
            </div>

            {/* Calculator Content */}
            <div className={`md:flex ${isOpen ? 'block' : 'hidden md:block'}`}>
                {/* Input Form */}
                <div className="md:w-1/2 p-6 border-r border-gray-200">
                    <div className="space-y-6">
                        <div>
                            <label className={`block text-sm font-medium ${textClass} mb-2`}>
                                {t('roiCalculator.inputs.teamSize')}
                            </label>
                            <input
                                type="number"
                                value={formData.teamSize}
                                onChange={(e) => setFormData({ ...formData, teamSize: parseInt(e.target.value) || 0 })}
                                className={`w-full p-3 rounded-lg ${inputBgClass} ${borderClass} focus:ring-2 focus:ring-primary-500`}
                            />
                        </div>

                        <div>
                            <label className={`block text-sm font-medium ${textClass} mb-2`}>
                                {t('roiCalculator.inputs.avgSalary')}
                            </label>
                            <input
                                type="number"
                                value={formData.avgSalary}
                                onChange={(e) => setFormData({ ...formData, avgSalary: parseInt(e.target.value) || 0 })}
                                className={`w-full p-3 rounded-lg ${inputBgClass} ${borderClass} focus:ring-2 focus:ring-primary-500`}
                            />
                        </div>

                        <div>
                            <label className={`block text-sm font-medium ${textClass} mb-2`}>
                                {t('roiCalculator.inputs.workHours')}
                            </label>
                            <input
                                type="number"
                                value={formData.workHours}
                                onChange={(e) => setFormData({ ...formData, workHours: parseInt(e.target.value) || 0 })}
                                className={`w-full p-3 rounded-lg ${inputBgClass} ${borderClass} focus:ring-2 focus:ring-primary-500`}
                            />
                        </div>

                        <div>
                            <label className={`block text-sm font-medium ${textClass} mb-2`}>
                                {t('roiCalculator.inputs.inefficiencyRate')}
                            </label>
                            <input
                                type="number"
                                value={formData.inefficiencyRate}
                                onChange={(e) => setFormData({ ...formData, inefficiencyRate: parseInt(e.target.value) || 0 })}
                                className={`w-full p-3 rounded-lg ${inputBgClass} ${borderClass} focus:ring-2 focus:ring-primary-500`}
                            />
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="md:w-1/2 p-6">
                    <div className="space-y-6">
                        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900' : 'bg-green-50'}`}>
                            <div className="flex items-center">
                                <DollarSign className="h-8 w-8 text-green-600" />
                                <div className="ml-4">
                                    <p className={subTextClass}>{t('roiCalculator.results.annualSavings')}</p>
                                    <p className="text-2xl font-bold">
                                        {formatCurrency(results.yearlySavings)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                                <div className="flex items-center">
                                    <Clock className="h-6 w-6 text-primary-600" />
                                    <div className="ml-3">
                                        <p className={subTextClass}>{t('roiCalculator.results.productivityGain')}</p>
                                        <p className="text-xl font-bold">{results.productivityGain.toFixed(1)}%</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                                <div className="flex items-center">
                                    <BarChart className="h-6 w-6 text-primary-600" />
                                    <div className="ml-3">
                                        <p className={subTextClass}>{t('roiCalculator.results.roi')}</p>
                                        <p className="text-xl font-bold">{results.roi.toFixed(1)}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4">
                            <button className="btn btn-secondary flex items-center">
                                <Download className="h-5 w-5 mr-2" />
                                {t('common.buttons.download')}
                            </button>
                            <button className="btn btn-secondary flex items-center">
                                <Mail className="h-5 w-5 mr-2" />
                                {t('common.buttons.share')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className={`p-6 border-t ${borderClass}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h4 className={`text-lg font-semibold ${textClass}`}>
                            {t('roiCalculator.cta.title')}
                        </h4>
                        <p className={subTextClass}>
                            {t('roiCalculator.cta.subtitle')}
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <button className={`btn ${theme === 'dark' ? 'btn-white' : 'btn-primary'}`}>
                            {t('roiCalculator.cta.button')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;