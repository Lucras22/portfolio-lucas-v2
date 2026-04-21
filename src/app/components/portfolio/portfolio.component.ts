import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation } from '../../animations';

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  tags: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations: [fadeInAnimation]
})
export class PortfolioComponent {
  projects = signal<Project[]>([
    {
      title: 'Genesis HiTech',
      description: 'Ecosistema tecnológico fundado para desenvolver soluções disruptivas em Hardware e Software. Lidero uma equipe multidisciplinar focada em transformar desafios complexos em sistemas inteligentes e automatizados para o mercado de tecnologia.',
      image: 'assets/logo.png',
      github: 'https://github.com/GENESIS-HITECH-GIT',
      tags: ['Startup', 'Liderança', 'TEC']
    },
    {
      title: 'Projeto IrrigaClima',
      description: 'Fornece dados meteorológicos em tempo real (umidade, temperatura, pressão, UV) e integra um sistema automatizado de irrigação para otimizar o uso da água na agricultura familiar.',
      image: 'assets/irrigaclima.png',
      github: 'https://github.com/Lucras22/IrrigaClima-embedded-system-project',
      tags: ['ESP32', 'Meteorologia', 'Automação']
    },
    {
      title: 'Saída Escolar Automatizada',
      description: 'Utiliza um ESP32 como central Wi-Fi para criar uma interface web local, permitindo que coordenadores controlem e liberem as turmas de forma organizada e remota.',
      image: 'assets/aspseur.png',
      github: 'https://github.com/Lucras22/automacao_processodesaidaescolar',
      tags: ['Network', 'Web Server', 'ESP32']
    },
    {
      title: 'Projeto SafeHome_IoT',
      description: 'Sistema de automação residencial focado em segurança. Integra diversos sensores e dispositivos conectados a um Bot no Telegram para alertas e controle em tempo real.',
      image: 'assets/safe.png',
      github: 'https://github.com/Lucras22/SafeHome_IoT',
      tags: ['Segurança', 'IoT', 'Telegram API']
    },
    {
      title: 'Hidro-Webnia',
      description: 'Solução hidropônica com monitoramento contínuo de nutrientes e pH via sensores. Foco em aumentar a rentabilidade e supervisão precisa do cultivo.',
      image: 'assets/hidrowebnia.png',
      github: 'https://github.com/Lucras22',
      demo: 'https://hidrowebnia.onrender.com/',
      tags: ['C++', 'Hidroponia', 'Web']
    },
    {
      title: 'Estação Meteorológica',
      description: 'Estação de baixo custo para monitoramento climático em tempo real. Ideal para pesquisas e agricultura, cobrindo desde o esquemático até a montagem final.',
      image: 'assets/estacao.png',
      github: 'https://github.com/Lucras22/', // Ajuste o link se necessário
      tags: ['Hardware', 'Sensores', 'C++']
    },
    {
      title: 'Estufas Automatizadas',
      description: 'Controle de qualidade de água e ambiente para tanques e estufas. Gerencia válvulas e irrigação via relés com horários programados e monitoramento via Telegram.',
      image: 'assets/estufas.png',
      github: 'https://github.com/Lucras22/Estufa_Aquacultura_Hidroponia_Salobra',
      tags: ['Aquacultura', 'Relés', 'Telegram']
    }
  ]);
}