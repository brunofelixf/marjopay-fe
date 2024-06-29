import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { ExtratoDoacoesComponent } from './extrato-doacoes/extrato-doacoes.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
    { path: 'doacao', component: DoacaoComponent },
    { path: 'extrato', component: ExtratoDoacoesComponent }
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })

// export class AppRoutingModule { }
