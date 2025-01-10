// src/components/about/TeamMember.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
    {
        name: 'Rafael Silva',
        role: 'CEO & Founder',
        image: '/team/member1.jpg',
        description: 'Especialista em transformação digital e estratégia empresarial.',
        linkedin: 'https://linkedin.com/in/rafael-silva',
        email: 'rafael@align.com'
    },
    {
        name: 'Amanda Santos',
        role: 'Head of Operations',
        image: '/team/member2.jpg',
        description: 'Mais de 10 anos de experiência em gestão de operações globais.',
        linkedin: 'https://linkedin.com/in/amanda-santos',
        email: 'amanda@align.com'
    },
    {
        name: 'Carlos Mendes',
        role: 'Head of Technology',
        image: '/team/member3.jpg',
        description: 'Especialista em arquitetura de soluções e inovação tecnológica.',
        linkedin: 'https://linkedin.com/in/carlos-mendes',
        email: 'carlos@align.com'
    },
    {
        name: 'Júlia Costa',
        role: 'Head of Customer Success',
        image: '/team/member4.jpg',
        description: 'Focada em garantir a excelência na experiência do cliente.',
        linkedin: 'https://linkedin.com/in/julia-costa',
        email: 'julia@align.com'
    },
    {
        name: 'Pedro Oliveira',
        role: 'Head of Sales',
        image: '/team/member5.jpg',
        description: 'Especialista em desenvolvimento de negócios e parcerias estratégicas.',
        linkedin: 'https://linkedin.com/in/pedro-oliveira',
        email: 'pedro@align.com'
    },
    {
        name: 'Mariana Lima',
        role: 'Head of Marketing',
        image: '/team/member6.jpg',
        description: 'Estrategista de marketing digital com foco em resultados.',
        linkedin: 'https://linkedin.com/in/mariana-lima',
        email: 'mariana@align.com'
    }
];

const TeamMember = () => {
    return (
        <>
            {teamMembers.map((member, index) => (
                <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                >
                    <div className="relative bg-white rounded-xl shadow-sm overflow-hidden">
                        {/* Image */}
                        <div className="aspect-w-4 aspect-h-3">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-xl font-semibold mb-1">
                                {member.name}
                            </h3>
                            <p className="text-primary-200 text-sm mb-2">
                                {member.role}
                            </p>
                            <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {member.description}
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="absolute top-4 right-4 flex space-x-2">
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/90 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a
                                href={`mailto:${member.email}`}
                                className="p-2 bg-white/90 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                            >
                                <Mail className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </>
    );
};

export default TeamMember;