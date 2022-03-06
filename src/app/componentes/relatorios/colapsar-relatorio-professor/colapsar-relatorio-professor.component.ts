import { Component, OnInit } from '@angular/core';
import { Professor } from '../../professor/professor.model';
import { ProfessorService } from '../../professor/professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colapsar-relatorio-professor',
  templateUrl: './colapsar-relatorio-professor.component.html',
  styleUrls: ['./colapsar-relatorio-professor.component.css']
})
export class ColapsarRelatorioProfessorComponent implements OnInit {


  professor: Professor[] = []
  colunas = ['nome', 'nick', 'status']

  constructor(private professorService : ProfessorService, private router: Router) { }

  ngOnInit(): void {
    this.professorService.read().subscribe(professor => {
      this.professor = professor
    }
    )
  }

}









