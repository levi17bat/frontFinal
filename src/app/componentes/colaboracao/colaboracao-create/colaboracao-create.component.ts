import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboracaoService } from './../colaboracao.service';
import { Colaboracao } from '../colaboracao.model';
import { Imagem } from './../../imagem/imagem.model';
import { ImagemService } from './../../imagem/imagem.service';
import { UploadFileService } from './../../../upload-file/upload-file.service'
import { Sessao } from '../../sessao/sessao.model';
import { SessaoService } from '../../sessao/sessao.service';


@Component({
  selector: 'app-colaboracao-create',
  templateUrl: './colaboracao-create.component.html',
  styleUrls: ['./colaboracao-create.component.css']
})

export class ColaboracaoCreateComponent implements OnInit {

  sessao: Sessao = { _id: '61ffc6c31b187e2a1c8b7fe3', nome: '', nick: '', auxiliar: '', tipo: 0, idLogado: '' };
  imagem: Imagem = { _id: '', nomeImagem: '', texto: '', figura: '', audio: '', assunto_idAssunto: '', colaboracoes: [], professor_idProfessor: '', status: true };
  files2: File | null = null;
  filename: string = this.randomString();



  colaboracao: Colaboracao = {
    descricao: '', audio: '', imagem_idImagem: '', autor: '', status: true
  }
  constructor(
    private imagemService: ImagemService,
    private colaboracaoService: ColaboracaoService,
    private router: Router,
    private service: UploadFileService,
    private sessaoService: SessaoService
  ) { }

  randomString() {
    //define a variable consisting alphabets in small and capital letter  
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

    //specify the length for the new string  
    let lenString = 32;
    let randomstring = '';

    //loop to select a new character in each iteration  
    for (let i = 0; i < lenString; i++) {
      let rnum = Math.floor(Math.random() * characters.length);
      randomstring += characters.substring(rnum, rnum + 1);
    }
    return randomstring;
  }


  ngOnInit(): void {
    this.sessaoService.read().subscribe(sessao => {
      this.sessao = sessao[0]
       })
  
    this.imagem = this.imagemService.imagem;
    if (this.colaboracaoService.salvar) {
      this.colaboracao = { descricao: '', audio: '', imagem_idImagem: '', autor: '', status: true }
    } else {
      this.colaboracao = this.colaboracaoService.colaboracao;
    }
  }



  criarColaboracao(): void {
    console.log("Tipo = "+this.sessao.tipo+ "Mas o nome é "+this.sessao.nome);

    if (this.sessao.tipo==1) {
      this.colaboracao.imagem_idImagem = <String>this.imagem._id;
      this.colaboracao.audio = this.filename + "." + <String>this.files2?.name;;
      this.colaboracao.autor = this.sessao.nome;

      this.onUpload();
      this.colaboracaoService.create(this.colaboracao).subscribe(() => {
        this.colaboracaoService.showMessage('Colaboracao cadastrada com sucesso');
        this.router.navigate(['/imagens']);

      })
    } else if (this.sessao.tipo===2) {
      this.colaboracao.imagem_idImagem = <String>this.imagem._id;
      this.colaboracao.audio = this.filename + "." + <String>this.files2?.name;;
      this.colaboracao.autor = this.sessao.nome;

      this.onUpload();
      this.colaboracaoService.create(this.colaboracao).subscribe(() => {
        this.colaboracaoService.showMessage('Colaboracao cadastrada com sucesso');
        this.router.navigate(['/imagens']);

      })
    } 
    
    
    
    
    
    else if((this.sessao.tipo!=1) && (this.sessao.tipo!=2)){
      alert("Privilégios insuficientes para ação. Favor fazer login em conta privilegiada");
      this.router.navigate(['./login'])
    }


  }



  onUpload() {
    if (this.files2) {

      this.imagemService.upload2(this.files2, this.filename, 'http://localhost:3000/uploads')
        .subscribe(response => console.log('Concluída'));
    }

  }







  cancelar(): void {
    this.router.navigate(['/'])
  }

  onChange2(event: any) {
    console.log(event);

    const selectedFile = <FileList>event.srcElement.files;
    const filesName2 = [];
    filesName2.push(selectedFile[0]);
    this.files2 = selectedFile[0];
  }

}
