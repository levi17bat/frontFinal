import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagemService } from './../imagem.service';
import { Imagem } from '../imagem.model';
import { UploadFileService } from '../../../upload-file/upload-file.service';
import { Assunto } from '../../assunto/assunto.model'
import { AssuntoService } from '../../assunto/assunto.service';
import {Sessao} from '../../sessao/sessao.model';
import {SessaoService} from '../../sessao/sessao.service';


@Component({
  selector: 'app-imagem-create',
  templateUrl: './imagem-create.component.html',
  styleUrls: ['./imagem-create.component.css']
})
export class ImagemCreateComponent implements OnInit {
  files: File | null = null;
  files2: File | null = null;
  filename: string = this.randomString();
  imagem: Imagem = {
    nomeImagem: '', assunto_idAssunto: '', texto: '', figura: '', audio: '', professor_idProfessor: '', colaboracoes: [], status: true
  }

  sessao: Sessao = { _id: '61ffc6c31b187e2a1c8b7fe3', nome: '', nick: '', auxiliar: '', tipo:0, idLogado:'' };

  assuntos: Assunto[] = []
  colunas = ['nomeAssunto', '_id']
  




  constructor(
    private imagemService: ImagemService,
    private router: Router,
    private service: UploadFileService,
    private assuntoService: AssuntoService,
    private sessaoService: SessaoService,
    ) { }





  ngOnInit(): void {

    this.assuntoService.read().subscribe(assunto => {
      this.assuntos = assunto
      })

      this.sessaoService.read().subscribe(sessao => {
       this.sessao = sessao[0]
        })


    if (this.imagemService.salvar) {
      this.imagem = { nomeImagem: '', assunto_idAssunto: '', texto: '', figura: '', audio: '', professor_idProfessor: '', colaboracoes: [], status: true }
    } else {
      this.imagem = this.imagemService.imagem;
    }

  }

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


  criarImagem(): void {
   

    if(this.sessao.tipo==1){
    this.imagem.colaboracoes = [];
    this.imagem.professor_idProfessor = this.sessao.idLogado;
    this.imagem.figura = this.filename + "." + this.files?.type.split('/')[1];;
    this.imagem.audio =  this.filename + "." +<String>this.files2?.name;;

    if (this.imagemService.salvar) {
      this.onUpload();

      this.imagemService.create(this.imagem).subscribe(() => {
        this.imagemService.showMessage('Imagem cadastrada com sucesso!')

        this.router.navigate(['/imagens'])
      })
    } else {
      this.imagemService.update(this.imagem).subscribe(() => {
        this.imagemService.showMessage('Imagem alterada com sucesso!')
        this.router.navigate(['/imagens'])
      })
    }
  } 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  else{
    alert("Privilégios insuficientes para ação. Favor fazer login em conta privilegiada");
    this.router.navigate(['./login'])
    }
}
  cancelar(): void {
    this.router.navigate(['./'])
  }
  cadastrarAssunto() {
    this.router.navigate(['./'])
  }




  onChange(event: any) {
    console.log(event);

    const selectedFile = <FileList>event.srcElement.files;
    const filesName = [];
    filesName.push(selectedFile[0]);
    this.files = selectedFile[0];
  }

  onChange2(event: any) {
    console.log(event);

    const selectedFile = <FileList>event.srcElement.files;
    const filesName2 = [];
    filesName2.push(selectedFile[0]);
    this.files2 = selectedFile[0];
  }




  onUpload() {
    if (this.files && this.files2) {
      this.imagemService.upload(this.files, this.filename, 'http://localhost:3000/uploads')
        .subscribe(response => console.log('Parte1 Concluída'));
        this.imagemService.upload2(this.files2, this.filename, 'http://localhost:3000/uploads')
        .subscribe(response => console.log('Parte2 Concluída'));
    }

  }


}
















