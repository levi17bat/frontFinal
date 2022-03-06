import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Professor } from '../professor/professor.model';
import { Usuario } from '../usuario/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {

  url = "http://localhost:3000/imagem"

  salvar = true;


  professor: Professor = {
    nome: '',
    nick: '',
    senha: '',
    status: true,
    imagens: []
  }


  usuario: Usuario = {
    nome: '',
    nick: '',
    senha: '',
    status: true,
  }




  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  readUser(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  readProf(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.url);
  }


  createUser(imagem: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, this.usuario)
  }

  createProf(imagem: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.url, this.professor)
  }


}











