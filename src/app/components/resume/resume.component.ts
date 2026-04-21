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
      description: 'Estratégias de marketing, e-commerce e análise de dados.',
      type: 'course',
      link: 'https://www.coursera.org/account/accomplishments/specialization/UNLA5RWXJRGC'
    },
    {
      title: 'AWS Cloud Foundations',
      year: '20h',
      institution: 'Amazon Web Services',
      description: 'Fundamentos de infraestrutura e serviços em nuvem.',
      type: 'course',
      link: '#'
    },
    {
      title: 'HCIA-5G V2.0',
      year: '40h',
      institution: 'Huawei',
      description: 'Arquitetura e conectividade de redes móveis 5G.',
      type: 'course',
      link: 'https://www.credly.com/go/CBPcwXfF'
    }
  ];
}