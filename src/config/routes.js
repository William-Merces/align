// src/config/routes.js

/**
 * Configuração de rotas para cada idioma
 */
export const routes = {
    pt: {
      // Rotas principais
      home: '/',
      services: '/servicos',
      howItWorks: '/como-funciona',
      whyAlign: '/por-que-align',
      contact: '/contato',
      
      // Rotas de serviços específicos
      serviceRoutes: {
        development: '/servicos/desenvolvimento',
        support: '/servicos/suporte',
        marketing: '/servicos/marketing',
        design: '/servicos/design',
        accounting: '/servicos/contabilidade',
        admin: '/servicos/administrativo'
      },
  
      // Rotas de informações
      about: '/sobre',
      blog: '/blog',
      faq: '/perguntas-frequentes',
      terms: '/termos-de-uso',
      privacy: '/privacidade',
      
      // Rotas de ferramentas
      calculator: '/calculadora',
      diagnostic: '/diagnostico'
    },
  
    en: {
      // Main routes
      home: '/',
      services: '/services',
      howItWorks: '/how-it-works',
      whyAlign: '/why-align',
      contact: '/contact',
      
      // Service specific routes
      serviceRoutes: {
        development: '/services/development',
        support: '/services/support',
        marketing: '/services/marketing',
        design: '/services/design',
        accounting: '/services/accounting',
        admin: '/services/administrative'
      },
  
      // Information routes
      about: '/about',
      blog: '/blog',
      faq: '/faq',
      terms: '/terms',
      privacy: '/privacy',
      
      // Tool routes
      calculator: '/calculator',
      diagnostic: '/diagnostic'
    },
  
    es: {
      // Rutas principales
      home: '/',
      services: '/servicios',
      howItWorks: '/como-funciona',
      whyAlign: '/por-que-align',
      contact: '/contacto',
      
      // Rutas de servicios específicos
      serviceRoutes: {
        development: '/servicios/desarrollo',
        support: '/servicios/soporte',
        marketing: '/servicios/marketing',
        design: '/servicios/diseno',
        accounting: '/servicios/contabilidad',
        admin: '/servicios/administrativo'
      },
  
      // Rutas de información
      about: '/sobre-nosotros',
      blog: '/blog',
      faq: '/preguntas-frecuentes',
      terms: '/terminos-de-uso',
      privacy: '/privacidad',
      
      // Rutas de herramientas
      calculator: '/calculadora',
      diagnostic: '/diagnostico'
    }
  };
  
  /**
   * Obtém todas as rotas para um determinado idioma
   * @param {string} language - Código do idioma
   * @returns {Object} Objeto com todas as rotas do idioma
   */
  export const getRoutes = (language) => {
    return routes[language] || routes.en;
  };
  
  /**
   * Obtém uma rota específica para um idioma
   * @param {string} language - Código do idioma
   * @param {string} routeName - Nome da rota
   * @returns {string} Caminho da rota
   */
  export const getRoute = (language, routeName) => {
    const languageRoutes = getRoutes(language);
    return languageRoutes[routeName] || routes.en[routeName];
  };
  
  /**
   * Obtém a rota de um serviço específico
   * @param {string} language - Código do idioma
   * @param {string} serviceName - Nome do serviço
   * @returns {string} Caminho da rota do serviço
   */
  export const getServiceRoute = (language, serviceName) => {
    const languageRoutes = getRoutes(language);
    return languageRoutes.serviceRoutes?.[serviceName] || routes.en.serviceRoutes[serviceName];
  };
  
  /**
   * Lista de todas as rotas disponíveis (útil para sitemap)
   * @param {string} language - Código do idioma
   * @returns {string[]} Array com todas as rotas do idioma
   */
  export const getAllRoutes = (language) => {
    const languageRoutes = getRoutes(language);
    return [
      ...Object.values(languageRoutes).filter(route => typeof route === 'string'),
      ...Object.values(languageRoutes.serviceRoutes || {})
    ];
  };
  
  export default routes;