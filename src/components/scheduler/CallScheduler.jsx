// src/components/scheduler/CallScheduler.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar,
    Clock,
    Video,
    Phone,
    Users,
    Monitor,
    Check,
    X,
    ChevronLeft,
    ChevronRight,
    Loader2
} from 'lucide-react';

const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
];

const meetingTypes = [
    {
        id: 'video',
        icon: Video,
        title: 'Videoconferência',
        description: 'Meeting via Google Meet ou Zoom'
    },
    {
        id: 'phone',
        icon: Phone,
        title: 'Telefone',
        description: 'Ligação telefônica'
    },
    {
        id: 'presential',
        icon: Users,
        title: 'Presencial',
        description: 'Em nosso escritório'
    }
];

const topics = [
    {
        id: 'services',
        icon: Monitor,
        title: 'Conhecer Serviços',
        duration: '30 min',
        description: 'Apresentação dos nossos serviços e soluções'
    },
    {
        id: 'consulting',
        icon: Users,
        title: 'Consultoria',
        duration: '45 min',
        description: 'Análise detalhada das suas necessidades'
    },
    {
        id: 'technical',
        icon: Monitor,
        title: 'Suporte Técnico',
        duration: '30 min',
        description: 'Resolução de questões técnicas'
    }
];

const CallScheduler = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        notes: ''
    });

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Aqui você implementaria a lógica de envio dos dados
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setStep(5); // Success step
    };

    const generateCalendar = () => {
        const today = new Date();
        const calendar = [];
        for (let i = 0; i < 14; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            if (date.getDay() !== 0 && date.getDay() !== 6) { // Skip weekends
                calendar.push(date);
            }
        }
        return calendar;
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="btn btn-primary flex items-center"
            >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Call
            </button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="min-h-screen px-4 text-center">
                            <div
                                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                                onClick={() => setIsOpen(false)}
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
                            >
                                {/* Header */}
                                <div className="bg-primary-600 px-6 py-4 text-white">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-medium">
                                            Agendar Consulta
                                        </h3>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="rounded-full p-1 hover:bg-primary-500 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="px-6 py-8">
                                    {/* Steps */}
                                    <div className="flex items-center justify-between mb-8">
                                        {[1, 2, 3, 4].map((s) => (
                                            <div
                                                key={s}
                                                className={`flex items-center ${s < 4 ? 'flex-1' : ''
                                                    }`}
                                            >
                                                <div
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= s
                                                            ? 'bg-primary-600 text-white'
                                                            : 'bg-gray-200 text-gray-600'
                                                        }`}
                                                >
                                                    {s}
                                                </div>
                                                {s < 4 && (
                                                    <div
                                                        className={`flex-1 h-px mx-2 ${step > s ? 'bg-primary-600' : 'bg-gray-200'
                                                            }`}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Step Content */}
                                    <div className="min-h-[400px]">
                                        {step === 1 && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                                    Selecione o Tipo de Reunião
                                                </h4>
                                                {topics.map((topic) => {
                                                    const Icon = topic.icon;
                                                    return (
                                                        <button
                                                            key={topic.id}
                                                            onClick={() => {
                                                                setSelectedTopic(topic);
                                                                setStep(2);
                                                            }}
                                                            className={`w-full flex items-start p-4 rounded-lg border-2 transition-colors ${selectedTopic?.id === topic.id
                                                                    ? 'border-primary-600 bg-primary-50'
                                                                    : 'border-gray-200 hover:border-primary-600'
                                                                }`}
                                                        >
                                                            <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                                                <Icon className="w-5 h-5 text-primary-600" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <h5 className="text-lg font-medium text-gray-900">
                                                                    {topic.title}
                                                                </h5>
                                                                <p className="text-sm text-gray-600">
                                                                    {topic.description}
                                                                </p>
                                                                <p className="text-sm text-primary-600 mt-1">
                                                                    {topic.duration}
                                                                </p>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </motion.div>
                                        )}

                                        {step === 2 && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                                    Como você prefere se reunir?
                                                </h4>
                                                <div className="grid grid-cols-3 gap-4">
                                                    {meetingTypes.map((type) => {
                                                        const Icon = type.icon;
                                                        return (
                                                            <button
                                                                key={type.id}
                                                                onClick={() => {
                                                                    setSelectedType(type);
                                                                    setStep(3);
                                                                }}
                                                                className={`p-4 rounded-lg border-2 transition-colors ${selectedType?.id === type.id
                                                                        ? 'border-primary-600 bg-primary-50'
                                                                        : 'border-gray-200 hover:border-primary-600'
                                                                    }`}
                                                            >
                                                                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                                                    <Icon className="w-6 h-6 text-primary-600" />
                                                                </div>
                                                                <h5 className="text-sm font-medium text-gray-900">
                                                                    {type.title}
                                                                </h5>
                                                                <p className="text-xs text-gray-600 mt-1">
                                                                    {type.description}
                                                                </p>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 3 && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                                    Selecione a Data e Horário
                                                </h4>

                                                {/* Calendar */}
                                                <div className="space-y-4">
                                                    <div className="grid grid-cols-7 gap-2">
                                                        {generateCalendar().map((date, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setSelectedDate(date)}
                                                                className={`p-2 rounded-lg text-center transition-colors ${selectedDate?.toDateString() === date.toDateString()
                                                                        ? 'bg-primary-600 text-white'
                                                                        : 'hover:bg-gray-100'
                                                                    }`}
                                                            >
                                                                <p className="text-xs text-gray-500">
                                                                    {date.toLocaleDateString('pt-BR', { weekday: 'short' })}
                                                                </p>
                                                                <p className="text-sm font-medium">
                                                                    {date.getDate()}
                                                                </p>
                                                            </button>
                                                        ))}
                                                    </div>

                                                    {/* Time Slots */}
                                                    {selectedDate && (
                                                        <div className="grid grid-cols-4 gap-2 mt-4">
                                                            {timeSlots.map((time) => (
                                                                <button
                                                                    key={time}
                                                                    onClick={() => {
                                                                        setSelectedTime(time);
                                                                        setStep(4);
                                                                    }}
                                                                    className={`p-2 rounded-lg text-center border transition-colors ${selectedTime === time
                                                                            ? 'bg-primary-600 text-white border-primary-600'
                                                                            : 'border-gray-200 hover:border-primary-600'
                                                                        }`}
                                                                >
                                                                    {time}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 4 && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-6"
                                            >
                                                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                                    Complete suas Informações
                                                </h4>

                                                {/* Summary */}
                                                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                                                    <div className="flex items-center">
                                                        <Calendar className="w-5 h-5 text-primary-600 mr-2" />
                                                        <span className="text-sm text-gray-600">
                                                            {selectedDate?.toLocaleDateString('pt-BR', {
                                                                weekday: 'long',
                                                                day: 'numeric',
                                                                month: 'long'
                                                            })} às {selectedTime}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Clock className="w-5 h-5 text-primary-600 mr-2" />
                                                        <span className="text-sm text-gray-600">
                                                            {selectedTopic?.duration}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Monitor className="w-5 h-5 text-primary-600 mr-2" />
                                                        <span className="text-sm text-gray-600">
                                                            {selectedType?.title}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Form */}
                                                <form className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                            Nome Completo *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={formData.name}
                                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                            required
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                            Email Corporativo *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                            required
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                            Empresa *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={formData.company}
                                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                            required
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                            Telefone *
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            value={formData.phone}
                                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                            required
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                            Observações
                                                        </label>
                                                        <textarea
                                                            value={formData.notes}
                                                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                                            rows={3}
                                                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                                                            placeholder="Compartilhe informações adicionais relevantes para a reunião..."
                                                        />
                                                    </div>
                                                </form>
                                            </motion.div>
                                        )}

                                        {step === 5 && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-center py-8"
                                            >
                                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <Check className="w-8 h-8 text-green-600" />
                                                </div>
                                                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                                    Agendamento Confirmado!
                                                </h4>
                                                <p className="text-gray-600 mb-6">
                                                    Você receberá em breve um email com os detalhes da reunião.
                                                </p>
                                                <button
                                                    onClick={() => setIsOpen(false)}
                                                    className="btn btn-primary"
                                                >
                                                    Concluir
                                                </button>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Navigation */}
                                    {step < 5 && (
                                        <div className="mt-8 flex justify-between">
                                            {step > 1 && (
                                                <button
                                                    onClick={() => setStep(step - 1)}
                                                    className="btn btn-secondary"
                                                >
                                                    <ChevronLeft className="w-5 h-5 mr-2" />
                                                    Voltar
                                                </button>
                                            )}
                                            {step === 4 ? (
                                                <button
                                                    onClick={handleSubmit}
                                                    disabled={isSubmitting}
                                                    className="btn btn-primary ml-auto"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                            Agendando...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Confirmar Agendamento
                                                            <ChevronRight className="w-5 h-5 ml-2" />
                                                        </>
                                                    )}
                                                </button>
                                            ) : (
                                                <div className="ml-auto" />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CallScheduler;