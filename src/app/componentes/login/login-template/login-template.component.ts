import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from '../../professor/professor.model';
import { ProfessorService } from '../../professor/professor.service'
import { Usuario } from '../../usuario/usuario.model';
import { UsuarioService } from '../../usuario/usuario.service';
import { SessaoService } from '../../sessao/sessao.service';
import { Sessao } from '../../sessao/sessao.model';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.css']
})
export class LoginTemplateComponent implements OnInit {
  selecao: Number = 0;
  teste: Boolean = false;
  auxiliar: Number = 0;
  sessao: Sessao = { _id: '61ffc6c31b187e2a1c8b7fe3', nome: '', nick: '', auxiliar: '', tipo: 0, idLogado: '' };


  usuario: Usuario = {
    nome: '', nick: '', senha: '', status: true
  }

  professor: Professor = {
    nome: '', nick: '', senha: '', status: true, imagens: []
  }


  login: Professor = {
    nome: '', nick: '', senha: '', status: true, imagens: []
  }
  professores: Professor[] = []

  usuarios: Usuario[] = []

  loginuser: Usuario = {
    nome: '', nick: '', senha: '', status: true
  }





  constructor(private professorService: ProfessorService, private usuarioService: UsuarioService, private sessaoService: SessaoService,
    private router: Router) { }

  ngOnInit(): void {
    this.sessaoService.read().subscribe(sessao => {
      this.sessao = sessao[0]
       })
    if (this.usuarioService.salvar) {
      this.usuario = { nome: '', nick: '', senha: '', status: true }
    } else {
      this.usuario = this.usuarioService.usuario;
    }
  }


  fazerLogin() {
    this.sessaoService.update(this.sessao).subscribe(() => { });
    if (this.selecao == 1) {
      this.professorService.read().subscribe(professor => {
        this.professores = professor
      })
      console.log("Nome que está vindo no login.nome" + this.login.nick);
      this.teste = false;
      this.professores.forEach(a => {
        this.teste = (a.nick === this.login.nick && a.senha === this.login.senha)
        if (this.teste==true) {
          this.sessao = this.sessaoService.sessao;
          this.sessao.nick = a.nick;
          this.sessao.nome = a.nome;
          this.sessao._id = "61ffc6c31b187e2a1c8b7fe3";
          this.sessao.tipo = 1;
          this.sessao.idLogado = <String>a._id;
          this.sessaoService.update(this.sessao).subscribe(() => { });
          this.usuarioService.showMessage('Login de Professor Realizado.')
            this.router.navigate(['/']); 
        }
      });
    }

    if (this.selecao == 2) {
      this.loginuser._id = this.login._id;
      this.loginuser.nick = this.login.nick;
      this.loginuser.nome = this.login.nome;
      this.loginuser.senha = this.login.senha;
      this.loginuser.status = this.login.status;
      this.usuarioService.read().subscribe(usuario => {
        this.usuarios = usuario
      })


      this.usuarios.forEach(a => {
        this.teste = (a.nick === this.loginuser.nick && a.senha === this.loginuser.senha)
        if (this.teste) {
          this.sessao = this.sessaoService.sessao;
          this.sessao.nick = a.nick;
          this.sessao.nome = a.nome;
          this.sessao._id = "61ffc6c31b187e2a1c8b7fe3";
          this.sessao.tipo = 2;
          this.sessao.idLogado = <String>a._id;
          this.sessaoService.update(this.sessao).subscribe(() => { });
          this.usuarioService.showMessage('Login de Usuário Realizado.');
          this.router.navigate(['/'])
        }
      })
    }



  }

  cadastro() {
    this.router.navigate(['/login/create'])
  }

  cancelar() {
    this.router.navigate(['/'])
  }
  fazerCadastro() {
    this.usuarioService.create(this.usuario).subscribe(() => {
      this.usuarioService.showMessage('Usuário cadastrado com sucesso!')
      this.router.navigate(['/imagens'])
    })

  }
}





