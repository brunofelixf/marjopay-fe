import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-extrato-doacoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extrato-doacoes.component.html',
  styleUrl: './extrato-doacoes.component.scss'
})
export class ExtratoDoacoesComponent {
  doacoes = [
    { data: new Date(), valor: 50, doador: 'João Silva' },
    { data: new Date(), valor: 75, doador: 'Maria Souza' },
    { data: new Date(), valor: 100, doador: 'Carlos Andrade' }
  ];
}



