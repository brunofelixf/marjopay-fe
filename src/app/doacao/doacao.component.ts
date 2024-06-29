import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class DoacaoComponent {
  doacao = {
    valor: null,
    // nomeCartao: '',
    // numeroCartao: ''
  };

  processarDoacao() {
    // if (this.doacaoForm.valid) {
    //   console.log('Doação processada:', this.doacao);
    //   // Aqui você pode adicionar integração com um serviço de pagamentos
    // }
  }
}
