// src/components/utils/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
    title = 'Align - Transforme a comunicação da sua empresa em resultados',
    description = 'Soluções integradas de comunicação que aumentam a eficiência, reduzem custos e impulsionam o crescimento do seu negócio.',
    keywords = 'comunicação empresarial, desenvolvimento, customer support, marketing, project management',
    image = '/og-image.jpg', // Imagem padrão para compartilhamento
    url = 'https://align.com.br' // URL base do site
}) => {
    return (
        <Helmet>
            {/* Títulos e Descrições Básicas */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Configurações Adicionais */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#0284c7" /> {/* Cor primária da Align */}
            <link rel="canonical" href={url} />

            {/* Fonte Inter */}
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Helmet>
    );
};

export default SEO;