import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from './../professor.service';
import { Professor } from '../professor.model';
import { Imagem } from '../../imagem/imagem.model';


@Component({
  selector: 'app-professor-create',
  templateUrl: './professor-create.component.html',
  styleUrls: ['./professor-create.component.css']
})
export class ProfessorCreateComponent implements OnInit {

  professor: Professor = {
    nome: '', nick:'',  senha: '', status : true, imagens : []
    }

  constructor(private professorService: ProfessorService,
    private router: Router) { }

    ngOnInit(): void {
      if(this.professorService.salvar){
      this.professor = { nome: '', nick:'',  senha: '', status : true, imagens : []}
      }else{
      this.professor = this.professorService.professor;
      }
  }

 
cancelar(): void{
this.router.navigate(['./'])
}


criarProfessor(): void{
  console.log("Nome entrando = "+this.professor.nome);
if(this.professorService.salvar){
this.professorService.create(this.professor).subscribe( () => {
this.professorService.showMessage('Professor cadastrado com sucesso!')
this.router.navigate(['/professor'])
})}
}


}


