// src/components/blog/BlogSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Tag,
    TrendingUp,
    Clock,
    Download,
    Calendar
} from 'lucide-react';

const categories = [
    { name: 'Comunicação Empresarial', count: 12 },
    { name: 'Tecnologia', count: 8 },
    { name: 'Gestão de Equipes', count: 10 },
    { name: 'Produtividade', count: 6 },
    { name: 'Inovação', count: 5 },
    { name: 'Customer Success', count: 7 }
];

const popularPosts = [
    {
        id: 1,
        title: 'Como melhorar a comunicação interna da sua empresa',
        date: '15 Jan 2024',
        readTime: '5 min'
    },
    {
        id: 2,
        title: 'Tendências de tecnologia para 2024',
        date: '12 Jan 2024',
        readTime: '8 min'
    },
    {
        id: 3,
        title: 'Guia completo de gestão de equipes remotas',
        date: '10 Jan 2024',
        readTime: '10 min'
    }
];

const tags = [
    'Comunicação', 'Tecnologia', 'Gestão', 'Produtividade', 'Inovação',
    'Customer Success', 'Remote Work', 'Liderança', 'Cultura', 'Processos'
];

const resources = [
    {
        title: 'Guia de Comunicação Empresarial',
        description: 'E-book gratuito com dicas práticas',
        icon: Download
    },
    {
        title: 'Webinar: Tendências 2024',
        description: 'Assista à gravação do nosso último webinar',
        icon: Calendar
    }
];

const BlogSidebar = () => {
    return (
        <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Tag className="h-5 w-5 text-primary-600 mr-2" />
                    Categorias
                </h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            to={`/blog/category/${category.name.toLowerCase()}`}
                            className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-gray-600">{category.name}</span>
                            <span className="text-sm text-gray-400">{category.count}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 text-primary-600 mr-2" />
                    Mais Populares
                </h3>
                <div className="space-y-4">
                    {popularPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.id}`}
                            className="group block"
                        >
                            <h4 className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors mb-1">
                                {post.title}
                            </h4>
                            <div className="flex items-center text-sm text-gray-500 space-x-4">
                                <span className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    {post.date}
                                </span>
                                <span className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {post.readTime}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Tags Cloud */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Link
                            key={tag}
                            to={`/blog/tag/${tag.toLowerCase()}`}
                            className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Free Resources */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Recursos Gratuitos
                </h3>
                <div className="space-y-4">
                    {resources.map((resource) => {
                        const Icon = resource.icon;
                        return (
                            <a
                                key={resource.title}
                                href="#"
                                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex items-start">
                                    <div className="rounded-full bg-primary-100 p-2 mr-3">
                                        <Icon className="h-5 w-5 text-primary-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">
                                            {resource.title}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {resource.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* CTA Box */}
            <div className="bg-primary-900 rounded-xl shadow-sm p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">
                    Precisa de ajuda?
                </h3>
                <p className="text-primary-100 mb-4">
                    Fale com nossos especialistas e descubra como podemos ajudar sua empresa.
                </p>
                <a
                    href="/contact"
                    className="block w-full py-2 px-4 bg-white text-primary-900 text-center rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                    Agende uma Consulta
                </a>
            </div>
        </div>
    );
};

export default BlogSidebar;