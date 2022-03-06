import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagemService } from 'src/app/componentes/imagem/imagem.service';
import { DisciplinaService} from 'src/app/componentes/disciplina/disciplina.service'
import { AssuntoService} from 'src/app/componentes/assunto/assunto.service'


@Component(
  {
    selector: 'app-manutencao-imagens',
    templateUrl: './manutencao-imagens.component.html',
    styleUrls: ['./manutencao-imagens.component.css']
  })
export class ManutencaoImagensComponent implements OnInit {

  constructor(private imagemService: ImagemService, private disciplinaService: DisciplinaService, private assuntoService: AssuntoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navegarImagemCreate(): void {
    this.imagemService.salvar = true;
    this.router.navigate(['/imagem/create'])
  }
  navegarAssuntoCreate(): void {
    this.assuntoService.salvar = true;
    this.router.navigate(['/assunto/create'])
  }
  navegarDisciplinaCreate(): void {
    this.disciplinaService.salvar = true;
    this.router.navigate(['/disciplina/create'])
  }
}
