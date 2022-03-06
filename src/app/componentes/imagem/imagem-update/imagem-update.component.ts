import { Component, OnInit } from '@angular/core';
import { Imagem } from '../imagem.model';
import { ImagemService } from '../imagem.service';
import { Router } from '@angular/router';
import { Sessao } from '../../sessao/sessao.model';
import { SessaoService } from '../../sessao/sessao.service';
import { Assunto } from '../../assunto/assunto.model'
import { AssuntoService } from '../../assunto/assunto.service';


@Component({
  selector: 'app-imagem-update',
  templateUrl: './imagem-update.component.html',
  styleUrls: ['./imagem-update.component.css']
})
export class ImagemUpdateComponent implements OnInit {


  sessao: Sessao = { _id: '61ffc6c31b187e2a1c8b7fe3', nome: '', nick: '', auxiliar: '', tipo: 0, idLogado: '' };
  imagem: Imagem = {
    nomeImagem: '', assunto_idAssunto: '', texto: '', figura: '', audio: '', professor_idProfessor: '', colaboracoes: [], status: true
  }

  assuntos: Assunto[] = []
  colunas = ['nomeAssunto', '_id']
  constructor(private imagemService: ImagemService, private router: Router, private sessaoService: SessaoService, private assuntoService: AssuntoService,) { }

  ngOnInit(): void {
    this.assuntoService.read().subscribe(assunto => {
      this.assuntos = assunto
      })


    this.sessaoService.read().subscribe(sessao => {
      this.sessao = sessao[0]
    })

    this.imagem = this.imagemService.imagem;
  }


  alterarImagem(): void {
    if ((this.sessao.tipo == 1) && (this.imagem.professor_idProfessor == this.sessao.idLogado)) {
      this.imagem.figura = "";
      this.imagem.audio = "";
      this.imagem.colaboracoes = [];
      this.imagem.professor_idProfessor = this.sessao.idLogado;




      this.imagemService.update(this.imagem).subscribe(() => {
        this.imagemService.showMessage('Imagem alterada com sucesso!')
        this.router.navigate(['/imagens'])
      })

    } else {
      this.imagemService.showMessage("Privilégios insuficientes para ação. Favor fazer login em conta privilegiada. Sessão encerrada");
      this.router.navigate(['./login'])
    }






  }


  cancelar(): void {
    this.router.navigate(['./'])
  }


}
