import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from 'src/app/componentes/professor/professor.service';

@Component({
  selector: 'app-manutencao-professor',
  templateUrl: './manutencao-professor.component.html',
  styleUrls: ['./manutencao-professor.component.css']
})
export class ManutencaoProfessorComponent implements OnInit {

  constructor(private professorService: ProfessorService,
    private router: Router
    ){}

  ngOnInit(): void {
  }

  navegarProfessorCreate(): void{
    this.professorService.salvar = true;
    this.router.navigate(['/professor/create'])
    }

}
