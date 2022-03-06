import { ImagemService } from './../imagem.service';
import { Imagem } from './../imagem.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboracaoService} from '../../colaboracao/colaboracao.service';
import { Colaboracao} from '../../colaboracao/colaboracao.model';
import { SessaoService } from '../../sessao/sessao.service';
import { Sessao } from '../../sessao/sessao.model';

@Component({
  selector: 'app-colapsar-imagem',
  templateUrl: './colapsar-imagem.component.html',
  styleUrls: ['./colapsar-imagem.component.css']
})


export class ColapsarImagemComponent implements OnInit {

  colaboracao : Colaboracao ={ descricao: '', audio: '', imagem_idImagem:'', autor:'', status: true};
  imagem: Imagem = { nomeImagem: '', texto: '', figura: '', audio: '', assunto_idAssunto: '', colaboracoes: [], professor_idProfessor: '', status: true };
  sessao : Sessao ={ _id:'61ffc6c31b187e2a1c8b7fe3', nome: '', nick: '', auxiliar: '', tipo: 0, idLogado: ''};
  
  colaboracoes: Colaboracao[] = []
  colunas = ['descricao','audio','autor']




  constructor(private colaboracaoService : ColaboracaoService, private imagemService: ImagemService, private sessaoService: SessaoService,  private router: Router) { }



  ngOnInit(): void {

    
    this.sessao = this.sessaoService.sessao;
    this.imagem = this.imagemService.imagem;
    this.colaboracao = this.colaboracaoService.colaboracao;

    this.sessao._id="61ffc6c31b187e2a1c8b7fe3";


    this.sessao.auxiliar=<String>this.imagem._id;


    this.sessaoService.update(this.sessao).subscribe(()=>{});
   

    this.colaboracao.imagem_idImagem = <String>this.imagem._id;
    this.colaboracaoService.read().subscribe(colaboracao => {
      this.colaboracoes = colaboracao
   })
}



  novaColaboracao(): void {
    this.imagemService.imagem = this.imagem;
    this.router.navigate(['colaboracao/create'])
  }

  cancelar(): void {
    this.router.navigate(['/'])
  }
}




