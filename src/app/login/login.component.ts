import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule aqui

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Aqui você pode adicionar lógica para verificar as credenciais, fazer chamadas HTTP, etc.
    console.log(`Tentativa de login com usuário: ${this.username} e senha: ${this.password}`);
    // Exemplo simples: redirecionar para outra rota após o login
    // this.router.navigate(['/dashboard']);
  }
}

