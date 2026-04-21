import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importe todos os seus novos componentes aqui:
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { GenesisHitechComponent } from './components/genesis-hitech/genesis-hitech.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeComponent } from './components/resume/resume.component';

@Component({
  selector: 'app-root',
  standalone: true, // Garante que é standalone
  imports: [
    RouterOutlet,
    HeaderComponent,    // Adicione aqui
    HeroComponent,      // Adicione aqui
    AboutComponent,     // Adicione aqui
    GenesisHitechComponent, 
    SkillsComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-lucas-v2';
}