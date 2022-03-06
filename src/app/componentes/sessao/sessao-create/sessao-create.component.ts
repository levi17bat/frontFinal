import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessaoService } from './../sessao.service';
import { Sessao } from '../sessao.model';



@Component({
  selector: 'app-sessao-create',
  templateUrl: './sessao-create.component.html',
  styleUrls: ['./sessao-create.component.css']
})
export class SessaoCreateComponent implements OnInit {

  sessao: Sessao = {
    nome: '', nick: '', idLogado: '', auxiliar: '', tipo: 0
  }

  constructor(private sessaoService: SessaoService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.sessaoService.salvar) {
      this.sessao = {   nome: '', nick: '', idLogado: '', auxiliar: '', tipo: 0 }
    } else {
      this.sessao = this.sessaoService.sessao;
    }
  }


  cancelar(): void {
    this.router.navigate(['./'])
  }


  criarSessao(): void {

    if (this.sessaoService.salvar) {
      this.sessaoService.create(this.sessao).subscribe(() => {
        this.sessaoService.showMessage('Sessao cadastrada com sucesso!')
        this.router.navigate(['/'])
      })
    } else {
      this.sessaoService.update(this.sessao).subscribe(() => {
        this.sessaoService.showMessage('Sessão alterada com sucesso!')
        this.router.navigate(['/imgens'])
      })
    }


  }


}