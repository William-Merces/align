// src/pages/Blog.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    Tag,
    Calendar,
    User,
    Clock,
    ArrowRight
} from 'lucide-react';
import BlogCard from '../components/blog/BlogCard';
import BlogSidebar from '../components/blog/BlogSidebar';
import BlogNewsletter from '../components/blog/BlogNewsletter';
import SEO from '../components/utils/SEO';

const categories = [
    'Comunicação Empresarial',
    'Tecnologia',
    'Gestão de Equipes',
    'Produtividade',
    'Inovação',
    'Customer Success'
];

const featuredPosts = [
    {
        id: 1,
        title: 'Como melhorar a comunicação interna da sua empresa',
        excerpt: 'Descubra estratégias eficientes para aprimorar a comunicação entre equipes e aumentar a produtividade.',
        image: '/blog/post1.jpg',
        category: 'Comunicação Empresarial',
        author: 'Ana Silva',
        date: '2024-01-15',
        readTime: '5 min',
        featured: true
    },
    {
        id: 2,
        title: 'Tendências de tecnologia para 2024',
        excerpt: 'As principais tendências tecnológicas que irão impactar os negócios nos próximos anos.',
        image: '/blog/post2.jpg',
        category: 'Tecnologia',
        author: 'Carlos Santos',
        date: '2024-01-12',
        readTime: '8 min',
        featured: true
    }
];

const posts = [
    {
        id: 3,
        title: 'Guia completo de gestão de equipes remotas',
        excerpt: 'Aprenda as melhores práticas para gerenciar equipes distribuídas e manter a produtividade.',
        image: '/blog/post3.jpg',
        category: 'Gestão de Equipes',
        author: 'Pedro Costa',
        date: '2024-01-10',
        readTime: '10 min'
    },
    {
        id: 4,
        title: 'Ferramentas essenciais para produtividade',
        excerpt: 'Conheça as principais ferramentas que podem ajudar sua equipe a ser mais produtiva.',
        image: '/blog/post4.jpg',
        category: 'Produtividade',
        author: 'Marina Lima',
        date: '2024-01-08',
        readTime: '6 min'
    },
    // Adicione mais posts conforme necessário
];

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const filteredPosts = [...featuredPosts, ...posts].filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !selectedCategory || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <SEO
                title="Blog Align | Insights sobre Comunicação Empresarial"
                description="Artigos, dicas e novidades sobre comunicação empresarial, gestão de equipes e tecnologia."
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
                            Blog Align
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-600 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Insights, tendências e melhores práticas para transformar
                            a comunicação da sua empresa
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
                                    placeholder="Buscar artigos..."
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

            {/* Categories */}
            <section className="py-8 border-b border-gray-200">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => setSelectedCategory('')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!selectedCategory
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            Todos
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="py-16">
                <div className="container-custom">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                        Destaques
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredPosts.map((post) => (
                            <BlogCard key={post.id} post={post} featured />
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Posts Grid */}
                        <div className="lg:col-span-8">
                            <div className="grid gap-8">
                                {filteredPosts
                                    .filter(post => !post.featured)
                                    .map((post) => (
                                        <BlogCard key={post.id} post={post} />
                                    ))}
                            </div>

                            {/* Load More */}
                            <div className="mt-12 text-center">
                                <button className="btn btn-secondary">
                                    Carregar Mais
                                </button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <BlogNewsletter />
        </>
    );
};

export default Blog;