import { HttpClient } from '@angular/common/http';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Professor } from './professor.model';
import { Observable } from 'rxjs';
import { Imagem } from '../imagem/imagem.model'

@Injectable({
  providedIn: 'root'
})

export class ProfessorService {

  url = "http://localhost:3000/professor"
  salvar = true;
  professor: Professor = {
  nome: '',
  nick:'',
  senha: '',
  status: true,
  imagens: []
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

read():Observable<Professor[]>{
return this.http.get<Professor[]>(this.url);
}

create(professor: Professor): Observable<Professor>{
return this.http.post<Professor>(this.url, professor)
}

update(professor: Professor): Observable<Professor> {
const urlAlterar = `${this.url}/${professor._id}`;
return this.http.patch<Professor>(urlAlterar, professor)
}

}

