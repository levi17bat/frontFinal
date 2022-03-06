import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssuntoService } from '../assunto.service';
import { Assunto } from '../assunto.model';
import { Imagem } from '../../imagem/imagem.model';
import { Disciplina } from '../../disciplina/disciplina.model';
import { DisciplinaService } from '../../disciplina/disciplina.service';
import {Sessao} from '../../sessao/sessao.model';
import {SessaoService} from '../../sessao/sessao.service';


@Component({
  selector: 'app-assunto-create',
  templateUrl: './assunto-create.component.html',
  styleUrls: ['./assunto-create.component.css']
})
export class AssuntoCreateComponent implements OnInit {

  sessao: Sessao = { _id: '61ffc6c31b187e2a1c8b7fe3', nome: '', nick: '', auxiliar: '', tipo:0, idLogado:'' };
  assunto: Assunto = {
    nomeAssunto: '', disciplina_idDisciplina: ''
  }

disciplina: Disciplina[] = []
colunas = ['nomeDisciplina', '_id']




files: File | null = null;



  constructor(private disciplinaService: DisciplinaService, private assuntoService: AssuntoService,
    private router: Router, private sessaoService: SessaoService
    ) { }

  ngOnInit(): void {
    this.sessaoService.read().subscribe(sessao => {
      this.sessao = sessao[0]
       })
    this.disciplinaService.read().subscribe(disciplina => {
      this.disciplina = disciplina
      console.log(disciplina)
      })

    if (this.assuntoService.salvar) {
      this.assunto = { nomeAssunto: '', disciplina_idDisciplina: '' }
    } else {
      this.assunto = this.assuntoService.assunto;
    }
  }






  cancelar(): void {
    this.router.navigate(['./'])
  }

  selecao: Number =0;
  criarAssunto(): void {
    if(this.sessao.tipo==1){



    this.assuntoService.create(this.assunto).subscribe(() => {
      this.assuntoService.showMessage('Assunto Cadastrado!')
      this.router.navigate(['/'])
    })

  }else{
    alert("Privilégios insuficientes para ação. Favor fazer login em conta privilegiada");
    this.router.navigate(['./login'])
    }

  }
}

