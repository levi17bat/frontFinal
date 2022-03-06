import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './componentes/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './componentes/template/footer/footer.component';
import { MenuComponent } from './componentes/template/menu/menu.component';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ManutencaoProfessorComponent } from './views/manutencao-professor/manutencao-professor.component';
import { ManutencaoUsuarioComponent } from './views/manutencao-usuario/manutencao-usuario.component';
import { ManutencaoColaboracaoComponent } from './views/manutencao-colaboracao/manutencao-colaboracao.component';
import { ManutencaoImagensComponent } from './views/manutencao-imagens/manutencao-imagens.component';
import { ProfessorCreateComponent } from './componentes/professor/professor-create/professor-create.component';
import { UsuarioCreateComponent } from './componentes/usuario/usuario-create/usuario-create.component';
import { ColaboracaoCreateComponent } from './componentes/colaboracao/colaboracao-create/colaboracao-create.component';
import { ImagemCreateComponent } from './componentes/imagem/imagem-create/imagem-create.component';
import { ProfessorReadComponent } from './componentes/professor/professor-read/professor-read.component';
import { UsuarioReadComponent } from './componentes/usuario/usuario-read/usuario-read.component';
import { ColaboracaoReadComponent } from './componentes/colaboracao/colaboracao-read/colaboracao-read.component';
import { ImagemReadComponent } from './componentes/imagem/imagem-read/imagem-read.component';
import { CriacaoCreateComponent } from './componentes/criacao/criacao-create/criacao-create.component';
import { DisciplinaCreateComponent } from './componentes/disciplina/disciplina-create/disciplina-create.component';
import { DisciplinaReadComponent } from './componentes/disciplina/disciplina-read/disciplina-read.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ColaboracaoDeleteComponent } from './componentes/colaboracao/colaboracao-delete/colaboracao-delete.component';
import { ImagemDeleteComponent } from './componentes/imagem/imagem-delete/imagem-delete.component';
import { UsuarioDeleteComponent } from './componentes/usuario/usuario-delete/usuario-delete.component';
import { ManutentaoDisciplinaComponent } from './views/manutencao-disciplina/manutentao-disciplina.component';
import { LogginComponent } from './account/loggin/loggin.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { ColapsarImagemComponent } from './componentes/imagem/colapsar-imagem/colapsar-imagem.component';
import {AssuntoCreateComponent} from './componentes/assunto/assunto-create/assunto-create.component';
import { RelatoriosComponent } from './componentes/relatorios/relatorios.component';

import { ColapsarRelatorioComponent } from './componentes/relatorios/colapsar-relatorio/colapsar-relatorio.component';
import { ColapsarRelatorioProfessorComponent } from './componentes/relatorios/colapsar-relatorio-professor/colapsar-relatorio-professor.component';
import {ColapsarRelatorioUsuarioComponent} from './componentes/relatorios/colapsar-relatorio-usuario/colapsar-relatorio-usuario.component';
import { LoginTemplateComponent } from './componentes/login/login-template/login-template.component';
import { LoginCreateComponent } from './componentes/login/login-create/login-create.component';
import { LoginReadComponent } from './componentes/login/login-read/login-read.component';
import { ImagemUpdateComponent } from './componentes/imagem/imagem-update/imagem-update.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ManutencaoProfessorComponent,
    ManutencaoUsuarioComponent,
    ManutencaoColaboracaoComponent,
    ManutencaoImagensComponent,
    ProfessorCreateComponent,
    UsuarioCreateComponent,
    ColaboracaoCreateComponent,
    ImagemCreateComponent,
    UsuarioReadComponent,
    ColaboracaoReadComponent,
    ImagemReadComponent,
    CriacaoCreateComponent,
    DisciplinaCreateComponent,
    DisciplinaReadComponent,
    ProfessorReadComponent,
    ColaboracaoDeleteComponent,
    ImagemDeleteComponent,
    UsuarioDeleteComponent,
    ManutentaoDisciplinaComponent,
    LogginComponent,
    CreateAccountComponent,
    AuthenticationComponent,
    ColapsarImagemComponent,
    AssuntoCreateComponent,
    RelatoriosComponent,
    ColapsarRelatorioComponent,
    ColapsarRelatorioProfessorComponent,
    ColapsarRelatorioUsuarioComponent,
    LoginTemplateComponent,
    LoginCreateComponent,
    LoginReadComponent,
    ImagemUpdateComponent
    
  ]
  ,

  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
