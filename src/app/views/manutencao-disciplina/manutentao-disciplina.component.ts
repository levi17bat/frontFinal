import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DisciplinaService} from 'src/app/componentes/disciplina/disciplina.service';



@Component({
  selector: 'app-manutentao-disciplina',
  templateUrl: './manutentao-disciplina.component.html',
  styleUrls: ['./manutentao-disciplina.component.css']
})
export class ManutentaoDisciplinaComponent implements OnInit {

  constructor(private disciplinaService: DisciplinaService,
    private router: Router) { }

  ngOnInit(): void {
  }


  navegarDisciplina(){
    this.disciplinaService.salvar = true;
    this.router.navigate(['/disciplina/create'])
  }

}
