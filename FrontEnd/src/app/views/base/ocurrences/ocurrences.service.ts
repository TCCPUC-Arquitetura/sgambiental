import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Ocurrence } from './ocurrence';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OcurrencesService {

  promiseResult: Ocurrence;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(

    private client: HttpClient

  ) { }

    getOcurrencesList(){
      return this.client.get('https://907e3d5e-47ba-4503-a394-6fe53c2615a9.mock.pstmn.io/api/monitoramentobarragemjson/ocorrencias', this.httpOptions).pipe(map((data:any)=>{
        return data;
      }))
    }

}
