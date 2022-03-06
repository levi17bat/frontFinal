import { ProfessorService } from './../professor.service';
import { Professor } from './../professor.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-professor-read',
  templateUrl: './professor-read.component.html',
  styleUrls: ['./professor-read.component.css']
})
export class ProfessorReadComponent implements OnInit {

  professor: Professor[] = []
colunas = ['nome', 'nick']

constructor(private professorService: ProfessorService,
  private router: Router){ }



  ngOnInit(): void {
    this.professorService.read().subscribe(professor => {
      this.professor = professor
      console.log(professor)
      })
  }

  editar(professor: Professor): void {
    console.log("testando edição do professor", professor);
    this.professorService.salvar = false;
    this.professorService.professor = professor;
    this.router.navigate(['/professor/create'])
    }

    excluir(professor: Professor): void {
      this.professorService.professor = professor;
      this.router.navigate(['/professor/delete'])
      }


}


