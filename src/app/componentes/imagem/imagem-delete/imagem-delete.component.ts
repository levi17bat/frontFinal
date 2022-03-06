import { Router } from '@angular/router';
import { ImagemService } from './../imagem.service';
import { Imagem } from './../imagem.model';
import { Component, OnInit } from '@angular/core';
import { Sessao } from '../../sessao/sessao.model';
import { SessaoService } from '../../sessao/sessao.service';



@Component({
    selector: 'app-imagem-delete',
    templateUrl: './imagem-delete.component.html',
    styleUrls: ['./imagem-delete.component.css']
})

export class ImagemDeleteComponent implements OnInit {


    sessao: Sessao = { _id: '61ffc6c31b187e2a1c8b7fe3', nome: '', nick: '', auxiliar: '', tipo: 0, idLogado: '' };

    imagem: Imagem = { nomeImagem: '', assunto_idAssunto: '', texto: '', figura: '', audio: '', colaboracoes: [], professor_idProfessor: '', status: true }
    constructor(
        private imagemService: ImagemService, private router: Router, private sessaoService: SessaoService
    ) { }



    ngOnInit(): void {
        this.sessaoService.read().subscribe(sessao => {
            this.sessao = sessao[0]
        })  
        this.imagem = this.imagemService.imagem;
    }

    delete(): void {
        if ((this.sessao.tipo == 1) && (this.imagem.professor_idProfessor == this.sessao.idLogado)) {

        this.imagemService.delete(this.imagem).subscribe(() => {
            this.imagemService.showMessage('Imagem excluída com sucesso!')
            this.router.navigate(['/imagens'])
        })
    }else{
        alert("Privilégios insuficientes para ação. Favor fazer login em conta privilegiada");
        this.router.navigate(['./login'])
        }
    }

    cancelar(): void {
        this.router.navigate(['/imagens'])
    }
}