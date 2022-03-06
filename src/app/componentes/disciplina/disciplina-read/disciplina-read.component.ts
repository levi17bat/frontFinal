import { Component, OnInit } from '@angular/core';
import {Disciplina} from '../disciplina.model';
import {DisciplinaService} from '../disciplina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplina-read',
  templateUrl: './disciplina-read.component.html',
  styleUrls: ['./disciplina-read.component.css']
})
export class DisciplinaReadComponent implements OnInit {

  disciplina: Disciplina[] = []
colunas = ['nomeDisciplina','_id']




  constructor(private disciplinaService: DisciplinaService,
  private router: Router) { }

  ngOnInit(): void {
    this.disciplinaService.read().subscribe(disciplina => {
      this.disciplina = disciplina
      })
  }

}