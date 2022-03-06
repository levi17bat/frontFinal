import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProfessorService } from '../../professor/professor.service';

@Component({
  selector: 'app-criacao-create',
  templateUrl: './criacao-create.component.html',
  styleUrls: ['./criacao-create.component.css']
})
export class CriacaoCreateComponent implements OnInit {

  constructor(private router: Router, private professorService: ProfessorService,private usuarioService: UsuarioService, ){ }

  ngOnInit(): void {
  }

  preparaInclusaoProf(){
    this.professorService.salvar = true;
    this.router.navigate(['professor/create'])
  }

  preparaInclusaoUsuario(){
  this.usuarioService.salvar = true;
  this.router.navigate(['usuario/create'])
  }
}


