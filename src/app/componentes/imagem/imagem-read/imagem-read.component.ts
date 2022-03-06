import { ImagemService } from './../imagem.service';
import { Imagem } from './../imagem.model';
import { Component, OnInit } from '@angular/core';
import { ColapsarImagemComponent } from './../colapsar-imagem/colapsar-imagem.component';
import { Router } from '@angular/router';
import { UploadFileService } from '../../../upload-file/upload-file.service';
import { Sessao } from '../../sessao/sessao.model';
import { SessaoService } from '../../sessao/sessao.service';


@Component({
  selector: 'app-imagem-read',
  templateUrl: './imagem-read.component.html',
  styleUrls: ['./imagem-read.component.css']
})
export class ImagemReadComponent implements OnInit {
  sessao: Sessao = { _id: '61ffc6c31b187e2a1c8b7fe3', nome: '', nick: '', auxiliar: '', tipo: 0, idLogado: '' };
  imagem: Imagem[] = []
  colunas = ['nomeImagem', 'texto', 'figura', 'audio', 'assunto_idAssunto', 'acoes']
  files: File | null = null;
  sta: Boolean[] = [];

  constructor(private imagemService: ImagemService,
    private router: Router, private uploadService: UploadFileService, private sessaoService: SessaoService) { }



  ngOnInit(): void {
    this.sessaoService.read().subscribe(sessao => {
      this.sessao = sessao[0]
    })


    this.imagemService.read().subscribe(imagem => {
      this.imagem = imagem
      console.log(imagem)
    })
  }

  editar(imagem: Imagem): void {
    if (this.sessao.tipo == 1) {

      this.imagemService.imagem = imagem;
      this.router.navigate(['/imagem/update'])

    } else {
      alert("Privilégios insuficientes para ação. Favor fazer login em conta privilegiada");
      this.router.navigate(['./login'])
    }

  }


  excluir(imagem: Imagem): void {
    if (this.sessao.tipo == 1) {
      this.imagemService.imagem = imagem;
      this.router.navigate(['/imagem/delete'])
    } else {
      alert("Privilégios insuficientes para ação. Favor fazer login em conta privilegiada");
      this.router.navigate(['./login'])
    }
  }

  visualizar(imagem: Imagem): void {
    this.imagemService.imagem = imagem;
    this.router.navigate(['/imagem/colapsar'])
  }


}

