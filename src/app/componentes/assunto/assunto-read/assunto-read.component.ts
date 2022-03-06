import { Component, OnInit } from '@angular/core';
import {Assunto} from '../assunto.model';
import {AssuntoService} from '../assunto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assunto-read',
  templateUrl: './assunto-read.component.html',
  styleUrls: ['./assunto-read.component.css']
})
export class AssuntoReadComponent implements OnInit {

assuntos: Assunto[] = []
colunas=['_id','nomeAssunto','disciplina_idDisciplina']


  constructor( private assuntoService: AssuntoService, private router: Router) { }

  ngOnInit(): void {
    this.assuntoService.read().subscribe(assunto =>{
      this.assuntos = assunto

    })
  }

}


