import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { fadeInAnimation } from '../../animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [fadeInAnimation]
})
export class ContactComponent {
  isSending = signal(false);
  sentSuccess = signal(false);

  // Link do WhatsApp com mensagem personalizada para Freelas de IoT
  whatsappUrl = "https://wa.me/558881092374?text=Olá Lucas, vi seu portfólio e gostaria de um orçamento para um projeto de Automação com Hardware/IoT.";

  async onSubmit(form: any) {
    this.isSending.set(true);
    
    // Usaremos Formspree (Gratuito e Profissional)
    // Basta criar uma conta em formspree.io e colocar sua ID aqui
    const formspreeUrl = "https://formspree.io/f/meevrgvn"; 

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: JSON.stringify(form.value),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        this.sentSuccess.set(true);
        form.reset();
      }
    } catch (error) {
      alert("Erro ao enviar. Tente novamente ou use o WhatsApp.");
    } finally {
      this.isSending.set(false);
    }
  }
}