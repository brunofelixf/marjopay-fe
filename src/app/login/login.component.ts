import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule aqui
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // this.authService.login(this.username, this.password).subscribe({
    //   next: (response) => {
    //     console.log('Login bem-sucedido', response);
    //     this.router.navigate(['/doacao']);
    //   },
    //   error: (error) => {
    //     console.error('Erro no login', error);
    //     alert('Falha no login! Verifique suas credenciais e tente novamente.');
    //   }
    // });
  }
}

