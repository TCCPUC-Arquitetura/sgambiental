import { Component, OnInit } from '@angular/core';
import { CadastroService } from './cadastro.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items;
  title = 'sgaambiental-frontend';



  constructor(
    private cadastroService: CadastroService
  ) {}


  ngOnInit(){

    this.items =  this.cadastroService.getCadastros() ;

  }


}


