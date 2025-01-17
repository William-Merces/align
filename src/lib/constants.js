// src/lib/constants.js

import {
    Code2,
    HeadphonesIcon,
    Video,
    BarChart3,
    ClipboardList,
    UserCog,
    Calculator,
    Paintbrush,
    Search,
    FileText,
    Rocket,
    Users,
    MessageSquare,
    ArrowRight,
    Mail,
    MapPin,
    Shield,
    Target,
    Globe,
    Star,
    Zap,
    Clock,
    Share2,
    PenTool,
    Monitor,
    Database,
    Cloud,
    Server,
    Cpu,
    LineChart,
    TrendingUp,
    BarChart2,
    PieChart,
    Phone,
    Heart,
    Award,
    Coffee,
    Calendar,
    DollarSign
} from 'lucide-react';

// IDs dos serviços para reuso
export const serviceIds = {
    DEVELOPMENT: 'development',
    CUSTOMER_SUPPORT: 'customer-support',
    VIDEO_EDITING: 'video-editing',
    MARKETING: 'marketing',
    PROJECT_MANAGEMENT: 'project-management',
    ADMIN: 'admin',
    ACCOUNTING: 'accounting',
    DESIGN: 'design'
};

export const services = [
    {
        id: serviceIds.DEVELOPMENT,
        title: 'Desenvolvimento',
        icon: Code2,
        description: 'Desenvolvimento ágil e escalável de aplicações web e mobile com foco em qualidade e performance.',
        subServices: [
            'Desenvolvimento Frontend',
            'Desenvolvimento Backend',
            'Aplicações Mobile',
            'APIs e Integrações',
            'Manutenção de Sistemas',
            'DevOps'
        ],
        features: [
            {
                title: 'Stack Moderna',
                description: 'Utilizamos as tecnologias mais recentes e eficientes do mercado',
                icon: Code2
            },
            {
                title: 'Código Limpo',
                description: 'Práticas de Clean Code e padrões de projeto',
                icon: FileText
            },
            {
                title: 'Escalabilidade',
                description: 'Arquitetura preparada para crescimento',
                icon: Target
            },
            {
                title: 'DevOps',
                description: 'Integração e deploy contínuos',
                icon: Server
            },
            {
                title: 'Cloud Native',
                description: 'Aplicações preparadas para nuvem',
                icon: Cloud
            },
            {
                title: 'Performance',
                description: 'Otimização e monitoramento constante',
                icon: Zap
            }
        ],
        pricing: {
            starter: {
                name: 'Starter',
                price: 4999,
                description: 'Para pequenos projetos',
                features: [
                    'Até 2 desenvolvedores',
                    'Suporte em horário comercial',
                    'Code review',
                    'Deploys semanais',
                    'Ambiente de staging',
                    'Monitoramento básico'
                ]
            },
            professional: {
                name: 'Professional',
                price: 9999,
                description: 'Para projetos em crescimento',
                features: [
                    'Até 5 desenvolvedores',
                    'Suporte 24/7',
                    'CI/CD',
                    'Deploys diários',
                    'Ambientes múltiplos',
                    'APM completo',
                    'SLA garantido'
                ]
            },
            enterprise: {
                name: 'Enterprise',
                description: 'Para grandes operações',
                price: null,
                features: [
                    'Equipe dedicada',
                    'Suporte prioritário',
                    'Arquiteto dedicado',
                    'Deploys sob demanda',
                    'Infraestrutura dedicada',
                    'Observability completa',
                    'SLA personalizado'
                ]
            }
        },
        technologies: {
            frontend: [
                'React',
                'Vue.js',
                'Angular',
                'Next.js',
                'TypeScript',
                'Tailwind CSS'
            ],
            backend: [
                'Node.js',
                'Python',
                'Java',
                'Go',
                'PHP',
                '.NET'
            ],
            mobile: [
                'React Native',
                'Flutter',
                'iOS Native',
                'Android Native'
            ],
            devops: [
                'AWS',
                'Google Cloud',
                'Azure',
                'Docker',
                'Kubernetes',
                'Terraform'
            ]
        }
    },
    {
        id: serviceIds.CUSTOMER_SUPPORT,
        title: 'Customer Support',
        icon: HeadphonesIcon,
        description: 'Suporte técnico especializado e atendimento ao cliente em múltiplos idiomas e canais.',
        subServices: [
            'Suporte Técnico 24/7',
            'Chat ao Vivo',
            'Help Desk',
            'Gestão de Tickets',
            'Suporte Multilíngue',
            'Análise de Satisfação'
        ],
        features: [
            {
                title: 'Atendimento 24/7',
                description: 'Suporte disponível a qualquer momento',
                icon: Clock
            },
            {
                title: 'Multicanal',
                description: 'Atendimento em diversos canais',
                icon: HeadphonesIcon
            },
            {
                title: 'Multilíngue',
                description: 'Suporte em vários idiomas',
                icon: Globe
            },
            {
                title: 'Gestão de Tickets',
                description: 'Sistema completo de tickets',
                icon: FileText
            },
            {
                title: 'Analytics',
                description: 'Métricas e relatórios detalhados',
                icon: BarChart2
            },
            {
                title: 'Satisfação',
                description: 'Monitoramento de NPS',
                icon: Heart
            }
        ],
        pricing: {
            starter: {
                name: 'Basic',
                price: 2999,
                description: 'Para pequenas equipes',
                features: [
                    'Até 100 tickets/mês',
                    'Horário comercial',
                    '2 canais de atendimento',
                    'Relatórios mensais',
                    'Help desk básico',
                    'Chat online'
                ]
            },
            professional: {
                name: 'Business',
                price: 5999,
                description: 'Para médias empresas',
                features: [
                    'Até 500 tickets/mês',
                    'Atendimento 24/7',
                    'Todos os canais',
                    'Relatórios semanais',
                    'Knowledge base',
                    'Integrações',
                    'SLA padrão'
                ]
            },
            enterprise: {
                name: 'Enterprise',
                description: 'Para grandes operações',
                price: null,
                features: [
                    'Tickets ilimitados',
                    'SLA garantido',
                    'Equipe dedicada',
                    'Relatórios em tempo real',
                    'Customizações',
                    'API completa',
                    'Gestão dedicada'
                ]
            }
        },
        tools: [
            'Zendesk',
            'Intercom',
            'Freshdesk',
            'Salesforce Service Cloud',
            'Custom Solutions'
        ]
    },
    {
        id: serviceIds.VIDEO_EDITING,
        title: 'Video Editing',
        icon: Video,
        description: 'Produção e edição profissional de vídeos para marketing, treinamento e comunicação corporativa.',
        subServices: [
            'Edição de Vídeo',
            'Motion Graphics',
            'Animação 2D',
            'Legendagem',
            'Vídeos Institucionais',
            'Conteúdo para Redes Sociais'
        ],
        features: [
            {
                title: 'Edição Profissional',
                description: 'Equipe especializada em edição',
                icon: Video
            },
            {
                title: 'Motion Graphics',
                description: 'Animações e efeitos visuais',
                icon: PenTool
            },
            {
                title: 'Multilíngue',
                description: 'Legendagem em vários idiomas',
                icon: Globe
            },
            {
                title: 'Alta Qualidade',
                description: 'Resolução até 4K',
                icon: Monitor
            },
            {
                title: 'Rápido',
                description: 'Entregas em até 48h',
                icon: Zap
            },
            {
                title: 'Versatilidade',
                description: 'Diversos formatos e estilos',
                icon: Share2
            }
        ],
        pricing: {
            starter: {
                name: 'Basic',
                price: 1999,
                description: 'Para pequenas produções',
                features: [
                    'Até 5 vídeos/mês',
                    'Full HD',
                    'Edição básica',
                    'Legendas em 1 idioma',
                    'Trilha sonora',
                    '1 revisão'
                ]
            },
            professional: {
                name: 'Pro',
                price: 3999,
                description: 'Para produções regulares',
                features: [
                    'Até 15 vídeos/mês',
                    '4K',
                    'Motion graphics',
                    'Legendas em 3 idiomas',
                    'Trilha personalizada',
                    '3 revisões'
                ]
            },
            enterprise: {
                name: 'Enterprise',
                description: 'Para grandes demandas',
                price: null,
                features: [
                    'Vídeos ilimitados',
                    '4K+',
                    'Equipe dedicada',
                    'Legendas ilimitadas',
                    'Produções complexas',
                    'Revisões ilimitadas'
                ]
            }
        },
        tools: [
            'Adobe Premiere Pro',
            'After Effects',
            'DaVinci Resolve',
            'Cinema 4D',
            'Adobe Audition'
        ]
    },
    {
        id: serviceIds.MARKETING,
        title: 'Marketing',
        icon: BarChart3,
        description: 'Estratégias completas de marketing digital para aumentar sua presença online e gerar resultados.',
        subServices: [
            'Marketing Digital',
            'SEO',
            'Gestão de Redes Sociais',
            'Email Marketing',
            'Marketing de Conteúdo',
            'Analytics e Relatórios'
        ],
        features: [
            {
                title: 'Estratégia Digital',
                description: 'Planejamento completo',
                icon: Target
            },
            {
                title: 'Performance',
                description: 'Foco em resultados',
                icon: TrendingUp
            },
            {
                title: 'Analytics',
                description: 'Métricas detalhadas',
                icon: LineChart
            },
            {
                title: 'Multicanal',
                description: 'Presença em todas as redes',
                icon: Share2
            },
            {
                title: 'Automação',
                description: 'Processos automatizados',
                icon: Zap
            },
            {
                title: 'Relatórios',
                description: 'Dashboards personalizados',
                icon: PieChart
            }
        ],
        pricing: {
            starter: {
                name: 'Start',
                price: 2499,
                description: 'Para pequenas empresas',
                features: [
                    '2 redes sociais',
                    'Posts semanais',
                    'SEO básico',
                    'Email marketing',
                    'Relatório mensal',
                    'Analytics básico'
                ]
            },
            professional: {
                name: 'Growth',
                price: 4999,
                description: 'Para empresas em crescimento',
                features: [
                    '4 redes sociais',
                    'Posts diários',
                    'SEO avançado',
                    'Automação de marketing',
                    'Relatórios semanais',
                    'Analytics completo'
                ]
            },
            enterprise: {
                name: 'Enterprise',
                description: 'Para grandes marcas',
                price: null,
                features: [
                    'Redes ilimitadas',
                    'Conteúdo sob demanda',
                    'SEO enterprise',
                    'Marketing automation',
                    'Relatórios personalizados',
                    'BI completo'
                ]
            }
        },
        tools: [
            'Google Analytics',
            'SEMrush',
            'HubSpot',
            'Mailchimp',
            'Buffer',
            'Hootsuite'
        ]
    },
    {
        id: serviceIds.PROJECT_MANAGEMENT,
        title: 'Project Management',
        icon: ClipboardList,
        description: 'Gestão eficiente de projetos com metodologias ágeis e foco em resultados.',
        subServices: [
            'Metodologias Ágeis',
            'Gestão de Equipes',
            'Planejamento Estratégico',
            'Controle de Qualidade',
            'Gestão de Riscos',
            'Relatórios de Performance'
        ],
        features: [
            {
                title: 'Metodologias Ágeis',
                description: 'Scrum e Kanban',
                icon: Rocket
            },
            {
                title: 'Gestão de Equipes',
                description: 'Liderança efetiva',
                icon: Users
            },
            {
                title: 'KPIs',
                description: 'Métricas de performance',
                icon: BarChart2
            },
            {
                title: 'Qualidade',
                description: 'Controle e garantia',
                icon: Shield
            },
            {
                title: 'Riscos',
                description: 'Gestão preventiva',
                icon: Target
            },
            {
                title: 'Comunicação',
                description: 'Transparência total',
                icon: MessageSquare
            }
        ],
        pricing: {
            starter: {
                name: 'Basic',
                price: 3499,
                description: 'Para pequenos projetos',
                features: [
                    'Até 3 projetos',
                    'Metodologia básica',
                    'Templates prontos',
                    'Relatórios mensais',
                    'Suporte por email',
                    'Dashboard básico'
                ]
            },
            professional: {
                name: 'Pro',
                price: 6999,
                description: 'Para equipes médias',
                features: [
                    'Até 10 projetos',
                    'Metodologia personalizada',
                    'Templates customizados',
                    'Relatórios semanais',
                    'Suporte prioritário',
                    'Dashboard completo'
                ]
            },
            enterprise: {
                name: 'Enterprise',
                description: 'Para grandes equipes',
                price: null,
                features: [
                    'Projetos ilimitados',
                    'PMO dedicado',
                    'Customização total',
                    'Relatórios diários',
                    'Suporte 24/7',
                    'BI personalizado'
                ]
            }
        },
        tools: [
            'Jira',
            'Confluence',
            'Trello',
            'Asana',
            'Monday',
            'Microsoft Project'
        ]
    },
    {
        id: serviceIds.ADMIN,
        title: 'Admin',
        icon: UserCog,
        description: 'Suporte administrativo completo para otimizar processos e aumentar a produtividade.',
        subServices: [
            'Gestão de Documentos',
            'Processamento de Dados',
            'Suporte Executivo',
            'Gestão de Calendário',
            'Relatórios Administrativos',
            'Organização de Eventos'
        ],
        features: [
            {
                title: 'Processos',
                description: 'Gestão documental',
                icon: FileText
            },
            {
                title: 'Produtividade',
                description: 'Otimização de tempo',
                icon: Clock
            },
            {
                title: 'Organização',
                description: 'Sistemas eficientes',
                icon: Database
            },
            {
                title: 'Suporte',
                description: 'Assistência contínua',
                icon: HeadphonesIcon
            },
            {
                title: 'Relatórios',
                description: 'Métricas administrativas',
                icon: BarChart2
            },
            {
                title: 'Eventos',
                description: 'Organização completa',
                icon: Calendar
            }
        ],
        pricing: {
            starter: {
                name: 'Basic',
                price: 1999,
                description: 'Para pequenas demandas',
                features: [
                    '20h/mês',
                    'Gestão básica',
                    'Suporte administrativo',
                    'Relatórios mensais',
                    'Email e chat',
                    'Processos padrão'
                ]
            },
            professional: {
                name: 'Business',
                price: 3999,
                description: 'Para demandas médias',
                features: [
                    '40h/mês',
                    'Gestão completa',
                    'Suporte executivo',
                    'Relatórios semanais',
                    'Atendimento prioritário',
                    'Processos customizados'
                ]
            },
            enterprise: {
                name: 'Enterprise',
                description: 'Para grandes demandas',
                price: null,
                features: [
                    'Horas ilimitadas',
                    'Gestão dedicada',
                    'Suporte VIP',
                    'Relatórios diários',
                    'Atendimento 24/7',
                    'Processos exclusivos'
                ]
            }
        },
        tools: [
            'Microsoft Office',
            'Google Workspace',
            'Asana',
            'Slack',
            'Zoom',
            'DocuSign'
        ]
    },
    {
        id: serviceIds.ACCOUNTING,
        title: 'Accounting',
        icon: Calculator,
        description: 'Serviços contábeis e financeiros para manter suas finanças organizadas e em conformidade.',
        subServices: [
            'Contabilidade Geral',
            'Gestão Financeira',
            'Folha de Pagamento',
            'Relatórios Financeiros',
            'Compliance Fiscal',
            'Planejamento Tributário'
        ],
        features: [
            {
                title: 'Contabilidade',
                description: 'Gestão completa',
                icon: Calculator
            },
            {
                title: 'Compliance',
                description: 'Conformidade total',
                icon: Shield
            },
            {
                title: 'Finanças',
                description: 'Controle financeiro',
                icon: DollarSign
            },
            {
                title: 'Relatórios',
                description: 'Análises detalhadas',
                icon: FileText
            },
            {
                title: 'Impostos',
                description: 'Gestão tributária',
                icon: Target
            },
            {
                title: 'Folha',
                description: 'RH e pagamentos',
                icon: Users
            }
        ],
        pricing: {
            starter: {
                name: 'Basic',
                price: 2499,
                description: 'Para pequenas empresas',
                features: [
                    'Contabilidade básica',
                    'Folha até 10 funcionários',
                    'Impostos mensais',
                    'Relatórios básicos',
                    'Suporte por email',
                    'Guias fiscais'
                ]
            },
            professional: {
                name: 'Business',
                price: 4999,
                description: 'Para médias empresas',
                features: [
                    'Contabilidade completa',
                    'Folha até 50 funcionários',
                    'Planejamento tributário',
                    'Relatórios gerenciais',
                    'Suporte prioritário',
                    'Consultoria fiscal'
                ]
            },
            enterprise: {
                name: 'Enterprise',
                description: 'Para grandes empresas',
                price: null,
                features: [
                    'Contabilidade personalizada',
                    'Folha ilimitada',
                    'Consultoria tributária',
                    'BI financeiro',
                    'Contador dedicado',
                    'Auditoria contábil'
                ]
            }
        },
        tools: [
            'SAP',
            'Oracle',
            'Sage',
            'QuickBooks',
            'Conta Azul',
            'Domínio Sistemas'
        ]
    },
    {
        id: serviceIds.DESIGN,
        title: 'Design',
        icon: Paintbrush,
        description: 'Design criativo e profissional para fortalecer sua marca e comunicação visual.',
        subServices: [
            'UI/UX Design',
            'Design Gráfico',
            'Branding',
            'Web Design',
            'Material Institucional',
            'Design para Redes Sociais'
        ],
        features: [
            {
                title: 'UI/UX',
                description: 'Design de interfaces',
                icon: Monitor
            },
            {
                title: 'Branding',
                description: 'Identidade visual',
                icon: Paintbrush
            },
            {
                title: 'Web',
                description: 'Design responsivo',
                icon: Globe
            },
            {
                title: 'Social',
                description: 'Redes sociais',
                icon: Share2
            },
            {
                title: 'Print',
                description: 'Material impresso',
                icon: FileText
            },
            {
                title: 'Motion',
                description: 'Animações',
                icon: Video
            }
        ],
        pricing: {
            starter: {
                name: 'Basic',
                price: 2999,
                description: 'Para pequenos projetos',
                features: [
                    '5 designs/mês',
                    'Redes sociais',
                    'Templates básicos',
                    '2 revisões',
                    'Entrega em 48h',
                    'Formatos padrão'
                ]
            },
            professional: {
                name: 'Pro',
                price: 5999,
                description: 'Para projetos regulares',
                features: [
                    '15 designs/mês',
                    'Branding completo',
                    'Templates premium',
                    'Revisões ilimitadas',
                    'Entrega em 24h',
                    'Todos os formatos'
                ]
            },
            enterprise: {
                name: 'Enterprise',
                description: 'Para grandes demandas',
                price: null,
                features: [
                    'Designs ilimitados',
                    'Equipe dedicada',
                    'Projetos complexos',
                    'Prioridade máxima',
                    'Entrega expressa',
                    'Formatos customizados'
                ]
            }
        },
        tools: [
            'Adobe Creative Suite',
            'Figma',
            'Sketch',
            'InVision',
            'After Effects',
            'Webflow'
        ]
    }
];

export const resources = {
    maxTeamSize: 50,
    supportedLanguages: ['pt', 'en', 'es'],
    timeZones: ['UTC-3', 'UTC', 'UTC+1'],
    availableCountries: ['Brasil', 'Estados Unidos', 'Espanha', 'Portugal', 'México', 'Colômbia'],
    workingHours: {
        weekdays: {
            start: '09:00',
            end: '18:00'
        },
        saturday: {
            start: '09:00',
            end: '13:00'
        },
        timezone: 'America/Sao_Paulo'
    }
};

export const teams = {
    leadership: [
        {
            name: 'Rafael Silva',
            role: 'CEO & Founder',
            image: '/team/member1.jpg',
            description: 'Especialista em transformação digital e estratégia empresarial',
            linkedin: 'https://linkedin.com/in/rafael-silva',
            email: 'rafael@align.com'
        },
        {
            name: 'Amanda Santos',
            role: 'Head of Operations',
            image: '/team/member2.jpg',
            description: 'Mais de 10 anos de experiência em gestão de operações globais',
            linkedin: 'https://linkedin.com/in/amanda-santos',
            email: 'amanda@align.com'
        }
    ],
    technical: [
        {
            name: 'Carlos Mendes',
            role: 'Head of Technology',
            image: '/team/member3.jpg',
            description: 'Especialista em arquitetura de soluções e inovação tecnológica',
            linkedin: 'https://linkedin.com/in/carlos-mendes',
            email: 'carlos@align.com'
        },
        {
            name: 'Pedro Oliveira',
            role: 'Head of DevOps',
            image: '/team/member5.jpg',
            description: 'Especialista em infraestrutura e automação',
            linkedin: 'https://linkedin.com/in/pedro-oliveira',
            email: 'pedro@align.com'
        }
    ],
    support: [
        {
            name: 'Júlia Costa',
            role: 'Head of Customer Success',
            image: '/team/member4.jpg',
            description: 'Focada em garantir a excelência na experiência do cliente',
            linkedin: 'https://linkedin.com/in/julia-costa',
            email: 'julia@align.com'
        },
        {
            name: 'Mariana Lima',
            role: 'Head of Support',
            image: '/team/member6.jpg',
            description: 'Especialista em suporte técnico e atendimento ao cliente',
            linkedin: 'https://linkedin.com/in/mariana-lima',
            email: 'mariana@align.com'
        }
    ]
};

export const values = [
    {
        icon: Star,
        title: 'Excelência',
        description: 'Buscamos a excelência em tudo o que fazemos, superando expectativas e entregando resultados excepcionais.'
    },
    {
        icon: Target,
        title: 'Foco no Cliente',
        description: 'O sucesso do cliente é nossa prioridade absoluta, trabalhando em parceria para alcançar objetivos.'
    },
    {
        icon: Users,
        title: 'Trabalho em Equipe',
        description: 'Colaboração e sinergia em todos os projetos, unindo talentos para resultados extraordinários.'
    },
    {
        icon: Heart,
        title: 'Paixão',
        description: 'Amor pelo que fazemos e compromisso com a qualidade em cada entrega.'
    },
    {
        icon: Shield,
        title: 'Integridade',
        description: 'Conduta ética e transparente em todas as nossas relações e operações.'
    },
    {
        icon: Coffee,
        title: 'Inovação',
        description: 'Busca constante por novas soluções e tecnologias para oferecer o melhor.'
    }
];

export const certifications = {
    security: [
        {
            name: 'ISO 27001',
            description: 'Certificação em Segurança da Informação',
            image: '/certifications/iso27001.svg'
        },
        {
            name: 'SOC 2',
            description: 'Service Organization Control 2',
            image: '/certifications/soc2.svg'
        },
        {
            name: 'LGPD Compliant',
            description: 'Em conformidade com a Lei Geral de Proteção de Dados',
            image: '/certifications/lgpd.svg'
        }
    ],
    quality: [
        {
            name: 'ISO 9001',
            description: 'Certificação em Gestão da Qualidade',
            image: '/certifications/iso9001.svg'
        },
        {
            name: 'CMMI Level 3',
            description: 'Capability Maturity Model Integration',
            image: '/certifications/cmmi.svg'
        }
    ],
    partnerships: [
        {
            name: 'AWS Partner',
            description: 'Amazon Web Services Advanced Partner',
            image: '/certifications/aws-partner.svg'
        },
        {
            name: 'Microsoft Partner',
            description: 'Microsoft Gold Partner',
            image: '/certifications/ms-partner.svg'
        },
        {
            name: 'Google Cloud Partner',
            description: 'Google Cloud Partner',
            image: '/certifications/gcp-partner.svg'
        }
    ]
};

export const contact = {
    phone: '+55 11 9999-9999',
    email: 'contato@align.com',
    address: {
        street: 'Av. Paulista, 1000',
        city: 'São Paulo',
        state: 'SP',
        country: 'Brasil',
        zip: '01310-100'
    },
    locations: [
        {
            city: 'São Paulo',
            address: 'Av. Paulista, 1000 - Bela Vista',
            phone: '+55 (11) 9999-9999',
            email: 'sp@align.com',
            coordinates: {
                lat: -23.5505,
                lng: -46.6333
            },
            hours: {
                weekdays: '09:00 - 18:00',
                saturday: '09:00 - 13:00',
                sunday: 'Fechado'
            }
        },
        {
            city: 'Rio de Janeiro',
            address: 'Av. Rio Branco, 500 - Centro',
            phone: '+55 (21) 9999-9999',
            email: 'rj@align.com',
            coordinates: {
                lat: -22.9068,
                lng: -43.1729
            },
            hours: {
                weekdays: '09:00 - 18:00',
                saturday: '09:00 - 13:00',
                sunday: 'Fechado'
            }
        }
    ],
    socialMedia: {
        linkedin: 'https://linkedin.com/company/align',
        twitter: 'https://twitter.com/align',
        facebook: 'https://facebook.com/align',
        instagram: 'https://instagram.com/align'
    }
};

export const metrics = {
    projectsCompleted: 500,
    countriesServed: 15,
    clientSatisfaction: 98,
    averageResponseTime: 4,
    teamSize: 100,
    yearsFounded: 2024,
    casesResolved: 15000,
    supportLanguages: 6,
    uptime: 99.9,
    deployments: 5000,
    codeReviews: 12000,
    apiCalls: '1M+',
    retention: 95,
    nps: 85,
    responseTime: '< 4h',
    projectSuccess: 97
};

export const seo = {
    defaultTitle: 'Align - Transforme a comunicação da sua empresa em resultados',
    defaultDescription: 'Soluções integradas de comunicação que aumentam a eficiência, reduzem custos e impulsionam o crescimento do seu negócio.',
    defaultKeywords: 'comunicação empresarial, desenvolvimento, customer support, marketing, project management',
    baseUrl: 'https://align.com.br',
    defaultImage: '/og-image.jpg',
    socialImage: '/social-share.jpg',
    twitterHandle: '@align',
    facebookAppId: '123456789',
    locale: 'pt_BR',
    type: 'website',
    siteName: 'Align',
    logos: {
        default: '/logo.svg',
        white: '/logo-white.svg',
        dark: '/logo-dark.svg',
        favicon: '/favicon.ico',
        touchIcon: '/touch-icon.png'
    }
};

// Funções auxiliares
export function getFormattedAddress(address) {
    const { street, city, state, country, zip } = address || contact.address;
    return `${street}, ${city} - ${state}, ${country}, ${zip}`;
}

export function formatCurrency(value, currency = 'BRL') {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency
    }).format(value);
}

export function getServiceById(id) {
    return services.find(service => service.id === id);
}

export function formatPhoneNumber(phone) {
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

export function getLocationByCity(city) {
    return contact.locations.find(location => location.city === city);
}

export function getTotalEmployees() {
    return teams.leadership.length + teams.technical.length + teams.support.length;
}

export function getSocialMediaLinks() {
    return Object.entries(contact.socialMedia).map(([platform, url]) => ({
        platform,
        url
    }));
}

export function getWorkingHours(city) {
    const location = getLocationByCity(city);
    return location ? location.hours : resources.workingHours;
}

export default {
    serviceIds,
    services,
    resources,
    metrics,
    teams,
    values,
    certifications,
    contact,
    seo,
    getFormattedAddress,
    formatCurrency,
    getServiceById,
    formatPhoneNumber,
    getLocationByCity,
    getTotalEmployees,
    getSocialMediaLinks,
    getWorkingHours
};