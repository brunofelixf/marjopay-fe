import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

interface Usuario {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  confirmarSenha: string;
}
@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent {
  usuario: Usuario = {
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
    confirmarSenha: ''
  };

  cadastrarUsuario() {
    if (this.usuario.senha !== this.usuario.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    console.log('Dados do novo usuário:', this.usuario);
    // Lógica para enviar os dados para o backend
  }
}
