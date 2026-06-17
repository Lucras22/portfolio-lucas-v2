import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation } from '../../animations';

interface ResumeItem {
  title: string;
  year: string;
  institution: string;
  description: string;
  type: 'education' | 'course';
  link?: string;
  hours?: string;
  image?: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  animations: [fadeInAnimation]
})
export class ResumeComponent {
  education: ResumeItem[] = [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      year: '2025 - Presente',
      institution: 'IFCE - Campus Boa Viagem',
      description: 'Graduando em ADS. Foco em arquitetura de software, sistemas embarcados e inovação tecnológica.',
      type: 'education'
    },
    {
      title: 'Técnico em Informática',
      year: '2022 - 2024',
      institution: 'EEEP Venceslau Vieira Batista',
      description: 'Formação técnica integrada ao ensino médio. Base sólida em algoritmos e desenvolvimento web.',
      type: 'education'
    },
    {
      title: 'Ensino Fundamental',
      year: '2012 - 2021',
      institution: 'EEF Padre Antônio Correia de Sá',
      description: 'Conclusão do ensino básico fundamental.',
      type: 'education'
    }
  ];

  courses: ResumeItem[] = [
    {
      title: 'Google Digital Marketing & E-commerce',
      year: '190h',
      institution: 'Coursera / Google',
      description: 'Desenvolvimento de estratégias de marketing digital, gestão de lojas virtuais, otimização de campanhas (SEO/SEM) e análise de dados para atração e retenção de clientes.',
      type: 'course',
      link: 'https://www.coursera.org/account/accomplishments/specialization/UNLA5RWXJRGC',
      image: 'assets/certificado/Coursera.png'
    },
    {
      title: 'AWS Cloud Foundations',
      year: '20h',
      institution: 'Amazon Web Services',
      description: 'Visão geral detalhada dos conceitos de computação em nuvem, segurança, arquitetura, serviços essenciais da AWS (EC2, S3, RDS) e modelos de precificação.',
      type: 'course',
      link: '#',
      image: 'assets/certificado/AWS.png'
    },
    {
      title: 'HCIA-5G V2.0',
      year: '40h',
      institution: 'Huawei',
      description: 'Estudo da arquitetura de redes móveis de quinta geração, abrangendo tecnologias de ponta, infraestrutura de transmissão, conectividade de baixa latência e cenários de aplicação industrial.',
      type: 'course',
      link: 'https://www.credly.com/go/CBPcwXfF',
      image: 'assets/certificado/Huawei.png'
    },
    {
      title: 'Technical Support Fundamentals',
      year: '19h',
      institution: 'Coursera / Google',
      description: 'Fundamentos de suporte técnico em TI, abrangendo manutenção de hardware, configuração de redes, troubleshooting e atendimento via Help Desk.',
      type: 'course',
      link: 'https://www.coursera.org/account/accomplishments/verify/XIWL0T9EWMEY',
      image: 'assets/certificado/CourseraTI.png'
    },
    // {
    //   title: 'AWS Cloud Foundations',
    //   year: '20h',
    //   institution: 'Amazon Web Services',
    //   description: 'Fundamentos de infraestrutura e serviços em nuvem.',
    //   type: 'course',
    //   link: '#',
    //   image: 'assets/certificado/AWS.png'
    // },
    {
      title: 'Educação Financeira',
      year: '4h',
      institution: 'Fundação Bradesco (Escola Virtual)',
      description: 'Capacitação em planejamento financeiro pessoal, englobando controle de orçamento, gestão de despesas, uso consciente do crédito e introdução a investimentos.',
      type: 'course',
      link: 'https://www.ev.org.br/validar-certificado',
      image: 'assets/certificado/financeira.png'
    }
  ];
}