import { ColaboracaoService } from './../colaboracao.service';
import { Colaboracao } from './../colaboracao.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-colaboracao-read',
  templateUrl: './colaboracao-read.component.html',
  styleUrls: ['./colaboracao-read.component.css']
})
export class ColaboracaoReadComponent implements OnInit {


  colaborac: Colaboracao[] = []
  colunas = ['descricao','audio','imagem_idImagem','autor']


  constructor(private colaboracaoService: ColaboracaoService,
    private router: Router) { }



  ngOnInit(): void {
    this.colaboracaoService.read().subscribe(colaboracao => {
      this.colaborac = colaboracao;
    })
  }

  editar(colaboracao: Colaboracao): void {
    console.log("testando edição de colaboração ", colaboracao);
    this.colaboracaoService.salvar = false;
    this.colaboracaoService.colaboracao = colaboracao;
    this.router.navigate(['/colaboracao/create'])
  }





  excluir(colaboracao: Colaboracao): void {
    this.colaboracaoService.colaboracao = colaboracao;
    this.router.navigate(['/colaboracao/delete'])
  }
}


