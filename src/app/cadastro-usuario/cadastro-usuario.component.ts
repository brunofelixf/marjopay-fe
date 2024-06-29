import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent {
  usuario = {
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
    confirmarSenha: ''
  };

  cadastrarUsuario() {
    // Aqui você pode implementar a lógica para enviar os dados para o backend ou para um serviço
    console.log('Dados do novo usuário:', this.usuario);
    // Exemplo: chamar um serviço para enviar os dados para o backend
    // this.usuarioService.cadastrarUsuario(this.usuario).subscribe(() => {
    //   console.log('Usuário cadastrado com sucesso!');
    // });
  }
}
