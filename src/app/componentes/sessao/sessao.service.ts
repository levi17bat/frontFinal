import { HttpClient } from '@angular/common/http';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Sessao } from './sessao.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class SessaoService {

  url = "http://localhost:3000/sessao"
  
  sessao: Sessao = {
  nome: '',
  nick:'',
  auxiliar: '',
  tipo: 0,
  idLogado: ''   
  }

  salvar = true;

  constructor(  
    private snackBar: MatSnackBar,
    private http: HttpClient
    ){ }

    showMessage(msg: string): void {
      this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
      });
 }

read():Observable<Sessao[]>{
return this.http.get<Sessao[]>(this.url);
}

create(sessao: Sessao): Observable<Sessao>{
return this.http.post<Sessao>(this.url, sessao)
}


update(sessao: Sessao): Observable<Sessao> {
  console.log("O que está chegando");
  console.log("Nome = "+sessao.nome);
  console.log("Nick = "+sessao.nick);
  console.log("Id = "+sessao._id);
  console.log("Auxiliar = "+sessao.auxiliar);
  const urlAlterar = `${this.url}/${sessao._id}`;
  return this.http.patch<Sessao>(urlAlterar, sessao)
}






}

