import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/componentes/usuario/usuario.service';




@Component(
  {
  selector: 'app-manutencao-usuario',
  templateUrl: './manutencao-usuario.component.html',
  styleUrls: ['./manutencao-usuario.component.css']
})
export class ManutencaoUsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
    private router: Router
    ){}

  ngOnInit(): void {
  }

  navegarUsuarioCreate(): void{
    this.usuarioService.salvar = true;
    this.router.navigate(['/usuario/create'])
    }
}
