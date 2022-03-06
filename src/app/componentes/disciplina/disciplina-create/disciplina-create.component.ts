import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../disciplina.model';
import { DisciplinaService } from '../disciplina.service';
import { Router } from '@angular/router';
import {Sessao} from '../../sessao/sessao.model';
import {SessaoService} from '../../sessao/sessao.service';


@Component({
  selector: 'app-disciplina-create',
  templateUrl: './disciplina-create.component.html',
  styleUrls: ['./disciplina-create.component.css']
})
export class DisciplinaCreateComponent implements OnInit {

  sessao: Sessao = { _id: '61ffc6c31b187e2a1c8b7fe3', nome: '', nick: '', auxiliar: '', tipo:0, idLogado:'' };
  disciplina: Disciplina = {
    nomeDisciplina: '', assuntos: [], professor_idProfessor: ''
  }

  constructor(
    private disciplinaService: DisciplinaService,
    private router: Router, private sessaoService: SessaoService) { }


  ngOnInit(): void {

    this.sessaoService.read().subscribe(sessao => {
      this.sessao = sessao[0]
       })

    if (this.disciplinaService.salvar) {
      this.disciplina = { nomeDisciplina: '', assuntos: [], professor_idProfessor: '' }
    } else {
      this.disciplina = this.disciplinaService.disciplina;
    }
  }




  
  criarDisciplina(): void {

    if(this.sessao.tipo==1){

    this.disciplina.assuntos = [];
    this.disciplina.professor_idProfessor='61b16f60a6c1ff22e01e0e48';
      console.log("Nome da disciplina que está chegando = "+this.disciplina.nomeDisciplina);
      console.log("Id da disciplina que está chegando = "+this.disciplina._id);
      console.log("Id do professor = "+this.disciplina.professor_idProfessor);

      this.disciplinaService.create(this.disciplina).subscribe(() => {
        this.disciplinaService.showMessage('Disciplina cadastrada com sucesso')
        this.router.navigate(['/'])
      })
    }else{
      alert("Privilégios insuficientes para ação. Favor fazer login em conta privilegiada");
      this.router.navigate(['./login'])
      }


  }

  cancelar(): void {
    this.router.navigate(['/'])
  }
}
