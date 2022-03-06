import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from '../../professor/professor.model';
import { ProfessorService } from '../../professor/professor.service'
import { Usuario } from '../../usuario/usuario.model';
import { UsuarioService } from '../../usuario/usuario.service';
import { SessaoService } from '../../sessao/sessao.service';
import { Sessao } from '../../sessao/sessao.model';




@Component({
  selector: 'app-login-create',
  templateUrl: './login-create.component.html',
  styleUrls: ['./login-create.component.css']
})
export class LoginCreateComponent implements OnInit {

  selecao: Number = 0;
  teste: Boolean = false;

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


  cadastrarUsuario() {
    if ((this.sessao.tipo == 1) || (this.sessao.tipo == 2)) {
      this.usuarioService.create(this.usuario).subscribe(() => {
        this.usuarioService.showMessage('Usuário cadastrado com sucesso!')
        this.router.navigate(['/imagens'])
      })

    } else {
      alert("Privilégios insuficientes para ação. Favor fazer login em conta privilegiada");
      this.router.navigate(['./login'])
    }
  }


  cadastrarProfessor() {
    if (this.sessao.tipo == 1){
      this.professorService.create(this.professor).subscribe(() => {
        this.usuarioService.showMessage('Professor cadastrado com sucesso!')
        this.router.navigate(['/imagens'])
      })
    }else{
      alert("Privilégios insuficientes para ação. Favor fazer login em conta privilegiada");
      this.router.navigate(['./login'])
      }
    

  }

  cancelar() {
    this.router.navigate(['/'])
  }

}






