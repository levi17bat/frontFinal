import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboracaoService } from 'src/app/componentes/colaboracao/colaboracao.service';




@Component({
  selector: 'app-manutencao-colaboracao',
  templateUrl: './manutencao-colaboracao.component.html',
  styleUrls: ['./manutencao-colaboracao.component.css']
})
export class ManutencaoColaboracaoComponent implements OnInit {

  constructor(private colaboracaoService: ColaboracaoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  navegarColaboracaoCreate(){
    this.colaboracaoService.salvar = true;
    this.router.navigate(['/colaboracao/create'])
  }

}
