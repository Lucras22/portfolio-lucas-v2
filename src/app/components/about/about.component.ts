import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation } from '../../animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [fadeInAnimation]
})
export class AboutComponent implements OnInit {
  age: number = 0;

  ngOnInit() {
    this.calculateAge();
  }

  calculateAge() {
    const birthDate = new Date(2006, 3, 22); // Abril é índice 3
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    // Ajuste caso o aniversário ainda não tenha ocorrido no ano atual
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    this.age = age;
  }
}