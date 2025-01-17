// src/config/regionalContent.js

/**
 * Tipos para documentação e validação
 * @typedef {Object} Certification
 * @property {string} id - Identificador único da certificação
 * @property {string} name - Nome da certificação
 * @property {string} description - Descrição detalhada
 * @property {string} logo - Caminho do arquivo de logo
 * @property {string} link - Link para mais informações
 */

/**
 * @typedef {Object} Association
 * @property {string} id - Identificador único da associação
 * @property {string} name - Nome da associação
 * @property {string} description - Descrição detalhada
 * @property {string} logo - Caminho do arquivo de logo
 * @property {string} link - Link para mais informações
 */

/**
 * @typedef {Object} RegionalConfig
 * @property {Object} region - Informações da região
 * @property {Certification[]} certifications - Lista de certificações
 * @property {Association[]} associations - Lista de associações
 * @property {Object} socialMedia - Links de redes sociais
 * @property {Object} contact - Informações de contato
 */

/**
 * Configurações regionais para diferentes mercados
 * @type {Object.<string, RegionalConfig>}
 */
export const regionalContent = {
    pt: {
        region: {
            country: 'Brasil',
            timezone: 'America/Sao_Paulo',
            currency: 'BRL',
            phoneCode: '+55',
        },
        
        certifications: [
            {
                id: 'iso27001',
                name: 'ISO 27001',
                description: 'Certificação em Segurança da Informação',
                logo: '/certifications/iso27001.svg',
                link: '/certifications/iso27001'
            },
            {
                id: 'lgpd',
                name: 'LGPD Compliant',
                description: 'Em conformidade com a Lei Geral de Proteção de Dados',
                logo: '/certifications/lgpd.svg',
                link: '/certifications/lgpd'
            },
            {
                id: 'soc2',
                name: 'SOC 2',
                description: 'Service Organization Control 2',
                logo: '/certifications/soc2.svg',
                link: '/certifications/soc2'
            }
        ],
        
        associations: [
            {
                id: 'abes',
                name: 'ABES',
                description: 'Associação Brasileira das Empresas de Software',
                logo: '/associations/abes.svg',
                link: 'https://abes.org.br'
            },
            {
                id: 'brasscom',
                name: 'Brasscom',
                description: 'Associação das Empresas de Tecnologia',
                logo: '/associations/brasscom.svg',
                link: 'https://brasscom.org.br'
            }
        ],

        socialMedia: {
            linkedin: 'https://linkedin.com/company/align-brasil',
            instagram: 'https://instagram.com/align.brasil',
            twitter: 'https://twitter.com/alignbrasil'
        },

        contact: {
            phone: '+55 11 3333-4444',
            email: 'contato@align.com.br',
            address: {
                street: 'Av. Paulista, 1000',
                city: 'São Paulo',
                state: 'SP',
                zip: '01310-100',
                country: 'Brasil'
            }
        }
    },

    en: {
        region: {
            country: 'United States',
            timezone: 'America/New_York',
            currency: 'USD',
            phoneCode: '+1',
        },
        
        certifications: [
            {
                id: 'nist',
                name: 'NIST Cybersecurity',
                description: 'National Institute of Standards & Technology Framework Compliance',
                logo: '/certifications/nist.svg',
                link: '/certifications/nist'
            },
            {
                id: 'hipaa',
                name: 'HIPAA Compliant',
                description: 'Health Insurance Portability and Accountability Act Compliance',
                logo: '/certifications/hipaa.svg',
                link: '/certifications/hipaa'
            },
            {
                id: 'soc2',
                name: 'SOC 2 Type II',
                description: 'AICPA Service Organization Control 2 Type II Certified',
                logo: '/certifications/soc2-type2.svg',
                link: '/certifications/soc2'
            }
        ],
        
        associations: [
            {
                id: 'compTIA',
                name: 'CompTIA',
                description: 'Computing Technology Industry Association Member',
                logo: '/associations/comptia.svg',
                link: 'https://comptia.org'
            },
            {
                id: 'cta',
                name: 'CTA',
                description: 'Consumer Technology Association Member',
                logo: '/associations/cta.svg',
                link: 'https://cta.tech'
            }
        ],

        socialMedia: {
            linkedin: 'https://linkedin.com/company/align-us',
            instagram: 'https://instagram.com/align.us',
            twitter: 'https://twitter.com/alignus'
        },

        contact: {
            phone: '+1 (555) 123-4567',
            email: 'contact@align.com',
            address: {
                street: '123 Tech Street',
                city: 'New York',
                state: 'NY',
                zip: '10001',
                country: 'United States'
            }
        }
    },

    es: {
        region: {
            country: 'España',
            timezone: 'Europe/Madrid',
            currency: 'EUR',
            phoneCode: '+34',
        },
        
        certifications: [
            {
                id: 'iso27001',
                name: 'ISO 27001',
                description: 'Certificación en Seguridad de la Información',
                logo: '/certifications/iso27001.svg',
                link: '/certifications/iso27001'
            },
            {
                id: 'rgpd',
                name: 'RGPD Compliant',
                description: 'En conformidad con el Reglamento General de Protección de Datos',
                logo: '/certifications/rgpd.svg',
                link: '/certifications/rgpd'
            },
            {
                id: 'aenor',
                name: 'AENOR',
                description: 'Certificación de Calidad y Seguridad por AENOR',
                logo: '/certifications/aenor.svg',
                link: '/certifications/aenor'
            }
        ],
        
        associations: [
            {
                id: 'ametic',
                name: 'AMETIC',
                description: 'Asociación Multisectorial de Empresas de Tecnología',
                logo: '/associations/ametic.svg',
                link: 'https://ametic.es'
            },
            {
                id: 'adigital',
                name: 'Adigital',
                description: 'Asociación Española de la Economía Digital',
                logo: '/associations/adigital.svg',
                link: 'https://adigital.org'
            }
        ],

        socialMedia: {
            linkedin: 'https://linkedin.com/company/align-es',
            instagram: 'https://instagram.com/align.es',
            twitter: 'https://twitter.com/alignes'
        },

        contact: {
            phone: '+34 911 23 45 67',
            email: 'contacto@align.es',
            address: {
                street: 'Calle Tecnología, 123',
                city: 'Madrid',
                state: 'Madrid',
                zip: '28001',
                country: 'España'
            }
        }
    }
};

/**
 * Obtém o conteúdo regional com base no idioma
 * @param {string} language - Código do idioma
 * @returns {RegionalConfig} Conteúdo regional
 */
export const getRegionalContent = (language) => {
    return regionalContent[language] || regionalContent.en;
};

/**
 * Obtém informações específicas de uma região
 * @param {string} language - Código do idioma
 * @param {string} section - Seção desejada (certifications, associations, etc)
 * @returns {Object} Informações da seção
 */
export const getRegionalSection = (language, section) => {
    const content = getRegionalContent(language);
    return content[section] || {};
};

/**
 * Verifica se um idioma é suportado
 * @param {string} language - Código do idioma
 * @returns {boolean} True se o idioma é suportado
 */
export const isLanguageSupported = (language) => {
    return Object.keys(regionalContent).includes(language);
};

/**
 * Obtém todas as certificações de uma região
 * @param {string} language - Código do idioma
 * @returns {Certification[]} Lista de certificações
 */
export const getRegionalCertifications = (language) => {
    return getRegionalSection(language, 'certifications');
};

/**
 * Obtém todas as associações de uma região
 * @param {string} language - Código do idioma
 * @returns {Association[]} Lista de associações
 */
export const getRegionalAssociations = (language) => {
    return getRegionalSection(language, 'associations');
};

export default regionalContent;