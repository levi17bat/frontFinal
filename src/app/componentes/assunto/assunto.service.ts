import { HttpClient } from '@angular/common/http';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Assunto } from './assunto.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AssuntoService {

  url = "http://localhost:3000/assunto"
  salvar = true;
  assunto: Assunto = {
nomeAssunto: '', disciplina_idDisciplina: ''
  }



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

read():Observable<Assunto[]>{
return this.http.get<Assunto[]>(this.url);
}

create(assunto: Assunto): Observable<Assunto>{
return this.http.post<Assunto>(this.url, assunto)
}

update(assunto: Assunto): Observable<Assunto> {
const urlAlterar = `${this.url}/${assunto._id}`;
return this.http.patch<Assunto>(urlAlterar, assunto)
}
}

