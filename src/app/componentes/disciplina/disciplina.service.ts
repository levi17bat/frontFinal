
import { HttpClient } from '@angular/common/http';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class DisciplinaService {


  url = "http://localhost:3000/disciplina"
  salvar = false;

  disciplina: Disciplina = {
  nomeDisciplina: '',
  assuntos: [], 
  professor_idProfessor: ''
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


      create(disciplina: Disciplina): Observable<Disciplina>{
      return this.http.post<Disciplina>(this.url, disciplina)
    }

    
    read():Observable<Disciplina[]>{
      return this.http.get<Disciplina[]>(this.url);
      }

}










