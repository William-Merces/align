// src/components/blog/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, featured = false }) => {
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`bg-white rounded-xl shadow-sm overflow-hidden ${featured ? 'md:flex' : ''
                }`}
        >
            {/* Image */}
            <Link
                to={`/blog/${post.id}`}
                className={`block ${featured ? 'md:w-2/5' : ''}`}
            >
                <div className="aspect-video relative overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                            {post.category}
                        </span>
                    </div>
                </div>
            </Link>

            {/* Content */}
            <div className={`p-6 ${featured ? 'md:w-3/5' : ''}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-4">
                    <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                    </div>
                    <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime} de leitura
                    </div>
                </div>

                {/* Read More Link */}
                <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                    Ler mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </motion.article>
    );
};

export default BlogCard;