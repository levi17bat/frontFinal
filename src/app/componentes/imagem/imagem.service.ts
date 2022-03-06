import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Imagem } from './imagem.model';
import { Observable } from 'rxjs';
import { HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImagemService {

  url = "http://localhost:3000/imagem"

  salvar = true;

  imagem: Imagem = {
    nomeImagem: '',
    texto: '',
    figura: '',
    audio: '',
    assunto_idAssunto: '',
    colaboracoes: [],
    professor_idProfessor: '', 
    status: true
  }

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(imagem: Imagem): Observable<Imagem> {
    return this.http.post<Imagem>(this.url, imagem)
  }

  update(imagem: Imagem): Observable<Imagem> {
    const urlAlterar = `${this.url}/${imagem._id}`;
    return this.http.patch<Imagem>(urlAlterar, imagem)
  }




  read(): Observable<Imagem[]> {
    return this.http.get<Imagem[]>(this.url);
  }





  delete(imagem: Imagem): Observable<Imagem> {
    const urlExcluir = `${this.url}/${imagem._id}`;
    return this.http.delete<Imagem>(urlExcluir)
  }

  
  upload(file: File, filename: string, url: string){
    const formData = new FormData();
    formData.append ('file', file, filename + '.' + file.type.split('/')[1]);
    console.log("Nome do Arquivo = "+file.name);
    console.log("URL = "+url);
    const request = new HttpRequest('POST', url, formData);
    // return this.http.request(request);
    return this.http.post(url, formData );
    }

    upload2(file: File, filename: string, url: string){
      const formData = new FormData();
      formData.append ('file', file, filename + '.' + file.name);
      console.log("Nome do Arquivo = "+file.name);
      console.log("URL = "+url);
      const request = new HttpRequest('POST', url, formData);
      // return this.http.request(request);
      return this.http.post(url, formData );
      }

}







