// src/components/chat/LiveChat.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MessageSquare,
    X,
    Send,
    Paperclip,
    Smile,
    Image,
    MinusCircle,
    User,
    Clock
} from 'lucide-react';

const mockMessages = [
    {
        id: 1,
        type: 'system',
        content: 'Bem-vindo ao chat da Align! Como podemos ajudar?',
        timestamp: new Date()
    },
    {
        id: 2,
        type: 'agent',
        sender: 'Marina Lima',
        content: 'Olá! Meu nome é Marina e estou aqui para ajudar. Em que posso ser útil?',
        avatar: '/team/support-1.jpg',
        timestamp: new Date()
    }
];

const LiveChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(mockMessages);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        // Add user message
        const userMessage = {
            id: messages.length + 1,
            type: 'user',
            content: message,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setMessage('');
        setIsTyping(true);

        // Simulate agent response
        setTimeout(() => {
            const agentMessage = {
                id: messages.length + 2,
                type: 'agent',
                sender: 'Marina Lima',
                content: 'Obrigada por sua mensagem! Estou analisando sua solicitação e já retorno.',
                avatar: '/team/support-1.jpg',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, agentMessage]);
            setIsTyping(false);
        }, 2000);
    };

    const formatTime = (date) => {
        return new Date(date).toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <>
            {/* Chat Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                    setIsOpen(true);
                    setIsMinimized(false);
                }}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-colors ${isOpen ? 'hidden' : 'flex'
                    }`}
            >
                <MessageSquare className="h-6 w-6" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            height: isMinimized ? 'auto' : '600px'
                        }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className={`fixed bottom-6 right-6 z-50 w-96 bg-white rounded-xl shadow-xl overflow-hidden ${isMinimized ? 'h-auto' : 'h-[600px]'
                            }`}
                    >
                        {/* Header */}
                        <div className="bg-primary-600 p-4 text-white">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img
                                        src="/team/support-1.jpg"
                                        alt="Agent"
                                        className="w-10 h-10 rounded-full border-2 border-white"
                                    />
                                    <div className="ml-3">
                                        <h3 className="font-medium">Chat Align</h3>
                                        <p className="text-sm text-primary-100">Online</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setIsMinimized(!isMinimized)}
                                        className="p-1 hover:bg-primary-500 rounded-full transition-colors"
                                    >
                                        <MinusCircle className="h-5 w-5" />
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-1 hover:bg-primary-500 rounded-full transition-colors"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {!isMinimized && (
                            <>
                                {/* Messages */}
                                <div className="h-[calc(100%-144px)] overflow-y-auto p-4">
                                    <div className="space-y-4">
                                        {messages.map((msg) => (
                                            <div
                                                key={msg.id}
                                                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'
                                                    }`}
                                            >
                                                {msg.type === 'agent' && (
                                                    <img
                                                        src={msg.avatar}
                                                        alt={msg.sender}
                                                        className="w-8 h-8 rounded-full mr-2 flex-shrink-0"
                                                    />
                                                )}
                                                <div
                                                    className={`max-w-[75%] rounded-lg p-3 ${msg.type === 'user'
                                                            ? 'bg-primary-600 text-white'
                                                            : msg.type === 'system'
                                                                ? 'bg-gray-100 text-gray-600'
                                                                : 'bg-gray-100 text-gray-900'
                                                        }`}
                                                >
                                                    {msg.type === 'agent' && (
                                                        <p className="text-xs text-gray-600 mb-1">
                                                            {msg.sender}
                                                        </p>
                                                    )}
                                                    <p className="text-sm">{msg.content}</p>
                                                    <p className="text-xs mt-1 opacity-75">
                                                        {formatTime(msg.timestamp)}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                        {isTyping && (
                                            <div className="flex justify-start">
                                                <img
                                                    src="/team/support-1.jpg"
                                                    alt="Agent"
                                                    className="w-8 h-8 rounded-full mr-2"
                                                />
                                                <div className="bg-gray-100 rounded-lg p-3">
                                                    <div className="flex space-x-1">
                                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75" />
                                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div ref={messagesEndRef} />
                                    </div>
                                </div>

                                {/* Input Area */}
                                <div className="border-t border-gray-200 p-4">
                                    <form onSubmit={handleSubmit} className="flex items-end space-x-2">
                                        <div className="flex-grow">
                                            <textarea
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Digite sua mensagem..."
                                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                                                rows={1}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' && !e.shiftKey) {
                                                        e.preventDefault();
                                                        handleSubmit(e);
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button
                                                type="button"
                                                className="p-2 text-gray-500 hover:text-primary-600 transition-colors"
                                                title="Anexar arquivo"
                                            >
                                                <Paperclip className="h-5 w-5" />
                                            </button>
                                            <button
                                                type="button"
                                                className="p-2 text-gray-500 hover:text-primary-600 transition-colors"
                                                title="Enviar imagem"
                                            >
                                                <Image className="h-5 w-5" />
                                            </button>
                                            <button
                                                type="button"
                                                className="p-2 text-gray-500 hover:text-primary-600 transition-colors"
                                                title="Emoji"
                                            >
                                                <Smile className="h-5 w-5" />
                                            </button>
                                            <button
                                                type="submit"
                                                className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                                                title="Enviar mensagem"
                                            >
                                                <Send className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/* Pre-chat Form */}
                                {messages.length <= 2 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.5 }}
                                        className="absolute inset-0 bg-white p-4"
                                    >
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                            Antes de começarmos...
                                        </h3>
                                        <form className="space-y-4">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                >
                                                    Seu nome
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="topic"
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                >
                                                    Assunto
                                                </label>
                                                <select
                                                    id="topic"
                                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                >
                                                    <option value="">Selecione um assunto</option>
                                                    <option value="support">Suporte Técnico</option>
                                                    <option value="sales">Vendas</option>
                                                    <option value="billing">Financeiro</option>
                                                    <option value="other">Outro</option>
                                                </select>
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full btn btn-primary"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setMessages(prev => [
                                                        ...prev,
                                                        {
                                                            id: prev.length + 1,
                                                            type: 'system',
                                                            content: 'Obrigado! Um agente irá atendê-lo em breve.',
                                                            timestamp: new Date()
                                                        }
                                                    ]);
                                                }}
                                            >
                                                Iniciar Chat
                                            </button>
                                        </form>
                                    </motion.div>
                                )}
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default LiveChat;