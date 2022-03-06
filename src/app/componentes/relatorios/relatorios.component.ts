import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  selecao: Number =0;
  criarRelatorio(): void {
    this.selecao = +this.selecao;
    if(this.selecao==1){
      this.router.navigate(['/relatorio/colapsar/professor'])
    }else if(this.selecao==2){
      this.router.navigate(['/relatorio/colapsar/usuario'])
    }else  if(this.selecao==3){
      this.router.navigate(['/relatorio/colapsar'])
    }else
 alert('Selecione uma das opções Disponíveis');

}

}











