// src/lib/constants.js
import {
    Code2,
    HeadphonesIcon,
    Video,
    BarChart3,
    ClipboardList,
    UserCog,
    Calculator,
    Paintbrush
} from 'lucide-react';

export const services = [
    {
        id: 'development',
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
        ]
    },
    {
        id: 'customer-support',
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
        ]
    },
    {
        id: 'video-editing',
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
        ]
    },
    {
        id: 'marketing',
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
        ]
    },
    {
        id: 'project-management',
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
        ]
    },
    {
        id: 'admin',
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
        ]
    },
    {
        id: 'accounting',
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
        ]
    },
    {
        id: 'design',
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
        ]
    }
];