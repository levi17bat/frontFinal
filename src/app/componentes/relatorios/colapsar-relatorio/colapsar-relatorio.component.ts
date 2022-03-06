import { Component, OnInit } from '@angular/core';
import { Professor } from './professor.model';
import { Usuario } from '../../usuario/usuario.model';
import { RelatoriosService } from '../relatorios.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { ProfessorService } from '../../professor/professor.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-colapsar-relatorio',
  templateUrl: './colapsar-relatorio.component.html',
  styleUrls: ['./colapsar-relatorio.component.css']
})


export class ColapsarRelatorioComponent implements OnInit {

  professor: Professor[] = []
  usuario: Usuario[] = []

  colunas = ['nome', 'nick', 'status']



  constructor(private relatorioService: RelatoriosService, private usuarioService: UsuarioService, private professorService: ProfessorService, private router: Router) { }
  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuario => {
      this.usuario = usuario
    }
    )
    this.professorService.read().subscribe(professor => {
      this.professor = professor
    }
    )
  }
}

