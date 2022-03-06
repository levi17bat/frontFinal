import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario/usuario.model';
import {UsuarioService} from '../../usuario/usuario.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-colapsar-relatorio-usuario',
  templateUrl: './colapsar-relatorio-usuario.component.html',
  styleUrls: ['./colapsar-relatorio-usuario.component.css']
})
export class ColapsarRelatorioUsuarioComponent implements OnInit {

  usuario: Usuario[] = []
  colunas = ['nome', 'nick', 'status']

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuario => {
      this.usuario = usuario
    }
    )
  }

}

