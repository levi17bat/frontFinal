import { Component, OnInit } from '@angular/core';
import { SessaoService } from './../sessao.service';
import { Sessao } from '../../sessao/sessao.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-sessao-read',
  templateUrl: './sessao-read.component.html',
  styleUrls: ['./sessao-read.component.css']
})
export class SessaoReadComponent implements OnInit {

sessao: Sessao[] = []
colunas = ['nome','nick','auxiliar']

  constructor(private sessaoService: SessaoService,
    private router: Router) { }

  ngOnInit(): void {
    this.sessaoService.read().subscribe(sessao => {
      this.sessao = sessao

      })
  }
}




