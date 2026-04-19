import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation } from '../../animations';

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
  animations: [fadeInAnimation]
})
export class SkillsComponent {
  // Usando Signals para armazenar as categorias de habilidades
  hardwareSkills = signal<Skill[]>([
    { name: 'Microcontroladores', level: 75, icon: 'bi-cpu' },
    { name: 'Criação de PCB', level: 55, icon: 'bi-motherboard' },
    { name: 'Sensores', level: 80, icon: 'bi-radar' },
    { name: 'Eletrônica Digital', level: 25, icon: 'bi-toggle-on' }
  ]);

  softwareSkills = signal<Skill[]>([
    { name: 'C / C++', level: 35, icon: 'bi-filetype-cpp' },
    { name: 'Raspberry Pi', level: 25, icon: 'bi-raspberry-pi' },
    { name: 'Angular / Ionic', level: 25, icon: 'bi-braces' },
    { name: 'IoT Architecture', level: 50, icon: 'bi-cloud-check' }
  ]);

  softSkills = signal<Skill[]>([
    { name: 'Comunicação', level: 98, icon: 'bi-chat-dots' },
    { name: 'Proatividade', level: 98, icon: 'bi-lightning-charge' },
    { name: 'Comprometimento', level: 98, icon: 'bi-award' },
    { name: 'Pontualidade', level: 90, icon: 'bi-clock-history' }
  ]);
}