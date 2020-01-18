import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {


  constructor(
    private http: HttpClient
  ) {}

  getCadastros() {
    return this.http.get('http://localhost:5000/cadastro');
  }
}
