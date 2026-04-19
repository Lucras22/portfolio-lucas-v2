import { Component, signal, HostListener, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  animations: [
    trigger('skillAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  // 1. Deixamos como TRUE por padrão para os dados existirem, 
  // mas controlamos a animação das barras separadamente.
  showContent = signal(true); 
  barsAnimated = signal(false);

  hardwareSkills = signal<Skill[]>([
    { name: 'Microcontroladores', level: 75, icon: 'bi-cpu' },
    { name: 'Criação de PCB', level: 55, icon: 'bi-motherboard' },
    { name: 'Sensores', level: 80, icon: 'bi-radar' },
    { name: 'Eletrônica Digital', level: 25, icon: 'bi-toggle-on' }
  ]);

  softwareSkills = signal<Skill[]>([
    { name: 'C / C++', level: 35, icon: 'bi-filetype-cpp' },
    { name: 'Django + PostgreSQL', level: 47, icon: 'bi-database' },
    { name: 'Angular / Ionic', level: 25, icon: 'bi-braces' },
    { name: 'IoT Architecture', level: 50, icon: 'bi-cloud-check' }
  ]);

  softSkills = signal<Skill[]>([
    { name: 'Comunicação', level: 98, icon: 'bi-chat-dots' },
    { name: 'Proatividade', level: 98, icon: 'bi-lightning-charge' },
    { name: 'Comprometimento', level: 98, icon: 'bi-award' },
    { name: 'Pontualidade', level: 90, icon: 'bi-clock-history' }
  ]);

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Check inicial caso a página já carregue em cima da seção
    this.checkScroll();
  }

  // 2. Ouvinte de Scroll nativo do Angular
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;

    // Se o scroll chegar na seção, ativa a animação das barras
    if (scrollPosition > componentPosition + 100) {
      this.barsAnimated.set(true);
    }
  }
}