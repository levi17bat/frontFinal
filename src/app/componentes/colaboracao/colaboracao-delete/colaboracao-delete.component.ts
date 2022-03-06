import { Router } from '@angular/router';
import { ColaboracaoService } from './../colaboracao.service';
import { Colaboracao } from './../colaboracao.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboracao-delete',
  templateUrl: './colaboracao-delete.component.html',
  styleUrls: ['./colaboracao-delete.component.css']
  })




  export class ColaboracaoDeleteComponent implements OnInit {
  colaboracao: Colaboracao = { descricao: '', audio: '',imagem_idImagem: '', autor: '', status: true}
  
  constructor(
  private colaboracaoService: ColaboracaoService, private router: Router
  ) { }




  ngOnInit(): void {
  this.colaboracao = this.colaboracaoService.colaboracao;
  }



  delete(): void{
  this.colaboracaoService.delete(this.colaboracao).subscribe(() => {
  this.colaboracaoService.showMessage('Colaboracao excluída com sucesso!')
  this.router.navigate(['/imagens'])
    })
  }

  
  cancelar(): void {
  this.router.navigate(['/imagens'])
  }
}
  








